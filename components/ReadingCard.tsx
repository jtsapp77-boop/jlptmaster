import React, { useState } from 'react';

interface Props {
  data: any;
  onNext: () => void;
  isLast: boolean;
  onFinish: () => void;
  onCorrect: () => void;
  onWrong: () => void;
}

const ReadingCard: React.FC<Props> = ({ data, onNext, isLast, onFinish, onCorrect, onWrong }) => {
  if (!data) return (
    <div className="p-10 text-center bg-white rounded-3xl shadow-sm">
      <p className="text-slate-400">데이터를 불러올 수 없습니다.</p>
    </div>
  );

  const [showTranslation, setShowTranslation] = useState(false);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [finishedQuestions, setFinishedQuestions] = useState<Set<number>>(new Set());
  const [showExplanation, setShowExplanation] = useState(false);

  // 💡 기존 단수형 데이터와 새로운 배열형 데이터를 모두 지원하는 로직
  const questionsList = data.questions ? (Array.isArray(data.questions) ? data.questions : []) : [
    {
      q_text: data.question,
      options: data.options,
      answer: data.answer,
      explanation: data.explanation,
      evidence: data.evidence,
      strategy: data.strategy
    }
  ];

  const handleOptionClick = (qIdx: number, oIdx: number) => {
    if (finishedQuestions.has(qIdx) || !questionsList[qIdx]) return;

    setShowExplanation(true);
    if (oIdx === questionsList[qIdx].answer) {
      onCorrect();
    } else {
      onWrong();
    }

    setAnswers(prev => ({ ...prev, [qIdx]: oIdx }));
    setFinishedQuestions(prev => new Set(Array.from(prev).concat(qIdx)));
  };

  const allAnswered = finishedQuestions.size === questionsList.length;

  // 💡 본문에서 근거 문장(evidence)을 찾아 하이라이트 처리하는 함수
  const renderPassageWithHighlight = (passage: string) => {
    // 현재 풀고 있는 문제의 근거를 가져옴 (여러 문제일 경우 첫 번째 정답 근거 기준)
    const currentEvidence = questionsList[0]?.evidence;
    
    if (showExplanation && currentEvidence && passage.includes(currentEvidence)) {
      const parts = passage.split(currentEvidence);
      return (
        <>
          {parts[0]}
          <mark className="bg-amber-200 text-slate-900 rounded-lg px-1.5 font-bold animate-in fade-in duration-500 ring-2 ring-amber-300 ring-offset-1">
            {currentEvidence}
          </mark>
          {parts[1]}
        </>
      );
    }
    return passage;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-[1400px] mx-auto">
      
      {/* --- 📘 왼쪽 섹션: 지문 카드 (Sticky 적용) --- */}
      <div className="lg:sticky lg:top-24 space-y-6">
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50/50 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          
          <div className="flex justify-between items-center mb-6 relative z-10">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full">
              READING COMPREHENSION
            </span>
            <span className="text-[10px] text-slate-300 font-mono font-bold">ID: {data.id}</span>
          </div>
          
          <h2 className="text-xl md:text-2xl font-black text-slate-800 mb-6 relative z-10 leading-tight">
            {/* 💡 번역 모드일 때 한국어 제목 우선 노출 */}
            {showTranslation && data.title_kr ? data.title_kr : (data.title || data.reference || "제목 없음")}
          </h2>
          
          <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100 relative z-10">
            <p className="text-base md:text-lg text-slate-700 leading-relaxed whitespace-pre-wrap font-serif italic transition-all duration-500">
              {/* 💡 하이라이트 기능 이식 */}
              {renderPassageWithHighlight(data.passage || data.content)}
            </p>
          </div>

          {/* 💡 핵심 단어장 (Vocabulary List) 섹션 추가 */}
          {data.vocabulary_list && data.vocabulary_list.length > 0 && (
            <div className="mt-6 p-5 bg-white rounded-2xl border-2 border-dashed border-slate-100 relative z-10">
              <h4 className="text-[10px] font-black text-slate-400 mb-3 tracking-widest uppercase flex items-center">
                <i className="fas fa-book-open mr-2 text-indigo-400"></i> Key Vocabulary
              </h4>
              <div className="flex flex-wrap gap-2">
                {data.vocabulary_list.map((v: any, idx: number) => (
                  <div key={idx} className="group flex items-baseline gap-1.5 bg-slate-50 hover:bg-indigo-50 px-3 py-1.5 rounded-xl border border-slate-100 hover:border-indigo-100 transition-all cursor-default">
                    <span className="font-bold text-slate-800 text-sm group-hover:text-indigo-700">{v.word}</span>
                    <span className="text-[10px] text-slate-400 font-medium">[{v.reading}]</span>
                    <span className="text-xs text-slate-600 font-medium ml-1">{v.meaning}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6 flex items-center justify-between relative z-10">
            <button 
              type="button"
              onClick={() => setShowTranslation(!showTranslation)}
              className="text-xs text-indigo-600 hover:text-indigo-800 font-black flex items-center bg-indigo-50 px-4 py-2 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-sm shadow-indigo-100"
            >
              <i className={`fas fa-language mr-2 text-base`}></i>
              {showTranslation ? 'TRANSLATION HIDE' : 'TRANSLATION SHOW'}
            </button>
          </div>

          {showTranslation && (
            <div className="mt-6 p-6 bg-indigo-900 rounded-2xl text-indigo-100 animate-in fade-in zoom-in duration-300 shadow-xl border-t-4 border-indigo-400">
              <p className="leading-relaxed text-sm font-medium">
                {data.translation || "번역 정보가 없습니다."}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* --- 📝 오른쪽 섹션: 문제 리스트 --- */}
      <div className="space-y-6">
        {questionsList.map((q: any, qIdx: number) => (
          <div 
            key={qIdx} 
            className="bg-white rounded-3xl shadow-lg p-6 md:p-8 border border-slate-100 animate-in fade-in slide-in-from-bottom-6 duration-700" 
            style={{ animationDelay: `${qIdx * 150}ms` }}
          >
            <div className="flex items-start gap-4 mb-8">
              <span className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center font-black shrink-0 shadow-lg shadow-slate-200">
                Q{qIdx + 1}
              </span>
              <p className="text-lg md:text-xl font-bold text-slate-800 leading-snug">{q.q_text || q.question}</p>
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              {q.options && q.options.map((option: string, oIdx: number) => {
                const hasAnswered = finishedQuestions.has(qIdx);
                let btnClass = "border-slate-100 bg-slate-50/50 hover:border-emerald-200 hover:bg-white hover:shadow-md";
                
                if (hasAnswered) {
                  if (oIdx === q.answer) {
                    btnClass = "border-emerald-500 bg-emerald-50 text-emerald-700 font-black shadow-lg shadow-emerald-100";
                  } else if (oIdx === answers[qIdx]) {
                    btnClass = "border-rose-500 bg-rose-50 text-rose-700 shadow-lg shadow-rose-100";
                  } else {
                    btnClass = "opacity-40 border-slate-50 grayscale-[0.5]";
                  }
                }

                return (
                  <button
                    key={oIdx}
                    disabled={hasAnswered}
                    onClick={() => handleOptionClick(qIdx, oIdx)}
                    className={`w-full text-left p-4 md:p-5 rounded-2xl border-2 transition-all duration-300 flex items-center group ${btnClass}`}
                  >
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center mr-4 shrink-0 font-black text-sm transition-all ${
                      hasAnswered && oIdx === q.answer 
                      ? 'bg-emerald-500 text-white rotate-12 scale-110 shadow-md shadow-emerald-200' 
                      : answers[qIdx] === oIdx 
                      ? 'bg-rose-500 text-white' 
                      : 'bg-white text-slate-400 group-hover:text-emerald-600 group-hover:border-emerald-100'
                    }`}>
                      {oIdx + 1}
                    </span>
                    <span className="font-medium text-sm md:text-base">{option}</span>
                  </button>
                );
              })}
            </div>

            {/* 💡 해설 및 전략 섹션 (정답 확인 후 노출) */}
            {showExplanation && answers[qIdx] !== undefined && (
              <div className="mt-8 space-y-4 animate-in fade-in duration-500">
                {/* 1. 기본 분석 해설 */}
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-1 h-full bg-amber-400"></div>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    <span className="text-[9px] font-black bg-amber-400 text-white px-2 py-0.5 rounded mr-2 uppercase tracking-tighter">Analysis</span>
                    {q.explanation}
                  </p>
                </div>

                {/* 💡 2. 출제자의 트릭 분석 (Strategy) 추가 */}
                {q.strategy && (
                  <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
                    <p className="text-sm text-indigo-700 font-bold leading-relaxed">
                      <span className="text-[9px] font-black bg-indigo-500 text-white px-2 py-0.5 rounded mr-2 uppercase tracking-tighter">Strategy Tip</span>
                      {q.strategy}
                    </p>
                  </div>
                )}

                {allAnswered && (
                  <button 
                    onClick={() => {
                      isLast ? onFinish() : onNext();
                      setShowExplanation(false);
                      setFinishedQuestions(new Set());
                      setAnswers({});
                      setShowTranslation(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full mt-6 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-black shadow-lg shadow-emerald-200 transition-all active:scale-95 flex items-center justify-center gap-2 group"
                  >
                    {isLast ? '전체 과정 완료하기' : '다음 지문 도전하기'}
                    <i className={`fas fa-${isLast ? 'check-circle' : 'arrow-right'} group-hover:translate-x-1 transition-transform`}></i>
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadingCard;