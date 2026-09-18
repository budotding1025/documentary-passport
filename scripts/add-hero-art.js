const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const dataPath = path.join(root, "data.js");
let s = fs.readFileSync(dataPath, "utf8");

eval(s.replace("window.DOC_CATALOG", "global.DOC_CATALOG"));

let n = 0;
for (const t of DOC_CATALOG.titles) {
  if (s.includes('heroArt: "./covers/hero/' + t.id + '.png"')) continue;
  const re = new RegExp('(id:\\s*"' + t.id + '",)(\\r?\\n)(\\s*)(title:)');
  if (!re.test(s)) {
    console.warn("no match", t.id);
    continue;
  }
  s = s.replace(
    re,
    '$1$2$3heroArt: "./covers/hero/' + t.id + '.png",$2$3$4'
  );
  n++;
}
fs.writeFileSync(dataPath, s);
console.log("inserted", n, "heroArt count", (s.match(/heroArt:/g) || []).length);
