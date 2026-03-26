import { VocabGrammarQuestion, Category } from '../../types';

export const n3Order: VocabGrammarQuestion[] = [
  {
    id: "n3-so-001",
    level: "N3", // 추가됨
    type: "language_knowledge",
    category: Category.SENTENCE_ORDER,
    question: "私は ＿ ＿ ＊ ＿ 買いました。",
    options: ["昨日", "デパートで", "靴を", "新しい"],
    answer: 2, // (昨日 데파트데 '아타라시이' 쿠츠오 카이마시타)
    explanation: "문장 순서: 昨日(1) デパートで(2) 新しい(4) 靴を(3)",
    reference: "N3 문법"
  },
  {
    id: "n3-so-002",
    level: "N3", // 추가됨
    type: "language_knowledge",
    category: Category.SENTENCE_ORDER,
    question: "田中さんは ＿ ＿ ＊ ＿ 言った。",
    options: ["忙しい", "から", "行けない", "と"],
    answer: 2, // (이소가시이 카라 이케나이 토 잇타)
    explanation: "문장 순서: 忙しい(1) から(2) 行けない(3) と(4)",
    reference: "N3 문법"
  }
];