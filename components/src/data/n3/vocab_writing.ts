import { VocabGrammarQuestion, Category } from '../../types';

export const n3VocabWriting: VocabGrammarQuestion[] = [
  {
    id: "n3-vw-001",
    level: "N3", // 추가됨
    type: "language_knowledge",
    category: Category.VOCAB_WRITING,
    question: "彼は**けっこん**しています。",
    options: ["結婚", "結婚", "結官", "結記"],
    answer: 1,
    explanation: "けっこん: 결혼",
    reference: "N3 어휘"
  },
  {
    id: "n3-vw-002",
    level: "N3", // 추가됨
    type: "language_knowledge",
    category: Category.VOCAB_WRITING,
    question: "将来의 **ゆめ**は何ですか。",
    options: ["夢", "暮", "墓", "幕"],
    answer: 0,
    explanation: "ゆめ: 꿈",
    reference: "N3 어휘"
  }
];