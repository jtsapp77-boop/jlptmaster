import React from 'react';

// 9번 문제를 위한 타입을 'CONTEXT'로 정의하거나, 기존 구조에 맞춰 확장 가능
export type GrammarCategoryType = 'LV1' | 'LV2' | 'LV3' | 'CONTEXT';

interface VocabCardHomeProps {
  currentLevel: string;
  onSelectCategory: (category: GrammarCategoryType) => void;
  onBack: () => void;
}

const VocabCardHome: React.FC<VocabCardHomeProps> = ({ 
  currentLevel, 
  onSelectCategory, 
  onBack 
}) => {
  // 인디고 테마를 기반으로 한 4가지 카테고리 설정
  const categories = [
    { 
      id: 'LV1' as const, 
      title: '★★★ 필수 문법', 
      desc: '출제 빈도가 가장 높은 N3 핵심 기능어', 
      icon: 'fa-star', 
      color: 'text-indigo-600', 
      bg: 'bg-indigo-100/50', 
      hoverBg: 'group-hover:bg-indigo-600' 
    },
    { 
      id: 'LV2' as const, 
      title: '★★ 중요 문법', 
      desc: '합격을 굳히는 실전용 빈출 문법', 
      icon: 'fa-star-half-alt', 
      color: 'text-indigo-500', 
      bg: 'bg-indigo-50', 
      hoverBg: 'group-hover:bg-indigo-500' 
    },
    { 
      id: 'LV3' as const, 
      title: '★ 기초 문법', 
      desc: '놓치기 쉬운 기본기와 세부 문법 정리', 
      icon: 'fa-check-circle', 
      color: 'text-indigo-400', 
      bg: 'bg-indigo-50/30', 
      hoverBg: 'group-hover:bg-indigo-400' 
    },
    { 
      id: 'CONTEXT' as const, 
      title: '실전 문맥 & 접속사', 
      desc: '지문 속 빈칸을 채우는 문맥 파악 (문제 9번)', 
      icon: 'fa-link', 
      color: 'text-white', 
      bg: 'bg-gradient-to-br from-indigo-500 to-indigo-700', 
      hoverBg: 'group-hover:from-indigo-600 group-hover:to-indigo-800',
      isSpecial: true // 9번 문제만의 독립성을 위한 플래그
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
      {/* 상단 헤더: 인디고 테마 포인트 강화 */}
      <div className="pt-4 flex items-center justify-between border-b border-slate-100 pb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            <span className="text-[#4F46E5]">{currentLevel}</span> 유형별 문법 학습
          </h2>
          <p className="text-slate-400 text-xs md:text-sm font-bold mt-1 uppercase tracking-wider italic">Grammar & Context Master</p>
        </div>
        <button 
          onClick={onBack} 
          className="group flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-500 text-sm font-bold hover:bg-indigo-50 hover:border-indigo-200 hover:text-[#4F46E5] transition-all shadow-sm"
        >
          <i className="fas fa-arrow-left text-[10px] group-hover:-translate-x-1 transition-transform"></i>
          뒤로가기
        </button>
      </div>

      {/* 카드 리스트: 9번 문제는 별도의 존재감을 위해 상단 3개와 구분 */}
      <div className="grid grid-cols-1 gap-4">
        {categories.map((cat) => (
          <button 
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`group p-5 md:p-6 rounded-[2rem] border-2 transition-all duration-300 text-left flex items-center gap-6 relative overflow-hidden
              ${cat.isSpecial 
                ? `${cat.bg} border-transparent hover:shadow-2xl hover:shadow-indigo-200` 
                : 'bg-white border-slate-50 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100'
              }`}
          >
            {/* 아이콘: 인디고 테마 적용 */}
            <div className={`w-14 h-14 ${cat.isSpecial ? 'bg-white/20 text-white' : `${cat.bg} ${cat.color}`} rounded-2xl flex items-center justify-center shrink-0 ${cat.hoverBg} ${cat.isSpecial ? '' : 'group-hover:text-white'} transition-all duration-300 group-hover:rotate-6`}>
              <i className={`fas ${cat.icon} text-xl`}></i>
            </div>
            
            <div className="flex-1 z-10">
              <h3 className={`text-lg md:text-xl font-extrabold flex items-center gap-2 ${cat.isSpecial ? 'text-white' : 'text-slate-800'}`}>
                {cat.title}
                <i className={`fas fa-chevron-right text-[10px] transition-transform group-hover:translate-x-1 ${cat.isSpecial ? 'text-white/50' : 'text-slate-300 group-hover:text-[#4F46E5]'}`}></i>
              </h3>
              <p className={`text-sm mt-0.5 font-medium ${cat.isSpecial ? 'text-indigo-100' : 'text-slate-400'}`}>{cat.desc}</p>
            </div>

            {/* 배경 장식: 인디고톤의 은은한 아이콘 깔기 */}
            <div className={`absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.1] transition-opacity duration-500 pointer-events-none ${cat.isSpecial ? 'text-white' : 'text-indigo-900'}`}>
              <i className={`fas ${cat.icon} text-8xl rotate-12`}></i>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default VocabCardHome;