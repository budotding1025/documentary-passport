# -*- coding: utf-8 -*-
"""Add one companion discuss ask per key episode (pasteur / material / money story)."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
path = ROOT / "data.js"
text = path.read_text(encoding="utf-8")
m = re.search(r"window\.DOC_CATALOG\s*=\s*(\{[\s\S]*\})\s*;\s*$", text)
if not m:
    raise SystemExit("catalog parse failed")
cat = json.loads(m.group(1))

ASKS = {
    "pasteur-1": ("片头后", "如果没有显微镜，人们怎么知道有细菌？"),
    "pasteur-2": ("吃完一段", "「吃」怎么帮科学家理解谁更早出现在地球上？"),
    "pasteur-3": ("达尔文出场后", "进化和「突然变魔术」有什么不一样？"),
    "pasteur-4": ("疫苗讲完", "打疫苗是把坏人请进门，还是让身体先练一遍？"),
    "pasteur-5": ("医学段落后", "生病时，科学能帮我们做什么、不能保证什么？"),
    "pasteur-6": ("片尾前", "你希望未来生物技术先解决哪一件小事？"),
    "materialsecret-1": ("金属段落后", "家里有哪样东西，没有金属就做不出来？"),
    "materialsecret-2": ("塑料段落后", "塑料方便在哪？又会带来什么麻烦？"),
    "materialsecret-3": ("陶瓷/玻璃后", "杯子、窗户、人行道，哪一样其实也是「土」变的？"),
    "moneystory-1": ("以物易物后", "如果没有钱，你今天想换一支笔，会有多麻烦？"),
    "moneystory-2": ("帝国段落后", "为什么管钱的人，也容易管住贸易和打仗？"),
    "moneystory-3": ("交子讲完", "一张纸凭什么能当钱？大家要相信什么？"),
    "moneystory-4": ("数字货币前", "钱从硬币变成数字，变的是样子还是信任？"),
}

n = 0
for t in cat["titles"]:
    for ep in t.get("episodes") or []:
        pair = ASKS.get(ep.get("id"))
        if not pair:
            continue
        at, ask = pair
        ep["discuss"] = [{"at": at, "ask": ask}]
        n += 1

out = "/** 纪录片库：工作日 A / 周末 B；四格 + 审美/商业肌肉\n"
# keep original header comment block if present
header = text.split("window.DOC_CATALOG", 1)[0]
body = json.dumps(cat, ensure_ascii=False, indent=2)
path.write_text(header + "window.DOC_CATALOG = " + body + ";\n", encoding="utf-8")
print("ok", n, "discuss asks")
