// 1. 언어지식 (어휘) 데이터
import { n3VocabReading } from './n3/vocab_reading';
import { n3VocabWriting } from './n3/vocab_writing';
import { n3Context } from './n3/context_definition';
import { n3Synonym } from './n3/synonym';
import { n3Usage } from './n3/usage';

// 2. 언어지식 (문법) 데이터
import { n3GrammarForm } from './n3/grammar_form';
import { n3Order } from './n3/sentence_order';
import { n3SentenceGrammar } from './n3/sentence_grammar';

// 3. 독해 데이터 (우리가 수정한 부분)
import { n3ReadingShort } from './n3/reading_short';
import { n3ReadingMedium } from './n3/reading_medium';
import { n3ReadingLong } from './n3/reading_long';
import { n3InfoSearch } from './n3/info_search';

// 4. 단어장 데이터
import { n3Kanji } from './n3/kanji_n3'; 
import { n3_vocab_total } from './n3/n3_vocab'; 

// 타입 안전성을 위해 명시적으로 합쳐줄게
export const TOTAL_DB = {
  n3: {
    // 언어지식과 독해 문제를 모두 포함하는 배열
    questions: [
      // 어휘 파트
      ...(n3VocabReading || []),
      ...(n3VocabWriting || []),
      ...(n3Context || []),
      ...(n3Synonym || []),
      ...(n3Usage || []),
      // 문법 파트
      ...(n3GrammarForm || []),
      ...(n3Order || []),
      ...(n3SentenceGrammar || []),
      // 독해 파트 (최신 데이터)
      ...(n3ReadingShort || []),
      ...(n3ReadingMedium || []),
      ...(n3ReadingLong || []),
      ...(n3InfoSearch || []),
    ],
    wordbook: [
      ...(n3Kanji || []),
      ...(n3_vocab_total || []),
    ] 
  },
  n2: { questions: [], wordbook: [] },
  n1: { questions: [], wordbook: [] }
};