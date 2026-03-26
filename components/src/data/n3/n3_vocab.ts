import { VocabItem } from '../../types';

// ==========================================
// [JLPT N3 어휘 데이터베이스]
// Group 01 ~ 03 (ID: n3-001 ~ n3-060)
// 정확도 최우선 정제 및 품사 세분화 버전
// ==========================================

// #region [GROUP 01] - ID n3-001 ~ n3-020
const g01_nouns: VocabItem[] = [
  {
    id: 'n3-001',
    category: 'vocabulary',
    groupIndex: 1,
    kanji: '準備',
    reading: 'じゅんび',
    meaning: '준비',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '旅行の準備を整える。', t: '여행 준비를 갖추다.' }
  },
  {
    id: 'n3-002',
    category: 'vocabulary',
    groupIndex: 1,
    kanji: '景色',
    reading: 'けしき',
    meaning: '경치',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '山の上からの景色が素晴らしい。', t: '산 위에서의 경치가 훌륭하다.' }
  },
  {
    id: 'n3-003',
    category: 'vocabulary',
    groupIndex: 1,
    kanji: '習慣',
    reading: 'しゅうかん',
    meaning: '습관',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '早起きの習慣を身につける。', t: '일찍 일어나는 습관을 몸에 익히다.' }
  },
  {
    id: 'n3-004',
    category: 'vocabulary',
    groupIndex: 1,
    kanji: '道具',
    reading: 'どうぐ',
    meaning: '도구',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '料理の道具を揃える。', t: '요리 도구를 갖추다.' }
  },
  {
    id: 'n3-005',
    category: 'vocabulary',
    groupIndex: 1,
    kanji: '法律',
    reading: 'ほうりつ',
    meaning: '법률',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '法律を厳守する。', t: '법률을 엄수하다.' }
  },
  {
    id: 'n3-006',
    category: 'vocabulary',
    groupIndex: 1,
    kanji: '技術',
    reading: 'ぎじゅつ',
    meaning: '기술',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '新しい技術を導入する。', t: '새로운 기술을 도입하다.' }
  },
  {
    id: 'n3-007',
    category: 'vocabulary',
    groupIndex: 1,
    kanji: '空気',
    reading: 'くうき',
    meaning: '공기',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '山の空気は澄んでいる。', t: '산의 공기는 맑다.' }
  },
  {
    id: 'n3-008',
    category: 'vocabulary',
    groupIndex: 1,
    kanji: '期待',
    reading: 'きたい',
    meaning: '기대',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '両親の期待に応える。', t: '부모님의 기대에 부응하다.' }
  }
];

const g01_verbs: VocabItem[] = [
  {
    id: 'n3-009',
    category: 'vocabulary',
    groupIndex: 1,
    kanji: '驚く',
    reading: 'おどろく',
    meaning: '놀라다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '突然のニュースに驚いた。', t: '갑작스러운 뉴스에 놀랐다.' }
  },
  {
    id: 'n3-010',
    category: 'vocabulary',
    groupIndex: 1,
    kanji: '払う',
    reading: 'はらう',
    meaning: '지불하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'レジで代金を払う。', t: '계산대에서 대금을 지불하다.' }
  },
  {
    id: 'n3-011',
    category: 'vocabulary',
    groupIndex: 1,
    kanji: '届く',
    reading: 'とどく',
    meaning: '도착하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'ようやく荷物が届いた。', t: '겨우 짐이 도착했다.' }
  },
  {
    id: 'n3-012',
    category: 'vocabulary',
    groupIndex: 1,
    kanji: '投げる',
    reading: 'なげる',
    meaning: '던지다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '全力でボールを投げる。', t: '전력으로 공을 던지다.' }
  },
  {
    id: 'n3-013',
    category: 'vocabulary',
    groupIndex: 1,
    kanji: '訪ねる',
    reading: 'たずねる',
    meaning: '방문하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '恩師の家を訪ねる。', t: '은사의 집을 방문하다.' }
  },
  {
    id: 'n3-014',
    category: 'vocabulary',
    groupIndex: 1,
    kanji: '比べる',
    reading: 'くらべる',
    meaning: '비교하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '去年と今年の収穫を比べる。', t: '작년과 올해의 수확을 비교하다.' }
  }
];

const g01_adjectives: VocabItem[] = [
  {
    id: 'n3-015',
    category: 'vocabulary',
    groupIndex: 1,
    kanji: '細かい',
    reading: 'こまかい',
    meaning: '세밀하다/잘다',
    partOfSpeech: '형용사(い)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '細かいルールを説明する。', t: '세부적인 규칙을 설명하다.' }
  },
  {
    id: 'n3-016',
    category: 'vocabulary',
    groupIndex: 1,
    kanji: '苦い',
    reading: 'にがい',
    meaning: '쓰다',
    partOfSpeech: '형용사(い)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'この良薬は口に苦い。', t: '이 좋은 약은 입에 쓰다.' }
  },
  {
    id: 'n3-017',
    category: 'vocabulary',
    groupIndex: 1,
    kanji: '複雑',
    reading: 'ふくざつ',
    meaning: '복잡하다/복잡함',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '複雑な手続きが必要だ。', t: '복잡한 절차가 필요하다.' }
  }
];

const g01_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-018',
    category: 'vocabulary',
    groupIndex: 1,
    kanji: '結局',
    reading: 'けっきょく',
    meaning: '결국',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '結局、計画は中止になった。', t: '결국 계획은 중지되었다.' }
  },
  {
    id: 'n3-019',
    category: 'vocabulary',
    groupIndex: 1,
    kanji: '絶対',
    reading: 'ぜったい',
    meaning: '절대/꼭',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'この秘密は絶対に教えない。', t: '이 비밀은 절대로 알려주지 않는다.' }
  },
  {
    id: 'n3-020',
    category: 'vocabulary',
    groupIndex: 1,
    kanji: 'アドバイス',
    reading: 'あどばいす',
    meaning: '조언',
    partOfSpeech: '명사(외래어)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '先生から適切なアドバイスをもらう。', t: '선생님으로부터 적절한 조언을 받다.' }
  }
];

// #region [GROUP 02] - ID n3-021 ~ n3-040
const g02_nouns: VocabItem[] = [
  {
    id: 'n3-021',
    category: 'vocabulary',
    groupIndex: 2,
    kanji: '興味',
    reading: 'きょうみ',
    meaning: '흥미',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '異文化交流に興味がある。', t: '타문화 교류에 흥미가 있다.' }
  },
  {
    id: 'n3-022',
    category: 'vocabulary',
    groupIndex: 2,
    kanji: '計画',
    reading: 'けいかく',
    meaning: '계획',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '週末の計画を立てる。', t: '주말 계획을 세우다.' }
  },
  {
    id: 'n3-023',
    category: 'vocabulary',
    groupIndex: 2,
    kanji: '経験',
    reading: 'けいけん',
    meaning: '경험',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '仕事を通じて多くの経験を積む。', t: '일을 통해 많은 경험을 쌓다.' }
  },
  {
    id: 'n3-024',
    category: 'vocabulary',
    groupIndex: 2,
    kanji: '目的',
    reading: 'もくてき',
    meaning: '목적',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '学習の目的を明確にする。', t: '학습 목적을 명확히 하다.' }
  },
  {
    id: 'n3-025',
    category: 'vocabulary',
    groupIndex: 2,
    kanji: '不足',
    reading: 'ふそく',
    meaning: '부족',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '睡眠不足で頭が痛い。', t: '수면 부족으로 머리가 아프다.' }
  },
  {
    id: 'n3-026',
    category: 'vocabulary',
    groupIndex: 2,
    kanji: '変化',
    reading: 'へんか',
    meaning: '변화',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '急激な時代の変化に対応する。', t: '급격한 시대 변화에 대응하다.' }
  },
  {
    id: 'n3-027',
    category: 'vocabulary',
    groupIndex: 2,
    kanji: '判断',
    reading: 'はんだん',
    meaning: '판단',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '自分自身で状況を判断する。', t: '자기 스스로 상황을 판단하다.' }
  },
  {
    id: 'n3-028',
    category: 'vocabulary',
    groupIndex: 2,
    kanji: '希望',
    reading: 'きぼう',
    meaning: '희망',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '第一志望の会社に就職する。', t: '제1지망 회사에 취직하다.' }
  }
];

const g02_verbs: VocabItem[] = [
  {
    id: 'n3-029',
    category: 'vocabulary',
    groupIndex: 2,
    kanji: '集める',
    reading: 'あつめる',
    meaning: '모으다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '資料を大量に集める。', t: '자료를 대량으로 모으다.' }
  },
  {
    id: 'n3-030',
    category: 'vocabulary',
    groupIndex: 2,
    kanji: '変わる',
    reading: 'かわる',
    meaning: '변하다/바뀌다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '季節が変わって涼しくなった。', t: '계절이 바뀌어 시원해졌다.' }
  },
  {
    id: 'n3-031',
    category: 'vocabulary',
    groupIndex: 2,
    kanji: '見つける',
    reading: 'みつける',
    meaning: '찾아내다/발견하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '紛失した鍵をやっと見つけた。', t: '분실했던 열쇠를 겨우 찾아냈다.' }
  },
  {
    id: 'n3-032',
    category: 'vocabulary',
    groupIndex: 2,
    kanji: '続ける',
    reading: 'つづける',
    meaning: '계속하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '毎日日記を書くのを続ける。', t: '매일 일기 쓰는 것을 계속하다.' }
  },
  {
    id: 'n3-033',
    category: 'vocabulary',
    groupIndex: 2,
    kanji: '決まる',
    reading: 'きまる',
    meaning: '결정되다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '出発の日程が正式に決まった。', t: '출발 일정이 정식으로 결정되었다.' }
  },
  {
    id: 'n3-034',
    category: 'vocabulary',
    groupIndex: 2,
    kanji: '謝る',
    reading: 'あやまる',
    meaning: '사과하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '素直に自分の過ちを謝る。', t: '순순히 자신의 잘못을 사과하다.' }
  }
];

const g02_adjectives: VocabItem[] = [
  {
    id: 'n3-035',
    category: 'vocabulary',
    groupIndex: 2,
    kanji: '珍しい',
    reading: 'めずらしい',
    meaning: '드물다/희귀하다',
    partOfSpeech: '형용사(い)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'この地方では雪は珍しい。', t: '이 지방에서 눈은 드물다.' }
  },
  {
    id: 'n3-036',
    category: 'vocabulary',
    groupIndex: 2,
    kanji: '適当',
    reading: 'てきとう',
    meaning: '적당하다/알맞음',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '空欄に適当な言葉を入れる。', t: '빈칸에 적당한 말을 넣다.' }
  },
  {
    id: 'n3-037',
    category: 'vocabulary',
    groupIndex: 2,
    kanji: '厳しい',
    reading: 'きびしい',
    meaning: '엄격하다/심하다',
    partOfSpeech: '형용사(い)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '厳しい冬の寒さに耐える。', t: '엄한 겨울 추위를 견디다.' }
  }
];

const g02_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-038',
    category: 'vocabulary',
    groupIndex: 2,
    kanji: 'かなり',
    reading: 'かなり',
    meaning: '꽤/제법',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '期待していたより、かなり大きい。', t: '기대했던 것보다 상당히 크다.' }
  },
  {
    id: 'n3-039',
    category: 'vocabulary',
    groupIndex: 2,
    kanji: 'ようやく',
    reading: 'ようやく',
    meaning: '겨우/마침내',
    partOfSpeech: '부사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'ようやく工事が完了した。', t: '겨우 공사가 완료되었다.' }
  },
  {
    id: 'n3-040',
    category: 'vocabulary',
    groupIndex: 2,
    kanji: 'もし',
    reading: 'もし',
    meaning: '만약',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'もし困ったことがあれば言って。', t: '만약 곤란한 일이 있으면 말해 줘.' }
  }
];

// #region [GROUP 03] - ID n3-041 ~ n3-060
const g03_nouns: VocabItem[] = [
  {
    id: 'n3-041',
    category: 'vocabulary',
    groupIndex: 3,
    kanji: '理由',
    reading: 'りゆう',
    meaning: '이유',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '学校を欠席した理由を述べる。', t: '학교를 결석한 이유를 말하다.' }
  },
  {
    id: 'n3-042',
    category: 'vocabulary',
    groupIndex: 3,
    kanji: '結果',
    reading: 'けっか',
    meaning: '결과',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '努力が良い結果につながった。', t: '노력이 좋은 결과로 이어졌다.' }
  },
  {
    id: 'n3-043',
    category: 'vocabulary',
    groupIndex: 3,
    kanji: '歴史',
    reading: 'れきし',
    meaning: '역사',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '日本の歴史について学ぶ。', t: '일본 역사에 대해 배우다.' }
  },
  {
    id: 'n3-044',
    category: 'vocabulary',
    groupIndex: 3,
    kanji: '広告',
    reading: 'こうこく',
    meaning: '광고',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'ＳＮＳに新商品の広告を出す。', t: 'SNS에 신상품 광고를 내다.' }
  },
  {
    id: 'n3-045',
    category: 'vocabulary',
    groupIndex: 3,
    kanji: '生活',
    reading: 'せいかつ',
    meaning: '생활',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '規則正しい生活を送る。', t: '규칙적인 생활을 보내다.' }
  },
  {
    id: 'n3-046',
    category: 'vocabulary',
    groupIndex: 3,
    kanji: '無理',
    reading: 'むり',
    meaning: '무리하다/무리함',
    partOfSpeech: '형용사(な)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '無理な注文をして申し訳ない。', t: '무리한 주문을 해서 죄송하다.' }
  },
  {
    id: 'n3-047',
    category: 'vocabulary',
    groupIndex: 3,
    kanji: '秘密',
    reading: 'ひみつ',
    meaning: '비밀',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '秘密を厳守しなければならない。', t: '비밀을 엄수해야만 한다.' }
  },
  {
    id: 'n3-048',
    category: 'vocabulary',
    groupIndex: 3,
    kanji: '担当',
    reading: 'たんとう',
    meaning: '담당',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'イベントの運営を担当する。', t: '이벤트 운영을 담당하다.' }
  }
];

const g03_verbs: VocabItem[] = [
  {
    id: 'n3-049',
    category: 'vocabulary',
    groupIndex: 3,
    kanji: '伝える',
    reading: 'つたえる',
    meaning: '전하다/알리다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '感謝の気持ちを伝える。', t: '감사의 마음을 전하다.' }
  },
  {
    id: 'n3-050',
    category: 'vocabulary',
    groupIndex: 3,
    kanji: '育てる',
    reading: 'そだてる',
    meaning: '키우다/기르다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '大切に植物を育てる。', t: '소중하게 식물을 키우다.' }
  },
  {
    id: 'n3-051',
    category: 'vocabulary',
    groupIndex: 3,
    kanji: '信じる',
    reading: 'しんじる',
    meaning: '믿다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '自分の可能性を信じる。', t: '자신의 가능성을 믿다.' }
  },
  {
    id: 'n3-052',
    category: 'vocabulary',
    groupIndex: 3,
    kanji: '流れる',
    reading: 'ながれる',
    meaning: '흐르다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '川がゆっくりと流れる。', t: '강이 천천히 흐르다.' }
  },
  {
    id: 'n3-053',
    category: 'vocabulary',
    groupIndex: 3,
    kanji: '捕まえる',
    reading: 'つかまえる',
    meaning: '잡다/붙잡다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'タクシーを捕まえる。', t: '택시를 잡다.' }
  },
  {
    id: 'n3-054',
    category: 'vocabulary',
    groupIndex: 3,
    kanji: '片付ける',
    reading: 'かたづける',
    meaning: '정리하다/치우다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '部屋をきれいに片付ける。', t: '방을 깨끗하게 정리하다.' }
  }
];

const g03_adjectives: VocabItem[] = [
  {
    id: 'n3-055',
    category: 'vocabulary',
    groupIndex: 3,
    kanji: '苦しい',
    reading: 'くるしい',
    meaning: '괴롭다/답답하다',
    partOfSpeech: '형용사(い)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '狭い場所で息が苦しい。', t: '좁은 장소에서 숨이 답답하다.' }
  },
  {
    id: 'n3-056',
    category: 'vocabulary',
    groupIndex: 3,
    kanji: '正しい',
    reading: 'ただしい',
    meaning: '옳다/바르다',
    partOfSpeech: '형용사(い)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '正しい敬語を使う。', t: '올바른 경어를 사용하다.' }
  },
  {
    id: 'n3-057',
    category: 'vocabulary',
    groupIndex: 3,
    kanji: '残念',
    reading: 'ざんねん',
    meaning: '아쉬움/유감',
    partOfSpeech: '형용사(な)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '参加できなくて残念だ。', t: '참가할 수 없어서 아쉽다.' }
  }
];

const g03_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-058',
    category: 'vocabulary',
    groupIndex: 3,
    kanji: '必ず',
    reading: 'かならず',
    meaning: '반드시/꼭',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '約束は必ず守りなさい。', t: '약속은 반드시 지키세요.' }
  },
  {
    id: 'n3-059',
    category: 'vocabulary',
    groupIndex: 3,
    kanji: '特に',
    reading: 'とくに',
    meaning: '특히',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '特に予定はない。', t: '딱히(특히) 예정은 없다.' }
  },
  {
    id: 'n3-060',
    category: 'vocabulary',
    groupIndex: 3,
    kanji: 'だんだん',
    reading: 'だんだん',
    meaning: '점점',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'だんだん上手になってきた。', t: '점점 능숙해지기 시작했다.' }
  }
];


// #region [GROUP 04] - ID n3-061 ~ n3-080
const g04_nouns: VocabItem[] = [
  {
    id: 'n3-061',
    category: 'vocabulary',
    groupIndex: 4,
    kanji: '習慣',
    reading: 'しゅうかん',
    meaning: '습관',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '良い習慣を身につける。', t: '좋은 습관을 몸에 익히다.' }
  },
  {
    id: 'n3-062',
    category: 'vocabulary',
    groupIndex: 4,
    kanji: '教育',
    reading: 'きょういく',
    meaning: '교육',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '子供の教育に力を入れる。', t: '자녀 교육에 힘을 쏟다.' }
  },
  {
    id: 'n3-063',
    category: 'vocabulary',
    groupIndex: 4,
    kanji: '将来',
    reading: 'しょうらい',
    meaning: '장래/미래',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '将来の夢を語る。', t: '장래 희망을 이야기하다.' }
  },
  {
    id: 'n3-064',
    category: 'vocabulary',
    groupIndex: 4,
    kanji: '関係',
    reading: 'かんけい',
    meaning: '관계',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '彼とは古い関係だ。', t: '그와는 오랜 관계다.' }
  },
  {
    id: 'n3-065',
    category: 'vocabulary',
    groupIndex: 4,
    kanji: '情報',
    reading: 'じょうほう',
    meaning: '정보',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '正確な情報を集める。', t: '정확한 정보를 모으다.' }
  },
  {
    id: 'n3-066',
    category: 'vocabulary',
    groupIndex: 4,
    kanji: '記念',
    reading: 'きねん',
    meaning: '기념',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '卒業の記念に写真を撮る。', t: '졸업 기념으로 사진을 찍다.' }
  },
  {
    id: 'n3-067',
    category: 'vocabulary',
    groupIndex: 4,
    kanji: 'デザイン',
    reading: 'でざいん',
    meaning: '디자인',
    partOfSpeech: '명사(외래어)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'この靴のデザインが好きだ。', t: '이 신발 디자인이 좋다.' }
  },
  {
    id: 'n3-068',
    category: 'vocabulary',
    groupIndex: 4,
    kanji: '伝統',
    reading: 'でんとう',
    meaning: '전통',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '古い伝統を守り続ける。', t: '오래된 전통을 계속 지켜나가다.' }
  }
];

const g04_verbs: VocabItem[] = [
  {
    id: 'n3-069',
    category: 'vocabulary',
    groupIndex: 4,
    kanji: '選ぶ',
    reading: 'えらぶ',
    meaning: '고르다/선택하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '好きなものを選んでください。', t: '좋아하는 것을 골라 주세요.' }
  },
  {
    id: 'n3-070',
    category: 'vocabulary',
    groupIndex: 4,
    kanji: '進む',
    reading: 'すすむ',
    meaning: '나아가다/진행되다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '工事が順調に進んでいる。', t: '공사가 순조롭게 진행되고 있다.' }
  },
  {
    id: 'n3-071',
    category: 'vocabulary',
    groupIndex: 4,
    kanji: '喜ぶ',
    reading: 'よろこぶ',
    meaning: '기뻐하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '合格を家族が喜んでくれた。', t: '합격을 가족이 기뻐해 주었다.' }
  },
  {
    id: 'n3-072',
    category: 'vocabulary',
    groupIndex: 4,
    kanji: '変える',
    reading: 'かえる',
    meaning: '바꾸다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '気分を変えるために散歩する。', t: '기분을 전환하기 위해 산책하다.' }
  },
  {
    id: 'n3-073',
    category: 'vocabulary',
    groupIndex: 4,
    kanji: '受ける',
    reading: 'うける',
    meaning: '받다/치르다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '日本語能力試験を受ける。', t: '일본어 능력 시험을 치르다.' }
  },
  {
    id: 'n3-074',
    category: 'vocabulary',
    groupIndex: 4,
    kanji: '慣れる',
    reading: 'なれる',
    meaning: '익숙해지다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '日本の生活に慣れてきた。', t: '일본 생활에 익숙해졌다.' }
  }
];

const g04_adjectives: VocabItem[] = [
  {
    id: 'n3-075',
    category: 'vocabulary',
    groupIndex: 4,
    kanji: '激しい',
    reading: 'はげしい',
    meaning: '격렬하다/심하다',
    partOfSpeech: '형용사(い)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '激しい雨が降り出した。', t: '격렬한 비가 내리기 시작했다.' }
  },
  {
    id: 'n3-076',
    category: 'vocabulary',
    groupIndex: 4,
    kanji: '美しい',
    reading: 'うつくしい',
    meaning: '아름답다',
    partOfSpeech: '형용사(い)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '富士山は美しい山だ。', t: '후지산은 아름다운 산이다.' }
  },
  {
    id: 'n3-077',
    category: 'vocabulary',
    groupIndex: 4,
    kanji: '不便',
    reading: 'ふべん',
    meaning: '불편하다/불편함',
    partOfSpeech: '형용사(な)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '駅から遠いので不便だ。', t: '역에서 멀어서 불편하다.' }
  }
];

const g04_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-078',
    category: 'vocabulary',
    groupIndex: 4,
    kanji: '全然',
    reading: 'ぜんぜん',
    meaning: '전혀',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'その話は全然知らなかった。', t: '그 이야기는 전혀 몰랐다.' }
  },
  {
    id: 'n3-079',
    category: 'vocabulary',
    groupIndex: 4,
    kanji: 'やっと',
    reading: 'やっと',
    meaning: '겨우/드디어',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'やっと宿題が終わった。', t: '드디어 숙제가 끝났다.' }
  },
  {
    id: 'n3-080',
    category: 'vocabulary',
    groupIndex: 4,
    kanji: 'そして',
    reading: 'そして',
    meaning: '그리고',
    partOfSpeech: '기타(접속사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '顔を洗い、そして朝食を食べる。', t: '세수를 하고, 그리고 아침을 먹는다.' }
  }
];
// #endregion

// #region [GROUP 05] - ID n3-081 ~ n3-100
const g05_nouns: VocabItem[] = [
  {
    id: 'n3-081',
    category: 'vocabulary',
    groupIndex: 5,
    kanji: '目的',
    reading: 'もくてき',
    meaning: '목적',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '旅行の目的は何ですか。', t: '여행 목적은 무엇입니까?' }
  },
  {
    id: 'n3-082',
    category: 'vocabulary',
    groupIndex: 5,
    kanji: '社会',
    reading: 'しゃかい',
    meaning: '사회',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '現代社会のルールを学ぶ。', t: '현대 사회의 규칙을 배우다.' }
  },
  {
    id: 'n3-083',
    category: 'vocabulary',
    groupIndex: 5,
    kanji: '変化',
    reading: 'へんか',
    meaning: '변화',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '時代の変化に対応する。', t: '시대 변화에 대응하다.' }
  },
  {
    id: 'n3-084',
    category: 'vocabulary',
    groupIndex: 5,
    kanji: '自信',
    reading: 'じしん',
    meaning: '자신/자신감',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '自分に自信を持つ。', t: '자기 자신에게 자신감을 갖다.' }
  },
  {
    id: 'n3-085',
    category: 'vocabulary',
    groupIndex: 5,
    kanji: '連絡',
    reading: 'れんらく',
    meaning: '연락',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '遅れるときは連絡してください。', t: '늦을 때는 연락해 주세요.' }
  },
  {
    id: 'n3-086',
    category: 'vocabulary',
    groupIndex: 5,
    kanji: '発表',
    reading: 'はっぴょう',
    meaning: '발표',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '研究の結果を発表する。', t: '연구 결과를 발표하다.' }
  },
  {
    id: 'n3-087',
    category: 'vocabulary',
    groupIndex: 5,
    kanji: 'チャンス',
    reading: 'ちゃんす',
    meaning: '기회/찬스',
    partOfSpeech: '명사(외래어)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '今が絶好のチャンスだ。', t: '지금이 절호의 기회다.' }
  },
  {
    id: 'n3-088',
    category: 'vocabulary',
    groupIndex: 5,
    kanji: '様子',
    reading: 'ようす',
    meaning: '모습/상태',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '外の様子を見てくる。', t: '밖의 상태를 보고 오겠다.' }
  }
];

const g05_verbs: VocabItem[] = [
  {
    id: 'n3-089',
    category: 'vocabulary',
    groupIndex: 5,
    kanji: '並ぶ',
    reading: 'ならぶ',
    meaning: '줄을 서다/나란히 서다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '店に多くの人が並んでいる。', t: '가게에 많은 사람이 줄을 서 있다.' }
  },
  {
    id: 'n3-090',
    category: 'vocabulary',
    groupIndex: 5,
    kanji: '笑う',
    reading: 'わらう',
    meaning: '웃다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '彼の冗談を聞いて笑う。', t: '그의 농담을 듣고 웃다.' }
  },
  {
    id: 'n3-091',
    category: 'vocabulary',
    groupIndex: 5,
    kanji: '祈る',
    reading: 'いのる',
    meaning: '빌다/기도하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '合格を心から祈る。', t: '합격을 진심으로 빌다.' }
  },
  {
    id: 'n3-092',
    category: 'vocabulary',
    groupIndex: 5,
    kanji: '調べる',
    reading: 'しらべる',
    meaning: '조사하다/찾아보다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'わからない言葉を辞書で調べる。', t: '모르는 단어를 사전에서 찾아보다.' }
  },
  {
    id: 'n3-093',
    category: 'vocabulary',
    groupIndex: 5,
    kanji: '忘れる',
    reading: 'わすれる',
    meaning: '잊다/잊어버리다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '大事な約束を忘れていた。', t: '중요한 약속을 잊고 있었다.' }
  },
  {
    id: 'n3-094',
    category: 'vocabulary',
    groupIndex: 5,
    kanji: '建てる',
    reading: 'たてる',
    meaning: '세우다/짓다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '将来、大きな家を建てたい。', t: '장래에 큰 집을 짓고 싶다.' }
  }
];

const g05_adjectives: VocabItem[] = [
  {
    id: 'n3-095',
    category: 'vocabulary',
    groupIndex: 5,
    kanji: '正しい',
    reading: 'ただしい',
    meaning: '옳다/바르다',
    partOfSpeech: '형용사(い)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '正しい敬語を使いましょう。', t: '올바른 경어를 사용합시다.' }
  },
  {
    id: 'n3-096',
    category: 'vocabulary',
    groupIndex: 5,
    kanji: '詳しい',
    reading: 'くわしい',
    meaning: '상세하다/잘 알다',
    partOfSpeech: '형용사(い)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '彼は歴史にとても詳しい。', t: '그는 역사에 매우 밝다(잘 안다).' }
  },
  {
    id: 'n3-097',
    category: 'vocabulary',
    groupIndex: 5,
    kanji: '大切',
    reading: 'たいせつ',
    meaning: '소중함/중요함',
    partOfSpeech: '형용사(な)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '家族を大切に思う。', t: '가족을 소중히 생각한다.' }
  }
];

const g05_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-098',
    category: 'vocabulary',
    groupIndex: 5,
    kanji: 'もし',
    reading: 'もし',
    meaning: '만약',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'もし雨が降ったら中止だ。', t: '만약 비가 내리면 중지다.' }
  },
  {
    id: 'n3-099',
    category: 'vocabulary',
    groupIndex: 5,
    kanji: 'きっと',
    reading: 'きっと',
    meaning: '꼭/틀림없이',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '明日はきっと晴れる。', t: '내일은 틀림없이 맑을 것이다.' }
  },
  {
    id: 'n3-100',
    category: 'vocabulary',
    groupIndex: 5,
    kanji: 'しかし',
    reading: 'しかし',
    meaning: '하지만/그러나',
    partOfSpeech: '기타(접속사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '努力した。しかし、失敗した。', t: '노력했다. 그러나 실패했다.' }
  }
];
// #endregion

// #region [GROUP 06] - ID n3-101 ~ n3-120
const g06_nouns: VocabItem[] = [
  {
    id: 'n3-101',
    category: 'vocabulary',
    groupIndex: 6,
    kanji: '理由',
    reading: 'りゆう',
    meaning: '이유',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '遅刻した理由を説明する。', t: '지각한 이유를 설명하다.' }
  },
  {
    id: 'n3-102',
    category: 'vocabulary',
    groupIndex: 6,
    kanji: '経験',
    reading: 'けいけん',
    meaning: '경험',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '接客の経験があります。', t: '손님 접대 경험이 있습니다.' }
  },
  {
    id: 'n3-103',
    category: 'vocabulary',
    groupIndex: 6,
    kanji: '結果',
    reading: 'けっか',
    meaning: '결과',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '試験の結果を待つ。', t: '시험 결과를 기다리다.' }
  },
  {
    id: 'n3-104',
    category: 'vocabulary',
    groupIndex: 6,
    kanji: '活動',
    reading: 'かつどう',
    meaning: '활동',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'ボランティア活動に参加する。', t: '자원봉사 활동에 참가하다.' }
  },
  {
    id: 'n3-105',
    category: 'vocabulary',
    groupIndex: 6,
    kanji: '知識',
    reading: 'ちしき',
    meaning: '지식',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '幅広い知識を持っている。', t: '폭넓은 지식을 가지고 있다.' }
  },
  {
    id: 'n3-106',
    category: 'vocabulary',
    groupIndex: 6,
    kanji: '反対',
    reading: 'はんたい',
    meaning: '반대',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '彼の意見に反対する。', t: '그의 의견에 반대하다.' }
  },
  {
    id: 'n3-107',
    category: 'vocabulary',
    groupIndex: 6,
    kanji: 'リーダー',
    reading: 'りーだー',
    meaning: '리더/지도자',
    partOfSpeech: '명사(외래어)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'チームのリーダーを決める。', t: '팀의 리더를 정하다.' }
  },
  {
    id: 'n3-108',
    category: 'vocabulary',
    groupIndex: 6,
    kanji: '場所',
    reading: 'ばしょ',
    meaning: '장소',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '待ち合わせの場所を確認する。', t: '약속 장소를 확인하다.' }
  }
];

const g06_verbs: VocabItem[] = [
  {
    id: 'n3-109',
    category: 'vocabulary',
    groupIndex: 6,
    kanji: '送る',
    reading: 'おくる',
    meaning: '보내다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'メールを友人に送る。', t: '메일을 친구에게 보내다.' }
  },
  {
    id: 'n3-110',
    category: 'vocabulary',
    groupIndex: 6,
    kanji: '急ぐ',
    reading: 'いそぐ',
    meaning: '서두르다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '遅刻しそうなので急ぐ。', t: '지각할 것 같아서 서두르다.' }
  },
  {
    id: 'n3-111',
    category: 'vocabulary',
    groupIndex: 6,
    kanji: '拾う',
    reading: 'ひろう',
    meaning: '줍다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '道で財布を拾った。', t: '길에서 지갑을 주웠다.' }
  },
  {
    id: 'n3-112',
    category: 'vocabulary',
    groupIndex: 6,
    kanji: '泊まる',
    reading: 'とまる',
    meaning: '묵다/숙박하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '温泉旅館に泊まる。', t: '온천 여관에 묵다.' }
  },
  {
    id: 'n3-113',
    category: 'vocabulary',
    groupIndex: 6,
    kanji: '降りる',
    reading: 'おりる',
    meaning: '내리다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '次の駅で電車を降りる。', t: '다음 역에서 전철을 내리다.' }
  },
  {
    id: 'n3-114',
    category: 'vocabulary',
    groupIndex: 6,
    kanji: '育つ',
    reading: 'そだつ',
    meaning: '자라다/성장하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '豊かな自然の中で育つ。', t: '풍요로운 자연 속에서 자라다.' }
  }
];

const g06_adjectives: VocabItem[] = [
  {
    id: 'n3-115',
    category: 'vocabulary',
    groupIndex: 6,
    kanji: '寂しい',
    reading: 'さびしい',
    meaning: '외롭다/쓸쓸하다',
    partOfSpeech: '형용사(い)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '一人暮らしは寂しい。', t: '자취(혼자 사는 것)는 외롭다.' }
  },
  {
    id: 'n3-116',
    category: 'vocabulary',
    groupIndex: 6,
    kanji: '恥ずかしい',
    reading: 'はずかしい',
    meaning: '부끄럽다/창피하다',
    partOfSpeech: '형용사(い)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '間違いを指摘されて恥ずかしい。', t: '실수를 지적받아 부끄럽다.' }
  },
  {
    id: 'n3-117',
    category: 'vocabulary',
    groupIndex: 6,
    kanji: '特別',
    reading: 'とくべつ',
    meaning: '특별하다/특별함',
    partOfSpeech: '형용사(な)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '今日は特別な日だ。', t: '오늘은 특별한 날이다.' }
  }
];

const g06_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-118',
    category: 'vocabulary',
    groupIndex: 6,
    kanji: 'たぶん',
    reading: 'たぶん',
    meaning: '아마',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '彼はたぶん来ないだろう。', t: '그는 아마 오지 않을 것이다.' }
  },
  {
    id: 'n3-119',
    category: 'vocabulary',
    groupIndex: 6,
    kanji: 'すぐ',
    reading: 'すぐ',
    meaning: '곧/즉시',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'すぐに行きます。', t: '곧 가겠습니다.' }
  },
  {
    id: 'n3-120',
    category: 'vocabulary',
    groupIndex: 6,
    kanji: 'それから',
    reading: 'それから',
    meaning: '그리고 나서/그다음에',
    partOfSpeech: '기타(접속사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '宿題をして、それから遊びに行く。', t: '숙제를 하고 나서 놀러 간다.' }
  }
];
// #endregion

// #region [GROUP 07] - 진도: 121~140번

// --- [명사] 사회 및 환경 (8개) ---
const g07_nouns: VocabItem[] = [
  {
    id: 'n3-121',
    category: 'vocabulary',
    groupIndex: 7,
    kanji: '環境',
    reading: 'かんきょう',
    meaning: '환경',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '自然環境を守る。', t: '자연환경을 지키다.' }
  },
  {
    id: 'n3-122',
    category: 'vocabulary',
    groupIndex: 7,
    kanji: '資源',
    reading: 'しげん',
    meaning: '자원',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '資源を大切にする。', t: '자원을 소중히 하다.' }
  },
  {
    id: 'n3-123',
    category: 'vocabulary',
    groupIndex: 7,
    kanji: '平和',
    reading: 'へいわ',
    meaning: '평화',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '世界の平和を願う。', t: '세계의 평화를 바라다.' }
  },
  {
    id: 'n3-124',
    category: 'vocabulary',
    groupIndex: 7,
    kanji: '政府',
    reading: 'せいふ',
    meaning: '정부',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '政府が新しい方針を出す。', t: '정부가 새로운 방침을 내놓다.' }
  },
  {
    id: 'n3-125',
    category: 'vocabulary',
    groupIndex: 7,
    kanji: '政治',
    reading: 'せいじ',
    meaning: '정치',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '政治に興味を持つ。', t: '정치에 흥미를 갖다.' }
  },
  {
    id: 'n3-126',
    category: 'vocabulary',
    groupIndex: 7,
    kanji: '経済',
    reading: 'けいざい',
    meaning: '경제',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '経済の状況を調べる。', t: '경제 상황을 조사하다.' }
  },
  {
    id: 'n3-127',
    category: 'vocabulary',
    groupIndex: 7,
    kanji: '法律',
    reading: 'ほうりつ',
    meaning: '법률',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '新しい法律ができた。', t: '새로운 법률이 생겼다.' }
  },
  {
    id: 'n3-128',
    category: 'vocabulary',
    groupIndex: 7,
    kanji: '権利',
    reading: 'けんり',
    meaning: '권리',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '自分の権利を守る。', t: '자신의 권리를 지키다.' }
  }
];

// --- [동사] 교류 및 변화 (6개) ---
const g07_verbs: VocabItem[] = [
  {
    id: 'n3-129',
    category: 'vocabulary',
    groupIndex: 7,
    kanji: '広がる',
    reading: 'ひろがる',
    meaning: '퍼지다/넓어지다',
    partOfSpeech: '동사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '噂がすぐに広がった。', t: '소문이 금방 퍼졌다.' }
  },
  {
    id: 'n3-130',
    category: 'vocabulary',
    groupIndex: 7,
    kanji: '増える',
    reading: 'ふえる',
    meaning: '늘다/증가하다',
    partOfSpeech: '동사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '体重が増えてしまった。', t: '체중이 늘고 말았다.' }
  },
  {
    id: 'n3-131',
    category: 'vocabulary',
    groupIndex: 7,
    kanji: '減る',
    reading: 'へる',
    meaning: '줄다/감소하다',
    partOfSpeech: '동사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '人口がだんだん減っている。', t: '인구가 점점 줄고 있다.' }
  },
  {
    id: 'n3-132',
    category: 'vocabulary',
    groupIndex: 7,
    kanji: '進む',
    reading: 'すすむ',
    meaning: '나아가다/진행되다',
    partOfSpeech: '동사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '研究が順調に進む。', t: '연구가 순조롭게 진행되다.' }
  },
  {
    id: 'n3-133',
    category: 'vocabulary',
    groupIndex: 7,
    kanji: '断る',
    reading: 'ことわる',
    meaning: '거절하다',
    partOfSpeech: '동사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '誘いを丁寧に断る。', t: '권유를 정중히 거절하다.' }
  },
  {
    id: 'n3-134',
    category: 'vocabulary',
    groupIndex: 7,
    kanji: '受ける',
    reading: 'うける',
    meaning: '받다',
    partOfSpeech: '동사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '試験を受ける。', t: '시험을 치다(받다).' }
  }
];

// --- [형용사] 가치 및 성질 (3개) ---
const g07_adjectives: VocabItem[] = [
  {
    id: 'n3-135',
    category: 'vocabulary',
    groupIndex: 7,
    kanji: '重要',
    reading: 'じゅうよう',
    meaning: '중요함/중요하다',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '重要なポイントをメモする。', t: '중요한 포인트를 메모하다.' }
  },
  {
    id: 'n3-136',
    category: 'vocabulary',
    groupIndex: 7,
    kanji: '必要',
    reading: 'ひつよう',
    meaning: '필요함',
    partOfSpeech: '형용사(な)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '印鑑が必要だ。', t: '도장이 필요하다.' }
  },
  {
    id: 'n3-137',
    category: 'vocabulary',
    groupIndex: 7,
    kanji: '豊かな',
    reading: 'ゆたかな',
    meaning: '풍부한/풍요로운',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '経験が豊かな人。', t: '경험이 풍부한 사람.' }
  }
];

// --- [부사/기타] 빈도 및 정도 (3개) ---
const g07_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-138',
    category: 'vocabulary',
    groupIndex: 7,
    kanji: '大抵',
    reading: 'たいてい',
    meaning: '대개/보통',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '日曜日は大抵家にいる。', t: '일요일은 대개 집에 있다.' }
  },
  {
    id: 'n3-139',
    category: 'vocabulary',
    groupIndex: 7,
    kanji: '常に',
    reading: 'つねに',
    meaning: '항상/늘',
    partOfSpeech: '부사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '常に努力を怠らない。', t: '늘 노력을 게을리하지 않는다.' }
  },
  {
    id: 'n3-140',
    category: 'vocabulary',
    groupIndex: 7,
    kanji: 'たまに',
    reading: 'たまに',
    meaning: '어쩌다/가끔',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'たまに映画を見に行く。', t: '가끔 영화를 보러 간다.' }
  }
];

// #endregion

// #region [GROUP 08] - 진도: 141~160번

// --- [명사] 사고 및 감정 (8개) ---
const g08_nouns: VocabItem[] = [
  {
    id: 'n3-141',
    category: 'vocabulary',
    groupIndex: 8,
    kanji: '感情',
    reading: 'かんじょう',
    meaning: '감정',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '感情を抑える。', t: '감정을 억제하다.' }
  },
  {
    id: 'n3-142',
    category: 'vocabulary',
    groupIndex: 8,
    kanji: '表情',
    reading: 'ひょうじょう',
    meaning: '표정',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '豊かな表情で話す。', t: '풍부한 표정으로 말하다.' }
  },
  {
    id: 'n3-143',
    category: 'vocabulary',
    groupIndex: 8,
    kanji: '勇気',
    reading: 'ゆうき',
    meaning: '용기',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '勇気を出して告白する。', t: '용기를 내어 고백하다.' }
  },
  {
    id: 'n3-144',
    category: 'vocabulary',
    groupIndex: 8,
    kanji: '感謝',
    reading: 'かんしゃ',
    meaning: '감사',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '感謝の気持ちを伝える。', t: '감사의 마음을 전하다.' }
  },
  {
    id: 'n3-145',
    category: 'vocabulary',
    groupIndex: 8,
    kanji: '尊敬',
    reading: 'そんけい',
    meaning: '존경',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '先生を尊敬している。', t: '선생님을 존경하고 있다.' }
  },
  {
    id: 'n3-146',
    category: 'vocabulary',
    groupIndex: 8,
    kanji: '事情',
    reading: 'じじょう',
    meaning: '사정',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '家庭の事情で休む。', t: '집안 사정으로 쉬다.' }
  },
  {
    id: 'n3-147',
    category: 'vocabulary',
    groupIndex: 8,
    kanji: '評価',
    reading: 'ひょうか',
    meaning: '평가',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '高い評価を受ける。', t: '높은 평가를 받다.' }
  },
  {
    id: 'n3-148',
    category: 'vocabulary',
    groupIndex: 8,
    kanji: '程度',
    reading: 'ていど',
    meaning: '정도',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'どの程度の広さですか。', t: '어느 정도의 넓이입니까?' }
  }
];

// --- [동사] 관계 및 변화 (6개) ---
const g08_verbs: VocabItem[] = [
  {
    id: 'n3-149',
    category: 'vocabulary',
    groupIndex: 8,
    kanji: '離れる',
    reading: 'はなれる',
    meaning: '떨어지다/멀어지다',
    partOfSpeech: '동사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '家族と離れて暮らす。', t: '가족과 떨어져 살다.' }
  },
  {
    id: 'n3-150',
    category: 'vocabulary',
    groupIndex: 8,
    kanji: '戻る',
    reading: 'もどる',
    meaning: '돌아가다/되돌아오다',
    partOfSpeech: '동사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '席に戻ってください。', t: '자리로 돌아가 주세요.' }
  },
  {
    id: 'n3-151',
    category: 'vocabulary',
    groupIndex: 8,
    kanji: '別れる',
    reading: 'わかれる',
    meaning: '헤어지다',
    partOfSpeech: '동사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '恋人と別れる。', t: '애인과 헤어지다.' }
  },
  {
    id: 'n3-152',
    category: 'vocabulary',
    groupIndex: 8,
    kanji: '比べる',
    reading: 'くらべる',
    meaning: '비교하다',
    partOfSpeech: '동사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '去年の夏と比べる。', t: '작년 여름과 비교하다.' }
  },
  {
    id: 'n3-153',
    category: 'vocabulary',
    groupIndex: 8,
    kanji: '間に合う',
    reading: 'まにあう',
    meaning: '시간 내에 대다',
    partOfSpeech: '동사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '電車に間に合った。', t: '기차 시간에 댈 수 있었다.' }
  },
  {
    id: 'n3-154',
    category: 'vocabulary',
    groupIndex: 8,
    kanji: '通う',
    reading: 'かよう',
    meaning: '다니다',
    partOfSpeech: '동사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '塾に通っている。', t: '학원에 다니고 있다.' }
  }
];

// --- [형용사] 상태 묘사 (3개) ---
const g08_adjectives: VocabItem[] = [
  {
    id: 'n3-155',
    category: 'vocabulary',
    groupIndex: 8,
    kanji: '不思議',
    reading: 'ふしぎ',
    meaning: '신기함/이상함',
    partOfSpeech: '형용사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '不思議な体験をした。', t: '신기한 체험을 했다.' }
  },
  {
    id: 'n3-156',
    category: 'vocabulary',
    groupIndex: 8,
    kanji: '怪しい',
    reading: 'あやしい',
    meaning: '수상하다',
    partOfSpeech: '형용사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '怪しい男が立っている。', t: '수상한 남자가 서 있다.' }
  },
  {
    id: 'n3-157',
    category: 'vocabulary',
    groupIndex: 8,
    kanji: '悔しい',
    reading: 'くやしい',
    meaning: '억울하다/분하다',
    partOfSpeech: '형용사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '負けて悔しい。', t: '져서 분하다.' }
  }
];

// --- [부사/기타] 시점 및 전개 (3개) ---
const g08_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-158',
    category: 'vocabulary',
    groupIndex: 8,
    kanji: 'ついに',
    reading: 'ついに',
    meaning: '드디어/마침내',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'ついに夢が叶った。', t: '드디어 꿈이 이루어졌다.' }
  },
  {
    id: 'n3-159',
    category: 'vocabulary',
    groupIndex: 8,
    kanji: 'すっかり',
    reading: 'すっかり',
    meaning: '완전히/다',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'すっかり忘れていた。', t: '완전히 잊고 있었다.' }
  },
  {
    id: 'n3-160',
    category: 'vocabulary',
    groupIndex: 8,
    kanji: 'メッセージ',
    reading: 'めっせーじ',
    meaning: '메시지',
    partOfSpeech: '기타',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'メッセージを残す。', t: '메시지를 남기다.' }
  }
];

// #endregion

// #region [GROUP 09] - 진도: 161~180번

// --- [명사] 사고 및 추상 (8개) ---
const g09_nouns: VocabItem[] = [
  {
    id: 'n3-161',
    category: 'vocabulary',
    groupIndex: 9,
    kanji: '判断',
    reading: 'はんだん',
    meaning: '판단',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '状況を見て判断する。', t: '상황을 보고 판단하다.' }
  },
  {
    id: 'n3-162',
    category: 'vocabulary',
    groupIndex: 9,
    kanji: '影響',
    reading: 'えいきょう',
    meaning: '영향',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '子供に悪い影響を与える。', t: '아이에게 나쁜 영향을 주다.' }
  },
  {
    id: 'n3-163',
    category: 'vocabulary',
    groupIndex: 9,
    kanji: '想像',
    reading: 'そうぞう',
    meaning: '상상',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '想像したよりも大きい。', t: '상상했던 것보다 크다.' }
  },
  {
    id: 'n3-164',
    category: 'vocabulary',
    groupIndex: 9,
    kanji: '理解',
    reading: 'りかい',
    meaning: '이해',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '内容를 깊이 이해하다.', t: '내용을 깊이 이해하다.' }
  },
  {
    id: 'n3-165',
    category: 'vocabulary',
    groupIndex: 9,
    kanji: '解決',
    reading: 'かいけつ',
    meaning: '해결',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '問題を解決する。', t: '문제를 해결하다.' }
  },
  {
    id: 'n3-166',
    category: 'vocabulary',
    groupIndex: 9,
    kanji: '確認',
    reading: 'かくにん',
    meaning: '확인',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '予約を確認する。', t: '예약을 확인하다.' }
  },
  {
    id: 'n3-167',
    category: 'vocabulary',
    groupIndex: 9,
    kanji: '中止',
    reading: 'ちゅうし',
    meaning: '중지',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '雨で試合が中止になる。', t: '비로 경기가 중지되다.' }
  },
  {
    id: 'n3-168',
    category: 'vocabulary',
    groupIndex: 9,
    kanji: '結果',
    reading: 'けっか',
    meaning: '결과',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '努力の結果が出た。', t: '노력의 결과가 나왔다.' }
  }
];

// --- [동사] 행동 및 동작 (6개) ---
const g09_verbs: VocabItem[] = [
  {
    id: 'n3-169',
    category: 'vocabulary',
    groupIndex: 9,
    kanji: '片付ける',
    reading: 'かたづける',
    meaning: '정리하다/치우다',
    partOfSpeech: '동사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '机の上를 정리하다.', t: '책상 위를 정리하다.' }
  },
  {
    id: 'n3-170',
    category: 'vocabulary',
    groupIndex: 9,
    kanji: '組み立てる',
    reading: 'くみたてる',
    meaning: '조립하다',
    partOfSpeech: '동사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '家具を自分で組み立てる。', t: '가구를 스스로 조립하다.' }
  },
  {
    id: 'n3-171',
    category: 'vocabulary',
    groupIndex: 9,
    kanji: '直る',
    reading: 'なおる',
    meaning: '고쳐지다/수리되다',
    partOfSpeech: '동사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'パソコンが直った。', t: '컴퓨터가 고쳐졌다.' }
  },
  {
    id: 'n3-172',
    category: 'vocabulary',
    groupIndex: 9,
    kanji: '比べる',
    reading: 'くらべる',
    meaning: '비교하다',
    partOfSpeech: '동사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'どちらが良いか比べる。', t: '어느 쪽이 좋을지 비교하다.' }
  },
  {
    id: 'n3-173',
    category: 'vocabulary',
    groupIndex: 9,
    kanji: '運ぶ',
    reading: 'はこぶ',
    meaning: '운반하다/옮기다',
    partOfSpeech: '동사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '荷物を運ぶ。', t: '짐을 운반하다.' }
  },
  {
    id: 'n3-174',
    category: 'vocabulary',
    groupIndex: 9,
    kanji: '拾う',
    reading: 'ひろう',
    meaning: '줍다',
    partOfSpeech: '동사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'ごみを拾う。', t: '쓰레기를 줍다.' }
  }
];

// --- [형용사] 상태 및 느낌 (3개) ---
const g09_adjectives: VocabItem[] = [
  {
    id: 'n3-175',
    category: 'vocabulary',
    groupIndex: 9,
    kanji: '派手',
    reading: 'はで',
    meaning: '화려함',
    partOfSpeech: '형용사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '派手な色の服を着る。', t: '화려한 색의 옷을 입다.' }
  },
  {
    id: 'n3-176',
    category: 'vocabulary',
    groupIndex: 9,
    kanji: '地味',
    reading: 'じみ',
    meaning: '수수함',
    partOfSpeech: '형용사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '地味なネクタイを選ぶ。', t: '수수한 넥타이를 고르다.' }
  },
  {
    id: 'n3-177',
    category: 'vocabulary',
    groupIndex: 9,
    kanji: '苦い',
    reading: 'にがい',
    meaning: '쓰다',
    partOfSpeech: '형용사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '薬が苦くて飲めない。', t: '약이 써서 마실 수 없다.' }
  }
];

// --- [부사/기타] 문장의 완성 (3개) ---
const g09_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-178',
    category: 'vocabulary',
    groupIndex: 9,
    kanji: 'かなり',
    reading: 'かなり',
    meaning: '꽤/제법',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '今日はかなり寒い。', t: '오늘은 꽤 춥다.' }
  },
  {
    id: 'n3-179',
    category: 'vocabulary',
    groupIndex: 9,
    kanji: 'ようやく',
    reading: 'ようやく',
    meaning: '겨우/마침내',
    partOfSpeech: '부사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'ようやく宿題が終わった。', t: '겨우 숙제가 끝났다.' }
  },
  {
    id: 'n3-180',
    category: 'vocabulary',
    groupIndex: 9,
    kanji: 'もし',
    reading: 'もし',
    meaning: '만약',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'もし雨が降ったら中止だ。', t: '만약 비가 오면 중지다.' }
  }
];

// #endregion

// #region [GROUP 10] - ID n3-181 ~ n3-200

const g10_nouns: VocabItem[] = [
  {
    id: 'n3-181',
    category: 'vocabulary',
    groupIndex: 10,
    kanji: '興味',
    reading: 'きょうみ',
    meaning: '흥미',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '日本文化に興味がある。', t: '일본 문화에 흥미가 있다.' }
  },
  {
    id: 'n3-182',
    category: 'vocabulary',
    groupIndex: 10,
    kanji: '将来',
    reading: 'しょうらい',
    meaning: '장래',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '将来の夢を語る。', t: '장래의 꿈을 이야기하다.' }
  },
  {
    id: 'n3-183',
    category: 'vocabulary',
    groupIndex: 10,
    kanji: '希望',
    reading: 'きぼう',
    meaning: '희망',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '留学を希望する。', t: '유학을 희망하다.' }
  },
  {
    id: 'n3-184',
    category: 'vocabulary',
    groupIndex: 10,
    kanji: '望み',
    reading: 'のぞみ',
    meaning: '바람/소망',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '最後の望みをかける。', t: '마지막 소망을 걸다.' }
  },
  {
    id: 'n3-185',
    category: 'vocabulary',
    groupIndex: 10,
    kanji: '失望',
    reading: 'しつぼう',
    meaning: '실망',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '結果に失望する。', t: '결과에 실망하다.' }
  },
  {
    id: 'n3-186',
    category: 'vocabulary',
    groupIndex: 10,
    kanji: '要望',
    reading: 'ようぼう',
    meaning: '요망/요구',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '住民の要望に応える。', t: '주민의 요구에 부응하다.' }
  },
  {
    id: 'n3-187',
    category: 'vocabulary',
    groupIndex: 10,
    kanji: '素質',
    reading: 'そしつ',
    meaning: '소질',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '音楽の素質がある。', t: '음악적 소질이 있다.' }
  },
  {
    id: 'n3-188',
    category: 'vocabulary',
    groupIndex: 10,
    kanji: '素晴らしい',
    reading: 'すばらしい',
    meaning: '훌륭하다/멋지다',
    partOfSpeech: '형용사(い)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '素晴らしい景色だ。', t: '멋진 풍경이다.' }
  }
];

const g10_verbs: VocabItem[] = [
  {
    id: 'n3-189',
    category: 'vocabulary',
    groupIndex: 10,
    kanji: '望む',
    reading: 'のぞむ',
    meaning: '바라다/희망하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '平和な世界を望む。', t: '평화로운 세상을 바라다.' }
  },
  {
    id: 'n3-190',
    category: 'vocabulary',
    groupIndex: 10,
    kanji: '好む',
    reading: 'このむ',
    meaning: '좋아하다/선호하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '静かな場所を好む。', t: '조용한 장소를 선호하다.' }
  },
  {
    id: 'n3-191',
    category: 'vocabulary',
    groupIndex: 10,
    kanji: '励む',
    reading: 'はげむ',
    meaning: '힘쓰다/노력하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '学業に励む。', t: '학업에 힘쓰다.' }
  },
  {
    id: 'n3-192',
    category: 'vocabulary',
    groupIndex: 10,
    kanji: '励ます',
    reading: 'はげます',
    meaning: '격려하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '落ち込んでいる友人を励ます。', t: '낙담해 있는 친구를 격려하다.' }
  },
  {
    id: 'n3-193',
    category: 'vocabulary',
    groupIndex: 10,
    kanji: '組む',
    reading: 'くむ',
    meaning: '짜다/조립하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'スケジュールを組む。', t: '스케줄을 짜다.' }
  },
  {
    id: 'n3-194',
    category: 'vocabulary',
    groupIndex: 10,
    kanji: '組み立てる',
    reading: 'くみたてる',
    meaning: '조립하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '家具を組み立てる。', t: '가구를 조립하다.' }
  }
];

const g10_adjectives: VocabItem[] = [
  {
    id: 'n3-195',
    category: 'vocabulary',
    groupIndex: 10,
    kanji: '乏しい',
    reading: 'とぼしい',
    meaning: '부족하다/핍절하다',
    partOfSpeech: '형용사(い)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '経験が乏しい。', t: '경험이 부족하다.' }
  },
  {
    id: 'n3-196',
    category: 'vocabulary',
    groupIndex: 10,
    kanji: '怪しい',
    reading: 'あやしい',
    meaning: '수상하다/의심스럽다',
    partOfSpeech: '형용사(い)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '怪しい男が立っている。', t: '수상한 남자가 서 있다.' }
  },
  {
    id: 'n3-197',
    category: 'vocabulary',
    groupIndex: 10,
    kanji: '気軽',
    reading: 'きがる',
    meaning: '부담 없음/선선함',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '気軽に相談してください。', t: '부담 없이 상담해 주세요.' }
  }
];

const g10_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-198',
    category: 'vocabulary',
    groupIndex: 10,
    kanji: '案外',
    reading: 'あんがい',
    meaning: '의외로',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'テストは案外簡単だった。', t: '시험은 의외로 간단했다.' }
  },
  {
    id: 'n3-199',
    category: 'vocabulary',
    groupIndex: 10,
    kanji: '案の定',
    reading: 'あんのじょう',
    meaning: '생각한 대로/아니나 다를까',
    partOfSpeech: '부사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '案の定、雨が降り出した。', t: '아니나 다를까, 비가 내리기 시작했다.' }
  },
  {
    id: 'n3-200',
    category: 'vocabulary',
    groupIndex: 10,
    kanji: '意外に',
    reading: 'いがいに',
    meaning: '의외로',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '意外に時間がかかった。', t: '의외로 시간이 걸렸다.' }
  }
];

// #region [GROUP 11] - ID n3-201 ~ n3-220

const g11_nouns: VocabItem[] = [
  {
    id: 'n3-201',
    category: 'vocabulary',
    groupIndex: 11,
    kanji: '程度',
    reading: 'ていど',
    meaning: '정도/수준',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '日常会話程度の英語。', t: '일상 회화 수준의 영어.' }
  },
  {
    id: 'n3-202',
    category: 'vocabulary',
    groupIndex: 11,
    kanji: '日程',
    reading: 'にってい',
    meaning: '일정',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '旅行の日程を決める。', t: '여행 일정을 정하다.' }
  },
  {
    id: 'n3-203',
    category: 'vocabulary',
    groupIndex: 11,
    kanji: '過程',
    reading: 'かてい',
    meaning: '과정',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '成長の過程を見守る。', t: '성장 과정을 지켜보다.' }
  },
  {
    id: 'n3-204',
    category: 'vocabulary',
    groupIndex: 11,
    kanji: '課程',
    reading: 'かてい',
    meaning: '과정(교육/교과)',
    partOfSpeech: '명사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '博士課程に進む。', t: '박사 과정에 진학하다.' }
  },
  {
    id: 'n3-205',
    category: 'vocabulary',
    groupIndex: 11,
    kanji: '規則',
    reading: 'きそく',
    meaning: '규칙',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '校則を厳しく守る。', t: '교칙을 엄격히 지키다.' }
  },
  {
    id: 'n3-206',
    category: 'vocabulary',
    groupIndex: 11,
    kanji: '法則',
    reading: 'ほうそく',
    meaning: '법칙',
    partOfSpeech: '명사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '自然の法則に従う。', t: '자연의 법칙을 따르다.' }
  },
  {
    id: 'n3-207',
    category: 'vocabulary',
    groupIndex: 11,
    kanji: '予則',
    reading: 'よそく',
    meaning: '예측',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '将来を予測する。', t: '장래를 예측하다.' }
  },
  {
    id: 'n3-208',
    category: 'vocabulary',
    groupIndex: 11,
    kanji: '速度',
    reading: 'そくど',
    meaning: '속도',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '速度を落として走る。', t: '속도를 줄여서 달리다.' }
  }
];

const g11_verbs: VocabItem[] = [
  {
    id: 'n3-209',
    category: 'vocabulary',
    groupIndex: 11,
    kanji: '測る',
    reading: 'はかる',
    meaning: '재다/측정하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '山の高さを測る。', t: '산의 높이를 재다.' }
  },
  {
    id: 'n3-210',
    category: 'vocabulary',
    groupIndex: 11,
    kanji: '計る',
    reading: 'はかる',
    meaning: '재다/계산하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '時間を計る。', t: '시간을 재다.' }
  },
  {
    id: 'n3-211',
    category: 'vocabulary',
    groupIndex: 11,
    kanji: '量る',
    reading: 'はかる',
    meaning: '달다/무게를 재다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '体重を量る。', t: '체중을 재다.' }
  },
  {
    id: 'n3-212',
    category: 'vocabulary',
    groupIndex: 11,
    kanji: '図る',
    reading: 'はかる',
    meaning: '도모하다/꾀하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '解決を図る。', t: '해결을 도모하다.' }
  },
  {
    id: 'n3-213',
    category: 'vocabulary',
    groupIndex: 11,
    kanji: '反る',
    reading: 'そる',
    meaning: '휘다/젖혀지다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '板が反っている。', t: '판자가 휘어 있다.' }
  },
  {
    id: 'n3-214',
    category: 'vocabulary',
    groupIndex: 11,
    kanji: '練る',
    reading: 'ねる',
    meaning: '반죽하다/다듬다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '計画を練る。', t: '계획을 다듬다(짜다).' }
  }
];

const g11_adjectives: VocabItem[] = [
  {
    id: 'n3-215',
    category: 'vocabulary',
    groupIndex: 11,
    kanji: '厚い',
    reading: 'あつい',
    meaning: '두껍다',
    partOfSpeech: '형용사(い)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '厚い本を読む。', t: '두꺼운 책을 읽다.' }
  },
  {
    id: 'n3-216',
    category: 'vocabulary',
    groupIndex: 11,
    kanji: '薄い',
    reading: 'うすい',
    meaning: '얇다/연하다',
    partOfSpeech: '형용사(い)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'コーヒーが薄い。', t: '커피가 연하다.' }
  },
  {
    id: 'n3-217',
    category: 'vocabulary',
    groupIndex: 11,
    kanji: '平ら',
    reading: 'たいら',
    meaning: '평평함',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '平らな道を歩く。', t: '평평한 길을 걷다.' }
  }
];

const g11_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-218',
    category: 'vocabulary',
    groupIndex: 11,
    kanji: '絶対',
    reading: 'ぜったい',
    meaning: '절대',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '絶対に諦めない。', t: '절대로 포기하지 않는다.' }
  },
  {
    id: 'n3-219',
    category: 'vocabulary',
    groupIndex: 11,
    kanji: '必ず',
    reading: 'かならず',
    meaning: '반드시',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '必ず成功する。', t: '반드시 성공한다.' }
  },
  {
    id: 'n3-220',
    category: 'vocabulary',
    groupIndex: 11,
    kanji: '決して',
    reading: 'けっして',
    meaning: '결코 (부정 수반)',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '決して忘れない。', t: '결코 잊지 않겠다.' }
  }
];

// #region [GROUP 12] - ID n3-221 ~ n3-240

const g12_nouns: VocabItem[] = [
  {
    id: 'n3-221',
    category: 'vocabulary',
    groupIndex: 12,
    kanji: '増加',
    reading: 'ぞうか',
    meaning: '증가',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '人口が増加している。', t: '인구가 증가하고 있다.' }
  },
  {
    id: 'n3-222',
    category: 'vocabulary',
    groupIndex: 12,
    kanji: '減少',
    reading: 'げんしょう',
    meaning: '감소',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '売上が減少した。', t: '매출이 감소했다.' }
  },
  {
    id: 'n3-223',
    category: 'vocabulary',
    groupIndex: 12,
    kanji: '増量',
    reading: 'ぞうりょう',
    meaning: '증량',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '20%増量キャンペーン。', t: '20% 증량 캠페인.' }
  },
  {
    id: 'n3-224',
    category: 'vocabulary',
    groupIndex: 12,
    kanji: '減量',
    reading: 'げんりょう',
    meaning: '감량',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '体重を減量する。', t: '체중을 감량하다.' }
  },
  {
    id: 'n3-225',
    category: 'vocabulary',
    groupIndex: 12,
    kanji: '増減',
    reading: 'ぞうげん',
    meaning: '증감',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '数値が増減する。', t: '수치가 증감하다.' }
  },
  {
    id: 'n3-226',
    category: 'vocabulary',
    groupIndex: 12,
    kanji: '加減',
    reading: 'かげん',
    meaning: '조절/정도',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '火の加減を調節する。', t: '불 조절을 하다.' }
  },
  {
    id: 'n3-227',
    category: 'vocabulary',
    groupIndex: 12,
    kanji: '削減',
    reading: 'さくげん',
    meaning: '삭감',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'コストを削減する。', t: '코스트를 삭감하다.' }
  },
  {
    id: 'n3-228',
    category: 'vocabulary',
    groupIndex: 12,
    kanji: '加速',
    reading: 'かそく',
    meaning: '가속',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '景気が加速する。', t: '경기가 가속되다.' }
  }
];

const g12_verbs: VocabItem[] = [
  {
    id: 'n3-229',
    category: 'vocabulary',
    groupIndex: 12,
    kanji: '増える',
    reading: 'ふえる',
    meaning: '늘다/증가하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '体重が増える。', t: '체중이 늘다.' }
  },
  {
    id: 'n3-230',
    category: 'vocabulary',
    groupIndex: 12,
    kanji: '増やす',
    reading: 'ふやす',
    meaning: '늘리다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '貯金を増やす。', t: '저금을 늘리다.' }
  },
  {
    id: 'n3-231',
    category: 'vocabulary',
    groupIndex: 12,
    kanji: '減る',
    reading: 'へる',
    meaning: '줄다/감소하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'お腹が減る。', t: '배가 고프다(줄다).' }
  },
  {
    id: 'n3-232',
    category: 'vocabulary',
    groupIndex: 12,
    kanji: '減らす',
    reading: 'へらす',
    meaning: '줄이다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'ゴミを減らす。', t: '쓰레기를 줄이다.' }
  },
  {
    id: 'n3-233',
    category: 'vocabulary',
    groupIndex: 12,
    kanji: '加える',
    reading: 'くわえる',
    meaning: '가하다/더하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '砂糖を加える。', t: '설탕을 더하다.' }
  },
  {
    id: 'n3-234',
    category: 'vocabulary',
    groupIndex: 12,
    kanji: '加わる',
    reading: 'くわわる',
    meaning: '가해지다/더해지다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '新しいメンバーが加わる。', t: '새로운 멤버가 합류하다(더해지다).' }
  }
];

const g12_adjectives: VocabItem[] = [
  {
    id: 'n3-235',
    category: 'vocabulary',
    groupIndex: 12,
    kanji: '激しい',
    reading: 'はげしい',
    meaning: '격렬하다/심하다',
    partOfSpeech: '형용사(い)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '激しい雨が降る。', t: '격렬한 비가 내리다.' }
  },
  {
    id: 'n3-236',
    category: 'vocabulary',
    groupIndex: 12,
    kanji: '鋭い',
    reading: 'するどい',
    meaning: '날카롭다/예리하다',
    partOfSpeech: '형용사(い)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '鋭い目つきで見つめる。', t: '예리한 눈초리로 바라보다.' }
  },
  {
    id: 'n3-237',
    category: 'vocabulary',
    groupIndex: 12,
    kanji: '鈍い',
    reading: 'にぶい',
    meaning: '무디다/둔하다',
    partOfSpeech: '형용사(い)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '反応が鈍い。', t: '반응이 둔하다.' }
  }
];

const g12_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-238',
    category: 'vocabulary',
    groupIndex: 12,
    kanji: '徐々に',
    reading: 'じょじょに',
    meaning: '서서히/조금씩',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '徐々に暖かくなる。', t: '서서히 따뜻해진다.' }
  },
  {
    id: 'n3-239',
    category: 'vocabulary',
    groupIndex: 12,
    kanji: '次第に',
    reading: 'しだいに',
    meaning: '점차/차츰',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '次第に雨が弱まった。', t: '점차 비가 약해졌다.' }
  },
  {
    id: 'n3-240',
    category: 'vocabulary',
    groupIndex: 12,
    kanji: 'ますます',
    reading: 'ますます',
    meaning: '더욱더',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'ますます寒くなる。', t: '더욱더 추워진다.' }
  }
];

// #region [GROUP 13] - ID n3-241 ~ n3-260

const g13_nouns: VocabItem[] = [
  {
    id: 'n3-241',
    category: 'vocabulary',
    groupIndex: 13,
    kanji: '許可',
    reading: 'きょか',
    meaning: '허가',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '外出の許可をもらう。', t: '외출 허가를 받다.' }
  },
  {
    id: 'n3-242',
    category: 'vocabulary',
    groupIndex: 13,
    kanji: '可能',
    reading: 'かのう',
    meaning: '가능',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '不可能なことはない。', t: '불가능한 것은 없다.' }
  },
  {
    id: 'n3-243',
    category: 'vocabulary',
    groupIndex: 13,
    kanji: '能力',
    reading: 'のうりょく',
    meaning: '능력',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '能力を十分に発揮する。', t: '능력을 충분히 발휘하다.' }
  },
  {
    id: 'n3-244',
    category: 'vocabulary',
    groupIndex: 13,
    kanji: '機能',
    reading: 'きのう',
    meaning: '기능',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '新しい機能が追加された。', t: '새로운 기능이 추가되었다.' }
  },
  {
    id: 'n3-245',
    category: 'vocabulary',
    groupIndex: 13,
    kanji: '能率',
    reading: 'のうりつ',
    meaning: '능률',
    partOfSpeech: '명사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '仕事の能率を上げる。', t: '일의 능률을 올리다.' }
  },
  {
    id: 'n3-246',
    category: 'vocabulary',
    groupIndex: 13,
    kanji: '芸能',
    reading: 'げいのう',
    meaning: '예능',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '日本の伝統芸能。', t: '일본의 전통 예능.' }
  },
  {
    id: 'n3-247',
    category: 'vocabulary',
    groupIndex: 13,
    kanji: '肯定',
    reading: 'こうてい',
    meaning: '긍정',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '相手の意見を肯定する。', t: '상대의 의견을 긍정하다.' }
  },
  {
    id: 'n3-248',
    category: 'vocabulary',
    groupIndex: 13,
    kanji: '否定',
    reading: 'ひてい',
    meaning: '부정',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '事実を否定する。', t: '사실을 부정하다.' }
  }
];

const g13_verbs: VocabItem[] = [
  {
    id: 'n3-249',
    category: 'vocabulary',
    groupIndex: 13,
    kanji: '許す',
    reading: 'ゆるす',
    meaning: '허락하다/용서하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '嘘をついたことを許す。', t: '거짓말한 것을 용서하다.' }
  },
  {
    id: 'n3-250',
    category: 'vocabulary',
    groupIndex: 13,
    kanji: '定める',
    reading: 'さだめる',
    meaning: '정하다/결정하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '方針を定める。', t: '방침을 정하다.' }
  },
  {
    id: 'n3-251',
    category: 'vocabulary',
    groupIndex: 13,
    kanji: '定まる',
    reading: 'さだまる',
    meaning: '정해지다/안정되다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '天気が定まらない。', t: '날씨가 안정되지 않는다.' }
  },
  {
    id: 'n3-252',
    category: 'vocabulary',
    groupIndex: 13,
    kanji: '決める',
    reading: 'きめる',
    meaning: '정하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '行き先を決める。', t: '행선지를 정하다.' }
  },
  {
    id: 'n3-253',
    category: 'vocabulary',
    groupIndex: 13,
    kanji: '決まる',
    reading: 'きまる',
    meaning: '정해지다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '日程が決まった。', t: '일정이 정해졌다.' }
  },
  {
    id: 'n3-254',
    category: 'vocabulary',
    groupIndex: 13,
    kanji: '認める',
    reading: 'みとめる',
    meaning: '인정하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '自分のミスを認める。', t: '자신의 실수를 인정하다.' }
  }
];

const g13_adjectives: VocabItem[] = [
  {
    id: 'n3-255',
    category: 'vocabulary',
    groupIndex: 13,
    kanji: '宜しい',
    reading: 'よろしい',
    meaning: '좋다/괜찮다 (정중)',
    partOfSpeech: '형용사(い)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'これでよろしいですか。', t: '이것으로 괜찮습니까?' }
  },
  {
    id: 'n3-256',
    category: 'vocabulary',
    groupIndex: 13,
    kanji: '等しい',
    reading: 'ひとしい',
    meaning: '같다/동등하다',
    partOfSpeech: '형용사(い)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '価値が等しい。', t: '가치가 같다.' }
  },
  {
    id: 'n3-257',
    category: 'vocabulary',
    groupIndex: 13,
    kanji: '定か',
    reading: 'さだか',
    meaning: '확실함/분명함',
    partOfSpeech: '형용사(な)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '記憶が定かではない。', t: '기억이 확실치 않다.' }
  }
];

const g13_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-258',
    category: 'vocabulary',
    groupIndex: 13,
    kanji: '一応',
    reading: 'いちおう',
    meaning: '일단/우선',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '一応確認しておく。', t: '일단 확인해 둔다.' }
  },
  {
    id: 'n3-259',
    category: 'vocabulary',
    groupIndex: 13,
    kanji: '結局',
    reading: 'けっきょく',
    meaning: '결국',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '結局、彼が勝った。', t: '결국 그가 이겼다.' }
  },
  {
    id: 'n3-260',
    category: 'vocabulary',
    groupIndex: 13,
    kanji: '要するに',
    reading: 'ようするに',
    meaning: '요컨대/결국',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '要するに、無理だということだ。', t: '요컨대, 무리라는 뜻이다.' }
  }
];

// #region [GROUP 14] - ID n3-261 ~ n3-280

const g14_nouns: VocabItem[] = [
  {
    id: 'n3-261',
    category: 'vocabulary',
    groupIndex: 14,
    kanji: '比較',
    reading: 'ひかく',
    meaning: '비교',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '値段を比較する。', t: '가격을 비교하다.' }
  },
  {
    id: 'n3-262',
    category: 'vocabulary',
    groupIndex: 14,
    kanji: '対比',
    reading: 'たいひ',
    meaning: '대비',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '二つの事例を対比する。', t: '두 사례를 대비하다.' }
  },
  {
    id: 'n3-263',
    category: 'vocabulary',
    groupIndex: 14,
    kanji: '比例',
    reading: 'ひれい',
    meaning: '비례',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '収入に比例して支出が増える。', t: '수입에 비례해 지출이 늘다.' }
  },
  {
    id: 'n3-264',
    category: 'vocabulary',
    groupIndex: 14,
    kanji: '比較的高',
    reading: 'ひかくてき',
    meaning: '비교적',
    partOfSpeech: '명사(나)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '今日は比較的高、涼しい。', t: '오늘은 비교적 시원하다.' }
  },
  {
    id: 'n3-265',
    category: 'vocabulary',
    groupIndex: 14,
    kanji: '反比例',
    reading: 'はんぴれい',
    meaning: '반비례',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '速度と時間は反比例する。', t: '속도와 시간은 반비례한다.' }
  },
  {
    id: 'n3-266',
    category: 'vocabulary',
    groupIndex: 14,
    kanji: '例',
    reading: 'れい',
    meaning: '예/본보기',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '例を挙げて説明する。', t: '예를 들어 설명하다.' }
  },
  {
    id: 'n3-267',
    category: 'vocabulary',
    groupIndex: 14,
    kanji: '例外',
    reading: 'れいがい',
    meaning: '예외',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '例外を認める。', t: '예외를 인정하다.' }
  },
  {
    id: 'n3-268',
    category: 'vocabulary',
    groupIndex: 14,
    kanji: '恒例',
    reading: 'こうれい',
    meaning: '항례/늘 있는 일',
    partOfSpeech: '명사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '恒례の行事。', t: '연례 행사.' }
  }
];

const g14_verbs: VocabItem[] = [
  {
    id: 'n3-269',
    category: 'vocabulary',
    groupIndex: 14,
    kanji: '比べる',
    reading: 'くらべる',
    meaning: '비교하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '去年と比べる。', t: '작년과 비교하다.' }
  },
  {
    id: 'n3-270',
    category: 'vocabulary',
    groupIndex: 14,
    kanji: '例える',
    reading: 'たとえる',
    meaning: '비유하다/예를 들다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '人生を旅に例える。', t: '인생을 여행에 비유하다.' }
  },
  {
    id: 'n3-271',
    category: 'vocabulary',
    groupIndex: 14,
    kanji: '超える',
    reading: 'こえる',
    meaning: '넘다/초과하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '予想を超える。', t: '예상을 넘어서다.' }
  },
  {
    id: 'n3-272',
    category: 'vocabulary',
    groupIndex: 14,
    kanji: '越える',
    reading: 'こえる',
    meaning: '넘다/건너다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '山を越える。', t: '산을 넘다.' }
  },
  {
    id: 'n3-273',
    category: 'vocabulary',
    groupIndex: 14,
    kanji: '追い越す',
    reading: 'おいこす',
    meaning: '앞지르다/추월하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '前の車を追い越す。', t: '앞차를 추월하다.' }
  },
  {
    id: 'n3-274',
    category: 'vocabulary',
    groupIndex: 14,
    kanji: '乗り越える',
    reading: 'のりこえる',
    meaning: '극복하다/타고 넘다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '困難を乗り越える。', t: '곤란을 극복하다.' }
  }
];

const g14_adjectives: VocabItem[] = [
  {
    id: 'n3-275',
    category: 'vocabulary',
    groupIndex: 14,
    kanji: '例外的',
    reading: 'れいがいてき',
    meaning: '예외적',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '例外的な処置。', t: '예외적인 처치.' }
  },
  {
    id: 'n3-276',
    category: 'vocabulary',
    groupIndex: 14,
    kanji: '著しい',
    reading: 'いちじるしい',
    meaning: '현저하다/두드러지다',
    partOfSpeech: '형용사(い)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '著しい変化が見られる。', t: '현저한 변화가 보인다.' }
  },
  {
    id: 'n3-277',
    category: 'vocabulary',
    groupIndex: 14,
    kanji: '不気味',
    reading: 'ぶきみ',
    meaning: '어쩐지 무서움/기분 나쁨',
    partOfSpeech: '형용사(な)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '不気味な音がする。', t: '기분 나쁜 소리가 난다.' }
  }
];

const g14_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-278',
    category: 'vocabulary',
    groupIndex: 14,
    kanji: '例えば',
    reading: 'たとえば',
    meaning: '예를 들면',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '例えば、リンゴやバナナ。', t: '예를 들면, 사과나 바나나.' }
  },
  {
    id: 'n3-279',
    category: 'vocabulary',
    groupIndex: 14,
    kanji: '割合に',
    reading: 'わりあいに',
    meaning: '비교적',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '今日は割合に暖かい。', t: '오늘은 비교적 따뜻하다.' }
  },
  {
    id: 'n3-280',
    category: 'vocabulary',
    groupIndex: 14,
    kanji: '一律に',
    reading: 'いちりつに',
    meaning: '일률적으로',
    partOfSpeech: '부사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '一律に給付金を配る。', t: '일률적으로 지원금을 배부하다.' }
  }
];

// #region [GROUP 15] - ID n3-281 ~ n3-300

const g15_nouns: VocabItem[] = [
  {
    id: 'n3-281',
    category: 'vocabulary',
    groupIndex: 15,
    kanji: '準備',
    reading: 'じゅんび',
    meaning: '준비',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '出張の準備をする。', t: '출장 준비를 하다.' }
  },
  {
    id: 'n3-282',
    category: 'vocabulary',
    groupIndex: 15,
    kanji: '基準',
    reading: 'きじゅん',
    meaning: '기준',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '合否の基準を示す。', t: '합격 여부 기준을 나타내다.' }
  },
  {
    id: 'n3-283',
    category: 'vocabulary',
    groupIndex: 15,
    kanji: '水準',
    reading: 'すいじゅん',
    meaning: '수준',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '生活水準が向上する。', t: '생활 수준이 향상되다.' }
  },
  {
    id: 'n3-284',
    category: 'vocabulary',
    groupIndex: 15,
    kanji: '設備',
    reading: 'せつび',
    meaning: '설비',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '最新の設備を整える。', t: '최신 설비를 갖추다.' }
  },
  {
    id: 'n3-285',
    category: 'vocabulary',
    groupIndex: 15,
    kanji: '予備',
    reading: 'よび',
    meaning: '예비',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '予備の電池を持っていく。', t: '예비 건전지를 가져가다.' }
  },
  {
    id: 'n3-286',
    category: 'vocabulary',
    groupIndex: 15,
    kanji: '備品',
    reading: 'びひん',
    meaning: '비품',
    partOfSpeech: '명사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'オフィスの備品を補充する。', t: '사무실 비품을 보충하다.' }
  },
  {
    id: 'n3-287',
    category: 'vocabulary',
    groupIndex: 15,
    kanji: '警備',
    reading: 'けいび',
    meaning: '경비',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '警備が厳重だ。', t: '경비가 엄중하다.' }
  },
  {
    id: 'n3-288',
    category: 'vocabulary',
    groupIndex: 15,
    kanji: '準急',
    reading: 'じゅんきゅう',
    meaning: '준급(급행보다 한 단계 느린 열차)',
    partOfSpeech: '명사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '準急に乗って帰る。', t: '준급 열차를 타고 돌아가다.' }
  }
];

const g15_verbs: VocabItem[] = [
  {
    id: 'n3-289',
    category: 'vocabulary',
    groupIndex: 15,
    kanji: '備える',
    reading: 'そなえる',
    meaning: '대비하다/갖추다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '災害に備える。', t: '재해에 대비하다.' }
  },
  {
    id: 'n3-290',
    category: 'vocabulary',
    groupIndex: 15,
    kanji: '備わる',
    reading: 'そなわる',
    meaning: '갖춰지다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '才能が備わっている。', t: '재능이 갖춰져 있다.' }
  },
  {
    id: 'n3-291',
    category: 'vocabulary',
    groupIndex: 15,
    kanji: '整える',
    reading: 'ととのえる',
    meaning: '조절하다/정돈하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '身なりを整える。', t: '옷차림을 정돈하다.' }
  },
  {
    id: 'n3-292',
    category: 'vocabulary',
    groupIndex: 15,
    kanji: '整う',
    reading: 'ととのう',
    meaning: '정돈되다/준비되다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '準備が整った。', t: '준비가 다 되었다.' }
  },
  {
    id: 'n3-293',
    category: 'vocabulary',
    groupIndex: 15,
    kanji: '蓄える',
    reading: 'たくわえる',
    meaning: '저장하다/기르다(실력 등)',
    partOfSpeech: '동사(2그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '知識を蓄える。', t: '지식을 쌓다(저장하다).' }
  },
  {
    id: 'n3-294',
    category: 'vocabulary',
    groupIndex: 15,
    kanji: '凍える',
    reading: 'こごえる',
    meaning: '얼다/추위로 몸이 굳다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '手が凍える。', t: '손이 꽁꽁 얼다.' }
  }
];

const g15_adjectives: VocabItem[] = [
  {
    id: 'n3-295',
    category: 'vocabulary',
    groupIndex: 15,
    kanji: '清い',
    reading: 'きよい',
    meaning: '맑다/깨끗하다',
    partOfSpeech: '형용사(い)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '清い流れ。', t: '맑은 시냇물.' }
  },
  {
    id: 'n3-296',
    category: 'vocabulary',
    groupIndex: 15,
    kanji: '潔い',
    reading: 'いさぎよい',
    meaning: '미련 없다/당당하다',
    partOfSpeech: '형용사(い)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '負けを潔く認める。', t: '패배를 깨끗이 인정하다.' }
  },
  {
    id: 'n3-297',
    category: 'vocabulary',
    groupIndex: 15,
    kanji: '不潔',
    reading: 'ふけつ',
    meaning: '불결함',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '不潔な手で触らない。', t: '불결한 손으로 만지지 마라.' }
  }
];

const g15_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-298',
    category: 'vocabulary',
    groupIndex: 15,
    kanji: '前もって',
    reading: 'まえもって',
    meaning: '미리/앞서',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '前もって連絡する。', t: '미리 연락하다.' }
  },
  {
    id: 'n3-299',
    category: 'vocabulary',
    groupIndex: 15,
    kanji: 'あらかじめ',
    reading: 'あらかじめ',
    meaning: '미리/사전에',
    partOfSpeech: '부사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'あらかじめ準備しておく。', t: '사전에 준비해 둔다.' }
  },
  {
    id: 'n3-300',
    category: 'vocabulary',
    groupIndex: 15,
    kanji: '急遽',
    reading: 'きゅうきょ',
    meaning: '갑작스럽게',
    partOfSpeech: '부사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '急遽、予定が変更になった。', t: '갑작스럽게 예정이 변경되었다.' }
  }
];

// #region [GROUP 16] - ID n3-301 ~ n3-320

const g16_nouns: VocabItem[] = [
  {
    id: 'n3-301',
    category: 'vocabulary',
    groupIndex: 16,
    kanji: '判断',
    reading: 'はんだん',
    meaning: '판단',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '状況を判断する。', t: '상황을 판단하다.' }
  },
  {
    id: 'n3-302',
    category: 'vocabulary',
    groupIndex: 16,
    kanji: '決断',
    reading: 'けつだん',
    meaning: '결단',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '決断を下す。', t: '결단을 내리다.' }
  },
  {
    id: 'n3-303',
    category: 'vocabulary',
    groupIndex: 16,
    kanji: '断水',
    reading: 'だんすい',
    meaning: '단수',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '工事で断水になる。', t: '공사로 단수가 되다.' }
  },
  {
    id: 'n3-304',
    category: 'vocabulary',
    groupIndex: 16,
    kanji: '診断',
    reading: 'しんだん',
    meaning: '진단',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '健康診断を受ける。', t: '건강검진(진단)을 받다.' }
  },
  {
    id: 'n3-305',
    category: 'vocabulary',
    groupIndex: 16,
    kanji: '中断',
    reading: 'ちゅうだん',
    meaning: '중단',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '試合を中断する。', t: '시합을 중단하다.' }
  },
  {
    id: 'n3-306',
    category: 'vocabulary',
    groupIndex: 16,
    kanji: '横断',
    reading: 'おうだん',
    meaning: '횡단',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '横断歩道を渡る。', t: '횡단보도를 건너다.' }
  },
  {
    id: 'n3-307',
    category: 'vocabulary',
    groupIndex: 16,
    kanji: '独断',
    reading: 'どくだん',
    meaning: '독단',
    partOfSpeech: '명사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '独断で決める。', t: '독단으로 정하다.' }
  },
  {
    id: 'n3-308',
    category: 'vocabulary',
    groupIndex: 16,
    kanji: '断定',
    reading: 'だんてい',
    meaning: '단정',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '犯人だと断定する。', t: '범인이라고 단정하다.' }
  }
];

const g16_verbs: VocabItem[] = [
  {
    id: 'n3-309',
    category: 'vocabulary',
    groupIndex: 16,
    kanji: '断る',
    reading: 'ことわる',
    meaning: '거절하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '誘いを断る。', t: '유혹(권유)을 거절하다.' }
  },
  {
    id: 'n3-310',
    category: 'vocabulary',
    groupIndex: 16,
    kanji: '断つ',
    reading: 'たつ',
    meaning: '끊다/차단하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '酒を断つ。', t: '술을 끊다.' }
  },
  {
    id: 'n3-311',
    category: 'vocabulary',
    groupIndex: 16,
    kanji: '掘る',
    reading: 'ほる',
    meaning: '파다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '地面を掘る。', t: '지면을 파다.' }
  },
  {
    id: 'n3-312',
    category: 'vocabulary',
    groupIndex: 16,
    kanji: '彫る',
    reading: 'ほる',
    meaning: '새기다/조각하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '仏像を彫る。', t: '불상을 새기다.' }
  },
  {
    id: 'n3-313',
    category: 'vocabulary',
    groupIndex: 16,
    kanji: '埋める',
    reading: 'うめる',
    meaning: '묻다/매립하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '穴を埋める。', t: '구멍을 메우다.' }
  },
  {
    id: 'n3-314',
    category: 'vocabulary',
    groupIndex: 16,
    kanji: '埋まる',
    reading: 'うまる',
    meaning: '파묻히다/가득 차다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '予定が埋まる。', t: '예정이 가득 차다.' }
  }
];

const g16_adjectives: VocabItem[] = [
  {
    id: 'n3-315',
    category: 'vocabulary',
    groupIndex: 16,
    kanji: '不快',
    reading: 'ふかい',
    meaning: '불쾌함',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '不快な思いをする。', t: '불쾌한 경험을 하다.' }
  },
  {
    id: 'n3-316',
    category: 'vocabulary',
    groupIndex: 16,
    kanji: '快い',
    reading: 'こころよい',
    meaning: '기분 좋다/기꺼이',
    partOfSpeech: '형용사(い)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '快い返事をもらう。', t: '기분 좋은(기꺼운) 대답을 듣다.' }
  },
  {
    id: 'n3-317',
    category: 'vocabulary',
    groupIndex: 16,
    kanji: '平気',
    reading: 'へいき',
    meaning: '아무렇지 않음',
    partOfSpeech: '형용사(な)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '嘘を平気でつく。', t: '거짓말을 아무렇지도 않게 하다.' }
  }
];

const g16_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-318',
    category: 'vocabulary',
    groupIndex: 16,
    kanji: '断然',
    reading: 'だんぜん',
    meaning: '단연/단코',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'こちらのほうが断然いい。', t: '이쪽이 단연 좋다.' }
  },
  {
    id: 'n3-319',
    category: 'vocabulary',
    groupIndex: 16,
    kanji: 'さっぱり',
    reading: 'さっぱり',
    meaning: '상쾌하게/전혀(부정)',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'シャワーを浴びてさっぱりした。', t: '샤워를 해서 개운해졌다.' }
  },
  {
    id: 'n3-320',
    category: 'vocabulary',
    groupIndex: 16,
    kanji: 'しっかり',
    reading: 'しっかり',
    meaning: '확실히/정신 차려',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'しっかり握ってください。', t: '꽉(확실히) 잡아 주세요.' }
  }
];

// #region [GROUP 17] - ID n3-321 ~ n3-340

const g17_nouns: VocabItem[] = [
  {
    id: 'n3-321',
    category: 'vocabulary',
    groupIndex: 17,
    kanji: '直接',
    reading: 'ちょくせつ',
    meaning: '직접',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '直接本人に話す。', t: '직접 본인에게 말하다.' }
  },
  {
    id: 'n3-322',
    category: 'vocabulary',
    groupIndex: 17,
    kanji: '間接',
    reading: 'かんせつ',
    meaning: '간접',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '間接的な影響を受ける。', t: '간접적인 영향을 받다.' }
  },
  {
    id: 'n3-323',
    category: 'vocabulary',
    groupIndex: 17,
    kanji: '面接',
    reading: 'めんせつ',
    meaning: '면접',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '入社の面접を受ける。', t: '입사 면접을 받다.' }
  },
  {
    id: 'n3-324',
    category: 'vocabulary',
    groupIndex: 17,
    kanji: '接続',
    reading: 'せつぞく',
    meaning: '접속',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'ネットに接続する。', t: '인터넷에 접속하다.' }
  },
  {
    id: 'n3-325',
    category: 'vocabulary',
    groupIndex: 17,
    kanji: '接近',
    reading: 'せっきん',
    meaning: '접근',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '台風が接近している。', t: '태풍이 접근하고 있다.' }
  },
  {
    id: 'n3-326',
    category: 'vocabulary',
    groupIndex: 17,
    kanji: '交際',
    reading: 'こうさい',
    meaning: '교제',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '真剣に交際する。', t: '진지하게 교제하다.' }
  },
  {
    id: 'n3-327',
    category: 'vocabulary',
    groupIndex: 17,
    kanji: '国際',
    reading: 'こくさい',
    meaning: '국제',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '国際会議を開く。', t: '국제회의를 열다.' }
  },
  {
    id: 'n3-328',
    category: 'vocabulary',
    groupIndex: 17,
    kanji: '際',
    reading: 'さい',
    meaning: '때/경우',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '外出の際は鍵をかける。', t: '외출할 때는 자물쇠를 채운다.' }
  }
];

const g17_verbs: VocabItem[] = [
  {
    id: 'n3-329',
    category: 'vocabulary',
    groupIndex: 17,
    kanji: '接する',
    reading: 'せっする',
    meaning: '접하다/대하다',
    partOfSpeech: '동사(3그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '客に笑顔で接する。', t: '손님을 웃는 얼굴로 대하다.' }
  },
  {
    id: 'n3-330',
    category: 'vocabulary',
    groupIndex: 17,
    kanji: '繋ぐ',
    reading: 'つなぐ',
    meaning: '잇다/연결하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '手を繋いで歩く。', t: '손을 잡고 걷다.' }
  },
  {
    id: 'n3-331',
    category: 'vocabulary',
    groupIndex: 17,
    kanji: '繋がる',
    reading: 'つながる',
    meaning: '연결되다/이어지다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '電話が繋がらない。', t: '전화가 연결되지 않는다.' }
  },
  {
    id: 'n3-332',
    category: 'vocabulary',
    groupIndex: 17,
    kanji: '交ぜる',
    reading: 'まぜる',
    meaning: '섞다/혼합하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'カードをよく交ぜる。', t: '카드를 잘 섞다.' }
  },
  {
    id: 'n3-333',
    category: 'vocabulary',
    groupIndex: 17,
    kanji: '交ざる',
    reading: 'まざる',
    meaning: '섞이다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '白髪が交ざっている。', t: '흰머리가 섞여 있다.' }
  },
  {
    id: 'n3-334',
    category: 'vocabulary',
    groupIndex: 17,
    kanji: '交わす',
    reading: 'かわす',
    meaning: '주고받다/교환하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '挨拶を交わす。', t: '인사를 주고받다.' }
  }
];

const g17_adjectives: VocabItem[] = [
  {
    id: 'n3-335',
    category: 'vocabulary',
    groupIndex: 17,
    kanji: '密接',
    reading: 'みっせつ',
    meaning: '밀접함',
    partOfSpeech: '형용사(な)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '生活に密接に関わる。', t: '생활과 밀접하게 관계되다.' }
  },
  {
    id: 'n3-336',
    category: 'vocabulary',
    groupIndex: 17,
    kanji: '精巧',
    reading: 'せいこう',
    meaning: '정교함',
    partOfSpeech: '형용사(な)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '精巧な作りの模型。', t: '정교하게 만들어진 모형.' }
  },
  {
    id: 'n3-337',
    category: 'vocabulary',
    groupIndex: 17,
    kanji: '器用',
    reading: 'きよう',
    meaning: '솜씨 좋음/교묘함',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '手先が器用だ。', t: '손재주가 좋다.' }
  }
];

const g17_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-338',
    category: 'vocabulary',
    groupIndex: 17,
    kanji: '直ちに',
    reading: 'ただちに',
    meaning: '즉시/당장',
    partOfSpeech: '부사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '直ちに実行する。', t: '즉시 실행하다.' }
  },
  {
    id: 'n3-339',
    category: 'vocabulary',
    groupIndex: 17,
    kanji: 'わざと',
    reading: 'わざと',
    meaning: '일부러/고의로',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'わざと負ける。', t: '일부러 지다.' }
  },
  {
    id: 'n3-340',
    category: 'vocabulary',
    groupIndex: 17,
    kanji: 'わざわざ',
    reading: 'わざわざ',
    meaning: '일부러(수고스럽게)',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'わざわざ来てもらう。', t: '일부러 와 주시다.' }
  }
];

// #region [GROUP 18] - ID n3-341 ~ n3-360

const g18_nouns: VocabItem[] = [
  {
    id: 'n3-341',
    category: 'vocabulary',
    groupIndex: 18,
    kanji: '調査',
    reading: 'ちょうさ',
    meaning: '조사',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '原因を調査する。', t: '원인을 조사하다.' }
  },
  {
    id: 'n3-342',
    category: 'vocabulary',
    groupIndex: 18,
    kanji: '検査',
    reading: 'けんさ',
    meaning: '검사',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '血液検査を受ける。', t: '혈액 검사를 받다.' }
  },
  {
    id: 'n3-343',
    category: 'vocabulary',
    groupIndex: 18,
    kanji: '審査',
    reading: 'しんさ',
    meaning: '심사',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '書類審査に通る。', t: '서류 심사에 통과하다.' }
  },
  {
    id: 'n3-344',
    category: 'vocabulary',
    groupIndex: 18,
    kanji: '探査',
    reading: 'たんさ',
    meaning: '탐사',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '宇宙探査船。', t: '우주 탐사선.' }
  },
  {
    id: 'n3-345',
    category: 'vocabulary',
    groupIndex: 18,
    kanji: '探索',
    reading: 'たんさく',
    meaning: '탐색',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '森の中を探索する。', t: '숲속을 탐색하다.' }
  },
  {
    id: 'n3-346',
    category: 'vocabulary',
    groupIndex: 18,
    kanji: '検索',
    reading: 'けんさく',
    meaning: '검색',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '情報を検索する。', t: '정보를 검색하다.' }
  },
  {
    id: 'n3-347',
    category: 'vocabulary',
    groupIndex: 18,
    kanji: '索引',
    reading: 'さくいん',
    meaning: '색인',
    partOfSpeech: '명사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '索引で言葉を引く。', t: '색인으로 단어를 찾다.' }
  },
  {
    id: 'n3-348',
    category: 'vocabulary',
    groupIndex: 18,
    kanji: '摸索',
    reading: 'もさく',
    meaning: '모색',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '解決策を模索する。', t: '해결책을 모색하다.' }
  }
];

const g18_verbs: VocabItem[] = [
  {
    id: 'n3-349',
    category: 'vocabulary',
    groupIndex: 18,
    kanji: '探す',
    reading: 'さがす',
    meaning: '찾다(물건/사람 등)',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '仕事を探す。', t: '일자리를 찾다.' }
  },
  {
    id: 'n3-350',
    category: 'vocabulary',
    groupIndex: 18,
    kanji: '探る',
    reading: 'さぐる',
    meaning: '살피다/더듬어 찾다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'ポケットを探る。', t: '주머니를 뒤적이다(살피다).' }
  },
  {
    id: 'n3-351',
    category: 'vocabulary',
    groupIndex: 18,
    kanji: '捜す',
    reading: 'さがす',
    meaning: '찾다(잃어버린 것을 수색)',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '迷子を捜す。', t: '미아를 찾다.' }
  },
  {
    id: 'n3-352',
    category: 'vocabulary',
    groupIndex: 18,
    kanji: '求める',
    reading: 'もとめる',
    meaning: '구하다/요구하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '協力を求める。', t: '협력을 구하다.' }
  },
  {
    id: 'n3-353',
    category: 'vocabulary',
    groupIndex: 18,
    kanji: '招く',
    reading: 'まねく',
    meaning: '초대하다/불러일으키다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '夕食に招く。', t: '저녁 식사에 초대하다.' }
  },
  {
    id: 'n3-354',
    category: 'vocabulary',
    groupIndex: 18,
    kanji: '雇う',
    reading: 'やとう',
    meaning: '고용하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '従業員を雇う。', t: '종업원을 고용하다.' }
  }
];

const g18_adjectives: VocabItem[] = [
  {
    id: 'n3-355',
    category: 'vocabulary',
    groupIndex: 18,
    kanji: '詳細',
    reading: 'しょうさい',
    meaning: '상세함',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '詳細な説明を聞く。', t: '상세한 설명을 듣다.' }
  },
  {
    id: 'n3-356',
    category: 'vocabulary',
    groupIndex: 18,
    kanji: '細かい',
    reading: 'こまかい',
    meaning: '작다/세세하다',
    partOfSpeech: '형용사(い)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '細かいお金がない。', t: '잔돈(세세한 돈)이 없다.' }
  },
  {
    id: 'n3-357',
    category: 'vocabulary',
    groupIndex: 18,
    kanji: '微妙',
    reading: 'びみょう',
    meaning: '미묘함',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'ニュアンスが微妙だ。', t: '뉘앙스가 미묘하다.' }
  }
];

const g18_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-358',
    category: 'vocabulary',
    groupIndex: 18,
    kanji: 'じっくり',
    reading: 'じっくり',
    meaning: '곰곰이/차분히',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'じっくり考える。', t: '곰곰이 생각하다.' }
  },
  {
    id: 'n3-359',
    category: 'vocabulary',
    groupIndex: 18,
    kanji: 'こっそり',
    reading: 'こっそり',
    meaning: '몰래/살짝',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'こっそり部屋を出る。', t: '몰래 방을 나가다.' }
  },
  {
    id: 'n3-360',
    category: 'vocabulary',
    groupIndex: 18,
    kanji: 'うっかり',
    reading: 'うっかり',
    meaning: '깜빡/부주의하게',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'うっかり忘れていた。', t: '깜빡 잊고 있었다.' }
  }
];

// #region [GROUP 19] - ID n3-361 ~ n3-380

const g19_nouns: VocabItem[] = [
  {
    id: 'n3-361',
    category: 'vocabulary',
    groupIndex: 19,
    kanji: '禁止',
    reading: 'きんし',
    meaning: '금지',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '駐車を禁止する。', t: '주차를 금지하다.' }
  },
  {
    id: 'n3-362',
    category: 'vocabulary',
    groupIndex: 19,
    kanji: '停止',
    reading: 'ていし',
    meaning: '정지',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '一時停止を守る。', t: '일시 정지를 지키다.' }
  },
  {
    id: 'n3-363',
    category: 'vocabulary',
    groupIndex: 19,
    kanji: '廃止',
    reading: 'はいし',
    meaning: '폐지',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '古い制度を廃止する。', t: '낡은 제도를 폐지하다.' }
  },
  {
    id: 'n3-364',
    category: 'vocabulary',
    groupIndex: 19,
    kanji: '阻止',
    reading: 'そし',
    meaning: '저지',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '計画を阻止する。', t: '계획을 저지하다.' }
  },
  {
    id: 'n3-365',
    category: 'vocabulary',
    groupIndex: 19,
    kanji: '休止',
    reading: 'きゅうし',
    meaning: '휴지/잠시 쉼',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '活動を一時休止する。', t: '활동을 일시 중단(휴지)하다.' }
  },
  {
    id: 'n3-366',
    category: 'vocabulary',
    groupIndex: 19,
    kanji: '中止',
    reading: 'ちゅうし',
    meaning: '중지',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '雨で試合が中止になる。', t: '비로 시합이 중지되다.' }
  },
  {
    id: 'n3-367',
    category: 'vocabulary',
    groupIndex: 19,
    kanji: '波止場',
    reading: 'はとば',
    meaning: '부두/선창',
    partOfSpeech: '명사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '船が波止場に着く。', t: '배가 부두에 도착하다.' }
  },
  {
    id: 'n3-368',
    category: 'vocabulary',
    groupIndex: 19,
    kanji: '終点',
    reading: 'しゅうてん',
    meaning: '종점',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'バスの終点で降りる。', t: '버스의 종점에서 내리다.' }
  }
];

const g19_verbs: VocabItem[] = [
  {
    id: 'n3-369',
    category: 'vocabulary',
    groupIndex: 19,
    kanji: '止める',
    reading: 'とめる',
    meaning: '멈추다/세우다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '車を端に止める。', t: '차를 가에 세우다.' }
  },
  {
    id: 'n3-370',
    category: 'vocabulary',
    groupIndex: 19,
    kanji: '止まる',
    reading: 'とまる',
    meaning: '멈추다/멎다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '時計が止まっている。', t: '시계가 멈춰 있다.' }
  },
  {
    id: 'n3-371',
    category: 'vocabulary',
    groupIndex: 19,
    kanji: '辞める',
    reading: 'やめる',
    meaning: '그만두다/직을 물러나다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '会社を辞める。', t: '회사를 그만두다.' }
  },
  {
    id: 'n3-372',
    category: 'vocabulary',
    groupIndex: 19,
    kanji: '去る',
    reading: 'さる',
    meaning: '떠나다/지나가다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '冬が去って春が来る。', t: '겨울이 가고 봄이 온다.' }
  },
  {
    id: 'n3-373',
    category: 'vocabulary',
    groupIndex: 19,
    kanji: '訪れる',
    reading: 'おとずれる',
    meaning: '방문하다/찾아오다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '平和な日々が訪れる。', t: '평화로운 나날이 찾아오다.' }
  },
  {
    id: 'n3-374',
    category: 'vocabulary',
    groupIndex: 19,
    kanji: '訪ねる',
    reading: 'たずねる',
    meaning: '방문하다/찾아가다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '友人の家を訪ねる。', t: '친구의 집을 방문하다.' }
  }
];

const g19_adjectives: VocabItem[] = [
  {
    id: 'n3-375',
    category: 'vocabulary',
    groupIndex: 19,
    kanji: '静か',
    reading: 'しずか',
    meaning: '조용함',
    partOfSpeech: '형용사(な)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '静かな夜。', t: '조용한 밤.' }
  },
  {
    id: 'n3-376',
    category: 'vocabulary',
    groupIndex: 19,
    kanji: '冷静',
    reading: 'れいせい',
    meaning: '냉정함',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '冷静に判断する。', t: '냉정하게 판단하다.' }
  },
  {
    id: 'n3-377',
    category: 'vocabulary',
    groupIndex: 19,
    kanji: '穏やか',
    reading: 'おだやか',
    meaning: '온화함/평온함',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '穏やかな海。', t: '온화한 바다.' }
  }
];

const g19_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-378',
    category: 'vocabulary',
    groupIndex: 19,
    kanji: 'そろそろ',
    reading: 'そろそろ',
    meaning: '슬슬/곧',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'そろそろ失礼します。', t: '슬슬 가 보겠습니다(실례하겠습니다).' }
  },
  {
    id: 'n3-379',
    category: 'vocabulary',
    groupIndex: 19,
    kanji: 'じろじろ',
    reading: 'じろじろ',
    meaning: '빤히/뚫어지게',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '人の顔をじろじろ見る。', t: '남의 얼굴을 빤히 보다.' }
  },
  {
    id: 'n3-380',
    category: 'vocabulary',
    groupIndex: 19,
    kanji: 'きらきら',
    reading: 'きらきら',
    meaning: '반짝반짝',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '星がきらきら光る。', t: '별이 반짝반짝 빛나다.' }
  }
];

// #region [GROUP 20] - ID n3-381 ~ n3-400

const g20_nouns: VocabItem[] = [
  {
    id: 'n3-381',
    category: 'vocabulary',
    groupIndex: 20,
    kanji: '協力',
    reading: 'きょうりょく',
    meaning: '협력',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '皆で協力して作業する。', t: '모두 협력해서 작업하다.' }
  },
  {
    id: 'n3-382',
    category: 'vocabulary',
    groupIndex: 20,
    kanji: '妥協',
    reading: 'だきょう',
    meaning: '타협',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '決して妥協しない。', t: '결코 타협하지 않는다.' }
  },
  {
    id: 'n3-383',
    category: 'vocabulary',
    groupIndex: 20,
    kanji: '協会',
    reading: 'きょうかい',
    meaning: '협회',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'サッカー協会。', t: '축구 협회.' }
  },
  {
    id: 'n3-384',
    category: 'vocabulary',
    groupIndex: 20,
    kanji: '共通',
    reading: 'きょうつう',
    meaning: '공통',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '共通の趣味を持つ。', t: '공통의 취미를 갖다.' }
  },
  {
    id: 'n3-385',
    category: 'vocabulary',
    groupIndex: 20,
    kanji: '公共',
    reading: 'こうきょう',
    meaning: '공공',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '公共の場所。', t: '공공장소.' }
  },
  {
    id: 'n3-386',
    category: 'vocabulary',
    groupIndex: 20,
    kanji: '共感',
    reading: 'きょうかん',
    meaning: '공감',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '彼の意見に共감する。', t: '그의 의견에 공감하다.' }
  },
  {
    id: 'n3-387',
    category: 'vocabulary',
    groupIndex: 20,
    kanji: '共和国',
    reading: 'きょうわこく',
    meaning: '공화국',
    partOfSpeech: '명사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'フランス共和国。', t: '프랑스 공화국.' }
  },
  {
    id: 'n3-388',
    category: 'vocabulary',
    groupIndex: 20,
    kanji: '男女',
    reading: 'だんじょ',
    meaning: '남녀',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '男女共同参画。', t: '남녀 공동 참여.' }
  }
];

const g20_verbs: VocabItem[] = [
  {
    id: 'n3-389',
    category: 'vocabulary',
    groupIndex: 20,
    kanji: '助ける',
    reading: 'たすける',
    meaning: '돕다/구하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '困っている人を助ける。', t: '곤경에 처한 사람을 돕다.' }
  },
  {
    id: 'n3-390',
    category: 'vocabulary',
    groupIndex: 20,
    kanji: '助かる',
    reading: 'たすかる',
    meaning: '도움이 되다/살아나다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'アドバイスのおかげで助かった。', t: '조언 덕분에 큰 도움이 되었다.' }
  },
  {
    id: 'n3-391',
    category: 'vocabulary',
    groupIndex: 20,
    kanji: '励ます',
    reading: 'はげます',
    meaning: '격려하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '友人を元気づけようと励ます。', t: '친구를 기운 내게 하려고 격려하다.' }
  },
  {
    id: 'n3-392',
    category: 'vocabulary',
    groupIndex: 20,
    kanji: '救う',
    reading: 'すくう',
    meaning: '구조하다/건지다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '命を救う。', t: '목숨을 구하다.' }
  },
  {
    id: 'n3-393',
    category: 'vocabulary',
    groupIndex: 20,
    kanji: '恵まれる',
    reading: 'めぐまれる',
    meaning: '혜택받다/풍족하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '才能に恵まれる。', t: '재능을 타고나다(혜택받다).' }
  },
  {
    id: 'n3-394',
    category: 'vocabulary',
    groupIndex: 20,
    kanji: '支える',
    reading: 'ささえる',
    meaning: '지탱하다/받치다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '家計を支える。', t: '가계를 지탱하다.' }
  }
];

const g20_adjectives: VocabItem[] = [
  {
    id: 'n3-395',
    category: 'vocabulary',
    groupIndex: 20,
    kanji: '強力',
    reading: 'きょうりょく',
    meaning: '강력함',
    partOfSpeech: '형용사(な)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '強力な味方。', t: '강력한 아군.' }
  },
  {
    id: 'n3-396',
    category: 'vocabulary',
    groupIndex: 20,
    kanji: '共',
    reading: 'とも',
    meaning: '함께임/공통임',
    partOfSpeech: '명사/접미사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '苦楽を共にする。', t: '고락을 함께하다.' }
  },
  {
    id: 'n3-397',
    category: 'vocabulary',
    groupIndex: 20,
    kanji: '貧しい',
    reading: 'まずしい',
    meaning: '가난하다',
    partOfSpeech: '형용사(い)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '貧しい生活を送る。', t: '가난한 생활을 보내다.' }
  }
];

const g20_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-398',
    category: 'vocabulary',
    groupIndex: 20,
    kanji: '共に',
    reading: 'ともに',
    meaning: '함께',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '家族と共に過ごす。', t: '가족과 함께 보내다.' }
  },
  {
    id: 'n3-399',
    category: 'vocabulary',
    groupIndex: 20,
    kanji: '着々と',
    reading: 'ちゃくちゃくと',
    meaning: '착착/순조롭게',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '準備は着々と進んでいる。', t: '준비는 착착 진행되고 있다.' }
  },
  {
    id: 'n3-400',
    category: 'vocabulary',
    groupIndex: 20,
    kanji: '堂々と',
    reading: 'どうどうと',
    meaning: '당당하게',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '堂々と意見を述べる。', t: '당당하게 의견을 말하다.' }
  }
];

// #region [GROUP 21] - ID n3-401 ~ n3-420

const g21_nouns: VocabItem[] = [
  {
    id: 'n3-401',
    category: 'vocabulary',
    groupIndex: 21,
    kanji: '判断',
    reading: 'はんだん',
    meaning: '판단',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '最終的な判断を下す。', t: '최종적인 판단을 내리다.' }
  },
  {
    id: 'n3-402',
    category: 'vocabulary',
    groupIndex: 21,
    kanji: '批判',
    reading: 'ひはん',
    meaning: '비판',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '政府の政策を批判する।', t: '정부의 정책을 비판하다.' }
  },
  {
    id: 'n3-403',
    category: 'vocabulary',
    groupIndex: 21,
    kanji: '評判',
    reading: 'ひょうばん',
    meaning: '평판',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'この店は評判がいい。', t: '이 가게는 평판이 좋다.' }
  },
  {
    id: 'n3-404',
    category: 'vocabulary',
    groupIndex: 21,
    kanji: '評価',
    reading: 'ひょうか',
    meaning: '평가',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '高く評価される。', t: '높게 평가되다.' }
  },
  {
    id: 'n3-405',
    category: 'vocabulary',
    groupIndex: 21,
    kanji: '評論',
    reading: 'ひょうろん',
    meaning: '평론',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '文芸評論を読む。', t: '문예 평론을 읽다.' }
  },
  {
    id: 'n3-406',
    category: 'vocabulary',
    groupIndex: 21,
    kanji: '裁判',
    reading: 'さいばん',
    meaning: '재판',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '裁判で争う。', t: '재판에서 다투다.' }
  },
  {
    id: 'n3-407',
    category: 'vocabulary',
    groupIndex: 21,
    kanji: '判事',
    reading: 'はんじ',
    meaning: '판사',
    partOfSpeech: '명사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '判事が判決を言い渡す。', t: '판사가 판결을 선고하다.' }
  },
  {
    id: 'n3-408',
    category: 'vocabulary',
    groupIndex: 21,
    kanji: '判明',
    reading: 'はんめい',
    meaning: '판명됨',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '事実が判明した。', t: '사실이 판명되었다.' }
  }
];

const g21_verbs: VocabItem[] = [
  {
    id: 'n3-409',
    category: 'vocabulary',
    groupIndex: 21,
    kanji: '判る',
    reading: 'わかる',
    meaning: '판명되다/알다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '善悪を判る。', t: '선악을 알다(판별하다).' }
  },
  {
    id: 'n3-410',
    category: 'vocabulary',
    groupIndex: 21,
    kanji: '比べる',
    reading: 'くらべる',
    meaning: '비교하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '身長を比べる。', t: '키를 비교하다.' }
  },
  {
    id: 'n3-411',
    category: 'vocabulary',
    groupIndex: 21,
    kanji: '叶う',
    reading: 'かなう',
    meaning: '이루어지다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '夢が叶う。', t: '꿈이 이루어지다.' }
  },
  {
    id: 'n3-412',
    category: 'vocabulary',
    groupIndex: 21,
    kanji: '叶える',
    reading: 'かなえる',
    meaning: '이루게 하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '願いを叶える。', t: '소원을 이루어주다.' }
  },
  {
    id: 'n3-413',
    category: 'vocabulary',
    groupIndex: 21,
    kanji: '似る',
    reading: 'にる',
    meaning: '닮다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '母親に似ている。', t: '어머니를 닮았다.' }
  },
  {
    id: 'n3-414',
    category: 'vocabulary',
    groupIndex: 21,
    kanji: '似せる',
    reading: 'にせる',
    meaning: '흉내 내다/비슷하게 하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '本物に似せて作る。', t: '진짜와 비슷하게 만들다.' }
  }
];

const g21_adjectives: VocabItem[] = [
  {
    id: 'n3-415',
    category: 'vocabulary',
    groupIndex: 21,
    kanji: '判定',
    reading: 'はんてい',
    meaning: '판정',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '審判の判定に従う。', t: '심판의 판정에 따르다.' }
  },
  {
    id: 'n3-416',
    category: 'vocabulary',
    groupIndex: 21,
    kanji: '有難い',
    reading: 'ありがたい',
    meaning: '고맙다/감사하다',
    partOfSpeech: '형용사(い)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '有難いお言葉。', t: '고마운 말씀.' }
  },
  {
    id: 'n3-417',
    category: 'vocabulary',
    groupIndex: 21,
    kanji: '申し訳ない',
    reading: 'もうしわけない',
    meaning: '미안하다/죄송하다',
    partOfSpeech: '형용사(い)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'ご迷惑をおかけして申し訳ない。', t: '폐를 끼쳐 죄송하다.' }
  }
];

const g21_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-418',
    category: 'vocabulary',
    groupIndex: 21,
    kanji: '案外',
    reading: 'あんがい',
    meaning: '의외로',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '案外、早く終わった。', t: '의외로 빨리 끝났다.' }
  },
  {
    id: 'n3-419',
    category: 'vocabulary',
    groupIndex: 21,
    kanji: 'いよいよ',
    reading: 'いよいよ',
    meaning: '드디어/드디어 때가 옴',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'いよいよ明日、出発だ。', t: '드디어 내일 출발이다.' }
  },
  {
    id: 'n3-420',
    category: 'vocabulary',
    groupIndex: 21,
    kanji: 'ますます',
    reading: 'ますます',
    meaning: '더욱더',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '雨がますます強くなる。', t: '비가 더욱더 거세진다.' }
  }
];

// #region [GROUP 22] - ID n3-421 ~ n3-440

const g22_nouns: VocabItem[] = [
  {
    id: 'n3-421',
    category: 'vocabulary',
    groupIndex: 22,
    kanji: '希望',
    reading: 'きぼう',
    meaning: '희망',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '将来の希望を語る。', t: '장래 희망을 이야기하다.' }
  },
  {
    id: 'n3-422',
    category: 'vocabulary',
    groupIndex: 22,
    kanji: '失望',
    reading: 'しつぼう',
    meaning: '실망',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '結果に失望する。', t: '결과에 실망하다.' }
  },
  {
    id: 'n3-423',
    category: 'vocabulary',
    groupIndex: 22,
    kanji: '望遠鏡',
    reading: 'ぼうえんきょう',
    meaning: '망원경',
    partOfSpeech: '명사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '望遠鏡で星を見る。', t: '망원경으로 별을 보다.' }
  },
  {
    id: 'n3-424',
    category: 'vocabulary',
    groupIndex: 22,
    kanji: '要望',
    reading: 'ようぼう',
    meaning: '요망/요구',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '住民の要望に応える。', t: '주민의 요망에 부응하다.' }
  },
  {
    id: 'n3-425',
    category: 'vocabulary',
    groupIndex: 22,
    kanji: '期待',
    reading: 'きたい',
    meaning: '기대',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '新人に期待する。', t: '신인에게 기대하다.' }
  },
  {
    id: 'n3-426',
    category: 'vocabulary',
    groupIndex: 22,
    kanji: '待合室',
    reading: 'まちあいしつ',
    meaning: '대기실/대합실',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '駅の待合室で待つ。', t: '역 대합실에서 기다리다.' }
  },
  {
    id: 'n3-427',
    category: 'vocabulary',
    groupIndex: 22,
    kanji: '虐待',
    reading: 'ぎゃくたい',
    meaning: '학대',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '動物虐待を許さない。', t: '동물 학대를 용납하지 않는다.' }
  },
  {
    id: 'n3-428',
    category: 'vocabulary',
    groupIndex: 22,
    kanji: '正体',
    reading: 'しょうたい',
    meaning: '정체/본모습',
    partOfSpeech: '명사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '敵の正体を見破る。', t: '적의 정체를 간파하다.' }
  }
];

const g22_verbs: VocabItem[] = [
  {
    id: 'n3-429',
    category: 'vocabulary',
    groupIndex: 22,
    kanji: '望む',
    reading: 'のぞむ',
    meaning: '바라다/소망하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '平和を望む。', t: '평화를 바라다.' }
  },
  {
    id: 'n3-430',
    category: 'vocabulary',
    groupIndex: 22,
    kanji: '待ち合わせる',
    reading: 'まちあわせる',
    meaning: '약속해서 만나다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '駅前で待ち合わせる。', t: '역 앞에서 만나기로 하다.' }
  },
  {
    id: 'n3-431',
    category: 'vocabulary',
    groupIndex: 22,
    kanji: '招待する',
    reading: 'しょうたいする',
    meaning: '초대하다',
    partOfSpeech: '동사(3그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '誕生日に友人を招待する。', t: '생일에 친구를 초대하다.' }
  },
  {
    id: 'n3-432',
    category: 'vocabulary',
    groupIndex: 22,
    kanji: '期待する',
    reading: 'きたいする',
    meaning: '기대하다',
    partOfSpeech: '동사(3그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '活躍を期待している。', t: '활약을 기대하고 있다.' }
  },
  {
    id: 'n3-433',
    category: 'vocabulary',
    groupIndex: 22,
    kanji: '臨む',
    reading: 'のぞむ',
    meaning: '임하다/직면하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '試験に臨む。', t: '시험에 임하다.' }
  },
  {
    id: 'n3-434',
    category: 'vocabulary',
    groupIndex: 22,
    kanji: '羨む',
    reading: 'うらやむ',
    meaning: '부러워하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '他人の成功を羨む。', t: '타인의 성공을 부러워하다.' }
  }
];

const g22_adjectives: VocabItem[] = [
  {
    id: 'n3-435',
    category: 'vocabulary',
    groupIndex: 22,
    kanji: '有望',
    reading: 'ゆうぼう',
    meaning: '유망함',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '有望な若手選手。', t: '유망한 신예 선수.' }
  },
  {
    id: 'n3-436',
    category: 'vocabulary',
    groupIndex: 22,
    kanji: '待ち遠しい',
    reading: 'まちどおしい',
    meaning: '몹시 기다려지다',
    partOfSpeech: '형용사(い)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '休みが待ち遠しい。', t: '휴일이 몹시 기다려진다.' }
  },
  {
    id: 'n3-437',
    category: 'vocabulary',
    groupIndex: 22,
    kanji: '羨ましい',
    reading: 'うらやましい',
    meaning: '부럽다',
    partOfSpeech: '형용사(い)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '彼の才能が羨ましい。', t: '그의 재능이 부럽다.' }
  }
];

const g22_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-438',
    category: 'vocabulary',
    groupIndex: 22,
    kanji: '案の定',
    reading: 'あんのじょう',
    meaning: '아니나 다를까/생각한 대로',
    partOfSpeech: '부사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '案の定、雨が降り出した。', t: '아니나 다를까, 비가 내리기 시작했다.' }
  },
  {
    id: 'n3-439',
    category: 'vocabulary',
    groupIndex: 22,
    kanji: '恐らく',
    reading: 'おそらく',
    meaning: '아마도/어쩌면',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '恐らく彼は来ないだろう。', t: '아마 그는 오지 않을 것이다.' }
  },
  {
    id: 'n3-440',
    category: 'vocabulary',
    groupIndex: 22,
    kanji: '是非とも',
    reading: 'ぜひとも',
    meaning: '부디/꼭',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '是非とも参加したい。', t: '부디 꼭 참가하고 싶다.' }
  }
];

// #region [GROUP 23] - ID n3-441 ~ n3-460

const g23_nouns: VocabItem[] = [
  {
    id: 'n3-441',
    category: 'vocabulary',
    groupIndex: 23,
    kanji: '解決',
    reading: 'かいけつ',
    meaning: '해결',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '問題を解決する。', t: '문제를 해결하다.' }
  },
  {
    id: 'n3-442',
    category: 'vocabulary',
    groupIndex: 23,
    kanji: '決算',
    reading: 'けっさん',
    meaning: '결산',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '年度末に決算を行う。', t: '연도 말에 결산을 행하다.' }
  },
  {
    id: 'n3-443',
    category: 'vocabulary',
    groupIndex: 23,
    kanji: '決定',
    reading: 'けってい',
    meaning: '결정',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '方針を決定する。', t: '방침을 결정하다.' }
  },
  {
    id: 'n3-444',
    category: 'vocabulary',
    groupIndex: 23,
    kanji: '決心',
    reading: 'けっしん',
    meaning: '결심',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '留学を決心する。', t: '유학을 결심하다.' }
  },
  {
    id: 'n3-445',
    category: 'vocabulary',
    groupIndex: 23,
    kanji: '決闘',
    reading: 'けっとう',
    meaning: '결투',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '決闘を申し込む。', t: '결투를 신청하다.' }
  },
  {
    id: 'n3-446',
    category: 'vocabulary',
    groupIndex: 23,
    kanji: '多数決',
    reading: 'たすうけつ',
    meaning: '다수결',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '多数決で決める。', t: '다수결로 정하다.' }
  },
  {
    id: 'n3-447',
    category: 'vocabulary',
    groupIndex: 23,
    kanji: '可決',
    reading: 'かけつ',
    meaning: '가결',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '法案が可決された。', t: '법안이 가결되었다.' }
  },
  {
    id: 'n3-448',
    category: 'vocabulary',
    groupIndex: 23,
    kanji: '決意',
    reading: 'けつい',
    meaning: '결의/다짐',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '新たな決意を固める。', t: '새로운 결의를 다지다.' }
  }
];

const g23_verbs: VocabItem[] = [
  {
    id: 'n3-449',
    category: 'vocabulary',
    groupIndex: 23,
    kanji: '決める',
    reading: 'きめる',
    meaning: '정하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'ルールを決める。', t: '규칙을 정하다.' }
  },
  {
    id: 'n3-450',
    category: 'vocabulary',
    groupIndex: 23,
    kanji: '解く',
    reading: 'とく',
    meaning: '풀다/해치다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '謎を解く。', t: '수수께끼를 풀다.' }
  },
  {
    id: 'n3-451',
    category: 'vocabulary',
    groupIndex: 23,
    kanji: '解ける',
    reading: 'とける',
    meaning: '풀리다/해소되다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '誤解が解ける。', t: '오해가 풀리다.' }
  },
  {
    id: 'n3-452',
    category: 'vocabulary',
    groupIndex: 23,
    kanji: '溶かす',
    reading: 'とかす',
    meaning: '녹이다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'バターを溶かす。', t: '버터를 녹이다.' }
  },
  {
    id: 'n3-453',
    category: 'vocabulary',
    groupIndex: 23,
    kanji: '溶ける',
    reading: 'とける',
    meaning: '녹다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '氷が溶ける。', t: '얼음이 녹다.' }
  },
  {
    id: 'n3-454',
    category: 'vocabulary',
    groupIndex: 23,
    kanji: '削る',
    reading: 'けずる',
    meaning: '깎다/줄이다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '予算を削る。', t: '예산을 줄이다.' }
  }
];

const g23_adjectives: VocabItem[] = [
  {
    id: 'n3-455',
    category: 'vocabulary',
    groupIndex: 23,
    kanji: '決定的',
    reading: 'けっていてき',
    meaning: '결정적',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '決定的な証拠。', t: '결정적인 증거.' }
  },
  {
    id: 'n3-456',
    category: 'vocabulary',
    groupIndex: 23,
    kanji: '快い',
    reading: 'こころよい',
    meaning: '기분 좋다/기꺼이',
    partOfSpeech: '형용사(い)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '快い返事。', t: '기분 좋은 대답.' }
  },
  {
    id: 'n3-457',
    category: 'vocabulary',
    groupIndex: 23,
    kanji: '鋭い',
    reading: 'するどい',
    meaning: '날카롭다/예리하다',
    partOfSpeech: '형용사(い)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '鋭い刃物。', t: '날카로운 칼붙이.' }
  }
];

const g23_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-458',
    category: 'vocabulary',
    groupIndex: 23,
    kanji: '一気に',
    reading: 'いっきに',
    meaning: '단숨에',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'ジュースを一気に飲む。', t: '주스를 단숨에 마시다.' }
  },
  {
    id: 'n3-459',
    category: 'vocabulary',
    groupIndex: 23,
    kanji: '一斉に',
    reading: 'いっせいに',
    meaning: '일제히',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '鳥が一斉に飛び立つ。', t: '새들이 일제히 날아오르다.' }
  },
  {
    id: 'n3-460',
    category: 'vocabulary',
    groupIndex: 23,
    kanji: '一段と',
    reading: 'いちだんと',
    meaning: '한층/더욱',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '寒さが一段と厳しくなる。', t: '추위가 한층 더 엄해지다.' }
  }
];

// #region [GROUP 24] - ID n3-461 ~ n3-480

const g24_nouns: VocabItem[] = [
  {
    id: 'n3-461',
    category: 'vocabulary',
    groupIndex: 24,
    kanji: '技術',
    reading: 'ぎじゅつ',
    meaning: '기술',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '新しい技術を導入する。', t: '새로운 기술을 도입하다.' }
  },
  {
    id: 'n3-462',
    category: 'vocabulary',
    groupIndex: 24,
    kanji: '競技',
    reading: 'きょうぎ',
    meaning: '경기',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '競技場で試合を行う。', t: '경기장에서 시합을 행하다.' }
  },
  {
    id: 'n3-463',
    category: 'vocabulary',
    groupIndex: 24,
    kanji: '演技',
    reading: 'えんぎ',
    meaning: '연기',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '迫力のある演技。', t: '박력 있는 연기.' }
  },
  {
    id: 'n3-464',
    category: 'vocabulary',
    groupIndex: 24,
    kanji: '特技',
    reading: 'とくぎ',
    meaning: '특기',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '特技はピアノです。', t: '특기는 피아노입니다.' }
  },
  {
    id: 'n3-465',
    category: 'vocabulary',
    groupIndex: 24,
    kanji: '技能',
    reading: 'ぎのう',
    meaning: '기능/기술적 능력',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '技能実習生を受け入れる。', t: '기능 실습생을 받아들이다.' }
  },
  {
    id: 'n3-466',
    category: 'vocabulary',
    groupIndex: 24,
    kanji: '術',
    reading: 'すべ',
    meaning: '방법/수단',
    partOfSpeech: '명사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '知る術がない。', t: '알 길이(방법이) 없다.' }
  },
  {
    id: 'n3-467',
    category: 'vocabulary',
    groupIndex: 24,
    kanji: '美術',
    reading: 'びじゅつ',
    meaning: '미술',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '美術館へ行く。', t: '미술관에 가다.' }
  },
  {
    id: 'n3-468',
    category: 'vocabulary',
    groupIndex: 24,
    kanji: '手術',
    reading: 'しゅじゅつ',
    meaning: '수술',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '手術を受ける。', t: '수술을 받다.' }
  }
];

const g24_verbs: VocabItem[] = [
  {
    id: 'n3-469',
    category: 'vocabulary',
    groupIndex: 24,
    kanji: '磨く',
    reading: 'みがく',
    meaning: '닦다/연마하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '歯を磨く。', t: '이를 닦다.' }
  },
  {
    id: 'n3-470',
    category: 'vocabulary',
    groupIndex: 24,
    kanji: '競う',
    reading: 'きそう',
    meaning: '겨루다/경쟁하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '腕を競う。', t: '실력을 겨루다.' }
  },
  {
    id: 'n3-471',
    category: 'vocabulary',
    groupIndex: 24,
    kanji: '操る',
    reading: 'あやつる',
    meaning: '조종하다/다루다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '人形を操る。', t: '인형을 조종하다.' }
  },
  {
    id: 'n3-472',
    category: 'vocabulary',
    groupIndex: 24,
    kanji: '支える',
    reading: 'ささえる',
    meaning: '지탱하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '一家を支える。', t: '일가를 지탱하다.' }
  },
  {
    id: 'n3-473',
    category: 'vocabulary',
    groupIndex: 24,
    kanji: '整える',
    reading: 'ととのえる',
    meaning: '정돈하다/준비하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '身支度を整える。', t: '차비를 정돈하다.' }
  },
  {
    id: 'n3-474',
    category: 'vocabulary',
    groupIndex: 24,
    kanji: '構える',
    reading: 'かまえる',
    meaning: '준비를 갖추다/집을 짓다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'カメラを構える。', t: '카메라를 자세를 잡다(준비하다).' }
  }
];

const g24_adjectives: VocabItem[] = [
  {
    id: 'n3-475',
    category: 'vocabulary',
    groupIndex: 24,
    kanji: '巧妙',
    reading: 'こうみょう',
    meaning: '교묘함',
    partOfSpeech: '형용사(な)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '巧妙な手口。', t: '교묘한 수법.' }
  },
  {
    id: 'n3-476',
    category: 'vocabulary',
    groupIndex: 24,
    kanji: '得意',
    reading: 'とくい',
    meaning: '자신 있음/특기',
    partOfSpeech: '형용사(な)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '料理が得意だ。', t: '요리가 특기다(자신 있다).' }
  },
  {
    id: 'n3-477',
    category: 'vocabulary',
    groupIndex: 24,
    kanji: '苦手',
    reading: 'にがて',
    meaning: '서툼/잘 못함',
    partOfSpeech: '형용사(な)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '運動が苦手だ。', t: '운동을 잘 못한다(서투르다).' }
  }
];

const g24_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-478',
    category: 'vocabulary',
    groupIndex: 24,
    kanji: 'つい',
    reading: 'つい',
    meaning: '그만/나도 모르게',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'ついうっかり忘れた。', t: '그만 깜빡 잊었다.' }
  },
  {
    id: 'n3-479',
    category: 'vocabulary',
    groupIndex: 24,
    kanji: 'ようやく',
    reading: 'ようやく',
    meaning: '겨우/간신히',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'ようやく完成した。', t: '겨우 완성되었다.' }
  },
  {
    id: 'n3-480',
    category: 'vocabulary',
    groupIndex: 24,
    kanji: 'ついに',
    reading: 'ついに',
    meaning: '마침내/결국',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'ついに犯人が捕まった。', t: '마침내 범인이 잡혔다.' }
  }
];

// #region [GROUP 25] - ID n3-481 ~ n3-500

const g25_nouns: VocabItem[] = [
  {
    id: 'n3-481',
    category: 'vocabulary',
    groupIndex: 25,
    kanji: '訓練',
    reading: 'くんれん',
    meaning: '훈련',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '避難訓練に参加する。', t: '피난 훈련에 참가하다.' }
  },
  {
    id: 'n3-482',
    category: 'vocabulary',
    groupIndex: 25,
    kanji: '練習',
    reading: 'れんしゅう',
    meaning: '연습',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '毎日ピアノを練習する。', t: '매일 피아노를 연습하다.' }
  },
  {
    id: 'n3-483',
    category: 'vocabulary',
    groupIndex: 25,
    kanji: '試練',
    reading: 'しれん',
    meaning: '시련',
    partOfSpeech: '명사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '厳しい試練を乗り越える。', t: '엄중한 시련을 극복하다.' }
  },
  {
    id: 'n3-484',
    category: 'vocabulary',
    groupIndex: 25,
    kanji: '熟練',
    reading: 'じゅくれん',
    meaning: '숙련',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '熟練した技術を持つ。', t: '숙련된 기술을 가지다.' }
  },
  {
    id: 'n3-485',
    category: 'vocabulary',
    groupIndex: 25,
    kanji: '学習',
    reading: 'がくしゅう',
    meaning: '학습',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '生涯学習に取り組む。', t: '평생 학습에 매진하다.' }
  },
  {
    id: 'n3-486',
    category: 'vocabulary',
    groupIndex: 25,
    kanji: '習慣',
    reading: 'しゅうかん',
    meaning: '습관',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '早寝早起きの習慣。', t: '일찍 자고 일찍 일어나는 습관.' }
  },
  {
    id: 'n3-487',
    category: 'vocabulary',
    groupIndex: 25,
    kanji: '慣習',
    reading: 'かんしゅう',
    meaning: '관습',
    partOfSpeech: '명사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '古い慣習を打破する。', t: '오래된 관습을 타파하다.' }
  },
  {
    id: 'n3-488',
    category: 'vocabulary',
    groupIndex: 25,
    kanji: '復習',
    reading: 'ふくしゅう',
    meaning: '복습',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '授業の内容を復習する。', t: '수업 내용을 복습하다.' }
  }
];

const g25_verbs: VocabItem[] = [
  {
    id: 'n3-489',
    category: 'vocabulary',
    groupIndex: 25,
    kanji: '練る',
    reading: 'ねる',
    meaning: '짜다/다듬다/반죽하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '作戦を練る。', t: '작전을 짜다.' }
  },
  {
    id: 'n3-490',
    category: 'vocabulary',
    groupIndex: 25,
    kanji: '慣れる',
    reading: 'なれる',
    meaning: '익숙해지다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '新しい生活に慣れる。', t: '새로운 생활에 익숙해지다.' }
  },
  {
    id: 'n3-491',
    category: 'vocabulary',
    groupIndex: 25,
    kanji: '習う',
    reading: 'ならう',
    meaning: '배우다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '書道を習う。', t: '서예를 배우다.' }
  },
  {
    id: 'n3-492',
    category: 'vocabulary',
    groupIndex: 25,
    kanji: '学ぶ',
    reading: 'まなぶ',
    meaning: '배우다/학습하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '経験から学ぶ。', t: '경험으로부터 배우다.' }
  },
  {
    id: 'n3-493',
    category: 'vocabulary',
    groupIndex: 25,
    kanji: '鍛える',
    reading: 'きたえる',
    meaning: '단련하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '体を鍛える。', t: '몸을 단련하다.' }
  },
  {
    id: 'n3-494',
    category: 'vocabulary',
    groupIndex: 25,
    kanji: '修める',
    reading: 'おさめる',
    meaning: '익히다/닦다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '学問を修める。', t: '학문을 닦다.' }
  }
];

const g25_adjectives: VocabItem[] = [
  {
    id: 'n3-495',
    category: 'vocabulary',
    groupIndex: 25,
    kanji: '不慣れ',
    reading: 'ふなれ',
    meaning: '익숙하지 않음',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '不慣れな仕事に苦労する。', t: '익숙하지 않은 일에 고생하다.' }
  },
  {
    id: 'n3-496',
    category: 'vocabulary',
    groupIndex: 25,
    kanji: '見慣れる',
    reading: 'みなれる',
    meaning: '낯익다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '見慣れた景色。', t: '낯익은 풍경.' }
  },
  {
    id: 'n3-497',
    category: 'vocabulary',
    groupIndex: 25,
    kanji: '使い慣れる',
    reading: 'つかいなれる',
    meaning: '손에 익다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '使い慣れた道具。', t: '손에 익은 도구.' }
  }
];

const g25_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-498',
    category: 'vocabulary',
    groupIndex: 25,
    kanji: '常に',
    reading: 'つねに',
    meaning: '늘/항상',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '常に笑顔を絶やさない。', t: '항상 웃음을 잃지 않는다.' }
  },
  {
    id: 'n3-499',
    category: 'vocabulary',
    groupIndex: 25,
    kanji: '絶えず',
    reading: 'たえず',
    meaning: '끊임없이',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '絶えず努力を続ける。', t: '끊임없이 노력을 계속하다.' }
  },
  {
    id: 'n3-500',
    category: 'vocabulary',
    groupIndex: 25,
    kanji: '度々',
    reading: 'たびたび',
    meaning: '자주/번번이',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '度々ご迷惑をおかけします。', t: '번번이 폐를 끼칩니다.' }
  }
];

// #region [GROUP 26] - ID n3-501 ~ n3-520

const g26_nouns: VocabItem[] = [
  {
    id: 'n3-501',
    category: 'vocabulary',
    groupIndex: 26,
    kanji: '証明',
    reading: 'しょうめい',
    meaning: '증명',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '身分を証明する。', t: '신분을 증명하다.' }
  },
  {
    id: 'n3-502',
    category: 'vocabulary',
    groupIndex: 26,
    kanji: '証拠',
    reading: 'しょうこ',
    meaning: '증거',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '決定的な証拠を見つける。', t: '결정적인 증거를 찾다.' }
  },
  {
    id: 'n3-503',
    category: 'vocabulary',
    groupIndex: 26,
    kanji: '証言',
    reading: 'しょうげん',
    meaning: '증언',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '目撃者が証言する。', t: '목격자가 증언하다.' }
  },
  {
    id: 'n3-504',
    category: 'vocabulary',
    groupIndex: 26,
    kanji: '免許',
    reading: 'めんきょ',
    meaning: '면허',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '運転免許を取る。', t: '운전면허를 따다.' }
  },
  {
    id: 'n3-505',
    category: 'vocabulary',
    groupIndex: 26,
    kanji: '保証',
    reading: 'ほしょう',
    meaning: '보증',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '品質を保証する。', t: '품질을 보증하다.' }
  },
  {
    id: 'n3-506',
    category: 'vocabulary',
    groupIndex: 26,
    kanji: '検証',
    reading: 'けんしょう',
    meaning: '검증',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '仮説を検証する。', t: '가설을 검증하다.' }
  },
  {
    id: 'n3-507',
    category: 'vocabulary',
    groupIndex: 26,
    kanji: '証明書',
    reading: 'しょうめいしょ',
    meaning: '증명서',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '卒業証明書を発行する。', t: '졸업 증명서를 발행하다.' }
  },
  {
    id: 'n3-508',
    category: 'vocabulary',
    groupIndex: 26,
    kanji: '根拠',
    reading: 'こんきょ',
    meaning: '근거',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '科学的な根拠を示す。', t: '과학적인 근거를 제시하다.' }
  }
];

const g26_verbs: VocabItem[] = [
  {
    id: 'n3-509',
    category: 'vocabulary',
    groupIndex: 26,
    kanji: '明かす',
    reading: 'あかす',
    meaning: '밝히다/털어놓다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '秘密を明かす。', t: '비밀을 밝히다.' }
  },
  {
    id: 'n3-510',
    category: 'vocabulary',
    groupIndex: 26,
    kanji: '証す',
    reading: 'あかす',
    meaning: '증명하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '身の潔白を証す。', t: '결백을 증명하다.' }
  },
  {
    id: 'n3-511',
    category: 'vocabulary',
    groupIndex: 26,
    kanji: '許す',
    reading: 'ゆるす',
    meaning: '허락하다/용서하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '過ちを許す。', t: '과오를 용서하다.' }
  },
  {
    id: 'n3-512',
    category: 'vocabulary',
    groupIndex: 26,
    kanji: '認める',
    reading: 'みとめる',
    meaning: '인정하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '間違いを認める。', t: '실수를 인정하다.' }
  },
  {
    id: 'n3-513',
    category: 'vocabulary',
    groupIndex: 26,
    kanji: '誓う',
    reading: 'ちかう',
    meaning: '맹세하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '愛を誓う。', t: '사랑을 맹세하다.' }
  },
  {
    id: 'n3-514',
    category: 'vocabulary',
    groupIndex: 26,
    kanji: '断言する',
    reading: 'だんげんする',
    meaning: '단언하다',
    partOfSpeech: '동사(3그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '絶対に成功すると断言する。', t: '절대로 성공할 것이라고 단언하다.' }
  }
];

const g26_adjectives: VocabItem[] = [
  {
    id: 'n3-515',
    category: 'vocabulary',
    groupIndex: 26,
    kanji: '確実',
    reading: 'かくじつ',
    meaning: '확실함',
    partOfSpeech: '형용사(な)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '確実な情報。', t: '확실한 정보.' }
  },
  {
    id: 'n3-516',
    category: 'vocabulary',
    groupIndex: 26,
    kanji: '明白',
    reading: 'めいはく',
    meaning: '명백함',
    partOfSpeech: '형용사(な)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '明白な事実。', t: '명백한 사실.' }
  },
  {
    id: 'n3-517',
    category: 'vocabulary',
    groupIndex: 26,
    kanji: '寛容',
    reading: 'かんよう',
    meaning: '관용적임/너그러움',
    partOfSpeech: '형용사(な)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '失敗に寛容な社会。', t: '실패에 너그러운 사회.' }
  }
];

const g26_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-518',
    category: 'vocabulary',
    groupIndex: 26,
    kanji: '敢えて',
    reading: 'あえて',
    meaning: '감히/굳이',
    partOfSpeech: '부사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '敢えて反対意見を言う。', t: '굳이 반대 의견을 말하다.' }
  },
  {
    id: 'n3-519',
    category: 'vocabulary',
    groupIndex: 26,
    kanji: 'せっかく',
    reading: 'せっかく',
    meaning: '어렵사리/모처럼',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'せっかくの休日。', t: '모처럼의 휴일.' }
  },
  {
    id: 'n3-520',
    category: 'vocabulary',
    groupIndex: 26,
    kanji: '果たして',
    reading: 'はたして',
    meaning: '과연',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '果たして成功するだろうか。', t: '과연 성공할 수 있을까.' }
  }
];

// #region [GROUP 27] - ID n3-521 ~ n3-540

const g27_nouns: VocabItem[] = [
  {
    id: 'n3-521',
    category: 'vocabulary',
    groupIndex: 27,
    kanji: '管理',
    reading: 'かんり',
    meaning: '관리',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '健康を管理する。', t: '건강을 관리하다.' }
  },
  {
    id: 'n3-522',
    category: 'vocabulary',
    groupIndex: 27,
    kanji: '処理',
    reading: 'しょり',
    meaning: '처리',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '事務を処理する।', t: '사무를 처리하다.' }
  },
  {
    id: 'n3-523',
    category: 'vocabulary',
    groupIndex: 27,
    kanji: '修理',
    reading: 'しゅうり',
    meaning: '수리',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '時計を修理に出す。', t: '시계를 수리 맡기다.' }
  },
  {
    id: 'n3-524',
    category: 'vocabulary',
    groupIndex: 27,
    kanji: '理論',
    reading: 'りろん',
    meaning: '이론',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '新しい理論を唱える。', t: '새로운 이론을 주장하다.' }
  },
  {
    id: 'n3-525',
    category: 'vocabulary',
    groupIndex: 27,
    kanji: '理由',
    reading: 'りゆう',
    meaning: '이유',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '遅れた理由を説明する。', t: '늦은 이유를 설명하다.' }
  },
  {
    id: 'n3-526',
    category: 'vocabulary',
    groupIndex: 27,
    kanji: '理想',
    reading: 'りそう',
    meaning: '이상',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '理想を追求する。', t: '이상을 추구하다.' }
  },
  {
    id: 'n3-527',
    category: 'vocabulary',
    groupIndex: 27,
    kanji: '理解',
    reading: 'りかい',
    meaning: '이해',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '内容を正しく理解する。', t: '내용을 올바르게 이해하다.' }
  },
  {
    id: 'n3-528',
    category: 'vocabulary',
    groupIndex: 27,
    kanji: '合理的',
    reading: 'ごうりてき',
    meaning: '합리적',
    partOfSpeech: '명사(형용동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '合理的な考え方。', t: '합리적인 사고방식.' }
  }
];

const g27_verbs: VocabItem[] = [
  {
    id: 'n3-529',
    category: 'vocabulary',
    groupIndex: 27,
    kanji: '導く',
    reading: 'みちびく',
    meaning: '이끌다/인도하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '成功へ導く。', t: '성공으로 이끌다.' }
  },
  {
    id: 'n3-530',
    category: 'vocabulary',
    groupIndex: 27,
    kanji: '治める',
    reading: 'おさめる',
    meaning: '다스리다/진정시키다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '国を治める。', t: '나라를 다스리다.' }
  },
  {
    id: 'n3-531',
    category: 'vocabulary',
    groupIndex: 27,
    kanji: '整う',
    reading: 'ととのう',
    meaning: '정돈되다/준비되다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '準備が整う。', t: '준비가 갖춰지다.' }
  },
  {
    id: 'n3-532',
    category: 'vocabulary',
    groupIndex: 27,
    kanji: '整える',
    reading: 'ととのえる',
    meaning: '정돈하다/조정하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '服装を整える。', t: '복장을 정돈하다.' }
  },
  {
    id: 'n3-533',
    category: 'vocabulary',
    groupIndex: 27,
    kanji: '備える',
    reading: 'そなえる',
    meaning: '대비하다/갖추다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '災害に備える。', t: '재해에 대비하다.' }
  },
  {
    id: 'n3-534',
    category: 'vocabulary',
    groupIndex: 27,
    kanji: '蓄える',
    reading: 'たくわえる',
    meaning: '저장하다/기르다(수염)',
    partOfSpeech: '동사(2그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '知識を蓄える。', t: '지식을 쌓다(저장하다).' }
  }
];

const g27_adjectives: VocabItem[] = [
  {
    id: 'n3-535',
    category: 'vocabulary',
    groupIndex: 27,
    kanji: '理屈',
    reading: 'りくつ',
    meaning: '도리/이론/핑계',
    partOfSpeech: '명사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '理屈をこねる。', t: '궤변을 늘어놓다(억지 이론을 펴다).' }
  },
  {
    id: 'n3-536',
    category: 'vocabulary',
    groupIndex: 27,
    kanji: '論理的',
    reading: 'ろんりてき',
    meaning: '논리적',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '論理的に説明する。', t: '논리적으로 설명하다.' }
  },
  {
    id: 'n3-537',
    category: 'vocabulary',
    groupIndex: 27,
    kanji: '無理',
    reading: 'むり',
    meaning: '무리/불가능함',
    partOfSpeech: '형용사(な)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '無理な計画。', t: '무리한 계획.' }
  }
];

const g27_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-538',
    category: 'vocabulary',
    groupIndex: 27,
    kanji: '正に',
    reading: 'まさに',
    meaning: '정말로/바야흐로',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '正にその通りだ。', t: '정말이지 그대로다(맞다).' }
  },
  {
    id: 'n3-539',
    category: 'vocabulary',
    groupIndex: 27,
    kanji: '一応',
    reading: 'いちおう',
    meaning: '일단/우선',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '一応、確認しておく。', t: '일단 확인해 두다.' }
  },
  {
    id: 'n3-540',
    category: 'vocabulary',
    groupIndex: 27,
    kanji: '万一',
    reading: 'まんいち',
    meaning: '만일',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '万一に備える。', t: '만일에 대비하다.' }
  }
];

// #region [GROUP 28] - ID n3-541 ~ n3-560

const g28_nouns: VocabItem[] = [
  {
    id: 'n3-541',
    category: 'vocabulary',
    groupIndex: 28,
    kanji: '幸福',
    reading: 'こうふく',
    meaning: '행복',
    partOfSpeech: '명사/형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '幸福な家庭を築く。', t: '행복한 가정을 일구다.' }
  },
  {
    id: 'n3-542',
    category: 'vocabulary',
    groupIndex: 28,
    kanji: '幸運',
    reading: 'こううん',
    meaning: '행운',
    partOfSpeech: '명사/형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '幸運なことに雨が止んだ。', t: '다행히도 비가 그쳤다.' }
  },
  {
    id: 'n3-543',
    category: 'vocabulary',
    groupIndex: 28,
    kanji: '不幸',
    reading: 'ふこう',
    meaning: '불행',
    partOfSpeech: '명사/형용사(な)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '不幸な事故が起こる。', t: '불행한 사고가 일어나다.' }
  },
  {
    id: 'n3-544',
    category: 'vocabulary',
    groupIndex: 28,
    kanji: '苦労',
    reading: 'くろう',
    meaning: '고생/수고',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '生活のために苦労する。', t: '생활을 위해 고생하다.' }
  },
  {
    id: 'n3-545',
    category: 'vocabulary',
    groupIndex: 28,
    kanji: '感謝',
    reading: 'かんしゃ',
    meaning: '감사',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '感謝の言葉を述べる。', t: '감사의 말을 전하다.' }
  },
  {
    id: 'n3-546',
    category: 'vocabulary',
    groupIndex: 28,
    kanji: '感激',
    reading: 'かんげき',
    meaning: '감격',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '心のこもった贈り物に感激する。', t: '정성 어린 선물에 감격하다.' }
  },
  {
    id: 'n3-547',
    category: 'vocabulary',
    groupIndex: 28,
    kanji: '感情',
    reading: 'かんじょう',
    meaning: '감정',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '感情を表に出さない。', t: '감정을 겉으로 드러내지 않는다.' }
  },
  {
    id: 'n3-548',
    category: 'vocabulary',
    groupIndex: 28,
    kanji: '感動',
    reading: 'かんどう',
    meaning: '감동',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '美しい景色に感動する。', t: '아름다운 경치에 감동하다.' }
  }
];

const g28_verbs: VocabItem[] = [
  {
    id: 'n3-549',
    category: 'vocabulary',
    groupIndex: 28,
    kanji: '喜ぶ',
    reading: 'よろこぶ',
    meaning: '기뻐하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '合格を家族全員で喜ぶ。', t: '합격을 온 가족이 기뻐하다.' }
  },
  {
    id: 'n3-550',
    category: 'vocabulary',
    groupIndex: 28,
    kanji: '怒る',
    reading: 'おこる',
    meaning: '화내다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '嘘をついて先生に怒られた。', t: '거짓말을 해서 선생님께 혼났다.' }
  },
  {
    id: 'n3-551',
    category: 'vocabulary',
    groupIndex: 28,
    kanji: '悲しむ',
    reading: 'かなしむ',
    meaning: '슬퍼하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '別れを悲しむ。', t: '이별을 슬퍼하다.' }
  },
  {
    id: 'n3-552',
    category: 'vocabulary',
    groupIndex: 28,
    kanji: '楽しむ',
    reading: 'たのしむ',
    meaning: '즐기다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '週末のキャンプを楽しむ。', t: '주말 캠핑을 즐기다.' }
  },
  {
    id: 'n3-553',
    category: 'vocabulary',
    groupIndex: 28,
    kanji: '恨む',
    reading: 'うらむ',
    meaning: '원망하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '自分を恨んでも始まらない。', t: '자신을 원망해 보아야 소용없다.' }
  },
  {
    id: 'n3-554',
    category: 'vocabulary',
    groupIndex: 28,
    kanji: '敬う',
    reading: 'うやまう',
    meaning: '공경하다/존경하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '先祖を敬う。', t: '조상을 공경하다.' }
  }
];

const g28_adjectives: VocabItem[] = [
  {
    id: 'n3-555',
    category: 'vocabulary',
    groupIndex: 28,
    kanji: '羨ましい',
    reading: 'うらやましい',
    meaning: '부럽다',
    partOfSpeech: '형용사(い)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '彼の自由な生活が羨ましい。', t: '그의 자유로운 생활이 부럽다.' }
  },
  {
    id: 'n3-556',
    category: 'vocabulary',
    groupIndex: 28,
    kanji: '憎い',
    reading: 'にくい',
    meaning: '밉다/괘씸하다',
    partOfSpeech: '형용사(い)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '犯人が憎くてたまらない。', t: '범인이 미워 죽겠다.' }
  },
  {
    id: 'n3-557',
    category: 'vocabulary',
    groupIndex: 28,
    kanji: '惜しい',
    reading: 'おしい',
    meaning: '아깝다',
    partOfSpeech: '형용사(い)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'あと数秒の差で惜しくも負けた。', t: '단 몇 초 차이로 아깝게 졌다.' }
  }
];

const g28_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-558',
    category: 'vocabulary',
    groupIndex: 28,
    kanji: 'つい',
    reading: 'つい',
    meaning: '그만/무심코',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'つい夜更かしをしてしまった。', t: '그만 밤을 새우고 말았다.' }
  },
  {
    id: 'n3-559',
    category: 'vocabulary',
    groupIndex: 28,
    kanji: 'うっかり',
    reading: 'うっかり',
    meaning: '깜빡/부주의하게',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'うっかり傘を忘れてきた。', t: '깜빡하고 우산을 잊고 왔다.' }
  },
  {
    id: 'n3-560',
    category: 'vocabulary',
    groupIndex: 28,
    kanji: 'がっかり',
    reading: 'がっかり',
    meaning: '실망하는 모양/낙담',
    partOfSpeech: '부사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '期待していたのにがっかりした。', t: '기대했는데 실망했다.' }
  }
];

// #region [GROUP 29] - ID n3-561 ~ n3-580

const g29_nouns: VocabItem[] = [
  {
    id: 'n3-561',
    category: 'vocabulary',
    groupIndex: 29,
    kanji: '知識',
    reading: 'ちしき',
    meaning: '지식',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '幅広い知識を身につける。', t: '폭넓은 지식을 갖추다.' }
  },
  {
    id: 'n3-562',
    category: 'vocabulary',
    groupIndex: 29,
    kanji: '常識',
    reading: 'じょうしき',
    meaning: '상식',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'それは社会人の常識だ。', t: '그것은 사회인의 상식이다.' }
  },
  {
    id: 'n3-563',
    category: 'vocabulary',
    groupIndex: 29,
    kanji: '意識',
    reading: 'いしき',
    meaning: '의식',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'ようやく意識が戻った。', t: '겨우 의식이 돌아왔다.' }
  },
  {
    id: 'n3-564',
    category: 'vocabulary',
    groupIndex: 29,
    kanji: '能力',
    reading: 'のうりょく',
    meaning: '능력',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '自分の能力を試したい。', t: '자신의 능력을 시험하고 싶다.' }
  },
  {
    id: 'n3-565',
    category: 'vocabulary',
    groupIndex: 29,
    kanji: '実力',
    reading: 'じつりょく',
    meaning: '실력',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '実力を十分に発揮する。', t: '실력을 충분히 발휘하다.' }
  },
  {
    id: 'n3-566',
    category: 'vocabulary',
    groupIndex: 29,
    kanji: '才能',
    reading: 'さいのう',
    meaning: '재능',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '彼女は歌の才能がある。', t: '그녀는 노래 재능이 있다.' }
  },
  {
    id: 'n3-567',
    category: 'vocabulary',
    groupIndex: 29,
    kanji: '専門',
    reading: 'せんもん',
    meaning: '전문',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '大学での専門は経済学だ。', t: '대학에서의 전공(전문)은 경제학이다.' }
  },
  {
    id: 'n3-568',
    category: 'vocabulary',
    groupIndex: 29,
    kanji: '資格',
    reading: 'しかく',
    meaning: '자격',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '教員の資格を取る。', t: '교원 자격을 따다.' }
  }
];

const g29_verbs: VocabItem[] = [
  {
    id: 'n3-569',
    category: 'vocabulary',
    groupIndex: 29,
    kanji: '覚える',
    reading: 'おぼえる',
    meaning: '외우다/기억하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '新しい単語を覚える。', t: '새로운 단어를 외우다.' }
  },
  {
    id: 'n3-570',
    category: 'vocabulary',
    groupIndex: 29,
    kanji: '忘れる',
    reading: 'わすれる',
    meaning: '잊다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '宿題を忘れてしまった。', t: '숙제를 잊어버렸다.' }
  },
  {
    id: 'n3-571',
    category: 'vocabulary',
    groupIndex: 29,
    kanji: '学ぶ',
    reading: 'まなぶ',
    meaning: '배우다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '異文化から多くを学ぶ。', t: '이문화로부터 많은 것을 배우다.' }
  },
  {
    id: 'n3-572',
    category: 'vocabulary',
    groupIndex: 29,
    kanji: '習う',
    reading: 'ならう',
    meaning: '익히다/배우다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'ピアノを習っている。', t: '피아노를 배우고 있다.' }
  },
  {
    id: 'n3-573',
    category: 'vocabulary',
    groupIndex: 29,
    kanji: '教わる',
    reading: 'おそわる',
    meaning: '가르침을 받다/배우다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '先輩からコツを教わる。', t: '선배에게 요령을 배우다.' }
  },
  {
    id: 'n3-574',
    category: 'vocabulary',
    groupIndex: 29,
    kanji: '唱える',
    reading: 'となえる',
    meaning: '주장하다/외치다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '異議を唱える。', t: '이의를 제기(주장)하다.' }
  }
];

const g29_adjectives: VocabItem[] = [
  {
    id: 'n3-575',
    category: 'vocabulary',
    groupIndex: 29,
    kanji: '賢い',
    reading: 'かしこい',
    meaning: '현명하다/영리하다',
    partOfSpeech: '형용사(い)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '彼は非常に賢い子だ。', t: '그는 매우 영리한 아이다.' }
  },
  {
    id: 'n3-576',
    category: 'vocabulary',
    groupIndex: 29,
    kanji: '鋭い',
    reading: 'するどい',
    meaning: '날카롭다/예리하다',
    partOfSpeech: '형용사(い)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '鋭い質問に驚く。', t: '날카로운 질문에 놀라다.' }
  },
  {
    id: 'n3-577',
    category: 'vocabulary',
    groupIndex: 29,
    kanji: '鈍い',
    reading: 'にぶい',
    meaning: '둔하다/무디다',
    partOfSpeech: '형용사(い)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '痛みに鈍い。', t: '통증에 둔하다.' }
  }
];

const g29_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-578',
    category: 'vocabulary',
    groupIndex: 29,
    kanji: 'しっかり',
    reading: 'しっかり',
    meaning: '확실히/단단히',
    partOfSpeech: '부사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'しっかり掴まっていて。', t: '꽉 붙잡고 있어.' }
  },
  {
    id: 'n3-579',
    category: 'vocabulary',
    groupIndex: 29,
    kanji: 'はっきり',
    reading: 'はっきり',
    meaning: '똑똑히/명확히',
    partOfSpeech: '부사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '理由をはっきり言う。', t: '이유를 명확히 말하다.' }
  },
  {
    id: 'n3-580',
    category: 'vocabulary',
    groupIndex: 29,
    kanji: 'すっかり',
    reading: 'すっかり',
    meaning: '완전히/전부',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '約束をすっかり忘れていた。', t: '약속을 완전히 잊고 있었다.' }
  }
];

// #region [GROUP 30] - ID n3-581 ~ n3-600

const g30_nouns: VocabItem[] = [
  {
    id: 'n3-581',
    category: 'vocabulary',
    groupIndex: 30,
    kanji: '経済',
    reading: 'けいざい',
    meaning: '경제',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '日本経済の動向を調べる。', t: '일본 경제의 동향을 조사하다.' }
  },
  {
    id: 'n3-582',
    category: 'vocabulary',
    groupIndex: 30,
    kanji: '景気',
    reading: 'けいき',
    meaning: '경기',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '景気が良くなることを願う。', t: '경기가 좋아지기를 바라다.' }
  },
  {
    id: 'n3-583',
    category: 'vocabulary',
    groupIndex: 30,
    kanji: '物価',
    reading: 'ぶっか',
    meaning: '물가',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '最近、物価が上がっている。', t: '최근 물가가 오르고 있다.' }
  },
  {
    id: 'n3-584',
    category: 'vocabulary',
    groupIndex: 30,
    kanji: '借金',
    reading: 'しゃっきん',
    meaning: '빚',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '借金を返す。', t: '빚을 갚다.' }
  },
  {
    id: 'n3-585',
    category: 'vocabulary',
    groupIndex: 30,
    kanji: '貯金',
    reading: 'ちょきん',
    meaning: '저금',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '銀行に貯金する。', t: '은행에 저금하다.' }
  },
  {
    id: 'n3-586',
    category: 'vocabulary',
    groupIndex: 30,
    kanji: '勘定',
    reading: 'かんじょう',
    meaning: '계산/지불',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '勘定を済ませる。', t: '계산을 마치다.' }
  },
  {
    id: 'n3-587',
    category: 'vocabulary',
    groupIndex: 30,
    kanji: '税金',
    reading: 'ぜいきん',
    meaning: '세금',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '税金を払うのは義務だ。', t: '세금을 내는 것은 의무다.' }
  },
  {
    id: 'n3-588',
    category: 'vocabulary',
    groupIndex: 30,
    kanji: '利益',
    reading: 'りえき',
    meaning: '이익',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '会社が大きな利益を出す。', t: '회사가 큰 이익을 내다.' }
  }
];

const g30_verbs: VocabItem[] = [
  {
    id: 'n3-589',
    category: 'vocabulary',
    groupIndex: 30,
    kanji: '稼ぐ',
    reading: 'かせぐ',
    meaning: '돈을 벌다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'アルバイトでお金を稼ぐ。', t: '아르바이트로 돈을 벌다.' }
  },
  {
    id: 'n3-590',
    category: 'vocabulary',
    groupIndex: 30,
    kanji: '儲かる',
    reading: 'もうかる',
    meaning: '이익이 나다/벌이가 되다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'その商売は儲かっていますか。', t: '그 장사는 이익이 좀 나고 있습니까?' }
  },
  {
    id: 'n3-591',
    category: 'vocabulary',
    groupIndex: 30,
    kanji: '支払う',
    reading: 'しはらう',
    meaning: '지불하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '料金をカードで支払う。', t: '요금을 카드로 지불하다.' }
  },
  {
    id: 'n3-592',
    category: 'vocabulary',
    groupIndex: 30,
    kanji: '納める',
    reading: 'おさめる',
    meaning: '납부하다/거두다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '税金を納める。', t: '세금을 납부하다.' }
  },
  {
    id: 'n3-593',
    category: 'vocabulary',
    groupIndex: 30,
    kanji: '控える',
    reading: 'ひかえる',
    meaning: '삼가다/기다리다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '甘いものを控える。', t: '단것을 삼가다.' }
  },
  {
    id: 'n3-594',
    category: 'vocabulary',
    groupIndex: 30,
    kanji: '及ぶ',
    reading: 'およぶ',
    meaning: '미치다/달하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '被害が全国に及ぶ。', t: '피해가 전국에 미치다.' }
  }
];

const g30_adjectives: VocabItem[] = [
  {
    id: 'n3-595',
    category: 'vocabulary',
    groupIndex: 30,
    kanji: '貧しい',
    reading: 'まずしい',
    meaning: '가난하다/빈약하다',
    partOfSpeech: '형용사(い)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '貧しい暮らしに耐える。', t: '가난한 생활을 견디다.' }
  },
  {
    id: 'n3-596',
    category: 'vocabulary',
    groupIndex: 30,
    kanji: '豊か',
    reading: 'ゆたか',
    meaning: '풍족함/풍부하다',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '豊かな自然に囲まれる。', t: '풍부한 자연에 둘러싸이다.' }
  },
  {
    id: 'n3-597',
    category: 'vocabulary',
    groupIndex: 30,
    kanji: '贅沢',
    reading: 'ぜいたく',
    meaning: '사치스러움',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '贅沢な食事をする。', t: '사치스러운 식사를 하다.' }
  }
];

const g30_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-598',
    category: 'vocabulary',
    groupIndex: 30,
    kanji: '大分',
    reading: 'だいぶ',
    meaning: '꽤/상당히',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '風邪がだいぶ良くなった。', t: '감기가 꽤 좋아졌다.' }
  },
  {
    id: 'n3-599',
    category: 'vocabulary',
    groupIndex: 30,
    kanji: 'かなり',
    reading: 'かなり',
    meaning: '상당히/제법',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'かなり難しい問題だ。', t: '상당히 어려운 문제다.' }
  },
  {
    id: 'n3-600',
    category: 'vocabulary',
    groupIndex: 30,
    kanji: '相当',
    reading: 'そうとう',
    meaning: '상당함/상당히',
    partOfSpeech: '부사/형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '相当な努力が必要だ。', t: '상당한 노력이 필요하다.' }
  }
];

// 통합용 변수 선언
// #region [GROUP 31] - ID n3-601 ~ n3-620

const g31_nouns: VocabItem[] = [
  {
    id: 'n3-601',
    category: 'vocabulary',
    groupIndex: 31,
    kanji: '感謝',
    reading: 'かんしゃ',
    meaning: '감사',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '心から感謝する。', t: '진심으로 감사하다.' }
  },
  {
    id: 'n3-602',
    category: 'vocabulary',
    groupIndex: 31,
    kanji: '謝絶',
    reading: 'しゃぜつ',
    meaning: '사절',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '面会を謝絶する。', t: '면회를 사절하다.' }
  },
  {
    id: 'n3-603',
    category: 'vocabulary',
    groupIndex: 31,
    kanji: '月謝',
    reading: 'げっしゃ',
    meaning: '월사(수강료)',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '習い事の月謝を払う。', t: '배우는 일의 월사를 내다.' }
  },
  {
    id: 'n3-604',
    category: 'vocabulary',
    groupIndex: 31,
    kanji: '謝罪',
    reading: 'しゃざい',
    meaning: '사죄',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '公の場で謝罪する。', t: '공적인 자리에서 사죄하다.' }
  },
  {
    id: 'n3-605',
    category: 'vocabulary',
    groupIndex: 31,
    kanji: '無罪',
    reading: 'むざい',
    meaning: '무죄',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '無罪を主張する。', t: '무죄를 주장하다.' }
  },
  {
    id: 'n3-606',
    category: 'vocabulary',
    groupIndex: 31,
    kanji: '犯罪',
    reading: 'はんざい',
    meaning: '범죄',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '犯罪を防ぐ。', t: '범죄를 막다.' }
  },
  {
    id: 'n3-607',
    category: 'vocabulary',
    groupIndex: 31,
    kanji: '有罪',
    reading: 'ゆうざい',
    meaning: '유죄',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '有죄 판결을 내리다.', t: '유죄 판결을 내리다.' }
  },
  {
    id: 'n3-608',
    category: 'vocabulary',
    groupIndex: 31,
    kanji: '罪',
    reading: 'つみ',
    meaning: '죄',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '罪を償う。', t: '죄를 갚다(속죄하다).' }
  }
];

const g31_verbs: VocabItem[] = [
  {
    id: 'n3-609',
    category: 'vocabulary',
    groupIndex: 31,
    kanji: '謝る',
    reading: 'あやまる',
    meaning: '사과하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '素直に謝る。', t: '솔직하게 사과하다.' }
  },
  {
    id: 'n3-610',
    category: 'vocabulary',
    groupIndex: 31,
    kanji: '拝む',
    reading: 'おがむ',
    meaning: '절하다/빌다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '初日の出を拝む।', t: '첫 해돋이를 보고 빌다.' }
  },
  {
    id: 'n3-611',
    category: 'vocabulary',
    groupIndex: 31,
    kanji: '祈る',
    reading: 'いのる',
    meaning: '기도하다/빌다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '合格を祈る。', t: '합격을 빌다.' }
  },
  {
    id: 'n3-612',
    category: 'vocabulary',
    groupIndex: 31,
    kanji: '祝う',
    reading: 'いわう',
    meaning: '축하하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '誕生日を祝う。', t: '생일을 축하하다.' }
  },
  {
    id: 'n3-613',
    category: 'vocabulary',
    groupIndex: 31,
    kanji: '敬う',
    reading: 'うやまう',
    meaning: '공경하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'お年寄りを敬う。', t: '어르신을 공경하다.' }
  },
  {
    id: 'n3-614',
    category: 'vocabulary',
    groupIndex: 31,
    kanji: '悔やむ',
    reading: 'くやむ',
    meaning: '후회하다/아쉬워하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '過去を悔やんでも仕方ない。', t: '과거를 후회해도 소용없다.' }
  }
];

const g31_adjectives: VocabItem[] = [
  {
    id: 'n3-615',
    category: 'vocabulary',
    groupIndex: 31,
    kanji: '悔しい',
    reading: 'くやしい',
    meaning: '분하다/억울하다',
    partOfSpeech: '형용사(い)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '試合に負けて悔しい。', t: '시합에 져서 분하다.' }
  },
  {
    id: 'n3-616',
    category: 'vocabulary',
    groupIndex: 31,
    kanji: '申し訳ない',
    reading: 'もうしわけない',
    meaning: '미안하다/죄송하다',
    partOfSpeech: '형용사(い)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '遅れて申し訳ない。', t: '늦어서 죄송하다.' }
  },
  {
    id: 'n3-617',
    category: 'vocabulary',
    groupIndex: 31,
    kanji: '残酷',
    reading: 'ざんこく',
    meaning: '잔혹함',
    partOfSpeech: '형용사(な)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '残酷な運命。', t: '잔혹한 운명.' }
  }
];

const g31_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-618',
    category: 'vocabulary',
    groupIndex: 31,
    kanji: 'わざわざ',
    reading: 'わざわざ',
    meaning: '일부러/일러서',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'わざわざ来てくれてありがとう。', t: '일부러 와 줘서 고마워.' }
  },
  {
    id: 'n3-619',
    category: 'vocabulary',
    groupIndex: 31,
    kanji: '折角',
    reading: 'せっかく',
    meaning: '모처럼/어렵사리',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '折角のチャンスを逃す。', t: '모처럼의 기회를 놓치다.' }
  },
  {
    id: 'n3-620',
    category: 'vocabulary',
    groupIndex: 31,
    kanji: '到底',
    reading: 'とうてい',
    meaning: '도저히',
    partOfSpeech: '부사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '到底間に合わない。', t: '도저히 맞출 수 없다(시간 내에).' }
  }
];

// #region [GROUP 32] - ID n3-621 ~ n3-640

const g32_nouns: VocabItem[] = [
  {
    id: 'n3-621',
    category: 'vocabulary',
    groupIndex: 32,
    kanji: '準備',
    reading: 'じゅんび',
    meaning: '준비',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '旅行の準備をする。', t: '여행 준비를 하다.' }
  },
  {
    id: 'n3-622',
    category: 'vocabulary',
    groupIndex: 32,
    kanji: '基準',
    reading: 'きじゅん',
    meaning: '기준',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '選考の基準を設ける。', t: '전형 기준을 세우다.' }
  },
  {
    id: 'n3-623',
    category: 'vocabulary',
    groupIndex: 32,
    kanji: '備品',
    reading: 'びひん',
    meaning: '비품',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'オフィスの備品を揃える。', t: '사무실 비품을 갖추다.' }
  },
  {
    id: 'n3-624',
    category: 'vocabulary',
    groupIndex: 32,
    kanji: '設備',
    reading: 'せつび',
    meaning: '설비',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '最新の設備を整える。', t: '최신 설비를 갖추다.' }
  },
  {
    id: 'n3-625',
    category: 'vocabulary',
    groupIndex: 32,
    kanji: '標準',
    reading: 'ひょうじゅん',
    meaning: '표준',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '標準的なサイズ。', t: '표준적인 사이즈.' }
  },
  {
    id: 'n3-626',
    category: 'vocabulary',
    groupIndex: 32,
    kanji: '予備',
    reading: 'よび',
    meaning: '예비',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '予備の電池を買っておく。', t: '예비 배터리를 사 두다.' }
  },
  {
    id: 'n3-627',
    category: 'vocabulary',
    groupIndex: 32,
    kanji: '水準',
    reading: 'すいじゅん',
    meaning: '수준',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '生活水準が向上する。', t: '생활 수준이 향상되다.' }
  },
  {
    id: 'n3-628',
    category: 'vocabulary',
    groupIndex: 32,
    kanji: '防備',
    reading: 'ぼうび',
    meaning: '방비',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '防備を固める。', t: '방비를 굳히다.' }
  }
];

const g32_verbs: VocabItem[] = [
  {
    id: 'n3-629',
    category: 'vocabulary',
    groupIndex: 32,
    kanji: '備える',
    reading: 'そなえる',
    meaning: '준비하다/갖추다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '万一の事態に備える。', t: '만일의 사태에 대비하다.' }
  },
  {
    id: 'n3-630',
    category: 'vocabulary',
    groupIndex: 32,
    kanji: '備わる',
    reading: 'そなわる',
    meaning: '갖춰지다/비치되다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '才能が備わっている。', t: '재능이 갖춰져 있다.' }
  },
  {
    id: 'n3-631',
    category: 'vocabulary',
    groupIndex: 32,
    kanji: '準ずる',
    reading: 'じゅんずる',
    meaning: '준하다',
    partOfSpeech: '동사(3그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '規則に準ずる。', t: '규칙에 준하다.' }
  },
  {
    id: 'n3-632',
    category: 'vocabulary',
    groupIndex: 32,
    kanji: '準じる',
    reading: 'じゅんじる',
    meaning: '준하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '前例に準じる。', t: '전례에 준하다.' }
  },
  {
    id: 'n3-633',
    category: 'vocabulary',
    groupIndex: 32,
    kanji: '整う',
    reading: 'ととのう',
    meaning: '정돈되다/준비되다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '体制が整う。', t: '체제가 갖춰지다.' }
  },
  {
    id: 'n3-634',
    category: 'vocabulary',
    groupIndex: 32,
    kanji: '構える',
    reading: 'かまえる',
    meaning: '자세를 잡다/마련하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '大きな店を構える。', t: '큰 가게를 마련하다(차리다).' }
  }
];

const g32_adjectives: VocabItem[] = [
  {
    id: 'n3-635',
    category: 'vocabulary',
    groupIndex: 32,
    kanji: '準備万端',
    reading: 'じゅんびばんたん',
    meaning: '만반의 준비',
    partOfSpeech: '명사(な)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '準備万端整える。', t: '만반의 준비를 갖추다.' }
  },
  {
    id: 'n3-636',
    category: 'vocabulary',
    groupIndex: 32,
    kanji: '不備',
    reading: 'ふび',
    meaning: '불충분함/미비함',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '書類に不備がある。', t: '서류에 미비한 점이 있다.' }
  },
  {
    id: 'n3-637',
    category: 'vocabulary',
    groupIndex: 32,
    kanji: '緻密',
    reading: 'ちみつ',
    meaning: '치밀함',
    partOfSpeech: '형용사(な)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '緻密な計画を立てる。', t: '치밀한 계획을 세우다.' }
  }
];

const g32_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-638',
    category: 'vocabulary',
    groupIndex: 32,
    kanji: '前もって',
    reading: 'まえもって',
    meaning: '미리/사전에',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '前もって連絡する。', t: '미리 연락하다.' }
  },
  {
    id: 'n3-639',
    category: 'vocabulary',
    groupIndex: 32,
    kanji: '予め',
    reading: 'あらかじめ',
    meaning: '미리/사전에',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '予めご了承ください。', t: '미리 양해 바랍니다.' }
  },
  {
    id: 'n3-640',
    category: 'vocabulary',
    groupIndex: 32,
    kanji: '徐々に',
    reading: 'じょじょに',
    meaning: '서서히/조금씩',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '徐々に回復に向かう。', t: '서서히 회복세로 돌아서다.' }
  }
];

// #region [GROUP 33] - ID n3-641 ~ n3-660

const g33_nouns: VocabItem[] = [
  {
    id: 'n3-641',
    category: 'vocabulary',
    groupIndex: 33,
    kanji: '報告',
    reading: 'ほうこく',
    meaning: '보고',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '結果を上司に報告する。', t: '결과를 상사에게 보고하다.' }
  },
  {
    id: 'n3-642',
    category: 'vocabulary',
    groupIndex: 33,
    kanji: '予報',
    reading: 'よほう',
    meaning: '예보',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '天気予報をチェックする。', t: '일기 예보를 확인하다.' }
  },
  {
    id: 'n3-643',
    category: 'vocabulary',
    groupIndex: 33,
    kanji: '情報',
    reading: 'じょうほう',
    meaning: '정보',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '情報を収集する。', t: '정보를 수집하다.' }
  },
  {
    id: 'n3-644',
    category: 'vocabulary',
    groupIndex: 33,
    kanji: '広報',
    reading: 'こうほう',
    meaning: '홍보/광보',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '広報誌を発行する。', t: '홍보지를 발행하다.' }
  },
  {
    id: 'n3-645',
    category: 'vocabulary',
    groupIndex: 33,
    kanji: '広告',
    reading: 'こうこく',
    meaning: '광고',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '広告を出す。', t: '광고를 내다.' }
  },
  {
    id: 'n3-646',
    category: 'vocabulary',
    groupIndex: 33,
    kanji: '告白',
    reading: 'こくはく',
    meaning: '고백',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '自分の罪を告白する。', t: '자신의 죄를 고백하다.' }
  },
  {
    id: 'n3-647',
    category: 'vocabulary',
    groupIndex: 33,
    kanji: '忠告',
    reading: 'ちゅうこく',
    meaning: '충고',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '友人の忠告に従う。', t: '친구의 충고에 따르다.' }
  },
  {
    id: 'n3-648',
    category: 'vocabulary',
    groupIndex: 33,
    kanji: '警告',
    reading: 'けいこく',
    meaning: '경고',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '警告を与える。', t: '경고를 주다.' }
  }
];

const g33_verbs: VocabItem[] = [
  {
    id: 'n3-649',
    category: 'vocabulary',
    groupIndex: 33,
    kanji: '報いる',
    reading: 'むくいる',
    meaning: '보답하다/갚다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '恩に報いる。', t: '은혜에 보답하다.' }
  },
  {
    id: 'n3-650',
    category: 'vocabulary',
    groupIndex: 33,
    kanji: '告げる',
    reading: 'つげる',
    meaning: '알리다/고하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '春の訪れを告げる。', t: '봄이 왔음을 알리다.' }
  },
  {
    id: 'n3-651',
    category: 'vocabulary',
    groupIndex: 33,
    kanji: '知らせる',
    reading: 'しらせる',
    meaning: '알리다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '結果をメールで知らせる。', t: '결과를 메일로 알리다.' }
  },
  {
    id: 'n3-652',
    category: 'vocabulary',
    groupIndex: 33,
    kanji: '伝わる',
    reading: 'つたわる',
    meaning: '전해지다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '噂が伝わる。', t: '소문이 전해지다.' }
  },
  {
    id: 'n3-653',
    category: 'vocabulary',
    groupIndex: 33,
    kanji: '伝える',
    reading: 'つたえる',
    meaning: '전하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '感謝の気持ちを伝える。', t: '감사한 마음을 전하다.' }
  },
  {
    id: 'n3-654',
    category: 'vocabulary',
    groupIndex: 33,
    kanji: '教わる',
    reading: 'おそわる',
    meaning: '가르침을 받다/배우다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '先生に教わる。', t: '선생님께 배우다.' }
  }
];

const g33_adjectives: VocabItem[] = [
  {
    id: 'n3-655',
    category: 'vocabulary',
    groupIndex: 33,
    kanji: '恐ろしい',
    reading: 'おそろしい',
    meaning: '무섭다/두렵다',
    partOfSpeech: '형용사(い)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '恐ろしい夢を見る。', t: '무서운 꿈을 꾸다.' }
  },
  {
    id: 'n3-656',
    category: 'vocabulary',
    groupIndex: 33,
    kanji: '詳しい',
    reading: 'くわしい',
    meaning: '상세하다/잘 알다',
    partOfSpeech: '형용사(い)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '事情を詳しく聞く。', t: '사정을 자세히 듣다.' }
  },
  {
    id: 'n3-657',
    category: 'vocabulary',
    groupIndex: 33,
    kanji: '不気味',
    reading: 'ぶきみ',
    meaning: '어쩐지 무서움/기괴함',
    partOfSpeech: '형용사(な)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '不気味な音が聞こえる。', t: '기분 나쁜(기괴한) 소리가 들린다.' }
  }
];

const g33_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-658',
    category: 'vocabulary',
    groupIndex: 33,
    kanji: '決して',
    reading: 'けっして',
    meaning: '결코/절대로',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '決して秘密を漏らさない。', t: '결코 비밀을 누설하지 않겠다.' }
  },
  {
    id: 'n3-659',
    category: 'vocabulary',
    groupIndex: 33,
    kanji: '直ちに',
    reading: 'ただちに',
    meaning: '즉시/당장',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '直ちに実行する。', t: '즉시 실행하다.' }
  },
  {
    id: 'n3-660',
    category: 'vocabulary',
    groupIndex: 33,
    kanji: '遂に',
    reading: 'ついに',
    meaning: '마침내/결국',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '遂に計画が成功した。', t: '마침내 계획이 성공했다.' }
  }
];

// #region [GROUP 34] - ID n3-661 ~ n3-680

const g34_nouns: VocabItem[] = [
  {
    id: 'n3-661',
    category: 'vocabulary',
    groupIndex: 34,
    kanji: '希望',
    reading: 'きぼう',
    meaning: '희망',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '将来の希望を語る。', t: '장래의 희망을 이야기하다.' }
  },
  {
    id: 'n3-662',
    category: 'vocabulary',
    groupIndex: 34,
    kanji: '望遠鏡',
    reading: 'ぼうえんきょう',
    meaning: '망원경',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '望遠鏡で星を見る。', t: '망원경으로 별을 보다.' }
  },
  {
    id: 'n3-663',
    category: 'vocabulary',
    groupIndex: 34,
    kanji: '失望',
    reading: 'しつぼう',
    meaning: '실망',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '結果に失望する。', t: '결과에 실망하다.' }
  },
  {
    id: 'n3-664',
    category: 'vocabulary',
    groupIndex: 34,
    kanji: '展望',
    reading: 'てんぼう',
    meaning: '전망',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '将来を展望する。', t: '장래를 전망하다.' }
  },
  {
    id: 'n3-665',
    category: 'vocabulary',
    groupIndex: 34,
    kanji: '欲望',
    reading: 'よくぼう',
    meaning: '욕망',
    partOfSpeech: '명사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '人間の果てしない欲望。', t: '인간의 끝없는 욕망.' }
  },
  {
    id: 'n3-666',
    category: 'vocabulary',
    groupIndex: 34,
    kanji: '本望',
    reading: 'ほんもう',
    meaning: '본의/숙원',
    partOfSpeech: '명사(형용동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '君の役に立てれば本望だ。', t: '너에게 도움이 된다면 바랄 나위 없다(본망이다).' }
  },
  {
    id: 'n3-667',
    category: 'vocabulary',
    groupIndex: 34,
    kanji: '要望',
    reading: 'ようぼう',
    meaning: '요망/요구',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '住民の要望に応える。', t: '주민의 요망에 부응하다.' }
  }
];

const g34_verbs: VocabItem[] = [
  {
    id: 'n3-668',
    category: 'vocabulary',
    groupIndex: 34,
    kanji: '望む',
    reading: 'のぞむ',
    meaning: '바라다/소망하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '平和な世界を望む。', t: '평화로운 세상을 바라다.' }
  },
  {
    id: 'n3-669',
    category: 'vocabulary',
    groupIndex: 34,
    kanji: '臨む',
    reading: 'のぞむ',
    meaning: '임하다/면하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '試験に臨む。', t: '시험에 임하다.' }
  },
  {
    id: 'n3-670',
    category: 'vocabulary',
    groupIndex: 34,
    kanji: '願う',
    reading: 'ねがう',
    meaning: '원하다/바라다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '健やかな成長を願う。', t: '건강한 성장을 바라다.' }
  },
  {
    id: 'n3-671',
    category: 'vocabulary',
    groupIndex: 34,
    kanji: '祈る',
    reading: 'いのる',
    meaning: '기도하다/빌다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '無事を祈る。', t: '무사하기를 빌다.' }
  },
  {
    id: 'n3-672',
    category: 'vocabulary',
    groupIndex: 34,
    kanji: '求める',
    reading: 'もとめる',
    meaning: '구하다/요구하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '助けを求める。', t: '도움을 구하다.' }
  },
  {
    id: 'n3-673',
    category: 'vocabulary',
    groupIndex: 34,
    kanji: '欲しがる',
    reading: 'ほしがる',
    meaning: '탐내다/하고 싶어 하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '子供がおもちゃを欲しがる。', t: '아이가 장난감을 갖고 싶어 하다.' }
  },
  {
    id: 'n3-674',
    category: 'vocabulary',
    groupIndex: 34,
    kanji: '好む',
    reading: 'このむ',
    meaning: '좋아하다/선호하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '静かな場所を好む。', t: '조용한 장소를 선호하다.' }
  }
];

const g34_adjectives: VocabItem[] = [
  {
    id: 'n3-675',
    category: 'vocabulary',
    groupIndex: 34,
    kanji: '望ましい',
    reading: 'のぞましい',
    meaning: '바람직하다',
    partOfSpeech: '형용사(い)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '早急な対応が望ましい。', t: '조속한 대응이 바람직하다.' }
  },
  {
    id: 'n3-676',
    category: 'vocabulary',
    groupIndex: 34,
    kanji: '好ましい',
    reading: 'このましい',
    meaning: '바람직하다/호감이 가다',
    partOfSpeech: '형용사(い)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '好ましくない態度。', t: '바람직하지 못한 태도.' }
  },
  {
    id: 'n3-677',
    category: 'vocabulary',
    groupIndex: 34,
    kanji: '有り難い',
    reading: 'ありがたい',
    meaning: '고맙다/감사하다',
    partOfSpeech: '형용사(い)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '有り難いお言葉。', t: '고마운 말씀.' }
  }
];

const g34_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-678',
    category: 'vocabulary',
    groupIndex: 34,
    kanji: '是非',
    reading: 'ぜひ',
    meaning: '부디/꼭',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '是非遊びに来てください。', t: '부디 놀러 오세요.' }
  },
  {
    id: 'n3-679',
    category: 'vocabulary',
    groupIndex: 34,
    kanji: '願わくは',
    reading: 'ねがわくは',
    meaning: '바라건대',
    partOfSpeech: '부사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '願わくは平和であれ。', t: '바라건대 평화로워라.' }
  },
  {
    id: 'n3-680',
    category: 'vocabulary',
    groupIndex: 34,
    kanji: '何とか',
    reading: 'なんとか',
    meaning: '어떻게든',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '何とか間に合った。', t: '어떻게든 늦지 않았다.' }
  }
];

// #region [GROUP 35] - ID n3-681 ~ n3-700

const g35_nouns: VocabItem[] = [
  {
    id: 'n3-681',
    category: 'vocabulary',
    groupIndex: 35,
    kanji: '想像',
    reading: 'そうぞう',
    meaning: '상상',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '想像を絶する。', t: '상상을 초월하다.' }
  },
  {
    id: 'n3-682',
    category: 'vocabulary',
    groupIndex: 35,
    kanji: '回想',
    reading: 'かいそう',
    meaning: '회상',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '過去を回想する。', t: '과거를 회상하다.' }
  },
  {
    id: 'n3-683',
    category: 'vocabulary',
    groupIndex: 35,
    kanji: '空想',
    reading: 'くうそう',
    meaning: '공상',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '空想の世界に浸る。', t: '공상의 세계에 젖다.' }
  },
  {
    id: 'n3-684',
    category: 'vocabulary',
    groupIndex: 35,
    kanji: '思想',
    reading: 'しそう',
    meaning: '사상',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '自由な思想を持つ。', t: '자유로운 사상을 가지다.' }
  },
  {
    id: 'n3-685',
    category: 'vocabulary',
    groupIndex: 35,
    kanji: '理想',
    reading: 'りそう',
    meaning: '이상',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '理想を高く掲げる。', t: '이상을 높이 내걸다.' }
  },
  {
    id: 'n3-686',
    category: 'vocabulary',
    groupIndex: 35,
    kanji: '感想',
    reading: 'かんそう',
    meaning: '감상',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '本を読んだ感想を書く।', t: '책을 읽은 감상을 쓰다.' }
  },
  {
    id: 'n3-687',
    category: 'vocabulary',
    groupIndex: 35,
    kanji: '予想',
    reading: 'よそう',
    meaning: '예상',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '予想が外れる。', t: '예상이 빗나가다.' }
  },
  {
    id: 'n3-688',
    category: 'vocabulary',
    groupIndex: 35,
    kanji: '構想',
    reading: 'こうそう',
    meaning: '구상',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '新しい街の構想。', t: '새로운 도시의 구상.' }
  }
];

const g35_verbs: VocabItem[] = [
  {
    id: 'n3-689',
    category: 'vocabulary',
    groupIndex: 35,
    kanji: '想う',
    reading: 'おもう',
    meaning: '생각하다/그리워하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '故郷を想う。', t: '고향을 그리워하다(생각하다).' }
  },
  {
    id: 'n3-690',
    category: 'vocabulary',
    groupIndex: 35,
    kanji: '思う',
    reading: 'おもう',
    meaning: '생각하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'そうではないと思う。', t: '그렇지 않다고 생각한다.' }
  },
  {
    id: 'n3-691',
    category: 'vocabulary',
    groupIndex: 35,
    kanji: '思い出す',
    reading: 'おもいだす',
    meaning: '기억해 내다/회상하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '昔のことを思い出す。', t: '옛날 일을 기억해 내다.' }
  },
  {
    id: 'n3-692',
    category: 'vocabulary',
    groupIndex: 35,
    kanji: '思い付く',
    reading: 'おもいつく',
    meaning: '떠올리다/생각나다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '良いアイデアを思い付く。', t: '좋은 아이디어를 떠올리다.' }
  },
  {
    id: 'n3-693',
    category: 'vocabulary',
    groupIndex: 35,
    kanji: '思い込む',
    reading: 'おもいこむ',
    meaning: '굳게 믿다/착각하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '不可能だと思い込む。', t: '불가능하다고 굳게 믿다.' }
  },
  {
    id: 'n3-694',
    category: 'vocabulary',
    groupIndex: 35,
    kanji: '思い切る',
    reading: 'おもいきる',
    meaning: '단념하다/결심하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '思い切って転職する。', t: '과감하게 전직하다.' }
  }
];

const g35_adjectives: VocabItem[] = [
  {
    id: 'n3-695',
    category: 'vocabulary',
    groupIndex: 35,
    kanji: '意外',
    reading: 'いがい',
    meaning: '의외임',
    partOfSpeech: '형용사(な)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '意外な結果に驚く。', t: '의외의 결과에 놀라다.' }
  },
  {
    id: 'n3-696',
    category: 'vocabulary',
    groupIndex: 35,
    kanji: '案外',
    reading: 'あんがい',
    meaning: '뜻밖임/의외로',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '案外難しい。', t: '의외로(뜻밖에) 어렵다.' }
  },
  {
    id: 'n3-697',
    category: 'vocabulary',
    groupIndex: 35,
    kanji: '不思議',
    reading: 'ふしぎ',
    meaning: '신기함/이상함',
    partOfSpeech: '형용사(な)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '不思議な体験をする。', t: '기이한 체험을 하다.' }
  }
];

const g35_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-698',
    category: 'vocabulary',
    groupIndex: 35,
    kanji: '案の定',
    reading: 'あんのじょう',
    meaning: '생각한 대로/아니나 다를까',
    partOfSpeech: '부사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '案の定、雨が降り出した。', t: '아니나 다를까, 비가 내리기 시작했다.' }
  },
  {
    id: 'n3-699',
    category: 'vocabulary',
    groupIndex: 35,
    kanji: '思わず',
    reading: 'おもわず',
    meaning: '엉겁결에/나도 모르게',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '思わず笑ってしまう。', t: '나도 모르게 웃음이 터지다.' }
  },
  {
    id: 'n3-700',
    category: 'vocabulary',
    groupIndex: 35,
    kanji: '一考',
    reading: 'いっこう',
    meaning: '한 번 생각해 봄',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '一考の価値がある。', t: '한 번 생각해 볼 가치가 있다.' }
  }
];

// #region [GROUP 36] - ID n3-701 ~ n3-720

const g36_nouns: VocabItem[] = [
  {
    id: 'n3-701',
    category: 'vocabulary',
    groupIndex: 36,
    kanji: '意識',
    reading: 'いしき',
    meaning: '의식',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '意識を取り戻す。', t: '의식을 되찾다.' }
  },
  {
    id: 'n3-702',
    category: 'vocabulary',
    groupIndex: 36,
    kanji: '知識',
    reading: 'ちしき',
    meaning: '지식',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '知識を深める。', t: '지식을 깊게 하다.' }
  },
  {
    id: 'n3-703',
    category: 'vocabulary',
    groupIndex: 36,
    kanji: '常識',
    reading: 'じょうしき',
    meaning: '상식',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '常識をわきまえる。', t: '상식을 분별하다(지키다).' }
  },
  {
    id: 'n3-704',
    category: 'vocabulary',
    groupIndex: 36,
    kanji: '認識',
    reading: 'にんしき',
    meaning: '인식',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '現状を認識する。', t: '현상을 인식하다.' }
  },
  {
    id: 'n3-705',
    category: 'vocabulary',
    groupIndex: 36,
    kanji: '見識',
    reading: 'けんしき',
    meaning: '견식/식견',
    partOfSpeech: '명사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '見識が高い。', t: '식견이 높다.' }
  },
  {
    id: 'n3-706',
    category: 'vocabulary',
    groupIndex: 36,
    kanji: '標識',
    reading: 'ひょうしき',
    meaning: '표식/표지판',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '交通標識に従う。', t: '교통 표지판을 따르다.' }
  },
  {
    id: 'n3-707',
    category: 'vocabulary',
    groupIndex: 36,
    kanji: '識別',
    reading: 'しきべつ',
    meaning: '식별',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '色の違いを識別する。', t: '색의 차이를 식별하다.' }
  },
  {
    id: 'n3-708',
    category: 'vocabulary',
    groupIndex: 36,
    kanji: '良識',
    reading: 'りょうしき',
    meaning: '양식(좋은 판단력)',
    partOfSpeech: '명사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '良識を疑う。', t: '양식을 의심하다.' }
  }
];

const g36_verbs: VocabItem[] = [
  {
    id: 'n3-709',
    category: 'vocabulary',
    groupIndex: 36,
    kanji: '識る',
    reading: 'しる',
    meaning: '알다/분별하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '真実を識る。', t: '진실을 알다.' }
  },
  {
    id: 'n3-710',
    category: 'vocabulary',
    groupIndex: 36,
    kanji: '知る',
    reading: 'しる',
    meaning: '알다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '名前を知っている。', t: '이름을 알고 있다.' }
  },
  {
    id: 'n3-711',
    category: 'vocabulary',
    groupIndex: 36,
    kanji: '知らせる',
    reading: 'しらせる',
    meaning: '알리다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '出発の時間を知らせる。', t: '출발 시간을 알리다.' }
  },
  {
    id: 'n3-712',
    category: 'vocabulary',
    groupIndex: 36,
    kanji: '悟る',
    reading: 'さとる',
    meaning: '깨닫다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '自分の非を悟る。', t: '자신의 잘못을 깨닫다.' }
  },
  {
    id: 'n3-713',
    category: 'vocabulary',
    groupIndex: 36,
    kanji: '究める',
    reading: 'きわめる',
    meaning: '궁구하다/끝까지 파고들다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '道の真理を究める。', t: '도의 진리를 끝까지 파고들다.' }
  },
  {
    id: 'n3-714',
    category: 'vocabulary',
    groupIndex: 36,
    kanji: '見分ける',
    reading: 'みわける',
    meaning: '구별하다/분별하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '本物と偽物を見分ける。', t: '진짜와 가짜를 구별하다.' }
  }
];

const g36_adjectives: VocabItem[] = [
  {
    id: 'n3-715',
    category: 'vocabulary',
    groupIndex: 36,
    kanji: '詳しい',
    reading: 'くわしい',
    meaning: '자세하다/정통하다',
    partOfSpeech: '형용사(い)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'この分野に詳しい。', t: '이 분야에 정통하다.' }
  },
  {
    id: 'n3-716',
    category: 'vocabulary',
    groupIndex: 36,
    kanji: '無意識',
    reading: 'むいしき',
    meaning: '무의식',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '無意識に口ずさむ。', t: '무의식중에 흥얼거리다.' }
  },
  {
    id: 'n3-717',
    category: 'vocabulary',
    groupIndex: 36,
    kanji: '知的',
    reading: 'ちてき',
    meaning: '지적임',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '知的な活動。', t: '지적인 활동.' }
  }
];

const g36_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-718',
    category: 'vocabulary',
    groupIndex: 36,
    kanji: '自ずと',
    reading: 'おのずと',
    meaning: '저절로/자연히',
    partOfSpeech: '부사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '真実は自ずと明らかになる。', t: '진실은 저절로 밝혀진다.' }
  },
  {
    id: 'n3-719',
    category: 'vocabulary',
    groupIndex: 36,
    kanji: '努めて',
    reading: 'つとめて',
    meaning: '애써/가능한 한',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '努めて冷静を保つ。', t: '애써 냉정을 유지하다.' }
  },
  {
    id: 'n3-720',
    category: 'vocabulary',
    groupIndex: 36,
    kanji: 'はっきり',
    reading: 'はっきり',
    meaning: '분명히/똑똑히',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'はっきりと答える。', t: '분명하게 대답하다.' }
  }
];

// #region [GROUP 37] - ID n3-721 ~ n3-740

const g37_nouns: VocabItem[] = [
  {
    id: 'n3-721',
    category: 'vocabulary',
    groupIndex: 37,
    kanji: '判断',
    reading: 'はんだん',
    meaning: '판단',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '状況を判断する。', t: '상황을 판단하다.' }
  },
  {
    id: 'n3-722',
    category: 'vocabulary',
    groupIndex: 37,
    kanji: '決断',
    reading: 'けつだん',
    meaning: '결단',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '重大な決断を下す。', t: '중대한 결단을 내리다.' }
  },
  {
    id: 'n3-723',
    category: 'vocabulary',
    groupIndex: 37,
    kanji: '断絶',
    reading: 'だんぜつ',
    meaning: '단절',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '交際を断絶する।', t: '교제를 단절하다.' }
  },
  {
    id: 'n3-724',
    category: 'vocabulary',
    groupIndex: 37,
    kanji: '診断',
    reading: 'しんだん',
    meaning: '진단',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '健康診断を受ける。', t: '건강 진단을 받다.' }
  },
  {
    id: 'n3-725',
    category: 'vocabulary',
    groupIndex: 37,
    kanji: '断水',
    reading: 'だんすい',
    meaning: '단수',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '工事で断水になる。', t: '공사로 인해 단수가 되다.' }
  },
  {
    id: 'n3-726',
    category: 'vocabulary',
    groupIndex: 37,
    kanji: '断定',
    reading: 'だんてい',
    meaning: '단정(판단하여 결정함)',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '犯人だと断定する。', t: '범인이라고 단정하다.' }
  },
  {
    id: 'n3-727',
    category: 'vocabulary',
    groupIndex: 37,
    kanji: '油断',
    reading: 'ゆだん',
    meaning: '방심',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '油断大敵。', t: '방심은 금물(큰 적).' }
  },
  {
    id: 'n3-728',
    category: 'vocabulary',
    groupIndex: 37,
    kanji: '中断',
    reading: 'ちゅうだん',
    meaning: '중단',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '試合を中断する。', t: '시합을 중단하다.' }
  }
];

const g37_verbs: VocabItem[] = [
  {
    id: 'n3-729',
    category: 'vocabulary',
    groupIndex: 37,
    kanji: '断る',
    reading: 'ことわる',
    meaning: '거절하다/미리 알리다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '誘いを丁寧に断る。', t: '권유를 정중히 거절하다.' }
  },
  {
    id: 'n3-730',
    category: 'vocabulary',
    groupIndex: 37,
    kanji: '断つ',
    reading: 'たつ',
    meaning: '끊다/차단하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '酒を断つ。', t: '술을 끊다.' }
  },
  {
    id: 'n3-731',
    category: 'vocabulary',
    groupIndex: 37,
    kanji: '絶つ',
    reading: 'たつ',
    meaning: '끊다/끊기다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '命を絶つ。', t: '목숨을 끊다.' }
  },
  {
    id: 'n3-732',
    category: 'vocabulary',
    groupIndex: 37,
    kanji: '定める',
    reading: 'さだめる',
    meaning: '정하다/결정하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '方針を定める。', t: '방침을 정하다.' }
  },
  {
    id: 'n3-733',
    category: 'vocabulary',
    groupIndex: 37,
    kanji: '見放す',
    reading: 'みはなす',
    meaning: '포기하다/버리다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '医者に見放される。', t: '의사가 포기하다(내버려 두다).' }
  },
  {
    id: 'n3-734',
    category: 'vocabulary',
    groupIndex: 37,
    kanji: '決める',
    reading: 'きめる',
    meaning: '정하다/결심하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '行き先を決める。', t: '행선지를 정하다.' }
  }
];

const g37_adjectives: VocabItem[] = [
  {
    id: 'n3-735',
    category: 'vocabulary',
    groupIndex: 37,
    kanji: '断然',
    reading: 'だんぜん',
    meaning: '단연/훨씬',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'こっちの方が断然いい。', t: '이쪽이 단연 좋다.' }
  },
  {
    id: 'n3-736',
    category: 'vocabulary',
    groupIndex: 37,
    kanji: '明確',
    reading: 'めいかく',
    meaning: '명확함',
    partOfSpeech: '형용사(な)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '明確な根拠を示す。', t: '명확한 근거를 제시하다.' }
  },
  {
    id: 'n3-737',
    category: 'vocabulary',
    groupIndex: 37,
    kanji: '端的',
    reading: 'たんてき',
    meaning: '단적임/명백함',
    partOfSpeech: '형용사(な)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '端的に言うと。', t: '단적으로 말하자면.' }
  }
];

const g37_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-738',
    category: 'vocabulary',
    groupIndex: 37,
    kanji: '絶対',
    reading: 'ぜったい',
    meaning: '절대/꼭',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '絶対に秘密だ。', t: '절대로 비밀이다.' }
  },
  {
    id: 'n3-739',
    category: 'vocabulary',
    groupIndex: 37,
    kanji: 'きっぱり',
    reading: 'きっぱり',
    meaning: '단호히/딱 잘라',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'きっぱりと断る。', t: '단호하게 거절하다.' }
  },
  {
    id: 'n3-740',
    category: 'vocabulary',
    groupIndex: 37,
    kanji: 'ことごとく',
    reading: 'ことごとく',
    meaning: '모두/남김없이',
    partOfSpeech: '부사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '予想がことごとく外れた。', t: '예상이 모조리 빗나갔다.' }
  }
];

// #region [GROUP 38] - ID n3-741 ~ n3-760

const g38_nouns: VocabItem[] = [
  {
    id: 'n3-741',
    category: 'vocabulary',
    groupIndex: 38,
    kanji: '相談',
    reading: 'そうだん',
    meaning: '상담/의논',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '先生に相談する।', t: '선생님께 의논하다.' }
  },
  {
    id: 'n3-742',
    category: 'vocabulary',
    groupIndex: 38,
    kanji: '会談',
    reading: 'かいだん',
    meaning: '회담',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '首脳会談が行われる。', t: '정상 회담이 열리다.' }
  },
  {
    id: 'n3-743',
    category: 'vocabulary',
    groupIndex: 38,
    kanji: '冗談',
    reading: 'じょうだん',
    meaning: '농담',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '冗談を言って笑わせる。', t: '농담을 해서 웃기다.' }
  },
  {
    id: 'n3-744',
    category: 'vocabulary',
    groupIndex: 38,
    kanji: '対談',
    reading: 'たいだん',
    meaning: '대담',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '著名人と対談する。', t: '저명인사와 대담하다.' }
  },
  {
    id: 'n3-745',
    category: 'vocabulary',
    groupIndex: 38,
    kanji: '座談会',
    reading: 'ざだんかい',
    meaning: '좌담회',
    partOfSpeech: '명사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '座談会に参加する।', t: '좌담회에 참가하다.' }
  },
  {
    id: 'n3-746',
    category: 'vocabulary',
    groupIndex: 38,
    kanji: '雑談',
    reading: 'ざつだん',
    meaning: '잡담',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '休憩中に雑談する。', t: '휴식 중에 잡담하다.' }
  },
  {
    id: 'n3-747',
    category: 'vocabulary',
    groupIndex: 38,
    kanji: '談話',
    reading: 'だんわ',
    meaning: '담화',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '公式な談話を発表する。', t: '공식 담화를 발표하다.' }
  },
  {
    id: 'n3-748',
    category: 'vocabulary',
    groupIndex: 38,
    kanji: '怪談',
    reading: 'かいだん',
    meaning: '괴담',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '怖い怪談を聞く。', t: '무서운 괴담을 듣다.' }
  }
];

const g38_verbs: VocabItem[] = [
  {
    id: 'n3-749',
    category: 'vocabulary',
    groupIndex: 38,
    kanji: '語る',
    reading: 'かたる',
    meaning: '말하다/이야기하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '夢を熱く語る。', t: '꿈을 열정적으로 이야기하다.' }
  },
  {
    id: 'n3-750',
    category: 'vocabulary',
    groupIndex: 38,
    kanji: '論じる',
    reading: 'ろんじる',
    meaning: '논하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '問題を客観的に論じる。', t: '문제를 객관적으로 논하다.' }
  },
  {
    id: 'n3-751',
    category: 'vocabulary',
    groupIndex: 38,
    kanji: '話し合う',
    reading: 'はなしあう',
    meaning: '서로 이야기하다/상의하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'じっくり話し合う。', t: '차분히 상의하다.' }
  },
  {
    id: 'n3-752',
    category: 'vocabulary',
    groupIndex: 38,
    kanji: '述べる',
    reading: 'のべる',
    meaning: '말하다/진술하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '意見を述べる。', t: '의견을 말하다.' }
  },
  {
    id: 'n3-753',
    category: 'vocabulary',
    groupIndex: 38,
    kanji: '喋る',
    reading: 'しゃべる',
    meaning: '재잘거리다/말하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '友達と楽しく喋る。', t: '친구와 즐겁게 수다 떨다.' }
  },
  {
    id: 'n3-754',
    category: 'vocabulary',
    groupIndex: 38,
    kanji: '唱える',
    reading: 'となえる',
    meaning: '외치다/주장하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '異議を唱える。', t: '이의를 제기하다(주장하다).' }
  }
];

const g38_adjectives: VocabItem[] = [
  {
    id: 'n3-755',
    category: 'vocabulary',
    groupIndex: 38,
    kanji: '饒舌',
    reading: 'じょうぜつ',
    meaning: '수다스러움',
    partOfSpeech: '형용사(な)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '饒舌な男。', t: '수다스러운 남자.' }
  },
  {
    id: 'n3-756',
    category: 'vocabulary',
    groupIndex: 38,
    kanji: '巧み',
    reading: 'たくみ',
    meaning: '교묘함/솜씨가 좋음',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '巧みな話術。', t: '교묘한(훌륭한) 화술.' }
  },
  {
    id: 'n3-757',
    category: 'vocabulary',
    groupIndex: 38,
    kanji: '物静か',
    reading: 'ものしずか',
    meaning: '조용함/차분함',
    partOfSpeech: '형용사(な)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '物静かな性格。', t: '차분한 성격.' }
  }
];

const g38_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-758',
    category: 'vocabulary',
    groupIndex: 38,
    kanji: '延々と',
    reading: 'えんえんと',
    meaning: '끝없이/길게',
    partOfSpeech: '부사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '延々と話し続ける。', t: '끝없이 계속 이야기하다.' }
  },
  {
    id: 'n3-759',
    category: 'vocabulary',
    groupIndex: 38,
    kanji: 'いよいよ',
    reading: 'いよいよ',
    meaning: '드디어/드디어',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'いよいよ出発だ。', t: '드디어 출발이다.' }
  },
  {
    id: 'n3-760',
    category: 'vocabulary',
    groupIndex: 38,
    kanji: '着々',
    reading: 'ちゃくちゃく',
    meaning: '착착/순조롭게',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '工事が着々と進む。', t: '공사가 착착 진행되다.' }
  }
];

// #region [GROUP 39] - ID n3-761 ~ n3-780

const g39_nouns: VocabItem[] = [
  {
    id: 'n3-761',
    category: 'vocabulary',
    groupIndex: 39,
    kanji: '健康',
    reading: 'けんこう',
    meaning: '건강',
    partOfSpeech: '명사(형용동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '健康に気をつける。', t: '건강에 유의하다.' }
  },
  {
    id: 'n3-762',
    category: 'vocabulary',
    groupIndex: 39,
    kanji: '健在',
    reading: 'けんざい',
    meaning: '건재함',
    partOfSpeech: '명사(형용동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '両親はまだ健在だ。', t: '부모님은 아직 건재하시다.' }
  },
  {
    id: 'n3-763',
    category: 'vocabulary',
    groupIndex: 39,
    kanji: '保健',
    reading: 'ほけん',
    meaning: '보건',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '保健体育の授業。', t: '보건 체육 수업.' }
  },
  {
    id: 'n3-764',
    category: 'vocabulary',
    groupIndex: 39,
    kanji: '不健康',
    reading: 'ふけんこう',
    meaning: '불건강함',
    partOfSpeech: '명사(형용동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '不健康な生活習慣。', t: '불건강한 생활 습관.' }
  },
  {
    id: 'n3-765',
    category: 'vocabulary',
    groupIndex: 39,
    kanji: '健忘症',
    reading: 'けんぼうしょう',
    meaning: '건망증',
    partOfSpeech: '명사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '健忘症がひどくなる。', t: '건망증이 심해지다.' }
  },
  {
    id: 'n3-766',
    category: 'vocabulary',
    groupIndex: 39,
    kanji: '体格',
    reading: 'たいかく',
    meaning: '체격',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'がっしりした体格。', t: '다부진 체격.' }
  },
  {
    id: 'n3-767',
    category: 'vocabulary',
    groupIndex: 39,
    kanji: '体育',
    reading: 'たいいく',
    meaning: '체육',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '体育館で練習する。', t: '체육관에서 연습하다.' }
  },
  {
    id: 'n3-768',
    category: 'vocabulary',
    groupIndex: 39,
    kanji: '肉体',
    reading: 'にくたい',
    meaning: '육체',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '肉体的な疲労。', t: '육체적인 피로.' }
  }
];

const g39_verbs: VocabItem[] = [
  {
    id: 'n3-769',
    category: 'vocabulary',
    groupIndex: 39,
    kanji: '鍛える',
    reading: 'きたえる',
    meaning: '단련하다/훈련하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '体を鍛える。', t: '몸을 단련하다.' }
  },
  {
    id: 'n3-770',
    category: 'vocabulary',
    groupIndex: 39,
    kanji: '休める',
    reading: 'やすめる',
    meaning: '쉬게 하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'ゆっくり羽を休める。', t: '푹 날개를 쉬게 하다(편히 쉬다).' }
  },
  {
    id: 'n3-771',
    category: 'vocabulary',
    groupIndex: 39,
    kanji: '整える',
    reading: 'ととのえる',
    meaning: '정돈하다/준비하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '身なりを整える。', t: '옷차림을 정돈하다.' }
  },
  {
    id: 'n3-772',
    category: 'vocabulary',
    groupIndex: 39,
    kanji: '癒やす',
    reading: 'いやす',
    meaning: '치료하다/달래다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '疲れを癒やす。', t: '피로를 풀다(달래다).' }
  },
  {
    id: 'n3-773',
    category: 'vocabulary',
    groupIndex: 39,
    kanji: '養う',
    reading: 'やしなう',
    meaning: '기르다/양육하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '家族を養う。', t: '가족을 부양하다.' }
  },
  {
    id: 'n3-774',
    category: 'vocabulary',
    groupIndex: 39,
    kanji: '励む',
    reading: 'はげむ',
    meaning: '힘쓰다/노력하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '学業に励む。', t: '학업에 힘쓰다.' }
  }
];

const g39_adjectives: VocabItem[] = [
  {
    id: 'n3-775',
    category: 'vocabulary',
    groupIndex: 39,
    kanji: '健やか',
    reading: 'すこやか',
    meaning: '건강함/싱싱함',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '健やかに育つ。', t: '건강하게 자라다.' }
  },
  {
    id: 'n3-776',
    category: 'vocabulary',
    groupIndex: 39,
    kanji: '逞しい',
    reading: 'たくましい',
    meaning: '늠름하다/강인하다',
    partOfSpeech: '형용사(い)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '逞しい筋肉。', t: '강인한 근육.' }
  },
  {
    id: 'n3-777',
    category: 'vocabulary',
    groupIndex: 39,
    kanji: '不健全',
    reading: 'ふけんぜん',
    meaning: '불건전함',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '不健全な遊び。', t: '불건전한 놀이.' }
  }
];

const g39_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-778',
    category: 'vocabulary',
    groupIndex: 39,
    kanji: 'せいぜい',
    reading: 'せいぜい',
    meaning: '기껏해야/힘껏',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'せいぜい頑張りなさい。', t: '힘껏 노력하세요.' }
  },
  {
    id: 'n3-779',
    category: 'vocabulary',
    groupIndex: 39,
    kanji: 'たっぷり',
    reading: 'たっぷり',
    meaning: '듬뿍/충분히',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '栄養をたっぷり摂る。', t: '영양을 듬뿍 섭취하다.' }
  },
  {
    id: 'n3-780',
    category: 'vocabulary',
    groupIndex: 39,
    kanji: '悠々',
    reading: 'ゆうゆう',
    meaning: '유유히/한가로이',
    partOfSpeech: '부사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '悠々と歩く。', t: '유유히 걷다.' }
  }
];

// #region [GROUP 40] - ID n3-781 ~ n3-800

const g40_nouns: VocabItem[] = [
  {
    id: 'n3-781',
    category: 'vocabulary',
    groupIndex: 40,
    kanji: '法律',
    reading: 'ほうりつ',
    meaning: '법률',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '法律を守る。', t: '법률을 지키다.' }
  },
  {
    id: 'n3-782',
    category: 'vocabulary',
    groupIndex: 40,
    kanji: '規律',
    reading: 'きりつ',
    meaning: '규율',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '規律正しい生活。', t: '규율 바른 생활.' }
  },
  {
    id: 'n3-783',
    category: 'vocabulary',
    groupIndex: 40,
    kanji: '自律',
    reading: 'じりつ',
    meaning: '자율',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '自律神経の乱れ。', t: '자율 신경의 교란.' }
  },
  {
    id: 'n3-784',
    category: 'vocabulary',
    groupIndex: 40,
    kanji: '律儀',
    reading: 'りちぎ',
    meaning: '의리가 있음/성실함',
    partOfSpeech: '명사(형용동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '律儀に返信をくれる。', t: '성실하게(의리 있게) 답장을 준다.' }
  },
  {
    id: 'n3-785',
    category: 'vocabulary',
    groupIndex: 40,
    kanji: '戦律',
    reading: 'せんりつ',
    meaning: '전율',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '恐怖に戦律する。', t: '공포에 전율하다.' }
  },
  {
    id: 'n3-786',
    category: 'vocabulary',
    groupIndex: 40,
    kanji: '旋律',
    reading: 'せんりつ',
    meaning: '선율',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '美しい旋律を奏でる。', t: '아름다운 선율을 연주하다.' }
  },
  {
    id: 'n3-787',
    category: 'vocabulary',
    groupIndex: 40,
    kanji: '一律',
    reading: 'いちりつ',
    meaning: '일률/일괄',
    partOfSpeech: '명사(형용동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '一律に千円を徴収する。', t: '일률적으로 천 엔을 징수하다.' }
  },
  {
    id: 'n3-788',
    category: 'vocabulary',
    groupIndex: 40,
    kanji: '調律',
    reading: 'ちょうりつ',
    meaning: '조율',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'ピアノを調律する。', t: '피아노를 조율하다.' }
  }
];

const g40_verbs: VocabItem[] = [
  {
    id: 'n3-789',
    category: 'vocabulary',
    groupIndex: 40,
    kanji: '禁ずる',
    reading: 'きんずる',
    meaning: '금하다',
    partOfSpeech: '동사(3그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '立ち入りを禁ずる。', t: '출입을 금하다.' }
  },
  {
    id: 'n3-780',
    category: 'vocabulary',
    groupIndex: 40,
    kanji: '律する',
    reading: 'りっする',
    meaning: '통제하다/다스리다',
    partOfSpeech: '동사(3그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '己を律する。', t: '자신을 다스리다.' }
  },
  {
    id: 'n3-791',
    category: 'vocabulary',
    groupIndex: 40,
    kanji: '定める',
    reading: 'さだめる',
    meaning: '정하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'ルールを定める。', t: '규칙을 정하다.' }
  },
  {
    id: 'n3-792',
    category: 'vocabulary',
    groupIndex: 40,
    kanji: '従う',
    reading: 'したがう',
    meaning: '따르다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '指示に従う。', t: '지시에 따르다.' }
  },
  {
    id: 'n3-793',
    category: 'vocabulary',
    groupIndex: 40,
    kanji: '背く',
    reading: 'そむく',
    meaning: '등지다/어기다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '親の期待に背く。', t: '부모의 기대에 어긋나다.' }
  },
  {
    id: 'n3-794',
    category: 'vocabulary',
    groupIndex: 40,
    kanji: '制する',
    reading: 'せいする',
    meaning: '제압하다/억제하다',
    partOfSpeech: '동사(3그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '感情を制する。', t: '감정을 억제하다.' }
  }
];

const g40_adjectives: VocabItem[] = [
  {
    id: 'n3-795',
    category: 'vocabulary',
    groupIndex: 40,
    kanji: '厳格',
    reading: 'げんかく',
    meaning: '엄격함',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '厳格な家庭で育つ。', t: '엄격한 가정에서 자라다.' }
  },
  {
    id: 'n3-796',
    category: 'vocabulary',
    groupIndex: 40,
    kanji: '正当',
    reading: 'せいとう',
    meaning: '정당함',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '正当な理由がある。', t: '정당한 이유가 있다.' }
  },
  {
    id: 'n3-797',
    category: 'vocabulary',
    groupIndex: 40,
    kanji: '不当',
    reading: 'ふとう',
    meaning: '부당함',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '不当な扱いに抗議する。', t: '부당한 대우에 항의하다.' }
  }
];

const g40_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-798',
    category: 'vocabulary',
    groupIndex: 40,
    kanji: '厳かに',
    reading: 'おごそかに',
    meaning: '엄숙하게',
    partOfSpeech: '부사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '儀式が厳かに行われる。', t: '의식이 엄숙하게 치러지다.' }
  },
  {
    id: 'n3-799',
    category: 'vocabulary',
    groupIndex: 40,
    kanji: '一応',
    reading: 'いちおう',
    meaning: '일단/우선',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '一応確認しておく。', t: '일단 확인해 두다.' }
  },
  {
    id: 'n3-800',
    category: 'vocabulary',
    groupIndex: 40,
    kanji: '強いて',
    reading: 'しいて',
    meaning: '굳이/억지로',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '強いて言えばこちらだ。', t: '굳이 말하자면 이쪽이다.' }
  }
];

// #region [GROUP 41] - ID n3-801 ~ n3-820

const g41_nouns: VocabItem[] = [
  {
    id: 'n3-801',
    category: 'vocabulary',
    groupIndex: 41,
    kanji: '歴史',
    reading: 'れきし',
    meaning: '역사',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '日本の歴史を学ぶ。', t: '일본의 역사를 배우다.' }
  },
  {
    id: 'n3-802',
    category: 'vocabulary',
    groupIndex: 41,
    kanji: '学歴',
    reading: 'がくれき',
    meaning: '학력',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '学歴社会を批判する。', t: '학력 사회를 비판하다.' }
  },
  {
    id: 'n3-803',
    category: 'vocabulary',
    groupIndex: 41,
    kanji: '経歴',
    reading: 'けいれき',
    meaning: '경력',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '華やかな経歴を持つ。', t: '화려한 경력을 가지다.' }
  },
  {
    id: 'n3-804',
    category: 'vocabulary',
    groupIndex: 41,
    kanji: '職歴',
    reading: 'しょくれき',
    meaning: '직력(회사 경력)',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '職歴を履歴書に書く。', t: '직력을 이력서에 쓰다.' }
  },
  {
    id: 'n3-805',
    category: 'vocabulary',
    groupIndex: 41,
    kanji: '履歴',
    reading: 'りれき',
    meaning: '이력',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '通話履歴を確認する。', t: '통화 이력을 확인하다.' }
  },
  {
    id: 'n3-806',
    category: 'vocabulary',
    groupIndex: 41,
    kanji: '遍歴',
    reading: 'へんれき',
    meaning: '편력',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '女性遍歴が激しい。', t: '여성 편력이 심하다.' }
  },
  {
    id: 'n3-807',
    category: 'vocabulary',
    groupIndex: 41,
    kanji: '史跡',
    reading: 'しせき',
    meaning: '사적/유적',
    partOfSpeech: '명사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '歴史的な史跡を巡る。', t: '역사적인 사적을 돌다.' }
  },
  {
    id: 'n3-808',
    category: 'vocabulary',
    groupIndex: 41,
    kanji: '前歴',
    reading: 'ぜんれき',
    meaning: '전력',
    partOfSpeech: '명사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '前歴のある人物。', t: '전력이 있는 인물.' }
  }
];

const g41_verbs: VocabItem[] = [
  {
    id: 'n3-809',
    category: 'vocabulary',
    groupIndex: 41,
    kanji: '経る',
    reading: 'へる',
    meaning: '지나다/거치다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '長い年月を経る。', t: '긴 세월을 거치다.' }
  },
  {
    id: 'n3-810',
    category: 'vocabulary',
    groupIndex: 41,
    kanji: '暦る',
    reading: 'わたる',
    meaning: '건너다/지나다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '海を暦る(渡る)。', t: '바다를 건너다.' }
  },
  {
    id: 'n3-811',
    category: 'vocabulary',
    groupIndex: 41,
    kanji: '辿る',
    reading: 'たどる',
    meaning: '더듬어 가다/길을 가다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '記憶を辿る。', t: '기억을 더듬다.' }
  },
  {
    id: 'n3-812',
    category: 'vocabulary',
    groupIndex: 41,
    kanji: '遡る',
    reading: 'さかのぼる',
    meaning: '거슬러 올라가다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '川を遡る。', t: '강을 거슬러 올라가다.' }
  },
  {
    id: 'n3-813',
    category: 'vocabulary',
    groupIndex: 41,
    kanji: '過ぎる',
    reading: 'すぎる',
    meaning: '지나다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '時間が過ぎる。', t: '시간이 지나다.' }
  },
  {
    id: 'n3-814',
    category: 'vocabulary',
    groupIndex: 41,
    kanji: '振り返る',
    reading: 'ふりかえる',
    meaning: '뒤돌아보다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '過去を振り返る。', t: '과거를 돌아보다.' }
  }
];

const g41_adjectives: VocabItem[] = [
  {
    id: 'n3-815',
    category: 'vocabulary',
    groupIndex: 41,
    kanji: '古風',
    reading: 'こふう',
    meaning: '고풍스러움/구식임',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '古風な考え方。', t: '고풍스러운 생각.' }
  },
  {
    id: 'n3-816',
    category: 'vocabulary',
    groupIndex: 41,
    kanji: '懐かしい',
    reading: 'なつかしい',
    meaning: '그립다',
    partOfSpeech: '형용사(い)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '懐かしい歌を聞く。', t: '그리운 노래를 듣다.' }
  },
  {
    id: 'n3-817',
    category: 'vocabulary',
    groupIndex: 41,
    kanji: '新鮮',
    reading: 'しんせん',
    meaning: '신선함',
    partOfSpeech: '형용사(な)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '新鮮な魚を食べる。', t: '신선한 생선을 먹다.' }
  }
];

const g41_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-818',
    category: 'vocabulary',
    groupIndex: 41,
    kanji: 'かつて',
    reading: 'かつて',
    meaning: '일찍이/예전에',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'かつてない賑わい。', t: '유례없는 북적임.' }
  },
  {
    id: 'n3-819',
    category: 'vocabulary',
    groupIndex: 41,
    kanji: 'かねてより',
    reading: 'かねてより',
    meaning: '전부터/진작부터',
    partOfSpeech: '부사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'かねてよりの念願。', t: '전부터 바라던 소원.' }
  },
  {
    id: 'n3-820',
    category: 'vocabulary',
    groupIndex: 41,
    kanji: 'さっき',
    reading: 'さっき',
    meaning: '아까',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'さっき言った通りだ。', t: '아까 말한 대로다.' }
  }
];

// #region [GROUP 42] - ID n3-821 ~ n3-840

const g42_nouns: VocabItem[] = [
  {
    id: 'n3-821',
    category: 'vocabulary',
    groupIndex: 42,
    kanji: '環境',
    reading: 'かんきょう',
    meaning: '환경',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '環境を保護する。', t: '환경을 보호하다.' }
  },
  {
    id: 'n3-822',
    category: 'vocabulary',
    groupIndex: 42,
    kanji: '境界',
    reading: 'きょうかい',
    meaning: '경계',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '境界線を引く。', t: '경계선을 긋다.' }
  },
  {
    id: 'n3-823',
    category: 'vocabulary',
    groupIndex: 42,
    kanji: '境遇',
    reading: 'きょうぐう',
    meaning: '경우/처지',
    partOfSpeech: '명사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '似た境遇の二人。', t: '비슷한 처지의 두 사람.' }
  },
  {
    id: 'n3-824',
    category: 'vocabulary',
    groupIndex: 42,
    kanji: '境地',
    reading: 'きょうち',
    meaning: '경지',
    partOfSpeech: '명사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '悟りの境地に達する。', t: '깨달음의 경지에 이르다.' }
  },
  {
    id: 'n3-825',
    category: 'vocabulary',
    groupIndex: 42,
    kanji: '国境',
    reading: 'こっきょう',
    meaning: '국경',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '国境を越える。', t: '국경을 넘다.' }
  },
  {
    id: 'n3-826',
    category: 'vocabulary',
    groupIndex: 42,
    kanji: '境内',
    reading: 'けいだい',
    meaning: '경내(사찰 등)',
    partOfSpeech: '명사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '神社の境内を散歩する。', t: '신사의 경내를 산책하다.' }
  },
  {
    id: 'n3-827',
    category: 'vocabulary',
    groupIndex: 42,
    kanji: '心境',
    reading: 'しんきょう',
    meaning: '심경',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '複雑な心境を吐露する。', t: '복잡한 심경을 토로하다.' }
  },
  {
    id: 'n3-828',
    category: 'vocabulary',
    groupIndex: 42,
    kanji: '逆境',
    reading: 'ぎゃっきょう',
    meaning: '역경',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '逆境に立ち向かう。', t: '역경에 맞서다.' }
  }
];

const g42_verbs: VocabItem[] = [
  {
    id: 'n3-829',
    category: 'vocabulary',
    groupIndex: 42,
    kanji: '囲む',
    reading: 'かこむ',
    meaning: '둘러싸다/에워싸다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '食卓を囲む。', t: '식탁을 둘러싸다(함께 식사하다).' }
  },
  {
    id: 'n3-830',
    category: 'vocabulary',
    groupIndex: 42,
    kanji: '巡る',
    reading: 'めぐる',
    meaning: '돌다/둘러싸다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '争いを巡る問題。', t: '다툼을 둘러싼 문제.' }
  },
  {
    id: 'n3-831',
    category: 'vocabulary',
    groupIndex: 42,
    kanji: '隔てる',
    reading: 'へだてる',
    meaning: '사이를 떼다/가로막다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '川を隔てて隣り合う。', t: '강을 사이에 두고 이웃하다.' }
  },
  {
    id: 'n3-832',
    category: 'vocabulary',
    groupIndex: 42,
    kanji: '及ぶ',
    reading: 'およぶ',
    meaning: '이르다/미치다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '被害が全国に及ぶ。', t: '피해가 전국에 미치다.' }
  },
  {
    id: 'n3-833',
    category: 'vocabulary',
    groupIndex: 42,
    kanji: '及ぼす',
    reading: 'およぼす',
    meaning: '끼치다/미치게 하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '悪影響を及ぼす。', t: '악영향을 끼치다.' }
  },
  {
    id: 'n3-834',
    category: 'vocabulary',
    groupIndex: 42,
    kanji: '交わる',
    reading: 'まじわる',
    meaning: '교차하다/사귀다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '二本の線が交わる。', t: '두 선이 교차하다.' }
  }
];

const g42_adjectives: VocabItem[] = [
  {
    id: 'n3-835',
    category: 'vocabulary',
    groupIndex: 42,
    kanji: '苦境',
    reading: 'くきょう',
    meaning: '곤경',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '苦境を乗り越える。', t: '곤경을 극복하다.' }
  },
  {
    id: 'n3-836',
    category: 'vocabulary',
    groupIndex: 42,
    kanji: '境界',
    reading: 'きょうかい',
    meaning: '경계함/조심함',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '周囲を警戒する。', t: '주위를 경계하다.' }
  },
  {
    id: 'n3-837',
    category: 'vocabulary',
    groupIndex: 42,
    kanji: '円満',
    reading: 'えんまん',
    meaning: '원만함',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '円満に解決する。', t: '원만하게 해결하다.' }
  }
];

const g42_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-838',
    category: 'vocabulary',
    groupIndex: 42,
    kanji: '境',
    reading: 'さかい',
    meaning: '경계/갈림길',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '生死의 境(さかい)を彷徨う。', t: '생사의 갈림길을 헤매다.' }
  },
  {
    id: 'n3-839',
    category: 'vocabulary',
    groupIndex: 42,
    kanji: '徐々に',
    reading: 'じょじょに',
    meaning: '서서히/조금씩',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '徐々に成果が現れる。', t: '서서히 성과가 나타나다.' }
  },
  {
    id: 'n3-840',
    category: 'vocabulary',
    groupIndex: 42,
    kanji: '次第に',
    reading: 'しだいに',
    meaning: '차츰/점점',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '風が次第に強くなる。', t: '바람이 점점 강해지다.' }
  }
];

// #region [GROUP 43] - ID n3-841 ~ n3-860

const g43_nouns: VocabItem[] = [
  {
    id: 'n3-841',
    category: 'vocabulary',
    groupIndex: 43,
    kanji: '原因',
    reading: 'げんいん',
    meaning: '원인',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '事故の原因を調べる。', t: '사고의 원인을 조사하다.' }
  },
  {
    id: 'n3-842',
    category: 'vocabulary',
    groupIndex: 43,
    kanji: '因縁',
    reading: 'いんねん',
    meaning: '인연/숙명',
    partOfSpeech: '명사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '不思議な因縁を感じる。', t: '신기한 인연을 느끼다.' }
  },
  {
    id: 'n3-843',
    category: 'vocabulary',
    groupIndex: 43,
    kanji: '要因',
    reading: 'よういん',
    meaning: '요인',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '成功の主要な要因。', t: '성공의 주요 요인.' }
  },
  {
    id: 'n3-844',
    category: 'vocabulary',
    groupIndex: 43,
    kanji: '因果',
    reading: 'いんが',
    meaning: '인과',
    partOfSpeech: '명사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '因果応報の理。', t: '인과응보의 이치.' }
  },
  {
    id: 'n3-845',
    category: 'vocabulary',
    groupIndex: 43,
    kanji: '由来',
    reading: 'ゆらい',
    meaning: '유래',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '言葉の由来を尋ねる。', t: '단어의 유래를 묻다.' }
  },
  {
    id: 'n3-846',
    category: 'vocabulary',
    groupIndex: 43,
    kanji: '結果',
    reading: 'けっか',
    meaning: '결과',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '努力が結果に繋がる。', t: '노력이 결과로 이어지다.' }
  },
  {
    id: 'n3-847',
    category: 'vocabulary',
    groupIndex: 43,
    kanji: '果実',
    reading: 'かじつ',
    meaning: '과실/열매',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '果実が実る。', t: '열매가 맺히다.' }
  },
  {
    id: 'n3-848',
    category: 'vocabulary',
    groupIndex: 43,
    kanji: '効果',
    reading: 'こうか',
    meaning: '효과',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '薬の効果が現れる。', t: '약의 효과가 나타나다.' }
  }
];

const g43_verbs: VocabItem[] = [
  {
    id: 'n3-849',
    category: 'vocabulary',
    groupIndex: 43,
    kanji: '因る',
    reading: 'よる',
    meaning: '기인하다/말미암다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '不注意に因る事故。', t: '부주의로 말미암은 사고.' }
  },
  {
    id: 'n3-850',
    category: 'vocabulary',
    groupIndex: 43,
    kanji: '果たす',
    reading: 'はたす',
    meaning: '완수하다/다하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '責任を果たす。', t: '책임을 다하다.' }
  },
  {
    id: 'n3-851',
    category: 'vocabulary',
    groupIndex: 43,
    kanji: '果てる',
    reading: 'はてる',
    meaning: '끝나다/다하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '楽しい時間は果てがない。', t: '즐거운 시간은 끝이 없다.' }
  },
  {
    id: 'n3-852',
    category: 'vocabulary',
    groupIndex: 43,
    kanji: '招く',
    reading: 'まねく',
    meaning: '초대하다/불러일으키다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '誤解를 招(まね)く。', t: '오해를 부르다.' }
  },
  {
    id: 'n3-853',
    category: 'vocabulary',
    groupIndex: 43,
    kanji: '生じる',
    reading: 'しょうじる',
    meaning: '생기다/발생하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '問題が生じる。', t: '문제가 생기다.' }
  },
  {
    id: 'n3-854',
    category: 'vocabulary',
    groupIndex: 43,
    kanji: '及ぼす',
    reading: 'およぼす',
    meaning: '미치게 하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '影響を及ぼす。', t: '영향을 미치다.' }
  }
];

const g43_adjectives: VocabItem[] = [
  {
    id: 'n3-855',
    category: 'vocabulary',
    groupIndex: 43,
    kanji: '果敢',
    reading: 'かかん',
    meaning: '과감함',
    partOfSpeech: '형용사(な)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '果敢に挑戦する。', t: '과감하게 도전하다.' }
  },
  {
    id: 'n3-856',
    category: 'vocabulary',
    groupIndex: 43,
    kanji: '必然',
    reading: 'ひつぜん',
    meaning: '필연적임',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '必然的な結果。', t: '필연적인 결과.' }
  },
  {
    id: 'n3-857',
    category: 'vocabulary',
    groupIndex: 43,
    kanji: '儚い',
    reading: 'はかない',
    meaning: '덧없다/허무하다',
    partOfSpeech: '형용사(い)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '儚い夢に終わる。', t: '덧없는 꿈으로 끝나다.' }
  }
];

const g43_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-858',
    category: 'vocabulary',
    groupIndex: 43,
    kanji: '因って',
    reading: 'よって',
    meaning: '따라서/그러므로',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '依って、ここに賞します。', t: '따라서, 이에 표창합니다.' }
  },
  {
    id: 'n3-859',
    category: 'vocabulary',
    groupIndex: 43,
    kanji: '結局',
    reading: 'けっきょく',
    meaning: '결국',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '結局、雨で行けなかった。', t: '결국 비 때문에 못 갔다.' }
  },
  {
    id: 'n3-860',
    category: 'vocabulary',
    groupIndex: 43,
    kanji: '果たして',
    reading: 'はたして',
    meaning: '과연/정말로',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '果たして成功するだろうか。', t: '과연 성공할 수 있을까.' }
  }
];

// #region [GROUP 44] - ID n3-861 ~ n3-880

const g44_nouns: VocabItem[] = [
  {
    id: 'n3-861',
    category: 'vocabulary',
    groupIndex: 44,
    kanji: '制度',
    reading: 'せいど',
    meaning: '제도',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '新しい制度を導入する。', t: '새로운 제도를 도입하다.' }
  },
  {
    id: 'n3-862',
    category: 'vocabulary',
    groupIndex: 44,
    kanji: '制限',
    reading: 'せいげん',
    meaning: '제한',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '速度制限を守る。', t: '속도 제한을 지키다.' }
  },
  {
    id: 'n3-863',
    category: 'vocabulary',
    groupIndex: 44,
    kanji: '制作',
    reading: 'せいさく',
    meaning: '제작(예술품 등)',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '映画を制作する。', t: '영화를 제작하다.' }
  },
  {
    id: 'n3-864',
    category: 'vocabulary',
    groupIndex: 44,
    kanji: '体制',
    reading: 'たいせい',
    meaning: '체제',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '受け入れ体制を整える。', t: '수용 체제를 갖추다.' }
  },
  {
    id: 'n3-865',
    category: 'vocabulary',
    groupIndex: 44,
    kanji: '制服',
    reading: 'せいふく',
    meaning: '제복/교복',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '制服を着て登校する。', t: '교복을 입고 등교하다.' }
  },
  {
    id: 'n3-866',
    category: 'vocabulary',
    groupIndex: 44,
    kanji: '節制',
    reading: 'せっせい',
    meaning: '절제',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '暴飲暴食を節制する。', t: '폭음폭식을 절제하다.' }
  },
  {
    id: 'n3-867',
    category: 'vocabulary',
    groupIndex: 44,
    kanji: '抑制',
    reading: 'よくせい',
    meaning: '억제',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'インフレを抑制する。', t: '인플레이션을 억제하다.' }
  },
  {
    id: 'n3-868',
    category: 'vocabulary',
    groupIndex: 44,
    kanji: '管制',
    reading: 'かんせい',
    meaning: '관제',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '航空管制塔。', t: '항공 관제탑.' }
  }
];

const g44_verbs: VocabItem[] = [
  {
    id: 'n3-869',
    category: 'vocabulary',
    groupIndex: 44,
    kanji: '制する',
    reading: 'せいする',
    meaning: '제압하다/누르다',
    partOfSpeech: '동사(3그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '先手を制する。', t: '선수를 치다(제압하다).' }
  },
  {
    id: 'n3-870',
    category: 'vocabulary',
    groupIndex: 44,
    kanji: '限る',
    reading: 'かぎる',
    meaning: '한정하다/제한하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '参加者を限る。', t: '참가자를 한정하다.' }
  },
  {
    id: 'n3-871',
    category: 'vocabulary',
    groupIndex: 44,
    kanji: '縛る',
    reading: 'しばる',
    meaning: '묶다/결박하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '規則で縛る。', t: '규칙으로 얽매다(묶다).' }
  },
  {
    id: 'n3-872',
    category: 'vocabulary',
    groupIndex: 44,
    kanji: '強いる',
    reading: 'しいる',
    meaning: '강요하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '無理な仕事を強いる。', t: '무리한 일을 강요하다.' }
  },
  {
    id: 'n3-873',
    category: 'vocabulary',
    groupIndex: 44,
    kanji: '設ける',
    reading: 'もうける',
    meaning: '설치하다/마련하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '相談窓口を設ける。', t: '상담 창구를 마련하다.' }
  },
  {
    id: 'n3-874',
    category: 'vocabulary',
    groupIndex: 44,
    kanji: '定める',
    reading: 'さだめる',
    meaning: '정하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '法律を定める。', t: '법률을 정하다.' }
  }
];

const g44_adjectives: VocabItem[] = [
  {
    id: 'n3-875',
    category: 'vocabulary',
    groupIndex: 44,
    kanji: '強制',
    reading: 'きょうせい',
    meaning: '강제적임',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '強制的な参加。', t: '강제적인 참가.' }
  },
  {
    id: 'n3-876',
    category: 'vocabulary',
    groupIndex: 44,
    kanji: '不自由',
    reading: 'ふじゆう',
    meaning: '불편함/자유롭지 못함',
    partOfSpeech: '형용사(な)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '生活に不自由はない。', t: '생활에 불편함은 없다.' }
  },
  {
    id: 'n3-877',
    category: 'vocabulary',
    groupIndex: 44,
    kanji: '窮屈',
    reading: 'きゅうくつ',
    meaning: '거북함/답답함',
    partOfSpeech: '형용사(な)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '窮屈な思いをする。', t: '거북한 느낌이 들다.' }
  }
];

const g44_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-878',
    category: 'vocabulary',
    groupIndex: 44,
    kanji: '専ら',
    reading: 'もっぱら',
    meaning: '오로지/한결같이',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '休日は専ら読書をする。', t: '휴일은 오로지 독서를 한다.' }
  },
  {
    id: 'n3-879',
    category: 'vocabulary',
    groupIndex: 44,
    kanji: '敢えて',
    reading: 'あえて',
    meaning: '감히/굳이',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '敢えて困難に挑む。', t: '굳이 어려움에 도전하다.' }
  },
  {
    id: 'n3-880',
    category: 'vocabulary',
    groupIndex: 44,
    kanji: '一律',
    reading: 'いちりつ',
    meaning: '일률적으로',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '一律に禁止する。', t: '일률적으로 금지하다.' }
  }
];

// #region [GROUP 45] - ID n3-881 ~ n3-900

const g45_nouns: VocabItem[] = [
  {
    id: 'n3-881',
    category: 'vocabulary',
    groupIndex: 45,
    kanji: '状態',
    reading: 'じょうたい',
    meaning: '상태',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '保存状態が良い。', t: '보존 상태가 좋다.' }
  },
  {
    id: 'n3-882',
    category: 'vocabulary',
    groupIndex: 45,
    kanji: '近況',
    reading: 'きんきょう',
    meaning: '근황',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '近況を報告する。', t: '근황을 보고하다.' }
  },
  {
    id: 'n3-883',
    category: 'vocabulary',
    groupIndex: 45,
    kanji: '態度',
    reading: 'たいど',
    meaning: '태도',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '真面目な態度で臨む。', t: '성실한 태도로 임하다.' }
  },
  {
    id: 'n3-884',
    category: 'vocabulary',
    groupIndex: 45,
    kanji: '事態',
    reading: 'じたい',
    meaning: '사태',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '緊急事態が発生する。', t: '긴급 사태가 발생하다.' }
  },
  {
    id: 'n3-885',
    category: 'vocabulary',
    groupIndex: 45,
    kanji: '容態',
    reading: 'ようだい',
    meaning: '병세/환자 상태',
    partOfSpeech: '명사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '患者の容態が急変する。', t: '환자의 상태가 급변하다.' }
  },
  {
    id: 'n3-886',
    category: 'vocabulary',
    groupIndex: 45,
    kanji: '実態',
    reading: 'じったい',
    meaning: '실태',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '実態を調査する。', t: '실태를 조사하다.' }
  },
  {
    id: 'n3-887',
    category: 'vocabulary',
    groupIndex: 45,
    kanji: '生態',
    reading: 'せいたい',
    meaning: '생태',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '生物の生態系。', t: '생물의 생태계.' }
  },
  {
    id: 'n3-888',
    category: 'vocabulary',
    groupIndex: 45,
    kanji: '形態',
    reading: 'けいたい',
    meaning: '형태',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '生活の形態が変わる。', t: '생활 형태가 변하다.' }
  }
];

const g45_verbs: VocabItem[] = [
  {
    id: 'n3-889',
    category: 'vocabulary',
    groupIndex: 45,
    kanji: '振る舞う',
    reading: 'ふるまう',
    meaning: '행동하다/대접하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '紳士的に振る舞う。', t: '신사적으로 행동하다.' }
  },
  {
    id: 'n3-890',
    category: 'vocabulary',
    groupIndex: 45,
    kanji: '構える',
    reading: 'かまえる',
    meaning: '자세를 잡다/준비하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'のんびりと構える。', t: '유유자적하게 자세를 잡다(마음을 먹다).' }
  },
  {
    id: 'n3-891',
    category: 'vocabulary',
    groupIndex: 45,
    kanji: '繕う',
    reading: 'つくろう',
    meaning: '수선하다/겉치레하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '体裁を繕う。', t: '체면을 차리다(겉을 꾸미다).' }
  },
  {
    id: 'n3-892',
    category: 'vocabulary',
    groupIndex: 45,
    kanji: '装う',
    reading: 'よそおう',
    meaning: '치장하다/가장하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '平静を装う。', t: '평온함을 가장하다.' }
  },
  {
    id: 'n3-893',
    category: 'vocabulary',
    groupIndex: 45,
    kanji: '保つ',
    reading: 'たもつ',
    meaning: '유지하다/지키다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '健康を保つ。', t: '건강을 유지하다.' }
  },
  {
    id: 'n3-894',
    category: 'vocabulary',
    groupIndex: 45,
    kanji: '化ける',
    reading: 'ばける',
    meaning: '둔갑하다/변하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '狐が人に化ける。', t: '여우가 사람으로 둔갑하다.' }
  }
];

const g45_adjectives: VocabItem[] = [
  {
    id: 'n3-895',
    category: 'vocabulary',
    groupIndex: 45,
    kanji: '変態',
    reading: 'へんたい',
    meaning: '변태(생태적 변화)/이상함',
    partOfSpeech: '형용사(な)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '昆虫の完全変態。', t: '곤충의 완전 변태.' }
  },
  {
    id: 'n3-896',
    category: 'vocabulary',
    groupIndex: 45,
    kanji: '平穏',
    reading: 'へいおん',
    meaning: '평온함',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '平穏な日々を過ごす。', t: '평온한 나날을 보내다.' }
  },
  {
    id: 'n3-897',
    category: 'vocabulary',
    groupIndex: 45,
    kanji: '滑らか',
    reading: 'なめらか',
    meaning: '매끄러움/부드러움',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '肌が滑らかだ。', t: '피부가 매끄럽다.' }
  }
];

const g45_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-898',
    category: 'vocabulary',
    groupIndex: 45,
    kanji: 'そのまま',
    reading: 'そのまま',
    meaning: '그대로',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'そのままにしておく。', t: '그대로 두다.' }
  },
  {
    id: 'n3-899',
    category: 'vocabulary',
    groupIndex: 45,
    kanji: 'ありのまま',
    reading: 'ありのまま',
    meaning: '있는 그대로',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'ありのままの事実。', t: '있는 그대로의 사실.' }
  },
  {
    id: 'n3-900',
    category: 'vocabulary',
    groupIndex: 45,
    kanji: 'いかにも',
    reading: 'いかにも',
    meaning: '정말로/과연',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'いかにも残念そうだ。', t: '정말로 아쉬운 듯하다.' }
  }
];

// #region [GROUP 46] - ID n3-901 ~ n3-920

const g46_nouns: VocabItem[] = [
  {
    id: 'n3-901',
    category: 'vocabulary',
    groupIndex: 46,
    kanji: '比較',
    reading: 'ひかく',
    meaning: '비교',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '他人の成績と比較する。', t: '타인의 성적과 비교하다.' }
  },
  {
    id: 'n3-902',
    category: 'vocabulary',
    groupIndex: 46,
    kanji: '対比',
    reading: 'たいひ',
    meaning: '대비',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '新旧の作品を対比させる。', t: '신구 작품을 대비시키다.' }
  },
  {
    id: 'n3-903',
    category: 'vocabulary',
    groupIndex: 46,
    kanji: '比率',
    reading: 'ひりつ',
    meaning: '비율',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '男女の比率を調べる。', t: '남녀의 비율을 조사하다.' }
  },
  {
    id: 'n3-904',
    category: 'vocabulary',
    groupIndex: 46,
    kanji: '比例',
    reading: 'ひれい',
    meaning: '비례',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '努力に比例して成果が出る。', t: '노력에 비례해서 성과가 나오다.' }
  },
  {
    id: 'n3-905',
    category: 'vocabulary',
    groupIndex: 46,
    kanji: '程度',
    reading: 'ていど',
    meaning: '정도/수준',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '冗談にも程度がある。', t: '농담에도 정도가 있다.' }
  },
  {
    id: 'n3-906',
    category: 'vocabulary',
    groupIndex: 46,
    kanji: '限度',
    reading: 'げんど',
    meaning: '한도',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '我慢にも限度がある。', t: '참는 데도 한도가 있다.' }
  },
  {
    id: 'n3-907',
    category: 'vocabulary',
    groupIndex: 46,
    kanji: '温度',
    reading: 'おんど',
    meaning: '온도',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '温度の変化に敏感だ。', t: '온도 변화에 민감하다.' }
  },
  {
    id: 'n3-908',
    category: 'vocabulary',
    groupIndex: 46,
    kanji: '尺度',
    reading: 'しゃくど',
    meaning: '척도/기준',
    partOfSpeech: '명사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '幸福の尺度は人それぞれだ。', t: '행복의 척도는 사람마다 제각각이다.' }
  }
];

const g46_verbs: VocabItem[] = [
  {
    id: 'n3-909',
    category: 'vocabulary',
    groupIndex: 46,
    kanji: '比べる',
    reading: 'くらべる',
    meaning: '비교하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '前回の結果と比べる。', t: '지난번 결과와 비교하다.' }
  },
  {
    id: 'n3-910',
    category: 'vocabulary',
    groupIndex: 46,
    kanji: '量る',
    reading: 'はかる',
    meaning: '무게/양을 재다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '体重を量る。', t: '체중을 재다.' }
  },
  {
    id: 'n3-911',
    category: 'vocabulary',
    groupIndex: 46,
    kanji: '測る',
    reading: 'はかる',
    meaning: '길이/넓이를 재다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '面積を測る。', t: '면적을 재다.' }
  },
  {
    id: 'n3-912',
    category: 'vocabulary',
    groupIndex: 46,
    kanji: '超える',
    reading: 'こえる',
    meaning: '넘다/초과하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '予想を超える。', t: '예상을 넘어서다.' }
  },
  {
    id: 'n3-913',
    category: 'vocabulary',
    groupIndex: 46,
    kanji: '越える',
    reading: 'こえる',
    meaning: '넘다/건너다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '山を越える。', t: '산을 넘다.' }
  },
  {
    id: 'n3-914',
    category: 'vocabulary',
    groupIndex: 46,
    kanji: '及ぶ',
    reading: 'およぶ',
    meaning: '미치다/달하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '想像も及ばない。', t: '상상도 할 수 없다(미치지 못한다).' }
  }
];

const g46_adjectives: VocabItem[] = [
  {
    id: 'n3-915',
    category: 'vocabulary',
    groupIndex: 46,
    kanji: '比較的',
    reading: 'ひかくてき',
    meaning: '비교적',
    partOfSpeech: '형용사(な)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '比較的簡単な問題。', t: '비교적 간단한 문제.' }
  },
  {
    id: 'n3-916',
    category: 'vocabulary',
    groupIndex: 46,
    kanji: '過度',
    reading: 'かど',
    meaning: '과도함',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '過度な期待はしない。', t: '과도한 기대는 하지 않는다.' }
  },
  {
    id: 'n3-917',
    category: 'vocabulary',
    groupIndex: 46,
    kanji: '適度',
    reading: 'てきど',
    meaning: '적당함/알맞음',
    partOfSpeech: '형용사(な)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '適度な運動を心がける。', t: '적당한 운동을 유념하다.' }
  }
];

const g46_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-918',
    category: 'vocabulary',
    groupIndex: 46,
    kanji: '割に',
    reading: 'わりに',
    meaning: '생각보다/비교적',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '値段の割に質がいい。', t: '가격에 비해 질이 좋다.' }
  },
  {
    id: 'n3-919',
    category: 'vocabulary',
    groupIndex: 46,
    kanji: '割合に',
    reading: 'わりあいに',
    meaning: '비교적',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '今日は割合に空いている。', t: '오늘은 비교적 한가하다.' }
  },
  {
    id: 'n3-920',
    category: 'vocabulary',
    groupIndex: 46,
    kanji: 'せいぜい',
    reading: 'せいぜい',
    meaning: '기껏해야',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '歩いてもせいぜい十分だ。', t: '걸어도 기껏해야 10분이다.' }
  }
];

// #region [GROUP 47] - ID n3-921 ~ n3-940

const g47_nouns: VocabItem[] = [
  {
    id: 'n3-921',
    category: 'vocabulary',
    groupIndex: 47,
    kanji: '信頼',
    reading: 'しんらい',
    meaning: '신뢰',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '部下を信頼する。', t: '부하를 신뢰하다.' }
  },
  {
    id: 'n3-922',
    category: 'vocabulary',
    groupIndex: 47,
    kanji: '信用',
    reading: 'しんよう',
    meaning: '신용',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '信用を失う。', t: '신용을 잃다.' }
  },
  {
    id: 'n3-923',
    category: 'vocabulary',
    groupIndex: 47,
    kanji: '自信',
    reading: 'じしん',
    meaning: '자신(감)',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '自分に自信を持つ。', t: '자신에게 자신감을 갖다.' }
  },
  {
    id: 'n3-924',
    category: 'vocabulary',
    groupIndex: 47,
    kanji: '信念',
    reading: 'しんねん',
    meaning: '신념',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '強い信念を貫く。', t: '강한 신념을 관철하다.' }
  },
  {
    id: 'n3-925',
    category: 'vocabulary',
    groupIndex: 47,
    kanji: '信仰',
    reading: 'しんこう',
    meaning: '신앙',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '宗教を信仰する。', t: '종교를 신앙하다.' }
  },
  {
    id: 'n3-926',
    category: 'vocabulary',
    groupIndex: 47,
    kanji: '依頼',
    reading: 'いらい',
    meaning: '의뢰',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '仕事を依頼する。', t: '일을 의뢰하다.' }
  },
  {
    id: 'n3-927',
    category: 'vocabulary',
    groupIndex: 47,
    kanji: '依存',
    reading: 'いぞん',
    meaning: '의존',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'スマホに依存する。', t: '스마트폰에 의존하다.' }
  },
  {
    id: 'n3-928',
    category: 'vocabulary',
    groupIndex: 47,
    kanji: '頼み',
    reading: 'たのみ',
    meaning: '부탁/기대',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '一生のお願い(頼み)だ。', t: '평생의 부탁이다.' }
  }
];

const g47_verbs: VocabItem[] = [
  {
    id: 'n3-929',
    category: 'vocabulary',
    groupIndex: 47,
    kanji: '信じる',
    reading: 'しんじる',
    meaning: '믿다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '成功を信じている。', t: '성공을 믿고 있다.' }
  },
  {
    id: 'n3-930',
    category: 'vocabulary',
    groupIndex: 47,
    kanji: '頼る',
    reading: 'たよる',
    meaning: '의지하다/기대다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '親戚を頼って上京する。', t: '친척을 의지해 상경하다.' }
  },
  {
    id: 'n3-931',
    category: 'vocabulary',
    groupIndex: 47,
    kanji: '頼む',
    reading: 'たのむ',
    meaning: '부탁하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '伝言を頼む。', t: '전갈을 부탁하다.' }
  },
  {
    id: 'n3-932',
    category: 'vocabulary',
    groupIndex: 47,
    kanji: '疑う',
    reading: 'うたがう',
    meaning: '의심하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '目を疑う光景。', t: '눈을 의심케 하는 광경.' }
  },
  {
    id: 'n3-933',
    category: 'vocabulary',
    groupIndex: 47,
    kanji: '任せる',
    reading: 'まかせる',
    meaning: '맡기다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '運に任せる。', t: '운에 맡기다.' }
  },
  {
    id: 'n3-934',
    category: 'vocabulary',
    groupIndex: 47,
    kanji: '敬う',
    reading: 'うやまう',
    meaning: '공경하다/숭배하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'お年寄りを敬う。', t: '어르신을 공경하다.' }
  }
];

const g47_adjectives: VocabItem[] = [
  {
    id: 'n3-935',
    category: 'vocabulary',
    groupIndex: 47,
    kanji: '頼もしい',
    reading: 'たのもしい',
    meaning: '믿음직하다',
    partOfSpeech: '형용사(い)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '頼もしい助っ人。', t: '믿음직한 조력자.' }
  },
  {
    id: 'n3-936',
    category: 'vocabulary',
    groupIndex: 47,
    kanji: '心強い',
    reading: 'こころづよい',
    meaning: '든든하다/마음이 놓이다',
    partOfSpeech: '형용사(い)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'あなたがいると心強い。', t: '당신이 있으니 든든하다.' }
  },
  {
    id: 'n3-937',
    category: 'vocabulary',
    groupIndex: 47,
    kanji: '怪しい',
    reading: 'あやしい',
    meaning: '수상하다/의심스럽다',
    partOfSpeech: '형용사(い)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '怪しい人物を見かける。', t: '수상한 인물을 발견하다.' }
  }
];

const g47_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-938',
    category: 'vocabulary',
    groupIndex: 47,
    kanji: 'まさか',
    reading: 'まさか',
    meaning: '설마',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'まさか失敗するとは。', t: '설마 실패할 줄이야.' }
  },
  {
    id: 'n3-939',
    category: 'vocabulary',
    groupIndex: 47,
    kanji: 'どうしても',
    reading: 'どうしても',
    meaning: '무슨 일이 있어도/아무리 해도',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'どうしても思い出せない。', t: '도무지 기억나지 않는다.' }
  },
  {
    id: 'n3-940',
    category: 'vocabulary',
    groupIndex: 47,
    kanji: '案の定',
    reading: 'あんのじょう',
    meaning: '생각한 대로/아니나 다를까',
    partOfSpeech: '부사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '案の定、雨が降り出した。', t: '아니나 다를까 비가 내리기 시작했다.' }
  }
];

// #region [GROUP 48] - ID n3-941 ~ n3-960

const g48_nouns: VocabItem[] = [
  {
    id: 'n3-941',
    category: 'vocabulary',
    groupIndex: 48,
    kanji: '協力',
    reading: 'きょうりょく',
    meaning: '협력',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '全員で協力する。', t: '전원이 협력하다.' }
  },
  {
    id: 'n3-942',
    category: 'vocabulary',
    groupIndex: 48,
    kanji: '妥協',
    reading: 'だきょう',
    meaning: '타협',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '決して妥協しない。', t: '결코 타협하지 않는다.' }
  },
  {
    id: 'n3-943',
    category: 'vocabulary',
    groupIndex: 48,
    kanji: '同調',
    reading: 'どうちょう',
    meaning: '동조',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '意見に同調する。', t: '의견에 동조하다.' }
  },
  {
    id: 'n3-944',
    category: 'vocabulary',
    groupIndex: 48,
    kanji: '和解',
    reading: 'わかい',
    meaning: '화해',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '裁判で和解する。', t: '재판에서 화해하다.' }
  },
  {
    id: 'n3-945',
    category: 'vocabulary',
    groupIndex: 48,
    kanji: '仲直り',
    reading: 'なかなおり',
    meaning: '화해',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '喧嘩の後に仲直りする。', t: '싸운 뒤에 화해하다.' }
  },
  {
    id: 'n3-946',
    category: 'vocabulary',
    groupIndex: 48,
    kanji: '交渉',
    reading: 'こうしょう',
    meaning: '교섭/협상',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '条件を交渉する。', t: '조건을 협상하다.' }
  },
  {
    id: 'n3-947',
    category: 'vocabulary',
    groupIndex: 48,
    kanji: '抗議',
    reading: 'こうぎ',
    meaning: '항의',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '不当な判決に抗議する。', t: '부당한 판결에 항의하다.' }
  },
  {
    id: 'n3-948',
    category: 'vocabulary',
    groupIndex: 48,
    kanji: '摩擦',
    reading: 'まさつ',
    meaning: '마찰',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '貿易摩擦が起きる。', t: '무역 마찰이 일어나다.' }
  }
];

const g48_verbs: VocabItem[] = [
  {
    id: 'n3-949',
    category: 'vocabulary',
    groupIndex: 48,
    kanji: '助ける',
    reading: 'たすける',
    meaning: '돕다/구하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '困っている人を助ける。', t: '어려운 사람을 돕다.' }
  },
  {
    id: 'n3-950',
    category: 'vocabulary',
    groupIndex: 48,
    kanji: '争う',
    reading: 'あらがう',
    meaning: '다투다/싸우다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '一位を争う。', t: '1위를 다투다.' }
  },
  {
    id: 'n3-951',
    category: 'vocabulary',
    groupIndex: 48,
    kanji: '逆らう',
    reading: 'さからう',
    meaning: '거스르다/반항하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '時代の流れに逆らう。', t: '시대의 흐름에 거스르다.' }
  },
  {
    id: 'n3-952',
    category: 'vocabulary',
    groupIndex: 48,
    kanji: '励ます',
    reading: 'はげます',
    meaning: '격려하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '落ち込んでいる友を励ます。', t: '낙담한 친구를 격려하다.' }
  },
  {
    id: 'n3-953',
    category: 'vocabulary',
    groupIndex: 48,
    kanji: '慰める',
    reading: 'なぐさめる',
    meaning: '위로하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '泣いている子を慰める。', t: '울고 있는 아이를 위로하다.' }
  },
  {
    id: 'n3-954',
    category: 'vocabulary',
    groupIndex: 48,
    kanji: '責める',
    reading: 'せめる',
    meaning: '비난하다/나무라다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '自分を責めないでください。', t: '자책하지 마세요.' }
  }
];

const g48_adjectives: VocabItem[] = [
  {
    id: 'n3-955',
    category: 'vocabulary',
    groupIndex: 48,
    kanji: '友好的',
    reading: 'ゆうこうてき',
    meaning: '우호적임',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '友好的な関係を築く।', t: '우호적인 관계를 쌓다.' }
  },
  {
    id: 'n3-956',
    category: 'vocabulary',
    groupIndex: 48,
    kanji: '険悪',
    reading: 'けんあく',
    meaning: '험악함',
    partOfSpeech: '형용사(な)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '険悪なムードが漂う。', t: '험악한 분위기가 감돌다.' }
  },
  {
    id: 'n3-957',
    category: 'vocabulary',
    groupIndex: 48,
    kanji: '好意的',
    reading: 'こういてき',
    meaning: '호의적임',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '好意的な反応を示す。', t: '호의적인 반응을 보이다.' }
  }
];

const g48_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-958',
    category: 'vocabulary',
    groupIndex: 48,
    kanji: '互いに',
    reading: 'たがいに',
    meaning: '서로',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '互いに助け合う。', t: '서로 돕다.' }
  },
  {
    id: 'n3-959',
    category: 'vocabulary',
    groupIndex: 48,
    kanji: '一斉に',
    reading: 'いっせいに',
    meaning: '일제히',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '鳥が一斉に飛び立つ。', t: '새가 일제히 날아오르다.' }
  },
  {
    id: 'n3-960',
    category: 'vocabulary',
    groupIndex: 48,
    kanji: '交互に',
    reading: 'こうごに',
    meaning: '번갈아/교대로',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '二人で交互に運転する。', t: '둘이서 교대로 운전하다.' }
  }
];
// #region [GROUP 49] - ID n3-961 ~ n3-980

const g49_nouns: VocabItem[] = [
  {
    id: 'n3-961',
    category: 'vocabulary',
    groupIndex: 49,
    kanji: '固体',
    reading: 'こたい',
    meaning: '고체',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '水が凍って固体になる。', t: '물이 얼어서 고체가 되다.' }
  },
  {
    id: 'n3-962',
    category: 'vocabulary',
    groupIndex: 49,
    kanji: '液体',
    reading: 'えきたい',
    meaning: '액체',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'この液体は引火しやすい。', t: '이 액체는 인화되기 쉽다.' }
  },
  {
    id: 'n3-963',
    category: 'vocabulary',
    groupIndex: 49,
    kanji: '気体',
    reading: 'きたい',
    meaning: '기체',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '空気を熱して気体にする。', t: '공기를 가열하여 기체로 만들다.' }
  },
  {
    id: 'n3-964',
    category: 'vocabulary',
    groupIndex: 49,
    kanji: '原料',
    reading: 'げんりょう',
    meaning: '원료',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'ビールの原料は麦だ。', t: '맥주의 원료는 보리다.' }
  },
  {
    id: 'n3-965',
    category: 'vocabulary',
    groupIndex: 49,
    kanji: '成分',
    reading: 'せいぶん',
    meaning: '성분',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '成分表示を確認する。', t: '성분 표시를 확인하다.' }
  },
  {
    id: 'n3-966',
    category: 'vocabulary',
    groupIndex: 49,
    kanji: '性質',
    reading: 'せいしつ',
    meaning: '성질/특징',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '燃えやすい性質がある。', t: '타기 쉬운 성질이 있다.' }
  },
  {
    id: 'n3-967',
    category: 'vocabulary',
    groupIndex: 49,
    kanji: '構造',
    reading: 'こうぞう',
    meaning: '구조',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '社会의 構造(こうぞう)を学ぶ。', t: '사회의 구조를 배우다.' }
  },
  {
    id: 'n3-968',
    category: 'vocabulary',
    groupIndex: 49,
    kanji: '機能',
    reading: 'きのう',
    meaning: '기능',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '新製品の機能を試す。', t: '신제품의 기능을 시험하다.' }
  }
];

const g49_verbs: VocabItem[] = [
  {
    id: 'n3-969',
    category: 'vocabulary',
    groupIndex: 49,
    kanji: '混ざる',
    reading: 'まざる',
    meaning: '섞이다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '水と油は混ざらない。', t: '물과 기름은 섞이지 않는다.' }
  },
  {
    id: 'n3-970',
    category: 'vocabulary',
    groupIndex: 49,
    kanji: '固まる',
    reading: 'かたまる',
    meaning: '굳어지다/단단해지다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'コンクリートが固まる。', t: '콘크리트가 굳다.' }
  },
  {
    id: 'n3-971',
    category: 'vocabulary',
    groupIndex: 49,
    kanji: '溶ける',
    reading: 'とける',
    meaning: '녹다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '氷が溶けて水になる。', t: '얼음이 녹아 물이 되다.' }
  },
  {
    id: 'n3-972',
    category: 'vocabulary',
    groupIndex: 49,
    kanji: '濁る',
    reading: 'にごる',
    meaning: '탁해지다/흐려지다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '大雨で川が濁る。', t: '폭우로 강물이 탁해지다.' }
  },
  {
    id: 'n3-973',
    category: 'vocabulary',
    groupIndex: 49,
    kanji: '澄む',
    reading: 'すむ',
    meaning: '맑아지다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '澄んだ空気をおいしく吸う。', t: '맑은 공기를 맛있게 마시다.' }
  },
  {
    id: 'n3-974',
    category: 'vocabulary',
    groupIndex: 49,
    kanji: '膨らむ',
    reading: 'ふくらむ',
    meaning: '부풀다/부풀어 오르다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '夢が大きく膨らむ。', t: '꿈이 크게 부풀다.' }
  }
];

const g49_adjectives: VocabItem[] = [
  {
    id: 'n3-975',
    category: 'vocabulary',
    groupIndex: 49,
    kanji: '透明',
    reading: 'とうめい',
    meaning: '투명함',
    partOfSpeech: '형용사(な)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '透明なガラスケース。', t: '투명한 유리 케이스.' }
  },
  {
    id: 'n3-976',
    category: 'vocabulary',
    groupIndex: 49,
    kanji: '均一',
    reading: 'きんいつ',
    meaning: '균일함',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '店内全品百円均一。', t: '점내 전 제품 백 엔 균일가.' }
  },
  {
    id: 'n3-977',
    category: 'vocabulary',
    groupIndex: 49,
    kanji: '巨大',
    reading: 'きょだい',
    meaning: '거대함',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '巨大なビルが建つ。', t: '거대한 빌딩이 세워지다.' }
  }
];

const g49_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-978',
    category: 'vocabulary',
    groupIndex: 49,
    kanji: '徐々に',
    reading: 'じょじょに',
    meaning: '서서히/조금씩',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '事態が徐々に改善する。', t: '사태가 서서히 개선되다.' }
  },
  {
    id: 'n3-979',
    category: 'vocabulary',
    groupIndex: 49,
    kanji: '着々と',
    reading: 'ちゃくちゃくと',
    meaning: '착착/순조롭게',
    partOfSpeech: '부사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '準備を着々と進める。', t: '준비를 착착 진행하다.' }
  },
  {
    id: 'n3-980',
    category: 'vocabulary',
    groupIndex: 49,
    kanji: '着々',
    reading: 'ちゃくちゃく',
    meaning: '척척/차례차례',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '工事は着々と進んでいる。', t: '공사는 척척 진행되고 있다.' }
  }
];

// #region [GROUP 50] - ID n3-981 ~ n3-1000

const g50_nouns: VocabItem[] = [
  {
    id: 'n3-981',
    category: 'vocabulary',
    groupIndex: 50,
    kanji: '意識',
    reading: 'いしき',
    meaning: '의식',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '意識を失う。', t: '의식을 잃다.' }
  },
  {
    id: 'n3-982',
    category: 'vocabulary',
    groupIndex: 50,
    kanji: '意志',
    reading: 'いし',
    meaning: '의지',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '強い意志を持つ。', t: '강한 의지를 갖다.' }
  },
  {
    id: 'n3-983',
    category: 'vocabulary',
    groupIndex: 50,
    kanji: '意図',
    reading: 'いと',
    meaning: '의도',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '意図を読み取る。', t: '의도를 파악하다.' }
  },
  {
    id: 'n3-984',
    category: 'vocabulary',
    groupIndex: 50,
    kanji: '見解',
    reading: 'けんかい',
    meaning: '견해/의견',
    partOfSpeech: '명사',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '政府の見解を示す。', t: '정부의 견해를 나타내다.' }
  },
  {
    id: 'n3-985',
    category: 'vocabulary',
    groupIndex: 50,
    kanji: '思考',
    reading: 'しこう',
    meaning: '사고/생각',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '思考力を養う。', t: '사고력을 기르다.' }
  },
  {
    id: 'n3-986',
    category: 'vocabulary',
    groupIndex: 50,
    kanji: '空想',
    reading: 'くうそう',
    meaning: '공상',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '空想の世界に浸る。', t: '공상의 세계에 잠기다.' }
  },
  {
    id: 'n3-987',
    category: 'vocabulary',
    groupIndex: 50,
    kanji: '理想',
    reading: 'りそう',
    meaning: '이상',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '理想を追求する。', t: '이상을 추구하다.' }
  },
  {
    id: 'n3-988',
    category: 'vocabulary',
    groupIndex: 50,
    kanji: '実績',
    reading: 'じっせき',
    meaning: '실적',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '過去の実績を評価する。', t: '과거의 실적을 평가하다.' }
  }
];

const g50_verbs: VocabItem[] = [
  {
    id: 'n3-989',
    category: 'vocabulary',
    groupIndex: 50,
    kanji: '試みる',
    reading: 'こころみる',
    meaning: '시도하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '新しい方法を試みる。', t: '새로운 방법을 시도하다.' }
  },
  {
    id: 'n3-990',
    category: 'vocabulary',
    groupIndex: 50,
    kanji: '企てる',
    reading: 'くわだてる',
    meaning: '계획하다/꾀하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '脱走を企てる。', t: '탈주를 꾀하다.' }
  },
  {
    id: 'n3-991',
    category: 'vocabulary',
    groupIndex: 50,
    kanji: '見なす',
    reading: 'みなす',
    meaning: '간주하다/여기다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '欠席と見なす。', t: '결석으로 간주하다.' }
  },
  {
    id: 'n3-992',
    category: 'vocabulary',
    groupIndex: 50,
    kanji: '悟る',
    reading: 'さとる',
    meaning: '깨닫다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '死期を悟る。', t: '죽을 때를 깨닫다.' }
  },
  {
    id: 'n3-993',
    category: 'vocabulary',
    groupIndex: 50,
    kanji: '省みる',
    reading: 'かえりみる',
    meaning: '돌이켜보다/반성하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '自らを省みる。', t: '스스로를 돌이켜보다.' }
  },
  {
    id: 'n3-994',
    category: 'vocabulary',
    groupIndex: 50,
    kanji: '蓄える',
    reading: 'たくわえる',
    meaning: '저장하다/기르다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '知識を蓄える。', t: '지식을 쌓다(저장하다).' }
  }
];

const g50_adjectives: VocabItem[] = [
  {
    id: 'n3-995',
    category: 'vocabulary',
    groupIndex: 50,
    kanji: '合理的',
    reading: 'ごうりてき',
    meaning: '합리적임',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '合理的な判断を下す。', t: '합리적인 판단을 내리다.' }
  },
  {
    id: 'n3-996',
    category: 'vocabulary',
    groupIndex: 50,
    kanji: '主観的',
    reading: 'しゅかんてき',
    meaning: '주관적임',
    partOfSpeech: '형용사(な)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'それは主観的な意見だ。', t: '그것은 주관적인 의견이다.' }
  },
  {
    id: 'n3-997',
    category: 'vocabulary',
    groupIndex: 50,
    kanji: '客観적',
    reading: 'きゃっかんてき',
    meaning: '객관적임',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '客観的な視点。', t: '객관적인 시점.' }
  }
];

const g50_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-998',
    category: 'vocabulary',
    groupIndex: 50,
    kanji: '遂に',
    reading: 'ついに',
    meaning: '드디어/마침내',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '遂に完成した。', t: '드디어 완성했다.' }
  },
  {
    id: 'n3-999',
    category: 'vocabulary',
    groupIndex: 50,
    kanji: '結局',
    reading: 'けっきょく',
    meaning: '결국',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '結局、遅刻した。', t: '결국 지각했다.' }
  },
  {
    id: 'n3-1000',
    category: 'vocabulary',
    groupIndex: 50,
    kanji: '完結',
    reading: 'かんけつ',
    meaning: '완결',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '物語が完結する。', t: '이야기가 완결되다.' }
  }
];

/**
 * N3 Vocabulary Part 2 (ID 1001~1500)
 * 파일명: vocab_n3_1001to1500.ts
 */

// #region [GROUP 51] - ID n3-1001 ~ n3-1020

const g51_nouns: VocabItem[] = [
  {
    id: 'n3-1001',
    category: 'vocabulary',
    groupIndex: 51,
    kanji: '影響',
    reading: 'えいきょう',
    meaning: '영향',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '環境が子供に影響を与える。', t: '환경이 아이에게 영향을 주다.' }
  },
  {
    id: 'n3-1002',
    category: 'vocabulary',
    groupIndex: 51,
    kanji: '効果',
    reading: 'こうか',
    meaning: '효과',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'ダイエットの効果が出る。', t: '다이어트 효과가 나타나다.' }
  },
  {
    id: 'n3-1003',
    category: 'vocabulary',
    groupIndex: 51,
    kanji: '成果',
    reading: 'せいか',
    meaning: '성과',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '日頃の練習の成果を見せる。', t: '평소 연습의 성과를 보여주다.' }
  },
  {
    id: 'n3-1004',
    category: 'vocabulary',
    groupIndex: 51,
    kanji: '役割',
    reading: 'やくわり',
    meaning: '역할',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '重要な役割を果たす。', t: '중요한 역할을 완수하다.' }
  },
  {
    id: 'n3-1005',
    category: 'vocabulary',
    groupIndex: 51,
    kanji: '責任',
    reading: 'せきにん',
    meaning: '책임',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '責任を持って仕事をする。', t: '책임을 가지고 일을 하다.' }
  },
  {
    id: 'n3-1006',
    category: 'vocabulary',
    groupIndex: 51,
    kanji: '義務',
    reading: 'ぎむ',
    meaning: '의무',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '納税の義務がある。', t: '납세의 의무가 있다.' }
  },
  {
    id: 'n3-1007',
    category: 'vocabulary',
    groupIndex: 51,
    kanji: '権利',
    reading: 'けんり',
    meaning: '권리',
    partOfSpeech: '명사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '発言する権利がある。', t: '발언할 권리가 있다.' }
  },
  {
    id: 'n3-1008',
    category: 'vocabulary',
    groupIndex: 51,
    kanji: '条件',
    reading: 'じょうけん',
    meaning: '조건',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '採用の条件を確認する।', t: '채용 조건을 확인하다.' }
  }
];

const g51_verbs: VocabItem[] = [
  {
    id: 'n3-1009',
    category: 'vocabulary',
    groupIndex: 51,
    kanji: '従う',
    reading: 'したがう',
    meaning: '따르다/준수하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '指示に従って行動する。', t: '지시에 따라 행동하다.' }
  },
  {
    id: 'n3-1010',
    category: 'vocabulary',
    groupIndex: 51,
    kanji: '逆らう',
    reading: 'さからう',
    meaning: '거스르다/반항하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '親に逆らう。', t: '부모님께 반항하다.' }
  },
  {
    id: 'n3-1011',
    category: 'vocabulary',
    groupIndex: 51,
    kanji: '及ぼす',
    reading: 'およぼす',
    meaning: '미치게 하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '悪影響を及ぼす。', t: '악영향을 미치다.' }
  },
  {
    id: 'n3-1012',
    category: 'vocabulary',
    groupIndex: 51,
    kanji: '与える',
    reading: 'あたえる',
    meaning: '주다/부여하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '印象を与える。', t: '인상을 주다.' }
  },
  {
    id: 'n3-1013',
    category: 'vocabulary',
    groupIndex: 51,
    kanji: '認める',
    reading: 'みとめる',
    meaning: '인정하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '間違いを認める。', t: '실수를 인정하다.' }
  },
  {
    id: 'n3-1014',
    category: 'vocabulary',
    groupIndex: 51,
    kanji: '許す',
    reading: 'ゆるす',
    meaning: '허가하다/용서하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '外出を許す。', t: '외출을 허락하다.' }
  }
];

const g51_adjectives: VocabItem[] = [
  {
    id: 'n3-1015',
    category: 'vocabulary',
    groupIndex: 51,
    kanji: '重要',
    reading: 'じゅうよう',
    meaning: '중요함',
    partOfSpeech: '형용사(な)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '重要な書類。', t: '중요한 서류.' }
  },
  {
    id: 'n3-1016',
    category: 'vocabulary',
    groupIndex: 51,
    kanji: '必要',
    reading: 'ひつよう',
    meaning: '필요함',
    partOfSpeech: '형용사(な)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '必要な経費。', t: '필요한 경비.' }
  },
  {
    id: 'n3-1017',
    category: 'vocabulary',
    groupIndex: 51,
    kanji: '不必要',
    reading: 'ふひつよう',
    meaning: '불필요함',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '不必要な物は買わない。', t: '불필요한 것은 사지 않는다.' }
  }
];

const g51_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-1018',
    category: 'vocabulary',
    groupIndex: 51,
    kanji: '単に',
    reading: 'たんに',
    meaning: '단순히/그저',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '単なる噂に過ぎない。', t: '단순한 소문에 불과하다.' }
  },
  {
    id: 'n3-1019',
    category: 'vocabulary',
    groupIndex: 51,
    kanji: '主に',
    reading: 'おもに',
    meaning: '주로',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '週末は主に家で過ごす。', t: '주말은 주로 집에서 보낸다.' }
  },
  {
    id: 'n3-1020',
    category: 'vocabulary',
    groupIndex: 51,
    kanji: '要するに',
    reading: 'ようするに',
    meaning: '요컨대/결국',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '要するに、やりたくないのだ。', t: '요컨대, 하기 싫은 것이다.' }
  }
];

// #region [GROUP 52] - ID n3-1021 ~ n3-1040

const g52_nouns: VocabItem[] = [
  {
    id: 'n3-1021',
    category: 'vocabulary',
    groupIndex: 52,
    kanji: '活動',
    reading: 'かつどう',
    meaning: '활동',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'ボランティア活動に参加する。', t: '봉사 활동에 참가하다.' }
  },
  {
    id: 'n3-1022',
    category: 'vocabulary',
    groupIndex: 52,
    kanji: '活躍',
    reading: 'かつやく',
    meaning: '활약',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '世界的な活躍を見せる。', t: '세계적인 활약을 보여주다.' }
  },
  {
    id: 'n3-1023',
    category: 'vocabulary',
    groupIndex: 52,
    kanji: '発展',
    reading: 'はってん',
    meaning: '발전',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '経済が発展する。', t: '경제가 발전하다.' }
  },
  {
    id: 'n3-1024',
    category: 'vocabulary',
    groupIndex: 52,
    kanji: '普及',
    reading: 'ふきゅう',
    meaning: '보급',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'ネットが急速に普及する。', t: '인터넷이 급속히 보급되다.' }
  },
  {
    id: 'n3-1025',
    category: 'vocabulary',
    groupIndex: 52,
    kanji: '流行',
    reading: 'りゅうこう',
    meaning: '유행',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'インフルエンザが流行する。', t: '독감이 유행하다.' }
  },
  {
    id: 'n3-1026',
    category: 'vocabulary',
    groupIndex: 52,
    kanji: '伝統',
    reading: 'でんとう',
    meaning: '전통',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '伝統文化を守る。', t: '전통문화를 지키다.' }
  },
  {
    id: 'n3-1027',
    category: 'vocabulary',
    groupIndex: 52,
    kanji: '価値',
    reading: 'かち',
    meaning: '가치',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '価値のある経験。', t: '가치 있는 경험.' }
  },
  {
    id: 'n3-1028',
    category: 'vocabulary',
    groupIndex: 52,
    kanji: '才能',
    reading: 'さいのう',
    meaning: '재능',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '音楽の才能がある。', t: '음악적 재능이 있다.' }
  }
];

const g52_verbs: VocabItem[] = [
  {
    id: 'n3-1029',
    category: 'vocabulary',
    groupIndex: 52,
    kanji: '活かす',
    reading: 'いかす',
    meaning: '살리다/활용하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '経験を仕事に活かす。', t: '경험을 일에 활용하다.' }
  },
  {
    id: 'n3-1030',
    category: 'vocabulary',
    groupIndex: 52,
    kanji: '広める',
    reading: 'ひろめる',
    meaning: '넓히다/보급시키다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '噂を広める。', t: '소문을 퍼뜨리다.' }
  },
  {
    id: 'n3-1031',
    category: 'vocabulary',
    groupIndex: 52,
    kanji: '及ぶ',
    reading: 'およぶ',
    meaning: '미치다/달하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '被害が全国に及ぶ。', t: '피해가 전국에 미치다.' }
  },
  {
    id: 'n3-1032',
    category: 'vocabulary',
    groupIndex: 52,
    kanji: '励む',
    reading: 'はげむ',
    meaning: '힘쓰다/노력하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '学業に励む。', t: '학업에 힘쓰다.' }
  },
  {
    id: 'n3-1033',
    category: 'vocabulary',
    groupIndex: 52,
    kanji: '恵まれる',
    reading: 'めぐまれる',
    meaning: '혜택받다/풍부하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '天候に恵まれる。', t: '날씨 복을 받다(날씨가 좋다).' }
  },
  {
    id: 'n3-1034',
    category: 'vocabulary',
    groupIndex: 52,
    kanji: '至る',
    reading: 'いたる',
    meaning: '이르다/도달하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '結論に至る。', t: '결론에 이르다.' }
  }
];

const g52_adjectives: VocabItem[] = [
  {
    id: 'n3-1035',
    category: 'vocabulary',
    groupIndex: 52,
    kanji: '盛ん',
    reading: 'さかん',
    meaning: '성함/번성함',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'スポーツが盛んな学校。', t: '스포츠가 성한 학교.' }
  },
  {
    id: 'n3-1036',
    category: 'vocabulary',
    groupIndex: 52,
    kanji: '貴重',
    reading: 'きちょう',
    meaning: '귀중함',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '貴重な時間を過ごす。', t: '귀중한 시간을 보내다.' }
  },
  {
    id: 'n3-1037',
    category: 'vocabulary',
    groupIndex: 52,
    kanji: '見事',
    reading: 'みごと',
    meaning: '훌륭함/멋짐',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '見事な演技。', t: '훌륭한 연기.' }
  }
];

const g52_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-1038',
    category: 'vocabulary',
    groupIndex: 52,
    kanji: '急速に',
    reading: 'きゅうそくに',
    meaning: '급속히',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '急速に冷え込む。', t: '급속히 추워지다.' }
  },
  {
    id: 'n3-1039',
    category: 'vocabulary',
    groupIndex: 52,
    kanji: '徐々に',
    reading: 'じょじょに',
    meaning: '서서히/조금씩',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '徐々に回復する。', t: '서서히 회복하다.' }
  },
  {
    id: 'n3-1040',
    category: 'vocabulary',
    groupIndex: 52,
    kanji: '着々と',
    reading: 'ちゃくちゃくと',
    meaning: '착착/순조롭게',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '準備が着々と進む。', t: '준비가 착착 진행되다.' }
  }
];

// #region [GROUP 53] - ID n3-1041 ~ n3-1060

const g53_nouns: VocabItem[] = [
  {
    id: 'n3-1041',
    category: 'vocabulary',
    groupIndex: 53,
    kanji: '判断',
    reading: 'はんだん',
    meaning: '판단',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '正しい判断を下す。', t: '옳은 판단을 내리다.' }
  },
  {
    id: 'n3-1042',
    category: 'vocabulary',
    groupIndex: 53,
    kanji: '評価',
    reading: 'ひょうか',
    meaning: '평가',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '能力を高く評価する。', t: '능력을 높게 평가하다.' }
  },
  {
    id: 'n3-1043',
    category: 'vocabulary',
    groupIndex: 53,
    kanji: '批判',
    reading: 'ひはん',
    meaning: '비판',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '政府の政策を批判する。', t: '정부의 정책을 비판하다.' }
  },
  {
    id: 'n3-1044',
    category: 'vocabulary',
    groupIndex: 53,
    kanji: '考慮',
    reading: 'こうりょ',
    meaning: '고려',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '安全面を考慮する。', t: '안전면을 고려하다.' }
  },
  {
    id: 'n3-1045',
    category: 'vocabulary',
    groupIndex: 53,
    kanji: '無視',
    reading: 'むし',
    meaning: '무시',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '信号を無視する。', t: '신호를 무시하다.' }
  },
  {
    id: 'n3-1046',
    category: 'vocabulary',
    groupIndex: 53,
    kanji: '集中',
    reading: 'しゅうちゅう',
    meaning: '집중',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '勉強に集中する。', t: '공부에 집중하다.' }
  },
  {
    id: 'n3-1047',
    category: 'vocabulary',
    groupIndex: 53,
    kanji: '意識',
    reading: 'いしき',
    meaning: '의식',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '環境問題への意識を高める。', t: '환경 문제에 대한 의식을 높이다.' }
  },
  {
    id: 'n3-1048',
    category: 'vocabulary',
    groupIndex: 53,
    kanji: '認識',
    reading: 'にんしき',
    meaning: '인식',
    partOfSpeech: '명사(サ행 변격동사)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '状況を正しく認識する。', t: '상황을 바르게 인식하다.' }
  }
];

const g53_verbs: VocabItem[] = [
  {
    id: 'n3-1049',
    category: 'vocabulary',
    groupIndex: 53,
    kanji: '疑う',
    reading: 'うた가우',
    meaning: '의심하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '彼の言葉を疑う。', t: '그의 말을 의심하다.' }
  },
  {
    id: 'n3-1050',
    category: 'vocabulary',
    groupIndex: 53,
    kanji: '迷う',
    reading: 'まよう',
    meaning: '망설이다/헤매다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '道に迷う。', t: '길을 헤매다.' }
  },
  {
    id: 'n3-1051',
    category: 'vocabulary',
    groupIndex: 53,
    kanji: '悩み',
    reading: 'なやみ',
    meaning: '고민',
    partOfSpeech: '명사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '深刻な悩み。', t: '심각한 고민.' }
  },
  {
    id: 'n3-1052',
    category: 'vocabulary',
    groupIndex: 53,
    kanji: '悩む',
    reading: 'なやむ',
    meaning: '고민하다/괴로워하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '進路について悩む。', t: '진로에 대해 고민하다.' }
  },
  {
    id: 'n3-1053',
    category: 'vocabulary',
    groupIndex: 53,
    kanji: '苦しむ',
    reading: 'くるしむ',
    meaning: '괴로워하다',
    partOfSpeech: '동사(1그룹)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '病気に苦しむ。', t: '병으로 괴로워하다.' }
  },
  {
    id: 'n3-1054',
    category: 'vocabulary',
    groupIndex: 53,
    kanji: '慰める',
    reading: 'なぐさめる',
    meaning: '위로하다',
    partOfSpeech: '동사(2그룹)',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '泣いている友達を慰める。', t: '울고 있는 친구를 위로하다.' }
  }
];

const g53_adjectives: VocabItem[] = [
  {
    id: 'n3-1055',
    category: 'vocabulary',
    groupIndex: 53,
    kanji: '適当',
    reading: 'てきとう',
    meaning: '적당함/적절함',
    partOfSpeech: '형용사(な)',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '適当なアドバイス。', t: '적절한 조언.' }
  },
  {
    id: 'n3-1056',
    category: 'vocabulary',
    groupIndex: 53,
    kanji: '不適当',
    reading: 'ふてきとう',
    meaning: '부적절함',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '不適当な発言。', t: '부적절한 발언.' }
  },
  {
    id: 'n3-1057',
    category: 'vocabulary',
    groupIndex: 53,
    kanji: '明確',
    reading: 'めいかく',
    meaning: '명확함',
    partOfSpeech: '형용사(な)',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '目標を明確にする。', t: '목표를 명확히 하다.' }
  }
];

const g53_adverbs_etc: VocabItem[] = [
  {
    id: 'n3-1058',
    category: 'vocabulary',
    groupIndex: 53,
    kanji: '恐らく',
    reading: 'おそらく',
    meaning: '아마도/필시',
    partOfSpeech: '부사',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '恐らく彼は来ないだろう。', t: '아마도 그는 오지 않을 것이다.' }
  },
  {
    id: 'n3-1059',
    category: 'vocabulary',
    groupIndex: 53,
    kanji: '確かに',
    reading: 'たしかに',
    meaning: '확실히/분명히',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '確かに受け取りました。', t: '확실히 받았습니다.' }
  },
  {
    id: 'n3-1060',
    category: 'vocabulary',
    groupIndex: 53,
    kanji: 'ついに',
    reading: 'ついに',
    meaning: '마침내/드디어',
    partOfSpeech: '부사',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: 'ついに実験に成功した。', t: '마침내 실험에 성공했다.' }
  }
];

// 통합 배열
// --- 그룹별 묶음 선언 (3그룹 단위) ---
// 01~03그룹 (ID n3-001 ~ n3-060)
export const n3_vocab_01_03: VocabItem[] = [
  ...g01_nouns, ...g01_verbs, ...g01_adjectives, ...g01_adverbs_etc,
  ...g02_nouns, ...g02_verbs, ...g02_adjectives, ...g02_adverbs_etc,
  ...g03_nouns, ...g03_verbs, ...g03_adjectives, ...g03_adverbs_etc
];

// 04~06그룹 (ID n3-061 ~ n3-120)
export const n3_vocab_04_06: VocabItem[] = [
  ...g04_nouns, ...g04_verbs, ...g04_adjectives, ...g04_adverbs_etc,
  ...g05_nouns, ...g05_verbs, ...g05_adjectives, ...g05_adverbs_etc,
  ...g06_nouns, ...g06_verbs, ...g06_adjectives, ...g06_adverbs_etc
];

// 07~09그룹 (ID n3-121 ~ n3-180)
export const n3_vocab_07_09: VocabItem[] = [
  ...g07_nouns, ...g07_verbs, ...g07_adjectives, ...g07_adverbs_etc,
  ...g08_nouns, ...g08_verbs, ...g08_adjectives, ...g08_adverbs_etc,
  ...g09_nouns, ...g09_verbs, ...g09_adjectives, ...g09_adverbs_etc
];

// 10~12그룹 (ID n3-181 ~ n3-240)
export const n3_vocab_10_12: VocabItem[] = [
  ...g10_nouns, ...g10_verbs, ...g10_adjectives, ...g10_adverbs_etc,
  ...g11_nouns, ...g11_verbs, ...g11_adjectives, ...g11_adverbs_etc,
  ...g12_nouns, ...g12_verbs, ...g12_adjectives, ...g12_adverbs_etc
];

// 13~15그룹 (ID n3-241 ~ n3-300)
export const n3_vocab_13_15: VocabItem[] = [
  ...g13_nouns, ...g13_verbs, ...g13_adjectives, ...g13_adverbs_etc,
  ...g14_nouns, ...g14_verbs, ...g14_adjectives, ...g14_adverbs_etc,
  ...g15_nouns, ...g15_verbs, ...g15_adjectives, ...g15_adverbs_etc
];

// 16~18그룹 (ID n3-301 ~ n3-360)
export const n3_vocab_16_18: VocabItem[] = [
  ...g16_nouns, ...g16_verbs, ...g16_adjectives, ...g16_adverbs_etc,
  ...g17_nouns, ...g17_verbs, ...g17_adjectives, ...g17_adverbs_etc,
  ...g18_nouns, ...g18_verbs, ...g18_adjectives, ...g18_adverbs_etc
];

// 19~21그룹 (ID n3-361 ~ n3-420)
export const n3_vocab_19_21: VocabItem[] = [
  ...g19_nouns, ...g19_verbs, ...g19_adjectives, ...g19_adverbs_etc,
  ...g20_nouns, ...g20_verbs, ...g20_adjectives, ...g20_adverbs_etc,
  ...g21_nouns, ...g21_verbs, ...g21_adjectives, ...g21_adverbs_etc
];

// 22~24그룹 (ID n3-421 ~ n3-480)
export const n3_vocab_22_24: VocabItem[] = [
  ...g22_nouns, ...g22_verbs, ...g22_adjectives, ...g22_adverbs_etc,
  ...g23_nouns, ...g23_verbs, ...g23_adjectives, ...g23_adverbs_etc,
  ...g24_nouns, ...g24_verbs, ...g24_adjectives, ...g24_adverbs_etc
];

// 25~27그룹 (ID n3-481 ~ n3-540)
export const n3_vocab_25_27: VocabItem[] = [
  ...g25_nouns, ...g25_verbs, ...g25_adjectives, ...g25_adverbs_etc,
  ...g26_nouns, ...g26_verbs, ...g26_adjectives, ...g26_adverbs_etc,
  ...g27_nouns, ...g27_verbs, ...g27_adjectives, ...g27_adverbs_etc
];

// 28~30그룹 (ID n3-541 ~ n3-600)
export const n3_vocab_28_30: VocabItem[] = [
  ...g28_nouns, ...g28_verbs, ...g28_adjectives, ...g28_adverbs_etc,
  ...g29_nouns, ...g29_verbs, ...g29_adjectives, ...g29_adverbs_etc,
  ...g30_nouns, ...g30_verbs, ...g30_adjectives, ...g30_adverbs_etc
];

// 31~33그룹 (ID n3-601 ~ n3-660)
export const n3_vocab_31_33: VocabItem[] = [
  ...g31_nouns, ...g31_verbs, ...g31_adjectives, ...g31_adverbs_etc,
  ...g32_nouns, ...g32_verbs, ...g32_adjectives, ...g32_adverbs_etc,
  ...g33_nouns, ...g33_verbs, ...g33_adjectives, ...g33_adverbs_etc
];

// 34~36그룹 (ID n3-661 ~ n3-720)
export const n3_vocab_34_36: VocabItem[] = [
  ...g34_nouns, ...g34_verbs, ...g34_adjectives, ...g34_adverbs_etc,
  ...g35_nouns, ...g35_verbs, ...g35_adjectives, ...g35_adverbs_etc,
  ...g36_nouns, ...g36_verbs, ...g36_adjectives, ...g36_adverbs_etc
];

// 37~39그룹 (ID n3-721 ~ n3-780)
export const n3_vocab_37_39: VocabItem[] = [
  ...g37_nouns, ...g37_verbs, ...g37_adjectives, ...g37_adverbs_etc,
  ...g38_nouns, ...g38_verbs, ...g38_adjectives, ...g38_adverbs_etc,
  ...g39_nouns, ...g39_verbs, ...g39_adjectives, ...g39_adverbs_etc
];

// 40~42그룹 (ID n3-781 ~ n3-840)
export const n3_vocab_40_42: VocabItem[] = [
  ...g40_nouns, ...g40_verbs, ...g40_adjectives, ...g40_adverbs_etc,
  ...g41_nouns, ...g41_verbs, ...g41_adjectives, ...g41_adverbs_etc,
  ...g42_nouns, ...g42_verbs, ...g42_adjectives, ...g42_adverbs_etc
];

// 43~45그룹 (ID n3-841 ~ n3-900)
export const n3_vocab_43_45: VocabItem[] = [
  ...g43_nouns, ...g43_verbs, ...g43_adjectives, ...g43_adverbs_etc,
  ...g44_nouns, ...g44_verbs, ...g44_adjectives, ...g44_adverbs_etc,
  ...g45_nouns, ...g45_verbs, ...g45_adjectives, ...g45_adverbs_etc
];

// 46~48그룹 (ID n3-901 ~ n3-960)
export const n3_vocab_46_48: VocabItem[] = [
  ...g46_nouns, ...g46_verbs, ...g46_adjectives, ...g46_adverbs_etc,
  ...g47_nouns, ...g47_verbs, ...g47_adjectives, ...g47_adverbs_etc,
  ...g48_nouns, ...g48_verbs, ...g48_adjectives, ...g48_adverbs_etc
];

// 49~50그룹 (ID n3-961 ~ n3-1000)
export const n3_vocab_49_50: VocabItem[] = [
  ...g49_nouns, ...g49_verbs, ...g49_adjectives, ...g49_adverbs_etc,
  ...g50_nouns, ...g50_verbs, ...g50_adjectives, ...g50_adverbs_etc
];

export const n3_vocab_51_53: VocabItem[] = [
  ...g51_nouns, ...g51_verbs, ...g51_adjectives, ...g51_adverbs_etc,
  ...g52_nouns, ...g52_verbs, ...g52_adjectives, ...g52_adverbs_etc,
  ...g53_nouns, ...g53_verbs, ...g53_adjectives, ...g53_adverbs_etc
];

/**
 * [최종 목적지] 
 * ID n3-001 ~ n3-1000 전체 통합 리스트
 */
export const n3_vocab_total: VocabItem[] = [
  ...n3_vocab_01_03,
  ...n3_vocab_04_06,
  ...n3_vocab_07_09,
  ...n3_vocab_10_12,
  ...n3_vocab_13_15,
  ...n3_vocab_16_18,
  ...n3_vocab_19_21,
  ...n3_vocab_22_24,
  ...n3_vocab_25_27,
  ...n3_vocab_28_30,
  ...n3_vocab_31_33,
  ...n3_vocab_34_36,
  ...n3_vocab_37_39,
  ...n3_vocab_40_42,
  ...n3_vocab_43_45,
  ...n3_vocab_46_48,
  ...n3_vocab_49_50,
  ...n3_vocab_51_53
];