const fs = require("fs");
const s = fs.readFileSync("data.js", "utf8");
if (!s.includes('"id": "capitalstory"')) {
  console.error("missing capitalstory");
  process.exit(1);
}
new Function(s.replace(/^[\s\S]*?window\.DOC_CATALOG\s*=/, "return ") + ";");
const titles = [...s.matchAll(/"id": "capitalstory-(\d+)"[\s\S]*?"title": "([^"]+)"/g)].map(
  (m) => m[1] + ":" + m[2]
);
console.log(titles.join(" | "));
console.log("count", titles.length);
console.log("hero", fs.existsSync("covers/hero/capitalstory.jpg"));
console.log("thumb", fs.existsSync("covers/thumb/capitalstory.jpg"));
console.log("errorTitle", /CCTV\.com - ERROR/.test(s));
