export type JLPTLevel = 'N1' | 'N2' | 'N3' | 'N4' | 'N5';

export type QuestionType = 'language_knowledge' | 'reading';

/**
 * [추가] 독해 세부 카테고리 구분을 위한 타입
 * SHORT: 단문, MEDIUM: 중문, LONG: 장문, SEARCH: 정보검색
 */
export type ReadingType = 'SHORT' | 'MEDIUM' | 'LONG' | 'SEARCH';

// --- 문자 어휘 / 문법 문제 타입 ---
export interface VocabGrammarQuestion {
  id: string;
  level: JLPTLevel;
  type: 'language_knowledge';
  category: Category | string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
  reference?: string;
}

// --- 독해 개별 문항 타입 ---
export interface ReadingQuestionItem {
  q_text: string;      // 질문 (일본어)
  options: string[];   // 보기
  answer: number;      // 정답 인덱스
  explanation: string; // 한국어 해설
  evidence: string;    // 정답 근거 문장 (하이라이트용)
  strategy?: string;   // 문제 풀이 트릭/전략
}

// --- 독해 전체 지문 타입 ---
export interface ReadingQuestion {
  id: string;
  level: JLPTLevel;
  type: 'reading';
  readingType: ReadingType; // [추가] 카테고리 페이지 및 실전 모드 분류용
  category: Category | string;
  title: string;       // 지문 제목 (일본어)
  title_kr?: string;   // 지문 제목 (한국어)
  passage: string;     // 지문 본문 (일본어)
  translation: string; // 본문 전체 번역
  
  // 단어 리스트 (객체 배열)
  vocabulary_list: Array<{
    word: string;
    reading: string;
    meaning: string;
  }>;
  
  // 한 지문에 여러 문제 대응을 위한 배열
  questions: ReadingQuestionItem[]; 
  
  reference?: string;
  visual_aid?: string; // 정보 검색용 이미지 경로
}

export type JLPTQuestion = VocabGrammarQuestion | ReadingQuestion;

// --- 카테고리 정의 (Enum) ---
export enum Category {
  VOCAB_READING = '한자 읽기',
  VOCAB_WRITING = '표기',
  CONTEXT_DEFINITION = '문맥 규정',
  SYNONYM = '유의어',
  USAGE = '용법',
  GRAMMAR_FORM = '문법 형식',
  SENTENCE_ORDER = '문장 배열',
  SENTENCE_GRAMMAR = '문장 문법',
  READING_SHORT = '뉴스/단문',
  READING_MEDIUM = '중문 독해',
  READING_LONG = '장문 독해',
  INFO_SEARCH = '정보 검색'
}

// --- 단어장 아이템 타입 ---
export interface VocabItem {
  id: string;
  category: 'vocabulary' | 'kanji';
  groupIndex: number;
  kanji: string;
  reading: string;
  meaning: string;
  partOfSpeech: string;
  difficulty: number;
  isBookmarked: boolean;
  isMastered: boolean;
  example?: {
    s: string; // 일본어 예문
    t: string; // 한국어 번역
  };
  relatedWords?: Array<{
    word: string;
    reading: string;
    meaning: string;
    s?: string;
    t?: string;
  }>;
}

// --- [참고용] 퀴즈 데이터 구조 ---
export interface QuizData {
  reading_card: {
    title: string;
    japanese_text: string;
    translation: string;
  };
  vocabulary_list: Array<{
    word: string;
    reading: string;
    meaning: string;
  }>;
  quiz: Array<{
    question: string;
    options: string[];
    answer: number;
    explanation: string;
  }>;
}

// --- [신규 추가] VocabCard 컴포넌트의 통일성 강화를 위한 Props 타입 ---
/**
 * VocabCard가 리스트 뷰와 퀴즈 뷰를 모두 처리하고, 
 * WordbookView와 디자인/기능적 통일성을 갖추기 위해 필요한 타입 정의입니다.
 */
export interface VocabCardProps {
  data: any;                    // 단일 문제 객체 혹은 문제 객체 배열
  onNext: () => void;
  isLast: boolean;
  onFinish: () => void;
  onCorrect: () => void;
  onWrong: () => void;
  // [디자인 통일 전략] 뒤로가기 버튼 기능 배달
  onBack?: () => void;          
  // [디자인 통일 전략] 외부 선택 카테고리를 내부 필터와 동기화
  initialFilter?: string;       
  isWordbook?: boolean;
  onStartTest?: (questions: any[], onNextPage?: () => void) => void;
}