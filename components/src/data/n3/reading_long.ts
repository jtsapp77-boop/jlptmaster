import { ReadingQuestion, Category } from '../../types';

export const n3ReadingLong: ReadingQuestion[] = [
  {
    id: "N3-RL-001",
    level: "N3",
    type: "reading",
    readingType: "LONG",
    category: Category.READING_LONG,
    title: "失敗から学ぶこと",
    title_kr: "실패로부터 배우는 것",
    passage: "私たちは、失敗することを怖がります。しかし、失敗を全くしない人は、新しいことに挑戦していない人だとも言えます。失敗したときは、「なぜ失敗したのか」をじっくり考える機会です。重要なのは、失敗を隠すことではなく、それを次の成功のためのデータとして活用する前向きな姿勢です。", 
    // (본문은 예시를 위해 축약함)
    translation: "우리는 실패를 두려워합니다. 하지만 실패를 전혀 하지 않는 사람은 도전하지 않는 사람입니다. 중요한 것은 실패를 숨기는 것이 아니라 성공을 위한 데이터로 활용하는 긍정적 자세입니다.",
    vocabulary_list: [
      { word: "挑戦", reading: "ちょうせん", meaning: "도전" },
      { word: "姿勢", reading: "しせい", meaning: "자세" }
    ],
    questions: [
      {
        q_text: "筆者は、失敗についてどう考えていますか。",
        options: [
          "失敗しないように、新しいことはしないほうがいい。",
          "失敗は成功のために利用できる大切な経験だ。",
          "一度失敗した人は、もう一度挑戦しても無駄だ。",
          "失敗を隠すことが最も良い解決方法だ。"
        ],
        answer: 1, // 2번째 보기
        explanation: "실패를 다음 성공을 위한 '데이터'로 활용하라는 긍정적 태도를 강조하고 있습니다.",
        evidence: "それを次の成功のためのデータとして活用する前向きな姿勢です。",
        strategy: "【💡 장문 팁】 지문 끝부분에 '大切なのは(중요한 것은) ~'로 시작하는 문장이 있다면, 그 문장이 정답과 직결될 확률이 매우 높습니다!"
      }
    ]
  }
];