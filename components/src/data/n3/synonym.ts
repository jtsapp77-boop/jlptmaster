import { VocabGrammarQuestion, Category } from '../../types';

export const n3Synonym: VocabGrammarQuestion[] = [
  {
    id: "n3-sy-001",
    level: "N3", // 추가됨
    type: "language_knowledge",
    category: Category.SYNONYM,
    question: "その話は**でたらめ**だ。",
    options: ["本当だ", "うそだ", "有名だ", "複雑だ"],
    answer: 1,
    explanation: "でたらめ = うそ (터무니없음/거짓말)",
    reference: "N3 어휘"
  },
  {
    id: "n3-sy-002",
    level: "N3", // 추가됨
    type: "language_knowledge",
    category: Category.SYNONYM,
    question: "さっき**たまたま**会いました。",
    options: ["わざと", "すぐに", "偶然", "急に"],
    answer: 2,
    explanation: "たまたま = 偶然 (우연히)",
    reference: "N3 어휘"
  }
];