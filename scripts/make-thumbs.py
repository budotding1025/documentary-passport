"""Small 16:9 thumbs for the home trio. Heroes stay full size."""
from pathlib import Path
from PIL import Image

src_root = Path(__file__).resolve().parents[1] / "covers" / "hero"
dst = Path(__file__).resolve().parents[1] / "covers" / "thumb"
dst.mkdir(parents=True, exist_ok=True)

total = 0
for src in sorted(src_root.glob("*.jpg")):
    im = Image.open(src).convert("RGB")
    im = im.resize((960, 540), Image.Resampling.LANCZOS)
    out = dst / src.name
    im.save(out, "JPEG", quality=62, optimize=True, progressive=True)
    n = out.stat().st_size
    total += n
    print(f"{src.stem}: {n // 1024}KB")

print(f"TOTAL {total / 1024:.0f}KB  files {len(list(dst.glob('*.jpg')))}")
