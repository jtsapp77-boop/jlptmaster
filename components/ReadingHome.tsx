import React from 'react';
import { ReadingType } from './src/types'; 

interface ReadingHomeProps {
  currentLevel: string;
  onSelectCategory: (type: ReadingType | 'REAL') => void;
  onBack: () => void;
}

const ReadingHome: React.FC<ReadingHomeProps> = ({ currentLevel, onSelectCategory, onBack }) => {
  const categories = [
    { id: 'SHORT', title: '단문 독해', desc: '짧은 지문의 핵심 내용을 빠르게 파악', icon: 'fa-file-alt' },
    { id: 'MEDIUM', title: '중문 독해', desc: '문장의 흐름과 논리적 인과관계 분석', icon: 'fa-align-left' },
    { id: 'LONG', title: '장문 독해', desc: '지문 전체의 맥락과 필자의 의도 이해', icon: 'fa-copy' },
    { id: 'SEARCH', title: '정보 검색', desc: '광고나 공지문에서 필요한 정보 찾기', icon: 'fa-search' },
    { id: 'REAL', title: '실전 모드', desc: '시험과 동일한 구성으로 9문항 풀이', icon: 'fa-stopwatch' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
      {/* 상단 헤더: 에메랄드 테마 포인트 강화 */}
      <div className="pt-4 flex items-center justify-between border-b border-slate-100 pb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            <span className="text-[#10B981]">{currentLevel}</span> 유형별 독해 학습
          </h2>
          <p className="text-slate-400 text-xs md:text-sm font-bold mt-1 uppercase tracking-wider italic">Reading Proficiency</p>
        </div>
        <button 
          onClick={onBack} 
          className="group flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-500 text-sm font-bold hover:bg-emerald-50 hover:border-emerald-200 hover:text-[#10B981] transition-all shadow-sm"
        >
          <i className="fas fa-arrow-left text-[10px] group-hover:-translate-x-1 transition-transform"></i>
          뒤로가기
        </button>
      </div>

      {/* 카드 리스트: 에메랄드톤의 그림자와 피드백 적용 */}
      <div className="grid grid-cols-1 gap-4">
        {categories.map((cat) => (
          <button 
            key={cat.id}
            onClick={() => onSelectCategory(cat.id as any)}
            className="group bg-white p-5 md:p-6 rounded-[2rem] border-2 border-slate-50 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-100 transition-all duration-300 text-left flex items-center gap-6 relative overflow-hidden"
          >
            {/* 아이콘: 에메랄드 대표색 적용 및 Hover 시 회전 애니메이션 */}
            <div className="w-14 h-14 bg-emerald-50 text-[#10B981] rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#10B981] group-hover:text-white transition-all duration-300 group-hover:rotate-6">
              <i className={`fas ${cat.icon} text-xl`}></i>
            </div>
            
            <div className="flex-1 z-10">
              <h3 className="text-lg md:text-xl font-extrabold text-slate-800 flex items-center gap-2">
                {cat.title}
                <i className="fas fa-chevron-right text-[10px] text-slate-300 group-hover:translate-x-1 transition-transform group-hover:text-[#10B981]"></i>
              </h3>
              <p className="text-slate-400 text-sm mt-0.5 font-medium">{cat.desc}</p>
            </div>

            {/* 배경 장식: 독해 테마에 맞춘 은은한 장식 */}
            <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.1] text-emerald-900 transition-opacity duration-500 pointer-events-none">
              <i className={`fas ${cat.icon} text-8xl rotate-12`}></i>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ReadingHome;