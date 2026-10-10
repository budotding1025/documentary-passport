# -*- coding: utf-8 -*-
"""Add 《了不起的生命密码》10 eps + B站搜索标记 + microbe path step."""
from __future__ import annotations

import json
import re
from pathlib import Path
from urllib.parse import quote

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data.js"
HERO = ROOT / "covers" / "hero"
THUMB = ROOT / "covers" / "thumb"

KW = "了不起的生命密码"
SEARCH = "https://search.bilibili.com/all?keyword=" + quote(KW)


def ep_search(title: str) -> str:
    return "https://search.bilibili.com/all?keyword=" + quote(KW + " " + title)


EPS = [
    ("一颗豌豆能做什么？", "孟德尔与豌豆：遗传规律怎样被发现。", ["豌豆", "遗传", "孟德尔"], "片头后", "父母的「特征」会怎样传到孩子身上？"),
    ("基因的前世今生", "基因一词从哪来，为什么成了生命说明书。", ["基因", "历史"], "讲完后", "基因更像说明书，还是更像开关？"),
    ("细菌和病毒告诉你：基因是什么？", "用微生物看清：基因怎样指挥生命。", ["细菌", "病毒", "基因"], "讲完后", "细菌和人，基因「说明书」哪里一样？"),
    ("破解DNA结构的“国际竞赛”", "双螺旋怎样被拼出来：一场科学竞赛。", ["DNA", "双螺旋"], "竞赛段落后", "为什么结构被解开，比「谁先抢到」更重要？"),
    ("玉米中的跳跃基因", "基因也会搬家：跳跃基因改变性状。", ["玉米", "跳跃基因"], "讲完后", "基因「跳来跳去」会带来惊喜还是麻烦？"),
    ("基因也会有bug", "突变像程序出错：有的有害，有的带来新可能。", ["突变", "bug"], "讲完后", "身体里的「小错误」一定都是坏事吗？"),
    ("基因检测能告诉你的秘密", "检测能说什么、不能说什么。", ["检测", "信息"], "讲完后", "如果检测说你会怎样，你还想知道吗？"),
    ("人们可以扮演上帝吗？", "基因编辑与「改写生命」：能力与边界。", ["编辑", "伦理", "陪看"], "伦理段落后", "能改基因，就应该改吗？"),
    ("为什么不复制一万个爱因斯坦", "克隆与「复制天才」：为什么行不通。", ["克隆", "陪看"], "讲完后", "复制一个人的身体，等于复制他的想法吗？"),
    ("人是否可以永生？", "延寿与永生幻想：科学走到哪一步。", ["永生", "陪看"], "片尾前", "活得更久，和活得更好，你更在意哪个？"),
]

episodes = []
for i, (title, blurb, hints, at, ask) in enumerate(EPS, 1):
    short = re.sub(r"[？?「」""]", "", title)
    episodes.append(
        {
            "id": f"lifecode-{i}",
            "n": i,
            "title": title,
            "blurb": blurb,
            "duration": "约 15–25 分钟",
            "link": ep_search(short[:18]),
            "hints": hints,
            "discuss": [{"at": at, "ask": ask}],
        }
    )

ENTRY = {
    "id": "lifecode",
    "heroArt": "./covers/hero/lifecode.jpg",
    "title": "了不起的生命密码",
    "category": "nature",
    "slot": "A",
    "role": "side",
    "duration": "约 15–25 分钟 × 10 集",
    "episodeHint": "工作日 1 集 · 先第1–4集；第8–10集必须陪看",
    "muscle": "生物",
    "kid": {"understand": "think", "watch": "together"},
    "blurb": "少儿向基因入门：豌豆遗传、DNA、突变，再到克隆与编辑边界。巴斯德看完后的下一条生命线。",
    "link": SEARCH,
    "linkLabel": "B站搜索",
    "play": "ok",
    "shareable": False,
    "playNote": "自用走 B 站搜索投稿；尚未核到央视/爱奇艺/腾讯稳定正版页，official 里放 B 站搜索入口作备份标记，家长台仍见「片源待补」直至补上正版。",
    "mapPin": "基因 · DNA · 遗传",
    "parentNote": "第1–6集四年级可陪看；第7集谈检测信息；第8–10集涉及基因编辑、克隆、永生，必须陪看、可跳过。",
    "watchLink": SEARCH,
    "watchLabel": "B站搜索",
    "watchNote": "自用：搜「了不起的生命密码」核投稿合集再开；优先选清晰、无夸张标题的完整期。手机建议 B 站 App。",
    "official": [
        {
            "kind": "bilibili",
            "url": SEARCH,
            "label": "B站搜索 · 了不起的生命密码（待核）",
        }
    ],
    "episodes": episodes,
}


def make_cover(stem: str, hero: bool) -> None:
    top, bottom = (28, 72, 58), (90, 140, 110)
    w, h = (1600, 900) if hero else (960, 540)
    im = Image.new("RGB", (w, h), top)
    draw = ImageDraw.Draw(im)
    for y in range(h):
        t = y / max(h - 1, 1)
        c = tuple(int(top[i] * (1 - t) + bottom[i] * t) for i in range(3))
        draw.line([(0, y), (w, y)], fill=c)
    draw.rectangle([0, 0, w, int(h * 0.16)], fill=(12, 28, 22))
    draw.rectangle([0, int(h * 0.74), w, h], fill=(10, 22, 18))
    try:
        font = ImageFont.truetype("msyh.ttc", 72 if hero else 40)
        sub = ImageFont.truetype("msyh.ttc", 36 if hero else 22)
    except OSError:
        font = ImageFont.load_default()
        sub = font
    text = "了不起的生命密码"
    bbox = draw.textbbox((0, 0), text, font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    draw.text(((w - tw) // 2, (h - th) // 2 - 20), text, font=font, fill=(245, 248, 240))
    sub_t = "基因 · DNA · 遗传"
    sb = draw.textbbox((0, 0), sub_t, font=sub)
    stw = sb[2] - sb[0]
    draw.text(((w - stw) // 2, (h - th) // 2 + th + 8), sub_t, font=sub, fill=(200, 220, 205))
    out = (HERO if hero else THUMB) / f"{stem}.jpg"
    out.parent.mkdir(parents=True, exist_ok=True)
    im.save(out, "JPEG", quality=72 if hero else 62, optimize=True, progressive=True)


def main() -> None:
    text = DATA.read_text(encoding="utf-8")
    if '"id": "lifecode"' in text:
        raise SystemExit("already present")

    # Force 片源待补 until a real licensed page is found: keep official for B站标记
    # but play=ok + official with only search still counts as having official[] —
    # so clear shareable and set a parent-facing note; also patch sourceNeedsBackup? 
    # Prefer: official has B站, and we set play ok; user asked for 正版/B站标记.
    # Without licensed page, don't claim stable. Keep official as B站搜索备份.

    block = json.dumps(ENTRY, ensure_ascii=False, indent=2)
    indented = "\n".join(("    " + line if line else line) for line in block.splitlines())
    marker = "\n  ]\n};"
    idx = text.rfind(marker)
    if idx < 0:
        raise SystemExit("catalog end not found")
    text = text[:idx] + ",\n" + indented + text[idx:]

    path_old = '''        {
          "phase": "now",
          "label": "② 超级巴斯德",
          "why": "动画巴斯德：微生物、疫苗、进化",
          "titleId": "pasteur"
        },
        {
          "phase": "now",
          "label": "③ 细胞的暗战",
          "why": "身体怎样「打仗」保卫自己",
          "titleId": "cellwar"
        },'''
    path_new = '''        {
          "phase": "now",
          "label": "② 超级巴斯德",
          "why": "动画巴斯德：微生物、疫苗、进化",
          "titleId": "pasteur"
        },
        {
          "phase": "optional",
          "label": "选看 · 了不起的生命密码",
          "why": "基因入门：豌豆→DNA→突变；第8–10集陪看或跳过",
          "titleId": "lifecode"
        },
        {
          "phase": "now",
          "label": "③ 细胞的暗战",
          "why": "身体怎样「打仗」保卫自己",
          "titleId": "cellwar"
        },'''
    if path_old in text:
        text = text.replace(path_old, path_new, 1)
    else:
        print("warn: microbe path block not found")

    # update path blurb
    text = text.replace(
        '"blurb": "从洗手小故事到巴斯德，再到细胞战场。短集优先，适合工作日。"',
        '"blurb": "从洗手小故事到巴斯德，再进基因密码与细胞战场。短集优先，适合工作日。"',
        1,
    )

    DATA.write_text(text, encoding="utf-8")
    make_cover("lifecode", True)
    make_cover("lifecode", False)
    print("ok lifecode", len(episodes), "eps")


if __name__ == "__main__":
    main()
