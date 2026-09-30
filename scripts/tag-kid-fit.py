# -*- coding: utf-8 -*-
"""Add kid-fit tags to every title in data.js (no grade wording)."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data.js"

# understand: easy | think | hard
# watch: solo | together | parent
# Labels shown in UI (Chinese):
#   easy→好懂  think→要想一想  hard→偏难
#   solo→可自己看  together→建议陪看  parent→必须陪看

TAGS = {
    # drive
    "xiaoxiao": ("easy", "solo"),
    "kipchoge": ("think", "together"),
    "richpoor": ("hard", "parent"),
    "sevenup": ("hard", "parent"),
    "schoolroad": ("easy", "together"),
    "qianxuesen": ("think", "together"),
    "firsts": ("think", "together"),
    "surveil": ("hard", "parent"),
    # nature
    "crow": ("easy", "solo"),
    "bigscience": ("think", "solo"),
    "allusionsci": ("easy", "solo"),
    "mendeleev": ("think", "solo"),
    "starshift": ("think", "solo"),
    "mathchosen": ("think", "solo"),
    "electricstory": ("think", "solo"),
    "beautychem": ("think", "together"),
    "planet": ("easy", "solo"),
    "greenplanet": ("easy", "solo"),
    "ourplanet": ("easy", "together"),
    "blueplanet": ("easy", "solo"),
    "frozen": ("easy", "together"),
    "sevenworlds": ("easy", "together"),
    "wildchina": ("easy", "solo"),
    "humanbody": ("think", "together"),
    "life": ("think", "solo"),
    "germsquad": ("easy", "solo"),
    "pasteur": ("easy", "solo"),
    "bodymicro": ("think", "solo"),
    "cellwar": ("think", "solo"),
    "bacteriasecret": ("think", "solo"),
    "microcosmos": ("think", "solo"),
    "wonders": ("think", "solo"),
    "dimensions": ("hard", "together"),
    "thecode": ("hard", "together"),
    "logicjoy": ("think", "solo"),
    "newtoncoach": ("think", "solo"),
    "mathstory": ("think", "solo"),
    "sleepten": ("easy", "together"),
    "helloai": ("easy", "solo"),
    "curiosity": ("easy", "together"),
    # human
    "guobao": ("easy", "solo"),
    "qimiao": ("easy", "solo"),
    "letters": ("think", "together"),
    "zicong": ("think", "solo"),
    "heyi": ("think", "together"),
    "histfun": ("easy", "solo"),
    "howpaint": ("easy", "solo"),
    "artfun": ("easy", "solo"),
    "judgeyes": ("hard", "parent"),
    "designah": ("easy", "solo"),
    "aerial": ("easy", "solo"),
    "englishadv": ("think", "together"),
    "flavorworld": ("easy", "solo"),
    "sudongpo": ("think", "together"),
    "littlehuman": ("easy", "together"),
    # finance
    "supereng": ("think", "solo"),
    "howmade": ("easy", "solo"),
    "materialsecret": ("think", "solo"),
    "qingzang": ("think", "solo"),
    "antarcticbase": ("think", "solo"),
    "skytree": ("think", "solo"),
    "bridges": ("think", "solo"),
    "capitalstory": ("think", "together"),
    "econmachine": ("think", "together"),
    "ccecon": ("think", "together"),
    "money": ("think", "together"),
    "clarksonfarm": ("think", "parent"),
    "mademenspend": ("hard", "parent"),
}


def infer_from_parent(parent: str) -> tuple[str, str] | None:
    if not parent:
        return None
    if re.search(r"必须家长|务必陪|禁止孩子|不适合孩子", parent):
        return ("hard", "parent")
    if re.search(r"家长陪|建议家长|建议陪|陪看", parent):
        return ("think", "together")
    return None


def main() -> None:
    text = DATA.read_text(encoding="utf-8")
    # Document field in header comment once.
    if "kid: { understand, watch }" not in text:
        text = text.replace(
            " * blurb: 卡片外可见的一句话简介\n",
            " * blurb: 卡片外可见的一句话简介\n"
            " * kid: { understand: easy|think|hard, watch: solo|together|parent }\n"
            " *   界面：好懂/要想一想/偏难 · 可自己看/建议陪看/必须陪看（不标年级）\n",
            1,
        )

    ids = re.findall(r'"id": "([^"]+)"\s*,\s*\n\s*"heroArt"', text)
    missing = []
    for tid in ids:
        if '"id": "%s"' % tid not in text:
            continue
        # Find object start and insert kid after muscle or blurb if absent.
        pat = re.compile(
            r'("id": "%s"[\s\S]*?)(\n      "(?:blurb|mapPin|parentNote|link)")' % re.escape(tid),
            re.M,
        )
        m = pat.search(text)
        if not m:
            missing.append(tid + ":block")
            continue
        block = text[m.start() : m.end()]
        if '"kid":' in block:
            # replace existing kid object
            text = re.sub(
                r'("id": "%s"[\s\S]*?"kid":\s*)\{[^}]*\}' % re.escape(tid),
                r"\1__KID__",
                text,
                count=1,
            )
        parent_m = re.search(
            r'"id": "%s"[\s\S]*?"parentNote": "([^"]*)"' % re.escape(tid), text
        )
        parent = parent_m.group(1) if parent_m else ""
        pair = TAGS.get(tid) or infer_from_parent(parent) or ("think", "solo")
        kid_json = json.dumps(
            {"understand": pair[0], "watch": pair[1]}, ensure_ascii=False
        )
        if "__KID__" in text:
            text = text.replace("__KID__", kid_json, 1)
            continue
        # Insert after muscle line if present, else after episodeHint.
        ins = None
        for key in ("muscle", "episodeHint", "role", "slot"):
            mm = re.search(
                r'("id": "%s"[\s\S]*?"%s": "[^"]*",)' % (re.escape(tid), key),
                text,
            )
            if mm:
                ins = mm.end()
                break
        if ins is None:
            missing.append(tid + ":insert")
            continue
        text = text[:ins] + '\n      "kid": ' + kid_json + "," + text[ins:]

    DATA.write_text(text, encoding="utf-8")
    tagged = len(re.findall(r'"kid":\s*\{', text))
    print("tagged objects", tagged, "title ids", len(ids))
    if missing:
        print("missing", missing)


if __name__ == "__main__":
    main()
