import { TOTAL_DB } from './components/src/data';
import React, { useState } from 'react';
import { JLPTLevel, QuestionType } from './components/src/types';
import LoadingSpinner from './components/LoadingSpinner';
import VocabCard from './components/VocabCard';
import ReadingCard from './components/ReadingCard';
import WordbookView from './components/WordbookView';
// [추가] 독해 홈 화면 컴포넌트 임포트
import ReadingHome from './components/ReadingHome';
// [추가] 단어장 홈 화면 컴포넌트 임포트
import WordbookHome from './components/WordbookHome';
// [추가] 문법 홈 화면 컴포넌트 및 타입 임포트
import VocabCardHome, { GrammarCategoryType } from './components/VocabCardHome';
// [수정] 오류가 발생하던 GrammarView 임포트를 제거하고 통합된 VocabCard를 사용합니다.
import { grammarDataN3 } from './components/src/data/n3/grammarDataN3';

const App: React.FC = () => {
  const [wrongQuestions, setWrongQuestions] = useState<any[]>([]);

  const handleWrong = (question: any) => {
    setWrongQuestions(prev => {
      if (prev.find(q => q.id === question.id)) return prev;
      return [...prev, question];
    });
  };

  const [level, setLevel] = useState<JLPTLevel>('N3');
  const [view, setView] = useState<'home' | 'quiz' | 'result' | 'wordbook' | 'grammar' | 'reading_home' | 'wordbook_home' | 'grammar_home'>('home');
  const [type, setType] = useState<QuestionType>('language_knowledge');
  const [questions, setQuestions] = useState<any[]>([]); 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState(0);

  const [isWordbookTest, setIsWordbookTest] = useState(false);
  
  const [wordbookPage, setWordbookPage] = useState(1);
  /* ✨ [오류 수정 핵심 1] 문법 리스트의 페이지 번호를 부모가 기억하도록 상태 추가 */
  const [grammarPage, setGrammarPage] = useState(1);
  
  const [wordbookTab, setWordbookTab] = useState<"kanji" | "vocabulary">("kanji");
  const [onNextPageHandler, setOnNextPageHandler] = useState<(() => void) | null>(null);

  // [수정 포인트 1] 초기 필터 상태를 VocabCard에 전달하기 위한 상태 (최소한의 추가)
  const [initialGrammarFilter, setInitialGrammarFilter] = useState<string>("전체");

  const handleLanguageKnowledgeClick = () => {
    if (level === 'N3') {
      setView('grammar_home');
    } else {
      startSession('language_knowledge');
    }
  };

  // [핵심 수정] startGrammarSession: 데이터를 자르지 않고 전체를 넘겨주어 내부 필터가 작동하게 함
  const startGrammarSession = (category: GrammarCategoryType) => {
    if (category === 'CONTEXT') {
      alert("실전 문맥 데이터는 준비 중입니다! 🚀");
      return;
    }

    setType('language_knowledge');
    setIsWordbookTest(false);
    setError(null);
    setCurrentIndex(0);
    setCorrectCount(0);
    setWrongQuestions([]);
    /* ✨ [오류 수정] 문법 학습 시작 시 페이지 1로 리셋 */
    setGrammarPage(1);

    try {
      // 난이도 매핑 정보
      const diffLabelMap: Record<string, string> = { 'LV1': '필수', 'LV2': '주요', 'LV3': '기본' };
      
      // [최소 수정] 데이터를 필터링해서 버리지 않고, 전체 데이터를 questions에 담음
      // 그래야 VocabCard 안에서 다른 별점(난이도)으로 이동이 가능함
      setQuestions(grammarDataN3 || []);
      
      // [최소 수정] 외부에서 선택한 카테고리를 VocabCard의 초기 필터값으로 예약
      setInitialGrammarFilter(diffLabelMap[category] || "전체");
      
      setView('grammar'); 
    } catch (err) {
      console.error(err);
      setError("문법 세션을 구성하는 중 오류가 발생했습니다.");
    }
  };

  const startReadingSession = (subCategory?: string) => {
    startSession('reading', subCategory);
  };

  const startSession = (selectedType: QuestionType, subCategory?: string) => {
    setType(selectedType);
    setIsWordbookTest(false);
    setOnNextPageHandler(null);
    setError(null);
    setCurrentIndex(0);
    setCorrectCount(0);
    setWrongQuestions([]);

    try {
      const levelKey = level.toLowerCase();
      const dbSource = (TOTAL_DB as any)[levelKey];
      
      let filteredQuestions: any[] = [];

      if (selectedType === 'language_knowledge') {
        const baseQuestions = (dbSource?.questions || []).filter((q: any) => {
          return q.type === 'language_knowledge' || q.category === 'vocabulary' || q.category === 'grammar';
        });

        let gQuestions: any[] = [];
        if (level === 'N3' && grammarDataN3) {
          gQuestions = grammarDataN3.flatMap((item: any) => 
            (item.contents || []).map((content: any, idx: number) => {
              const pureTitle = (item.kanji || item.title || '').replace('～', '');
              return {
                id: `g-${item.id}-${idx}`,
                category: 'N3 문법',
                question: content.example_jp && content.example_jp.includes(pureTitle) 
                  ? content.example_jp.replace(pureTitle, `**____**`) 
                  : `( ) ${content.example_jp || ''}`, 
                options: content.options || [item.title, "～타바카리", "～받았다", "～요오다"],
                answer: content.answer !== undefined ? content.answer : 0,
                explanation: `【${item.kanji || item.title}】 ${item.description || ''}\n\n해석: ${content.example_kr || content.example_ko || ''}`,
                reference: item.tip,
                type: 'language_knowledge'
              };
            })
          );
        }
        filteredQuestions = [...baseQuestions, ...gQuestions];
      } else if (selectedType === 'reading') {
        const allQuestions = dbSource?.questions || [];
        filteredQuestions = allQuestions.filter((q: any) => {
          const isReadingType = q.type === 'reading' || q.type?.includes('reading') || !!q.content || !!q.passage;
          if (!isReadingType) return false;
          if (subCategory && subCategory !== "전체") {
            return q.readingType === subCategory;
          }
          return true;
        });
      }

      if (filteredQuestions.length === 0) {
        setError(`${level} ${subCategory || ''} 데이터를 찾을 수 없습니다.`);
        return;
      }

      setQuestions(filteredQuestions.sort(() => Math.random() - 0.5));
      setView('quiz'); 
    } catch (err: any) {
      console.error(err);
      setError("문대를 구성하는 중 오류가 발생했습니다.");
    }
  };

  const startWordbookTest = (testQuestions: any[], onNextPage?: () => void) => {
    setQuestions(testQuestions);
    setType('language_knowledge'); 
    const hasGrammar = testQuestions.some(q => q.id?.toString().startsWith('g-'));
    setIsWordbookTest(!hasGrammar); 
    if (onNextPage) { setOnNextPageHandler(() => onNextPage); } 
    else { setOnNextPageHandler(null); }
    setCurrentIndex(0);
    setCorrectCount(0);
    setWrongQuestions([]);
    setView('quiz');
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) { setCurrentIndex(prev => prev + 1); } 
    else { setView('result'); }
  };

  const handleFinish = () => { setView('result'); };

  const reset = () => {
    setView('home');
    setQuestions([]);
    setCurrentIndex(0);
    setCorrectCount(0);
    setWrongQuestions([]);
    setIsWordbookTest(false);
    setOnNextPageHandler(null);
    setError(null);
    setInitialGrammarFilter("전체");
    /* ✨ [오류 수정] 초기화 시 문법 페이지도 1로 리셋 */
    setGrammarPage(1);
  };

  // 디자인 통일성을 위한 테마 헬퍼 함수
  const getQuizTheme = () => {
    if (isWordbookTest) return { color: 'rose', hex: '#FF7F7F', bg: 'bg-rose-50/40' };
    if (type === 'reading') return { color: 'emerald', hex: '#10B981', bg: 'bg-emerald-50/40' };
    return { color: 'indigo', hex: '#4F46E5', bg: 'bg-indigo-50/40' };
  };

  const theme = getQuizTheme();

  return (
    <div className={`min-h-screen w-full max-w-screen-2xl mx-auto flex flex-col shadow-2xl shadow-slate-200 relative overflow-x-hidden transition-colors duration-500 ${view === 'quiz' ? theme.bg : 'bg-slate-50'}`}>
      
      <header className="bg-white border-b border-slate-100 px-6 py-4 md:px-10 flex items-center justify-between sticky top-0 z-[60] w-full">
        <div className="flex items-center gap-2 cursor-pointer" onClick={reset}>
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">J</div>
          <h1 className="text-xl font-black text-slate-800 tracking-tight">JLPT Master</h1>
        </div>
        <div className="flex items-center bg-slate-100 rounded-full px-3 py-1">
          <span className="text-xs font-bold text-slate-500 mr-1">LEVEL</span>
          <select 
            value={level} 
            onChange={(e) => setLevel(e.target.value as JLPTLevel)}
            className="bg-transparent text-sm font-bold text-indigo-600 focus:outline-none appearance-none cursor-pointer"
          >
            {['N1', 'N2', 'N3', 'N4', 'N5'].map(l => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
          <i className="fas fa-caret-down text-slate-400 ml-1 text-[10px]"></i>
        </div>
      </header>

      <main className={`flex-1 p-6 md:p-10 lg:p-16 max-w-7xl mx-auto w-full pb-40 md:pb-64`}>
        {loading ? (
          <div className="h-full flex items-center justify-center py-20">
            <LoadingSpinner />
          </div>
        ) : error ? (
          <div className="bg-rose-50 border border-rose-100 p-6 rounded-2xl text-center max-w-md mx-auto">
            <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-exclamation-triangle text-xl"></i>
            </div>
            <p className="text-rose-700 font-medium">{error}</p>
            <button onClick={reset} className="mt-6 px-6 py-2 bg-rose-600 text-white rounded-full font-bold shadow-lg shadow-rose-100">재시도</button>
          </div>
        ) : view === 'home' ? (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
            <div className="pt-4 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                오늘의 <span className="text-indigo-600 underline decoration-indigo-200 decoration-4 underline-offset-4">{level}</span> 학습
              </h2>
              <p className="text-slate-500 mt-3 md:text-lg leading-relaxed">문제 은행에 등록된 최신 경향 문제를 통해 JLPT 합격에 도전하세요.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <button 
                onClick={handleLanguageKnowledgeClick}
                className="group bg-white p-6 rounded-3xl border-2 border-slate-100 hover:border-indigo-500 hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-300 text-left relative overflow-hidden"
              >
                <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <i className="fas fa-font text-8xl"></i>
                </div>
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <i className="fas fa-book-open text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-800">언어지식 (용법/문법)</h3>
                <p className="text-slate-500 text-sm mt-1">문장 구조와 단어의 정확한 쓰임새 완벽 정리</p>
                <div className="mt-4 flex items-center text-indigo-600 font-bold text-sm">
                  학습하기 <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                </div>
              </button>

              <button 
                onClick={() => setView('reading_home')}
                className="group bg-white p-6 rounded-3xl border-2 border-slate-100 hover:border-emerald-500 hover:shadow-2xl hover:shadow-emerald-100 transition-all duration-300 text-left relative overflow-hidden"
              >
                <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <i className="fas fa-glasses text-8xl"></i>
                </div>
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <i className="fas fa-glasses text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-800">독해 (지문 연습)</h3>
                <p className="text-slate-500 text-sm mt-1">단문부터 중문까지 맞춤형 지문 독파</p>
                <div className="mt-4 flex items-center text-emerald-600 font-bold text-sm">
                  학습하기 <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                </div>
              </button>

              <button 
                onClick={() => setView('wordbook_home')}
                className="group bg-white p-6 rounded-3xl border-2 border-slate-100 hover:border-rose-400 hover:shadow-2xl hover:shadow-rose-100 transition-all duration-300 text-left relative overflow-hidden"
              >
                <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity text-rose-600">
                  <i className="fas fa-language text-8xl"></i>
                </div>
                <div className="w-12 h-12 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                  <i className="fas fa-layer-group text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-800">단어장 (암기모드)</h3>
                <p className="text-slate-500 text-sm mt-1">JLPT 레벨별 필수 어휘와 한자 카드 학습</p>
                <div className="mt-4 flex items-center text-rose-500 font-bold text-sm">
                  학습하기 <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                </div>
              </button>
            </div>

            <div className="bg-indigo-900 rounded-3xl p-6 md:p-10 text-white shadow-xl shadow-indigo-200 max-w-2xl mx-auto md:mx-0">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-indigo-500/30 text-indigo-200 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest">Master Status</span>
                <i className="fas fa-award text-amber-400"></i>
              </div>
              <h4 className="text-lg md:text-xl font-bold mb-1">학습 진도율</h4>
              <div className="w-full bg-indigo-800 h-2 rounded-full overflow-hidden mb-3">
                <div className="bg-indigo-400 h-full w-[35%] rounded-full"></div>
              </div>
              <p className="text-indigo-200 text-xs">어제보다 <span className="text-white font-bold">12%</span> 더 많이 학습하셨네요!</p>
            </div>
          </div>
        ) : view === 'grammar_home' ? (
          <VocabCardHome 
            currentLevel={level} 
            onBack={reset} 
            onSelectCategory={(category) => startGrammarSession(category)} 
          />
        ) : view === 'grammar' ? (
          /* ✨ [오류 수정 핵심 2] VocabCard에 부모가 관리하는 grammarPage 상태 주입 */
          <VocabCard 
            data={questions} 
            onNext={handleNext}
            isLast={currentIndex === questions.length - 1}
            onFinish={handleFinish}
            onCorrect={() => setCorrectCount(prev => prev + 1)}
            onWrong={() => handleWrong(questions[currentIndex])}
            onStartTest={startWordbookTest} 
            initialFilter={initialGrammarFilter}
            onBack={() => setView('grammar_home')}
            grammarPage={grammarPage}
            setGrammarPage={setGrammarPage}
          />
        ) : view === 'reading_home' ? (
          <ReadingHome 
            currentLevel={level} 
            onBack={reset} 
            onSelectCategory={(category: string) => startReadingSession(category)} 
          />
        ) : view === 'wordbook_home' ? (
          <WordbookHome 
            currentLevel={level} 
            onBack={reset} 
            onSelectType={(selectedType: "kanji" | "vocabulary") => {
              setWordbookTab(selectedType);
              setWordbookPage(1); 
              setView('wordbook');
            }}
            onSelectBookmark={() => {}}
          />
        ) : view === 'quiz' ? (
          <div className="animate-in fade-in duration-700">
            <div className="sticky top-[72px] z-50 px-6 py-6 backdrop-blur-xl bg-white/30 -mx-6 md:-mx-10 lg:-mx-16 mb-6 transition-all">
              <div className="max-w-5xl mx-auto space-y-5">
                <div className="flex items-center justify-between">
                   <button 
                    onClick={reset} 
                    className={`group flex items-center gap-2 px-5 py-2.5 bg-white/80 border border-slate-200 rounded-full text-slate-500 text-xs font-black hover:bg-${theme.color}-50 hover:border-${theme.color}-200 hover:text-${theme.hex} transition-all shadow-sm active:scale-95`}
                  >
                    <i className="fas fa-times text-[10px]"></i>
                    학습 종료
                  </button>
                  
                  <div className="flex flex-col items-end">
                    <span className={`text-[10px] font-black uppercase tracking-[0.25em] text-${theme.color}-600/80 mb-1`}>
                      {isWordbookTest ? 'VOCABULARY MASTER' : (type === 'reading' ? 'READING SESSION' : 'GRAMMAR QUIZ')}
                    </span>
                    <span className="text-base font-black text-slate-800 tracking-tight tabular-nums">
                      {currentIndex + 1} <span className="text-slate-300 mx-1 font-light">/</span> {questions.length}
                    </span>
                  </div>
                </div>

                <div className="w-full bg-slate-200/50 h-1.5 rounded-full overflow-hidden relative shadow-inner">
                  <div 
                    className={`h-full transition-all duration-1000 ease-out rounded-full relative shadow-[0_0_10px_rgba(0,0,0,0.1)]`}
                    style={{ 
                      width: `${((currentIndex + 1) / questions.length) * 100}%`,
                      backgroundColor: theme.hex
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-5xl mx-auto relative animate-in slide-in-from-bottom-6 duration-700">
              <div className={`absolute -top-20 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-${theme.color}-400/10 blur-[100px] -z-10 rounded-full`}></div>
              
              <div className="shadow-2xl shadow-slate-200/60 rounded-[2.5rem] overflow-hidden">
                {type === 'language_knowledge' ? (
                  questions[currentIndex] && (
                    <VocabCard 
                      key={`vocab-${currentIndex}`}
                      data={questions[currentIndex]}
                      onNext={handleNext}
                      isLast={currentIndex === questions.length - 1}
                      onFinish={handleFinish}
                      onCorrect={() => setCorrectCount(prev => prev + 1)}
                      onWrong={() => handleWrong(questions[currentIndex])}
                      isWordbook={questions[currentIndex]?.isWordbook || isWordbookTest} 
                      onStartTest={startWordbookTest}
                    />
                  )
                ) : (
                  questions[currentIndex] && (
                    <ReadingCard 
                      key={`reading-${currentIndex}`}
                      data={questions[currentIndex]} 
                      onNext={handleNext}
                      isLast={currentIndex === questions.length - 1}
                      onFinish={handleFinish}
                      onCorrect={() => setCorrectCount(prev => prev + 1)}
                      onWrong={() => handleWrong(questions[currentIndex])}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        ) : view === 'wordbook' ? (
          <WordbookView 
            data={(TOTAL_DB as any)[level.toLowerCase()]?.wordbook || []} 
            currentLevel={level}
            wordbookPage={wordbookPage} 
            setWordbookPage={setWordbookPage}
            wordbookTab={wordbookTab}
            setWordbookTab={setWordbookTab}
            onBack={() => setView('wordbook_home')} 
            onStartTest={startWordbookTest} 
          />
        ) : (
          <div className="flex flex-col items-center py-10 animate-in fade-in zoom-in duration-700 max-w-2xl mx-auto px-4">
            {(() => {
              const themeHex = isWordbookTest ? '#FF7F7F' : (type === 'reading' ? '#10B981' : '#4F46E5');
              const testName = isWordbookTest ? '단어장 테스트' : (type === 'reading' ? '독해' : '언어지식');

              return (
                <>
                  <div className={`w-28 h-28 rounded-full flex items-center justify-center mb-8 relative`} style={{backgroundColor: `${themeHex}20`, color: themeHex}}>
                    <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{backgroundColor: themeHex}}></div>
                    <i className={`fas fa-${isWordbookTest ? 'spell-check' : 'trophy'} text-5xl`}></i>
                  </div>

                  <h2 className="text-4xl font-black text-slate-900 tracking-tight">참 잘했어요!</h2>
                  <p className="text-slate-500 mt-4 text-lg text-center">
                    <span className="font-bold" style={{color: themeHex}}>{level} {testName}</span> 학습을<br/>
                    성공적으로 마무리했습니다.
                  </p>

                  <div className="grid grid-cols-2 gap-6 w-full mt-12">
                    <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col items-center">
                      <span className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Total</span>
                      <span className="text-3xl font-black text-slate-800">{questions.length}<span className="text-base ml-1">개</span></span>
                    </div>
                    <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col items-center">
                      <span className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Correct</span>
                      <span className="text-3xl font-black" style={{color: themeHex}}>{correctCount}<span className="text-base ml-1 text-slate-800">개</span></span>
                    </div>
                  </div>

                  <div className="mt-12 w-full space-y-6">
                    {wrongQuestions.length > 0 && (
                      <div className="w-full bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl shadow-indigo-200/50 relative overflow-hidden">
                        <i className="fas fa-edit absolute -right-4 -bottom-4 text-white/5 text-8xl rotate-12"></i>
                        <div className="relative z-10">
                          <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                            <i className="fas fa-meteor text-amber-400"></i>
                            오답 정복하기
                          </h4>
                          <p className="text-slate-400 text-sm mb-6">틀린 {wrongQuestions.length}문제를 완벽하게 내 것으로 만드세요.</p>
                          <div className="flex flex-col sm:flex-row gap-3">
                            <button
                              onClick={() => {
                                setQuestions([...wrongQuestions]);
                                setCurrentIndex(0);
                                setCorrectCount(0);
                                setWrongQuestions([]);
                                setView('quiz');
                              }}
                              className="flex-1 py-4 text-white rounded-2xl font-black transition-all active:scale-95 flex items-center justify-center gap-2"
                              style={{backgroundColor: themeHex}}
                            >
                              <i className="fas fa-redo-alt"></i>
                              다시 풀기
                            </button>
                            
                            {!isWordbookTest && (
                              <button
                                onClick={() => console.log("오답노트로 이동")}
                                className="flex-1 py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-bold transition-all border border-white/10 flex items-center justify-center gap-2"
                              >
                                <i className="fas fa-book-medical"></i>
                                오답노트 가기
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ✨ [최종 해결 포인트] 꼬임 및 백지화 방지 로직 */}
                    {onNextPageHandler && (
                      <button
                        onClick={() => {
                          // 1. 문법 학습으로 돌아갈 때 비어버린 데이터 바구니를 다시 채움 (백지화 방지)
                          if (!isWordbookTest) {
                            setQuestions(grammarDataN3 || []); 
                            setView('grammar');
                          } else {
                            setView('wordbook');
                          }
                          // 2. 페이지 상태 업데이트 실행
                          onNextPageHandler(); 
                          // 3. 최상단 스크롤
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="w-full py-4 text-white rounded-2xl font-black transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg"
                        style={{backgroundColor: themeHex}}
                      >
                        <i className="fas fa-arrow-right"></i>
                        다음 페이지 학습하기
                      </button>
                    )}
                  </div>

                  <button onClick={reset} className="mt-12 text-slate-400 font-bold hover:text-slate-800 transition-colors flex items-center gap-2">
                    <i className="fas fa-arrow-left text-xs"></i>
                    메인 화면으로 이동
                  </button>
                </>
              );
            })()}
          </div>
        )}
      </main>

      <nav className={`fixed bottom-0 left-1/2 -translate-x-1/2 z-[100] bg-white border-t border-slate-100 px-6 py-3 grid grid-cols-4 gap-2 max-w-screen-2xl w-full shadow-[0_-10px_30px_rgba(0,0,0,0.03)] transition-all ${view === 'quiz' ? 'opacity-0 pointer-events-none translate-y-10' : 'opacity-100'}`}>
        {['홈', '북마크', '통계', '프로필'].map((item, idx) => (
          <button 
            key={item} 
            onClick={idx === 0 ? reset : undefined} 
            className={`flex flex-col items-center justify-center p-2 transition-colors ${
              (view === 'home' && idx === 0) ? 'text-indigo-600' : 'text-slate-300 hover:text-slate-400'
            }`}
          >
            <i className={`fas fa-${['home', 'bookmark', 'chart-pie', 'user'][idx]} text-lg mb-1`}></i>
            <span className="text-[10px] font-bold">{item}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default App;