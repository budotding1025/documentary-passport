"""Add shareable: true when play is stable, else false."""
from pathlib import Path
import re

path = Path(__file__).resolve().parents[1] / "data.js"
text = path.read_text(encoding="utf-8")

# Remove any existing shareable lines first (idempotent)
text = re.sub(r"\n\s*shareable:\s*(true|false),?", "", text)

def inject(m):
    play = m.group(1)
    shareable = "true" if play == "stable" else "false"
    return f'play: "{play}",\n      shareable: {shareable},'

text2, n = re.subn(r'play:\s*"(stable|ok|dead|fail)"\s*,', inject, text)
path.write_text(text2, encoding="utf-8")
print("updated", n)
print("shareable true", text2.count("shareable: true"))
print("shareable false", text2.count("shareable: false"))
