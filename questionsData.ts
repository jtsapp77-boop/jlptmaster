// questionsData.ts
import { JLPTQuestion } from './components/src/types';

export const questionBank: JLPTQuestion[] = [
  // 1. 언어지식(어휘/문법) 예시
  {
    level: 'N3',
    type: 'language_knowledge',
    id: 'v1',
    category: '한자 읽기',
    question: '「調査」의 올바른 읽기는 무엇입니까?',
    options: ['じょうさ', 'ちょうさ', 'ちょうざ', 'しょうさ'],
    answer: 1,
    explanation: '調査는 「ちょうさ」라고 읽으며 조사를 의미합니다.',
    reference: '교재 15페이지'
  },
  // 2. 독해 예시
  {
    level: 'N3',
    type: 'reading',
    id: 'r1',
    title: 'N3 기본 독해 연습',
    content: '新しい計画を立てる時は、まず詳しい調査が必要です。',
    translation: '새로운 계획을 세울 때는 먼저 상세한 조사가 필요합니다.',
    vocabulary_list: ['計画(계획)', '詳しい(상세하다)', '調査(조사)'],
    questions: [
      {
        q_text: '계획을 세울 때 가장 먼저 필요한 것은?',
        options: ['돈', '조사', '친구', '시간'],
        answer: 1,
        explanation: '본문에서 詳しい調査(상세한 조사)가 필요하다고 했습니다.'
      }
    ],
    reference: '교재 20페이지'
  }
];