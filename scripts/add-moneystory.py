# -*- coding: utf-8 -*-
"""Add CCTV 《货币的故事》 4 episodes + cover placeholders."""
from __future__ import annotations

import json
import re
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data.js"
HERO = ROOT / "covers" / "hero"
THUMB = ROOT / "covers" / "thumb"

ENTRY = {
  "id": "moneystory",
  "heroArt": "./covers/hero/moneystory.jpg",
  "title": "货币的故事",
  "category": "finance",
  "slot": "B",
  "role": "side",
  "duration": "约 45–50 分钟 × 4 集",
  "episodeHint": "周末 1 集 · 建议先第1集；第4集偏虚拟货币，陪看",
  "muscle": "商业",
  "kid": {"understand": "think", "watch": "together"},
  "blurb": "央视四集：从以物易物到交子，再到数字货币。钱的形态在变，信任没变。",
  "link": "https://tv.cctv.com/2026/03/27/VIDEqzu5uIItIpesj950lAx6260327.shtml",
  "linkLabel": "央视网",
  "play": "stable",
  "shareable": True,
  "playNote": "正版备份 1 条 · 自用走 watchLink；节目页可选集",
  "mapPin": "以物易物 · 交子 · 信任",
  "parentNote": "第4集讲虚拟货币与价值信任，建议陪看；前三集四年级可陪看讨论",
  "altLink": "https://tv.cctv.com/2026/03/27/VIDAyWpegNTrwqIcb3KjtEY6260327.shtml",
  "altLabel": "央视节目页",
  "watchLink": "https://tv.cctv.com/2026/03/27/VIDEqzu5uIItIpesj950lAx6260327.shtml",
  "watchLabel": "央视网",
  "watchNote": "自用现开第1集；节目总页可切第2–4集。手机建议央视影音 App。",
  "official": [
    {
      "kind": "cctv",
      "url": "https://tv.cctv.com/2026/03/27/VIDAyWpegNTrwqIcb3KjtEY6260327.shtml",
      "label": "央视网 · 货币的故事"
    }
  ],
  "episodes": [
    {
      "id": "moneystory-1",
      "n": 1,
      "title": "人类发明了货币",
      "blurb": "以物易物为什么不够用：钱是怎样被发明出来的。",
      "duration": "约 45 分钟",
      "link": "https://tv.cctv.com/2026/03/27/VIDEqzu5uIItIpesj950lAx6260327.shtml",
      "hints": ["交换", "发明", "物物"]
    },
    {
      "id": "moneystory-2",
      "n": 2,
      "title": "帝国时代",
      "blurb": "帝国怎样用货币管贸易、战争与统治。",
      "duration": "约 45 分钟",
      "link": "https://tv.cctv.com/2026/03/28/VIDEfPcpUNwRaHTskyocj97W260328.shtml",
      "hints": ["帝国", "贸易", "统治"]
    },
    {
      "id": "moneystory-3",
      "n": 3,
      "title": "中国之路",
      "blurb": "交子诞生：世界上第一张纸币怎样改写规则。",
      "duration": "约 45 分钟",
      "link": "https://tv.cctv.com/2026/03/28/VIDEV9MckihwIW4cfmApEDkr260328.shtml",
      "hints": ["交子", "纸币", "宋朝"]
    },
    {
      "id": "moneystory-4",
      "n": 4,
      "title": "货币的虚拟化",
      "blurb": "从金属到纸再到数字：钱的价值来自信任。",
      "duration": "约 45 分钟",
      "link": "https://tv.cctv.com/2026/03/29/VIDEiS6cx2NGc0A7h0AMw3vl260329.shtml",
      "hints": ["虚拟", "信任", "价值"]
    }
  ]
}


def make_cover(stem: str, hero: bool) -> None:
  top, bottom = (70, 55, 35), (160, 130, 80)
  w, h = (1600, 900) if hero else (960, 540)
  im = Image.new("RGB", (w, h), top)
  draw = ImageDraw.Draw(im)
  for y in range(h):
    t = y / max(h - 1, 1)
    c = tuple(int(top[i] * (1 - t) + bottom[i] * t) for i in range(3))
    draw.line([(0, y), (w, y)], fill=c)
  draw.rectangle([0, 0, w, int(h * 0.16)], fill=(18, 16, 12))
  draw.rectangle([0, int(h * 0.74), w, h], fill=(12, 10, 8))
  try:
    font = ImageFont.truetype("msyh.ttc", 78 if hero else 44)
  except OSError:
    font = ImageFont.load_default()
  text = "货币的故事"
  bbox = draw.textbbox((0, 0), text, font=font)
  tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
  draw.text(((w - tw) // 2, (h - th) // 2), text, font=font, fill=(245, 238, 220))
  out = (HERO if hero else THUMB) / f"{stem}.jpg"
  out.parent.mkdir(parents=True, exist_ok=True)
  im.save(out, "JPEG", quality=72 if hero else 62, optimize=True, progressive=True)


def main() -> None:
  text = DATA.read_text(encoding="utf-8")
  if '"id": "moneystory"' in text:
    raise SystemExit("already present")
  block = json.dumps(ENTRY, ensure_ascii=False, indent=2)
  indented = "\n".join(("    " + line if line else line) for line in block.splitlines())
  marker = "\n  ]\n};"
  idx = text.rfind(marker)
  if idx < 0:
    raise SystemExit("catalog end not found")
  text = text[:idx] + ",\n" + indented + text[idx:]

  # wire into econ path + home carousel
  old = '''          ["money", "货币", "money-2"],
          ["kidmoney", "财商"],'''
  # path in data.js
  path_old = '''        {
          "phase": "optional",
          "label": "选看 · 货币从哪来",
          "why": "先看第 2 集；后面通胀先别追",
          "titleId": "money",
          "episodeId": "money-2"
        },'''
  path_new = '''        {
          "phase": "optional",
          "label": "选看 · 货币从哪来",
          "why": "先看第 2 集；后面通胀先别追",
          "titleId": "money",
          "episodeId": "money-2"
        },
        {
          "phase": "optional",
          "label": "选看 · 货币的故事",
          "why": "四集短线：发明货币 → 交子 → 虚拟化；可与《货币》对照",
          "titleId": "moneystory"
        },'''
  if path_old in text:
    text = text.replace(path_old, path_new, 1)
  else:
    print("warn: econ path optional money block not found")

  DATA.write_text(text, encoding="utf-8")
  make_cover("moneystory", True)
  make_cover("moneystory", False)
  print("ok moneystory")


if __name__ == "__main__":
  main()
