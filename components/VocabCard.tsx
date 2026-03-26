import React, { useState, useEffect } from 'react';
import { VocabGrammarQuestion } from './src/types';

interface Props {
  data: any; 
  onNext: () => void;
  isLast: boolean;
  onFinish: () => void;
  onCorrect: () => void;
  onWrong: () => void;
  // [추가] 뒤로가기 함수 타입 정의
  onBack?: () => void;
  // [추가] 초기 필터값 타입 정의
  initialFilter?: string;
  isWordbook?: boolean;
  /* ✨ [수정] 부모에게 다음 페이지 이동 함수를 전달할 수 있도록 타입 확장 */
  onStartTest?: (questions: any[], onNextPage?: () => void) => void;
  /* ✨ [오류 수정 포인트 1] 부모가 관리하는 페이지 상태를 주입받음 (단어장 방식) */
  grammarPage?: number;
  setGrammarPage?: (page: number) => void;
}

const VocabCard: React.FC<Props> = ({ 
  data, 
  onNext, 
  isLast, 
  onFinish, 
  onCorrect, 
  onWrong,
  onBack,
  initialFilter = "전체",
  isWordbook = false,
  onStartTest,
  /* ✨ 연결 */
  grammarPage,
  setGrammarPage
}) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  
  /* ✨ [오류 수정 포인트 2] 내부 상태 useState(1)을 삭제하고, 부모가 준 값(grammarPage)을 사용함 */
  const currentPage = grammarPage || 1;
  const setCurrentPage = setGrammarPage || (() => {});
  
  const itemsPerPage = 5;

  const [bookmarks, setBookmarks] = useState<Record<string, boolean>>({});
  // [수정] App에서 넘어온 initialFilter를 초기값으로 사용
  const [subFilter, setSubFilter] = useState<string>(initialFilter);

  const toggleBookmark = (id: string) => {
    setBookmarks(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const [inputValue, setInputValue] = useState<string>(currentPage.toString());

  // ✨ [TTS 추가] 일본어 음성 재생 함수
  const handleSpeak = (text: string) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel(); // 이전 재생 멈춤
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ja-JP";
    utterance.rate = 0.9;
    
    // 고품질 목소리 선택 시도
    const voices = window.speechSynthesis.getVoices();
    const femaleVoice = voices.find(v => v.lang === 'ja-JP' && (v.name.includes('Google') || v.name.includes('Kyoko') || v.name.includes('Nanami')));
    if (femaleVoice) utterance.voice = femaleVoice;
    
    window.speechSynthesis.speak(utterance);
  };

  /* ✨ [오류 수정 포인트 3] 
      필터가 '실제로' 바뀔 때만 1페이지로 리셋하도록 조건을 강화했어.
      단순히 다시 렌더링될 때는 현재 페이지를 유지해!
  */
  useEffect(() => {
    if (initialFilter !== subFilter) {
      setSubFilter(initialFilter);
      if (setGrammarPage) setGrammarPage(1);
    }
  }, [initialFilter]);

  useEffect(() => {
    setSelected(null);
    setShowExplanation(false);
  }, [data]);

  useEffect(() => {
    setInputValue(currentPage.toString());
  }, [currentPage]);

  const isListView = Array.isArray(data);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const themeColor = isWordbook ? 'rose' : 'indigo';

  if (isListView) {
    // ✨ [로직 수정] 데이터 필터링을 먼저 수행
    const filteredData = data.filter((d: any) => {
      if (subFilter === "전체") return true;
      const levelMap: Record<string, number> = { "필수": 3, "주요": 2, "기본": 1 };
      return Number(d.difficulty) === levelMap[subFilter];
    });

    // ✨ [핵심 수정] totalPages와 currentItems를 filteredData 기준으로 계산
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const currentItems = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handleTestClick = (testType: 'vocabulary' | 'reading' = 'vocabulary') => {
      if (!onStartTest) return;
      const allTitles = data.map((item: any) => item.kanji || item.title);
      const allReadings = data.map((item: any) => item.reading?.split(' · ')[0] || item.title);

      const questions = currentItems.flatMap((item: any) => 
        (item.contents || [{example_jp: item.example?.s, example_kr: item.example?.t}]).map((content: any, idx: number) => {
          const type = content.type || 'blank';
          let finalQuestion = "";
          let finalOptions = [];
          let finalAnswerIndex = 0;

          if (type === 'order' && content.segments) {
            const originalSegments = [...content.segments];
            const correctAnswerText = originalSegments[content.answer];
            finalOptions = [...originalSegments].sort(() => Math.random() - 0.5);
            finalAnswerIndex = finalOptions.indexOf(correctAnswerText);
            finalQuestion = "다음 단어를 바르게 나열할 때 ★에 들어갈 것을 고르시오.\n\n──  ──  ★  ──";
          } else {
            const isReadingTest = testType === 'reading' && item.reading;
            const correctAnswer = isReadingTest ? item.reading.split(' · ')[0] : (item.kanji || item.title);
            let distractors = (isReadingTest ? allReadings : allTitles).filter(t => t !== correctAnswer);
            if (distractors.length < 3) {
              distractors = [...distractors, "～타바카리", "～하즈다", "～요오다"];
            }
            finalOptions = [correctAnswer, ...distractors.sort(() => Math.random() - 0.5).slice(0, 3)].sort(() => Math.random() - 0.5);
            finalAnswerIndex = finalOptions.indexOf(correctAnswer);
            if (isReadingTest) {
              finalQuestion = `「${item.kanji || item.title}」의 올바른 읽기는?`;
            } else {
              const jpText = content.example_jp || "";
              const target = content.highlight || (item.kanji || item.title).replace('～', '');
              if (jpText.includes(target)) {
                finalQuestion = jpText.replace(target, `**____**`);
              } else {
                const splitPos = Math.floor(jpText.length * 0.4);
                finalQuestion = jpText.substring(0, splitPos) + `**____**` + jpText.substring(splitPos + (target.length || 2));
              }
            }
          }

          return {
            id: `g-${item.id}-${idx}`,
            category: testType === 'reading' ? '한자 읽기' : (type === 'order' ? 'N3 문법 (배열)' : 'N3 문법'),
            question: finalQuestion,
            options: finalOptions,
            answer: finalAnswerIndex,
            explanation: `【${item.kanji || item.title}】 ${item.reading ? `[${item.reading}]` : ''} ${item.meaning || item.description}\n\n해석: ${content.example_kr || content.example_ko || ''}`,
            reference: item.tip,
            type: 'language_knowledge'
          };
        })
      );
      
      /* ✨ [오류 수정 포인트 4: 마지막 페이지 머무름 로직] 
          단어장과 똑같이 브레이크를 걸었습니다.
          다음 페이지가 있을 때만 숫자를 올리고, 없으면 현재 페이지를 유지합니다. */
      onStartTest([...questions].sort(() => Math.random() - 0.5), () => {
        if (currentPage < totalPages) {
          handlePageChange(currentPage + 1);
        } else {
          // 다음 페이지가 없으면 현재 페이지 번호 그대로 호출 (머무르기)
          handlePageChange(currentPage);
        }
      });
    };

    const renderHighlightedText = (text: string, highlight?: string) => {
      if (!highlight) return text;
      const parts = text.split(new RegExp(`(${highlight})`, 'g'));
      return parts.map((part, i) => 
        part === highlight ? (
          <span key={i} className={`bg-${themeColor}-50 text-${themeColor}-600 px-1 rounded font-black`}>{part}</span>
        ) : part
      );
    };

    return (
      <div className="bg-slate-50 min-h-screen pb-20 animate-in fade-in duration-500">
        <div className="sticky top-0 z-20 px-6 py-8 backdrop-blur-md bg-slate-50/80">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div className="animate-in fade-in slide-in-from-left-4 duration-500">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`px-2 py-0.5 bg-${themeColor}-50 text-${themeColor}-600 text-[10px] font-black rounded-md tracking-widest uppercase`}>
                    {isWordbook ? "Vocab Master" : "Grammar Master"}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-200"></span>
                  <span className="text-slate-400 text-[10px] font-bold tracking-tight uppercase italic">JLPT N3</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-none">
                  필수 {isWordbook ? "어휘" : "문법"} 리스트
                </h2>
              </div>
              
              {onBack && (
                <button 
                  onClick={onBack} 
                  className={`group flex items-center gap-2 px-4 py-2 bg-white/80 border border-slate-200 rounded-full text-slate-500 text-sm font-bold hover:bg-${themeColor}-50 hover:border-${themeColor}-200 hover:text-${themeColor}-600 transition-all shadow-sm active:scale-95`}
                >
                  <i className="fas fa-arrow-left text-[10px] group-hover:-translate-x-1 transition-transform"></i>
                  뒤로가기
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2.5 animate-in fade-in slide-in-from-bottom-2 duration-700">
              {["전체", "필수", "주요", "기본"].map((cat) => (
                <button 
                  key={cat} 
                  onClick={() => { setSubFilter(cat); setCurrentPage(1); }} 
                  className={`px-6 py-2.5 rounded-2xl text-xs font-black transition-all border shadow-sm ${
                    subFilter === cat 
                      ? `bg-${themeColor}-600 text-white border-${themeColor}-600 shadow-lg shadow-${themeColor}-200/50` 
                      : "bg-white/80 text-slate-400 border-slate-100 hover:bg-white hover:text-slate-600"
                  }`}
                >
                  {cat === "전체" ? cat : `${cat} ${cat === "필수" ? "★★★" : cat === "주요" ? "★★" : "★"}`}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 mt-2 space-y-6">
          {currentItems.map((item: any, idx: number) => (
            <div key={item.id} className="group/card bg-white p-6 md:p-8 rounded-[2.5rem] border-2 border-slate-100/50 shadow-sm transition-all hover:shadow-xl hover:shadow-indigo-50/50 overflow-hidden relative">
              <div className={`absolute top-0 left-0 w-1.5 h-full bg-${themeColor}-500/10 group-hover/card:bg-${themeColor}-500 transition-colors shadow-sm`}></div>

              <div className="flex justify-between items-start mb-4 pl-2">
                <div className="flex flex-col">
                  <span className="text-slate-300 font-black text-xs tracking-widest uppercase mb-1">
                    {isWordbook ? "VOCAB" : "GRAMMAR"} {String((currentPage - 1) * itemsPerPage + idx + 1).padStart(3, '0')}
                  </span>
                  <h3 className={`text-2xl md:text-3xl font-black text-slate-800 tracking-tighter mb-1.5 break-all leading-tight group-hover/card:text-${themeColor}-600 transition-colors`}>
                    {item.kanji || item.title}
                  </h3>
                </div>
                
                <button 
                  onClick={(e) => { e.stopPropagation(); toggleBookmark(item.id); }} 
                  className="p-2 transition-all active:scale-125 group/bookmark bg-slate-50 rounded-2xl"
                >
                  <i className={`${bookmarks[item.id] ? `fas text-${themeColor}-500` : 'far text-slate-200'} fa-bookmark text-xl group-hover/bookmark:text-${themeColor}-300 transition-colors`}></i>
                </button>
              </div>

              <div className="pl-2">
                <div className="grid grid-cols-1 gap-2.5 mb-6">
                  <div className="flex items-start gap-3 p-4 bg-slate-50/50 rounded-2xl border border-slate-100 transition-colors group-hover/card:bg-white group-hover/card:border-indigo-100">
                    <span className={`px-2 py-0.5 bg-${themeColor}-500 text-white text-[9px] font-black rounded uppercase mt-1 shrink-0`}>의미</span>
                    <div>
                      <p className="text-slate-700 font-bold text-base leading-snug">{item.meaning || item.description}</p>
                      {item.nuance && <p className="text-slate-400 text-xs mt-1 font-medium italic">※ {item.nuance}</p>}
                    </div>
                  </div>
                  
                  {item.connection && (
                    <div className="flex items-start gap-3 p-3 bg-white rounded-xl border-2 border-slate-50">
                      <span className="px-2 py-0.5 bg-slate-400 text-white text-[9px] font-black rounded uppercase mt-1 shrink-0">접속</span>
                      <p className="text-slate-500 font-bold text-sm leading-relaxed">{item.connection}</p>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  {(item.contents || [{example_jp: item.example?.s, example_kr: item.example?.t}]).map((c: any, i: number) => (
                    <div key={i} className="flex gap-4 items-start group/ex">
                      <span className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-xs font-black text-slate-400 shrink-0 group-hover/ex:bg-${themeColor}-100 group-hover/ex:text-${themeColor}-500 transition-all`}>
                        {i + 1}
                      </span>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="text-slate-800 font-bold text-lg leading-tight">
                            {renderHighlightedText(c.example_jp || c.segments?.join(''), (item.kanji || item.title).replace('～', ''))}
                          </p>
                          <button 
                            onClick={() => handleSpeak(c.example_jp || c.segments?.join(''))}
                            className="p-1.5 text-slate-300 hover:text-indigo-400 transition-colors"
                          >
                            <i className="fas fa-volume-up text-sm"></i>
                          </button>
                        </div>
                        <p className="text-slate-400 font-bold text-xs">{c.example_kr}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {item.tip && (
                  <div className={`mt-6 p-4 rounded-2xl bg-${themeColor}-50/30 border border-${themeColor}-100/50 flex items-center gap-3`}>
                    <i className={`fas fa-lightbulb text-${themeColor}-400 text-xs`}></i>
                    <p className={`text-${themeColor}-700/80 text-xs font-bold`}>{item.tip}</p>
                  </div>
                )}
              </div>
            </div>
          ))}

          {currentItems.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-slate-400 font-bold">해당 난이도의 문법 데이터가 없습니다.</p>
            </div>
          )}

          <div className="flex flex-col items-center pt-6 gap-3">
            <button onClick={() => handleTestClick('vocabulary')} className={`group flex items-center gap-3 px-10 py-4 bg-${themeColor}-600 rounded-2xl shadow-xl shadow-${themeColor}-100 hover:bg-${themeColor}-700 transition-all active:scale-95`}>
              <i className="fas fa-edit text-white text-base"></i>
              <span className="text-white font-black text-base">현재 페이지 테스트</span>
            </button>
            <button onClick={() => handleTestClick('reading')} className="text-slate-400 text-xs font-bold hover:text-slate-600 underline underline-offset-8">
              한자 읽기 테스트로 진행하기
            </button>
          </div>

          {totalPages > 1 && (
            <div className="max-w-xl mx-auto border-t border-slate-100 pt-10 pb-10 px-2 mt-6">
              <div className="flex items-center justify-center gap-3 md:gap-5">
                <div className="flex items-center gap-1.5">
                  <button onClick={() => handlePageChange(1)} disabled={currentPage === 1} className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${currentPage === 1 ? "text-slate-200 bg-slate-50/50" : `text-slate-400 hover:text-${themeColor}-600 hover:bg-white`}`}>
                    <i className="fas fa-angle-double-left text-sm"></i>
                  </button>
                  <button onClick={() => handlePageChange(Math.max(currentPage - 1, 1))} disabled={currentPage === 1} className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${currentPage === 1 ? "text-slate-200 bg-slate-50/50" : `bg-white text-slate-600 shadow-sm border border-slate-100 hover:border-${themeColor}-500 hover:text-${themeColor}-600 active:scale-90`}`}>
                    <i className="fas fa-chevron-left text-xs"></i>
                  </button>
                </div>
                <div className={`flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border-2 transition-all shadow-sm ${inputValue !== currentPage.toString() ? `border-${themeColor}-400` : 'border-slate-100'}`}>
                  <input type="text" inputMode="numeric" pattern="[0-9]*" value={inputValue} onChange={(e) => { const val = e.target.value; if (val === "" || /^[0-9]+$/.test(val)) setInputValue(val); }} onKeyDown={(e) => { if (e.key === 'Enter') { const num = parseInt(inputValue); if (!isNaN(num) && num >= 1 && num <= totalPages) handlePageChange(num); else setInputValue(currentPage.toString()); (e.target as HTMLInputElement).blur(); } }} onBlur={() => { const num = parseInt(inputValue); if (!isNaN(num) && num >= 1 && num <= totalPages) handlePageChange(num); else setInputValue(currentPage.toString()); }} className={`w-8 bg-transparent text-center text-lg font-black text-${themeColor}-600 outline-none`} />
                  <span className="text-slate-300 font-bold text-sm">/</span>
                  <span className="text-slate-400 font-bold text-sm min-w-[20px] text-center">{totalPages}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))} disabled={currentPage === totalPages} className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${currentPage === totalPages ? "text-slate-200 bg-slate-50/50" : `bg-white text-slate-600 shadow-sm border border-slate-100 hover:border-${themeColor}-500 hover:text-${themeColor}-600 active:scale-90`}`}>
                    <i className="fas fa-chevron-right text-sm"></i>
                  </button>
                  <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${currentPage === totalPages ? "text-slate-200 bg-slate-50/50" : `text-slate-400 hover:text-${themeColor}-600 hover:bg-white`}`}>
                    <i className="fas fa-angle-double-right text-sm"></i>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  const renderQuestion = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className={`px-1.5 py-0.5 rounded-lg ${isWordbook ? 'text-rose-600 bg-rose-50' : 'text-indigo-600 bg-indigo-50'}`}>
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <div className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 p-6 md:p-8 border border-slate-100 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto relative">
      {onBack && (
        <button 
          onClick={onBack} 
          className={`absolute top-6 right-6 group flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-500 text-sm font-bold hover:bg-${themeColor}-50 hover:border-${themeColor}-200 hover:text-${themeColor}-600 transition-all shadow-sm active:scale-95`}
        >
          <i className="fas fa-times text-[14px]"></i>
          닫기
        </button>
      )}
      <div className="flex justify-between items-center mb-6">
        <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${isWordbook ? 'text-rose-500 bg-rose-50' : 'text-indigo-500 bg-indigo-50'}`}>
          {data.category}
        </span>
      </div>
      <h3 className="text-xl md:text-2xl font-black text-slate-800 leading-tight mb-8 text-center md:text-left whitespace-pre-wrap">
        {renderQuestion(data.question || '')}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.options?.map((option: string, idx: number) => {
          let stateClass = isWordbook ? "border-slate-100 hover:border-rose-200 hover:bg-rose-50/50" : "border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/50";
          if (selected !== null) {
            if (idx === data.answer) stateClass = "border-emerald-500 bg-emerald-50 text-emerald-700 font-bold shadow-lg shadow-emerald-100";
            else if (idx === selected) stateClass = "border-rose-500 bg-rose-50 text-rose-700 shadow-lg shadow-rose-100";
            else stateClass = "opacity-40 border-slate-50 grayscale-[0.5]";
          }
          return (
            <button key={idx} disabled={selected !== null} onClick={() => { setSelected(idx); setShowExplanation(true); if (idx === data.answer) onCorrect(); else onWrong(); }}
              className={`w-full text-left p-4 md:p-5 rounded-2xl border-2 transition-all duration-300 flex items-center group ${stateClass} active:scale-[0.98]`}
            >
              <span className={`w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center mr-4 shrink-0 transition-all font-black text-base ${
                selected !== null && idx === data.answer ? 'bg-emerald-500 text-white' :
                selected === idx ? 'bg-rose-500 text-white' : isWordbook ? 'bg-slate-50 text-slate-400' : 'bg-slate-50 text-slate-400'
              }`}>
                {idx + 1}
              </span>
              <span className="text-base md:text-lg font-bold tracking-tight">{option}</span>
            </button>
          );
        })}
      </div>
      {showExplanation && (
        <div className="mt-8 p-6 bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/60 animate-in zoom-in-95 duration-500 ring-4 ring-slate-50/50">
          <div className="flex items-center gap-2 mb-3">
            <div className={`w-1 h-5 rounded-full ${isWordbook ? 'bg-rose-500' : 'bg-indigo-500'}`} />
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Explanation</span>
          </div>
          <p className="text-sm md:text-base text-slate-600 font-bold leading-relaxed whitespace-pre-wrap">{data.explanation}</p>
          <button onClick={isLast ? onFinish : onNext} className={`w-full mt-8 py-4 text-white rounded-xl font-black text-base shadow-xl transition-all active:scale-95 flex items-center justify-center gap-3 ${isWordbook ? 'bg-rose-500 hover:bg-rose-600 shadow-rose-200' : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-200'}`}>
            <span>{isLast ? '학습 완료하기' : '다음 문제'}</span>
            <i className={`fas fa-flag-checkered text-xs`}></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default VocabCard;