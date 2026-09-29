# -*- coding: utf-8 -*-
"""Add CCTV 《资本的故事》第一季 (official jingji.cctv.com pages)."""
from __future__ import annotations

import io
import json
import re
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data.js"
HERO = ROOT / "covers" / "hero" / "capitalstory.jpg"
THUMB = ROOT / "covers" / "thumb" / "capitalstory.jpg"

# Dated VIDE slugs from the CCTV special page (order ≈ broadcast order).
S1_SLUGS = [
    "2013/01/08/VIDE1357612213762880",
    "2013/01/09/VIDE1357697917540341",
    "2013/01/10/VIDE1357782133353155",
    "2013/01/14/VIDE1358129713212840",
    "2013/01/15/VIDE1358218111715493",
    "2013/01/16/VIDE1358302351613678",
    "2013/01/17/VIDE1358389127933890",
    "2013/01/17/VIDE1358412483859715",
    "2013/01/17/VIDE1358412739384674",
    "2013/01/18/VIDE1358475177555295",
    "2013/01/21/VIDE1358733968669790",
    "2013/01/22/VIDE1358820382865737",
    "2013/01/23/VIDE1358907505111927",
    "2013/01/24/VIDE1358993343531372",
    "2013/01/25/VIDE1359079411759539",
    "2013/01/31/VIDE1359600863836161",
    "2013/01/31/VIDE1359601030597619",
    "2013/01/31/VIDE1359601036563651",
]

FALLBACK = [
    "股份的力量",
    "泡沫的诱惑",
    "南海骗局",
    "汉密尔顿的旋转门",
    "梧桐树下的承诺",
    "给风险定价",
    "注水的股票",
    "巨人的诞生",
    "镀金的美元",
    "风险的价值",
    "日本泡沫",
    "八佰伴倒闭",
    "门口的野蛮人",
    "英镑狙击手",
    "破碎的梦之队",
    "创新的温床",
    "峭壁边缘的华尔街",
    "华尔街的3A游戏",
]


def fetch(url: str) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=25) as resp:
        return resp.read()


def decode_html(raw: bytes) -> str:
    for enc in ("utf-8", "gb18030", "gbk"):
        try:
            text = raw.decode(enc)
        except UnicodeDecodeError:
            continue
        if re.search(r"[\u4e00-\u9fff]{2}", text):
            return text
    return raw.decode("utf-8", errors="ignore")


def clean_title(raw: str, fallback: str) -> str:
    t = raw.strip()
    m = re.search(r"\]([^（(_\[]+)", t)
    if m:
        t = m.group(1).strip()
    t = re.sub(r"^《资本的故事》\s*", "", t)
    t = re.sub(r"\s*第.+$", "", t)
    t = t.split("_")[0].strip()
    if not t or "资本的故事" in t or len(t) > 18:
        return fallback
    return t


def page_title(url: str, fallback: str) -> str:
    html = decode_html(fetch(url))
    m = re.search(r"<title>([^<]+)</title>", html, re.I)
    return clean_title(m.group(1) if m else "", fallback)


def download_art() -> None:
    HERO.parent.mkdir(parents=True, exist_ok=True)
    THUMB.parent.mkdir(parents=True, exist_ok=True)
    req = urllib.request.Request(
        "https://api.bilibili.com/x/web-interface/view?bvid=BV1TM411C7YV",
        headers={"User-Agent": "Mozilla/5.0"},
    )
    meta = json.load(urllib.request.urlopen(req, timeout=20))["data"]
    pic = meta["pic"]
    if pic.startswith("//"):
        pic = "https:" + pic
    raw = fetch(pic)
    from PIL import Image

    im = Image.open(io.BytesIO(raw)).convert("RGB")
    im.save(HERO, "JPEG", quality=85, optimize=True)
    im.resize((960, 540), Image.Resampling.LANCZOS).save(
        THUMB, "JPEG", quality=62, optimize=True, progressive=True
    )
    print("art ok", HERO.stat().st_size, THUMB.stat().st_size)


def build_episodes() -> list[dict]:
    eps = []
    for i, slug in enumerate(S1_SLUGS):
        url = f"https://jingji.cctv.com/{slug}.shtml"
        fb = FALLBACK[i]
        try:
            title = page_title(url, fb)
        except Exception as exc:
            print("fail", url, exc)
            title = fb
        n = i + 1
        eps.append(
            {
                "id": f"capitalstory-{n}",
                "n": n,
                "title": title,
                "blurb": "约 8 分钟。资本史上一个独立小故事。",
                "duration": "约 8 分钟",
                "link": url,
                "hints": ["资本", "股票", "公司", title[:8]],
            }
        )
        print(f"{n:02d} {title}")
    return eps


def insert_title(eps: list[dict]) -> None:
    entry = {
        "id": "capitalstory",
        "heroArt": "./covers/hero/capitalstory.jpg",
        "title": "资本的故事（第一季）",
        "category": "finance",
        "slot": "A",
        "role": "side",
        "duration": f"约 8 分钟 × {len(eps)} 集",
        "episodeHint": "工作日很合适 · 一集一个故事",
        "muscle": "商业",
        "blurb": "央视财经微纪录：股票从哪来、泡沫怎么破、公司怎样靠资本长大。每集约 8 分钟。",
        "link": eps[0]["link"],
        "linkLabel": "央视网",
        "play": "stable",
        "shareable": True,
        "playNote": "正版备份 1 条 · 自用走 watchLink；工具前可再补 1 条",
        "mapPin": "股票 · 泡沫 · 公司",
        "parentNote": "讲金融危机、骗局与杠杆，偏成人财经；建议家长陪看前几集再决定追不追",
        "watchLink": eps[0]["link"],
        "watchLabel": "央视网",
        "watchNote": "自用：央视财经《资本的故事》第一季正版页。第二、三季可再补。",
        "official": [
            {
                "kind": "cctv",
                "url": "https://jingji.cctv.com/special/zbgs/wjlp/index.shtml",
                "label": "央视网专题 · 第一季",
            }
        ],
        "episodes": eps,
    }
    text = DATA.read_text(encoding="utf-8")
    if '"id": "capitalstory"' in text:
        raise SystemExit("already present")
    block = json.dumps(entry, ensure_ascii=False, indent=2)
    indented = "\n".join(("      " + line if line else line) for line in block.splitlines())
    for needle in (
        '    {\n      "id": "econmachine",',
        '    {\n      "id": "ccecon",',
        '    {\n      "id": "money",',
    ):
        if needle in text:
            DATA.write_text(text.replace(needle, indented + ",\n" + needle, 1), encoding="utf-8")
            print("inserted before", needle)
            return
    raise SystemExit("insert point missing")


def main() -> None:
    download_art()
    eps = build_episodes()
    insert_title(eps)


if __name__ == "__main__":
    main()
