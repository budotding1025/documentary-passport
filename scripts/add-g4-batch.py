# -*- coding: utf-8 -*-
"""Add grade-4-friendly titles from the recommend list; update path wish steps; make covers."""
from __future__ import annotations

import json
import re
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data.js"
HERO = ROOT / "covers" / "hero"
THUMB = ROOT / "covers" / "thumb"

# New catalog objects (JSON-compatible dicts). Inserted into DOC_CATALOG.titles.
NEW_TITLES = [
  {
    "id": "tededecon",
    "heroArt": "./covers/hero/tededecon.jpg",
    "title": "TED-Ed 经济短片（精选）",
    "category": "finance",
    "slot": "A",
    "role": "side",
    "duration": "约 4–6 分钟 × 3 集",
    "episodeHint": "工作日 1 集 · 建议先丝路再货币",
    "muscle": "商业",
    "kid": {"understand": "think", "watch": "together"},
    "blurb": "三集动画短片：丝路怎样连通世界、钱从哪来、供需怎样定价钱。比 Crash Course 更短。",
    "link": "https://ed.ted.com/lessons/what-gave-the-silk-road-its-name-shannon-harris-castelo",
    "linkLabel": "TED-Ed 官网",
    "play": "ok",
    "shareable": False,
    "playNote": "正版页走 TED-Ed；中字可走 B 站投稿，可能下架",
    "mapPin": "丝路 · 货币 · 供需",
    "parentNote": "英文原声+字幕；建议家长陪看第一集确认孩子跟得上",
    "watchLink": "https://www.bilibili.com/video/BV1CE411Y7us/",
    "watchLabel": "B 站 · TED-Ed 中字（备）",
    "watchNote": "自用：官网英文字幕最稳；B 站中字为投稿合集入口，优先换丝路/货币相关分P。工具上线前须核 official。",
    "official": [
      {
        "kind": "teded",
        "url": "https://ed.ted.com/lessons/what-gave-the-silk-road-its-name-shannon-harris-castelo",
        "label": "TED-Ed · 丝路"
      },
      {
        "kind": "teded",
        "url": "https://ed.ted.com/lessons/the-history-of-paper-money-tally-sticks-to-bitcoins-or-how-we-got-here",
        "label": "TED-Ed · 纸币史"
      }
    ],
    "episodes": [
      {
        "id": "tededecon-1",
        "n": 1,
        "title": "丝绸之路：史上第一个「互联网」",
        "blurb": "东西、想法怎样沿着丝路从 A 走到 B。",
        "duration": "约 5 分钟",
        "link": "https://ed.ted.com/lessons/what-gave-the-silk-road-its-name-shannon-harris-castelo",
        "hints": ["丝路", "贸易", "交换"]
      },
      {
        "id": "tededecon-2",
        "n": 2,
        "title": "纸币从哪来",
        "blurb": "从记账棍到纸币：信用怎样变成大家认的「钱」。",
        "duration": "约 5 分钟",
        "link": "https://ed.ted.com/lessons/the-history-of-paper-money-tally-sticks-to-bitcoins-or-how-we-got-here",
        "hints": ["纸币", "信用", "货币"]
      },
      {
        "id": "tededecon-3",
        "n": 3,
        "title": "想买的人 vs 能卖的量",
        "blurb": "价钱为什么会变：想买的人多、能卖的东西少时会怎样。",
        "duration": "约 5 分钟",
        "link": "https://ed.ted.com/lessons/what-gave-the-silk-road-its-name-shannon-harris-castelo",
        "hints": ["供需", "价钱", "稀缺"]
      }
    ]
  },
  {
    "id": "kidmoney",
    "heroArt": "./covers/hero/kidmoney.jpg",
    "title": "小朋友的财商课（精选）",
    "category": "finance",
    "slot": "A",
    "role": "side",
    "duration": "约 6–10 分钟 × 5 集",
    "episodeHint": "工作日 1 集 · 从交换到攒钱",
    "muscle": "商业",
    "kid": {"understand": "easy", "watch": "solo"},
    "blurb": "交换、钱是什么、第一次买东西、钱从哪来、学会攒钱。生活化财商入门，少抽象名词。",
    "link": "https://www.bilibili.com/video/BV1ce411F73P/",
    "linkLabel": "B 站直达",
    "play": "ok",
    "shareable": False,
    "playNote": "尚无正版备份 · 自用 watchLink；投稿合集可能下架",
    "mapPin": "交换 · 储蓄 · 钱是什么",
    "watchLink": "https://www.bilibili.com/video/BV1ce411F73P/?p=1",
    "watchLabel": "B 站直达",
    "watchNote": "自用：10 集合集里先收前 5 集；工具上线前须补 official。",
    "official": [],
    "episodes": [
      {
        "id": "kidmoney-1",
        "n": 1,
        "title": "神奇的交换",
        "blurb": "没有钱时，人们怎样交换东西。",
        "duration": "约 8 分钟",
        "link": "https://www.bilibili.com/video/BV1ce411F73P/?p=1",
        "hints": ["交换", "物物"]
      },
      {
        "id": "kidmoney-2",
        "n": 2,
        "title": "什么是钱",
        "blurb": "钱到底是什么：大家为什么认它。",
        "duration": "约 8 分钟",
        "link": "https://www.bilibili.com/video/BV1ce411F73P/?p=2",
        "hints": ["钱", "认识"]
      },
      {
        "id": "kidmoney-3",
        "n": 3,
        "title": "第一次买东西",
        "blurb": "付钱买东西：选择与代价。",
        "duration": "约 8 分钟",
        "link": "https://www.bilibili.com/video/BV1ce411F73P/?p=3",
        "hints": ["购买", "选择"]
      },
      {
        "id": "kidmoney-4",
        "n": 4,
        "title": "钱是从哪儿来的",
        "blurb": "家里的钱从劳动与交换里来。",
        "duration": "约 8 分钟",
        "link": "https://www.bilibili.com/video/BV1ce411F73P/?p=4",
        "hints": ["来源", "劳动"]
      },
      {
        "id": "kidmoney-5",
        "n": 5,
        "title": "学会攒钱",
        "blurb": "想要大东西，可以一点点攒。",
        "duration": "约 8 分钟",
        "link": "https://www.bilibili.com/video/BV1ce411F73P/?p=5",
        "hints": ["储蓄", "等待"]
      }
    ]
  },
  {
    "id": "silkmoney",
    "heroArt": "./covers/hero/silkmoney.jpg",
    "title": "丝路·货币",
    "category": "finance",
    "slot": "A",
    "role": "side",
    "duration": "约 45 分钟",
    "episodeHint": "周末陪看 · 可拆两段",
    "muscle": "商业",
    "kid": {"understand": "think", "watch": "together"},
    "blurb": "央视《丝绸之路经济带》第四集：从桑树到交子，丝路上的信用怎样变成货币。",
    "link": "https://tv.cctv.com/2017/05/10/VIDEz6is7edaEamVIMcN0Zd6170510.shtml",
    "linkLabel": "央视网",
    "play": "stable",
    "shareable": True,
    "playNote": "正版备份 1 条 · 自用走 watchLink",
    "mapPin": "交子 · 丝路信用",
    "parentNote": "偏财经叙事，建议陪看；可先看前半讲交子的段落",
    "watchLink": "https://tv.cctv.com/2017/05/10/VIDEz6is7edaEamVIMcN0Zd6170510.shtml",
    "watchLabel": "央视网",
    "watchNote": "自用现开此链（央视网正片）。工具模式改走 official。",
    "official": [
      {
        "kind": "cctv",
        "url": "https://tv.cctv.com/2017/05/10/VIDEz6is7edaEamVIMcN0Zd6170510.shtml",
        "label": "央视网 · 丝路货币"
      }
    ]
  },
  {
    "id": "hexizoulang",
    "heroArt": "./covers/hero/hexizoulang.jpg",
    "title": "河西走廊（精选）",
    "category": "human",
    "slot": "B",
    "role": "side",
    "duration": "约 48 分钟 × 3 集",
    "episodeHint": "家长陪看 · 周末 1 集 · 先使者与丝路",
    "muscle": "叙事",
    "kid": {"understand": "think", "watch": "together"},
    "blurb": "张骞凿空、丝路贸易、敦煌：东西怎样从 A 走到 B。只收三集，不追完全部。",
    "link": "https://www.bilibili.com/bangumi/media/md20790",
    "linkLabel": "B 站正版",
    "play": "stable",
    "shareable": True,
    "playNote": "正版备份 1 条 · 自用走 watchLink",
    "mapPin": "使者 · 丝路 · 敦煌",
    "parentNote": "含战争与边疆叙事，务必陪看；四年级先看《使者》《丝路》即可",
    "watchLink": "https://www.bilibili.com/bangumi/media/md20790",
    "watchLabel": "B 站正版",
    "watchNote": "自用：B 站正版番剧页选集；优先第1、6、7 集。工具模式改走 official。",
    "official": [
      {
        "kind": "bilibili",
        "url": "https://www.bilibili.com/bangumi/media/md20790",
        "label": "B 站正版 · 河西走廊"
      }
    ],
    "episodes": [
      {
        "id": "hexizoulang-1",
        "n": 1,
        "title": "使者",
        "blurb": "张骞西行：一条通道怎样被「凿空」。",
        "duration": "约 48 分钟",
        "link": "https://www.bilibili.com/bangumi/media/md20790",
        "hints": ["张骞", "通道", "开拓"]
      },
      {
        "id": "hexizoulang-6",
        "n": 2,
        "title": "丝路",
        "blurb": "商队与货物：贸易怎样把两边连起来。",
        "duration": "约 48 分钟",
        "link": "https://www.bilibili.com/bangumi/media/md20790",
        "hints": ["贸易", "商队", "丝路"]
      },
      {
        "id": "hexizoulang-7",
        "n": 3,
        "title": "敦煌",
        "blurb": "洞窟与壁画：交流留下了什么痕迹。",
        "duration": "约 48 分钟",
        "link": "https://www.bilibili.com/bangumi/media/md20790",
        "hints": ["敦煌", "壁画", "交流"]
      }
    ]
  },
  {
    "id": "palacefix",
    "heroArt": "./covers/hero/palacefix.jpg",
    "title": "我在故宫修文物",
    "category": "human",
    "slot": "B",
    "role": "side",
    "duration": "约 50 分钟 × 3 集",
    "episodeHint": "周末 1 集",
    "muscle": "审美",
    "kid": {"understand": "easy", "watch": "solo"},
    "blurb": "故宫里的「文物医生」：青铜、木器、书画怎样被一点点修好。匠人与耐心。",
    "link": "https://www.bilibili.com/bangumi/play/ep120576",
    "linkLabel": "B 站正版",
    "play": "stable",
    "shareable": True,
    "playNote": "正版备份 1 条 · 自用走 watchLink",
    "mapPin": "修复 · 匠人",
    "watchLink": "https://www.bilibili.com/bangumi/play/ep120576",
    "watchLabel": "B 站正版",
    "watchNote": "自用现开此链（正版番剧 3 集）。工具模式改走 official。",
    "official": [
      {
        "kind": "bilibili",
        "url": "https://www.bilibili.com/bangumi/play/ep120576",
        "label": "B 站正版"
      }
    ],
    "episodes": [
      {
        "id": "palacefix-1",
        "n": 1,
        "title": "第一集",
        "blurb": "走进修复室：师徒与手艺怎样接上。",
        "duration": "约 50 分钟",
        "link": "https://www.bilibili.com/bangumi/play/ep120576",
        "hints": ["修复", "师徒"]
      },
      {
        "id": "palacefix-2",
        "n": 2,
        "title": "第二集",
        "blurb": "继续修：时间与耐心怎样让物件「活」回来。",
        "duration": "约 50 分钟",
        "link": "https://www.bilibili.com/bangumi/media/md20792",
        "hints": ["耐心", "手艺"]
      },
      {
        "id": "palacefix-3",
        "n": 3,
        "title": "第三集",
        "blurb": "收束：为什么有人愿意把一生交给修复。",
        "duration": "约 50 分钟",
        "link": "https://www.bilibili.com/bangumi/media/md20792",
        "hints": ["匠人", "志向"]
      }
    ]
  },
  {
    "id": "zicong",
    "heroArt": "./covers/hero/zicong.jpg",
    "title": "字从遇见你（精选）",
    "category": "human",
    "slot": "A",
    "role": "side",
    "duration": "约 5–8 分钟 × 5 集",
    "episodeHint": "一晚 1–2 字",
    "muscle": "叙事",
    "kid": {"understand": "easy", "watch": "solo"},
    "blurb": "一个汉字讲一个小故事：天、中、鼎……四年级语感友好，比长史书好入口。",
    "link": "https://tv.cctv.cn/2022/04/07/VIDEhqLz1BKuedFDXLIRxybj220407.shtml",
    "linkLabel": "央视网",
    "play": "stable",
    "shareable": True,
    "playNote": "正版备份 2 条 · 自用走 watchLink",
    "mapPin": "汉字 · 甲骨",
    "altLink": "https://www.bilibili.com/bangumi/media/md28339002",
    "altLabel": "B 站正版",
    "watchLink": "https://tv.cctv.cn/2022/04/07/VIDEhqLz1BKuedFDXLIRxybj220407.shtml",
    "watchLabel": "央视网",
    "watchNote": "自用：先看《天》；B 站有正版番剧可选集。工具模式改走 official。",
    "official": [
      {
        "kind": "cctv",
        "url": "https://tv.cctv.cn/2022/04/04/VIDACO0Ql6L8Q7t41qzriSTy220404.shtml",
        "label": "央视网节目页"
      },
      {
        "kind": "bilibili",
        "url": "https://www.bilibili.com/bangumi/media/md28339002",
        "label": "B 站正版"
      }
    ],
    "episodes": [
      {
        "id": "zicong-tian",
        "n": 1,
        "title": "天",
        "blurb": "「天」字为什么长得像一个大脑袋小人？",
        "duration": "约 6 分钟",
        "link": "https://tv.cctv.cn/2022/04/07/VIDEhqLz1BKuedFDXLIRxybj220407.shtml",
        "hints": ["天", "甲骨"]
      },
      {
        "id": "zicong-zhong",
        "n": 2,
        "title": "中",
        "blurb": "汉字世界里，哪个字常常站在正中间？",
        "duration": "约 6 分钟",
        "link": "https://tv.cctv.cn/2022/04/04/VIDACO0Ql6L8Q7t41qzriSTy220404.shtml",
        "hints": ["中", "核心"]
      },
      {
        "id": "zicong-ding",
        "n": 3,
        "title": "鼎",
        "blurb": "两只耳朵的「萌萌」符号，本尊其实是鼎。",
        "duration": "约 6 分钟",
        "link": "https://tv.cctv.cn/2022/04/04/VIDACO0Ql6L8Q7t41qzriSTy220404.shtml",
        "hints": ["鼎", "符号"]
      },
      {
        "id": "zicong-you",
        "n": 4,
        "title": "友（第二季）",
        "blurb": "「友」字里藏着怎样的握手与并肩。",
        "duration": "约 6 分钟",
        "link": "https://www.bilibili.com/bangumi/media/md28339002",
        "hints": ["友", "朋友"]
      },
      {
        "id": "zicong-xi",
        "n": 5,
        "title": "喜（第二季）",
        "blurb": "喜从哪里来：一个字里的热闹。",
        "duration": "约 6 分钟",
        "link": "https://www.bilibili.com/bangumi/media/md28339002",
        "hints": ["喜", "节庆"]
      }
    ]
  },
  {
    "id": "palace100",
    "heroArt": "./covers/hero/palace100.jpg",
    "title": "故宫100（精选）",
    "category": "human",
    "slot": "A",
    "role": "side",
    "duration": "约 6 分钟 × 5 集",
    "episodeHint": "一晚 1–2 集",
    "muscle": "审美",
    "kid": {"understand": "easy", "watch": "solo"},
    "blurb": "一座建筑讲一个故事：午门、角楼、金水桥……短片看见紫禁城的形与意。",
    "link": "https://search.bilibili.com/all?keyword=%E6%95%85%E5%AE%AB100%20%E7%BA%AA%E5%BD%95%E7%89%87",
    "linkLabel": "B 站搜索 · 故宫100",
    "play": "ok",
    "shareable": False,
    "playNote": "片源入口以 B 站「故宫100」正版/合集为准；工具前须坐实 official",
    "mapPin": "建筑 · 形意",
    "watchLink": "https://search.bilibili.com/all?keyword=%E6%95%85%E5%AE%AB100",
    "watchLabel": "B 站搜索",
    "watchNote": "自用：搜「故宫100」进正版或高清合集；优先天地之间、午门、角楼。工具上线前须补 official。",
    "official": [],
    "episodes": [
      {
        "id": "palace100-1",
        "n": 1,
        "title": "天地之间",
        "blurb": "紫禁城怎样落在「天地」之间。",
        "duration": "约 6 分钟",
        "link": "https://search.bilibili.com/all?keyword=%E6%95%85%E5%AE%AB100%20%E5%A4%A9%E5%9C%B0%E4%B9%8B%E9%97%B4",
        "hints": ["紫禁城", "格局"]
      },
      {
        "id": "palace100-3",
        "n": 2,
        "title": "有容乃大（午门）",
        "blurb": "午门：进出皇城的大门怎样说话。",
        "duration": "约 6 分钟",
        "link": "https://search.bilibili.com/all?keyword=%E6%95%85%E5%AE%AB100%20%E5%8D%88%E9%97%A8",
        "hints": ["午门", "大门"]
      },
      {
        "id": "palace100-5",
        "n": 3,
        "title": "四面玲珑（角楼）",
        "blurb": "角楼为什么难画又好看。",
        "duration": "约 6 分钟",
        "link": "https://search.bilibili.com/all?keyword=%E6%95%85%E5%AE%AB100%20%E8%A7%92%E6%A5%BC",
        "hints": ["角楼", "结构"]
      },
      {
        "id": "palace100-6",
        "n": 4,
        "title": "玉带天河（金水桥）",
        "blurb": "桥与水：皇城里的一条「玉带」。",
        "duration": "约 6 分钟",
        "link": "https://search.bilibili.com/all?keyword=%E6%95%85%E5%AE%AB100%20%E9%87%91%E6%B0%B4%E6%A1%A5",
        "hints": ["金水桥", "水"]
      },
      {
        "id": "palace100-20",
        "n": 5,
        "title": "金光灿烂（琉璃瓦）",
        "blurb": "屋顶的黄：琉璃瓦怎样发光。",
        "duration": "约 6 分钟",
        "link": "https://search.bilibili.com/all?keyword=%E6%95%85%E5%AE%AB100%20%E7%90%89%E7%92%83%E7%93%A6",
        "hints": ["琉璃", "屋顶"]
      }
    ]
  },
  {
    "id": "blueplanet2",
    "heroArt": "./covers/hero/blueplanet2.jpg",
    "title": "蓝色星球 第二季（精选）",
    "category": "nature",
    "slot": "B",
    "role": "side",
    "duration": "约 50 分钟 × 2 集",
    "episodeHint": "周末 1 集",
    "muscle": "生物",
    "kid": {"understand": "easy", "watch": "together"},
    "blurb": "同一片海洋、深海：比第一季更新的画面。先收两集，建立「海有多深」的感觉。",
    "link": "https://v.qq.com/x/cover/5njremixqn1nwki/e0025oknrqk.html",
    "linkLabel": "腾讯视频正版",
    "play": "stable",
    "shareable": True,
    "playNote": "正版备份 1 条 · 普通话版；部分集需 VIP",
    "mapPin": "海洋 · 深海",
    "parentNote": "含捕猎镜头，建议陪看前十分钟再决定",
    "watchLink": "https://v.qq.com/x/cover/5njremixqn1nwki/e0025oknrqk.html",
    "watchLabel": "腾讯视频正版",
    "watchNote": "自用：腾讯《蓝色星球第2季》普通话版。工具模式改走 official。",
    "official": [
      {
        "kind": "tencent",
        "url": "https://v.qq.com/x/cover/5njremixqn1nwki/e0025oknrqk.html",
        "label": "腾讯视频正版"
      }
    ],
    "episodes": [
      {
        "id": "blueplanet2-1",
        "n": 1,
        "title": "同一片海洋",
        "blurb": "海洋怎样连成一整个系统。",
        "duration": "约 50 分钟",
        "link": "https://v.qq.com/x/cover/5njremixqn1nwki/e0025oknrqk.html",
        "hints": ["海洋", "系统"]
      },
      {
        "id": "blueplanet2-2",
        "n": 2,
        "title": "深海",
        "blurb": "阳光照不到的地方，谁在生活。",
        "duration": "约 50 分钟",
        "link": "https://v.qq.com/x/cover/5njremixqn1nwki.html",
        "hints": ["深海", "黑暗"]
      }
    ]
  },
  {
    "id": "freesolo",
    "heroArt": "./covers/hero/freesolo.jpg",
    "title": "徒手攀岩",
    "category": "drive",
    "slot": "B",
    "role": "side",
    "duration": "约 100 分钟",
    "episodeHint": "家长陪看 · 可拆两晚",
    "muscle": "意志",
    "kid": {"understand": "think", "watch": "parent"},
    "blurb": "霍诺德徒手登顶酋长岩：训练、恐惧与专注。不是鸡汤，是极限下的准备。",
    "link": "https://www.bilibili.com/bangumi/play/ep831099",
    "linkLabel": "B 站正版",
    "play": "stable",
    "shareable": True,
    "playNote": "正版备份 1 条 · 自用走 watchLink",
    "mapPin": "极限 · 准备 · 专注",
    "parentNote": "高空与生死风险画面；必须家长陪看，可先讲「为什么要训练这么久」再播",
    "watchLink": "https://www.bilibili.com/bangumi/play/ep831099",
    "watchLabel": "B 站正版",
    "watchNote": "自用现开此链（正版番剧）。工具模式改走 official。",
    "official": [
      {
        "kind": "bilibili",
        "url": "https://www.bilibili.com/bangumi/play/ep831099",
        "label": "B 站正版"
      }
    ]
  },
  {
    "id": "dinowalk",
    "heroArt": "./covers/hero/dinowalk.jpg",
    "title": "与恐龙同行（精选）",
    "category": "nature",
    "slot": "B",
    "role": "side",
    "duration": "约 30 分钟 × 3 集",
    "episodeHint": "周末 1 集",
    "muscle": "生物",
    "kid": {"understand": "easy", "watch": "together"},
    "blurb": "BBC×央视经典：恐龙怎样走路、捕猎、养孩子。点播高频主题，先收三集。",
    "link": "http://tv.cctv.com/2012/12/15/VIDA1355562050362949.shtml",
    "linkLabel": "央视网（相关）",
    "play": "ok",
    "shareable": False,
    "playNote": "入口为央视恐龙专题相关页；完整《与恐龙同行》请家长核可播源",
    "mapPin": "恐龙 · 史前",
    "parentNote": "含捕猎画面；正版页若跳转不稳，可改搜「与恐龙同行 央视」",
    "watchLink": "http://tv.cctv.com/2012/12/15/VIDA1355562050362949.shtml",
    "watchLabel": "央视网",
    "watchNote": "自用：恐龙主题入口；若打不开请搜「与恐龙同行」正版。工具上线前须补 official。",
    "official": [],
    "episodes": [
      {
        "id": "dinowalk-1",
        "n": 1,
        "title": "新生代之前",
        "blurb": "恐龙时代的地球长什么样。",
        "duration": "约 30 分钟",
        "link": "http://tv.cctv.com/2012/12/15/VIDA1355562050362949.shtml",
        "hints": ["恐龙", "时代"]
      },
      {
        "id": "dinowalk-2",
        "n": 2,
        "title": "巨人的脚步",
        "blurb": "大个子恐龙怎样走路、吃什么。",
        "duration": "约 30 分钟",
        "link": "http://tv.cctv.com/2012/12/15/VIDA1355562050362949.shtml",
        "hints": ["植食", "足迹"]
      },
      {
        "id": "dinowalk-3",
        "n": 3,
        "title": "猎手与猎物",
        "blurb": "捕猎策略：谁追、谁逃。",
        "duration": "约 30 分钟",
        "link": "http://tv.cctv.com/2012/12/15/VIDA1355562050362949.shtml",
        "hints": ["捕猎", "生存"]
      }
    ]
  }
]

COVER_COLORS = {
  "tededecon": ((36, 72, 110), (90, 140, 170), "TED-Ed\n经济短片"),
  "kidmoney": ((120, 84, 40), (200, 160, 90), "小朋友的\n财商课"),
  "silkmoney": ((90, 50, 40), (170, 110, 70), "丝路·货币"),
  "hexizoulang": ((70, 90, 60), (140, 150, 100), "河西走廊"),
  "palacefix": ((80, 60, 50), (160, 130, 100), "我在故宫\n修文物"),
  "zicong": ((50, 70, 90), (120, 150, 170), "字从遇见你"),
  "palace100": ((100, 70, 40), (180, 140, 80), "故宫100"),
  "blueplanet2": ((20, 50, 90), (40, 120, 160), "蓝色星球\n第二季"),
  "freesolo": ((40, 50, 55), (110, 120, 130), "徒手攀岩"),
  "dinowalk": ((60, 80, 45), (130, 150, 90), "与恐龙同行"),
}


def make_cover(stem: str, hero: bool) -> None:
  top, bottom, label = COVER_COLORS[stem]
  w, h = (1600, 900) if hero else (960, 540)
  im = Image.new("RGB", (w, h), top)
  draw = ImageDraw.Draw(im)
  for y in range(h):
    t = y / max(h - 1, 1)
    c = tuple(int(top[i] * (1 - t) + bottom[i] * t) for i in range(3))
    draw.line([(0, y), (w, y)], fill=c)
  # soft vignette bars
  draw.rectangle([0, 0, w, int(h * 0.18)], fill=(20, 20, 20))
  draw.rectangle([0, int(h * 0.72), w, h], fill=(15, 15, 15))
  try:
    font = ImageFont.truetype("msyh.ttc", 72 if hero else 42)
  except OSError:
    font = ImageFont.load_default()
  text = label
  # center-ish
  bbox = draw.multiline_textbbox((0, 0), text, font=font, spacing=12)
  tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
  x = (w - tw) // 2
  y = (h - th) // 2
  draw.multiline_text((x, y), text, font=font, fill=(245, 240, 230), spacing=12, align="center")
  out = (HERO if hero else THUMB) / f"{stem}.jpg"
  out.parent.mkdir(parents=True, exist_ok=True)
  im.save(out, "JPEG", quality=72 if hero else 62, optimize=True, progressive=True)


# skip zicong — already in catalog
NEW_TITLES = [t for t in NEW_TITLES if t["id"] != "zicong"]
COVER_COLORS = {k: v for k, v in COVER_COLORS.items() if k != "zicong"}


def dump_title(obj: dict) -> str:
  return json.dumps(obj, ensure_ascii=False, indent=2)


def insert_titles(text: str) -> str:
  for t in NEW_TITLES:
    if f'"id": "{t["id"]}"' in text:
      raise SystemExit(f"already present: {t['id']}")
  # insert before final titles closing: last "  ]\n};"
  marker = "\n  ]\n};"
  idx = text.rfind(marker)
  if idx < 0:
    raise SystemExit("catalog end not found")
  # find last title object end: should be before marker; need comma after previous
  block = ",\n".join(dump_title(t) for t in NEW_TITLES)
  # indent each line by 4 spaces (titles live inside array)
  indented = "\n".join(("    " + line if line else line) for line in block.splitlines())
  # previous object ends with "}\n  ]" — add comma after last }
  before = text[:idx]
  if not before.rstrip().endswith("}"):
    raise SystemExit("unexpected end before titles close")
  # insert comma + new titles
  return before + ",\n" + indented + text[idx:]


def patch_paths(text: str) -> str:
  """Replace econ-rules wish steps with real titleIds; extend other paths lightly."""
  old_wishes = '''        {
          "phase": "wish",
          "label": "待入库 · TED-Ed 经济短片",
          "why": "3–5 分钟一概念：货币起源、贸易、供需，比 Crash Course 更短"
        },
        {
          "phase": "wish",
          "label": "待入库 · 国内财商启蒙动画",
          "why": "钱是什么、储蓄、交换——更生活、更少抽象名词"
        },
        {
          "phase": "wish",
          "label": "待入库 · 贸易 / 丝绸之路微纪录",
          "why": "用「东西怎么从 A 到 B」讲交换与规则，比国债周期好入口"
        }'''
  new_wishes = '''        {
          "phase": "optional",
          "label": "选看 · TED-Ed 经济短片",
          "why": "丝路、纸币、供需：比 Crash Course 更短的动画课",
          "titleId": "tededecon"
        },
        {
          "phase": "optional",
          "label": "选看 · 小朋友的财商课",
          "why": "交换、钱是什么、攒钱：更生活、更少抽象名词",
          "titleId": "kidmoney"
        },
        {
          "phase": "optional",
          "label": "选看 · 丝路·货币",
          "why": "交子与丝路信用：东西怎么从 A 到 B",
          "titleId": "silkmoney"
        },
        {
          "phase": "later",
          "label": "稍后 · 河西走廊（精选）",
          "why": "使者与丝路：贸易通道的故事，建议陪看",
          "titleId": "hexizoulang"
        }'''
  if old_wishes not in text:
    raise SystemExit("econ wish block not found")
  text = text.replace(old_wishes, new_wishes, 1)

  # nature-entry: add blueplanet2 + dinowalk
  nature_later = '''        {
          "phase": "later",
          "label": "稍后 · 美丽中国",
          "why": "从华南到高原：中国长什么样",
          "titleId": "wildchina"
        }'''
  nature_extra = '''        {
          "phase": "optional",
          "label": "选看 · 蓝色星球 II",
          "why": "同一片海洋、深海：更新画面的海洋大片",
          "titleId": "blueplanet2"
        },
        {
          "phase": "later",
          "label": "稍后 · 与恐龙同行",
          "why": "点播高频：恐龙怎样走路与捕猎",
          "titleId": "dinowalk"
        },
        {
          "phase": "later",
          "label": "稍后 · 美丽中国",
          "why": "从华南到高原：中国长什么样",
          "titleId": "wildchina"
        }'''
  if nature_later not in text:
    raise SystemExit("nature later block not found")
  text = text.replace(nature_later, nature_extra, 1)

  # china-story: add palace/zicong
  china_later = '''        {
          "phase": "later",
          "label": "稍后 · 美丽中国",
          "why": "地理风景片，接国宝与工程看「这片土地」",
          "titleId": "wildchina"
        }'''
  china_extra = '''        {
          "phase": "optional",
          "label": "选看 · 字从遇见你",
          "why": "一个字一个故事：天、中、鼎",
          "titleId": "zicong"
        },
        {
          "phase": "optional",
          "label": "选看 · 故宫100",
          "why": "一座建筑讲一个故事：午门、角楼",
          "titleId": "palace100"
        },
        {
          "phase": "later",
          "label": "稍后 · 我在故宫修文物",
          "why": "匠人怎样把国宝一点点修好",
          "titleId": "palacefix"
        },
        {
          "phase": "later",
          "label": "稍后 · 美丽中国",
          "why": "地理风景片，接国宝与工程看「这片土地」",
          "titleId": "wildchina"
        }'''
  # china path already has zicong in catalog with easy entry - keep as optional
  if china_later not in text:
    raise SystemExit("china later block not found")
  text = text.replace(china_later, china_extra, 1)

  # soften econ blurb
  text = text.replace(
    "库外短片标「待入库」。",
    "短片入口已入库：TED-Ed、财商动画、丝路货币。",
    1,
  )
  return text


def patch_sevenup(text: str) -> str:
  old = '"episodeHint": "跨几十年人生，含阶层落差、婚姻与失落；必须家长陪看，建议只选早年几部，勿一口气追到中年"'
  # parentNote may hold that; find episodeHint for sevenup
  m = re.search(
    r'("id": "sevenup"[\s\S]*?"episodeHint": ")([^"]*)(")',
    text,
  )
  if not m:
    print("sevenup episodeHint skip")
    return text
  return (
    text[: m.start(2)]
    + "优先《7岁》· 必须家长陪看 · 勿一口气追到中年"
    + text[m.end(2) :]
  )


def patch_existing_zicong(text: str) -> str:
  """Bump existing 字从遇见你 to easy for grade-4 path."""
  m = re.search(
    r'"id": "zicong"[\s\S]*?"kid": \{"understand": "([^"]+)", "watch": "([^"]+)"\}',
    text,
  )
  if not m:
    return text
  return (
    text[: m.start(1)]
    + "easy"
    + text[m.end(1) : m.start(2)]
    + "solo"
    + text[m.end(2) :]
  )


def main() -> None:
  text = DATA.read_text(encoding="utf-8")
  text = insert_titles(text)
  text = patch_paths(text)
  text = patch_sevenup(text)
  text = patch_existing_zicong(text)
  DATA.write_text(text, encoding="utf-8")
  print("data.js updated,", len(NEW_TITLES), "titles")

  for stem in COVER_COLORS:
    make_cover(stem, True)
    make_cover(stem, False)
    print("cover", stem)


if __name__ == "__main__":
  main()
