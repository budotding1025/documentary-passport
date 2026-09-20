const fs = require("fs");
const h = fs.readFileSync("index.html", "utf8");
const m = h.match(/<script(?![^>]*src)[^>]*>([\s\S]*?)<\/script>/g);
let ok = true;
(m || []).forEach((block, i) => {
  const body = block.replace(/^<script[^>]*>/, "").replace(/<\/script>$/, "");
  if (!body.trim() || body.includes("src=")) return;
  try {
    new Function(body);
  } catch (e) {
    ok = false;
    console.error("script", i, e.message);
  }
});
if (!ok) process.exit(1);
console.log("JS OK");
console.log("iframe", h.includes("watchBayFrame"));
console.log("shareablePin", h.includes("PARENT_PIN"));
console.log("god", h.includes("我家的神回复"));
console.log("comment", h.includes("写给自己或给爸爸妈妈"));
