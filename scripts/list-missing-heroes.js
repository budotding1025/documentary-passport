const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");
const s = fs.readFileSync(path.join(root, "data.js"), "utf8");
const files = [...s.matchAll(/heroArt:\s*"\.\/covers\/hero\/([^"]+)"/g)].map(
  (m) => m[1].replace(/\.png$/, "")
);
const unique = [...new Set(files)];
const disk = new Set(
  fs
    .readdirSync(path.join(root, "covers", "hero"))
    .filter((f) => f.endsWith(".png"))
    .map((f) => f.replace(/\.png$/, ""))
);
const missing = unique.filter((f) => !disk.has(f));
console.log(
  JSON.stringify(
    { total: unique.length, have: disk.size, missing },
    null,
    2
  )
);
