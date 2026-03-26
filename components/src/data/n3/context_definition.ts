import { VocabGrammarQuestion, Category } from '../../types';

export const n3Context: VocabGrammarQuestion[] = [
  {
    id: "n3-cd-001",
    level: "N3", // 추가됨
    type: "language_knowledge",
    category: Category.CONTEXT_DEFINITION,
    question: "道が混んでいたので、約束の時間に（　　）しまった。",
    options: ["まにあって", "おくれて", "すごして", "のこって"],
    answer: 1,
    explanation: "道が混む(길이 막히다) + おくれる(늦다)",
    reference: "N3 어휘"
  },
  {
    id: "n3-cd-002",
    level: "N3", // 추가됨
    type: "language_knowledge",
    category: Category.CONTEXT_DEFINITION,
    question: "このスープ는 味が（　　）ですね。",
    options: ["うすい", "ひくい", "わかい", "あさい"],
    answer: 0,
    explanation: "味がうすい: 맛이 싱겁다(연하다)",
    reference: "N3 어휘"
  }
];