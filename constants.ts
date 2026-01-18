// 使用腾讯云 COS 加载音频资源
export const DEFAULT_AUDIO_URL = "https://xiaoyuand2026-1252955517.cos.ap-guangzhou.myqcloud.com/yebaihe.mp3";
export const TRANSITION_AUDIO_URL = "https://xiaoyuand2026-1252955517.cos.ap-guangzhou.myqcloud.com/female-sigh-450446.mp3";

export const TEXT_CONTENT = {
  landing: "入深涧，寻百合",
  immersion: [
    "武夷深涧",
    "野百合在丹霞石缝间",
    "兀自盛放",
    "", // Spacer
    "清冽的幽香重塑了",
    "山谷里的那场旧梦",
    "在寂静中生长",
    "", // Spacer
    "空谷驻足",
    "见自己",
    "见天地"
  ],
  product: {
    entryLabel: "溯源 · 安心",
    modal: {
      title: "安心入座的理由",
      origin: {
        title: "[ 关于这一缕香的由来 ]",
        part1: "摒弃化学香精的矫饰，唯留天然草木研磨后的真味。这一支香，由",
        highlight: "非遗传承人",
        part2: "亲手拣选、炮制，将古老的手艺化作指尖的温度。",
        part3: "每一道工序的严苛与纯净，皆已通过国家标准的安全验证。我们敬畏手艺，亦如我们珍视你的每一口呼吸。"
      },
      ingredients: {
        title: "[ 甄选 · 自然原材 ]",
        list: [
          { name: "甘肃百合", desc: "清甜润泽 · 养阴安神" },
          { name: "夜花茉莉", desc: "幽香冷冽 · 疏肝解郁" }
        ]
      },
      reminder: {
        title: "[ 温柔提醒 ]",
        text: "见烟起时，请为空间留一道透气的缝隙。在流动的空气里，草木的韵味方能舒展，最是动人。"
      },
      footer: "( 请在通风处使用，并远离易燃物 )"
    }
  },
  ending: {
    title: "制香师说",
    quote: "「野百合，生于幽处，不以无人而不芳。」",
    body: [
      "我曾见它在绝壁上孤傲生长",
      "那是生命在最贫瘠处开出的花",
      "我以甘肃百合的温润与苏合香的深沉交织",
      "试图复刻那份不被定义的记忆",
      "",
      "正如《香乘》所云",
      "“气韵生动，方为上乘”",
      "",
      "哪怕只有十分钟",
      "也希望这缕香能陪你走过",
      "心中的那段无名山谷"
    ],
    cta: "加入小屿和香的社群"
  }
};

// 10 minutes in milliseconds for immersion time
export const IMMERSION_DURATION = 10 * 60 * 1000;