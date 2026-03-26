
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-12">
      <div className="relative w-20 h-20">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-indigo-100 border-t-indigo-600 rounded-full animate-spin"></div>
        <div className="absolute top-2 left-2 w-16 h-16 border-4 border-emerald-100 border-b-emerald-500 rounded-full animate-spin-reverse"></div>
      </div>
      <p className="mt-6 text-indigo-900 font-medium animate-pulse">출제 위원이 문제를 생성 중입니다...</p>
      <p className="mt-2 text-slate-400 text-sm">잠시만 기다려 주세요.</p>
    </div>
  );
};

export default LoadingSpinner;
