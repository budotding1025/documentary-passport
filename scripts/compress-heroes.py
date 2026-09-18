"""Resize hero plates to 1600x900 JPEG so the home page loads quickly."""
from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parents[1] / "covers" / "hero"
root.mkdir(parents=True, exist_ok=True)

def to_16x9(im):
    im = im.convert("RGB")
    w, h = im.size
    target = 16 / 9
    if w / h > target:
        nw = int(h * target)
        left = (w - nw) // 2
        im = im.crop((left, 0, left + nw, h))
    elif w / h < target:
        nh = int(w / target)
        top = (h - nh) // 2
        im = im.crop((0, top, w, top + nh))
    return im.resize((1600, 900), Image.Resampling.LANCZOS)

total_before = 0
total_after = 0
for src in sorted(root.glob("*.png")):
    before = src.stat().st_size
    total_before += before
    im = to_16x9(Image.open(src))
    dest = src.with_suffix(".jpg")
    im.save(dest, "JPEG", quality=72, optimize=True, progressive=True)
    after = dest.stat().st_size
    total_after += after
    src.unlink()
    print(f"{src.stem}: {before//1024}KB -> {after//1024}KB")

print(f"TOTAL {total_before/1024/1024:.1f}MB -> {total_after/1024/1024:.1f}MB")
