import { VocabGrammarQuestion, Category } from '../../types';

export const n3SentenceGrammar: VocabGrammarQuestion[] = [
  {
    id: "n3-sg-001",
    level: "N3", // 추가됨
    type: "language_knowledge",
    category: Category.SENTENCE_GRAMMAR,
    question: "（편지 지문 중）お元気ですか。私は（　　）。",
    options: ["元気です", "元気でした", "元気でしょう", "元気で"],
    answer: 0,
    explanation: "현재 상태를 나타냄",
    reference: "N3 문법"
  },
  {
    id: "n3-sg-002",
    level: "N3", // 추가됨
    type: "language_knowledge",
    category: Category.SENTENCE_GRAMMAR,
    question: "（일기 지문 중）昨日は雨が（　　）。",
    options: ["降る", "降った", "降って", "降り"],
    answer: 1,
    explanation: "과거 사실 나열",
    reference: "N3 문법"
  }
];