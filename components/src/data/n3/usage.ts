import { VocabGrammarQuestion, Category } from '../../types';

export const n3Usage: VocabGrammarQuestion[] = [
  {
    id: "n3-us-001",
    level: "N3", // 추가됨
    type: "language_knowledge",
    category: Category.USAGE,
    question: "**さっぱり**의 올바른 쓰임은?",
    options: [
      "シャワー를 浴びてさっぱりした。",
      "さっぱり 勉強をしました。",
      "さっぱり 맛있는 요리입니다.",
      "さっぱり 비가 내리고 있습니다."
    ],
    answer: 0,
    explanation: "さっぱり: 상쾌함, 산뜻함",
    reference: "N3 어휘"
  },
  {
    id: "n3-us-002",
    level: "N3", // 추가됨
    type: "language_knowledge",
    category: Category.USAGE,
    question: "**しつこ이**의 올바른 쓰임은?",
    options: [
      "しつこい味의 料理는 好きだ。",
      "彼はしつ고く 質問してきた。",
      "しつこい 天気네요.",
      "しつこい 길을 걷다."
    ],
    answer: 1,
    explanation: "しつこい: 집요하다, 끈질기다",
    reference: "N3 어휘"
  }
];