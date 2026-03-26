export interface KanjiItem {
  id: string;
  category: "kanji";
  groupIndex: number;
  kanji: string;
  reading: string;
  meaning: string;
  partOfSpeech: string;
  difficulty: number;
  isBookmarked: boolean;
  isMastered: boolean;
  example: { s: string; t: string };
  // 관련 단어마다 예문(s)과 해석(t)을 포함하도록 확장
  relatedWords: { word: string; reading: string; meaning: string; s: string; t: string }[];
}

export const n3Kanji: KanjiItem[] = [
  {
    id: 'n3-001',
    category: 'kanji',
    groupIndex: 1,
    kanji: '豊',
    reading: 'ほう · ゆたか',
    meaning: '풍성할 풍 · 풍부하다 · 넉넉하다',
    partOfSpeech: '한자',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '豊かな経験。', t: '풍부한 경험.' },
    relatedWords: [
      { word: '豊かな', reading: 'ゆたかな', meaning: '풍부함 · 풍요로움', s: '豊かな自然を守る。', t: '풍부한 자연을 지키다.' },
      { word: '豊富', reading: 'ほうふ', meaning: '풍부', s: 'この町は資源が豊富だ。', t: '이 마을은 자원이 풍부하다.' }
    ]
  },
  {
    id: 'n3-002',
    category: 'kanji',
    groupIndex: 1,
    kanji: '富',
    reading: 'ふ · とみ',
    meaning: '부유할 부 · 재산 · 가멸다',
    partOfSpeech: '한자',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '富を築く。', t: '부를 쌓다.' },
    relatedWords: [
      { word: '豊富', reading: 'ほうふ', meaning: '풍부', s: '経験が豊富な人。', t: '경험이 풍부한 사람.' },
      { word: '富士山', reading: 'ふじさん', meaning: '후지산', s: '一度は富士山に登りたい。', t: '한 번은 후지산에 오르고 싶다.' }
    ]
  },
  {
    id: 'n3-003',
    category: 'kanji',
    groupIndex: 1,
    kanji: '険',
    reading: 'けん · けわしい',
    meaning: '험할 험 · 험하다 · 가파르다',
    partOfSpeech: '한자',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '険しい山道。', t: '험한 산길.' },
    relatedWords: [
      { word: '危険', reading: 'きけん', meaning: '위험', s: 'ここは危険だから入らないで。', t: '여기는 위험하니까 들어오지 마.' },
      { word: '保険', reading: 'ほけん', meaning: '보험', s: '念のために保険に入る。', t: '만약을 위해 보험에 들다.' }
    ]
  },
  {
    id: 'n3-004',
    category: 'kanji',
    groupIndex: 1,
    kanji: '換',
    reading: 'かん · かえる',
    meaning: '바꿀 환 · 갈다 · 교환하다',
    partOfSpeech: '한자',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '空気を入れ換える。', t: '공기를 환기하다.' },
    relatedWords: [
      { word: '交換', reading: 'こうかん', meaning: '교환', s: 'プレゼントを交換する。', t: '선물을 교환하다.' },
      { word: '乗り換え', reading: 'のりかえ', meaning: '환승 · 갈아타기', s: '次の駅で地下鉄に乗り換える。', t: '다음 역에서 지하철로 갈아탄다.' }
    ]
  },
  {
    id: 'n3-005',
    category: 'kanji',
    groupIndex: 1,
    kanji: '祝',
    reading: 'しゅく · いわう',
    meaning: '빌 축 · 축하하다 · 저주하다',
    partOfSpeech: '한자',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '誕生日을 祝う。', t: '생일을 축하하다.' },
    relatedWords: [
      { word: 'お祝い', reading: 'おいわい', meaning: '축하 · 선물', s: '結婚のお祝いを贈る。', t: '결혼 축하 선물을 보내다.' },
      { word: '祝日', reading: 'しゅくじつ', meaning: '축일 · 공휴일', s: '明日は祝日なので休みだ。', t: '내일은 공휴일이라서 쉰다.' }
    ]
  },
  {
    id: 'n3-006',
    category: 'kanji',
    groupIndex: 1,
    kanji: '願',
    reading: 'がん · ねがう',
    meaning: '원할 원 · 빌다 · 부탁하다',
    partOfSpeech: '한자',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '合格を願う。', t: '합격을 바라다.' },
    relatedWords: [
      { word: 'お願い', reading: 'おねがい', meaning: '부탁', s: '一つお願いがあります。', t: '부탁이 하나 있습니다.' },
      { word: '願書', reading: 'がんしょ', meaning: '원서', s: '願書を提出した。', t: '원서를 제출했다.' }
    ]
  },
  {
    id: 'n3-007',
    category: 'kanji',
    groupIndex: 1,
    kanji: '福',
    reading: 'ふく',
    meaning: '복 복 · 행복 · 복되다',
    partOfSpeech: '한자',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '幸福な人生。', t: '행복한 인생.' },
    relatedWords: [
      { word: '幸福', reading: 'こうふく', meaning: '행복', s: '幸福の基準は人それぞれだ。', t: '행복의 기준은 사람마다 다르다.' },
      { word: '福祉', reading: 'ふくし', meaning: '복지', s: '社会福祉を充実させる。', t: '사회 복지를 충실히 하다.' }
    ]
  },
  {
    id: 'n3-008',
    category: 'kanji',
    groupIndex: 1,
    kanji: '幸',
    reading: 'こう · さいわい · しあわせ',
    meaning: '다행 행 · 행복 · 다행히',
    partOfSpeech: '한자',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '幸せに暮らす。', t: '행복하게 살다.' },
    relatedWords: [
      { word: '幸せ', reading: 'しあわせ', meaning: '행복', s: '家族といる時が一番幸せだ。', t: '가족과 있을 때가 가장 행복하다.' },
      { word: '不幸', reading: 'ふこう', meaning: '불행', s: '突然の不幸に見舞われる。', t: '갑작스러운 불행을 겪다.' }
    ]
  },
  {
    id: 'n3-009',
    category: 'kanji',
    groupIndex: 1,
    kanji: '辞',
    reading: 'じ · やめる',
    meaning: '말씀 사 · 사직하다 · 그만두다',
    partOfSpeech: '한자',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '会社を辞める。', t: '회사를 그만두다.' },
    relatedWords: [
      { word: '辞書', reading: 'じしょ', meaning: '사전', s: '辞書で言葉を調べる。', t: '사전에서 단어를 찾다.' },
      { word: 'お世辞', reading: 'おせじ', meaning: '빈말 · 아부', s: 'お世辞でも嬉しい。', t: '빈말이라도 기쁘다.' }
    ]
  },
  {
    id: 'n3-010',
    category: 'kanji',
    groupIndex: 1,
    kanji: '退',
    reading: 'たい · しりぞく',
    meaning: '물러날 퇴 · 물러나다 · 비키다',
    partOfSpeech: '한자',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '予定より退歩する。', t: '예정보다 퇴보하다.' },
    relatedWords: [
      { word: '退院', reading: 'たいいん', meaning: '퇴원', s: '来週退院することになった。', t: '다음 주에 퇴원하게 되었다.' },
      { word: '退職', reading: 'たいしょく', meaning: '퇴직', s: '父は去年退職した。', t: '아버지는 작년에 퇴직하셨다.' }
    ]
  },
  {
    id: 'n3-011',
    category: 'kanji',
    groupIndex: 1,
    kanji: '定',
    reading: 'てい · じょう · さだめる',
    meaning: '정할 정 · 정해지다 · 확실히',
    partOfSpeech: '한자',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '予定を決める。', t: '예정을 정하다.' },
    relatedWords: [
      { word: '予定', reading: 'よてい', meaning: '예정', s: '旅行の予定を立てる。', t: '여행 예정(계획)을 세우다.' },
      { word: '決定', reading: 'けってい', meaning: '결정', s: '最終的な決定を下す。', t: '최종적인 결정을 내리다.' },
      { word: '定食', reading: 'ていしょく', meaning: '정식 · 세트 메뉴', s: 'ランチに焼肉定食を食べる。', t: '점심으로 불고기 정식을 먹다.' }
    ]
  },
  {
    id: 'n3-012',
    category: 'kanji',
    groupIndex: 1,
    kanji: '相',
    reading: 'そう · しょう · あい',
    meaning: '서로 상 · 모양 · 바탕',
    partOfSpeech: '한자',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '相談に乗る。', t: '상담에 응하다.' },
    relatedWords: [
      { word: '相談', reading: 'そうだん', meaning: '상담', s: '進路について先生に相談する。', t: '진로에 대해 선생님께 상담하다.' },
      { word: '相手', reading: 'あいて', meaning: '상대방', s: '相手の目を見て話す。', t: '상대방의 눈을 보고 이야기하다.' },
      { word: '首相', reading: 'しゅしょう', meaning: '수상 · 총리', s: '首相が記者会見を行う。', t: '수상이 기자회견을 열다.' }
    ]
  },
  {
    id: 'n3-013',
    category: 'kanji',
    groupIndex: 1,
    kanji: '信',
    reading: 'しん',
    meaning: '믿을 신 · 믿다 · 소식',
    partOfSpeech: '한자',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '自分を信じる。', t: '자신을 믿다.' },
    relatedWords: [
      { word: '信じる', reading: 'しんじる', meaning: '믿다', s: '奇跡を信じて待つ。', t: '기적을 믿고 기다리다.' },
      { word: '自信', reading: 'じしん', meaning: '자신감', s: '自分に自信を持つ。', t: '자신에게 자신감을 갖다.' },
      { word: '信号', reading: 'しんごう', meaning: '신호등 · 신호', s: '信号を渡る時は気をつけて。', t: '신호를 건널 때는 조심해.' }
    ]
  },
  {
    id: 'n3-014',
    category: 'kanji',
    groupIndex: 1,
    kanji: '感',
    reading: 'かん',
    meaning: '느낄 감 · 생각 · 느끼다',
    partOfSpeech: '한자',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '感動を受ける。', t: '감동을 받다.' },
    relatedWords: [
      { word: '感じる', reading: 'かんじる', meaning: '느끼다', s: '時代の変化を感じる。', t: '시대의 변화를 느끼다.' },
      { word: '感心', reading: 'かんしん', meaning: '감탄', s: '彼の丁寧さに感心した。', t: '그의 정중함에 감탄했다.' },
      { word: '感想', reading: 'かんそう', meaning: '감상 · 생각', s: '映画の感想を話す。', t: '영화 감상을 이야기하다.' }
    ]
  },
  {
    id: 'n3-015',
    category: 'kanji',
    groupIndex: 1,
    kanji: '配',
    reading: 'はい · くばる',
    meaning: '나눌 배 · 배달하다 · 아내',
    partOfSpeech: '한자',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '手紙を配る。', t: '편지를 나누어 주다.' },
    relatedWords: [
      { word: '心配', reading: 'しんぱい', meaning: '걱정', s: 'あまり心配しないでください。', t: '너무 걱정하지 마세요.' },
      { word: '配達', reading: 'はいたつ', meaning: '배달', s: 'ピザの配達を頼む。', t: '피자 배달을 시키다.' },
      { word: '気配', reading: 'けはい', meaning: '기척 · 느낌', s: '誰かがいる気配がする。', t: '누군가 있는 기척이 난다.' }
    ]
  },
  {
    id: 'n3-016',
    category: 'kanji',
    groupIndex: 1,
    kanji: '点',
    reading: 'てん',
    meaning: '점 점 · 끄덕이다 · 검사하다',
    partOfSpeech: '한자',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '満点を取る。', t: '만점을 받다.' },
    relatedWords: [
      { word: '交差点', reading: 'こうさてん', meaning: '교차로', s: '交差点を右に曲がる。', t: '교차로를 오른쪽으로 꺽다.' },
      { word: '点検', reading: 'てんけん', meaning: '점검', s: 'エレベーターを点検する。', t: '엘리베이터를 점검하다.' },
      { word: '欠点', reading: 'けってん', meaning: '결점', s: '欠点のない人はいない。', t: '결점이 없는 사람은 없다.' }
    ]
  },
  {
    id: 'n3-017',
    category: 'kanji',
    groupIndex: 1,
    kanji: '対',
    reading: 'たい · つい',
    meaning: '대할 대 · 대답하다 · 마주하다',
    partOfSpeech: '한자',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '反対意見。', t: '반대 의견.' },
    relatedWords: [
      { word: '反対', reading: 'はんたい', meaning: '반대', s: '計画に反対する。', t: '계획에 반대하다.' },
      { word: '対応', reading: 'たいおう', meaning: '대응', s: '素早い対応が必要だ。', t: '재빠른 대응이 필요하다.' },
      { word: '対決', reading: 'たいけつ', meaning: '대결', s: '宿命の対決が始まる。', t: '숙명의 대결이 시작된다.' }
    ]
  },
  {
    id: 'n3-018',
    category: 'kanji',
    groupIndex: 1,
    kanji: '法',
    reading: 'ほう · ぽう',
    meaning: '법 법 · 방법 · 본받다',
    partOfSpeech: '한자',
    difficulty: 1,
    isBookmarked: false,
    isMastered: false,
    example: { s: '法律を守る。', t: '법률을 지키다.' },
    relatedWords: [
      { word: '방법', reading: 'ほうほう', meaning: '방법', s: 'いい方法を考え出す。', t: '좋은 방법을 생각해내다.' },
      { word: '文法', reading: 'ぶんぽう', meaning: '문법', s: '日本語の文法は難しい。', t: '일본어 문법은 어렵다.' },
      { word: '憲法', reading: 'けんぽう', meaning: '헌법', s: '憲法は国の最高法規だ。', t: '헌법은 국가의 최고 법규다.' }
    ]
  },
  {
    id: 'n3-019',
    category: 'kanji',
    groupIndex: 1,
    kanji: '直',
    reading: 'ちょく · じき · なおす · なおる',
    meaning: '곧을 직 · 고치다 · 바로',
    partOfSpeech: '한자',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '間違いを直す。', t: '틀린 곳을 고치다.' },
    relatedWords: [
      { word: '直接', reading: 'ちょくせつ', meaning: '직접', s: '本人に直接会って話す。', t: '본인에게 직접 만나 이야기하다.' },
      { word: '直進', reading: 'ちょくしん', meaning: '직진', s: 'この道をしばらく直進する。', t: '이 길을 당분간 직진하다.' },
      { word: '正直', reading: 'しょうじき', meaning: '정직', s: '正直に言うと、困っている。', t: '정직하게 말하면, 곤란해 하고 있다.' }
    ]
  },
  {
    id: 'n3-020',
    category: 'kanji',
    groupIndex: 1,
    kanji: '戦',
    reading: 'せん · たたかう',
    meaning: '싸울 전 · 전쟁 · 두려워하다',
    partOfSpeech: '한자',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '最後まで戦う。', t: '마지막까지 싸우다.' },
    relatedWords: [
      { word: '戦争', reading: 'せんそう', meaning: '전쟁', s: '戦争は二度と繰り返さない。', t: '전쟁은 두 번 다시 반복하지 않는다.' },
      { word: '作戦', reading: 'さくせん', meaning: '작전', s: '新しい作전を立てる。', t: '새로운 작전을 세우다.' },
      { word: '挑戦', reading: 'ちょうせん', meaning: '도전', s: '限界に挑戦する。', t: '한계에 도전하다.' }
    ]
  },
  {
    id: 'n3-021',
    category: 'kanji',
    groupIndex: 2,
    kanji: '機',
    reading: 'き · はた',
    meaning: '틀 기 · 기회 · 베틀',
    partOfSpeech: '한자',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '機会を待つ。', t: '기회를 기다리다.' },
    relatedWords: [
      { word: '飛行機', reading: 'ひこうき', meaning: '비행기', s: '飛行機で日本へ行く。', t: '비행기로 일본에 가다.' },
      { word: '機械', reading: 'きかい', meaning: '기계', s: '工場の機械を動かす。', t: '공장의 기계를 가동하다.' },
      { word: '機能', reading: 'きのう', meaning: '기능', s: '最新の機能を使いこなす。', t: '최신 기능을 능숙하게 사용하다.' }
    ]
  },
  {
    id: 'n3-022',
    category: 'kanji',
    groupIndex: 2,
    kanji: '関',
    reading: 'かん · せき',
    meaning: '관계할 관 · 빗장 · 관문',
    partOfSpeech: '한자',
    difficulty: 3,
    isBookmarked: false,
    isMastered: false,
    example: { s: '関心を持つ。', t: '관심을 갖다.' },
    relatedWords: [
      { word: '関係', reading: 'かんけい', meaning: '관계', s: '仕事に関係する本を読む。', t: '업무와 관계된 책을 읽다.' },
      { word: '玄関', reading: 'げんかん', meaning: '현관', s: '玄関で靴을 脱ぐ。', t: '현관에서 구두를 벗다.' },
      { word: '無関心', reading: 'むかんしん', meaning: '무관심', s: '政治に無関心な若者が増えている。', t: '정치에 무관심한 젊은이가 늘고 있다.' }
    ]
  },
  {
    id: 'n3-023',
    category: 'kanji',
    groupIndex: 2,
    kanji: '係',
    reading: 'けい · かかり',
    meaning: '맬 계 · 관계되다 · 담당자',
    partOfSpeech: '한자',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '案内係に聞く。', t: '안내 담당자에게 묻다.' },
    relatedWords: [
      { word: '係員', reading: 'かかりいん', meaning: '담당자', s: '係員の指示に従ってください。', t: '담당자의 지시에 따라 주세요.' },
      { word: '連係', reading: 'れんけ이', meaning: '연계', s: '警察と病院が連係をとる。', t: '경찰과 병원이 연계를 취하다.' },
      { word: '会計係', reading: 'かいけいがかり', meaning: '회계 담당', s: '彼がクラスの会計係だ。', t: '그가 학급의 회계 담당이다.' }
    ]
  },
  {
    id: 'n3-24',
    category: 'kanji',
    groupIndex: 2,
    kanji: '難',
    reading: 'なん · むずかしい',
    meaning: '어려울 난 · 재앙 · 어렵다',
    partOfSpeech: '한자',
    difficulty: 2,
    isBookmarked: false,
    isMastered: false,
    example: { s: '難しい問題。', t: '어려운 문제.' },
    relatedWords: [
      { word: '困難', reading: 'こんなん', meaning: '곤란', s: '困難な状況を乗り越える。', t: '곤란한 상황을 극복하다.' },
      { word: '難病', reading: 'なんびょう', meaning: '난치병', s: '難病の治療法を研究する。', t: '난치병 치료법을 연구하다.' },
      { word: '避難', reading: 'ひなん', meaning: '피난', s: '安全な場所へ避難する。', t: '안전한 장소로 피난하다.' }
    ]
  }
];