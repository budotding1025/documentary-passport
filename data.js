/** 纪录片库：工作日 A / 周末 B；四格 + 审美/商业肌肉
 * play: stable=已核正版 | ok=自用可看 | missing=片源暂缺（工具态）| search/risk=旧标记
 * watchLink: 自家现在点开的地址（可免费高清 / 投稿）
 * official: 最多 2 条正版页，供以后付费工具切换；不抓片、不下载
 * blurb: 卡片外可见的一句话简介
 * 每部只归一个 category；盖印下沉到集（episodes[]）。
 * episode: { id, n, title, blurb, duration?, link?, hints?[] }
 * 无 episodes 的片子，界面会自动当成「整部 / 1 集」打卡。
 * link / linkLabel 与 watchLink / watchLabel 同步，兼容旧代码。
 */
window.DOC_CATALOG = {
  "title": "看世界护照",
  "categories": [
    {
      "id": "drive",
      "name": "自驱力",
      "short": "自驱",
      "muscles": [
        "意志",
        "选择"
      ]
    },
    {
      "id": "nature",
      "name": "科学探索",
      "short": "科学",
      "muscles": [
        "生物",
        "实验",
        "数理"
      ]
    },
    {
      "id": "human",
      "name": "人文历史",
      "short": "人文",
      "muscles": [
        "叙事",
        "审美"
      ]
    },
    {
      "id": "finance",
      "name": "理财经济",
      "short": "理财",
      "muscles": [
        "商业",
        "工程"
      ]
    }
  ],
  "rotation": [
    "drive",
    "nature",
    "human",
    "finance"
  ],
  "titles": [
    {
      "id": "xiaoxiao",
      "heroArt": "./covers/hero/xiaoxiao.jpg",
      "title": "小小少年",
      "category": "drive",
      "slot": "A",
      "role": "main",
      "duration": "约 36 分钟 × 6 集",
      "episodeHint": "当晚只看 1 集",
      "muscle": "意志",
      "blurb": "六个同龄孩子各自痴迷一件事：练习、失败、再来。看别人怎么把热爱熬成习惯。",
      "link": "https://www.bilibili.com/bangumi/play/ep391685",
      "linkLabel": "B 站正版",
      "play": "stable",
      "shareable": true,
      "playNote": "正版备份 1 条 · 自用走 watchLink；工具前可再补 1 条",
      "mapPin": "同龄人 · 痴迷与坚持",
      "watchLink": "https://www.bilibili.com/bangumi/play/ep391685",
      "watchLabel": "B 站正版",
      "watchNote": "自用现开此链（正版番剧，全集完结；高清常需大会员）。工具模式改走 official。",
      "official": [
        {
          "kind": "bilibili",
          "url": "https://www.bilibili.com/bangumi/play/ep391685",
          "label": "B 站正版"
        }
      ]
    },
    {
      "id": "kipchoge",
      "heroArt": "./covers/hero/kipchoge.jpg",
      "title": "基普乔格：最后的里程碑",
      "category": "drive",
      "slot": "B",
      "role": "must",
      "duration": "电影约 85–90 分钟",
      "episodeHint": "周末一部",
      "muscle": "意志",
      "blurb": "马拉松王者挑战「两小时内跑完」。不是鸡汤，是训练、团队和「人类没有极限」。",
      "link": "https://www.bilibili.com/video/BV1Ca411n74Z/",
      "linkLabel": "B 站直达",
      "play": "ok",
      "shareable": false,
      "playNote": "尚无正版备份 · 自用 watchLink；工具上线前须补或下架",
      "mapPin": "维也纳 · 人类没有极限",
      "parentNote": "无正版页，投稿可能下架",
      "watchLink": "https://www.bilibili.com/video/BV1Ca411n74Z/",
      "watchLabel": "B 站直达",
      "watchNote": "自用：投稿直链；清晰度与是否下架不保证。工具上线前须补 official，否则标「片源暂缺」。",
      "official": []
    },
    {
      "id": "richpoor",
      "heroArt": "./covers/hero/richpoor.jpg",
      "title": "富哥哥，穷弟弟",
      "category": "drive",
      "slot": "B",
      "role": "must",
      "duration": "约 47–60 分钟",
      "episodeHint": "家长先看再陪看",
      "muscle": "选择",
      "blurb": "一对兄弟互换生活八天：钱、习惯、选择如何把人生推到两端。主归自驱；家长陪看讨论。",
      "link": "https://www.bilibili.com/video/BV1Ys4y1h7Ph/",
      "linkLabel": "B 站直达",
      "play": "ok",
      "shareable": false,
      "playNote": "尚无正版备份 · 自用 watchLink；工具上线前须补或下架",
      "mapPin": "伦敦 · 选择与习性",
      "parentNote": "阶层对照，非鸡汤",
      "watchLink": "https://www.bilibili.com/video/BV1Ys4y1h7Ph/",
      "watchLabel": "B 站直达",
      "watchNote": "自用：投稿直链；请先确认完整版。工具上线前须补 official，否则标「片源暂缺」。",
      "official": []
    },
    {
      "id": "sevenup",
      "heroArt": "./covers/hero/sevenup.jpg",
      "title": "人生七年",
      "category": "drive",
      "slot": "B",
      "role": "side",
      "duration": "约 60–140 分钟 / 部（可拆看）",
      "episodeHint": "周末 · 家长陪看 · 先从「7岁」起",
      "muscle": "选择",
      "blurb": "每隔七年回访同一批英国孩子：阶层、学校、梦想怎样一步步变成人生。适合和孩子聊「选择会留下痕迹」。",
      "link": "https://v.qq.com/x/cover/fh87amml4j6fivp.html",
      "linkLabel": "腾讯视频正版",
      "play": "stable",
      "shareable": true,
      "playNote": "正版备份 1 条 · 自用走 watchLink；工具前可再补 1 条",
      "mapPin": "英国 · 每七年一次回访",
      "parentNote": "跨几十年人生，含阶层落差、婚姻与失落；必须家长陪看，建议只选早年几部，勿一口气追到中年",
      "episodes": [
        {
          "id": "sevenup-7",
          "n": 1,
          "title": "7岁",
          "blurb": "一群七岁孩子谈学校、家和长大以后想做什么。",
          "duration": "约 40–60 分钟",
          "link": "https://v.qq.com/x/cover/fh87amml4j6fivp.html",
          "hints": [
            "童年",
            "梦想",
            "阶层"
          ]
        },
        {
          "id": "sevenup-14",
          "n": 2,
          "title": "14岁",
          "blurb": "青春期：学校、朋友、对未来的想象开始分化。",
          "duration": "约 60–90 分钟",
          "link": "https://v.qq.com/x/cover/fh87amml4j6fivp.html",
          "hints": [
            "青春",
            "学校",
            "变化"
          ]
        },
        {
          "id": "sevenup-21",
          "n": 3,
          "title": "21岁",
          "blurb": "成年门槛：工作、恋爱、第一次重要选择。",
          "duration": "约 90–120 分钟",
          "link": "https://v.qq.com/x/cover/fh87amml4j6fivp.html",
          "hints": [
            "成年",
            "选择",
            "工作"
          ]
        }
      ],
      "watchLink": "https://v.qq.com/x/cover/fh87amml4j6fivp.html",
      "watchLabel": "腾讯视频正版",
      "watchNote": "自用现开此链（腾讯视频《人生七年（英国版）》正版；部分集需会员）。工具模式改走 official。",
      "official": [
        {
          "kind": "tencent",
          "url": "https://v.qq.com/x/cover/fh87amml4j6fivp.html",
          "label": "腾讯视频正版"
        }
      ]
    },
    {
      "id": "schoolroad",
      "heroArt": "./covers/hero/schoolroad.jpg",
      "title": "翻山涉水上学路",
      "category": "drive",
      "slot": "B",
      "role": "side",
      "duration": "约 45–50 分钟",
      "episodeHint": "周末加餐 · 只挑 1 集",
      "muscle": "意志",
      "blurb": "世界各地孩子为上学翻山、过河、走冰面。看「想去学校」能有多认真。",
      "link": "https://www.bilibili.com/video/BV1x3411q7qb/",
      "linkLabel": "B 站直达",
      "play": "ok",
      "shareable": false,
      "playNote": "尚无正版备份 · 自用 watchLink；工具上线前须补或下架",
      "mapPin": "世界各地 · 上学路",
      "watchLink": "https://www.bilibili.com/video/BV1x3411q7qb/",
      "watchLabel": "B 站直达",
      "watchNote": "自用：央视译制合集（第1–2季）；只挑一集看。工具上线前须补 official，否则标「片源暂缺」。",
      "official": []
    },
    {
      "id": "crow",
      "heroArt": "./covers/hero/crow.jpg",
      "title": "像乌鸦一样思考",
      "category": "nature",
      "slot": "A",
      "role": "main",
      "duration": "约 10 分钟 × 20 集",
      "episodeHint": "一晚 1–2 集",
      "muscle": "生物",
      "blurb": "跟着乌鸦学科学方法：观察、提出假设、做实验。短、好玩，适合工作日。",
      "link": "https://open.163.com/newview/movie/free?pid=MEHLI0563&mid=MEHLMNO8M",
      "linkLabel": "网易公开课",
      "play": "stable",
      "shareable": true,
      "playNote": "正版备份 1 条 · 自用走 watchLink；工具前可再补 1 条",
      "mapPin": "观察 · 假设 · 实验",
      "watchLink": "https://open.163.com/newview/movie/free?pid=MEHLI0563&mid=MEHLMNO8M",
      "watchLabel": "网易公开课",
      "watchNote": "自用现开此链（网易公开课正版免费 · 20 集；手机可用公开课 App 缓存）。工具模式改走 official。",
      "official": [
        {
          "kind": "netease",
          "url": "https://open.163.com/newview/movie/free?pid=MEHLI0563&mid=MEHLMNO8M",
          "label": "网易公开课"
        }
      ]
    },
    {
      "id": "bigscience",
      "heroArt": "./covers/hero/bigscience.jpg",
      "title": "大科学实验",
      "category": "nature",
      "slot": "A",
      "role": "side",
      "duration": "约 10 分钟 × 多集",
      "episodeHint": "一晚 1 集",
      "muscle": "生物",
      "blurb": "准备—实验—验证：声音有多快、太阳能做饭。短实验片，和乌鸦同一条「动手想」的线。",
      "link": "https://www.bilibili.com/video/BV1AU4y1p7o5/?p=1",
      "linkLabel": "B 站直达",
      "play": "ok",
      "shareable": false,
      "playNote": "尚无正版备份 · 自用 watchLink；工具上线前须补或下架",
      "mapPin": "实验 · 验证",
      "episodes": [
        {
          "id": "bigscience-1",
          "n": 1,
          "title": "声音的速度",
          "blurb": "声音跑得有多快？用实验「看见」声音。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1AU4y1p7o5/?p=1",
          "hints": [
            "声音",
            "速度",
            "实验"
          ]
        },
        {
          "id": "bigscience-2",
          "n": 2,
          "title": "飞翔的鲸鱼",
          "blurb": "一个大胆实验：如果……会怎样？",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1AU4y1p7o5/?p=2",
          "hints": [
            "假设",
            "规模",
            "想象"
          ]
        },
        {
          "id": "bigscience-3",
          "n": 3,
          "title": "杯子神奇的力量",
          "blurb": "日常杯子里的力：压强、吸力怎么来。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1AU4y1p7o5/?p=3",
          "hints": [
            "压强",
            "杯子",
            "日常"
          ]
        },
        {
          "id": "bigscience-4",
          "n": 4,
          "title": "太阳能做饭",
          "blurb": "阳光能不能煮熟饭？把能量聚起来。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1AU4y1p7o5/?p=4",
          "hints": [
            "太阳能",
            "聚焦",
            "能量"
          ]
        },
        {
          "id": "bigscience-5",
          "n": 5,
          "title": "高速停止的棒球",
          "blurb": "运动的球怎样突然停住：惯性与力。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1AU4y1p7o5/?p=5",
          "hints": [
            "惯性",
            "力",
            "停止"
          ]
        },
        {
          "id": "bigscience-6",
          "n": 6,
          "title": "不想移动的苹果",
          "blurb": "静静待着的苹果，其实也在「对抗」。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1AU4y1p7o5/?p=6",
          "hints": [
            "静止",
            "摩擦",
            "力"
          ]
        }
      ],
      "watchLink": "https://www.bilibili.com/video/BV1AU4y1p7o5/?p=1",
      "watchLabel": "B 站直达",
      "watchNote": "自用：NHK 中字合集，35 集分P；先看前几集即可。工具上线前须补 official，否则标「片源暂缺」。",
      "official": []
    },
    {
      "id": "allusionsci",
      "heroArt": "./covers/hero/allusionsci.jpg",
      "title": "典故里的科学（第二季）",
      "category": "nature",
      "slot": "A",
      "role": "side",
      "duration": "约 20–25 分钟 / 集",
      "episodeHint": "工作日 1 集 · 先猜再验证",
      "muscle": "实验",
      "blurb": "千里之堤、曹冲称象……用实验拆典故：古人的说法今天还成立吗？",
      "link": "https://tv.cctv.com/2024/03/12/VIDEu931Kx6CD2qC5gFEZd9Z240312.shtml",
      "linkLabel": "央视网",
      "play": "stable",
      "shareable": true,
      "playNote": "正版备份 1 条 · 自用走 watchLink；工具前可再补 1 条",
      "mapPin": "典故 · 验证",
      "episodes": [
        {
          "id": "allusionsci-1",
          "n": 1,
          "title": "千里之堤，溃于蚁穴",
          "blurb": "小洞真能毁大堤？用实验看水怎样找漏洞。",
          "duration": "约 24 分钟",
          "link": "https://tv.cctv.com/2024/03/12/VIDEu931Kx6CD2qC5gFEZd9Z240312.shtml",
          "hints": [
            "漏洞",
            "水流",
            "验证"
          ]
        },
        {
          "id": "allusionsci-2",
          "n": 2,
          "title": "伏地听声",
          "blurb": "趴在地上真能听远方？声音怎样传。",
          "duration": "约 24 分钟",
          "link": "https://tv.cctv.com/2024/03/13/VIDEESg2Ud3UaEjVqTzGroeC240313.shtml",
          "hints": [
            "声音",
            "传导"
          ]
        },
        {
          "id": "allusionsci-3",
          "n": 3,
          "title": "刀枪不入",
          "blurb": "「刀枪不入」有没有科学边？材料与力。",
          "duration": "约 24 分钟",
          "link": "https://tv.cctv.com/2024/03/14/VIDEUfOOQbUUYn8818AQMV4u240314.shtml",
          "hints": [
            "材料",
            "力"
          ]
        },
        {
          "id": "allusionsci-4",
          "n": 4,
          "title": "曹冲称象",
          "blurb": "没有大秤怎么称大象：浮力与等价。",
          "duration": "约 24 分钟",
          "link": "https://tv.cctv.com/2024/03/16/VIDE9ui0DGv9JNv0Imllw6rw240316.shtml",
          "hints": [
            "浮力",
            "等价",
            "称重"
          ]
        },
        {
          "id": "allusionsci-5",
          "n": 5,
          "title": "身轻如燕",
          "blurb": "人能不能「身轻如燕」：重心与平衡。",
          "duration": "约 24 分钟",
          "link": "https://tv.cctv.com/2024/03/16/VIDEpIM1T5jIiTWWBu7UxL1y240316.shtml",
          "hints": [
            "重心",
            "平衡"
          ]
        },
        {
          "id": "allusionsci-6",
          "n": 6,
          "title": "老马识途",
          "blurb": "老马真的认得路？动物怎样导航。",
          "duration": "约 24 分钟",
          "link": "https://tv.cctv.com/2024/03/17/VIDE0NdZCajpEXNhb6lh6zoS240317.shtml",
          "hints": [
            "导航",
            "记忆",
            "动物"
          ]
        }
      ],
      "watchLink": "https://tv.cctv.com/2024/03/12/VIDEu931Kx6CD2qC5gFEZd9Z240312.shtml",
      "watchLabel": "央视网",
      "watchNote": "自用现开此链（央视网正片；手机建议央视影音 App）。工具模式改走 official。",
      "official": [
        {
          "kind": "cctv",
          "url": "https://tv.cctv.com/2024/03/12/VIDEu931Kx6CD2qC5gFEZd9Z240312.shtml",
          "label": "央视 / 纪录片网"
        }
      ]
    },
    {
      "id": "mendeleev",
      "heroArt": "./covers/hero/mendeleev.jpg",
      "title": "门捷列夫很忙（第一季）",
      "category": "nature",
      "slot": "B",
      "role": "side",
      "duration": "约 24 分钟 × 5 集",
      "episodeHint": "周末 1 集 · 先试懂不懂",
      "muscle": "实验",
      "blurb": "央视化学启蒙：门捷列夫怎样排周期表，氢氧碳氮、毒物与「改变世界」的元素。",
      "link": "https://tv.cctv.com/2020/06/30/VIDEW2RsCO2IJILmB7VB35Im200630.shtml",
      "linkLabel": "央视网",
      "play": "stable",
      "shareable": true,
      "playNote": "正版备份已满 2 条 · 自用走 watchLink",
      "mapPin": "元素 · 周期表",
      "altLink": "https://tv.cctv.com/2026/08/26/VIDEBWYNPOErLIxlZV5YUq19260826.shtml",
      "altLabel": "央视 / 纪录片网",
      "episodes": [
        {
          "id": "mendeleev-1",
          "n": 1,
          "title": "门捷列夫是怎样「炼」成的",
          "blurb": "忙碌的门捷列夫：北极、气球，和那张改变化学的表。",
          "duration": "约 24 分钟",
          "link": "https://tv.cctv.com/2020/06/30/VIDEW2RsCO2IJILmB7VB35Im200630.shtml",
          "hints": [
            "周期表",
            "发现"
          ]
        },
        {
          "id": "mendeleev-2",
          "n": 2,
          "title": "四大天王",
          "blurb": "氢、氧、碳、氮：离我们最近的四种元素。",
          "duration": "约 24 分钟",
          "link": "https://tv.cctv.com/2020/06/30/VIDEEvPmBzYeaPtSaQV3nYO8200630.shtml",
          "hints": [
            "氢",
            "氧",
            "碳",
            "氮"
          ]
        },
        {
          "id": "mendeleev-3",
          "n": 3,
          "title": "你好毒",
          "blurb": "许多元素也会伤人：毒从哪里来、怎样用。",
          "duration": "约 24 分钟",
          "link": "https://tv.cctv.com/2020/06/30/VIDEFRcXLCH66qxevq5tYJfa200630.shtml",
          "hints": [
            "毒性",
            "安全"
          ]
        },
        {
          "id": "mendeleev-4",
          "n": 4,
          "title": "高冷的贵族和吓人的暴君",
          "blurb": "有的元素稳如泰山，有的一碰就炸：活泼与惰性。",
          "duration": "约 24 分钟",
          "link": "https://tv.cctv.com/2020/06/30/VIDEAOOYkAycm4HTUrPQxdFO200630.shtml",
          "hints": [
            "活泼",
            "惰性"
          ]
        },
        {
          "id": "mendeleev-5",
          "n": 5,
          "title": "改变世界的元素",
          "blurb": "碳、硅、铁……哪些元素把人类文明往前推了一大步。",
          "duration": "约 24 分钟",
          "link": "https://tv.cctv.com/2020/06/30/VIDEyxeGNQkPmqMPL9ZD8Hqe200630.shtml",
          "hints": [
            "碳",
            "文明",
            "材料"
          ]
        }
      ],
      "watchLink": "https://tv.cctv.com/2020/06/30/VIDEW2RsCO2IJILmB7VB35Im200630.shtml",
      "watchLabel": "央视网",
      "watchNote": "自用现开此链（央视网正片高清；手机建议央视影音 App。B 站投稿合集常黑屏，已弃用）。工具模式改走 official。",
      "official": [
        {
          "kind": "cctv",
          "url": "https://tv.cctv.com/2020/06/30/VIDEW2RsCO2IJILmB7VB35Im200630.shtml",
          "label": "央视 / 纪录片网"
        },
        {
          "kind": "cctv",
          "url": "https://tv.cctv.com/2026/08/26/VIDEBWYNPOErLIxlZV5YUq19260826.shtml",
          "label": "央视 / 纪录片网"
        }
      ]
    },
    {
      "id": "starshift",
      "heroArt": "./covers/hero/starshift.jpg",
      "title": "斗转星移",
      "category": "nature",
      "slot": "A",
      "role": "side",
      "duration": "约 10 分钟 / 集 × 52",
      "episodeHint": "一晚 1–2 集 · 先看前 6",
      "muscle": "数理",
      "blurb": "央视天文启蒙：从踏上旅途到月球、行星。短集连续看，不急于追完全部。",
      "link": "https://www.bilibili.com/video/BV1kg411X7zA/?p=1",
      "linkLabel": "B 站直达",
      "play": "ok",
      "shareable": false,
      "playNote": "尚无正版备份 · 自用 watchLink；工具上线前须补或下架",
      "mapPin": "天文 · 太阳系",
      "episodes": [
        {
          "id": "starshift-1",
          "n": 1,
          "title": "踏上旅途",
          "blurb": "出发看天空：这部片要带你去哪。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1kg411X7zA/?p=1",
          "hints": [
            "天空",
            "旅程"
          ]
        },
        {
          "id": "starshift-2",
          "n": 2,
          "title": "遨游太阳系",
          "blurb": "太阳系大家族：谁绕谁转。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1kg411X7zA/?p=2",
          "hints": [
            "太阳系",
            "行星"
          ]
        },
        {
          "id": "starshift-3",
          "n": 3,
          "title": "月球——我们的旅伴",
          "blurb": "月亮怎样跟着地球，影响潮汐。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1kg411X7zA/?p=3",
          "hints": [
            "月球",
            "潮汐"
          ]
        },
        {
          "id": "starshift-4",
          "n": 4,
          "title": "水星、满月",
          "blurb": "离太阳最近的星球，和满月的样子。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1kg411X7zA/?p=4",
          "hints": [
            "水星",
            "满月"
          ]
        },
        {
          "id": "starshift-5",
          "n": 5,
          "title": "地球的自转",
          "blurb": "为什么有白天黑夜：地球在转。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1kg411X7zA/?p=5",
          "hints": [
            "自转",
            "昼夜"
          ]
        },
        {
          "id": "starshift-6",
          "n": 6,
          "title": "行星的旅行",
          "blurb": "行星各自的轨道旅行。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1kg411X7zA/?p=6",
          "hints": [
            "轨道",
            "公转"
          ]
        }
      ],
      "watchLink": "https://www.bilibili.com/video/BV1kg411X7zA/?p=1",
      "watchLabel": "B 站直达",
      "watchNote": "自用：央视 2004 天文片；官网旧档难播，现用高播放量 B 站合集（非大会员投稿）。工具上线前须补 official，否则标「片源暂缺」。",
      "official": []
    },
    {
      "id": "mathchosen",
      "heroArt": "./covers/hero/mathchosen.jpg",
      "title": "被数学选中的人",
      "category": "nature",
      "slot": "B",
      "role": "side",
      "duration": "约 25 分钟 × 4 集",
      "episodeHint": "周末 1 集",
      "muscle": "数理",
      "blurb": "央视趣味数学：数学是什么、数学家做什么、数学教会了我们什么。",
      "link": "https://tv.cctv.com/2021/10/26/VIDEe5L9JZ1udFMUVQe3uM2I211026.shtml",
      "linkLabel": "央视网",
      "play": "stable",
      "shareable": true,
      "playNote": "正版备份 1 条 · 自用走 watchLink；工具前可再补 1 条",
      "mapPin": "数学 · 人物",
      "altLink": "https://www.bilibili.com/video/BV1CL4y1c7AR/",
      "altLabel": "B 站央视网官方投稿",
      "episodes": [
        {
          "id": "mathchosen-1",
          "n": 1,
          "title": "数学是什么",
          "blurb": "数学从哪来、管什么：先建立一张大地图。",
          "duration": "约 25 分钟",
          "link": "https://tv.cctv.com/2021/10/26/VIDEe5L9JZ1udFMUVQe3uM2I211026.shtml",
          "hints": [
            "数学",
            "地图"
          ]
        },
        {
          "id": "mathchosen-2",
          "n": 2,
          "title": "数学家的工作",
          "blurb": "数学家每天在干什么：猜想、证明与失败。",
          "duration": "约 25 分钟",
          "link": "https://tv.cctv.com/2021/10/26/VIDEtf14SgNwCUFZE3YGTr7e211026.shtml",
          "hints": [
            "证明",
            "工作"
          ]
        },
        {
          "id": "mathchosen-3",
          "n": 3,
          "title": "数学教会了我们什么",
          "blurb": "数学怎样改变看世界的方式。",
          "duration": "约 25 分钟",
          "link": "https://tv.cctv.com/2021/10/28/VIDEVv4rYPLieI5L6ebSE0Dp211028.shtml",
          "hints": [
            "思维",
            "方法"
          ]
        },
        {
          "id": "mathchosen-4",
          "n": 4,
          "title": "抽象的巨人",
          "blurb": "抽象不是玄：看不见的结构如何撑起发明。",
          "duration": "约 25 分钟",
          "link": "https://tv.cctv.com/2021/10/28/VIDE0hmp35ZBecHWUDYSAsmw211028.shtml",
          "hints": [
            "抽象",
            "结构"
          ]
        }
      ],
      "watchLink": "https://tv.cctv.com/2021/10/26/VIDEe5L9JZ1udFMUVQe3uM2I211026.shtml",
      "watchLabel": "央视网",
      "watchNote": "自用现开此链（央视网正片 4 集；手机建议央视影音 App）。工具模式改走 official。",
      "official": [
        {
          "kind": "cctv",
          "url": "https://tv.cctv.com/2021/10/26/VIDEe5L9JZ1udFMUVQe3uM2I211026.shtml",
          "label": "央视 / 纪录片网"
        }
      ]
    },
    {
      "id": "electricstory",
      "heroArt": "./covers/hero/electricstory.jpg",
      "title": "电的故事",
      "category": "nature",
      "slot": "B",
      "role": "side",
      "duration": "约 50 分钟 × 3 集",
      "episodeHint": "周末 1 集",
      "muscle": "实验",
      "blurb": "从火花到电网：电怎样从实验室走进生活。BBC《Shock and Awe》中字。",
      "link": "https://www.bilibili.com/video/BV14b411t7Xv/?p=1",
      "linkLabel": "B 站直达",
      "play": "ok",
      "shareable": false,
      "playNote": "尚无正版备份 · 自用 watchLink；工具上线前须补或下架",
      "mapPin": "电 · 发明史",
      "episodes": [
        {
          "id": "electricstory-1",
          "n": 1,
          "title": "火花（Spark）",
          "blurb": "电的早期发现：摩擦、莱顿瓶与火花。",
          "duration": "约 50 分钟",
          "link": "https://www.bilibili.com/video/BV14b411t7Xv/?p=1",
          "hints": [
            "火花",
            "发现"
          ]
        },
        {
          "id": "electricstory-2",
          "n": 2,
          "title": "发明的时代",
          "blurb": "电池、电机、电报：电开始改变世界。",
          "duration": "约 50 分钟",
          "link": "https://www.bilibili.com/video/BV14b411t7Xv/?p=2",
          "hints": [
            "电池",
            "发明"
          ]
        },
        {
          "id": "electricstory-3",
          "n": 3,
          "title": "启示与革命",
          "blurb": "电网与现代生活：电怎样铺到每个人家里。",
          "duration": "约 50 分钟",
          "link": "https://www.bilibili.com/video/BV14b411t7Xv/?p=3",
          "hints": [
            "电网",
            "生活"
          ]
        }
      ],
      "watchLink": "https://www.bilibili.com/video/BV14b411t7Xv/?p=1",
      "watchLabel": "B 站直达",
      "watchNote": "自用：全 3 集中字合集；清晰度看版本。工具上线前须补 official，否则标「片源暂缺」。",
      "official": []
    },
    {
      "id": "beautychem",
      "heroArt": "./covers/hero/beautychem.jpg",
      "title": "美丽化学",
      "category": "nature",
      "slot": "A",
      "role": "side",
      "duration": "约 1–2 分钟 / 段 × 多段",
      "episodeHint": "微打卡 · 只看片不跟做",
      "muscle": "实验",
      "blurb": "延时摄影下的结晶、沉淀、火焰：化学也可以很美。务必只观赏，勿自行试剂实验。",
      "link": "https://www.bilibili.com/video/BV1KE411872v/?p=1",
      "linkLabel": "B 站直达",
      "play": "ok",
      "shareable": false,
      "playNote": "尚无正版备份 · 自用 watchLink；工具上线前须补或下架",
      "mapPin": "化学 · 影像",
      "parentNote": "禁止孩子自行配制试剂或模仿危险反应；只看片讨论现象",
      "episodes": [
        {
          "id": "beautychem-1",
          "n": 1,
          "title": "结晶",
          "blurb": "晶体慢慢长出来：秩序从溶液里出现。",
          "duration": "约 2 分钟",
          "link": "https://www.bilibili.com/video/BV1KE411872v/?p=1",
          "hints": [
            "结晶",
            "秩序"
          ]
        },
        {
          "id": "beautychem-2",
          "n": 2,
          "title": "金属置换（1）",
          "blurb": "一种金属「赶走」另一种：置换长什么样。",
          "duration": "约 2 分钟",
          "link": "https://www.bilibili.com/video/BV1KE411872v/?p=2",
          "hints": [
            "置换",
            "金属"
          ]
        },
        {
          "id": "beautychem-3",
          "n": 3,
          "title": "金属置换（2）",
          "blurb": "继续看置换：颜色与形态怎样变。",
          "duration": "约 2 分钟",
          "link": "https://www.bilibili.com/video/BV1KE411872v/?p=3",
          "hints": [
            "颜色",
            "变化"
          ]
        },
        {
          "id": "beautychem-4",
          "n": 4,
          "title": "美丽的反应",
          "blurb": "一组好看的反应合辑：先感受美。",
          "duration": "约 2 分钟",
          "link": "https://www.bilibili.com/video/BV1KE411872v/?p=4",
          "hints": [
            "反应",
            "美感"
          ]
        },
        {
          "id": "beautychem-5",
          "n": 5,
          "title": "气体（1）",
          "blurb": "看不见的气体怎样被「看见」。",
          "duration": "约 2 分钟",
          "link": "https://www.bilibili.com/video/BV1KE411872v/?p=5",
          "hints": [
            "气体"
          ]
        },
        {
          "id": "beautychem-6",
          "n": 6,
          "title": "日常火焰",
          "blurb": "火焰的颜色从哪来：只观察，不玩火。",
          "duration": "约 2 分钟",
          "link": "https://www.bilibili.com/video/BV1KE411872v/?p=8",
          "hints": [
            "火焰",
            "安全"
          ]
        }
      ],
      "watchLink": "https://www.bilibili.com/video/BV1KE411872v/?p=1",
      "watchLabel": "B 站直达",
      "watchNote": "自用：24 段合集；短、适合饭后一集。工具上线前须补 official，否则标「片源暂缺」。",
      "official": []
    },
    {
      "id": "planet",
      "heroArt": "./covers/hero/planet.jpg",
      "title": "地球脉动 第一季",
      "category": "nature",
      "slot": "B",
      "role": "main",
      "duration": "约 50–60 分钟 × 11 集",
      "episodeHint": "周末 1 集",
      "muscle": "生物",
      "blurb": "从极地到深海的地球故事。画面震撼，像给地球办一场「超级相册」。",
      "link": "https://www.bilibili.com/bangumi/play/ep121262",
      "linkLabel": "B 站正版",
      "play": "stable",
      "shareable": true,
      "playNote": "正版备份 1 条 · 自用走 watchLink；工具前可再补 1 条",
      "mapPin": "从极地到深海",
      "watchLink": "https://www.bilibili.com/bangumi/play/ep121262",
      "watchLabel": "B 站正版",
      "watchNote": "自用现开此链（正版番剧；高清常见需大会员）。工具模式改走 official。",
      "official": [
        {
          "kind": "bilibili",
          "url": "https://www.bilibili.com/bangumi/play/ep121262",
          "label": "B 站正版"
        }
      ]
    },
    {
      "id": "greenplanet",
      "heroArt": "./covers/hero/greenplanet.jpg",
      "title": "绿色星球",
      "category": "nature",
      "slot": "B",
      "role": "main",
      "duration": "约 50 分钟 × 6 集",
      "episodeHint": "周末 1 集",
      "muscle": "生物",
      "blurb": "植物也会「打架、合作、求偶」。大卫·爱登堡带你用延时摄影看见被忽略的森林与沙漠。",
      "link": "https://www.bilibili.com/bangumi/play/ep451881",
      "linkLabel": "B 站正版",
      "play": "stable",
      "shareable": true,
      "playNote": "正版备份 1 条 · 自用走 watchLink；工具前可再补 1 条",
      "mapPin": "植物 · 雨林到沙漠",
      "watchLink": "https://www.bilibili.com/bangumi/play/ep451881",
      "watchLabel": "B 站正版",
      "watchNote": "自用现开此链（正版番剧；从第1集《雨林天地》起；高清常需大会员）。工具模式改走 official。",
      "official": [
        {
          "kind": "bilibili",
          "url": "https://www.bilibili.com/bangumi/play/ep451881",
          "label": "B 站正版"
        }
      ]
    },
    {
      "id": "ourplanet",
      "heroArt": "./covers/hero/ourplanet.jpg",
      "title": "我们的星球",
      "category": "nature",
      "slot": "B",
      "role": "main",
      "duration": "约 50 分钟 × 8 集",
      "episodeHint": "周末 1 集",
      "muscle": "生物",
      "blurb": "Netflix 与 BBC 联手：从冰原到深海，讲物种与家园，也点到气候与保护，画面接近《地球脉动》。",
      "link": "https://www.netflix.com/title/80049832",
      "linkLabel": "Netflix 正版",
      "play": "stable",
      "shareable": true,
      "playNote": "正版备份 1 条 · 自用走 watchLink；工具前可再补 1 条",
      "mapPin": "全球 · 物种与家园",
      "watchLink": "https://www.netflix.com/title/80049832",
      "watchLabel": "Netflix 正版",
      "watchNote": "自用现开此链（Netflix 官方正片（需会员）；国内暂无 B 站正版番剧，勿用投稿合集）。工具模式改走 official。",
      "official": [
        {
          "kind": "netflix",
          "url": "https://www.netflix.com/title/80049832",
          "label": "Netflix 正版"
        }
      ]
    },
    {
      "id": "blueplanet",
      "heroArt": "./covers/hero/blueplanet.jpg",
      "title": "蓝色星球 第一季",
      "category": "nature",
      "slot": "B",
      "role": "main",
      "duration": "约 50 分钟 × 8 集",
      "episodeHint": "周末 1 集",
      "muscle": "生物",
      "blurb": "潜入海洋：洋流、珊瑚、深潜生物。经典自然大片，和《地球脉动》一样适合「周末只追一集」。",
      "link": "https://www.bilibili.com/bangumi/play/ep119264",
      "linkLabel": "B 站正版",
      "play": "stable",
      "shareable": true,
      "playNote": "正版备份 1 条 · 自用走 watchLink；工具前可再补 1 条",
      "mapPin": "海洋 · 从浅滩到深渊",
      "watchLink": "https://www.bilibili.com/bangumi/play/ep119264",
      "watchLabel": "B 站正版",
      "watchNote": "自用现开此链（正版番剧；高清常见需大会员）。工具模式改走 official。",
      "official": [
        {
          "kind": "bilibili",
          "url": "https://www.bilibili.com/bangumi/play/ep119264",
          "label": "B 站正版"
        }
      ]
    },
    {
      "id": "frozen",
      "heroArt": "./covers/hero/frozen.jpg",
      "title": "冰冻星球",
      "category": "nature",
      "slot": "B",
      "role": "main",
      "duration": "约 50 分钟 × 6 集",
      "episodeHint": "周末 1 集",
      "muscle": "生物",
      "blurb": "极地一年四季：冰、企鹅、北极熊。画面强，也适合聊「冰为什么在变」。",
      "link": "https://www.bilibili.com/bangumi/media/md20034/",
      "linkLabel": "B 站正版",
      "play": "stable",
      "shareable": true,
      "playNote": "正版备份 1 条 · 自用走 watchLink；工具前可再补 1 条",
      "mapPin": "极地 · 四季",
      "episodes": [
        {
          "id": "frozen-1",
          "n": 1,
          "title": "世界的尽头",
          "blurb": "北极和南极有多冷、谁住在冰上。",
          "duration": "约 50 分钟",
          "link": "https://www.bilibili.com/bangumi/media/md20034/",
          "hints": [
            "极地",
            "冰",
            "适应"
          ]
        },
        {
          "id": "frozen-2",
          "n": 2,
          "title": "春季",
          "blurb": "冰开始化，生命赶紧抓住短短的春天。",
          "duration": "约 50 分钟",
          "link": "https://www.bilibili.com/bangumi/media/md20034/",
          "hints": [
            "融化",
            "繁殖",
            "赶时间"
          ]
        },
        {
          "id": "frozen-3",
          "n": 3,
          "title": "夏季",
          "blurb": "极地的夏天：短暂、忙碌、食物最多。",
          "duration": "约 50 分钟",
          "link": "https://www.bilibili.com/bangumi/media/md20034/",
          "hints": [
            "夏天",
            "觅食",
            "阳光"
          ]
        },
        {
          "id": "frozen-4",
          "n": 4,
          "title": "秋季",
          "blurb": "冬天要来了，动物怎样准备迁徙或囤能。",
          "duration": "约 50 分钟",
          "link": "https://www.bilibili.com/bangumi/media/md20034/",
          "hints": [
            "准备",
            "迁徙",
            "储存"
          ]
        },
        {
          "id": "frozen-5",
          "n": 5,
          "title": "冬季",
          "blurb": "最难熬的季节：黑暗、风暴、怎样活下去。",
          "duration": "约 50 分钟",
          "link": "https://www.bilibili.com/bangumi/media/md20034/",
          "hints": [
            "黑暗",
            "风暴",
            "忍耐"
          ]
        },
        {
          "id": "frozen-6",
          "n": 6,
          "title": "最后的边疆",
          "blurb": "人与极地：科学站、气候变化，冰在说什么。",
          "duration": "约 50 分钟",
          "link": "https://www.bilibili.com/bangumi/media/md20034/",
          "hints": [
            "气候",
            "变化",
            "保护"
          ]
        }
      ],
      "watchLink": "https://www.bilibili.com/bangumi/media/md20034/",
      "watchLabel": "B 站正版",
      "watchNote": "自用现开此链（B 站正版番剧页 · 全 6 集；高清常需大会员）。工具模式改走 official。",
      "official": [
        {
          "kind": "bilibili",
          "url": "https://www.bilibili.com/bangumi/media/md20034/",
          "label": "B 站正版"
        }
      ]
    },
    {
      "id": "sevenworlds",
      "heroArt": "./covers/hero/sevenworlds.jpg",
      "title": "七个世界，一个星球",
      "category": "nature",
      "slot": "B",
      "role": "side",
      "duration": "约 50–60 分钟 × 7 集",
      "episodeHint": "周末 1 集",
      "muscle": "生物",
      "blurb": "按七大洲看地球：南极、非洲、澳洲……每片大陆怎样养出自己的生命。地球脉动同门周末大片。",
      "link": "https://v.qq.com/x/cover/5s6jjhvb15xrm59.html",
      "linkLabel": "腾讯视频正版",
      "play": "stable",
      "shareable": true,
      "playNote": "正版备份已满 2 条 · 自用走 watchLink",
      "altLink": "https://www.bilibili.com/bangumi/media/md23238797/",
      "altLabel": "B 站正版",
      "mapPin": "七大洲 · 一个地球",
      "parentNote": "含捕猎、冰面求生等真实镜头；建议家长陪看前两集再决定追不追",
      "episodes": [
        {
          "id": "sevenworlds-1",
          "n": 1,
          "title": "南极洲",
          "blurb": "最冷的大陆：企鹅、海豹怎样过冬。",
          "duration": "约 50 分钟",
          "link": "https://v.qq.com/x/cover/5s6jjhvb15xrm59/e00323zwrsu.html",
          "hints": [
            "南极",
            "冰",
            "企鹅"
          ]
        },
        {
          "id": "sevenworlds-2",
          "n": 2,
          "title": "亚洲",
          "blurb": "从雨林到雪山：亚洲怎样装下这么多生命。",
          "duration": "约 50 分钟",
          "link": "https://v.qq.com/x/cover/5s6jjhvb15xrm59.html",
          "hints": [
            "亚洲",
            "多样",
            "适应"
          ]
        },
        {
          "id": "sevenworlds-3",
          "n": 3,
          "title": "南美洲",
          "blurb": "雨林、安第斯与草原：南美的丰盛与挑战。",
          "duration": "约 50 分钟",
          "link": "https://v.qq.com/x/cover/5s6jjhvb15xrm59.html",
          "hints": [
            "南美",
            "雨林"
          ]
        },
        {
          "id": "sevenworlds-4",
          "n": 4,
          "title": "澳大利亚",
          "blurb": "孤立大陆上的奇特动物：袋鼠、考拉与沙漠。",
          "duration": "约 50 分钟",
          "link": "https://v.qq.com/x/cover/5s6jjhvb15xrm59.html",
          "hints": [
            "澳洲",
            "独特"
          ]
        },
        {
          "id": "sevenworlds-5",
          "n": 5,
          "title": "欧洲",
          "blurb": "人烟稠密的欧洲：野生动物怎样挤出空间。",
          "duration": "约 50 分钟",
          "link": "https://v.qq.com/x/cover/5s6jjhvb15xrm59.html",
          "hints": [
            "欧洲",
            "共处"
          ]
        },
        {
          "id": "sevenworlds-6",
          "n": 6,
          "title": "北美洲",
          "blurb": "从极地到峡谷：北美的辽阔与季节。",
          "duration": "约 50 分钟",
          "link": "https://v.qq.com/x/cover/5s6jjhvb15xrm59.html",
          "hints": [
            "北美",
            "季节"
          ]
        },
        {
          "id": "sevenworlds-7",
          "n": 7,
          "title": "非洲",
          "blurb": "草原、沙漠与大迁徙：非洲的生命节奏。",
          "duration": "约 50 分钟",
          "link": "https://v.qq.com/x/cover/5s6jjhvb15xrm59.html",
          "hints": [
            "非洲",
            "迁徙"
          ]
        }
      ],
      "watchLink": "https://v.qq.com/x/cover/5s6jjhvb15xrm59.html",
      "watchLabel": "腾讯视频正版",
      "watchNote": "自用现开此链（腾讯视频正版（普通话版有）；部分集需 VIP。备用 B 站正版番剧页）。工具模式改走 official。",
      "official": [
        {
          "kind": "tencent",
          "url": "https://v.qq.com/x/cover/5s6jjhvb15xrm59.html",
          "label": "腾讯视频正版"
        },
        {
          "kind": "bilibili",
          "url": "https://www.bilibili.com/bangumi/media/md23238797/",
          "label": "B 站正版"
        }
      ]
    },
    {
      "id": "wildchina",
      "heroArt": "./covers/hero/wildchina.jpg",
      "title": "美丽中国",
      "category": "nature",
      "slot": "B",
      "role": "main",
      "duration": "约 50 分钟 × 6 集",
      "episodeHint": "周末 1 集",
      "muscle": "生物",
      "blurb": "BBC×央视：从华南到高原、塞外到海滨。地理风景片，也是「中国长什么样」。",
      "link": "https://jishi.cctv.com/special/wildchina/",
      "linkLabel": "央视网",
      "play": "stable",
      "shareable": true,
      "playNote": "正版备份已满 2 条 · 自用走 watchLink",
      "altLink": "https://www.bilibili.com/bangumi/media/md498752/",
      "altLabel": "B 站正版",
      "mapPin": "中国大地 · 自然",
      "episodes": [
        {
          "id": "wildchina-1",
          "n": 1,
          "title": "锦绣华南",
          "blurb": "喀斯特、稻田、熊猫故乡：湿润的南方。",
          "duration": "约 50 分钟",
          "link": "https://jishi.cctv.com/special/wildchina/",
          "hints": [
            "华南",
            "山水",
            "多样"
          ]
        },
        {
          "id": "wildchina-2",
          "n": 2,
          "title": "云翔天边",
          "blurb": "云贵高原：垂直气候、多彩民族与野生动物。",
          "duration": "约 50 分钟",
          "link": "https://jishi.cctv.com/special/wildchina/",
          "hints": [
            "高原",
            "云",
            "多样"
          ]
        },
        {
          "id": "wildchina-3",
          "n": 3,
          "title": "神奇高原",
          "blurb": "青藏：高寒、稀薄空气，生命怎样站住。",
          "duration": "约 50 分钟",
          "link": "https://jishi.cctv.com/special/wildchina/",
          "hints": [
            "青藏",
            "高寒",
            "适应"
          ]
        },
        {
          "id": "wildchina-4",
          "n": 4,
          "title": "风雪塞外",
          "blurb": "长城以北：草原、沙漠、迁徙的蹄。",
          "duration": "约 50 分钟",
          "link": "https://jishi.cctv.com/special/wildchina/",
          "hints": [
            "塞外",
            "草原",
            "风雪"
          ]
        },
        {
          "id": "wildchina-5",
          "n": 5,
          "title": "沃土中原",
          "blurb": "黄河与耕地：人怎样把平原变成粮仓。",
          "duration": "约 50 分钟",
          "link": "https://jishi.cctv.com/special/wildchina/",
          "hints": [
            "中原",
            "黄河",
            "农耕"
          ]
        },
        {
          "id": "wildchina-6",
          "n": 6,
          "title": "潮涌两岸",
          "blurb": "海岸线：渔、红树林、人和海怎么相处。",
          "duration": "约 50 分钟",
          "link": "https://jishi.cctv.com/special/wildchina/",
          "hints": [
            "海岸",
            "潮汐",
            "渔"
          ]
        }
      ],
      "watchLink": "https://jishi.cctv.com/special/wildchina/",
      "watchLabel": "央视网",
      "watchNote": "自用现开此链（央视网纪实台专题 · 6 集点播；备用可看 B 站正版番剧页）。工具模式改走 official。",
      "official": [
        {
          "kind": "cctv",
          "url": "https://jishi.cctv.com/special/wildchina/",
          "label": "央视 / 纪录片网"
        },
        {
          "kind": "bilibili",
          "url": "https://www.bilibili.com/bangumi/media/md498752/",
          "label": "B 站正版"
        }
      ]
    },
    {
      "id": "humanbody",
      "heroArt": "./covers/hero/humanbody.jpg",
      "title": "人体奥秘",
      "category": "nature",
      "slot": "B",
      "role": "main",
      "duration": "约 50 分钟 × 4–6 集",
      "episodeHint": "第 1、含临终/胚胎类集家长陪看",
      "muscle": "人体",
      "blurb": "钻进身体内部看心跳、细胞与成长。现用同题材《人体大惊奇》合集，挑一集即可。",
      "link": "https://www.bilibili.com/video/BV1Sg411371W/",
      "linkLabel": "B 站直达",
      "play": "ok",
      "shareable": false,
      "playNote": "尚无正版备份 · 自用 watchLink；工具上线前须补或下架",
      "mapPin": "身体内部",
      "parentNote": "胚胎与临终类镜头仍可能出现，家长陪看",
      "watchLink": "https://www.bilibili.com/video/BV1Sg411371W/",
      "watchLabel": "B 站直达",
      "watchNote": "自用：BBC 原片投稿现少；改用同题材 PBS《人体大惊奇》6 集合集，挑 1 集。工具上线前须补 official，否则标「片源暂缺」。",
      "official": []
    },
    {
      "id": "life",
      "heroArt": "./covers/hero/life.jpg",
      "title": "生命",
      "category": "nature",
      "slot": "B",
      "role": "main",
      "duration": "约 50 分钟 × 10 集",
      "episodeHint": "先看植物、鸟、鱼",
      "muscle": "生物",
      "blurb": "动物植物怎么活下来：伪装、迁徙、育儿。比「好看」更进一步，讲生存策略。",
      "link": "https://www.bilibili.com/bangumi/play/ep118932",
      "linkLabel": "B 站正版",
      "play": "stable",
      "shareable": true,
      "playNote": "正版备份 1 条 · 自用走 watchLink；工具前可再补 1 条",
      "mapPin": "物种怎么活",
      "watchLink": "https://www.bilibili.com/bangumi/play/ep118932",
      "watchLabel": "B 站正版",
      "watchNote": "自用现开此链（正版番剧；高清可能要会员）。工具模式改走 official。",
      "official": [
        {
          "kind": "bilibili",
          "url": "https://www.bilibili.com/bangumi/play/ep118932",
          "label": "B 站正版"
        }
      ]
    },
    {
      "id": "germsquad",
      "heroArt": "./covers/hero/germsquad.jpg",
      "title": "细菌病毒特工队",
      "category": "nature",
      "slot": "A",
      "role": "main",
      "duration": "约 5–8 分钟 / 集",
      "episodeHint": "一晚 1–2 集",
      "muscle": "生物",
      "blurb": "流感、酵母、乳酸菌……用孩子能懂的故事走进细菌和病毒，顺带养成洗手习惯。",
      "link": "https://www.bilibili.com/video/BV12h411V7Gv/",
      "linkLabel": "B 站直达",
      "play": "ok",
      "shareable": false,
      "playNote": "尚无正版备份 · 自用 watchLink；工具上线前须补或下架",
      "mapPin": "细菌 · 病毒 · 卫生",
      "cover": "./covers/germsquad.jpg",
      "episodes": [
        {
          "id": "germsquad-1",
          "n": 1,
          "title": "流感病毒",
          "blurb": "感冒为什么容易传开？流感病毒怎样钻进身体。",
          "duration": "约 7 分钟",
          "link": "https://www.bilibili.com/video/BV12h411V7Gv/?p=1",
          "hints": [
            "飞沫",
            "传染",
            "洗手",
            "休息"
          ],
          "cover": "./covers/germsquad-1.jpg"
        },
        {
          "id": "germsquad-2",
          "n": 2,
          "title": "黄曲霉",
          "blurb": "长毛的馒头还能吃吗？霉菌喜欢怎样的环境。",
          "duration": "约 7 分钟",
          "link": "https://www.bilibili.com/video/BV12h411V7Gv/?p=2",
          "hints": [
            "发霉",
            "潮湿",
            "变质",
            "别吃坏掉的食物"
          ],
          "cover": "./covers/germsquad-2.jpg"
        },
        {
          "id": "germsquad-3",
          "n": 3,
          "title": "狂犬病毒",
          "blurb": "被狗咬伤为什么要重视？狂犬病防范小知识。",
          "duration": "约 7 分钟",
          "link": "https://www.bilibili.com/video/BV12h411V7Gv/?p=3",
          "hints": [
            "伤口",
            "疫苗",
            "告诉大人",
            "安全距离"
          ],
          "cover": "./covers/germsquad-3.jpg"
        },
        {
          "id": "germsquad-4",
          "n": 4,
          "title": "酵母菌",
          "blurb": "面包为什么能发起来？酵母是「好帮手」微生物。",
          "duration": "约 7 分钟",
          "link": "https://www.bilibili.com/video/BV12h411V7Gv/?p=4",
          "hints": [
            "发酵",
            "二氧化碳",
            "面团",
            "有用的菌"
          ],
          "cover": "./covers/germsquad-4.jpg"
        },
        {
          "id": "germsquad-5",
          "n": 5,
          "title": "乳酸菌",
          "blurb": "牛奶的好朋友：酸奶里的菌怎样工作。",
          "duration": "约 8 分钟",
          "link": "https://www.bilibili.com/video/BV12h411V7Gv/?p=5",
          "hints": [
            "酸奶",
            "发酵",
            "肠道",
            "有益菌"
          ],
          "cover": "./covers/germsquad-5.jpg"
        },
        {
          "id": "germsquad-6",
          "n": 6,
          "title": "醋酸菌",
          "blurb": "醋是怎么来的？醋酸菌把酒变成酸酸的味道。",
          "duration": "约 8 分钟",
          "link": "https://www.bilibili.com/video/BV12h411V7Gv/?p=6",
          "hints": [
            "醋",
            "发酵",
            "变酸",
            "食物加工"
          ],
          "cover": "./covers/germsquad-6.jpg"
        },
        {
          "id": "germsquad-7",
          "n": 7,
          "title": "草履虫",
          "blurb": "水里的分解小工：草履虫怎样「打扫」污染物。",
          "duration": "约 8 分钟",
          "link": "https://www.bilibili.com/video/BV12h411V7Gv/?p=7",
          "hints": [
            "微观",
            "单细胞",
            "分解",
            "水环境"
          ],
          "cover": "./covers/germsquad-7.jpg"
        },
        {
          "id": "germsquad-8",
          "n": 8,
          "title": "食用菌",
          "blurb": "蘑菇亦正亦邪：能吃的菌和要小心的菌。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV12h411V7Gv/?p=8",
          "hints": [
            "蘑菇",
            "真菌",
            "别乱采",
            "辨认"
          ],
          "cover": "./covers/germsquad-8.jpg"
        },
        {
          "id": "germsquad-9",
          "n": 9,
          "title": "毛霉",
          "blurb": "毛霉是谁？和食物、发酵有什么关系。",
          "duration": "约 8 分钟",
          "link": "https://www.bilibili.com/video/BV12h411V7Gv/?p=9",
          "hints": [
            "霉菌",
            "发酵食品",
            "环境",
            "观察"
          ],
          "cover": "./covers/germsquad-9.jpg"
        }
      ],
      "watchLink": "https://www.bilibili.com/video/BV12h411V7Gv/",
      "watchLabel": "B 站直达",
      "watchNote": "自用：仅自家备用：暂无国内稳定正版页；投稿可能下架，家长台待找 stable。工具上线前须补 official，否则标「片源暂缺」。",
      "official": []
    },
    {
      "id": "pasteur",
      "heroArt": "./covers/hero/pasteur.jpg",
      "title": "超级巴斯德",
      "category": "nature",
      "slot": "B",
      "role": "side",
      "duration": "约 25–35 分钟 × 6 集",
      "episodeHint": "周末 1 集 · 家长可陪",
      "muscle": "生物",
      "blurb": "动画巴斯德带你逛生物学：微生物、疫苗、进化与「未来的我们」。",
      "link": "https://tv.cctv.com/2023/08/19/VIDEZZcWkscEtP5PC41jXfZi230819.shtml",
      "linkLabel": "央视网",
      "play": "stable",
      "shareable": true,
      "playNote": "正版备份 1 条 · 自用走 watchLink；工具前可再补 1 条",
      "mapPin": "微生物 · 生命科学",
      "episodes": [
        {
          "id": "pasteur-1",
          "n": 1,
          "title": "伟大的生物学",
          "blurb": "巴斯德与微生物：细菌学从哪起步。",
          "duration": "约 30 分钟",
          "link": "https://tv.cctv.com/2023/08/19/VIDEZZcWkscEtP5PC41jXfZi230819.shtml",
          "hints": [
            "微生物",
            "巴斯德"
          ]
        },
        {
          "id": "pasteur-2",
          "n": 2,
          "title": "「吃」出一个生物界",
          "blurb": "从「吃」看古生物与生命演进。",
          "duration": "约 30 分钟",
          "link": "https://tv.cctv.com/2023/08/20/VIDEKjlwLpGsy9OzIspstWV4230820.shtml",
          "hints": [
            "古生物",
            "食物链"
          ]
        },
        {
          "id": "pasteur-3",
          "n": 3,
          "title": "达尔文前来拜访",
          "blurb": "进化论登场：物种怎样变化。",
          "duration": "约 30 分钟",
          "link": "https://tv.cctv.com/2023/08/20/VIDEpMZKmXByNKLI5QIikekN230820.shtml",
          "hints": [
            "进化",
            "达尔文"
          ]
        },
        {
          "id": "pasteur-4",
          "n": 4,
          "title": "巴斯德喊你回家打疫苗",
          "blurb": "疫苗怎样保护身体：免疫入门。",
          "duration": "约 30 分钟",
          "link": "https://tv.cctv.com/2023/08/22/VIDEfmSh6Mb8SVhpVSjyrXJO230822.shtml",
          "hints": [
            "疫苗",
            "免疫"
          ]
        },
        {
          "id": "pasteur-5",
          "n": 5,
          "title": "拯救自己",
          "blurb": "医学与自救：生病时科学能做什么。",
          "duration": "约 30 分钟",
          "link": "https://tv.cctv.com/2023/08/22/VIDEvXysxMbBS3BFsstwPdid230822.shtml",
          "hints": [
            "医学",
            "健康"
          ]
        },
        {
          "id": "pasteur-6",
          "n": 6,
          "title": "未来的我们会是谁",
          "blurb": "生物技术向前看：未来人会怎样。",
          "duration": "约 30 分钟",
          "link": "https://tv.cctv.com/2023/08/24/VIDEx9IzVfiOo20PT1rvxBzZ230824.shtml",
          "hints": [
            "未来",
            "生物技术"
          ]
        }
      ],
      "watchLink": "https://tv.cctv.com/2023/08/19/VIDEZZcWkscEtP5PC41jXfZi230819.shtml",
      "watchLabel": "央视网",
      "watchNote": "自用现开此链（央视网正片 6 集；手机建议央视影音 App）。工具模式改走 official。",
      "official": [
        {
          "kind": "cctv",
          "url": "https://tv.cctv.com/2023/08/19/VIDEZZcWkscEtP5PC41jXfZi230819.shtml",
          "label": "央视 / 纪录片网"
        }
      ]
    },
    {
      "id": "bodymicro",
      "heroArt": "./covers/hero/bodymicro.jpg",
      "title": "人体的微观世界",
      "category": "nature",
      "slot": "B",
      "role": "main",
      "duration": "约 40 分钟 × 8 集",
      "episodeHint": "周末 1 集 · 可先看信号分子 / 肠道",
      "muscle": "人体",
      "blurb": "镜头钻进细胞、免疫与器官：显微摄影 + 动画，像科幻片一样看身体内部。",
      "link": "https://www.bilibili.com/video/BV1R22nBeEpE/",
      "linkLabel": "B 站直达",
      "play": "ok",
      "shareable": false,
      "playNote": "尚无正版备份 · 自用 watchLink；工具上线前须补或下架",
      "mapPin": "细胞 · 免疫 · 器官",
      "watchLink": "https://www.bilibili.com/video/BV1R22nBeEpE/",
      "watchLabel": "B 站直达",
      "watchNote": "自用：仅自家备用：NHK/央视版暂无稳定正版外链；投稿合集可能下架。工具上线前须补 official，否则标「片源暂缺」。",
      "official": []
    },
    {
      "id": "cellwar",
      "heroArt": "./covers/hero/cellwar.jpg",
      "title": "细胞的暗战",
      "category": "nature",
      "slot": "B",
      "role": "side",
      "duration": "约 50–60 分钟（可拆两晚）",
      "episodeHint": "工作日可先看上集 · 周末看完",
      "muscle": "人体",
      "blurb": "细胞怎样「打仗」保卫身体。聚焦微观战场，补足对细胞机制的好奇心。",
      "link": "https://www.bilibili.com/video/BV1L44y1B789/",
      "linkLabel": "B 站直达",
      "play": "ok",
      "shareable": false,
      "playNote": "尚无正版备份 · 自用 watchLink；工具上线前须补或下架",
      "mapPin": "细胞 · 攻防 · 免疫",
      "episodes": [
        {
          "id": "cellwar-1",
          "n": 1,
          "title": "上集 · 微观战场开战",
          "blurb": "细胞怎样发现敌人、拉响警报。先看前半段即可盖印。",
          "duration": "约 28 分钟",
          "link": "https://www.bilibili.com/video/BV1L44y1B789/",
          "hints": [
            "细胞",
            "免疫",
            "攻防"
          ]
        },
        {
          "id": "cellwar-2",
          "n": 2,
          "title": "下集 · 抗体与防线",
          "blurb": "身体怎样组织反击：和巴斯德、疫苗话题正好接上。",
          "duration": "约 28 分钟",
          "link": "https://www.bilibili.com/video/BV1L44y1B789/",
          "hints": [
            "抗体",
            "免疫",
            "保卫"
          ]
        }
      ],
      "watchLink": "https://www.bilibili.com/video/BV1L44y1B789/",
      "watchLabel": "B 站直达",
      "watchNote": "自用：仅自家备用：暂无 B 站正版番剧；投稿合集可能下架。工具上线前须补 official，否则标「片源暂缺」。",
      "official": []
    },
    {
      "id": "bacteriasecret",
      "heroArt": "./covers/hero/bacteriasecret.jpg",
      "title": "破解细菌的秘密",
      "category": "nature",
      "slot": "B",
      "role": "side",
      "duration": "约 30 分钟",
      "episodeHint": "周末 1 集",
      "muscle": "生物",
      "blurb": "《解码科技史》微观篇：细菌怎样被看见、被理解。",
      "link": "https://tv.cctv.com/2022/11/13/VIDEysn1jha46UFtJZVVmNhy221113.shtml",
      "linkLabel": "央视网",
      "play": "stable",
      "shareable": true,
      "playNote": "正版备份 1 条 · 自用走 watchLink；工具前可再补 1 条",
      "mapPin": "细菌 · 微观",
      "watchLink": "https://tv.cctv.com/2022/11/13/VIDEysn1jha46UFtJZVVmNhy221113.shtml",
      "watchLabel": "央视网",
      "watchNote": "自用现开此链（央视网《解码科技史》正片；手机建议央视影音 App）。工具模式改走 official。",
      "official": [
        {
          "kind": "cctv",
          "url": "https://tv.cctv.com/2022/11/13/VIDEysn1jha46UFtJZVVmNhy221113.shtml",
          "label": "央视 / 纪录片网"
        }
      ]
    },
    {
      "id": "microcosmos",
      "heroArt": "./covers/hero/microcosmos.jpg",
      "title": "微观世界",
      "category": "nature",
      "slot": "B",
      "role": "side",
      "duration": "约 25 分钟 × 5 集",
      "episodeHint": "周末 1 集",
      "muscle": "生物",
      "blurb": "草叶下的昆虫「王国」：放大到能看见触角上的水珠。微观尺度的自然大片。",
      "link": "https://www.bilibili.com/video/BV1E5411M7uT/",
      "linkLabel": "B 站直达",
      "play": "ok",
      "shareable": false,
      "playNote": "尚无正版备份 · 自用 watchLink；工具上线前须补或下架",
      "mapPin": "微距 · 昆虫世界",
      "watchLink": "https://www.bilibili.com/video/BV1E5411M7uT/",
      "watchLabel": "B 站直达",
      "watchNote": "自用：央视 HD 5 集合集；偏昆虫微距，培养「看不见的世界」直觉。工具上线前须补 official，否则标「片源暂缺」。",
      "official": []
    },
    {
      "id": "wonders",
      "heroArt": "./covers/hero/wonders.jpg",
      "title": "生命的奇迹",
      "category": "nature",
      "slot": "B",
      "role": "side",
      "duration": "约 48–60 分钟 × 5 集",
      "episodeHint": "周末 1 集",
      "muscle": "生物",
      "blurb": "物理学家追问：生命到底是什么？把生物和能量、宇宙规律连在一起想。",
      "link": "https://www.bilibili.com/video/BV1Uw411d7xw/",
      "linkLabel": "B 站直达",
      "play": "ok",
      "shareable": false,
      "playNote": "尚无正版备份 · 自用 watchLink；工具上线前须补或下架",
      "mapPin": "生命是什么",
      "watchLink": "https://www.bilibili.com/video/BV1Uw411d7xw/",
      "watchLabel": "B 站直达",
      "watchNote": "自用：国语合集直链；周末只看 1 集。工具上线前须补 official，否则标「片源暂缺」。",
      "official": []
    },
    {
      "id": "guobao",
      "heroArt": "./covers/hero/guobao.jpg",
      "title": "如果国宝会说话",
      "category": "human",
      "slot": "A",
      "role": "main",
      "duration": "5 分钟，一晚 2–3 集",
      "episodeHint": "打包 2–3 集",
      "muscle": "审美",
      "blurb": "一件国宝讲一个小故事：形状、纹样、工艺。短片累加，养「看得懂物件」的眼睛。",
      "link": "https://www.bilibili.com/bangumi/play/ep165008",
      "linkLabel": "B 站正版",
      "play": "stable",
      "shareable": true,
      "playNote": "正版备份已满 2 条 · 自用走 watchLink",
      "mapPin": "博物馆 · 形与工艺",
      "altLink": "https://tv.cctv.com/2017/12/21/VIDAWE377ZDQH69msDk6KUle171221.shtml",
      "altLabel": "央视 / 纪录片网",
      "watchLink": "https://www.bilibili.com/bangumi/play/ep165008",
      "watchLabel": "B 站正版",
      "watchNote": "自用现开此链（正版番剧，页面标高清）。工具模式改走 official。",
      "official": [
        {
          "kind": "bilibili",
          "url": "https://www.bilibili.com/bangumi/play/ep165008",
          "label": "B 站正版"
        },
        {
          "kind": "cctv",
          "url": "https://tv.cctv.com/2017/12/21/VIDAWE377ZDQH69msDk6KUle171221.shtml",
          "label": "央视 / 纪录片网"
        }
      ]
    },
    {
      "id": "qimiao",
      "heroArt": "./covers/hero/qimiao.jpg",
      "title": "奇妙中国",
      "category": "human",
      "slot": "A",
      "role": "side",
      "duration": "约 5 分钟 × 10 集",
      "episodeHint": "一晚 1–2 集",
      "muscle": "叙事",
      "blurb": "每集五分钟看中国超级工程：火箭发动机、盾构、特高压、高铁……短、好入口。",
      "link": "https://tv.cctv.com/2023/01/11/VIDEu5pzyZ6XjzPFSCYTqFbV230111.shtml",
      "linkLabel": "央视网",
      "play": "stable",
      "shareable": true,
      "playNote": "正版备份 1 条 · 自用走 watchLink；工具前可再补 1 条",
      "mapPin": "工程 · 科学精神",
      "episodes": [
        {
          "id": "qimiao-1",
          "n": 1,
          "title": "超级火箭发动机",
          "blurb": "氢氧发动机：又冷又热，却推得动火箭。",
          "duration": "约 5 分钟",
          "link": "https://tv.cctv.com/2023/01/11/VIDEu5pzyZ6XjzPFSCYTqFbV230111.shtml",
          "hints": [
            "火箭",
            "发动机"
          ]
        },
        {
          "id": "qimiao-2",
          "n": 2,
          "title": "地下建设者",
          "blurb": "盾构机：在黑暗里开路的「地下建设者」。",
          "duration": "约 5 分钟",
          "link": "https://tv.cctv.com/2023/01/12/VIDETtfuJBLX4J8shZZdhv20230112.shtml",
          "hints": [
            "盾构",
            "隧道"
          ]
        },
        {
          "id": "qimiao-3",
          "n": 3,
          "title": "新蒸汽时代",
          "blurb": "蒸汽与能源：老原理怎样变成新力量。",
          "duration": "约 5 分钟",
          "link": "https://tv.cctv.com/2023/01/13/VIDEabWQeMERnwwrtdV9rTGl230113.shtml",
          "hints": [
            "蒸汽",
            "能源"
          ]
        },
        {
          "id": "qimiao-4",
          "n": 4,
          "title": "光能24小时",
          "blurb": "阳光怎样被存住，夜里也能用。",
          "duration": "约 5 分钟",
          "link": "https://tv.cctv.com/2023/01/14/VIDEsyclRxcJ1cfti2yhRyAl230114.shtml",
          "hints": [
            "太阳能",
            "储能"
          ]
        },
        {
          "id": "qimiao-5",
          "n": 5,
          "title": "特高压的秘密",
          "blurb": "电怎样跑得很远、损耗很小。",
          "duration": "约 5 分钟",
          "link": "https://tv.cctv.com/2023/01/16/VIDEnFNTJegakqTSXCuJu1x0230116.shtml",
          "hints": [
            "特高压",
            "输电"
          ]
        },
        {
          "id": "qimiao-6",
          "n": 6,
          "title": "极速列车",
          "blurb": "磁铁原理与高铁：为什么能跑那么快。",
          "duration": "约 5 分钟",
          "link": "https://tv.cctv.com/2023/01/17/VIDE2O2Ju0GoiGfJ2jqsDONW230117.shtml",
          "hints": [
            "高铁",
            "磁悬浮"
          ]
        }
      ],
      "watchLink": "https://tv.cctv.com/2023/01/11/VIDEu5pzyZ6XjzPFSCYTqFbV230111.shtml",
      "watchLabel": "央视网",
      "watchNote": "自用现开此链（央视网正片 10 集；手机建议央视影音 App）。工具模式改走 official。",
      "official": [
        {
          "kind": "cctv",
          "url": "https://tv.cctv.com/2023/01/11/VIDEu5pzyZ6XjzPFSCYTqFbV230111.shtml",
          "label": "央视 / 纪录片网"
        }
      ]
    },
    {
      "id": "letters",
      "heroArt": "./covers/hero/letters.jpg",
      "title": "书简阅中国",
      "category": "human",
      "slot": "B",
      "role": "main",
      "duration": "约 50 分钟 × 6 集",
      "episodeHint": "周末 1 集 · 可先看第1集家书",
      "muscle": "叙事",
      "blurb": "一封信一个故事：家书、友情、家风。用古人的字，看见他们怎么爱、怎么选、怎么活。",
      "link": "https://tv.cctv.com/2021/02/12/VIDE6castX10rFlwYX7KPvLb210212.shtml",
      "linkLabel": "央视网",
      "play": "stable",
      "shareable": true,
      "playNote": "正版备份已满 2 条 · 自用走 watchLink",
      "mapPin": "书信 · 人情与选择",
      "parentNote": "第2集爱情、第4集女性命运，建议家长陪看",
      "altLink": "https://tv.cctv.com/2021/02/08/VIDAHc9krezHR6EXJAq7w0nM210208.shtml",
      "altLabel": "央视 / 纪录片网",
      "episodes": [
        {
          "id": "letters-1",
          "n": 1,
          "title": "小人物 大历史",
          "blurb": "家书连着游子：小人物的字，记下大历史里的温度。",
          "duration": "约 50 分钟",
          "link": "https://tv.cctv.com/2021/02/12/VIDE6castX10rFlwYX7KPvLb210212.shtml",
          "hints": [
            "家书",
            "亲人",
            "小人物",
            "文字留下温度"
          ]
        },
        {
          "id": "letters-2",
          "n": 2,
          "title": "是你告诉我 爱情的模样",
          "blurb": "秦嘉徐淑、卓文君……信里怎么写「喜欢」和「牵挂」。",
          "duration": "约 50 分钟",
          "link": "https://tv.cctv.com/2021/02/13/VIDEL0urlbjetiiqviqnzEy5210213.shtml",
          "hints": [
            "书信",
            "牵挂",
            "表达",
            "家长陪看"
          ]
        },
        {
          "id": "letters-3",
          "n": 3,
          "title": "再大的风 我都去接你",
          "blurb": "知己难寻：嵇康与山涛、白居易与元稹，友情写在信上。",
          "duration": "约 50 分钟",
          "link": "https://tv.cctv.com/2021/02/14/VIDEva10ohfmFstDIZA0kC2o210214.shtml",
          "hints": [
            "友情",
            "知己",
            "成全",
            "不同意见也能尊重"
          ]
        },
        {
          "id": "letters-4",
          "n": 4,
          "title": "孤独的路 勇敢的心",
          "blurb": "信里看见女子怎样走路：被限制，也仍要发出自己的声音。",
          "duration": "约 50 分钟",
          "link": "https://tv.cctv.com/2021/02/15/VIDEtIs6s13W5TClAnByTI6W210215.shtml",
          "hints": [
            "勇气",
            "选择",
            "发出声音",
            "家长陪看"
          ]
        },
        {
          "id": "letters-5",
          "n": 5,
          "title": "千古栋梁有家风",
          "blurb": "刘邦、马援、范仲淹……一封家书，怎样把规矩和期待传给后人。",
          "duration": "约 50 分钟",
          "link": "https://tv.cctv.com/2021/02/16/VIDEJvIlGsVBA70OOP4rXbIw210216.shtml",
          "hints": [
            "家风",
            "规矩",
            "期待",
            "写信给孩子"
          ]
        },
        {
          "id": "letters-6",
          "n": 6,
          "title": "留取丹心照汗青",
          "blurb": "岳飞、文天祥、林则徐：危难时，信里写出的志向。",
          "duration": "约 50 分钟",
          "link": "https://tv.cctv.com/2021/02/17/VIDEBRjhgVJe5XUcksE8DYOU210217.shtml",
          "hints": [
            "志向",
            "家国",
            "危难",
            "丹心"
          ]
        }
      ],
      "watchLink": "https://tv.cctv.com/2021/02/12/VIDE6castX10rFlwYX7KPvLb210212.shtml",
      "watchLabel": "央视网",
      "watchNote": "自用现开此链（央视网正片 6 集；手机建议央视影音 App）。工具模式改走 official。",
      "official": [
        {
          "kind": "cctv",
          "url": "https://tv.cctv.com/2021/02/12/VIDE6castX10rFlwYX7KPvLb210212.shtml",
          "label": "央视 / 纪录片网"
        },
        {
          "kind": "cctv",
          "url": "https://tv.cctv.com/2021/02/08/VIDAHc9krezHR6EXJAq7w0nM210208.shtml",
          "label": "央视 / 纪录片网"
        }
      ]
    },
    {
      "id": "zicong",
      "heroArt": "./covers/hero/zicong.jpg",
      "title": "字从遇见你",
      "category": "human",
      "slot": "A",
      "role": "main",
      "duration": "约 5 分钟 / 集",
      "episodeHint": "一晚 2–3 个字",
      "muscle": "审美",
      "blurb": "一集一个汉字：中、鼎、友……字形从哪来、古人怎么用。短，很适合工作日。",
      "link": "https://tv.cctv.com/2022/04/03/VIDE7qRtbkEOj7Q0M7FwKNDS220403.shtml",
      "linkLabel": "央视网",
      "play": "stable",
      "shareable": true,
      "playNote": "正版备份已满 2 条 · 自用走 watchLink",
      "mapPin": "汉字 · 形与故事",
      "altLink": "https://tv.cctv.com/2022/04/04/VIDACO0Ql6L8Q7t41qzriSTy220404.shtml",
      "altLabel": "央视 / 纪录片网",
      "episodes": [
        {
          "id": "zicong-1",
          "n": 1,
          "title": "中",
          "blurb": "汉字世界的中心：旗帜、「中国」一词从哪来。",
          "duration": "约 5 分钟",
          "link": "https://tv.cctv.com/2022/04/03/VIDE7qRtbkEOj7Q0M7FwKNDS220403.shtml",
          "hints": [
            "中心",
            "甲骨",
            "何尊"
          ]
        },
        {
          "id": "zicong-2",
          "n": 2,
          "title": "鼎",
          "blurb": "一只鼎：礼器、权力，和一个字的分量。",
          "duration": "约 5 分钟",
          "link": "https://tv.cctv.com/2022/04/04/VIDACO0Ql6L8Q7t41qzriSTy220404.shtml",
          "hints": [
            "青铜",
            "礼器",
            "分量"
          ]
        },
        {
          "id": "zicong-3",
          "n": 3,
          "title": "卜",
          "blurb": "古人怎样问天：甲骨上的裂纹变成了字。",
          "duration": "约 5 分钟",
          "link": "https://tv.cctv.com/2022/04/04/VIDACO0Ql6L8Q7t41qzriSTy220404.shtml",
          "hints": [
            "甲骨",
            "占卜",
            "裂纹"
          ]
        },
        {
          "id": "zicong-4",
          "n": 4,
          "title": "天",
          "blurb": "人仰头看见的「天」：字里藏着崇拜与秩序。",
          "duration": "约 5 分钟",
          "link": "https://tv.cctv.com/2022/04/04/VIDACO0Ql6L8Q7t41qzriSTy220404.shtml",
          "hints": [
            "天空",
            "仰观",
            "秩序"
          ]
        },
        {
          "id": "zicong-5",
          "n": 5,
          "title": "福",
          "blurb": "「福」字怎么写：酒、田、祈愿。",
          "duration": "约 5 分钟",
          "link": "https://tv.cctv.com/2022/04/04/VIDACO0Ql6L8Q7t41qzriSTy220404.shtml",
          "hints": [
            "祈愿",
            "酒",
            "田"
          ]
        }
      ],
      "watchLink": "https://tv.cctv.com/2022/04/03/VIDE7qRtbkEOj7Q0M7FwKNDS220403.shtml",
      "watchLabel": "央视网",
      "watchNote": "自用现开此链（第一季每集一字；目录可换字继续看）。工具模式改走 official。",
      "official": [
        {
          "kind": "cctv",
          "url": "https://tv.cctv.com/2022/04/03/VIDE7qRtbkEOj7Q0M7FwKNDS220403.shtml",
          "label": "央视 / 纪录片网"
        },
        {
          "kind": "cctv",
          "url": "https://tv.cctv.com/2022/04/04/VIDACO0Ql6L8Q7t41qzriSTy220404.shtml",
          "label": "央视 / 纪录片网"
        }
      ]
    },
    {
      "id": "heyi",
      "heroArt": "./covers/hero/heyi.jpg",
      "title": "何以中国",
      "category": "human",
      "slot": "B",
      "role": "side",
      "duration": "约 50 分钟 × 8 集",
      "episodeHint": "周末 1 集 · 可先看《秦汉》",
      "muscle": "叙事",
      "blurb": "用考古回答「中国从哪来」：秦汉一统，再往回走到摇篮与古国。家长可陪看。",
      "link": "https://www.iqiyi.com/a_25yb25rmy3t.html",
      "linkLabel": "爱奇艺正版",
      "play": "stable",
      "shareable": true,
      "playNote": "正版备份 1 条 · 自用走 watchLink；工具前可再补 1 条",
      "mapPin": "考古 · 文明从哪来",
      "parentNote": "信息密、偏成人叙事，建议陪看一集再决定追不追",
      "episodes": [
        {
          "id": "heyi-1",
          "n": 1,
          "title": "秦汉",
          "blurb": "第一个统一的中国：律法、道路、认同怎样立住。",
          "duration": "约 50 分钟",
          "link": "https://www.iqiyi.com/a_25yb25rmy3t.html",
          "hints": [
            "统一",
            "秦",
            "汉"
          ]
        },
        {
          "id": "heyi-2",
          "n": 2,
          "title": "摇篮",
          "blurb": "农业与定居：人怎样从流动变成「住下来」。",
          "duration": "约 50 分钟",
          "link": "https://www.iqiyi.com/a_25yb25rmy3t.html",
          "hints": [
            "农业",
            "定居",
            "起源"
          ]
        },
        {
          "id": "heyi-3",
          "n": 3,
          "title": "星斗",
          "blurb": "彩陶与交流：各地怎样开始大规模互动。",
          "duration": "约 50 分钟",
          "link": "https://www.iqiyi.com/a_25yb25rmy3t.html",
          "hints": [
            "彩陶",
            "交流",
            "互动"
          ]
        },
        {
          "id": "heyi-4",
          "n": 4,
          "title": "古国",
          "blurb": "早期国家出现：长江、黄河、西辽河的「古国」。",
          "duration": "约 50 分钟",
          "link": "https://www.iqiyi.com/a_25yb25rmy3t.html",
          "hints": [
            "古国",
            "早期文明"
          ]
        },
        {
          "id": "heyi-5",
          "n": 5,
          "title": "择中",
          "blurb": "中原怎样成为「中」：广域王朝的诞生。",
          "duration": "约 50 分钟",
          "link": "https://www.iqiyi.com/a_25yb25rmy3t.html",
          "hints": [
            "中原",
            "王朝"
          ]
        },
        {
          "id": "heyi-6",
          "n": 6,
          "title": "殷商",
          "blurb": "甲骨与青铜：商代留下的字和器。",
          "duration": "约 50 分钟",
          "link": "https://www.iqiyi.com/a_25yb25rmy3t.html",
          "hints": [
            "甲骨",
            "青铜",
            "商"
          ]
        },
        {
          "id": "heyi-7",
          "n": 7,
          "title": "家国",
          "blurb": "家与国怎样连在一起：周代的秩序想象。",
          "duration": "约 50 分钟",
          "link": "https://www.iqiyi.com/a_25yb25rmy3t.html",
          "hints": [
            "家",
            "国",
            "周"
          ]
        },
        {
          "id": "heyi-8",
          "n": 8,
          "title": "天下",
          "blurb": "多元一体：许多地方怎样变成一个「天下」。",
          "duration": "约 50 分钟",
          "link": "https://www.iqiyi.com/a_25yb25rmy3t.html",
          "hints": [
            "天下",
            "多元",
            "一体"
          ]
        }
      ],
      "watchLink": "https://www.iqiyi.com/a_25yb25rmy3t.html",
      "watchLabel": "爱奇艺正版",
      "watchNote": "自用现开此链（8 集全；在爱奇艺选集。考古向，挑感兴趣的集）。工具模式改走 official。",
      "official": [
        {
          "kind": "iqiyi",
          "url": "https://www.iqiyi.com/a_25yb25rmy3t.html",
          "label": "爱奇艺正版"
        }
      ]
    },
    {
      "id": "histfun",
      "heroArt": "./covers/hero/histfun.jpg",
      "title": "历史那些事",
      "category": "human",
      "slot": "A",
      "role": "side",
      "duration": "约 25–30 分钟 / 集",
      "episodeHint": "工作日或周末 1 集",
      "muscle": "叙事",
      "blurb": "苏轼爱吃、乾隆爱批奏折……正史里的趣事，轻松入口，不像通史那么沉。",
      "link": "https://www.bilibili.com/bangumi/play/ss25810",
      "linkLabel": "B 站正版",
      "play": "stable",
      "shareable": true,
      "playNote": "正版备份 1 条 · 自用走 watchLink；工具前可再补 1 条",
      "mapPin": "趣味正史",
      "episodes": [
        {
          "id": "histfun-1",
          "n": 1,
          "title": "在下东坡 一个吃货",
          "blurb": "苏轼不只会写诗：东坡肉、贬谪路上的胃口。",
          "duration": "约 25 分钟",
          "link": "https://www.bilibili.com/bangumi/play/ss25810",
          "hints": [
            "苏轼",
            "吃",
            "乐观"
          ]
        },
        {
          "id": "histfun-2",
          "n": 2,
          "title": "请回答604",
          "blurb": "隋唐之间的一则「穿越感」小史。",
          "duration": "约 25 分钟",
          "link": "https://www.bilibili.com/bangumi/play/ss25810",
          "hints": [
            "隋唐",
            "故事"
          ]
        },
        {
          "id": "histfun-3",
          "n": 3,
          "title": "爱发弹幕的乾隆同学",
          "blurb": "乾隆爱在书画上题字：古人的「弹幕」。",
          "duration": "约 25 分钟",
          "link": "https://www.bilibili.com/bangumi/play/ss25810",
          "hints": [
            "乾隆",
            "题字",
            "趣味"
          ]
        }
      ],
      "watchLink": "https://www.bilibili.com/bangumi/play/ss25810",
      "watchLabel": "B 站正版",
      "watchNote": "自用现开此链（B 站出品正版番剧 · 第一季 8 集；高清可能要大会员）。工具模式改走 official。",
      "official": [
        {
          "kind": "bilibili",
          "url": "https://www.bilibili.com/bangumi/play/ss25810",
          "label": "B 站正版"
        }
      ]
    },
    {
      "id": "howpaint",
      "heroArt": "./covers/hero/howpaint.jpg",
      "title": "此画怎讲",
      "category": "human",
      "slot": "A",
      "role": "side",
      "duration": "约 5 分钟 / 集",
      "episodeHint": "饭后 1 集",
      "muscle": "审美",
      "blurb": "名画变情景剧：捣练图、步辇图……短、好笑，历史与审美一起进。",
      "link": "https://v.qq.com/x/cover/mzc00200r8ravfe.html",
      "linkLabel": "腾讯视频正版",
      "play": "stable",
      "shareable": true,
      "playNote": "正版备份 1 条 · 自用走 watchLink；工具前可再补 1 条",
      "mapPin": "名画 · 故事",
      "episodes": [
        {
          "id": "howpaint-1",
          "n": 1,
          "title": "捣练图：传世名画C位之争",
          "blurb": "传世名画怎么排C位？画面里藏着什么故事。",
          "duration": "约 5 分钟",
          "link": "https://v.qq.com/x/cover/mzc00200r8ravfe/b0034jr2q96.html",
          "hints": [
            "名画",
            "故事"
          ]
        },
        {
          "id": "howpaint-2",
          "n": 2,
          "title": "捣练图：原来是一张小广告？",
          "blurb": "名画也可能是「广告」：古人怎么用画说话。",
          "duration": "约 5 分钟",
          "link": "https://v.qq.com/x/cover/mzc00200r8ravfe.html",
          "hints": [
            "用途",
            "宣传"
          ]
        },
        {
          "id": "howpaint-3",
          "n": 3,
          "title": "捣练图：自古姑嫂是天敌",
          "blurb": "画里的人物关系：细看就能发现脾气。",
          "duration": "约 5 分钟",
          "link": "https://v.qq.com/x/cover/mzc00200r8ravfe.html",
          "hints": [
            "人物",
            "关系"
          ]
        },
        {
          "id": "howpaint-4",
          "n": 4,
          "title": "果亲王允礼像",
          "blurb": "一幅肖像：理想型、直播翻车……用今天的话讲古人。",
          "duration": "约 5 分钟",
          "link": "https://v.qq.com/x/cover/mzc00200r8ravfe.html",
          "hints": [
            "肖像",
            "幽默"
          ]
        },
        {
          "id": "howpaint-5",
          "n": 5,
          "title": "果亲王允礼像：翻车",
          "blurb": "继续聊这幅像：古人也有「翻车现场」。",
          "duration": "约 5 分钟",
          "link": "https://v.qq.com/x/cover/mzc00200r8ravfe.html",
          "hints": [
            "翻车",
            "趣味"
          ]
        },
        {
          "id": "howpaint-6",
          "n": 6,
          "title": "砺剑图：铁拐李创业",
          "blurb": "神话人物也要「创业」？名画脑洞打开。",
          "duration": "约 5 分钟",
          "link": "https://v.qq.com/x/cover/mzc00200r8ravfe.html",
          "hints": [
            "神话",
            "脑洞"
          ]
        }
      ],
      "watchLink": "https://v.qq.com/x/cover/mzc00200r8ravfe.html",
      "watchLabel": "腾讯视频正版",
      "watchNote": "自用现开此链（腾讯视频出品正版，需会员才能看。没有免费正片页，不用投稿代替。）。工具模式改走 official。",
      "official": [
        {
          "kind": "tencent",
          "url": "https://v.qq.com/x/cover/mzc00200r8ravfe.html",
          "label": "腾讯视频正版"
        }
      ]
    },
    {
      "id": "artfun",
      "heroArt": "./covers/hero/artfun.jpg",
      "title": "奇趣美术馆",
      "category": "human",
      "slot": "A",
      "role": "side",
      "duration": "约 2 分钟 / 集",
      "episodeHint": "微打卡 · 一晚 1–2 集",
      "muscle": "审美",
      "blurb": "法国喜剧演名画：每集两分钟，等车也能看完再盖印。",
      "link": "https://www.bilibili.com/bangumi/play/ep272748",
      "linkLabel": "B 站正版",
      "play": "stable",
      "shareable": true,
      "playNote": "正版备份 1 条 · 自用走 watchLink；工具前可再补 1 条",
      "mapPin": "名画 · 微打卡",
      "episodes": [
        {
          "id": "artfun-1",
          "n": 1,
          "title": "美国式哥特（上）",
          "blurb": "名画里的一对人：表情为什么这么怪？",
          "duration": "约 2 分钟",
          "link": "https://www.bilibili.com/bangumi/play/ep272748",
          "hints": [
            "名画",
            "表情"
          ]
        },
        {
          "id": "artfun-2",
          "n": 2,
          "title": "美国式哥特（中）",
          "blurb": "继续拆这幅画：服装、背景在说什么。",
          "duration": "约 2 分钟",
          "link": "https://www.bilibili.com/bangumi/play/ep272749",
          "hints": [
            "细节",
            "背景"
          ]
        },
        {
          "id": "artfun-3",
          "n": 3,
          "title": "美国式哥特（下）",
          "blurb": "收尾：这幅画为什么成了经典梗。",
          "duration": "约 2 分钟",
          "link": "https://www.bilibili.com/bangumi/play/ep272750",
          "hints": [
            "经典",
            "梗"
          ]
        },
        {
          "id": "artfun-4",
          "n": 4,
          "title": "哈勒昆和皮埃罗（上）",
          "blurb": "喜剧人物走进画里：哈勒昆登场。",
          "duration": "约 2 分钟",
          "link": "https://www.bilibili.com/bangumi/play/ep272751",
          "hints": [
            "喜剧",
            "角色"
          ]
        },
        {
          "id": "artfun-5",
          "n": 5,
          "title": "哈勒昆和皮埃罗（中）",
          "blurb": "两个人物互怼：画里也有对手戏。",
          "duration": "约 2 分钟",
          "link": "https://www.bilibili.com/bangumi/play/ep272752",
          "hints": [
            "对手戏"
          ]
        },
        {
          "id": "artfun-6",
          "n": 6,
          "title": "哈勒昆和皮埃罗（下）",
          "blurb": "收束这一段名画小品。",
          "duration": "约 2 分钟",
          "link": "https://www.bilibili.com/bangumi/play/ep272753",
          "hints": [
            "小品"
          ]
        }
      ],
      "watchLink": "https://www.bilibili.com/bangumi/play/ep272748",
      "watchLabel": "B 站正版",
      "watchNote": "自用现开此链（B 站正版番剧，整部需大会员。大会员只解开 B 站买下版权的片子。）。工具模式改走 official。",
      "official": [
        {
          "kind": "bilibili",
          "url": "https://www.bilibili.com/bangumi/play/ep272748",
          "label": "B 站正版"
        }
      ]
    },
    {
      "id": "judgeyes",
      "heroArt": "./covers/hero/judgeyes.jpg",
      "title": "是这样的，法官",
      "category": "human",
      "slot": "B",
      "role": "side",
      "duration": "约 25–45 分钟 × 10 集",
      "episodeHint": "家长陪同 · 周末最多 1 集",
      "muscle": "叙事",
      "blurb": "基层法院真实庭审：天理、国法、人情。建议家长陪同，一起讨论法律与人性。",
      "link": "https://v.qq.com/x/cover/mzc002009s5aawf.html",
      "linkLabel": "腾讯视频",
      "play": "stable",
      "shareable": true,
      "playNote": "正版备份 1 条 · 自用走 watchLink；工具前可再补 1 条",
      "mapPin": "法庭 · 普法",
      "parentNote": "含真实纠纷、暴力与家庭冲突内容；必须家长陪看并筛选集数",
      "episodes": [
        {
          "id": "judgeyes-1",
          "n": 1,
          "title": "冲动的代价",
          "blurb": "一念冲动进法庭：规则为什么重要。",
          "duration": "约 40 分钟",
          "link": "https://v.qq.com/x/cover/mzc002009s5aawf.html",
          "hints": [
            "冲动",
            "规则"
          ]
        },
        {
          "id": "judgeyes-2",
          "n": 2,
          "title": "我爱你，对不起",
          "blurb": "亲密关系里的伤害与道歉：法律怎么管。",
          "duration": "约 25 分钟",
          "link": "https://v.qq.com/x/cover/mzc002009s5aawf.html",
          "hints": [
            "关系",
            "责任"
          ]
        },
        {
          "id": "judgeyes-3",
          "n": 3,
          "title": "情感值多少钱？",
          "blurb": "情感能不能用钱衡量：民事里的数字。",
          "duration": "约 25 分钟",
          "link": "https://v.qq.com/x/cover/mzc002009s5aawf.html",
          "hints": [
            "民事",
            "赔偿"
          ]
        },
        {
          "id": "judgeyes-4",
          "n": 4,
          "title": "一念之差",
          "blurb": "一念之差改变人生：选择的后果。",
          "duration": "约 40 分钟",
          "link": "https://v.qq.com/x/cover/mzc002009s5aawf.html",
          "hints": [
            "选择",
            "后果"
          ]
        },
        {
          "id": "judgeyes-5",
          "n": 5,
          "title": "被告席上的打工人",
          "blurb": "打工与纠纷：普通人怎样走进法庭。",
          "duration": "约 25 分钟",
          "link": "https://v.qq.com/x/cover/mzc002009s5aawf.html",
          "hints": [
            "劳动",
            "纠纷"
          ]
        },
        {
          "id": "judgeyes-6",
          "n": 6,
          "title": "谎言还能说多久",
          "blurb": "谎言在法庭上站不住：证据说话。",
          "duration": "约 40 分钟",
          "link": "https://v.qq.com/x/cover/mzc002009s5aawf.html",
          "hints": [
            "证据",
            "诚实"
          ]
        }
      ],
      "watchLink": "https://v.qq.com/x/cover/mzc002009s5aawf.html",
      "watchLabel": "腾讯视频",
      "watchNote": "自用现开此链（腾讯视频正版 10 集；部分集可能需会员）。工具模式改走 official。",
      "official": [
        {
          "kind": "tencent",
          "url": "https://v.qq.com/x/cover/mzc002009s5aawf.html",
          "label": "腾讯视频正版"
        }
      ]
    },
    {
      "id": "designah",
      "heroArt": "./covers/hero/designah.jpg",
      "title": "啊！设计",
      "category": "human",
      "slot": "A",
      "role": "side",
      "duration": "约 10 分钟 × 60 集",
      "episodeHint": "一晚 1 集",
      "muscle": "审美",
      "blurb": "拆雨伞、铅笔、书包：日常物件原来是这样设计的。练观察力。",
      "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/",
      "linkLabel": "B 站直达",
      "play": "ok",
      "shareable": false,
      "playNote": "尚无正版备份 · 自用 watchLink；工具上线前须补或下架",
      "mapPin": "观察 · 拆解",
      "episodes": [
        {
          "id": "designah-1",
          "n": 1,
          "title": "壶的种类",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=1",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-2",
          "n": 2,
          "title": "这些交通符号你认识吗",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=2",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-3",
          "n": 3,
          "title": "蛋糕的倾斜",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=3",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-4",
          "n": 4,
          "title": "丰富的纹样",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=4",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-5",
          "n": 5,
          "title": "书包的拆解",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=5",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-6",
          "n": 6,
          "title": "光与影",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=6",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-7",
          "n": 7,
          "title": "各式各样的笔",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=7",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-8",
          "n": 8,
          "title": "美味寿司",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=8",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-9",
          "n": 9,
          "title": "文字的诞生",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=9",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-10",
          "n": 10,
          "title": "拆解雨伞",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=10",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-11",
          "n": 11,
          "title": "可爱的便当",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=11",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-12",
          "n": 12,
          "title": "观察钱币",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=12",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-13",
          "n": 13,
          "title": "拆解绳子",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=13",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-14",
          "n": 14,
          "title": "你认识这些乐器吗",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=14",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-15",
          "n": 15,
          "title": "伞是这样的",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=15",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-16",
          "n": 16,
          "title": "拆解后的铅笔",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=16",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-17",
          "n": 17,
          "title": "你知道这些球怎么玩吗",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=17",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-18",
          "n": 18,
          "title": "玻璃器皿",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=18",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-19",
          "n": 19,
          "title": "我们的头发是什么样的",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=19",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-20",
          "n": 20,
          "title": "你知道游泳池为什么要分区吗",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=20",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-21",
          "n": 21,
          "title": "生活中的物品都是什么形状组成的",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=21",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-22",
          "n": 22,
          "title": "鲜艳的花朵",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=22",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-23",
          "n": 23,
          "title": "你认识筷子吗",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=23",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-24",
          "n": 24,
          "title": "这些鞋子你认识吗",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=24",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-25",
          "n": 25,
          "title": "旋转的螺丝钉",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=25",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-26",
          "n": 26,
          "title": "相机与镜头",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=26",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-27",
          "n": 27,
          "title": "人的肢体是由哪些部分组成的",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=27",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-28",
          "n": 28,
          "title": "观察缤纷色彩",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=28",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-29",
          "n": 29,
          "title": "你真的认识电脑吗",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=29",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-30",
          "n": 30,
          "title": "厨房里的刀具",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=30",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-31",
          "n": 31,
          "title": "服装的材质",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=31",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-32",
          "n": 32,
          "title": "鱼缸的变化",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=32",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-33",
          "n": 33,
          "title": "甜点的秘密",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=33",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-34",
          "n": 34,
          "title": "自行车的进化",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=34",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-35",
          "n": 35,
          "title": "包的结构",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=35",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-36",
          "n": 36,
          "title": "圣诞花环",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=36",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-37",
          "n": 37,
          "title": "自行车原来是这样组装的",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=37",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-38",
          "n": 38,
          "title": "制作面条的过程",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=38",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-39",
          "n": 39,
          "title": "花样玻璃瓶",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=39",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-40",
          "n": 40,
          "title": "数字的排列",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=40",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-41",
          "n": 41,
          "title": "铲子为什么是这样的",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=41",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-42",
          "n": 42,
          "title": "你知道面包是如何制作的吗",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=42",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-43",
          "n": 43,
          "title": "一起来看大家画的图画",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=43",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-44",
          "n": 44,
          "title": "削笔刀的结构",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=44",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-45",
          "n": 45,
          "title": "你知道工厂为什么要设置流水线作业吗",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=45",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-46",
          "n": 46,
          "title": "这些仪器你都认识吗",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=46",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-47",
          "n": 47,
          "title": "铁器的制作过程",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=47",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-48",
          "n": 48,
          "title": "你能想象的到吗",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=48",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-49",
          "n": 49,
          "title": "各式各样的桌椅",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=49",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-50",
          "n": 50,
          "title": "你知道钢琴的制作过程吗",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=50",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-51",
          "n": 51,
          "title": "为什么纸巾可以抽着拿",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=51",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-52",
          "n": 52,
          "title": "你知道拆解后的球是什么样吗",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=52",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-53",
          "n": 53,
          "title": "你知道盖房的瓦片是怎么制作的吗",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=53",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-54",
          "n": 54,
          "title": "游乐场里的过山车是由哪些部分组成的",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=54",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-55",
          "n": 55,
          "title": "你知道什么是榻榻米吗",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=55",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-56",
          "n": 56,
          "title": "圣诞老人的样子",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=56",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-57",
          "n": 57,
          "title": "你知道KTV是怎么组成吗",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=57",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-58",
          "n": 58,
          "title": "为什么衣服会有袖子",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=58",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-59",
          "n": 59,
          "title": "关于喝茶的讲究",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=59",
          "hints": [
            "观察",
            "设计"
          ]
        },
        {
          "id": "designah-60",
          "n": 60,
          "title": "拆解后的三文鱼你认识吗",
          "blurb": "拆开看这个日常物件是怎么设计的。",
          "duration": "约 10 分钟",
          "link": "https://www.bilibili.com/video/BV1hwKfzmEr4/?p=60",
          "hints": [
            "观察",
            "设计"
          ]
        }
      ],
      "watchLink": "https://www.bilibili.com/video/BV1hwKfzmEr4/",
      "watchLabel": "B 站直达",
      "watchNote": "自用：仅自家备用：NHK《啊！设计》暂无大陆稳定正版页；投稿可能下架。工具上线前须补 official，否则标「片源暂缺」。",
      "official": []
    },
    {
      "id": "aerial",
      "heroArt": "./covers/hero/aerial.jpg",
      "title": "航拍中国 第一季",
      "category": "human",
      "slot": "B",
      "role": "main",
      "duration": "约 50 分钟 × 6 集",
      "episodeHint": "周末 1 集",
      "muscle": "叙事",
      "blurb": "从天上俯瞰中国山川城市。构图漂亮，也适合聊「地方长什么样、人怎么住」。",
      "link": "https://tv.cctv.com/2016/12/28/VIDALOmjxOZe51NjntPvOI00161228.shtml",
      "linkLabel": "央视网",
      "play": "stable",
      "shareable": true,
      "playNote": "正版备份 1 条 · 自用走 watchLink；工具前可再补 1 条",
      "mapPin": "中国大地 · 构图",
      "watchLink": "https://tv.cctv.com/2016/12/28/VIDALOmjxOZe51NjntPvOI00161228.shtml",
      "watchLabel": "央视网",
      "watchNote": "自用现开此链（央视网官方；手机建议央视影音 App）。工具模式改走 official。",
      "official": [
        {
          "kind": "cctv",
          "url": "https://tv.cctv.com/2016/12/28/VIDALOmjxOZe51NjntPvOI00161228.shtml",
          "label": "央视 / 纪录片网"
        }
      ]
    },
    {
      "id": "supereng",
      "heroArt": "./covers/hero/supereng.jpg",
      "title": "超级工程",
      "category": "finance",
      "slot": "B",
      "role": "main",
      "duration": "约 40–50 分钟 / 集",
      "episodeHint": "周末 1 集 · 优先大桥 / 大厦 / 地铁",
      "muscle": "工程",
      "blurb": "不利条件下怎么把活干完：港珠澳沉管、上海中心、地铁网络。看工程师怎么解题。",
      "link": "https://tv.cctv.com/2013/03/07/VIDE1362620723304281.shtml",
      "linkLabel": "央视网",
      "play": "stable",
      "shareable": true,
      "playNote": "正版备份 1 条 · 自用走 watchLink；工具前可再补 1 条",
      "mapPin": "难题 · 材料 · 精度",
      "altLink": "https://www.bilibili.com/video/BV1x7411j7sc/",
      "altLabel": "B 站合集（备）",
      "episodes": [
        {
          "id": "supereng-1",
          "n": 1,
          "title": "港珠澳大桥",
          "blurb": "跨海、沉管、人工岛：在风浪与航道里建桥。",
          "duration": "约 50 分钟",
          "link": "https://tv.cctv.com/2013/03/07/VIDE1362620723304281.shtml",
          "hints": [
            "跨海",
            "沉管",
            "人工岛"
          ]
        },
        {
          "id": "supereng-2",
          "n": 2,
          "title": "上海中心大厦",
          "blurb": "垂直城市：超高层怎样抗风、抗震、住人。",
          "duration": "约 50 分钟",
          "link": "https://tv.cctv.com/2013/03/07/VIDE1362620905006428.shtml",
          "hints": [
            "超高层",
            "抗风"
          ]
        },
        {
          "id": "supereng-3",
          "n": 3,
          "title": "北京地铁网络",
          "blurb": "巨型地铁网：地下怎样长出一座城。",
          "duration": "约 50 分钟",
          "link": "https://tv.cctv.com/2013/03/07/VIDE1362586157393830.shtml",
          "hints": [
            "地铁",
            "网络"
          ]
        },
        {
          "id": "supereng-4",
          "n": 4,
          "title": "海上巨型风机",
          "blurb": "海上装风机：台风季怎样把巨物立住。",
          "duration": "约 50 分钟",
          "link": "https://tv.cctv.com/2013/03/08/VIDE1362707047278318.shtml",
          "hints": [
            "风电",
            "海上"
          ]
        },
        {
          "id": "supereng-5",
          "n": 5,
          "title": "第5集",
          "blurb": "继续超级工程：材料、精度与极限条件。",
          "duration": "约 50 分钟",
          "link": "https://tv.cctv.com/2012/09/28/VIDE1355097938588270.shtml",
          "hints": [
            "工程",
            "极限"
          ]
        }
      ],
      "watchLink": "https://tv.cctv.com/2013/03/07/VIDE1362620723304281.shtml",
      "watchLabel": "央视网",
      "watchNote": "自用现开此链（央视网正片；手机建议央视影音 App）。工具模式改走 official。",
      "official": [
        {
          "kind": "cctv",
          "url": "https://tv.cctv.com/2013/03/07/VIDE1362620723304281.shtml",
          "label": "央视 / 纪录片网"
        }
      ]
    },
    {
      "id": "howmade",
      "heroArt": "./covers/hero/howmade.jpg",
      "title": "造物小百科",
      "category": "finance",
      "slot": "A",
      "role": "main",
      "duration": "约 5–8 分钟 / 段",
      "episodeHint": "一晚 1 个工厂片段",
      "muscle": "工程",
      "blurb": "铝箔、蜂蜜、牛仔裤怎么从工厂里出来。接材料片：看见「东西是被做出来的」。",
      "link": "https://www.bilibili.com/video/BV11z4y1e7MM/",
      "linkLabel": "B 站直达",
      "play": "ok",
      "shareable": false,
      "playNote": "尚无正版备份 · 自用 watchLink；工具上线前须补或下架",
      "mapPin": "工厂 · 怎么做出来",
      "episodes": [
        {
          "id": "howmade-1",
          "n": 1,
          "title": "铝箔 · 滑雪板",
          "blurb": "铝箔和滑雪板：薄片与坚硬板材怎样被做出来。",
          "duration": "约 22 分钟",
          "link": "https://www.bilibili.com/video/BV11z4y1e7MM/?p=1",
          "hints": [
            "铝箔",
            "生产线"
          ]
        },
        {
          "id": "howmade-2",
          "n": 2,
          "title": "助听器 · 拼图",
          "blurb": "精密小零件：助听器怎样做准。",
          "duration": "约 22 分钟",
          "link": "https://www.bilibili.com/video/BV11z4y1e7MM/?p=2",
          "hints": [
            "精度",
            "零件"
          ]
        },
        {
          "id": "howmade-3",
          "n": 3,
          "title": "钉子与订书钉",
          "blurb": "最简单的金属件：钉子怎样量产。",
          "duration": "约 22 分钟",
          "link": "https://www.bilibili.com/video/BV11z4y1e7MM/?p=3",
          "hints": [
            "钉子",
            "量产"
          ]
        },
        {
          "id": "howmade-4",
          "n": 4,
          "title": "镜片 · 研磨",
          "blurb": "眼镜片怎样磨到能看清世界。",
          "duration": "约 22 分钟",
          "link": "https://www.bilibili.com/video/BV11z4y1e7MM/?p=4",
          "hints": [
            "镜片",
            "研磨"
          ]
        },
        {
          "id": "howmade-5",
          "n": 5,
          "title": "蜂蜜 · 光纤",
          "blurb": "甜的和传光的：两种完全不同的「造」。",
          "duration": "约 22 分钟",
          "link": "https://www.bilibili.com/video/BV11z4y1e7MM/?p=5",
          "hints": [
            "蜂蜜",
            "光纤"
          ]
        },
        {
          "id": "howmade-6",
          "n": 6,
          "title": "钻石切割 · 木材",
          "blurb": "硬的切、软的锯：材料决定工艺。",
          "duration": "约 22 分钟",
          "link": "https://www.bilibili.com/video/BV11z4y1e7MM/?p=6",
          "hints": [
            "切割",
            "木材"
          ]
        }
      ],
      "watchLink": "https://www.bilibili.com/video/BV11z4y1e7MM/",
      "watchLabel": "B 站直达",
      "watchNote": "自用：仅自家备用：Discovery《造物》暂无大陆稳定正版页；投稿可能下架。工具上线前须补 official，否则标「片源暂缺」。",
      "official": []
    },
    {
      "id": "materialsecret",
      "heroArt": "./covers/hero/materialsecret.jpg",
      "title": "材料的秘密身世",
      "category": "finance",
      "slot": "B",
      "role": "main",
      "duration": "约 50 分钟 × 3 集",
      "episodeHint": "周末 1 集（已看过第1可续第2）",
      "muscle": "工程",
      "blurb": "金属、塑料、陶瓷……日常材料从哪来、改变了什么。故事感强，比纯工业片更好入口。",
      "link": "https://www.bilibili.com/bangumi/play/ep257923",
      "linkLabel": "B 站正版",
      "play": "stable",
      "shareable": true,
      "playNote": "正版备份 1 条 · 自用走 watchLink；工具前可再补 1 条",
      "mapPin": "材料 · 从矿石到生活",
      "cover": "./covers/materialsecret.jpg",
      "episodes": [
        {
          "id": "materialsecret-1",
          "n": 1,
          "title": "金属",
          "blurb": "从青铜到合金：金属怎样被冶炼，又怎样撑起飞机与城市。",
          "duration": "约 50 分钟",
          "link": "https://www.bilibili.com/bangumi/play/ep257923",
          "hints": [
            "冶炼",
            "合金",
            "坚硬与延展",
            "工具与建筑"
          ],
          "cover": "./covers/materialsecret-1.jpg"
        },
        {
          "id": "materialsecret-2",
          "n": 2,
          "title": "塑料",
          "blurb": "塑料如何模仿自然、走进日常，也带来新的问题与可能。",
          "duration": "约 50 分钟",
          "link": "https://www.bilibili.com/bangumi/play/ep257924",
          "hints": [
            "聚合物",
            "轻便",
            "大量生产",
            "回收与使用"
          ],
          "cover": "./covers/materialsecret-2.jpg"
        },
        {
          "id": "materialsecret-3",
          "n": 3,
          "title": "陶瓷",
          "blurb": "黏土、沙子变成陶器、玻璃和水泥：平凡材料如何建起文明。",
          "duration": "约 50 分钟",
          "link": "https://www.bilibili.com/bangumi/play/ep257925",
          "hints": [
            "陶瓷",
            "玻璃",
            "水泥",
            "耐热与透明"
          ],
          "cover": "./covers/materialsecret-3.jpg"
        }
      ],
      "watchLink": "https://www.bilibili.com/bangumi/play/ep257923",
      "watchLabel": "B 站正版",
      "watchNote": "自用现开此链（正版 3 集；建议家长陪看第 1 集建立兴趣）。工具模式改走 official。",
      "official": [
        {
          "kind": "bilibili",
          "url": "https://www.bilibili.com/bangumi/play/ep257923",
          "label": "B 站正版"
        }
      ]
    },
    {
      "id": "qingzang",
      "heroArt": "./covers/hero/qingzang.jpg",
      "title": "青藏铁路",
      "category": "finance",
      "slot": "B",
      "role": "main",
      "duration": "约 40 分钟 × 6 集",
      "episodeHint": "周末 1 集 · 建议冻土 / 高海拔集",
      "muscle": "工程",
      "blurb": "世界屋脊上修铁路：缺氧、冻土、塌方。极端环境里怎么把问题解决掉。",
      "link": "https://www.bilibili.com/video/BV1fs411o7Yn/",
      "linkLabel": "B 站直达",
      "play": "ok",
      "shareable": false,
      "playNote": "尚无正版备份 · 自用 watchLink；工具上线前须补或下架",
      "mapPin": "高原 · 冻土 · 解题",
      "watchLink": "https://www.bilibili.com/video/BV1fs411o7Yn/",
      "watchLabel": "B 站直达",
      "watchNote": "自用：全 6 集分P；可先看冻土与桥梁难题集。工具上线前须补 official，否则标「片源暂缺」。",
      "official": []
    },
    {
      "id": "antarcticbase",
      "heroArt": "./covers/hero/antarcticbase.jpg",
      "title": "南极探秘之旅（长城站）",
      "category": "finance",
      "slot": "B",
      "role": "side",
      "duration": "约 25–30 分钟 × 5 集",
      "episodeHint": "周末 1 集",
      "muscle": "工程",
      "blurb": "从智利到长城站：中国南极科考站怎样站住、物资怎么运到、人怎么过冬。",
      "link": "https://www.bilibili.com/video/BV1FagJ6JEq5/?p=1",
      "linkLabel": "B 站直达",
      "play": "ok",
      "shareable": false,
      "playNote": "尚无正版备份 · 自用 watchLink；工具上线前须补或下架",
      "mapPin": "南极 · 科考站",
      "episodes": [
        {
          "id": "antarcticbase-1",
          "n": 1,
          "title": "穿越智利",
          "blurb": "去南极的路上：地理与补给怎样准备。",
          "duration": "约 30 分钟",
          "link": "https://www.bilibili.com/video/BV1FagJ6JEq5/?p=1",
          "hints": [
            "补给",
            "路程"
          ]
        },
        {
          "id": "antarcticbase-2",
          "n": 2,
          "title": "风雨长城站",
          "blurb": "长城站怎样抗风抗寒、站稳脚跟。",
          "duration": "约 30 分钟",
          "link": "https://www.bilibili.com/video/BV1FagJ6JEq5/?p=2",
          "hints": [
            "抗风",
            "保暖"
          ]
        },
        {
          "id": "antarcticbase-3",
          "n": 3,
          "title": "南极无国界",
          "blurb": "南极条约：科考与合作的规则。",
          "duration": "约 30 分钟",
          "link": "https://www.bilibili.com/video/BV1FagJ6JEq5/?p=3",
          "hints": [
            "条约",
            "合作"
          ]
        },
        {
          "id": "antarcticbase-4",
          "n": 4,
          "title": "极地中国年",
          "blurb": "中国人在南极的一年：工作与生活。",
          "duration": "约 30 分钟",
          "link": "https://www.bilibili.com/video/BV1FagJ6JEq5/?p=4",
          "hints": [
            "科考",
            "生活"
          ]
        },
        {
          "id": "antarcticbase-5",
          "n": 5,
          "title": "再见，南极",
          "blurb": "离开极地：这座站留下了什么。",
          "duration": "约 30 分钟",
          "link": "https://www.bilibili.com/video/BV1FagJ6JEq5/?p=5",
          "hints": [
            "离开",
            "记录"
          ]
        }
      ],
      "watchLink": "https://www.bilibili.com/video/BV1FagJ6JEq5/?p=1",
      "watchLabel": "B 站直达",
      "watchNote": "自用：央视纪实合集 5 集分P；播放量一般但可播，优先于失效投稿。工具上线前须补 official，否则标「片源暂缺」。",
      "official": []
    },
    {
      "id": "skytree",
      "heroArt": "./covers/hero/skytree.jpg",
      "title": "东京天空树",
      "category": "finance",
      "slot": "B",
      "role": "side",
      "duration": "约 45–50 分钟",
      "episodeHint": "周末一部",
      "muscle": "工程",
      "blurb": "又高又要抗震：钢材怎么接、工地怎么组织。一座塔如何在地震带「站住」。",
      "link": "https://www.bilibili.com/video/BV15s411Z7Qz/",
      "linkLabel": "B 站直达",
      "play": "ok",
      "shareable": false,
      "playNote": "尚无正版备份 · 自用 watchLink；工具上线前须补或下架",
      "mapPin": "高度 · 抗震解题",
      "watchLink": "https://www.bilibili.com/video/BV15s411Z7Qz/",
      "watchLabel": "B 站直达",
      "watchNote": "自用：NHK 建造历程；偏工程过程，不是学院审美片。工具上线前须补 official，否则标「片源暂缺」。",
      "official": []
    },
    {
      "id": "bridges",
      "heroArt": "./covers/hero/bridges.jpg",
      "title": "跨越（桥梁）",
      "category": "finance",
      "slot": "B",
      "role": "side",
      "duration": "约 45 分钟 × 5 集",
      "episodeHint": "周末 1 集",
      "muscle": "工程",
      "blurb": "桥为什么不会塌？梁桥、拱桥、斜拉桥怎么把力传到地面。材料与力学入门。",
      "link": "https://www.bilibili.com/video/BV1Rt411t7qv/",
      "linkLabel": "B 站直达",
      "play": "ok",
      "shareable": false,
      "playNote": "尚无正版备份 · 自用 watchLink；工具上线前须补或下架",
      "mapPin": "桥梁 · 力的路径",
      "watchLink": "https://www.bilibili.com/video/BV1Rt411t7qv/",
      "watchLabel": "B 站直达",
      "watchNote": "自用：央视《跨越》1080P 合集投稿；非大会员可看。工具上线前须补 official，否则标「片源暂缺」。",
      "official": []
    },
    {
      "id": "dimensions",
      "heroArt": "./covers/hero/dimensions.jpg",
      "title": "维度：数学漫步（第1–2章）",
      "category": "nature",
      "slot": "A",
      "role": "main",
      "duration": "约 14 分钟 / 章",
      "episodeHint": "只看二维、三维",
      "muscle": "数理",
      "blurb": "用动画走进二维、三维空间。法国《数学漫步》同系，启发空间与形状直觉。",
      "link": "https://www.dimensions-math.org/Dim_ZH_si.htm",
      "linkLabel": "官网免费正片",
      "play": "stable",
      "shareable": true,
      "playNote": "正版备份 1 条 · 自用走 watchLink；工具前可再补 1 条",
      "mapPin": "空间直觉",
      "watchLink": "https://www.dimensions-math.org/Dim_ZH_si.htm",
      "watchLabel": "官网免费正片",
      "watchNote": "自用现开此链（创作共用，官网可看可下，画质清晰）。工具模式改走 official。",
      "official": [
        {
          "kind": "official_site",
          "url": "https://www.dimensions-math.org/Dim_ZH_si.htm",
          "label": "官网正片"
        }
      ]
    },
    {
      "id": "thecode",
      "heroArt": "./covers/hero/thecode.jpg",
      "title": "解码数学",
      "category": "nature",
      "slot": "B",
      "role": "main",
      "duration": "约 50 分钟 × 3 集",
      "episodeHint": "周末 1 集 · 可先看「形状」",
      "muscle": "数理",
      "blurb": "数字、形状、预测：自然和建筑里藏着的「密码」。数学兴趣的入口。",
      "link": "https://www.bilibili.com/video/BV1Mx411R7oQ/?p=1",
      "linkLabel": "B 站直达",
      "play": "ok",
      "shareable": false,
      "playNote": "尚无正版备份 · 自用 watchLink；工具上线前须补或下架",
      "mapPin": "数字 · 形状 · 预测",
      "episodes": [
        {
          "id": "thecode-1",
          "n": 1,
          "title": "数字",
          "blurb": "数字藏在自然和生活里：数一数，规律就出现。",
          "duration": "约 50 分钟",
          "link": "https://www.bilibili.com/video/BV1Mx411R7oQ/?p=1",
          "hints": [
            "数字",
            "规律",
            "自然"
          ]
        },
        {
          "id": "thecode-2",
          "n": 2,
          "title": "形状",
          "blurb": "形状为什么反复出现：蜂巢、建筑、雪花。",
          "duration": "约 50 分钟",
          "link": "https://www.bilibili.com/video/BV1Mx411R7oQ/?p=2",
          "hints": [
            "形状",
            "建筑",
            "重复"
          ]
        },
        {
          "id": "thecode-3",
          "n": 3,
          "title": "预测",
          "blurb": "用数学猜下一步：天气、趋势、可能性。",
          "duration": "约 50 分钟",
          "link": "https://www.bilibili.com/video/BV1Mx411R7oQ/?p=3",
          "hints": [
            "预测",
            "可能",
            "模型"
          ]
        }
      ],
      "watchLink": "https://www.bilibili.com/video/BV1Mx411R7oQ/?p=1",
      "watchLabel": "B 站直达",
      "watchNote": "自用：BBC The Code 全 3 集分P。工具上线前须补 official，否则标「片源暂缺」。",
      "official": []
    },
    {
      "id": "econmachine",
      "heroArt": "./covers/hero/econmachine.jpg",
      "title": "经济机器是怎样运行的",
      "category": "finance",
      "slot": "A",
      "role": "main",
      "duration": "约 30 分钟 × 1",
      "episodeHint": "可工作日看完",
      "muscle": "商业",
      "blurb": "桥水基金用动画讲清：交易、借贷、周期。30 分钟建立「钱怎么流动」的骨架。",
      "link": "https://www.bilibili.com/video/BV1jsoMBtEWA/",
      "linkLabel": "B 站直达",
      "play": "ok",
      "shareable": false,
      "playNote": "尚无正版备份 · 自用 watchLink；工具上线前须补或下架",
      "mapPin": "交易 · 信贷 · 周期",
      "altLink": "https://www.youtube.com/watch?v=rFV7wdEX-Mo",
      "altLabel": "YouTube（备）",
      "watchLink": "https://www.bilibili.com/video/BV1jsoMBtEWA/",
      "watchLabel": "B 站直达",
      "watchNote": "自用：约 30 分钟完整投稿（播放量靠前）；有字幕。工具上线前须补 official，否则标「片源暂缺」。",
      "official": []
    },
    {
      "id": "ccecon",
      "heroArt": "./covers/hero/ccecon.jpg",
      "title": "Crash Course 经济学（精选）",
      "category": "finance",
      "slot": "A",
      "role": "main",
      "duration": "约 5 分钟 × 3 集",
      "episodeHint": "工作日 1 集 · 英语原声，网易有中字",
      "muscle": "商业",
      "blurb": "只收三集：为什么不能拿东西换东西、价钱为什么不只看成本、为什么梵高比海报贵。",
      "link": "https://www.163.com/opencourse/detail/video-FHJP2BSM7-WHJP2C14F",
      "linkLabel": "网易公开课",
      "play": "ok",
      "shareable": false,
      "playNote": "正版备份 1 条 · 自用走 watchLink；工具前可再补 1 条",
      "mapPin": "货币 · 供需 · 稀缺",
      "episodes": [
        {
          "id": "ccecon-11",
          "n": 1,
          "title": "为什么要用货币",
          "blurb": "原第11集上半。牙医想买车，却找不到正好想换牙的工人：物物交换要碰巧。下半段在同一播放列表。",
          "duration": "约 5 分钟",
          "link": "https://www.163.com/opencourse/detail/video-FHJP2BSM7-WHJP2C14F",
          "hints": [
            "物物交换",
            "货币",
            "标价"
          ]
        },
        {
          "id": "ccecon-4",
          "n": 2,
          "title": "供给与需求",
          "blurb": "原第4集上半。草莓贵不贵，不单看种出来花了多少，还看多少人想买、有多少可卖。下半段在同一播放列表。",
          "duration": "约 5 分钟",
          "link": "https://www.163.com/opencourse/detail/video-FHJP2BSM7-PHJP2BV37",
          "hints": [
            "想买的人",
            "可卖的量",
            "价钱"
          ]
        },
        {
          "id": "ccecon-18",
          "n": 3,
          "title": "梵高为什么更贵",
          "blurb": "原第18集上半。颜料成本差不多，画却可以极贵。梵高那段在播放列表的下半段。",
          "duration": "约 6 分钟",
          "link": "https://www.163.com/opencourse/detail/video-FHJP2BSM7-AIALBAOJN",
          "hints": [
            "稀缺",
            "成本",
            "愿意出的价"
          ]
        }
      ],
      "watchLink": "https://www.163.com/opencourse/detail/video-FHJP2BSM7-WHJP2C14F",
      "watchLabel": "网易公开课",
      "watchNote": "自用现开此链（网易公开课《10分钟速成课：经济学》。每集被切成上下两段，约 5 分钟；点开后在播放列表里接着看下半段。全系列 35 集，护照只收这三集。）。工具模式改走 official。",
      "official": [
        {
          "kind": "netease",
          "url": "https://www.163.com/opencourse/detail/video-FHJP2BSM7-WHJP2C14F",
          "label": "网易公开课"
        }
      ]
    },
    {
      "id": "money",
      "heroArt": "./covers/hero/money.jpg",
      "title": "货币",
      "category": "finance",
      "slot": "B",
      "role": "side",
      "duration": "约 45 分钟 × 10 集",
      "episodeHint": "周末先看第2集《从哪里来》",
      "muscle": "商业",
      "blurb": "央视十集：钱从贸易工具变成大家认的凭证。先看第2集，后面几集再决定。",
      "link": "https://www.docuchina.cn/2013/08/19/VIDA1376894286831456.shtml",
      "linkLabel": "中国纪录片网",
      "play": "stable",
      "shareable": true,
      "playNote": "正版备份 1 条 · 自用走 watchLink；工具前可再补 1 条",
      "mapPin": "货币从哪来",
      "parentNote": "第5集起讲发钞、通胀和国际货币，建议家长陪看第2集再决定要不要往下看",
      "episodes": [
        {
          "id": "money-1",
          "n": 1,
          "title": "有价星球",
          "blurb": "钱今天能买到什么：劳动、风险，甚至还没发生的事。",
          "duration": "约 45 分钟",
          "link": "https://www.docuchina.cn/2013/08/16/VIDE1379316165548243.shtml",
          "hints": [
            "钱能买什么"
          ]
        },
        {
          "id": "money-2",
          "n": 2,
          "title": "从哪里来",
          "blurb": "先看这一集。货币怎样从换东西的工具，变成可以存、可以周转的资本。",
          "duration": "约 45 分钟",
          "link": "https://www.docuchina.cn/2013/08/16/VIDE1379316169548349.shtml",
          "hints": [
            "起源",
            "交换",
            "资本"
          ]
        },
        {
          "id": "money-3",
          "n": 3,
          "title": "黄金命运",
          "blurb": "黄金为什么曾经就是钱，后来又不再是。",
          "duration": "约 45 分钟",
          "link": "https://www.docuchina.cn/2013/08/16/VIDE1379316158512150.shtml",
          "hints": [
            "黄金"
          ]
        },
        {
          "id": "money-4",
          "n": 4,
          "title": "银行历程",
          "blurb": "钱怎样从柜子进了银行。",
          "duration": "约 45 分钟",
          "link": "https://www.docuchina.cn/2013/08/16/VIDE1379316164948233.shtml",
          "hints": [
            "银行"
          ]
        },
        {
          "id": "money-5",
          "n": 5,
          "title": "权力之争",
          "blurb": "谁有权印钱：发行权怎样变化。",
          "duration": "约 45 分钟",
          "link": "https://www.docuchina.cn/2013/08/16/VIDE1379316163718213.shtml",
          "hints": [
            "发行"
          ]
        },
        {
          "id": "money-6",
          "n": 6,
          "title": "通胀之殇",
          "blurb": "钱变多了，东西为什么更贵。",
          "duration": "约 45 分钟",
          "link": "https://www.docuchina.cn/2013/08/16/VIDE1379316168977338.shtml",
          "hints": [
            "通胀"
          ]
        },
        {
          "id": "money-7",
          "n": 7,
          "title": "三条红线",
          "blurb": "税收、国债、印钞，这三样权力不能越过的线。",
          "duration": "约 45 分钟",
          "link": "https://www.docuchina.cn/2013/08/16/VIDE1379316166719262.shtml",
          "hints": [
            "政府"
          ]
        },
        {
          "id": "money-8",
          "n": 8,
          "title": "汇率之路",
          "blurb": "不同国家的钱怎样互相标价。",
          "duration": "约 45 分钟",
          "link": "https://www.docuchina.cn/2013/08/16/VIDE1379316160330193.shtml",
          "hints": [
            "汇率"
          ]
        },
        {
          "id": "money-9",
          "n": 9,
          "title": "超越国界",
          "blurb": "哪国的钱会变成大家用来算账的钱。",
          "duration": "约 45 分钟",
          "link": "https://www.docuchina.cn/2013/08/16/VIDE1379316168363328.shtml",
          "hints": [
            "跨国"
          ]
        },
        {
          "id": "money-10",
          "n": 10,
          "title": "未来多远",
          "blurb": "欧元和货币以后可能怎样。",
          "duration": "约 45 分钟",
          "link": "https://www.docuchina.cn/2013/08/16/VIDE1379316164339223.shtml",
          "hints": [
            "欧元"
          ]
        }
      ],
      "watchLink": "https://www.docuchina.cn/2013/08/19/VIDA1376894286831456.shtml",
      "watchLabel": "中国纪录片网",
      "watchNote": "自用现开此链（央视《货币》正片，中国纪录片网分集页。）。工具模式改走 official。",
      "official": [
        {
          "kind": "cctv",
          "url": "https://www.docuchina.cn/2013/08/19/VIDA1376894286831456.shtml",
          "label": "央视 / 纪录片网"
        }
      ]
    },
    {
      "id": "clarksonfarm",
      "heroArt": "./covers/hero/clarksonfarm.jpg",
      "title": "克拉克森的农场（第一季）",
      "category": "finance",
      "slot": "B",
      "role": "side",
      "duration": "约 40–50 分钟 × 8 集",
      "episodeHint": "家长陪同 · 周末 1 集",
      "muscle": "商业",
      "blurb": "主持人真去养羊种地：成本、天气、失败与利润。笑点多，可聊「风险和账」。",
      "link": "https://www.bilibili.com/video/BV1rvj66bEwh/?p=1",
      "linkLabel": "B 站直达",
      "play": "ok",
      "shareable": false,
      "playNote": "尚无正版备份 · 自用 watchLink；工具上线前须补或下架",
      "mapPin": "农业 · 成本",
      "parentNote": "含成人幽默与少量粗口；请家长陪看并跳过不适段落",
      "episodes": [
        {
          "id": "clarksonfarm-1",
          "n": 1,
          "title": "开拖拉机",
          "blurb": "新手农场主上路：设备贵不贵、会不会搞砸。",
          "duration": "约 45 分钟",
          "link": "https://www.bilibili.com/video/BV1rvj66bEwh/?p=1",
          "hints": [
            "成本",
            "设备"
          ]
        },
        {
          "id": "clarksonfarm-2",
          "n": 2,
          "title": "养羊",
          "blurb": "羊不会听话：活物生意的麻烦。",
          "duration": "约 45 分钟",
          "link": "https://www.bilibili.com/video/BV1rvj66bEwh/?p=2",
          "hints": [
            "牲畜",
            "麻烦"
          ]
        },
        {
          "id": "clarksonfarm-3",
          "n": 3,
          "title": "种地",
          "blurb": "播种与天气：计划常常跟不上变化。",
          "duration": "约 45 分钟",
          "link": "https://www.bilibili.com/video/BV1rvj66bEwh/?p=3",
          "hints": [
            "天气",
            "计划"
          ]
        },
        {
          "id": "clarksonfarm-4",
          "n": 4,
          "title": "求教",
          "blurb": "不会就问：专家、邻居与学费。",
          "duration": "约 45 分钟",
          "link": "https://www.bilibili.com/video/BV1rvj66bEwh/?p=4",
          "hints": [
            "学习",
            "求助"
          ]
        },
        {
          "id": "clarksonfarm-5",
          "n": 5,
          "title": "化冻与危机",
          "blurb": "意外来了：损失怎样算进账本。",
          "duration": "约 45 分钟",
          "link": "https://www.bilibili.com/video/BV1rvj66bEwh/?p=5",
          "hints": [
            "风险",
            "损失"
          ]
        },
        {
          "id": "clarksonfarm-6",
          "n": 6,
          "title": "翻地",
          "blurb": "继续干活：坚持和调整哪个更重要。",
          "duration": "约 45 分钟",
          "link": "https://www.bilibili.com/video/BV1rvj66bEwh/?p=6",
          "hints": [
            "坚持",
            "调整"
          ]
        }
      ],
      "watchLink": "https://www.bilibili.com/video/BV1rvj66bEwh/?p=1",
      "watchLabel": "B 站直达",
      "watchNote": "自用：第一季 8 集分P（未删减投稿）；清晰度看版本。工具上线前须补 official，否则标「片源暂缺」。",
      "official": []
    },
    {
      "id": "surveil",
      "heroArt": "./covers/hero/surveil.jpg",
      "title": "监视资本主义：智能陷阱",
      "category": "drive",
      "slot": "B",
      "role": "side",
      "duration": "约 90 分钟",
      "episodeHint": "家长陪看 · 可拆两晚",
      "muscle": "选择",
      "blurb": "为什么总想刷手机？平台怎样用注意力赚钱。须家长在场，一起讨论「谁在用我的时间」。",
      "link": "https://www.bilibili.com/video/BV1jG411D7U5/",
      "linkLabel": "B 站直达",
      "play": "ok",
      "shareable": false,
      "playNote": "尚无正版备份 · 自用 watchLink；工具上线前须补或下架",
      "mapPin": "注意力 · 选择",
      "parentNote": "题材偏成人（成瘾、数据、操控），必须家长陪看，不适合孩子单独打开",
      "watchLink": "https://www.bilibili.com/video/BV1jG411D7U5/",
      "watchLabel": "B 站直达",
      "watchNote": "自用：即 The Social Dilemma；国语中配投稿，约 90 分钟。工具上线前须补 official，否则标「片源暂缺」。",
      "official": []
    },
    {
      "id": "logicjoy",
      "heroArt": "./covers/hero/logicjoy.jpg",
      "title": "逻辑的乐趣",
      "category": "nature",
      "slot": "B",
      "role": "side",
      "duration": "约 60 分钟",
      "episodeHint": "可拆两晚",
      "muscle": "数理",
      "blurb": "逻辑从哪里来、电脑为什么懂「是/否」。趣味讲解，帮孩子建立清晰思考。",
      "link": "https://www.bilibili.com/video/BV18y4y197xY/",
      "linkLabel": "B 站直达",
      "play": "ok",
      "shareable": false,
      "playNote": "尚无正版备份 · 自用 watchLink；工具上线前须补或下架",
      "mapPin": "逻辑是什么",
      "watchLink": "https://www.bilibili.com/video/BV18y4y197xY/",
      "watchLabel": "B 站直达",
      "watchNote": "自用：约 49 分钟完整投稿；清晰度看版本。工具上线前须补 official，否则标「片源暂缺」。",
      "official": []
    },
    {
      "id": "newtoncoach",
      "heroArt": "./covers/hero/newtoncoach.jpg",
      "title": "我的牛顿教练",
      "category": "nature",
      "slot": "A",
      "role": "side",
      "duration": "约 25 分钟 × 6 集",
      "episodeHint": "工作日或周末 1 集",
      "muscle": "数理",
      "blurb": "动画讲物理直觉：空气、速度、旋转与力。运动物理的入口。",
      "link": "https://tv.cctv.com/2018/06/26/VIDECsJMIfpvWVBBkY90G5gC180626.shtml",
      "linkLabel": "央视网",
      "play": "stable",
      "shareable": true,
      "playNote": "正版备份 1 条 · 自用走 watchLink；工具前可再补 1 条",
      "mapPin": "运动 · 物理直觉",
      "altLink": "https://www.bilibili.com/video/BV18S421X789/",
      "altLabel": "B 站合集（备）",
      "episodes": [
        {
          "id": "newtoncoach-1",
          "n": 1,
          "title": "万能的空气",
          "blurb": "看不见的空气也能推、挡、托。",
          "duration": "约 25 分钟",
          "link": "https://tv.cctv.com/2018/06/26/VIDECsJMIfpvWVBBkY90G5gC180626.shtml",
          "hints": [
            "空气",
            "力"
          ]
        },
        {
          "id": "newtoncoach-2",
          "n": 2,
          "title": "极速前进（上）",
          "blurb": "速度从哪来：跑得快要什么条件。",
          "duration": "约 25 分钟",
          "link": "https://tv.cctv.com/2018/06/27/VIDEpYx3gQWZ1caQP0SZ8VSA180627.shtml",
          "hints": [
            "速度",
            "运动"
          ]
        },
        {
          "id": "newtoncoach-3",
          "n": 3,
          "title": "极速前进（下）",
          "blurb": "继续拆速度：阻力与加速。",
          "duration": "约 25 分钟",
          "link": "https://tv.cctv.com/2018/06/28/VIDEdSnOv2YzlFCs9e43Vqlo180628.shtml",
          "hints": [
            "阻力",
            "加速"
          ]
        },
        {
          "id": "newtoncoach-4",
          "n": 4,
          "title": "让我们转起来",
          "blurb": "旋转的世界：陀螺、转弯与离心。",
          "duration": "约 25 分钟",
          "link": "https://tv.cctv.com/2018/06/29/VIDEPJqRww1Ao9roF4jg055H180629.shtml",
          "hints": [
            "旋转",
            "离心"
          ]
        },
        {
          "id": "newtoncoach-5",
          "n": 5,
          "title": "赐予我力量吧",
          "blurb": "力是什么：推、拉、举怎样改变运动。",
          "duration": "约 25 分钟",
          "link": "https://tv.cctv.com/2018/06/30/VIDEcfUVa9xxvTZJsVQGZslm180630.shtml",
          "hints": [
            "力",
            "推拉"
          ]
        },
        {
          "id": "newtoncoach-6",
          "n": 6,
          "title": "瞄准的门道",
          "blurb": "抛物线与瞄准：投掷里的物理。",
          "duration": "约 25 分钟",
          "link": "https://tv.cctv.com/2018/07/01/VIDEQa3dfmiugpeDF2dxwkVZ180701.shtml",
          "hints": [
            "抛物线",
            "瞄准"
          ]
        }
      ],
      "watchLink": "https://tv.cctv.com/2018/06/26/VIDECsJMIfpvWVBBkY90G5gC180626.shtml",
      "watchLabel": "央视网",
      "watchNote": "自用现开此链（央视网正片 6 集；手机建议央视影音 App）。工具模式改走 official。",
      "official": [
        {
          "kind": "cctv",
          "url": "https://tv.cctv.com/2018/06/26/VIDECsJMIfpvWVBBkY90G5gC180626.shtml",
          "label": "央视 / 纪录片网"
        }
      ]
    },
    {
      "id": "mathstory",
      "heroArt": "./covers/hero/mathstory.jpg",
      "title": "数学的故事（第1–2集）",
      "category": "nature",
      "slot": "B",
      "role": "side",
      "duration": "约 60 分钟 × 4（先看前 2）",
      "episodeHint": "宇宙的语言 · 东方奇才",
      "muscle": "数理",
      "blurb": "数学从埃及、巴比伦走到东方：数字与几何怎么变成今天的工具。先看前两集。",
      "link": "https://www.bilibili.com/video/BV1DZ421H7it/",
      "linkLabel": "B 站直达",
      "play": "ok",
      "shareable": false,
      "playNote": "尚无正版备份 · 自用 watchLink；工具上线前须补或下架",
      "mapPin": "数学史入口",
      "altLink": "https://www.bilibili.com/video/BV1oa411E7wd/",
      "altLabel": "第2集入口",
      "watchLink": "https://www.bilibili.com/video/BV1DZ421H7it/",
      "watchLabel": "B 站直达",
      "watchNote": "自用：第1集《宇宙的语言》直链；第2集可另找东方数学篇。工具上线前须补 official，否则标「片源暂缺」。",
      "official": []
    },
    {
      "id": "englishadv",
      "heroArt": "./covers/hero/englishadv.jpg",
      "title": "英语发展史",
      "category": "human",
      "slot": "B",
      "role": "side",
      "duration": "约 50 分钟 × 8 集",
      "episodeHint": "周末 1 集 · 可先听第1集",
      "muscle": "叙事",
      "blurb": "英语从日耳曼方言走到全球：词从哪来、为什么今天长这样。可当故事听，不必一次听懂所有词。",
      "link": "https://www.bilibili.com/video/BV1vs41117JH/?p=1",
      "linkLabel": "B 站直达",
      "play": "ok",
      "shareable": false,
      "playNote": "尚无正版备份 · 自用 watchLink；工具上线前须补或下架",
      "mapPin": "语言从哪来",
      "parentNote": "节奏偏成人，建议陪看第1集再决定",
      "episodes": [
        {
          "id": "englishadv-1",
          "n": 1,
          "title": "语言的诞生",
          "blurb": "英语从哪冒出来：部落、入侵、混出来的话。",
          "duration": "约 50 分钟",
          "link": "https://www.bilibili.com/video/BV1vs41117JH/?p=1",
          "hints": [
            "起源",
            "混合",
            "词"
          ]
        },
        {
          "id": "englishadv-2",
          "n": 2,
          "title": "英语转入地下",
          "blurb": "诺曼征服后：英语怎样「躲」过贵族法语。",
          "duration": "约 50 分钟",
          "link": "https://www.bilibili.com/video/BV1vs41117JH/?p=2",
          "hints": [
            "征服",
            "法语",
            "地下"
          ]
        },
        {
          "id": "englishadv-3",
          "n": 3,
          "title": "圣经语言之争",
          "blurb": "把圣经译成英语：谁有权读、用哪种词。",
          "duration": "约 50 分钟",
          "link": "https://www.bilibili.com/video/BV1vs41117JH/?p=3",
          "hints": [
            "翻译",
            "圣经",
            "权利"
          ]
        },
        {
          "id": "englishadv-4",
          "n": 4,
          "title": "地球，大洲，英格兰",
          "blurb": "莎士比亚前后：英语开始「长成」文学语言。",
          "duration": "约 50 分钟",
          "link": "https://www.bilibili.com/video/BV1vs41117JH/?p=4",
          "hints": [
            "莎士比亚",
            "文学"
          ]
        },
        {
          "id": "englishadv-5",
          "n": 5,
          "title": "英语在美国",
          "blurb": "漂过大洋：美国英语怎样走出自己的路。",
          "duration": "约 50 分钟",
          "link": "https://www.bilibili.com/video/BV1vs41117JH/?p=5",
          "hints": [
            "美国",
            "口音",
            "新词"
          ]
        },
        {
          "id": "englishadv-6",
          "n": 6,
          "title": "流利口语",
          "blurb": "「说得体面」：口音、阶层和学校。",
          "duration": "约 50 分钟",
          "link": "https://www.bilibili.com/video/BV1vs41117JH/?p=6",
          "hints": [
            "口音",
            "阶层"
          ]
        },
        {
          "id": "englishadv-7",
          "n": 7,
          "title": "帝国的语言",
          "blurb": "英语跟着船队走遍世界：贸易、殖民与传播。",
          "duration": "约 50 分钟",
          "link": "https://www.bilibili.com/video/BV1vs41117JH/?p=7",
          "hints": [
            "传播",
            "贸易",
            "世界"
          ]
        },
        {
          "id": "englishadv-8",
          "n": 8,
          "title": "许多种英语",
          "blurb": "今天的英语：很多口音、很多地方话，仍叫 English。",
          "duration": "约 50 分钟",
          "link": "https://www.bilibili.com/video/BV1vs41117JH/?p=8",
          "hints": [
            "多样",
            "全球",
            "口音"
          ]
        }
      ],
      "watchLink": "https://www.bilibili.com/video/BV1vs41117JH/?p=1",
      "watchLabel": "B 站直达",
      "watchNote": "自用：ITV The Adventure of English 8 集分P；中字。信息密，可只追感兴趣的集。工具上线前须补 official，否则标「片源暂缺」。",
      "official": []
    },
    {
      "id": "mademenspend",
      "heroArt": "./covers/hero/mademenspend.jpg",
      "title": "无节制消费的元凶",
      "category": "finance",
      "slot": "B",
      "role": "side",
      "duration": "约 50 分钟 × 3 集",
      "episodeHint": "家长陪看 · 周末 1 集",
      "muscle": "商业",
      "blurb": "东西为什么越来越不耐用？广告怎样用恐惧和「给孩子」让人掏钱。看清消费机器怎么转。",
      "link": "https://v.qq.com/x/cover/n4fu3ishf0tpnq1.html",
      "linkLabel": "腾讯视频正版",
      "play": "stable",
      "shareable": true,
      "playNote": "正版备份 1 条 · 自用走 watchLink；工具前可再补 1 条",
      "mapPin": "易耗 · 恐惧营销 · 儿童市场",
      "parentNote": "成人纪实；第3集「转战儿童市场」务必陪看讨论",
      "episodes": [
        {
          "id": "mademenspend-1",
          "n": 1,
          "title": "故意制成易耗品",
          "blurb": "为什么东西故意不耐用：计划报废怎样逼你再买。",
          "duration": "约 50 分钟",
          "link": "https://v.qq.com/x/cover/n4fu3ishf0tpnq1/r00207nmb37.html",
          "hints": [
            "易耗",
            "升级",
            "再买"
          ]
        },
        {
          "id": "mademenspend-2",
          "n": 2,
          "title": "利用消费者的恐惧营销",
          "blurb": "害怕什么就买什么：恐惧怎样变成生意。",
          "duration": "约 50 分钟",
          "link": "https://v.qq.com/x/cover/n4fu3ishf0tpnq1.html",
          "hints": [
            "恐惧",
            "广告",
            "安全感"
          ]
        },
        {
          "id": "mademenspend-3",
          "n": 3,
          "title": "转战儿童市场",
          "blurb": "先卖给孩子：玩具、卡通怎样训练「想要」。",
          "duration": "约 50 分钟",
          "link": "https://v.qq.com/x/cover/n4fu3ishf0tpnq1.html",
          "hints": [
            "儿童",
            "营销",
            "想要"
          ]
        }
      ],
      "watchLink": "https://v.qq.com/x/cover/n4fu3ishf0tpnq1.html",
      "watchLabel": "腾讯视频正版",
      "watchNote": "自用现开此链（腾讯视频正版 3 集；部分集需 VIP）。工具模式改走 official。",
      "official": [
        {
          "kind": "tencent",
          "url": "https://v.qq.com/x/cover/n4fu3ishf0tpnq1.html",
          "label": "腾讯视频正版"
        }
      ]
    },
    {
      "id": "flavorworld",
      "heroArt": "./covers/hero/flavorworld.jpg",
      "title": "风味人间（第一季）",
      "category": "human",
      "slot": "B",
      "role": "side",
      "duration": "约 50 分钟 × 8 集",
      "episodeHint": "周末 1 集",
      "muscle": "审美",
      "blurb": "山海之间的味道：小麦、香料、江湖夜雨。地理与人情都藏在一口热菜里。",
      "link": "https://v.qq.com/x/cover/jx7g4sm320sqm7i.html",
      "linkLabel": "腾讯视频正版",
      "play": "stable",
      "shareable": true,
      "playNote": "正版备份 1 条 · 自用走 watchLink；工具前可再补 1 条",
      "mapPin": "山海 · 风味",
      "episodes": [
        {
          "id": "flavorworld-1",
          "n": 1,
          "title": "山海之间",
          "blurb": "从山到海：味道怎样跟着地理走。",
          "duration": "约 50 分钟",
          "link": "https://v.qq.com/x/cover/jx7g4sm320sqm7i.html",
          "hints": [
            "地理",
            "食材"
          ]
        },
        {
          "id": "flavorworld-2",
          "n": 2,
          "title": "落地生根",
          "blurb": "作物迁徙：一种食材怎样在别处安家。",
          "duration": "约 50 分钟",
          "link": "https://v.qq.com/x/cover/jx7g4sm320sqm7i.html",
          "hints": [
            "迁徙",
            "作物"
          ]
        },
        {
          "id": "flavorworld-3",
          "n": 3,
          "title": "滚滚红尘",
          "blurb": "市井烟火：日常一餐里的人间。",
          "duration": "约 50 分钟",
          "link": "https://v.qq.com/x/cover/jx7g4sm320sqm7i.html",
          "hints": [
            "市井",
            "烟火"
          ]
        },
        {
          "id": "flavorworld-4",
          "n": 4,
          "title": "肴变万千",
          "blurb": "同一种料，怎么变成千万种菜。",
          "duration": "约 50 分钟",
          "link": "https://v.qq.com/x/cover/jx7g4sm320sqm7i.html",
          "hints": [
            "变化",
            "厨艺"
          ]
        },
        {
          "id": "flavorworld-5",
          "n": 5,
          "title": "江湖夜雨",
          "blurb": "夜与雨：更软、更鲜的那一口。",
          "duration": "约 50 分钟",
          "link": "https://v.qq.com/x/cover/jx7g4sm320sqm7i.html",
          "hints": [
            "夜",
            "鲜"
          ]
        },
        {
          "id": "flavorworld-6",
          "n": 6,
          "title": "香料歧路",
          "blurb": "香料怎样改写一道菜的命运。",
          "duration": "约 50 分钟",
          "link": "https://v.qq.com/x/cover/jx7g4sm320sqm7i.html",
          "hints": [
            "香料",
            "味"
          ]
        },
        {
          "id": "flavorworld-7",
          "n": 7,
          "title": "万家灯火",
          "blurb": "灯火下的家常：团聚的味道。",
          "duration": "约 50 分钟",
          "link": "https://v.qq.com/x/cover/jx7g4sm320sqm7i.html",
          "hints": [
            "家常",
            "团聚"
          ]
        },
        {
          "id": "flavorworld-8",
          "n": 8,
          "title": "风味之旅",
          "blurb": "收束一季：风味还在路上。",
          "duration": "约 50 分钟",
          "link": "https://v.qq.com/x/cover/jx7g4sm320sqm7i.html",
          "hints": [
            "旅程",
            "风味"
          ]
        }
      ],
      "watchLink": "https://v.qq.com/x/cover/jx7g4sm320sqm7i.html",
      "watchLabel": "腾讯视频正版",
      "watchNote": "自用现开此链（腾讯视频正版第一季 8 集；多数集需 VIP）。工具模式改走 official。",
      "official": [
        {
          "kind": "tencent",
          "url": "https://v.qq.com/x/cover/jx7g4sm320sqm7i.html",
          "label": "腾讯视频正版"
        }
      ]
    },
    {
      "id": "sudongpo",
      "heroArt": "./covers/hero/sudongpo.jpg",
      "title": "苏东坡",
      "category": "human",
      "slot": "B",
      "role": "side",
      "duration": "约 30 分钟 × 6 集",
      "episodeHint": "周末 1–2 集",
      "muscle": "叙事",
      "blurb": "从苏轼到苏东坡：黄州四年，诗文书画与一碗东坡肉。看一个人怎样把苦日子过成风流。",
      "link": "https://www.iqiyi.com/a_1pa4vhct4vt.html",
      "linkLabel": "爱奇艺正版",
      "play": "stable",
      "shareable": true,
      "playNote": "正版备份 1 条 · 自用走 watchLink；工具前可再补 1 条",
      "mapPin": "黄州 · 一词二赋",
      "parentNote": "含乌台诗案、贬谪；可陪看前两集建立故事感",
      "episodes": [
        {
          "id": "sudongpo-1",
          "n": 1,
          "title": "雪泥鸿爪",
          "blurb": "成名到入狱：人生怎么一下子拐弯。",
          "duration": "约 30 分钟",
          "link": "https://www.iqiyi.com/v_1jygjko81xk.html",
          "hints": [
            "转折",
            "乌台"
          ]
        },
        {
          "id": "sudongpo-2",
          "n": 2,
          "title": "一蓑烟雨",
          "blurb": "黄州苦日子：怎样把自己活成「东坡」。",
          "duration": "约 30 分钟",
          "link": "https://www.iqiyi.com/a_1pa4vhct4vt.html",
          "hints": [
            "黄州",
            "超越"
          ]
        },
        {
          "id": "sudongpo-3",
          "n": 3,
          "title": "大江东去",
          "blurb": "赤壁一词二赋：文学高峰从哪来。",
          "duration": "约 30 分钟",
          "link": "https://www.iqiyi.com/a_1pa4vhct4vt.html",
          "hints": [
            "赤壁",
            "文学"
          ]
        },
        {
          "id": "sudongpo-4",
          "n": 4,
          "title": "成竹在胸",
          "blurb": "书画里的东坡：笔墨怎样安放心情。",
          "duration": "约 30 分钟",
          "link": "https://www.iqiyi.com/a_1pa4vhct4vt.html",
          "hints": [
            "书画",
            "审美"
          ]
        },
        {
          "id": "sudongpo-5",
          "n": 5,
          "title": "千古遗爱",
          "blurb": "为官与爱民：他留下了什么。",
          "duration": "约 30 分钟",
          "link": "https://www.iqiyi.com/a_1pa4vhct4vt.html",
          "hints": [
            "为政",
            "民"
          ]
        },
        {
          "id": "sudongpo-6",
          "n": 6,
          "title": "南渡北归",
          "blurb": "晚年漂泊：乐观怎样扛过最后一程。",
          "duration": "约 30 分钟",
          "link": "https://www.iqiyi.com/a_1pa4vhct4vt.html",
          "hints": [
            "晚年",
            "乐观"
          ]
        }
      ],
      "watchLink": "https://www.iqiyi.com/a_1pa4vhct4vt.html",
      "watchLabel": "爱奇艺正版",
      "watchNote": "自用现开此链（爱奇艺正版 6 集；多数需会员）。工具模式改走 official。",
      "official": [
        {
          "kind": "iqiyi",
          "url": "https://www.iqiyi.com/a_1pa4vhct4vt.html",
          "label": "爱奇艺正版"
        }
      ]
    },
    {
      "id": "qianxuesen",
      "heroArt": "./covers/hero/qianxuesen.jpg",
      "title": "钱学森",
      "category": "drive",
      "slot": "B",
      "role": "side",
      "duration": "约 45–50 分钟 × 6 集",
      "episodeHint": "周末 1 集 · 家长陪看",
      "muscle": "意志",
      "blurb": "从交大少年到航天：求学、回国、两弹一星。志向怎样变成国家工程里的解题。",
      "link": "https://tv.cctv.com/2010/10/26/VIDE1355596422060989.shtml",
      "linkLabel": "央视网",
      "play": "stable",
      "shareable": true,
      "playNote": "正版备份已满 2 条 · 自用走 watchLink",
      "mapPin": "求学 · 回国 · 航天",
      "altLink": "http://tv.cctv.com/2012/12/15/VIDA1355584762300647.shtml",
      "altLabel": "央视 / 纪录片网",
      "parentNote": "人物传记偏长，可先看第1集建立兴趣",
      "episodes": [
        {
          "id": "qianxuesen-1",
          "n": 1,
          "title": "第一集",
          "blurb": "童年与求学：交大、赴美，志向怎样立下。",
          "duration": "约 50 分钟",
          "link": "https://tv.cctv.com/2010/10/26/VIDE1355596422060989.shtml",
          "hints": [
            "求学",
            "志向"
          ]
        },
        {
          "id": "qianxuesen-2",
          "n": 2,
          "title": "第二集",
          "blurb": "美国岁月：航空理论与回国之路。",
          "duration": "约 50 分钟",
          "link": "http://tv.cctv.com/2012/12/15/VIDA1355584762300647.shtml",
          "hints": [
            "留学",
            "回国"
          ]
        },
        {
          "id": "qianxuesen-3",
          "n": 3,
          "title": "第三集",
          "blurb": "投身国防：导弹与航天怎样起步。",
          "duration": "约 50 分钟",
          "link": "http://tv.cctv.com/2012/12/15/VIDA1355584762300647.shtml",
          "hints": [
            "导弹",
            "起步"
          ]
        },
        {
          "id": "qianxuesen-4",
          "n": 4,
          "title": "第四集",
          "blurb": "工程与组织：大科学怎样做成。",
          "duration": "约 50 分钟",
          "link": "http://tv.cctv.com/2012/12/15/VIDA1355584762300647.shtml",
          "hints": [
            "工程",
            "组织"
          ]
        },
        {
          "id": "qianxuesen-5",
          "n": 5,
          "title": "第五集",
          "blurb": "两弹一星年代：压力与突破。",
          "duration": "约 50 分钟",
          "link": "http://tv.cctv.com/2012/12/15/VIDA1355584762300647.shtml",
          "hints": [
            "突破",
            "年代"
          ]
        },
        {
          "id": "qianxuesen-6",
          "n": 6,
          "title": "第六集",
          "blurb": "晚年与遗产：科学精神留下什么。",
          "duration": "约 50 分钟",
          "link": "http://tv.cctv.com/2012/12/15/VIDA1355584762300647.shtml",
          "hints": [
            "遗产",
            "精神"
          ]
        }
      ],
      "watchLink": "https://tv.cctv.com/2010/10/26/VIDE1355596422060989.shtml",
      "watchLabel": "央视网",
      "watchNote": "自用现开此链（央视网《钱学森》6 集；手机建议央视影音 App）。工具模式改走 official。",
      "official": [
        {
          "kind": "cctv",
          "url": "https://tv.cctv.com/2010/10/26/VIDE1355596422060989.shtml",
          "label": "央视 / 纪录片网"
        },
        {
          "kind": "cctv",
          "url": "http://tv.cctv.com/2012/12/15/VIDA1355584762300647.shtml",
          "label": "央视 / 纪录片网"
        }
      ]
    },
    {
      "id": "sleepten",
      "heroArt": "./covers/hero/sleepten.jpg",
      "title": "睡眠十律",
      "category": "nature",
      "slot": "A",
      "role": "side",
      "duration": "约 50–60 分钟 × 1",
      "episodeHint": "可拆两晚 · 自家先看",
      "muscle": "生物",
      "blurb": "为什么睡不着？热水澡、光线、咖啡、打鼾……十个实验讲清睡好觉的科学。",
      "link": "http://www.163.com/opencourse/detail/video-JHKF1S4IB-YHKF1S4QL",
      "linkLabel": "网易公开课",
      "play": "ok",
      "shareable": false,
      "playNote": "正版备份已满 2 条 · 自用走 watchLink",
      "mapPin": "入睡 · 生物钟",
      "altLink": "http://www.iqiyi.com/v_19rrjysjh4.html",
      "altLabel": "爱奇艺正版",
      "parentNote": "正版不稳，不进今日推荐；家长先确认能播再陪看",
      "watchLink": "http://www.163.com/opencourse/detail/video-JHKF1S4IB-YHKF1S4QL",
      "watchLabel": "网易公开课",
      "watchNote": "自用现开此链（仅自家先看：大陆稳定正版页未坐实；可搜「睡眠十律」或网易公开课分段）。工具模式改走 official。",
      "official": [
        {
          "kind": "netease",
          "url": "http://www.163.com/opencourse/detail/video-JHKF1S4IB-YHKF1S4QL",
          "label": "网易公开课"
        },
        {
          "kind": "iqiyi",
          "url": "http://www.iqiyi.com/v_19rrjysjh4.html",
          "label": "爱奇艺正版"
        }
      ]
    },
    {
      "id": "helloai",
      "heroArt": "./covers/hero/helloai.jpg",
      "title": "你好 AI",
      "category": "nature",
      "slot": "B",
      "role": "side",
      "duration": "约 18 分钟 × 5 集",
      "episodeHint": "周末 1–2 集",
      "muscle": "实验",
      "blurb": "AI 怎样帮人：探索火星、修壁画、护东北虎。短集科技人文，看机器怎样当助手。",
      "link": "https://www.bilibili.com/bangumi/media/md28222042",
      "linkLabel": "B 站正版",
      "play": "stable",
      "shareable": true,
      "playNote": "正版备份 1 条 · 自用走 watchLink；工具前可再补 1 条",
      "mapPin": "助手 · 应用",
      "parentNote": "题材友好；可先看《传承》《守护》",
      "episodes": [
        {
          "id": "helloai-1",
          "n": 1,
          "title": "探索",
          "blurb": "太空与机器人：AI 怎样帮人走更远。",
          "duration": "约 18 分钟",
          "link": "https://www.bilibili.com/bangumi/media/md28222042",
          "hints": [
            "太空",
            "机器人"
          ]
        },
        {
          "id": "helloai-2",
          "n": 2,
          "title": "传承",
          "blurb": "壁画与长城：AI 怎样留住文化遗产。",
          "duration": "约 18 分钟",
          "link": "https://www.bilibili.com/bangumi/media/md28222042",
          "hints": [
            "敦煌",
            "保护"
          ]
        },
        {
          "id": "helloai-3",
          "n": 3,
          "title": "记忆",
          "blurb": "濒危语言与文化：怎样被记录下来。",
          "duration": "约 18 分钟",
          "link": "https://www.bilibili.com/bangumi/media/md28222042",
          "hints": [
            "语言",
            "记忆"
          ]
        },
        {
          "id": "helloai-4",
          "n": 4,
          "title": "健康",
          "blurb": "医疗与农业：AI 怎样帮人治病、种地。",
          "duration": "约 18 分钟",
          "link": "https://www.bilibili.com/bangumi/media/md28222042",
          "hints": [
            "医疗",
            "农业"
          ]
        },
        {
          "id": "helloai-5",
          "n": 5,
          "title": "守护",
          "blurb": "东北虎与生态：AI 怎样护野生动物。",
          "duration": "约 18 分钟",
          "link": "https://www.bilibili.com/bangumi/media/md28222042",
          "hints": [
            "生态",
            "保护"
          ]
        }
      ],
      "watchLink": "https://www.bilibili.com/bangumi/media/md28222042",
      "watchLabel": "B 站正版",
      "watchNote": "自用现开此链（B 站正版番剧 5 集；部分集可能需大会员）。工具模式改走 official。",
      "official": [
        {
          "kind": "bilibili",
          "url": "https://www.bilibili.com/bangumi/media/md28222042",
          "label": "B 站正版"
        }
      ]
    },
    {
      "id": "curiosity",
      "heroArt": "./covers/hero/curiosity.jpg",
      "title": "绝对好奇（精选）",
      "category": "nature",
      "slot": "B",
      "role": "side",
      "duration": "约 45 分钟 × 23 集",
      "episodeHint": "周末 1 集 · 看红标再开",
      "muscle": "实验",
      "blurb": "探索频道杂志片：一集一个问题。这里只收科学向；性、毒品、洗脑等未收录。",
      "link": "https://search.bilibili.com/all?keyword=%E7%BB%9D%E5%AF%B9%E5%A5%BD%E5%A5%87%20Curiosity",
      "linkLabel": "B 站搜索",
      "play": "ok",
      "shareable": false,
      "playNote": "尚无正版备份 · 自用 watchLink；工具上线前须补或下架",
      "mapPin": "一问一集",
      "parentNote": "部分集需家长陪看：末日、最脏的人、出生之前、客机坠毁、木乃伊、超级风暴、火山；宇宙起源那集也建议陪看",
      "episodes": [
        {
          "id": "curiosity-s1e1",
          "n": 1,
          "title": "上帝创造了宇宙吗？",
          "blurb": "需家长陪看。霍金谈宇宙起源与「谁创造宇宙」，涉及宗教与科学。",
          "duration": "约 45 分钟",
          "link": "https://search.bilibili.com/all?keyword=%E7%BB%9D%E5%AF%B9%E5%A5%BD%E5%A5%87%20%E4%B8%8A%E5%B8%9D%E5%88%9B%E9%80%A0%E4%BA%86%E5%AE%87%E5%AE%99",
          "hints": [
            "宇宙",
            "家长陪看"
          ]
        },
        {
          "id": "curiosity-s1e2",
          "n": 2,
          "title": "外星人入侵：我们准备好了吗？",
          "blurb": "银河有多少星、电磁脉冲会怎样：偏假想的防御设想。",
          "duration": "约 45 分钟",
          "link": "https://search.bilibili.com/all?keyword=%E7%BB%9D%E5%AF%B9%E5%A5%BD%E5%A5%87%20%E5%A4%96%E6%98%9F%E4%BA%BA",
          "hints": [
            "太空",
            "假想"
          ]
        },
        {
          "id": "curiosity-s1e4",
          "n": 3,
          "title": "泰坦尼克为何沉没？",
          "blurb": "冰山、钢材与沉船：一场工程事故怎么发生。",
          "duration": "约 45 分钟",
          "link": "https://search.bilibili.com/all?keyword=%E7%BB%9D%E5%AF%B9%E5%A5%BD%E5%A5%87%20%E6%B3%B0%E5%9D%A6%E5%B0%BC%E5%85%8B",
          "hints": [
            "沉船",
            "工程"
          ]
        },
        {
          "id": "curiosity-s1e5",
          "n": 4,
          "title": "平行宇宙是真的吗？",
          "blurb": "多重宇宙是否可能：抽象，当「问题从哪来」看。",
          "duration": "约 45 分钟",
          "link": "https://search.bilibili.com/all?keyword=%E7%BB%9D%E5%AF%B9%E5%A5%BD%E5%A5%87%20%E5%B9%B3%E8%A1%8C%E5%AE%87%E5%AE%99",
          "hints": [
            "宇宙",
            "抽象"
          ]
        },
        {
          "id": "curiosity-s1e6",
          "n": 5,
          "title": "美国地下有什么？",
          "blurb": "煤、石油、铁矿从哪来：地质怎样变成资源。",
          "duration": "约 45 分钟",
          "link": "https://search.bilibili.com/all?keyword=%E7%BB%9D%E5%AF%B9%E5%A5%BD%E5%A5%87%20%E7%BE%8E%E5%9B%BD%E5%9C%B0%E4%B8%8B",
          "hints": [
            "地质",
            "矿产"
          ]
        },
        {
          "id": "curiosity-s1e7",
          "n": 6,
          "title": "世界会怎样终结？",
          "blurb": "需家长陪看。小行星、超级火山、海啸等假想灾难，场面可能吓人。",
          "duration": "约 45 分钟",
          "link": "https://search.bilibili.com/all?keyword=%E7%BB%9D%E5%AF%B9%E5%A5%BD%E5%A5%87%20%E4%B8%96%E7%95%8C%E4%BC%9A%E6%80%8E%E6%A0%B7%E7%BB%88%E7%BB%93",
          "hints": [
            "灾难",
            "家长陪看"
          ]
        },
        {
          "id": "curiosity-s1e8",
          "n": 7,
          "title": "亚特兰蒂斯揭秘",
          "blurb": "传说里的沉没大陆：考古怎样检验故事。",
          "duration": "约 45 分钟",
          "link": "https://search.bilibili.com/all?keyword=%E7%BB%9D%E5%AF%B9%E5%A5%BD%E5%A5%87%20%E4%BA%9A%E7%89%B9%E5%85%B0%E8%92%82%E6%96%AF",
          "hints": [
            "考古",
            "传说"
          ]
        },
        {
          "id": "curiosity-s1e9",
          "n": 8,
          "title": "我，穴居人",
          "blurb": "现代人去过石器时代：狩猎失败后再学工具。",
          "duration": "约 45 分钟",
          "link": "https://search.bilibili.com/all?keyword=%E7%BB%9D%E5%AF%B9%E5%A5%BD%E5%A5%87%20%E7%A9%B4%E5%B1%85%E4%BA%BA",
          "hints": [
            "实验",
            "史前"
          ]
        },
        {
          "id": "curiosity-s1e10",
          "n": 9,
          "title": "埃及：地下有什么？",
          "blurb": "金字塔与墓穴：地下还藏着什么。",
          "duration": "约 45 分钟",
          "link": "https://search.bilibili.com/all?keyword=%E7%BB%9D%E5%AF%B9%E5%A5%BD%E5%A5%87%20%E5%9F%83%E5%8F%8A",
          "hints": [
            "考古",
            "埃及"
          ]
        },
        {
          "id": "curiosity-s1e11",
          "n": 10,
          "title": "你能长生不老吗？",
          "blurb": "衰老、再生与「打印器官」：前沿设想，不是处方。",
          "duration": "约 45 分钟",
          "link": "https://search.bilibili.com/all?keyword=%E7%BB%9D%E5%AF%B9%E5%A5%BD%E5%A5%87%20%E9%95%BF%E7%94%9F%E4%B8%8D%E8%80%81",
          "hints": [
            "衰老",
            "科学"
          ]
        },
        {
          "id": "curiosity-s1e12",
          "n": 11,
          "title": "世界上最脏的人",
          "blurb": "需家长陪看。可能恶心：极端不洗澡与细菌实验。",
          "duration": "约 45 分钟",
          "link": "https://search.bilibili.com/all?keyword=%E7%BB%9D%E5%AF%B9%E5%A5%BD%E5%A5%87%20%E6%9C%80%E8%84%8F%E7%9A%84%E4%BA%BA",
          "hints": [
            "卫生",
            "家长陪看"
          ]
        },
        {
          "id": "curiosity-s1e14",
          "n": 12,
          "title": "出生之前",
          "blurb": "需家长陪看。胎儿怎样一点点长成，画面偏医学。",
          "duration": "约 45 分钟",
          "link": "https://search.bilibili.com/all?keyword=%E7%BB%9D%E5%AF%B9%E5%A5%BD%E5%A5%87%20%E5%87%BA%E7%94%9F%E4%B9%8B%E5%89%8D",
          "hints": [
            "发育",
            "家长陪看"
          ]
        },
        {
          "id": "curiosity-s2e1",
          "n": 13,
          "title": "客机坠毁",
          "blurb": "需家长陪看。故意坠毁一架飞机，研究撞击瞬间，场面强。",
          "duration": "约 45 分钟",
          "link": "https://search.bilibili.com/all?keyword=%E7%BB%9D%E5%AF%B9%E5%A5%BD%E5%A5%87%20%E5%AE%A2%E6%9C%BA%E5%9D%A0%E6%AF%81",
          "hints": [
            "实验",
            "家长陪看"
          ]
        },
        {
          "id": "curiosity-s2e2",
          "n": 14,
          "title": "魔鬼三角",
          "blurb": "百慕大：甲烷气泡、巨浪、闪电，用实验检验传说。",
          "duration": "约 45 分钟",
          "link": "https://search.bilibili.com/all?keyword=%E7%BB%9D%E5%AF%B9%E5%A5%BD%E5%A5%87%20%E7%99%BE%E6%85%95%E5%A4%A7",
          "hints": [
            "海洋",
            "实验"
          ]
        },
        {
          "id": "curiosity-s2e3",
          "n": 15,
          "title": "我被做成了木乃伊",
          "blurb": "需家长陪看。可能不适：志愿者身后按古埃及方法处理遗体。",
          "duration": "约 45 分钟",
          "link": "https://search.bilibili.com/all?keyword=%E7%BB%9D%E5%AF%B9%E5%A5%BD%E5%A5%87%20%E6%9C%A8%E4%B9%83%E4%BC%8A",
          "hints": [
            "考古",
            "家长陪看"
          ]
        },
        {
          "id": "curiosity-s2e5",
          "n": 16,
          "title": "细胞战场",
          "blurb": "病毒怎样攻进细胞、身体怎样反击。孩子已看过的那一集。",
          "duration": "约 45 分钟",
          "link": "https://www.bilibili.com/video/BV1n741147oC/",
          "hints": [
            "细胞",
            "病毒",
            "免疫"
          ]
        },
        {
          "id": "curiosity-s2e7",
          "n": 17,
          "title": "超级风暴",
          "blurb": "需家长陪看。超级风暴桑迪：风、水怎样冲击城市。",
          "duration": "约 45 分钟",
          "link": "https://search.bilibili.com/all?keyword=%E7%BB%9D%E5%AF%B9%E5%A5%BD%E5%A5%87%20%E8%B6%85%E7%BA%A7%E9%A3%8E%E6%9A%B4",
          "hints": [
            "风暴",
            "家长陪看"
          ]
        },
        {
          "id": "curiosity-s2e8",
          "n": 18,
          "title": "人类崛起",
          "blurb": "从早期生命到灵长类祖先：演化怎样一步步走过来。",
          "duration": "约 45 分钟",
          "link": "https://search.bilibili.com/all?keyword=%E7%BB%9D%E5%AF%B9%E5%A5%BD%E5%A5%87%20%E4%BA%BA%E7%B1%BB%E5%B4%9B%E8%B5%B7",
          "hints": [
            "演化",
            "生命"
          ]
        },
        {
          "id": "curiosity-s2e9",
          "n": 19,
          "title": "火山定时炸弹",
          "blurb": "需家长陪看。环太平洋火山与黄石：喷发画面可能吓人。",
          "duration": "约 45 分钟",
          "link": "https://search.bilibili.com/all?keyword=%E7%BB%9D%E5%AF%B9%E5%A5%BD%E5%A5%87%20%E7%81%AB%E5%B1%B1",
          "hints": [
            "火山",
            "家长陪看"
          ]
        },
        {
          "id": "curiosity-s2e10",
          "n": 20,
          "title": "兴登堡为何毁灭？",
          "blurb": "飞艇着火：一个还没完全定论的事故。",
          "duration": "约 45 分钟",
          "link": "https://search.bilibili.com/all?keyword=%E7%BB%9D%E5%AF%B9%E5%A5%BD%E5%A5%87%20%E5%85%B4%E7%99%BB%E5%A0%A1",
          "hints": [
            "事故",
            "飞艇"
          ]
        },
        {
          "id": "curiosity-s2e11",
          "n": 21,
          "title": "透视黄石",
          "blurb": "黄石公园地下：间歇泉与超级火山系统。",
          "duration": "约 45 分钟",
          "link": "https://search.bilibili.com/all?keyword=%E7%BB%9D%E5%AF%B9%E5%A5%BD%E5%A5%87%20%E9%BB%84%E7%9F%B3",
          "hints": [
            "地质",
            "黄石"
          ]
        },
        {
          "id": "curiosity-s2e12",
          "n": 22,
          "title": "太阳风暴",
          "blurb": "太阳黑子与日冕抛射：太空天气怎样碰到地球。",
          "duration": "约 45 分钟",
          "link": "https://search.bilibili.com/all?keyword=%E7%BB%9D%E5%AF%B9%E5%A5%BD%E5%A5%87%20%E5%A4%AA%E9%98%B3%E9%A3%8E%E6%9A%B4",
          "hints": [
            "太阳",
            "太空"
          ]
        },
        {
          "id": "curiosity-s2e13",
          "n": 23,
          "title": "巨型鱿鱼：巨人是真的",
          "blurb": "深海里的巨型鱿鱼：传说怎样被镜头证实。",
          "duration": "约 45 分钟",
          "link": "https://search.bilibili.com/all?keyword=%E7%BB%9D%E5%AF%B9%E5%A5%BD%E5%A5%87%20%E5%B7%A8%E5%9E%8B%E9%B1%BF%E9%B1%BC",
          "hints": [
            "海洋",
            "生物"
          ]
        }
      ],
      "watchLink": "https://search.bilibili.com/all?keyword=%E7%BB%9D%E5%AF%B9%E5%A5%BD%E5%A5%87%20Curiosity",
      "watchLabel": "B 站搜索",
      "watchNote": "自用：仅自家备用：无央视/番剧/腾讯·爱奇艺正版全集；各集为投稿或搜索，可能下架。未收录：性为什么有趣、你有多邪恶、美国值多少钱、药物下的身体、洗脑、美国性爱调查。工具上线前须补 official，否则标「片源暂缺」。",
      "official": []
    },
    {
      "id": "firsts",
      "heroArt": "./covers/hero/firsts.jpg",
      "title": "人生第一次",
      "category": "drive",
      "slot": "B",
      "role": "side",
      "duration": "约 25–35 分钟 × 12 集",
      "episodeHint": "优先「入学」「长大」· 家长选片",
      "muscle": "选择",
      "blurb": "出生、入学、长大、当兵、上班……中国人一生里那些「第一次」。看普通人怎样做选择题。",
      "link": "https://www.bilibili.com/bangumi/media/md28227065",
      "linkLabel": "B 站正版",
      "play": "stable",
      "shareable": true,
      "playNote": "正版备份已满 2 条 · 自用走 watchLink",
      "mapPin": "第一次 · 选择",
      "altLink": "https://v.cctv.com/jishi/rsdyc/index.shtml",
      "altLabel": "央视 / 纪录片网",
      "parentNote": "《出生》《结婚》《告别》等偏成人，请先选《入学》《长大》；全程建议家长选片",
      "episodes": [
        {
          "id": "firsts-1",
          "n": 1,
          "title": "出生",
          "blurb": "新生命到来：医院里的第一次挑战。（家长慎选）",
          "duration": "约 30 分钟",
          "link": "https://tv.cctv.com/2020/05/23/VIDE3S46KAvfUypiCk3IocCv200523.shtml",
          "hints": [
            "出生",
            "家长选"
          ]
        },
        {
          "id": "firsts-2",
          "n": 2,
          "title": "入学",
          "blurb": "第一次走进小学：选择、适应与眼泪。",
          "duration": "约 30 分钟",
          "link": "https://www.bilibili.com/bangumi/media/md28227065",
          "hints": [
            "入学",
            "适应"
          ]
        },
        {
          "id": "firsts-3",
          "n": 3,
          "title": "长大",
          "blurb": "大山里的诗与课：怎样一点点长大。",
          "duration": "约 30 分钟",
          "link": "https://www.bilibili.com/bangumi/media/md28227065",
          "hints": [
            "长大",
            "留守"
          ]
        },
        {
          "id": "firsts-4",
          "n": 4,
          "title": "当兵",
          "blurb": "第一次穿上军装：训练与第一次跳。",
          "duration": "约 30 分钟",
          "link": "https://www.bilibili.com/bangumi/media/md28227065",
          "hints": [
            "当兵",
            "训练"
          ]
        },
        {
          "id": "firsts-5",
          "n": 5,
          "title": "上班",
          "blurb": "第一次工作：普通人怎样站上岗位。",
          "duration": "约 30 分钟",
          "link": "https://www.bilibili.com/bangumi/media/md28227065",
          "hints": [
            "上班",
            "自立"
          ]
        },
        {
          "id": "firsts-6",
          "n": 6,
          "title": "进城",
          "blurb": "第一次进城讨生活：选择与坚持。",
          "duration": "约 30 分钟",
          "link": "https://www.bilibili.com/bangumi/media/md28227065",
          "hints": [
            "进城",
            "选择"
          ]
        }
      ],
      "watchLink": "https://www.bilibili.com/bangumi/media/md28227065",
      "watchLabel": "B 站正版",
      "watchNote": "自用现开此链（B 站正版番剧 12 集；备用央视网专题）。工具模式改走 official。",
      "official": [
        {
          "kind": "bilibili",
          "url": "https://www.bilibili.com/bangumi/media/md28227065",
          "label": "B 站正版"
        },
        {
          "kind": "cctv",
          "url": "https://v.cctv.com/jishi/rsdyc/index.shtml",
          "label": "央视 / 纪录片网"
        }
      ]
    },
    {
      "id": "littlehuman",
      "heroArt": "./covers/hero/littlehuman.jpg",
      "title": "小小人类星球",
      "category": "human",
      "slot": "A",
      "role": "side",
      "duration": "约 5 分钟 × 16 集",
      "episodeHint": "一晚 2–3 集 · 自家先看",
      "muscle": "叙事",
      "blurb": "世界各地小朋友的一天：打水、搭蒙古包、采山药。短、暖，打开「别人的生活」。",
      "link": "https://www.bilibili.com/video/BV169K8zJEd2/",
      "linkLabel": "B 站直达",
      "play": "ok",
      "shareable": false,
      "playNote": "尚无正版备份 · 自用 watchLink；工具上线前须补或下架",
      "mapPin": "各地童年 · 5 分钟",
      "parentNote": "正版未坐实，不进今日推荐；家长先确认能播",
      "episodes": [
        {
          "id": "littlehuman-1",
          "n": 1,
          "title": "马里的帮手",
          "blurb": "小朋友怎样帮家里干活。",
          "duration": "约 5 分钟",
          "link": "https://www.bilibili.com/video/BV169K8zJEd2/?p=1",
          "hints": [
            "童年",
            "各地"
          ]
        },
        {
          "id": "littlehuman-2",
          "n": 2,
          "title": "内格罗河边",
          "blurb": "河边的一天：住、玩、帮忙。",
          "duration": "约 5 分钟",
          "link": "https://www.bilibili.com/video/BV169K8zJEd2/?p=2",
          "hints": [
            "童年",
            "各地"
          ]
        },
        {
          "id": "littlehuman-3",
          "n": 3,
          "title": "雅浦岛采山药",
          "blurb": "跟着姐姐去地里收山药。",
          "duration": "约 5 分钟",
          "link": "https://www.bilibili.com/video/BV169K8zJEd2/?p=3",
          "hints": [
            "童年",
            "各地"
          ]
        },
        {
          "id": "littlehuman-4",
          "n": 4,
          "title": "埃塞俄比亚和加拿大北部",
          "blurb": "两个很远的地方，孩子怎样过一天。",
          "duration": "约 5 分钟",
          "link": "https://www.bilibili.com/video/BV169K8zJEd2/?p=4",
          "hints": [
            "童年",
            "各地"
          ]
        },
        {
          "id": "littlehuman-5",
          "n": 5,
          "title": "桑布鲁打水",
          "blurb": "去取水，是这一天的大事。",
          "duration": "约 5 分钟",
          "link": "https://www.bilibili.com/video/BV169K8zJEd2/?p=5",
          "hints": [
            "童年",
            "各地"
          ]
        },
        {
          "id": "littlehuman-6",
          "n": 6,
          "title": "准备鹰节",
          "blurb": "节日快到了，孩子在帮忙准备。",
          "duration": "约 5 分钟",
          "link": "https://www.bilibili.com/video/BV169K8zJEd2/?p=6",
          "hints": [
            "童年",
            "各地"
          ]
        },
        {
          "id": "littlehuman-7",
          "n": 7,
          "title": "巴布亚新几内亚的庆典",
          "blurb": "穿上节日的衣服，参加辛辛节。",
          "duration": "约 5 分钟",
          "link": "https://www.bilibili.com/video/BV169K8zJEd2/?p=7",
          "hints": [
            "童年",
            "各地"
          ]
        },
        {
          "id": "littlehuman-8",
          "n": 8,
          "title": "马来西亚海上的家",
          "blurb": "家在海上，孩子怎样生活。 这一合集暂缺这一集，可先看前后集。",
          "duration": "约 5 分钟",
          "link": "https://www.bilibili.com/video/BV169K8zJEd2/",
          "hints": [
            "童年",
            "各地"
          ]
        },
        {
          "id": "littlehuman-9",
          "n": 9,
          "title": "搭蒙古包",
          "blurb": "帮家里支起新的蒙古包。",
          "duration": "约 5 分钟",
          "link": "https://www.bilibili.com/video/BV169K8zJEd2/?p=8",
          "hints": [
            "童年",
            "各地"
          ]
        },
        {
          "id": "littlehuman-10",
          "n": 10,
          "title": "巴布亚的丛林",
          "blurb": "丛林里的家和一天。",
          "duration": "约 5 分钟",
          "link": "https://www.bilibili.com/video/BV169K8zJEd2/?p=9",
          "hints": [
            "童年",
            "各地"
          ]
        },
        {
          "id": "littlehuman-11",
          "n": 11,
          "title": "格陵兰和内格罗河",
          "blurb": "冰上和河边，两种童年。 这一合集暂缺这一集，可先看前后集。",
          "duration": "约 5 分钟",
          "link": "https://www.bilibili.com/video/BV169K8zJEd2/",
          "hints": [
            "童年",
            "各地"
          ]
        },
        {
          "id": "littlehuman-12",
          "n": 12,
          "title": "马里打水",
          "blurb": "跟妈妈去井边打水。",
          "duration": "约 5 分钟",
          "link": "https://www.bilibili.com/video/BV169K8zJEd2/?p=10",
          "hints": [
            "童年",
            "各地"
          ]
        },
        {
          "id": "littlehuman-13",
          "n": 13,
          "title": "巴西丛林",
          "blurb": "亚马逊丛林里的玩耍。",
          "duration": "约 5 分钟",
          "link": "https://www.bilibili.com/video/BV169K8zJEd2/?p=11",
          "hints": [
            "童年",
            "各地"
          ]
        },
        {
          "id": "littlehuman-14",
          "n": 14,
          "title": "世界各地的动物",
          "blurb": "不同地方的孩子和动物。",
          "duration": "约 5 分钟",
          "link": "https://www.bilibili.com/video/BV169K8zJEd2/?p=12",
          "hints": [
            "童年",
            "各地"
          ]
        },
        {
          "id": "littlehuman-15",
          "n": 15,
          "title": "世界各地的家",
          "blurb": "房子可以长得很不一样。",
          "duration": "约 5 分钟",
          "link": "https://www.bilibili.com/video/BV169K8zJEd2/?p=13",
          "hints": [
            "童年",
            "各地"
          ]
        },
        {
          "id": "littlehuman-16",
          "n": 16,
          "title": "帮忙和玩耍",
          "blurb": "世界各地的孩子怎样帮忙、怎样玩。",
          "duration": "约 5 分钟",
          "link": "https://www.bilibili.com/video/BV169K8zJEd2/?p=14",
          "hints": [
            "童年",
            "各地"
          ]
        }
      ],
      "watchLink": "https://www.bilibili.com/video/BV169K8zJEd2/",
      "watchLabel": "B 站直达",
      "watchNote": "自用：仅自家先看：暂无央视/番剧/腾讯·爱奇艺正版页；当前为投稿合集，可能下架。工具上线前须补 official，否则标「片源暂缺」。",
      "official": []
    }
  ]
};
