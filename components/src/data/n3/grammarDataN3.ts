export const grammarDataN3 = [
  {
    id: "g-n3-001",
    level: "N3",
    difficulty: 3,
    title: "～うちに",
    meaning: "상태가 변하기 전의 기간이나, 그 사이에 일어난 변화",
    connection: "동사(사전형/ている형/ない형), い형용사, な형용사, 명사 + の",
    nuance: "어떤 상태가 유지되고 있는 기간 내에 '무언가'를 해야 한다는 의지나, 그 사이 나도 모르게 일어난 변화를 나타냄.",
    contents: [
      {
        index: 1,
        type: "blank",
        label: "기한 내의 의지",
        example_jp: "忘れないうちに、大事なことをメモしておきましょう。",
        example_kr: "잊어버리기 전에, 중요한 것을 메모해 둡시다.",
        highlight: "うちに"
      },
      {
        index: 2,
        type: "order",
        label: "자연스러운 변화",
        segments: ["話している", "うちに、", "外は雨が", "降り出したようです。"],
        answer: 1,
        example_kr: "이야기하고 있는 사이에, 밖은 비가 내리기 시작한 모양입니다."
      }
    ],
    tip: "뒤에 '의지'가 오는지 '결과'가 오는지 확인하는 것이 포인트!"
  },
  {
    id: "g-n3-002",
    level: "N3",
    difficulty: 3,
    title: "～せい",
    meaning: "~이 원인이 되어, 나쁜 결과가 되었다",
    connection: "보통형, な형용사 + な, 명사 + の",
    nuance: "명백한 실패나 부정적인 상황의 책임을 누군가나 무엇인가에 전가하는 느낌으로 사용하며, 탓을 하는 느낌이 강함.",
    contents: [
      {
        index: 1,
        type: "blank",
        label: "공부 부족의 결과",
        example_jp: "しっかり勉強しなかったせいで、テストの結果が悪かったです。",
        example_kr: "제대로 공부하지 않은 탓에, 시험 결과가 나빴습니다.",
        highlight: "せい"
      },
      {
        index: 2,
        type: "blank",
        label: "돌에 걸려 넘어짐",
        example_jp: "道にある石のせいで、転んでけがをしてしまいました。",
        example_kr: "길에 있는 돌 때문에, 넘어져서 다치고 말았습니다.",
        highlight: "せい"
      },
      {
        index: 3,
        type: "order",
        label: "비로 인한 축제 중지",
        segments: ["雨が", "降り続いている", "せいで、", "今年の夏祭りは中止されました。"],
        answer: 2,
        example_kr: "비가 계속 내리고 있는 탓에, 올해 여름 축제는 중지되었습니다."
      }
    ],
    tip: "부정적인 결과가 올 때 사용하며, '덕분에'와 반대되는 개념입니다."
  },
  {
    id: "g-n3-003",
    level: "N3",
    difficulty: 2,
    title: "～もの (～もん)",
    meaning: "~이니까 / ~인걸 (이유 설명)",
    connection: "보통형, な형용사 + な, 명사 + な",
    nuance: "주로 개인적인 이유를 정당화하거나 가벼운 변명을 할 때, 혹은 응석을 부리는 느낌으로 사용함.",
    contents: [
      {
        index: 1,
        type: "blank",
        label: "깜빡한 숙제",
        example_jp: "宿題を完全に忘れてしまったものだから、先生に怒られてしまいました。",
        example_kr: "숙제를 완전히 잊어버렸던 것이라서, 선생님께 혼나고 말았습니다.",
        highlight: "もの"
      },
      {
        index: 2,
        type: "blank",
        label: "응석 섞인 변명",
        example_jp: "「ちょっと食べ過ぎじゃない？」「だって、お腹が空いているんだもん。」",
        example_kr: "「좀 너무 많이 먹는 거 아니야?」「그치만, 배가 고픈걸.」",
        highlight: "もん"
      },
      {
        index: 3,
        type: "order",
        label: "오랜만의 쇼핑",
        segments: ["久しぶりの", "買い物だった", "もので、", "買い過ぎてしまいました。"],
        answer: 2,
        example_kr: "오랜만의 쇼핑이었던 터라, 그만 이것저것 너무 많이 사고 말았습니다."
      }
    ],
    tip: "구어체에서 'もの니까', '것이라' 등의 느낌으로 자신의 입장을 설명할 때 자주 쓰입니다."
  },
  {
    id: "g-n3-004",
    level: "N3",
    difficulty: 3,
    title: "～ため",
    meaning: "~때문에 (공적인 원인이나 이유)",
    connection: "보통형, な형용사 + な / である, 명사 + の / である",
    nuance: "뉴스, 안내문 등 공적인 상황이나 격식 있는 자리에서 객관적인 이유를 나타낼 때 사용함.",
    contents: [
      {
        index: 1,
        type: "blank",
        label: "시설의 사정",
        example_jp: "冷蔵庫の故障のため、急に店を休むことにしました。",
        example_kr: "냉장고 고장 때문에, 갑자기 가게를 쉬기로 했습니다.",
        highlight: "ため"
      },
      {
        index: 2,
        type: "blank",
        label: "부주의한 발언",
        example_jp: "相手の気持ちを考えずに言ってしまったために、ひどく傷つけてしまった。",
        example_kr: "상대의 기분을 생각하지 않고 말해버린 탓에, 심하게 상처를 주고 말았다.",
        highlight: "ため"
      },
      {
        index: 3,
        type: "order",
        label: "건강상의 이유",
        segments: ["体調が", "かなり悪かった", "ため、", "今日は仕事を休ませていただきました。"],
        answer: 2,
        example_kr: "몸 상태가 상당히 안 좋았기 때문에, 오늘은 업무를 쉬게 되었습니다."
      }
    ],
    tip: "개인적인 변명보다는 객관적인 사실이나 인과관계를 전달할 때 적합한 격식 있는 표현입니다."
  },
  {
    id: "g-n3-005",
    level: "N3",
    difficulty: 2,
    title: "～のだから",
    meaning: "~이므로 (상대도 알고 있는 사실)",
    connection: "보통형, な형용사 + な, 명사 + な + のだから / のですから / んだから / んですから",
    nuance: "상대방도 알고 있는 사실을 근거로 하여, 자신의 주장이나 결의, 충고 등을 나타냄.",
    contents: [
      {
        index: 1,
        type: "blank",
        label: "면허가 있으니 운전 권유",
        example_jp: "山本さんは車の免許を持っているんだから、たまには運転すればいいのに。",
        example_kr: "야마모토 씨는 운전면허를 가지고 있으니까, 가끔은 운전하면 좋을 텐데.",
        highlight: "んだから"
      },
      {
        index: 2,
        type: "blank",
        label: "건강을 위한 충고",
        example_jp: "最近ちゃんと眠れていないのですから、今日は早く寝てください。",
        example_kr: "최근 제대로 자지 못하고 있으니까, 오늘은 일찍 주무세요.",
        highlight: "のですから"
      },
      {
        index: 3,
        type: "order",
        label: "파티 즐기기 제안",
        segments: ["せっかくの", "パーティー", "なんですから、", "楽しんでいってくださいね。"],
        answer: 2,
        example_kr: "모처럼의 파티니까, 즐겁게 지내다 가세요."
      }
    ],
    tip: "상대방도 이미 알고 있는 당연한 상황을 끌어와서 내 생각을 말할 때 씁니다."
  },
  {
    id: "g-n3-006",
    level: "N3",
    difficulty: 1,
    title: "～をきっかけに",
    meaning: "~을 계기로, ...을 시작했다",
    connection: "동사(사전형/た형) + の / こと + をきっかけに, 명사 + をきっかけに",
    nuance: "어떤 사건이나 상황이 직접적인 동기가 되어 새로운 행동이나 변화가 일어났음을 나타냄.",
    contents: [
      {
        index: 1,
        type: "blank",
        label: "퇴직 후 세계 여행",
        example_jp: "長年勤めた会社を辞めたのをきっかけに、世界一周の旅に出ることにした。",
        example_kr: "오랫동안 근무한 회사를 그만둔 것을 계기로, 세계 일주 여행을 떠나기로 했다.",
        highlight: "のをきっかけに"
      },
      {
        index: 2,
        type: "blank",
        label: "영화로 시작된 음악 공부",
        example_jp: "子供の頃に見に行ったアニメ映画をきっかけに、音楽の道を志すようになった。",
        example_kr: "어릴 적에 보러 갔던 애니메이션 영화를 계기로, 음악의 길을 지향하게 되었다.",
        highlight: "をきっかけに"
      },
      {
        index: 3,
        type: "order",
        label: "PC 구입과 문서 작성",
        segments: ["新しいパソコンを", "買ったのを", "きっかけに、", "作り方を一から覚えた。"],
        answer: 2,
        example_kr: "새 컴퓨터를 산 것을 계기로, 자료 만드는 법을 처음부터 익혔다."
      }
    ],
    tip: "어떤 변화의 '시작점'이 된 구체적인 사건을 언급할 때 주로 사용합니다."
  },
 {
  id: "g-n3-007",
  level: "N3",
  difficulty: 3,
  title: "～わけだ",
  meaning: "①그러니까 ~한 거구나 (납득) / ②~라는 뜻이네 (요약)",
  connection: "보통형, な형용사 + な, 명사 + な + わけだ",
  nuance: "상대방의 말을 듣고 그 이유를 깨달아 납득하거나, 상황을 요약하여 결론을 내릴 때 사용함.",
  contents: [
    {
      index: 1,
      type: "blank",
      label: "이야기 요약 (납득)",
      example_jp: "君の話をまとめると、つまり来週から一週間休みが欲しいというわけだね。",
      example_kr: "네 이야기를 정리하면, 결국 다음 주부터 일주일간 휴가를 원한다는 뜻이구나.",
      highlight: "わけだ"
    },
    {
      index: 2,
      type: "blank",
      label: "능숙한 영어의 이유",
      example_jp: "佐藤さんは3年間も海外で働いていたんですか。道理で英語が上手なわけだ。",
      example_kr: "사토 씨는 3년이나 해외에서 일했던 건가요? 어쩐지 영어가 능숙한 거군요.",
      highlight: "わけだ"
    },
    {
      index: 3,
      type: "order",
      label: "머리색이 멋진 이유",
      segments: ["彼女は", "美容師だそうだ。", "だから髪の色も", "素敵なわけですね。"],
      answer: 3,
      example_kr: "그녀는 미용사라고 하네요. 그래서 머리색이 항상 멋진 거군요."
    }
  ],
  tip: "앞서 나온 정보나 상황을 근거로 '당연한 결과'임을 나타낼 때 핵심이 있습니다."
},
{
  id: "g-n3-008",
  level: "N3",
  difficulty: 2,
  title: "～以来 (いらい)",
  meaning: "~한 이후로, 줄곧 같은 상태다",
  connection: "동사 て형, 명사 + 以来",
  nuance: "과거의 어떤 시점부터 지금까지 계속해서 특정한 상태가 이어지고 있음을 나타냄.",
  contents: [
    {
      index: 1,
      type: "blank",
      label: "고교 시절부터의 우정",
      example_jp: "彼女とは高校で出会って以来、ずっと一番の親友だ。",
      example_kr: "그녀와는 고등학교에서 만난 이래로, 줄곧 가장 친한 친구다.",
      highlight: "以来"
    },
    {
      index: 2,
      type: "blank",
      label: "그때 이후 연락 두절",
      example_jp: "彼とは、あの事件以来一度も連絡を取っていない。",
      example_kr: "그와는, 그 사건 이래로 한 번도 연락을 하지 않고 있다.",
      highlight: "以来"
    },
    {
      index: 3,
      type: "order",
      label: "해외 경험 후의 변화",
      segments: ["初めて", "海外旅行に", "行って以来、", "興味を持つようになった。"],
      answer: 2,
      example_kr: "처음으로 해외여행을 간 이래로, 흥미를 갖게 되었다."
    }
  ],
  tip: "단순한 과거의 시점이 아니라, 그 이후 '계속되고 있는 상태'에 초점이 있습니다."
},
{
  id: "g-n3-009",
  level: "N3",
  difficulty: 2,
  title: "～によって",
  meaning: "~이 원인이 되어, ~로 인해 (원인/이유)",
  connection: "명사 + によって / により",
  nuance: "어떤 사태나 현상이 발생하게 된 원인이나 이유를 나타낼 때 사용하며, 격식 있는 표현에 주로 쓰임. 주로 뒤에 결과적인 사태가 옴.",
  contents: [
    {
      index: 1,
      type: "blank",
      label: "질병으로 인한 생활 변화",
      example_jp: "新しい病気の流行によって、私たちの生活スタイルが大きく変わりました。",
      example_kr: "새로운 질병의 유행으로 인해, 우리들의 생활 스타일이 크게 변했습니다.",
      highlight: "によって"
    },
    {
      index: 2,
      type: "blank",
      label: "독서의 즐거움을 깨달음",
      example_jp: "この素晴らしい本に出会ったことによって、読書の楽しさを知ることができた。",
      example_kr: "이 멋진 책을 만난 덕분에, 독서의 즐거움을 알 수 있었다.",
      highlight: "によって"
    },
    {
      index: 3,
      type: "order",
      label: "폭설로 인한 도로 통제",
      segments: ["昨夜からの", "大雪により、", "いくつかの道路が", "通れなくなっています。"],
      answer: 1,
      example_kr: "어젯밤부터 내린 폭설로 인해, 몇몇 도로가 통행할 수 없게 되었습니다."
    }
  ],
  tip: "현상의 원인을 객관적으로 전달할 때 사용하며, 뒤에 주로 결과적인 문장이 옵니다."
},
{
  id: "g-n3-010",
  level: "N3",
  difficulty: 3,
  title: "～まま",
  meaning: "변하지 않고 그대로 (상태 유지)",
  connection: "동사 た형 / ない형, い형용사, な형용사 + な, 명사 + の + まま",
  nuance: "어떤 상태가 끝난 뒤에도 그 결과가 계속 유지되고 있거나, 원래 그래야 할 변화가 일어나지 않은 상태를 나타냄.",
  contents: [
    {
      index: 1,
      type: "blank",
      label: "변하지 않은 풍경",
      example_jp: "私の故郷の景色は、子どもの頃のまま今も変わっていません。",
      example_kr: "내 고향의 풍경은, 어릴 적 그대로 지금도 변하지 않았습니다.",
      highlight: "まま"
    },
    {
      index: 2,
      type: "blank",
      label: "에어컨을 켠 채 외출",
      example_jp: "急いでいたので、エアコンをつけたまま家を出てしまいました。",
      example_kr: "서두르고 있었기에, 에어컨을 켠 채로 집을 나오고 말았습니다.",
      highlight: "まま"
    },
    {
      index: 3,
      type: "order",
      label: "그대로 두라는 요청",
      segments: ["片付けは", "後で私がしますから、", "そのままに", "しておいてください. "],
      answer: 2,
      example_kr: "정리는 나중에 제가 할 테니까, 그대로 두세요."
    }
  ],
  tip: "자신이 의도했든 아니든, 특정 상태가 지속되고 있음을 강조할 때 사용합니다."
  },
  {
  id: "g-n3-011",
  level: "N3",
  difficulty: 2,
  title: "～つつ",
  meaning: "~하면서 (두 가지 동작의 동시 진행)",
  connection: "동사 ます형 + つつ",
  nuance: "두 가지 동작을 동시에 하는 것을 나타내며, '～ながら'보다 격식 있고 딱딱한 느낌의 표현임.",
  contents: [
    {
      index: 1,
      type: "blank",
      label: "알면서도 포기 못 함",
      example_jp: "彼女が僕のことを好きではないと知りつつも、諦めることができません。",
      example_kr: "그녀가 나를 좋아하지 않는다는 것을 알면서도, 포기할 수가 없습니다.",
      highlight: "つつ"
    },
    {
      index: 2,
      type: "blank",
      label: "생각은 하지만 몸이 안 따름",
      example_jp: "早く洗濯しなければと思いつつ、疲れていたので寝てしまいました。",
      example_kr: "빨리 빨래를 해야지 생각하면서도, 피곤해서 자버리고 말았습니다.",
      highlight: "つつ"
    },
    {
      index: 3,
      type: "order",
      label: "육아와 요리의 병행",
      segments: ["料理を作りつつ、", "子どもの", "面倒を見るのは", "本当に大変なことです。"],
      answer: 0,
      example_kr: "요리를 만들면서, 아이를 돌보는 것은 정말 힘든 일입니다."
    }
  ],
  tip: "동시 진행의 의미 외에도, 앞뒤 문맥에 따라 '~하면서도(역접)'의 뉘앙스를 풍기기도 합니다."
},
{
  id: "g-n3-012",
  level: "N3",
  difficulty: 2,
  title: "～とともに",
  meaning: "~와 동시에 / ~와 함께 (동시 발생 및 병행)",
  connection: "동사 사전형, 명사 + である + とともに",
  nuance: "두 가지 상태나 동작이 동시에 일어나거나, 한쪽의 변화에 맞춰 다른 한쪽도 함께 변화함을 나타냄.",
  contents: [
    {
      index: 1,
      type: "blank",
      label: "두 가지 관계의 공존",
      example_jp: "彼女は私に日本語を教えてくれる先生であるとともに、いい友達でもあります。",
      example_kr: "그녀는 나에게 일본어를 가르쳐 주는 선생님인 동시에, 좋은 친구이기도 합니다.",
      highlight: "とともに"
    },
    {
      index: 2,
      type: "blank",
      label: "기온에 따른 변화",
      example_jp: "気温が上がるとともに、熱中症で体調を崩す人が増えてきました。",
      example_kr: "기온이 올라감과 동시에, 열사병으로 몸 상태가 나빠지는 사람이 늘어났습니다.",
      highlight: "とともに"
    },
    {
      index: 3,
      type: "order",
      label: "졸업과 새로운 시작",
      segments: ["高校を卒業すると", "ともに、", "故郷を離れて", "東京で一人暮らしを始めた。"],
      answer: 1,
      example_kr: "고등학교를 졸업함과 동시에, 고향을 떠나 도쿄에서 자취를 시작했다."
    }
  ],
  tip: "문어체적인 표현으로, 단순히 '함께'라는 뜻 외에 'A와 병행하여 B하다'라는 느낌을 줍니다."
},
{
  id: "g-n3-013",
  level: "N3",
  difficulty: 2,
  title: "～つつある",
  meaning: "점점 ~해가고 있다 (진행 중인 변화)",
  connection: "동사 ます형 + つつある",
  nuance: "어떤 변화가 현재 꾸준히 진행되고 있는 과정에 있음을 나타낼 때 사용하며, 격식 있는 표현임.",
  contents: [
    {
      index: 1,
      type: "blank",
      label: "학습자 수의 추이",
      example_jp: "アニメの影響によって、海外での日本語学習者は増加しつつある。",
      example_kr: "애니메이션의 영향으로 인해, 해외에서의 일본어 학습자는 증가하고 있다.",
      highlight: "つつある"
    },
    {
      index: 2,
      type: "blank",
      label: "시대에 따른 변화",
      example_jp: "時代の変化に合わせて、人々の働き方は多様になりつつある。",
      example_kr: "시대의 변화에 맞춰서, 사람들의 일하는 방식은 다양해지고 있다.",
      highlight: "つつある"
    },
    {
      index: 3,
      type: "order",
      label: "병의 회복 과정",
      segments: ["彼の病気は", "少しずつ", "回復しつつあるが、", "まだ通院が必要なようだ。"],
      answer: 2,
      example_kr: "그의 병은 조금씩 회복되어 가고 있지만, 아직 통원 치료가 필요한 듯하다."
    }
  ],
  tip: "이미 완료된 변화가 아니라, '지금 이 순간에도 변화하고 있음'을 강조할 때 사용합니다."
},
{
    id: "g-n3-014",
    level: "N3",
    difficulty: 3,
    title: "～ば～ほど",
    meaning: "~하면 할수록 더욱 ...하다",
    connection: "동사(바형 + 사전형) + ほど, い형용사(ければ + い) + ほど, 나형용사/명사(であれば/なら) + ほど",
    nuance: "앞의 정도가 높아짐에 따라 뒤의 정도도 비례해서 함께 높아짐을 나타냄.",
    contents: [
      {
        index: 1,
        type: "blank",
        label: "과일의 맛",
        example_jp: "リンゴやメロンは甘ければ甘이ほど美味しいと感じる。",
        example_kr: "사과나 멜론은 달면 달수록 맛있다고 느낀다.",
        highlight: "ければ甘いほど"
      },
      {
        index: 2,
        type: "blank",
        label: "고생 끝의 보람",
        example_jp: "大変であればあるほど、終わった時の達成感は大きいものだ。",
        example_kr: "힘들면 힘들수록, 끝났을 때의 성취감은 큰 법이다.",
        highlight: "であればあるほど" // 깔끔하게 핵심만!
      },
      {
        index: 3,
        type: "order",
        label: "연습과 실력",
        segments: ["料理は", "作れば作るほど", "上手になっていく", "ものですよ。"],
        answer: 1,
        example_kr: "요리는 만들면 만들수록 잘하게 되는 법이에요."
      }
    ],
    tip: "동일한 단어를 반복하여 사용하며, 변화의 정도가 비례함을 강조합니다."
  },
  {
    id: "g-n3-015",
    level: "N3",
    difficulty: 2,
    title: "～にしたがって",
    meaning: "~함에 따라 (점점 변화함)",
    connection: "동사(사전형) / 명사 + にしたがって",
    nuance: "어떤 한 상태가 변화하는 것과 나란히, 다른 상태도 단계적으로 변화해 가는 과정을 나타냄.",
    contents: [
      {
        index: 1,
        type: "blank",
        label: "나이가 들며 생기는 변화",
        example_jp: "年を取るにしたがって、細かいことがあまり気にならなくなった。",
        example_kr: "나이를 먹음에 따라, 세세한 일이 별로 신경 쓰이지 않게 되었다.",
        highlight: "にしたがって"
      },
      {
        index: 2,
        type: "blank",
        label: "시간 경과에 따른 기온",
        example_jp: "日が落ちるにしたがって、外の空気もだんだん冷たくなってきた。", // 들여쓰기 정렬
        example_kr: "해가 짐에 따라, 바깥 공기도 점점 차가워졌다.", // 들여쓰기 정렬
        highlight: "にしたがって"
      },
      {
        index: 3,
        type: "order",
        label: "계절의 변화",
        segments: ["春가 近づくに", "したがって、", "庭の桜の花も", "少しずつ咲き始めている。"],
        answer: 1,
        example_kr: "봄이 가까워짐에 따라, 마당의 벚꽃도 조금씩 피기 시작하고 있다."
      }
    ],
    tip: "A라는 변화에 맞춰 B도 자연스럽게 변화해 가는 일방향적인 과정을 설명할 때 적합합니다."
  },
  {
    id: "g-n3-016",
    level: "N3",
    difficulty: 3,
    title: "～ばかり",
    meaning: "계속 ~하기만 하다 (부정적인 방향으로의 진행)",
    connection: "동사(사전형) + ばかり (だ/で)",
    nuance: "어떤 상태가 개선되지 않고 나쁜 방향으로만 일방적으로 진행되고 있음을 나타낼 때 사용함.",
    contents: [
      {
        index: 1,
        type: "blank",
        label: "물가와 수입",
        example_jp: "給料は全然上がらないのに、物価は高くなるばかりだ。",
        example_kr: "월급은 전혀 오르지 않는데, 물가는 비싸지기만 한다.",
        highlight: "ばかりだ"
      },
      {
        index: 2,
        type: "blank",
        label: "악화되는 몸 상태",
        example_jp: "ひどい風邪をひいてしまい、体調は悪くなるばかりだ。",
        example_kr: "독한 감기에 걸려 버려서, 몸 상태는 나빠지기만 한다.",
        highlight: "ばかりだ"
      },
      {
        index: 3,
        type: "order",
        label: "누적되는 피로",
        segments: ["毎日の残業のせいで、", "疲れが", "たまるばかりで", "全然取れない。"],
        answer: 2,
        example_kr: "매일 계속되는 잔업 탓에, 피로가 쌓이기만 할 뿐 전혀 풀리지 않는다."
      }
    ],
    tip: "주로 상황이 악화되는 맥락에서 사용하며, 변화의 방향이 한쪽으로 치우쳐 있음을 강조합니다."
  },
{
    id: "g-n3-017",
    level: "N3",
    difficulty: 3,
    title: "～として",
    meaning: "~의 입장으로, ~로서 (자격/신분)",
    connection: "명사 + として",
    nuance: "어떤 자격이나 입장, 명목을 가지고 있음을 나타냄.",
    contents: [
      {
        index: 1,
        type: "blank",
        label: "대표로서의 인사",
        example_jp: "卒業式では、卒業生の代表として皆の前で感謝の言葉を述べた。",
        example_kr: "졸업식에서는, 졸업생의 대표로서 모두의 앞에서 감사의 말을 전했다.",
        highlight: "として"
      },
      {
        index: 2,
        type: "blank",
        label: "사회인의 태도",
        example_jp: "これからは社会人としての責任を持ち、自分の行動に気をつけなければならない。",
        example_kr: "앞으로는 사회인으로서의 책임을 갖고, 자신의 행동에 주의해야만 한다.",
        highlight: "としての"
      },
      {
        index: 3,
        type: "order",
        label: "리더의 역할",
        segments: ["チームの", "リーダーとして、", "メンバー全員の", "意見を聞くように努めている。"],
        answer: 1,
        example_kr: "팀의 리더로서, 멤버 전원의 의견을 듣도록 노력하고 있다."
      }
    ],
    tip: "특정한 자격이나 지위에서 나오는 태도나 역할을 설명할 때 주로 쓰입니다."
  },
  {
    id: "g-n3-018",
    level: "N3",
    difficulty: 3,
    title: "～にとって",
    meaning: "~의 입장에서 생각하면 (가치 판단의 기준)",
    connection: "명사 + にとって",
    nuance: "특정한 대상을 기준으로 보았을 때의 평가나 의견, 가치 등을 나타냄.",
    contents: [
      {
        index: 1,
        type: "blank",
        label: "환경의 중요성",
        example_jp: "子供たちにとって、安全に遊べる公園があることはとても大切なことです。",
        example_kr: "아이들에게 있어서, 안전하게 놀 수 있는 공원이 있는 것은 매우 중요한 일이다.",
        highlight: "にとって"
      },
      {
        index: 2,
        type: "blank",
        label: "인생의 가치",
        example_jp: "私にとって最高の贅沢は、週末に家でゆっくり読書をすることです。",
        example_kr: "저에게 있어 최고의 사치는, 주말에 집에서 느긋하게 책을 읽는 것입니다.",
        highlight: "にとって"
      },
      {
        index: 3,
        type: "order",
        label: "그의 행복",
        segments: ["木村さんに", "とっての楽しみは、", "孫の成長を", "写真で見ることだそうだ。"], // 일본어로 완벽하게 수정됨
        answer: 1,
        example_kr: "기무라 씨에게 있어서의 즐거움은, 손주의 성장을 사진으로 보는 것이라고 한다."
      }
    ],
    tip: "뒤에는 주로 '중요하다', '어렵다', '즐겁다'와 같은 평가나 상태를 나타내는 말이 옵니다."
  },
  {
    id: "g-n3-019",
    level: "N3",
    difficulty: 2,
    title: "～に基づいて",
    meaning: "~에 기초하여, ~을 바탕으로 (근거/기준)",
    connection: "명사 + に基づいて",
    nuance: "어떤 사실, 데이터, 계획 등을 확고한 근거로 삼아 뒤의 행동이나 결과가 이루어짐을 나타냄.",
    contents: [
      {
        index: 1,
        type: "blank",
        label: "목표에 따른 실행",
        example_jp: "今年こそは、年始に立てた目標に基づいて一日一日を大切に過ごしたい。",
        example_kr: "올해야말로, 연초에 세운 목표에 기초하여 하루하루를 소중하게 보내고 싶다.",
        highlight: "に基づいて"
      },
      {
        index: 2,
        type: "blank",
        label: "사용자 의견 반영",
        example_jp: "このアプリは、多くの利用者の意見に基づいて新しい機能が追加された。",
        example_kr: "이 앱은, 많은 이용자의 의견을 바탕으로 새로운 기능이 추가되었다.",
        highlight: "に基づいて"
      },
      {
        index: 3,
        type: "order",
        label: "실화 바탕의 작품",
        segments: ["来月公開される映画は、", "実際に起こった", "事件に基づいて", "制作されているそうです。"],
        answer: 2,
        example_kr: "다음 달 개봉하는 영화는, 실제로 일어났던 사건을 바탕으로 제작되었다고 한다."
      }
    ],
    tip: "추측이 아닌 객관적인 사실이나 자료를 토대로 무언가를 할 때 사용하는 표현입니다."
  },
  {
    id: "g-n3-020",
    level: "N3",
    difficulty: 3,
    title: "～を中心に",
    meaning: "~을 중심으로 (범위의 핵심)",
    connection: "명사 + を中心に",
    nuance: "어떤 대상이나 지역, 사람을 가장 중요한 핵심으로 삼고 그 주변까지 포함함을 나타냄.",
    contents: [
      {
        index: 1,
        type: "blank",
        label: "젊은 층의 유행",
        example_jp: "最近はSNSを利用する若者を中心に、レトロな写真が再び流行している。",
        example_kr: "최근에는 SNS를 이용하는 젊은이들을 중심으로, 레트로한 사진이 다시 유행하고 있다.",
        highlight: "を中心に"
      },
      {
        index: 2,
        type: "blank",
        label: "지역 봉사 활동",
        example_jp: "この町では、大学生を中心としたボランティアがごみ拾いをしている。",
        example_kr: "이 마을에서는, 대학생을 중심으로 한 자원봉사자들이 쓰레기 줍기를 하고 있습니다.",
        highlight: "を中心とした"
      },
      {
        index: 3,
        type: "order",
        label: "기상 예보",
        segments: ["今夜から明日にかけて、", "関東地方を", "中心に", "激しい雨が降る見込みです。"],
        answer: 2,
        example_kr: "오늘 밤부터 내일까지, 간토 지방을 중심으로 격렬한 비가 내릴 전망입니다."
      }
    ],
    tip: "중점이 되는 대상을 먼저 언급하고 활동이나 현상의 범위를 설명할 때 유용합니다."
  },
  {
    id: "g-n3-021",
    level: "N3",
    difficulty: 2,
    title: "～とおり / ～どおり",
    meaning: "~와 똑같이, ~대로",
    connection: "동사(사전형/た형) + とおり, 명사 + の + とおり, 명사 + どおり",
    nuance: "어떤 기준이나 예상, 혹은 지시받은 내용과 똑같이 행동하거나 어떤 일이 진행됨을 나타냄.",
    contents: [
      {
        index: 1,
        type: "order",
        label: "지시대로 행동함",
        example_jp: "本に書いてあるとおりにやったのに、うまくいかない。",
        example_kr: "책에 적혀 있는 대로 했는데, 잘되지 않는다.",
        segments: ["本に", "書いてある", "とおりにやったのに、", "うまくいかない。"],
        answer: 2
      },
      {
        index: 2,
        type: "blank",
        label: "예상과 다른 결과",
        example_jp: "計画どおり進まないことはよくあることなので、心配しなくてもいいですよ。",
        example_kr: "계획대로 진행되지 않는 일은 흔히 있는 일이니, 걱정하지 않아도 됩니다.",
        highlight: "どおり"
      },
      {
        index: 3,
        type: "order",
        label: "배운 대로 요리함",
        example_jp: "母が教えてくれたとおりに作ってみたが、なかなかおいしく作ることができない。",
        example_kr: "어머니가 가르쳐 주신 대로 만들어 보았지만, 좀처럼 맛있게 만들 수가 없다.",
        segments: ["母が", "教えてくれた", "とおりに作ってみたが、", "なかなかおいしく作ることができない。"],
        answer: 2
      }
    ],
    tip: "명사 뒤에 바로 붙을 때는 'どおり'로 탁음화되는 점에 주의해야 해!"
  },
  {
    id: "g-n3-022",
    level: "N3",
    difficulty: 1,
    title: "～という",
    meaning: "~라고 하는, ~라는",
    connection: "명사 + という + 명사",
    nuance: "사물의 이름이나 내용을 설명할 때 사용하며, 누구나 아는 사실을 객관적으로 언급할 때도 쓰임.",
    contents: [
      {
        index: 1,
        type: "order",
        label: "품종 설명",
        example_jp: "私は、トイプードルという種類の犬を飼っています。",
        example_kr: "저는 토이푸들이라고 하는 종류의 개를 기르고 있습니다.",
        segments: ["私は、", "トイプードルという", "種類の犬を", "飼っています。"],
        answer: 1
      },
      {
        index: 2,
        type: "blank",
        label: "이웃 소개",
        example_jp: "となりに引っ越してきた加藤さんという人、知ってる？",
        example_kr: "옆집에 이사 온 카토 씨라는 사람, 알아?",
        highlight: "という"
      }
    ],
    tip: "회화에서는 'という'가 'って'로 줄어드는 경우가 많으니까 리스닝할 때 조심해!"
  },
  {
    id: "g-n3-023",
    level: "N3",
    difficulty: 3,
    title: "～に基づいて / ～に基づく",
    meaning: "~에 기초하여, ~을 바탕으로",
    connection: "명사 + に基づいて / 명사 + に基づく + 명사",
    nuance: "어떤 사실이나 데이터, 원칙 등을 확고한 근거로 삼을 때 사용하는 격식 있는 표현임.",
    contents: [
      {
        index: 1,
        type: "order",
        label: "자료에 근거한 복원",
        example_jp: "この博物館は、江戸時代の写真に基づいて作られている。",
        example_kr: "이 박물관은 에도 시대의 사진에 기초하여 만들어져 있다.",
        segments: ["この博物館は、", "江戸時代の", "写真に基づいて", "作られている。"],
        answer: 2
      },
      {
        index: 2,
        type: "blank",
        label: "계획에 따른 행동",
        example_jp: "計画に基づいて行動することが、成功への近道だ。",
        example_kr: "계획에 기초하여 행동하는 것이, 성공으로의 지름길이다.",
        highlight: "に基づいて"
      }
    ],
    tip: "명사를 바로 꾸며줄 때는 'に基づく + 명사' 형태가 자연스럽다는 거 잊지 마!"
  }
];