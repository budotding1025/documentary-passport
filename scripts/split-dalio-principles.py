# -*- coding: utf-8 -*-
"""Split Dalio Principles for Success into 8 weekday-length episodes."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data.js"

# Official free HD (Principles by Ray Dalio / YouTube). Chapter starts in seconds.
YT_FULL = "https://www.youtube.com/watch?v=B9XGUpQZY38"
YT_STARTS = [0, 226, 479, 653, 856, 1134, 1381, 1626]

# China-friendly HD Chinese omnibus (720p) with matching chapter starts.
# Separate 8-part uploads on Bilibili are only 480p; this 720p file is sharper.
BILI_HD = "https://www.bilibili.com/video/BV1UcdmBpEWF/"
BILI_STARTS = [0, 227, 478, 653, 857, 1136, 1380, 1624]

# Cleaner per-episode Chinese pages (480p) as tertiary backups in hints.
BILI_PARTS = "https://www.bilibili.com/video/BV12E411N7WN/"

EPS = [
    {
        "title": "成功的原则① · 探险召唤",
        "blurb": "为什么要自己想清楚真相。成功不只靠已知道的，更靠怎么面对未知。",
        "duration": "约 4 分钟",
        "hints": ["原则", "真相", "独立思考", "探险"],
    },
    {
        "title": "成功的原则② · 拥抱现实",
        "blurb": "梦想要落地：先看清现实，再动手。痛苦加反思才会进步。",
        "duration": "约 4 分钟",
        "hints": ["现实", "痛苦", "反思", "进步"],
    },
    {
        "title": "成功的原则③ · 五步流程",
        "blurb": "定目标、找问题、查原因、做方案、去执行。五步循环就是进化。",
        "duration": "约 3 分钟",
        "hints": ["五步", "目标", "问题", "执行"],
    },
    {
        "title": "成功的原则④ · 深渊",
        "blurb": "1982 年大失败之后怎么站起来：客观面对、反思、继续往前。",
        "duration": "约 3 分钟",
        "hints": ["失败", "深渊", "谦逊", "1982"],
    },
    {
        "title": "成功的原则⑤ · 一切都是机器",
        "blurb": "事情会反复发生。把问题分类、用原则处理，并平衡风险与回报。",
        "duration": "约 5 分钟",
        "hints": ["机器", "规律", "风险", "回报"],
    },
    {
        "title": "成功的原则⑥ · 两大障碍",
        "blurb": "自我意识和思维盲点会挡住真相。先认出它们。",
        "duration": "约 4 分钟",
        "hints": ["障碍", "自我", "盲点"],
    },
    {
        "title": "成功的原则⑦ · 头脑开放",
        "blurb": "愿意听认真想过的不同意见，才能更接近真相、做出更好决定。",
        "duration": "约 4 分钟",
        "hints": ["开放", "分歧", "真相"],
    },
    {
        "title": "成功的原则⑧ · 奋力拼搏",
        "blurb": "成功不只是到达目标，更是和同伴一起进化、好好拼搏的过程。",
        "duration": "约 4 分钟",
        "hints": ["拼搏", "协作", "进化"],
    },
]


def build_principle_eps() -> list[dict]:
    out = []
    for i, meta in enumerate(EPS):
        n = i + 2  # after 经济机器
        out.append(
            {
                "id": f"econmachine-{n}",
                "n": n,
                "title": meta["title"],
                "blurb": meta["blurb"]
                + " 官方英文字幕高清见 YouTube 同刻度。",
                "duration": meta["duration"],
                # Family watch: Bilibili 720p Chinese chapter.
                "link": f"{BILI_HD}?t={BILI_STARTS[i]}",
                "hints": meta["hints"]
                + [
                    "达利欧",
                    "成功的原则",
                    f"yt:{YT_FULL}&t={YT_STARTS[i]}",
                    f"bili8:{BILI_PARTS}?p={i + 1}",
                ],
            }
        )
    return out


def main() -> None:
    text = DATA.read_text(encoding="utf-8")
    # Locate econmachine block roughly.
    m = re.search(
        r'(\{\s*"id": "econmachine",[\s\S]*?"episodes":\s*)(\[[\s\S]*?\])(\s*\})',
        text,
    )
    if not m:
        raise SystemExit("econmachine block not found")

    # Parse episodes array carefully with json
    # Rebuild whole title object from known fields + new episodes.
    # Safer: replace only the episodes array content by reconstructing.

    principle = build_principle_eps()
    ep1 = {
        "id": "econmachine-1",
        "n": 1,
        "title": "经济机器是怎样运行的",
        "blurb": "交易、借贷、短周期与长周期。先建立「钱怎么流动」的骨架。",
        "duration": "约 31 分钟",
        "link": "https://www.bilibili.com/video/BV1jsoMBtEWA/",
        "hints": ["经济机器", "信贷", "周期", "达利欧", "桥水"],
    }
    ep_last = {
        "id": "econmachine-10",
        "n": 10,
        "title": "世界秩序 · 国家为什么兴衰",
        "blurb": "大国为什么强起来、又为什么弱下去。比前面更长，适合周末看。",
        "duration": "约 43 分钟",
        "link": "https://www.bilibili.com/video/BV1EQo4BQE29/",
        "hints": ["世界秩序", "大周期", "原则2", "国家"],
    }
    episodes = [ep1] + principle + [ep_last]
    ep_json = json.dumps(episodes, ensure_ascii=False, indent=2)
    # indent episodes to match object (6 spaces base inside title → 8 for array items)
    ep_json = "\n".join(
        ("      " + line if line else line) for line in ep_json.splitlines()
    )

    new_text = text[: m.start(2)] + ep_json + text[m.end(2) :]

    # Update duration / blurb / official / watchNote near the top of the object.
    def repl_field(src: str, key: str, value: str) -> str:
        return re.sub(
            rf'("id": "econmachine",[\s\S]*?"{key}":\s*)"[^"]*"',
            rf'\1"{value}"',
            src,
            count=1,
        )

    new_text = repl_field(new_text, "duration", "约 3–43 分钟 · 10 集")
    new_text = repl_field(
        new_text,
        "episodeHint",
        "先看经济机器 · 原则 8 集很短 · 世界秩序周末看",
    )
    new_text = repl_field(
        new_text,
        "blurb",
        "达利欧三块：钱怎么流动、《成功的原则》动画 8 集、国家兴衰大周期。原则每集约 3–5 分钟。",
    )
    new_text = repl_field(
        new_text,
        "mapPin",
        "钱怎么流动 · 成功的原则 · 世界秩序",
    )
    new_text = repl_field(
        new_text,
        "parentNote",
        "世界秩序一集讲国家兴衰与冲突，偏成人；建议家长陪看",
    )
    new_text = repl_field(
        new_text,
        "watchNote",
        "自用：原则 8 集走 B 站 720p 中文动画按时码开播；官方英文字幕高清在 YouTube《Principles for Success》。世界秩序与经济机器仍用合集页。",
    )
    new_text = repl_field(
        new_text,
        "altLink",
        YT_FULL,
    )
    new_text = repl_field(
        new_text,
        "altLabel",
        "YouTube 官方 · 成功的原则（完整高清）",
    )

    # Replace official array
    new_official = json.dumps(
        [
            {
                "kind": "youtube",
                "url": YT_FULL,
                "label": "YouTube 官方 · Principles for Success",
            },
            {
                "kind": "web",
                "url": "https://www.principles.com/principles-for-success",
                "label": "principles.com 官方页",
            },
        ],
        ensure_ascii=False,
        indent=2,
    )
    new_official = "\n".join(
        ("      " + line if line else line) for line in new_official.splitlines()
    )
    new_text = re.sub(
        r'("id": "econmachine",[\s\S]*?"official":\s*)\[[\s\S]*?\]',
        rf"\1{new_official}",
        new_text,
        count=1,
    )

    DATA.write_text(new_text, encoding="utf-8")
    print("episodes", len(episodes))
    for e in episodes:
        print(e["n"], e["title"], e["link"][:60])


if __name__ == "__main__":
    main()
