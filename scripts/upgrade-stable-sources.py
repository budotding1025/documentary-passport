# -*- coding: utf-8 -*-
from pathlib import Path

p = Path(__file__).resolve().parents[1] / "data.js"
t = p.read_text(encoding="utf-8")

for i in range(1, 7):
    old = f"https://www.bilibili.com/video/BV13Q4y1K74c/?p={i}"
    new = "https://www.bilibili.com/bangumi/media/md20034/"
    t = t.replace(old, new)

replacements = [
    (
        "少儿微生物科普合集，分P选集；短、适合工作日（原UP主已注销，内容仍可播）",
        "仅自家备用：暂无国内稳定正版页；投稿可能下架，家长台待找 stable",
    ),
    (
        "8 集分P；对细胞感兴趣从第1集「信号分子」起",
        "仅自家备用：NHK/央视版暂无稳定正版外链；投稿合集可能下架",
    ),
    (
        "《人体的奥秘》细胞篇双语投稿；可按上下集拆开盖印",
        "仅自家备用：暂无 B 站正版番剧；投稿合集可能下架",
    ),
    (
        "60 集合集直链；当晚只看 1 集",
        "仅自家备用：NHK《啊！设计》暂无大陆稳定正版页；投稿可能下架",
    ),
    (
        "1–5 季合集，播放量靠前；分P选集，先看前几集即可",
        "仅自家备用：Discovery《造物》暂无大陆稳定正版页；投稿可能下架",
    ),
]

for a, b in replacements:
    if a not in t:
        print("MISS", a[:40])
    else:
        t = t.replace(a, b)
        print("OK", a[:40])

p.write_text(t, encoding="utf-8")
print("shareable true", t.count("shareable: true"))
print("shareable false", t.count("shareable: false"))
