import { ReadingQuestion, Category } from '../../types';

export const n3ReadingShort: ReadingQuestion[] = [
  {
    id: "N3-RS-001",
    level: "N3",
    type: "reading",
    readingType: "SHORT",
    category: Category.READING_SHORT,
    title: "マンションの断水のお知らせ",
    title_kr: "맨션 단수 알림",
    passage: "【断水のお知らせ】\n水道管の工事のため、来週の月曜日（4月10日）の午後1時から4時まで水が止まります。この時間はシャワーやトイレが使えません。また、工事が終わった後は水が濁ることがあるので、しばらく流してから使ってください。",
    translation: "【단수 알림】 수도관 공사로 인해 다음 주 월요일(4월 10일) 오후 1시부터 4시까지 물이 끊깁니다. 이 시간에는 샤워나 화장실을 사용할 수 없습니다. 또한, 공사가 끝난 후에는 물이 탁할 수 있으므로, 잠시 흘려보낸 뒤에 사용해 주십시오.",
    vocabulary_list: [
      { word: "断水", reading: "だんすい", meaning: "단수 (물 끊김)" },
      { word: "濁る", reading: "にごる", meaning: "탁하다/흐리다" },
      { word: "流す", reading: "ながす", meaning: "흘려보내다" }
    ],
    questions: [
      {
        q_text: "4月10日の午後に、しなければならないことはどれですか。",
        options: [
          "午後1時から4時まで水をためておく。",
          "工事が終わったら、すぐに水を飲む。",
          "水が出るようになったら、しばらく水を出しておく。",
          "午後1時になる前にトイレを直しておく。"
        ],
        answer: 2, // 3번째 보기 (0부터 시작 시 2)
        explanation: "공사가 끝난 후 물이 탁할 수 있으니 잠시 흘려보낸 뒤 쓰라고 했으므로 3번이 정답입니다.",
        evidence: "しばらく流してから使ってください。",
        strategy: "【⚠️ 단어 낚시 주의】 보기 2번의 'すぐに(즉시)'와 본문의 'しばらく流してから(잠시 흘려보낸 뒤)'를 비교하는 것이 핵심입니다."
      }
    ]
  }
];