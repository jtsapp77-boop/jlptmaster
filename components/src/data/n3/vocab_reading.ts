import { VocabGrammarQuestion, Category } from '../../types';

export const n3VocabReading: VocabGrammarQuestion[] = [
  {
    id: "n3-vr-001",
    level: "N3", // 추가됨
    type: "language_knowledge",
    category: Category.VOCAB_READING,
    question: "新しい**案内**書を読みました。",
    options: ["あんない", "かんない", "あんさい", "かんさい"],
    answer: 0,
    explanation: "案内(あんない): 안내",
    reference: "N3 어휘"
  },
  {
    id: "n3-vr-002",
    level: "N3", // 추가됨
    type: "language_knowledge",
    category: Category.VOCAB_READING,
    question: "この箱の中身은 **重要**です。",
    options: ["じゅうよう", "ちょうよう", "じゅうよ", "ちょうよ"],
    answer: 0,
    explanation: "重要(じゅうよう): 중요",
    reference: "N3 어휘"
  }
];