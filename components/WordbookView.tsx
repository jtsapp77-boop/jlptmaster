import React, { useState, useMemo, useEffect } from 'react';

const WordbookView: React.FC<any> = ({
  data,
  currentLevel,
  onBack,
  onStartTest,
  wordbookPage,
  setWordbookPage,
  wordbookTab
}) => {
  const currentPage = wordbookPage;
  const setCurrentPage = setWordbookPage;
  const activeTab = wordbookTab;

  const [subFilter, setSubFilter] = useState<string>("전체");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const itemsPerPage = 12;
  const [inputValue, setInputValue] = useState<string>(currentPage?.toString() || "1");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setInputValue(currentPage?.toString() || "1");
  }, [currentPage]);

  // ✨ [수정] 카테고리 명칭 변경: 필수 - 주요 - 기본
  const posCategories = activeTab === "kanji" 
    ? ["전체", "필수", "주요", "기본"] 
    : ["전체", "명사", "동사", "형용사", "부사", "기타"];

  const filteredData = useMemo(() => {
    if (!data) return [];
    return data.filter((d: any) => {
      if (d.category !== activeTab) return false;
      if (subFilter === "전체") return true;
      if (activeTab === "kanji") {
        // ✨ [수정] 데이터 맵핑 기준 변경
        const kanjiLevelMap: Record<string, number> = { "필수": 3, "주요": 2, "기본": 1 };
        return d.difficulty === kanjiLevelMap[subFilter];
      } else {
        return d.partOfSpeech && d.partOfSpeech.startsWith(subFilter);
      }
    });
  }, [data, activeTab, subFilter]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = (currentPage || 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFilterChange = (cat: string) => {
    setSubFilter(cat);
    setCurrentPage(1);
    scrollToTop();
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    scrollToTop();
  };

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleTestClick = () => {
    if (currentItems.length === 0) return;
    const testQuestions = currentItems.map((item: any) => {
      const otherOptions = data
        .filter((d: any) =>
          d.category === item.category &&
          d.meaning !== item.meaning &&
          d.partOfSpeech === item.partOfSpeech
        )
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map((d: any) => d.meaning);

      const allOptions = [item.meaning, ...otherOptions].sort(() => 0.5 - Math.random());
      const correctIndex = allOptions.findIndex(opt => opt === item.meaning);

      return {
        id: `test-${item.id}-${Date.now()}`,
        type: 'language_knowledge',
        question: `다음 단어의 올바른 의미를 고르세요: **${item.kanji}**`,
        reading: item.reading,
        answer: correctIndex,
        options: allOptions,
        explanation: `${item.kanji} 【${item.reading}】 : ${item.meaning}`
      };
    });
    onStartTest(testQuestions, () => {
      if (currentPage < totalPages) handlePageChange(currentPage + 1);
    });
  };

  // ✨ [추가] 등급별 스타일(배경색, 별점) 정의 함수
  const getDifficultyStyles = (difficulty: number) => {
    switch(difficulty) {
      case 3: return { bg: "bg-rose-100/60", stars: "★★★", tagBg: "bg-rose-100 text-rose-600" }; // 필수
      case 2: return { bg: "bg-rose-50/50", stars: "★★", tagBg: "bg-rose-50 text-[#FF7F7F]" };   // 주요
      case 1: return { bg: "bg-slate-50/50", stars: "★", tagBg: "bg-slate-50 text-slate-400" };    // 기본
      default: return { bg: "bg-slate-50/50", stars: "", tagBg: "bg-slate-50 text-slate-400" };
    }
  };

  const getKanjiBtnStyle = (cat: string) => {
    if (subFilter !== cat) return "bg-white/80 text-slate-400 border-slate-100 hover:bg-rose-50/50 hover:text-[#FF7F7F]";
    // 필터 버튼도 로즈색으로 통일
    return "bg-[#FF7F7F] text-white shadow-lg shadow-rose-200/50 border-[#FF7F7F]";
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 상단 헤더 영역 */}
      <div className="sticky top-0 z-20 px-6 py-8 backdrop-blur-md bg-slate-50/80">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="animate-in fade-in slide-in-from-left-4 duration-500">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 bg-rose-50 text-[#FF7F7F] text-[10px] font-black rounded-md tracking-widest uppercase">
                  {activeTab === "kanji" ? "Kanji Master" : "Vocab Master"}
                </span>
                <span className="w-1 h-1 rounded-full bg-slate-200"></span>
                <span className="text-slate-400 text-[10px] font-bold tracking-tight uppercase italic">JLPT {currentLevel}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-none">
                {activeTab === "kanji" ? "필수 한자 리스트" : "필수 어휘 리스트"}
              </h2>
            </div>
            
            <button 
              onClick={onBack} 
              className="group flex items-center gap-2 px-4 py-2 bg-white/80 border border-slate-200 rounded-full text-slate-500 text-sm font-bold hover:bg-rose-50 hover:border-rose-200 hover:text-[#FF7F7F] transition-all shadow-sm active:scale-95"
            >
              <i className="fas fa-arrow-left text-[10px] group-hover:-translate-x-1 transition-transform"></i>
              뒤로가기
            </button>
          </div>

          <div className={`flex flex-wrap gap-2.5 animate-in fade-in slide-in-from-bottom-2 duration-700 justify-start`}>
            {posCategories.map((cat) => (
              <button 
                key={cat} 
                onClick={() => handleFilterChange(cat)} 
                className={`px-6 py-2.5 rounded-2xl text-xs font-black transition-all border shadow-sm ${
                  activeTab === "kanji" 
                    ? getKanjiBtnStyle(cat)
                    : subFilter === cat 
                      ? "bg-[#FF7F7F] text-white border-[#FF7F7F] shadow-lg shadow-rose-200/50" 
                      : "bg-white/80 text-slate-400 border-slate-100 hover:bg-white hover:text-[#FF7F7F]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 리스트 본문 */}
      <div className="max-w-5xl mx-auto px-6 mt-2 md:mt-4">
        {activeTab === "kanji" ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {currentItems.map((item: any) => {
              const isBookmarked = item.isBookmarked || false;
              // ✨ 등급별 스타일 가져오기
              const style = getDifficultyStyles(item.difficulty);
              
              return (
                <div key={item.id} className="group flex bg-white rounded-[2.5rem] border-2 border-slate-100/50 hover:border-rose-100 hover:shadow-xl transition-all duration-300 overflow-hidden min-h-[160px]">
                  {/* ✨ [수정] 카드 왼쪽: 등급별 배경색 및 상단 별표(Star) 배치 */}
                  <div className={`w-1/3 ${style.bg} flex flex-col items-center justify-center p-4 border-r border-slate-100 group-hover:bg-rose-50/30 transition-colors relative`}>
                    {/* 별표 훈장 */}
                    <div className="absolute top-4 text-[10px] font-black text-[#FF7F7F] tracking-tighter opacity-40 group-hover:opacity-100 transition-all duration-500">
                      {style.stars}
                    </div>
                    
                    <div className="text-5xl md:text-6xl font-black text-slate-800 group-hover:scale-105 transition-transform duration-500 mb-2 mt-2">{item.kanji}</div>
                    <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1 px-2 w-full">
                      <span className="text-xs md:text-sm font-bold text-slate-900 whitespace-nowrap">{item.meaning.split(' · ')[0]}</span>
                      <span className="h-2 w-[1px] bg-slate-200 hidden md:inline-block"></span>
                      <span className="text-xs md:text-sm font-black text-rose-600 tracking-tight">{item.reading.replace(/\//g, '·')}</span>
                    </div>
                  </div>
                  
                  <div className="w-2/3 p-6 flex flex-col relative">
                    <button onClick={(e) => { e.stopPropagation(); }} className="absolute top-4 right-5 p-2 transition-all active:scale-125 group/bookmark">
                      <i className={`${isBookmarked ? 'fas text-rose-500' : 'far text-slate-200'} fa-bookmark text-xl group-hover/bookmark:text-rose-300 transition-colors`}></i>
                    </button>
                    <div className="mb-4 pr-8">
                      <h3 className="text-lg md:text-xl font-black text-slate-900 leading-tight">{item.meaning}</h3>
                    </div>
                    <div className="flex flex-col gap-3">
                      {item.relatedWords?.map((rw: any, idx: number) => {
                        const uniqueKey = `${item.id}-${idx}`;
                        const isExpanded = expandedId === uniqueKey;
                        return (
                          <div key={idx} className="flex flex-col border-b border-slate-50 last:border-0 pb-2 last:pb-0">
                            <div onClick={() => toggleAccordion(uniqueKey)} className="flex items-center cursor-pointer group/row hover:translate-x-1 transition-transform">
                              <span className="text-sm md:text-base font-black text-slate-700">{rw.word}</span>
                              {rw.reading && (
                                <span className="ml-1.5 text-[10px] md:text-xs font-bold text-rose-400 font-mono tracking-tighter">
                                  【{rw.reading}】
                                </span>
                              )}
                              <span className="mx-2 text-slate-300">·</span>
                              <span className="text-sm font-bold text-slate-500">{rw.meaning}</span>
                              <i className={`fas fa-chevron-down ml-auto text-[10px] text-slate-300 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-rose-300' : ''}`}></i>
                            </div>
                            <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                              <div className="pl-4 border-l-2 border-rose-100 flex flex-col gap-1">
                                <p className="text-xs md:text-sm font-bold text-slate-400 italic">“ {rw.s} ”</p>
                                <p className="text-[11px] md:text-xs font-medium text-slate-400">{rw.t}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* 어휘 리스트 */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 md:gap-4">
            {currentItems.map((item: any) => {
              const isBookmarked = item.isBookmarked || false;
              const style = getDifficultyStyles(item.difficulty);

              return (
                <div 
                  key={item.id} 
                  className={`bg-white py-4 px-5 rounded-[1.5rem] border-2 flex justify-between items-center group cursor-pointer transition-all duration-300 ${
                    item.difficulty === 3 
                      ? "border-rose-200/70 hover:shadow-rose-100 hover:shadow-lg" 
                      : "border-slate-100/50 hover:shadow-md"
                  } hover:border-rose-100`}
                >
                  <div className="flex flex-col flex-1 pr-4 overflow-hidden">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="text-xl font-black text-slate-800 group-hover:text-rose-600 transition-colors">
                        {item.kanji}
                      </span>
                      <span className="text-sm font-medium text-rose-600/80 font-mono tracking-tight">
                        {item.reading}
                      </span>
                      {/* 🔍 [수정 1] 품사 태그 내 수직선 Divider 추가 및 정렬 */}
                      <span className={`text-[10px] px-2 py-0.5 rounded-md font-bold uppercase border border-slate-100/50 flex items-center gap-1.5 ${style.tagBg}`}>
                        {item.partOfSpeech}
                        {style.stars && (
                          <span className="flex items-center gap-1.5 ml-0.5">
                            <span className="w-[1px] h-2 bg-current/20"></span>
                            <span className="tracking-tighter">{style.stars}</span>
                          </span>
                        )}
                      </span>
                    </div>
                    <div className="text-slate-600 mt-0.5 font-semibold text-base leading-tight truncate">
                      {item.meaning}
                    </div>
                  </div>
                  <button 
                    onClick={(e) => { e.stopPropagation(); }}
                    className="p-1.5 transition-all active:scale-125 group/bookmark flex-shrink-0"
                  >
                    <i className={`${isBookmarked ? 'fas text-rose-500' : 'far text-slate-200'} fa-bookmark text-2xl group-hover/bookmark:text-rose-400 transition-colors`}></i>
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {/* --- 하단 페이징 영역 --- */}
        {currentItems.length > 0 && (
          <div className="mt-8 flex flex-col items-center">
            <button onClick={handleTestClick} className="group relative flex items-center gap-3 px-8 py-3.5 bg-white border-2 border-[#FF7F7F] rounded-2xl shadow-xl shadow-rose-50 hover:bg-[#FF7F7F] transition-all duration-300 active:scale-95">
              <i className="fas fa-vial text-[#FF7F7F] group-hover:text-white transition-colors text-lg"></i>
              <span className="text-[#FF7F7F] group-hover:text-white font-black text-sm md:text-base transition-colors">현재 페이지 단어 테스트 하기</span>
            </button>
          </div>
        )}

        {totalPages > 0 && (
          <div className="max-w-xl mx-auto border-t border-slate-100 pt-8 pb-12 px-2 mt-8">
            <div className="flex items-center justify-center gap-3 md:gap-5">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => handlePageChange(1)}
                  disabled={currentPage === 1}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                    currentPage === 1 ? "text-slate-200 bg-slate-50/50" : "text-slate-400 hover:text-[#FF7F7F] hover:bg-white"
                  }`}
                >
                  <i className="fas fa-angle-double-left text-base"></i>
                </button>
                <button
                  onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                  disabled={currentPage === 1}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                    currentPage === 1 
                      ? "text-slate-200 bg-slate-50/50" 
                      : "bg-white text-slate-600 shadow-sm border border-slate-100 hover:border-[#FF7F7F] hover:text-[#FF7F7F] active:scale-90"
                  }`}
                >
                  <i className="fas fa-chevron-left text-sm"></i>
                </button>
              </div>

              <div className={`flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border-2 transition-all shadow-sm focus-within:ring-4 focus-within:ring-rose-50 ${
                inputValue !== currentPage?.toString() ? 'border-[#FF7F7F]' : 'border-slate-100'
              }`}>
                <input 
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={inputValue}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === "" || /^[0-9]+$/.test(val)) setInputValue(val);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      const num = parseInt(inputValue);
                      if (!isNaN(num) && num >= 1 && num <= totalPages) handlePageChange(num);
                      else setInputValue(currentPage?.toString() || "1");
                      (e.target as HTMLInputElement).blur();
                    }
                  }}
                  onBlur={() => {
                    const num = parseInt(inputValue);
                    if (!isNaN(num) && num >= 1 && num <= totalPages) handlePageChange(num);
                    else setInputValue(currentPage?.toString() || "1");
                  }}
                  className="w-8 md:w-10 bg-transparent text-center text-lg font-black text-[#FF7F7F] outline-none"
                />
                <span className="text-slate-300 font-bold text-sm">/</span>
                <span className="text-slate-400 font-bold text-sm min-w-[20px] text-center">{totalPages}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                    currentPage === totalPages 
                      ? "text-slate-200 bg-slate-50/50" 
                      : "bg-white text-slate-600 shadow-sm border border-slate-100 hover:border-[#FF7F7F] hover:text-[#FF7F7F] active:scale-90"
                  }`}
                >
                  <i className="fas fa-chevron-right text-sm"></i>
                </button>
                <button
                  onClick={() => handlePageChange(totalPages)}
                  disabled={currentPage === totalPages}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                    currentPage === totalPages ? "text-slate-200 bg-slate-50/50" : "text-slate-400 hover:text-[#FF7F7F] hover:bg-white"
                  }`}
                >
                  <i className="fas fa-angle-double-right text-base"></i>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WordbookView;