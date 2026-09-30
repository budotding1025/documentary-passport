# -*- coding: utf-8 -*-
"""Add 8 titles + convert hero/thumb covers."""
from pathlib import Path
from PIL import Image

ROOT = Path(r"D:\AI_WorkSPACE\Documentary Passport")
ASSETS = Path(r"C:\Users\ASUS\.cursor\projects\d-AI-WorkSPACE\assets")

ENTRIES = r'''
    {
      id: "mademenspend",
      heroArt: "./covers/hero/mademenspend.jpg",
      title: "无节制消费的元凶",
      category: "finance",
      slot: "B",
      role: "side",
      duration: "约 50 分钟 × 3 集",
      episodeHint: "家长陪看 · 周末 1 集",
      muscle: "商业",
      blurb: "东西为什么越来越不耐用？广告怎样用恐惧和「给孩子」让人掏钱。看清消费机器怎么转。",
      link: "https://v.qq.com/x/cover/n4fu3ishf0tpnq1.html",
      linkLabel: "腾讯视频正版",
      play: "stable",
      shareable: true,
      playNote: "腾讯视频正版 3 集；部分集需 VIP",
      mapPin: "易耗 · 恐惧营销 · 儿童市场",
      parentNote: "成人纪实；第3集「转战儿童市场」务必陪看讨论",
      episodes: [
        { id: "mademenspend-1", n: 1, title: "故意制成易耗品", blurb: "为什么东西故意不耐用：计划报废怎样逼你再买。", duration: "约 50 分钟", link: "https://v.qq.com/x/cover/n4fu3ishf0tpnq1/r00207nmb37.html", hints: ["易耗", "升级", "再买"] },
        { id: "mademenspend-2", n: 2, title: "利用消费者的恐惧营销", blurb: "害怕什么就买什么：恐惧怎样变成生意。", duration: "约 50 分钟", link: "https://v.qq.com/x/cover/n4fu3ishf0tpnq1.html", hints: ["恐惧", "广告", "安全感"] },
        { id: "mademenspend-3", n: 3, title: "转战儿童市场", blurb: "先卖给孩子：玩具、卡通怎样训练「想要」。", duration: "约 50 分钟", link: "https://v.qq.com/x/cover/n4fu3ishf0tpnq1.html", hints: ["儿童", "营销", "想要"] },
      ],
    },
    {
      id: "flavorworld",
      heroArt: "./covers/hero/flavorworld.jpg",
      title: "风味人间（第一季）",
      category: "human",
      slot: "B",
      role: "side",
      duration: "约 50 分钟 × 8 集",
      episodeHint: "周末 1 集",
      muscle: "审美",
      blurb: "山海之间的味道：小麦、香料、江湖夜雨。地理与人情都藏在一口热菜里。",
      link: "https://v.qq.com/x/cover/jx7g4sm320sqm7i.html",
      linkLabel: "腾讯视频正版",
      play: "stable",
      shareable: true,
      playNote: "腾讯视频正版第一季 8 集；多数集需 VIP",
      mapPin: "山海 · 风味",
      episodes: [
        { id: "flavorworld-1", n: 1, title: "山海之间", blurb: "从山到海：味道怎样跟着地理走。", duration: "约 50 分钟", link: "https://v.qq.com/x/cover/jx7g4sm320sqm7i.html", hints: ["地理", "食材"] },
        { id: "flavorworld-2", n: 2, title: "落地生根", blurb: "作物迁徙：一种食材怎样在别处安家。", duration: "约 50 分钟", link: "https://v.qq.com/x/cover/jx7g4sm320sqm7i.html", hints: ["迁徙", "作物"] },
        { id: "flavorworld-3", n: 3, title: "滚滚红尘", blurb: "市井烟火：日常一餐里的人间。", duration: "约 50 分钟", link: "https://v.qq.com/x/cover/jx7g4sm320sqm7i.html", hints: ["市井", "烟火"] },
        { id: "flavorworld-4", n: 4, title: "肴变万千", blurb: "同一种料，怎么变成千万种菜。", duration: "约 50 分钟", link: "https://v.qq.com/x/cover/jx7g4sm320sqm7i.html", hints: ["变化", "厨艺"] },
        { id: "flavorworld-5", n: 5, title: "江湖夜雨", blurb: "夜与雨：更软、更鲜的那一口。", duration: "约 50 分钟", link: "https://v.qq.com/x/cover/jx7g4sm320sqm7i.html", hints: ["夜", "鲜"] },
        { id: "flavorworld-6", n: 6, title: "香料歧路", blurb: "香料怎样改写一道菜的命运。", duration: "约 50 分钟", link: "https://v.qq.com/x/cover/jx7g4sm320sqm7i.html", hints: ["香料", "味"] },
        { id: "flavorworld-7", n: 7, title: "万家灯火", blurb: "灯火下的家常：团聚的味道。", duration: "约 50 分钟", link: "https://v.qq.com/x/cover/jx7g4sm320sqm7i.html", hints: ["家常", "团聚"] },
        { id: "flavorworld-8", n: 8, title: "风味之旅", blurb: "收束一季：风味还在路上。", duration: "约 50 分钟", link: "https://v.qq.com/x/cover/jx7g4sm320sqm7i.html", hints: ["旅程", "风味"] },
      ],
    },
    {
      id: "sudongpo",
      heroArt: "./covers/hero/sudongpo.jpg",
      title: "苏东坡",
      category: "human",
      slot: "B",
      role: "side",
      duration: "约 30 分钟 × 6 集",
      episodeHint: "周末 1–2 集",
      muscle: "叙事",
      blurb: "从苏轼到苏东坡：黄州四年，诗文书画与一碗东坡肉。看一个人怎样把苦日子过成风流。",
      link: "https://www.iqiyi.com/a_1pa4vhct4vt.html",
      linkLabel: "爱奇艺正版",
      play: "stable",
      shareable: true,
      playNote: "爱奇艺正版 6 集；多数需会员",
      mapPin: "黄州 · 一词二赋",
      parentNote: "含乌台诗案、贬谪；四年级可陪看前两集建立故事感",
      episodes: [
        { id: "sudongpo-1", n: 1, title: "雪泥鸿爪", blurb: "成名到入狱：人生怎么一下子拐弯。", duration: "约 30 分钟", link: "https://www.iqiyi.com/v_1jygjko81xk.html", hints: ["转折", "乌台"] },
        { id: "sudongpo-2", n: 2, title: "一蓑烟雨", blurb: "黄州苦日子：怎样把自己活成「东坡」。", duration: "约 30 分钟", link: "https://www.iqiyi.com/a_1pa4vhct4vt.html", hints: ["黄州", "超越"] },
        { id: "sudongpo-3", n: 3, title: "大江东去", blurb: "赤壁一词二赋：文学高峰从哪来。", duration: "约 30 分钟", link: "https://www.iqiyi.com/a_1pa4vhct4vt.html", hints: ["赤壁", "文学"] },
        { id: "sudongpo-4", n: 4, title: "成竹在胸", blurb: "书画里的东坡：笔墨怎样安放心情。", duration: "约 30 分钟", link: "https://www.iqiyi.com/a_1pa4vhct4vt.html", hints: ["书画", "审美"] },
        { id: "sudongpo-5", n: 5, title: "千古遗爱", blurb: "为官与爱民：他留下了什么。", duration: "约 30 分钟", link: "https://www.iqiyi.com/a_1pa4vhct4vt.html", hints: ["为政", "民"] },
        { id: "sudongpo-6", n: 6, title: "南渡北归", blurb: "晚年漂泊：乐观怎样扛过最后一程。", duration: "约 30 分钟", link: "https://www.iqiyi.com/a_1pa4vhct4vt.html", hints: ["晚年", "乐观"] },
      ],
    },
    {
      id: "qianxuesen",
      heroArt: "./covers/hero/qianxuesen.jpg",
      title: "钱学森",
      category: "drive",
      slot: "B",
      role: "side",
      duration: "约 45–50 分钟 × 6 集",
      episodeHint: "周末 1 集 · 家长陪看",
      muscle: "意志",
      blurb: "从交大少年到航天：求学、回国、两弹一星。志向怎样变成国家工程里的解题。",
      link: "https://tv.cctv.com/2010/10/26/VIDE1355596422060989.shtml",
      linkLabel: "央视网",
      play: "stable",
      shareable: true,
      playNote: "央视网《钱学森》6 集；手机建议央视影音 App",
      mapPin: "求学 · 回国 · 航天",
      altLink: "http://tv.cctv.com/2012/12/15/VIDA1355584762300647.shtml",
      altLabel: "节目页",
      parentNote: "人物传记偏长，可先看第1集建立兴趣",
      episodes: [
        { id: "qianxuesen-1", n: 1, title: "第一集", blurb: "童年与求学：交大、赴美，志向怎样立下。", duration: "约 50 分钟", link: "https://tv.cctv.com/2010/10/26/VIDE1355596422060989.shtml", hints: ["求学", "志向"] },
        { id: "qianxuesen-2", n: 2, title: "第二集", blurb: "美国岁月：航空理论与回国之路。", duration: "约 50 分钟", link: "http://tv.cctv.com/2012/12/15/VIDA1355584762300647.shtml", hints: ["留学", "回国"] },
        { id: "qianxuesen-3", n: 3, title: "第三集", blurb: "投身国防：导弹与航天怎样起步。", duration: "约 50 分钟", link: "http://tv.cctv.com/2012/12/15/VIDA1355584762300647.shtml", hints: ["导弹", "起步"] },
        { id: "qianxuesen-4", n: 4, title: "第四集", blurb: "工程与组织：大科学怎样做成。", duration: "约 50 分钟", link: "http://tv.cctv.com/2012/12/15/VIDA1355584762300647.shtml", hints: ["工程", "组织"] },
        { id: "qianxuesen-5", n: 5, title: "第五集", blurb: "两弹一星年代：压力与突破。", duration: "约 50 分钟", link: "http://tv.cctv.com/2012/12/15/VIDA1355584762300647.shtml", hints: ["突破", "年代"] },
        { id: "qianxuesen-6", n: 6, title: "第六集", blurb: "晚年与遗产：科学精神留下什么。", duration: "约 50 分钟", link: "http://tv.cctv.com/2012/12/15/VIDA1355584762300647.shtml", hints: ["遗产", "精神"] },
      ],
    },
    {
      id: "sleepten",
      heroArt: "./covers/hero/sleepten.jpg",
      title: "睡眠十律",
      category: "nature",
      slot: "A",
      role: "side",
      duration: "约 50–60 分钟 × 1",
      episodeHint: "可拆两晚 · 自家先看",
      muscle: "生物",
      blurb: "为什么睡不着？热水澡、光线、咖啡、打鼾……十个实验讲清睡好觉的科学。",
      link: "https://open.163.com/newview/movie/free?mid=MDNU7H077",
      linkLabel: "网易公开课（备）",
      play: "ok",
      shareable: false,
      playNote: "仅自家先看：大陆稳定正版页未坐实；可搜「睡眠十律」或网易公开课分段",
      mapPin: "入睡 · 生物钟",
      altLink: "http://www.iqiyi.com/v_19rrjysjh4.html",
      altLabel: "爱奇艺（旧链·备）",
      parentNote: "正版不稳，不进今日推荐；家长先确认能播再陪看",
    },
    {
      id: "helloai",
      heroArt: "./covers/hero/helloai.jpg",
      title: "你好 AI",
      category: "nature",
      slot: "B",
      role: "side",
      duration: "约 18 分钟 × 5 集",
      episodeHint: "周末 1–2 集",
      muscle: "实验",
      blurb: "AI 怎样帮人：探索火星、修壁画、护东北虎。短集科技人文，看机器怎样当助手。",
      link: "https://www.bilibili.com/bangumi/media/md28222042",
      linkLabel: "B 站正版",
      play: "stable",
      shareable: true,
      playNote: "B 站正版番剧 5 集；部分集可能需大会员",
      mapPin: "助手 · 应用",
      parentNote: "题材友好；可先看《传承》《守护》",
      episodes: [
        { id: "helloai-1", n: 1, title: "探索", blurb: "太空与机器人：AI 怎样帮人走更远。", duration: "约 18 分钟", link: "https://www.bilibili.com/bangumi/media/md28222042", hints: ["太空", "机器人"] },
        { id: "helloai-2", n: 2, title: "传承", blurb: "壁画与长城：AI 怎样留住文化遗产。", duration: "约 18 分钟", link: "https://www.bilibili.com/bangumi/media/md28222042", hints: ["敦煌", "保护"] },
        { id: "helloai-3", n: 3, title: "记忆", blurb: "濒危语言与文化：怎样被记录下来。", duration: "约 18 分钟", link: "https://www.bilibili.com/bangumi/media/md28222042", hints: ["语言", "记忆"] },
        { id: "helloai-4", n: 4, title: "健康", blurb: "医疗与农业：AI 怎样帮人治病、种地。", duration: "约 18 分钟", link: "https://www.bilibili.com/bangumi/media/md28222042", hints: ["医疗", "农业"] },
        { id: "helloai-5", n: 5, title: "守护", blurb: "东北虎与生态：AI 怎样护野生动物。", duration: "约 18 分钟", link: "https://www.bilibili.com/bangumi/media/md28222042", hints: ["生态", "保护"] },
      ],
    },
    {
      id: "firsts",
      heroArt: "./covers/hero/firsts.jpg",
      title: "人生第一次",
      category: "drive",
      slot: "B",
      role: "side",
      duration: "约 25–35 分钟 × 12 集",
      episodeHint: "优先「入学」「长大」· 家长选片",
      muscle: "选择",
      blurb: "出生、入学、长大、当兵、上班……中国人一生里那些「第一次」。看普通人怎样做选择题。",
      link: "https://www.bilibili.com/bangumi/media/md28227065",
      linkLabel: "B 站正版",
      play: "stable",
      shareable: true,
      playNote: "B 站正版番剧 12 集；备用央视网专题",
      mapPin: "第一次 · 选择",
      altLink: "https://v.cctv.com/jishi/rsdyc/index.shtml",
      altLabel: "央视网专题",
      parentNote: "《出生》《结婚》《告别》等偏成人，四年级请先选《入学》《长大》；全程建议家长选片",
      episodes: [
        { id: "firsts-1", n: 1, title: "出生", blurb: "新生命到来：医院里的第一次挑战。（家长慎选）", duration: "约 30 分钟", link: "https://tv.cctv.com/2020/05/23/VIDE3S46KAvfUypiCk3IocCv200523.shtml", hints: ["出生", "家长选"] },
        { id: "firsts-2", n: 2, title: "入学", blurb: "第一次走进小学：选择、适应与眼泪。", duration: "约 30 分钟", link: "https://www.bilibili.com/bangumi/media/md28227065", hints: ["入学", "适应"] },
        { id: "firsts-3", n: 3, title: "长大", blurb: "大山里的诗与课：怎样一点点长大。", duration: "约 30 分钟", link: "https://www.bilibili.com/bangumi/media/md28227065", hints: ["长大", "留守"] },
        { id: "firsts-4", n: 4, title: "当兵", blurb: "第一次穿上军装：训练与第一次跳。", duration: "约 30 分钟", link: "https://www.bilibili.com/bangumi/media/md28227065", hints: ["当兵", "训练"] },
        { id: "firsts-5", n: 5, title: "上班", blurb: "第一次工作：普通人怎样站上岗位。", duration: "约 30 分钟", link: "https://www.bilibili.com/bangumi/media/md28227065", hints: ["上班", "自立"] },
        { id: "firsts-6", n: 6, title: "进城", blurb: "第一次进城讨生活：选择与坚持。", duration: "约 30 分钟", link: "https://www.bilibili.com/bangumi/media/md28227065", hints: ["进城", "选择"] },
      ],
    },
    {
      id: "littlehuman",
      heroArt: "./covers/hero/littlehuman.jpg",
      title: "小小人类星球",
      category: "human",
      slot: "A",
      role: "side",
      duration: "约 5 分钟 × 16 集",
      episodeHint: "一晚 2–3 集 · 自家先看",
      muscle: "叙事",
      blurb: "世界各地小朋友的一天：打水、搭蒙古包、采山药。短、暖，打开「别人的生活」。",
      link: "https://www.bilibili.com/video/BV169K8zJEd2/",
      linkLabel: "B 站直达",
      play: "ok",
      shareable: false,
      playNote: "仅自家先看：暂无央视/番剧/腾讯·爱奇艺正版页；当前为投稿合集，可能下架",
      mapPin: "各地童年 · 5 分钟",
      parentNote: "正版未坐实，不进今日推荐；家长先确认能播",
    },
'''

COVERS = [
    ("hero-mademenspend.png", "mademenspend"),
    ("hero-flavorworld.png", "flavorworld"),
    ("hero-sudongpo.png", "sudongpo"),
    ("hero-qianxuesen.png", "qianxuesen"),
    ("hero-sleepten.png", "sleepten"),
    ("hero-helloai.png", "helloai"),
    ("hero-firsts.png", "firsts"),
    ("hero-littlehuman.png", "littlehuman"),
]


def crop_16x9(im: Image.Image) -> Image.Image:
    im = im.convert("RGB")
    w, h = im.size
    t = 16 / 9
    if w / h > t:
        nw = int(h * t)
        left = (w - nw) // 2
        im = im.crop((left, 0, left + nw, h))
    elif w / h < t:
        nh = int(w / t)
        top = (h - nh) // 2
        im = im.crop((0, top, w, top + nh))
    return im


def main():
    # Fix sleepten link: NetEase open course for Men Who Made Us Spend was wrong mid;
    # use search-friendly note — keep iqiyi as primary for sleep ok entry
    # Actually leave as written; open.163 may 404 — swap sleepten primary to iqiyi
    global ENTRIES
    ENTRIES = ENTRIES.replace(
        'link: "https://open.163.com/newview/movie/free?mid=MDNU7H077",\n      linkLabel: "网易公开课（备）",',
        'link: "http://www.163.com/opencourse/detail/video-JHKF1S4IB-YHKF1S4QL",\n      linkLabel: "网易公开课",',
    ).replace(
        'altLink: "http://www.iqiyi.com/v_19rrjysjh4.html",\n      altLabel: "爱奇艺（旧链·备）",',
        'altLink: "http://www.iqiyi.com/v_19rrjysjh4.html",\n      altLabel: "爱奇艺（旧链·备）",',
    )

    data_path = ROOT / "data.js"
    text = data_path.read_text(encoding="utf-8")
    for tid in [
        "mademenspend",
        "flavorworld",
        "sudongpo",
        "qianxuesen",
        "sleepten",
        "helloai",
        "firsts",
        "littlehuman",
    ]:
        if f'id: "{tid}"' in text:
            raise SystemExit(f"already present: {tid}")

    needle = "  ],\n};"
    idx = text.rfind(needle)
    if idx < 0:
        raise SystemExit("closing not found")
    # insert before last titles closing — the needle matches categories? 
    # DOC_CATALOG ends with titles array then };
    # Find the last occurrence of englishadv block end
    marker = '      id: "englishadv",'
    m = text.find(marker)
    if m < 0:
        raise SystemExit("englishadv not found")
    # find end of englishadv object: after its episodes closing
    end_marker = '        { id: "englishadv-8"'
    e = text.find(end_marker, m)
    if e < 0:
        raise SystemExit("englishadv-8 not found")
    # find closing of englishadv object after episodes
    close = text.find("\n    },\n  ],\n};", e)
    if close < 0:
        raise SystemExit("englishadv close not found")
    insert_at = close + len("\n    },")
    new_text = text[:insert_at] + "," + ENTRIES.rstrip() + text[insert_at:]
    data_path.write_text(new_text, encoding="utf-8")
    print("data.js updated")

    hero_dir = ROOT / "covers" / "hero"
    thumb_dir = ROOT / "covers" / "thumb"
    hero_dir.mkdir(parents=True, exist_ok=True)
    thumb_dir.mkdir(parents=True, exist_ok=True)
    for src_name, stem in COVERS:
        src = ASSETS / src_name
        if not src.exists():
            print("MISSING", src)
            continue
        im = crop_16x9(Image.open(src))
        hero = hero_dir / f"{stem}.jpg"
        thumb = thumb_dir / f"{stem}.jpg"
        im.resize((1600, 900), Image.Resampling.LANCZOS).save(
            hero, "JPEG", quality=72, optimize=True, progressive=True
        )
        im.resize((960, 540), Image.Resampling.LANCZOS).save(
            thumb, "JPEG", quality=62, optimize=True, progressive=True
        )
        print(stem, hero.stat().st_size, thumb.stat().st_size)


if __name__ == "__main__":
    main()
