import { ReadingQuestion, Category } from '../../types';

// ⚠️ 이 부분이 n3ReadingInfo 로 되어있을 거야. 아래처럼 n3InfoSearch 로 바꿔줘!
export const n3InfoSearch: ReadingQuestion[] = [
  {
    id: "N3-RI-001",
    level: "N3",
    type: "reading",
    readingType: "SEARCH",
    category: Category.INFO_SEARCH,
    title: "市民スポーツセンターの利用案内",
    title_kr: "시민 스포츠 센터 이용 안내",
    passage: "【利用料金】大人：500円 / 子供：200円\n【割引】平日の午前中に利用する場合、大人は100円引きになります。月曜日は休館です。",
    translation: "【이용 요금】 성인 500엔. 평일 오전 이용 시 100엔 할인. 월요일 휴관.",
    vocabulary_list: [
      { word: "料金", reading: "りょうきん", meaning: "요금" },
      { word: "割引", reading: "わりびき", meaning: "할인" }
    ],
    questions: [
      {
        q_text: "30歳の人が火曜日の午前10時に利用する場合、いくらですか。",
        options: ["500円", "400円", "300円", "200円"],
        answer: 1,
        explanation: "화요일 오전은 평일 할인 대상이므로 500엔에서 100엔 할인된 400엔입니다.",
        evidence: "平日の午前中に利用する場合、大人は100円引きになります。",
        strategy: "요일, 시간, 연령 조건을 본문과 대조하세요."
      }
    ]
  }
];