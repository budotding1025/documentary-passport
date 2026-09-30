# -*- coding: utf-8 -*-
import re
from pathlib import Path

s = Path("data.js").read_text(encoding="utf-8")
ids = re.findall(r'"id": "([^"]+)"\s*,\s*\n\s*"heroArt"', s)
print("titles", len(ids))
for tid in ids:
    i = s.find('"id": "%s"' % tid)
    chunk = s[i : i + 1200]
    title = re.search(r'"title": "([^"]+)"', chunk)
    cat = re.search(r'"category": "([^"]+)"', chunk)
    parent = re.search(r'"parentNote": "([^"]*)"', chunk)
    print(
        "%s\t%s\t%s\t%s"
        % (
            tid,
            title.group(1) if title else "?",
            cat.group(1) if cat else "?",
            parent.group(1) if parent else "",
        )
    )
