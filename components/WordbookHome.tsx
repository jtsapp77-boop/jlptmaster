import React from 'react';

interface WordbookHomeProps {
  currentLevel: string;
  onSelectType: (type: 'kanji' | 'vocabulary') => void;
  onSelectBookmark: () => void;
  onBack: () => void;
}

const WordbookHome: React.FC<WordbookHomeProps> = ({ 
  currentLevel, 
  onSelectType, 
  onSelectBookmark,
  onBack 
}) => {
  const categories = [
    { 
      id: 'kanji', 
      title: '한자 학습', 
      desc: 'JLPT 필수 한자와 읽기, 예문 정복', 
      icon: 'fa-pen-nib', 
      color: 'text-[#FF7F7F]', 
      bg: 'bg-rose-50', 
      hoverBg: 'group-hover:bg-[#FF7F7F]' 
    },
    { 
      id: 'vocabulary', 
      title: '어휘 학습', 
      desc: '명사·동사 등 품사별 단어 완벽 암기', 
      icon: 'fa-language', 
      color: 'text-rose-400', 
      bg: 'bg-rose-50/50', 
      hoverBg: 'group-hover:bg-rose-400' 
    },
    { 
      id: 'bookmark', 
      title: '나의 북마크', 
      desc: '내가 별표 친 단어들만 모아보기', 
      icon: 'fa-bookmark', 
      color: 'text-amber-400', 
      bg: 'bg-amber-50', 
      hoverBg: 'group-hover:bg-amber-400' 
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
      {/* 상단 헤더: 로즈 컬러 포인트 강화 */}
      <div className="pt-4 flex items-center justify-between border-b border-slate-100 pb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            <span className="text-[#FF7F7F]">{currentLevel}</span> 유형별 단어 학습
          </h2>
          <p className="text-slate-400 text-xs md:text-sm font-bold mt-1 uppercase tracking-wider italic">Vocab & Kanji Master</p>
        </div>
        <button 
          onClick={onBack} 
          className="group flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-500 text-sm font-bold hover:bg-rose-50 hover:border-rose-200 hover:text-[#FF7F7F] transition-all shadow-sm"
        >
          <i className="fas fa-arrow-left text-[10px] group-hover:-translate-x-1 transition-transform"></i>
          뒤로가기
        </button>
      </div>

      {/* 카드 리스트: 로즈 컬러의 그림자 농도 조절 */}
      <div className="grid grid-cols-1 gap-4">
        {categories.map((cat) => (
          <button 
            key={cat.id}
            onClick={() => {
              if (cat.id === 'bookmark') onSelectBookmark();
              else onSelectType(cat.id as 'kanji' | 'vocabulary');
            }}
            className={`group bg-white p-5 md:p-6 rounded-[2rem] border-2 border-slate-50 hover:border-rose-200 hover:shadow-xl hover:shadow-rose-100 transition-all duration-300 text-left flex items-center gap-6 relative overflow-hidden`}
          >
            {/* 아이콘: 대표색 #FF7F7F 적용 */}
            <div className={`w-14 h-14 ${cat.bg} ${cat.color} rounded-2xl flex items-center justify-center shrink-0 ${cat.hoverBg} group-hover:text-white transition-all duration-300 group-hover:rotate-6`}>
              <i className={`fas ${cat.icon} text-xl`}></i>
            </div>
            
            <div className="flex-1 z-10">
              <h3 className="text-lg md:text-xl font-extrabold text-slate-800 flex items-center gap-2">
                {cat.title}
                <i className="fas fa-chevron-right text-[10px] text-slate-300 group-hover:translate-x-1 transition-transform group-hover:text-[#FF7F7F]"></i>
              </h3>
              <p className="text-slate-400 text-sm mt-0.5 font-medium">{cat.desc}</p>
            </div>

            {/* 배경 장식: 로즈톤의 은은한 컬러감 추가 */}
            <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.1] text-rose-900 transition-opacity duration-500 pointer-events-none">
              <i className={`fas ${cat.icon} text-8xl rotate-12`}></i>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default WordbookHome;