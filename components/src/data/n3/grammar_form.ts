import { VocabGrammarQuestion, Category } from '../../types';

export const n3GrammarForm: VocabGrammarQuestion[] = [
  {
    id: "n3-gf-001",
    level: "N3", // 추가됨
    type: "language_knowledge",
    category: Category.GRAMMAR_FORM,
    question: "日本へ（　　）ばかりです。",
    options: ["来た", "来る", "来ている", "来よう"],
    answer: 0,
    explanation: "V-たばかり: 막 ~한 참이다",
    reference: "N3 문법"
  },
  {
    id: "n3-gf-002",
    level: "N3", // 추가됨
    type: "language_knowledge",
    category: Category.GRAMMAR_FORM,
    question: "雨が（　　）そうです。",
    options: ["降る", "降り", "降って", "降った"],
    answer: 1,
    explanation: "V-ます형 + そうだ: ~할 것 같다",
    reference: "N3 문법"
  }
];