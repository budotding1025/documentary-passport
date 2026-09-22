/**
 * Migrate catalog to dual-link model:
 * - watchLink: what the child opens now (free HD / current link)
 * - official[]: up to 2 licensed pages for the future product
 * Keeps link/linkLabel as aliases of watch* for older code paths.
 */
const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "..", "data.js");
const src = fs.readFileSync(file, "utf8");
const catalog = eval(
  src.replace(/^[\s\S]*?window\.DOC_CATALOG\s*=/, "(").replace(/;\s*$/, ")")
);

function kindOf(url) {
  const u = String(url || "").toLowerCase();
  if (!u) return "";
  if (/docuchina\.cn|tv\.cctv\.com|cctv\.com|jishi\.cntv\.cn|v\.cctv\.com/.test(u))
    return "cctv";
  if (/bilibili\.com\/bangumi/.test(u)) return "bilibili";
  if (/iqiyi\.com/.test(u)) return "iqiyi";
  if (/v\.qq\.com/.test(u)) return "tencent";
  if (/open\.163\.com|163\.com\/opencourse/.test(u)) return "netease";
  if (/netflix\.com/.test(u)) return "netflix";
  if (/youku\.com/.test(u)) return "youku";
  if (/dimensions-math\.org/.test(u)) return "official_site";
  return "";
}

function isOfficial(url) {
  return !!kindOf(url);
}

function labelFor(kind, fallback) {
  return (
    {
      cctv: "央视 / 纪录片网",
      bilibili: "B 站正版",
      iqiyi: "爱奇艺正版",
      tencent: "腾讯视频正版",
      netease: "网易公开课",
      netflix: "Netflix 正版",
      youku: "优酷正版",
      official_site: "官网正片",
    }[kind] ||
    fallback ||
    "正版"
  );
}

function pushOfficial(list, url, labelHint) {
  if (!url || !isOfficial(url)) return;
  if (list.some((x) => x.url === url)) return;
  if (list.length >= 2) return;
  const kind = kindOf(url);
  list.push({
    kind: kind,
    url: url,
    label: labelFor(kind, labelHint),
  });
}

const stats = { withOfficial: 0, needOfficial: 0, dual: 0 };

catalog.titles = catalog.titles.map((t) => {
  const watchLink = t.watchLink || t.link || "";
  const watchLabel = t.watchLabel || t.linkLabel || "打开片源";
  let watchNote = t.watchNote || "";
  const official = [];

  // Current stable page counts as official backup if licensed.
  if (t.play === "stable" || isOfficial(t.link)) {
    pushOfficial(official, t.link, t.linkLabel);
  }
  pushOfficial(official, t.altLink, t.altLabel);
  // Already-migrated
  if (Array.isArray(t.official)) {
    t.official.forEach((o) => {
      if (o && o.url) pushOfficial(official, o.url, o.label);
    });
  }

  if (!watchNote) {
    if (t.play === "ok" && !isOfficial(watchLink)) {
      watchNote =
        "自用：" +
        (t.playNote || "免费高清 / 投稿，可能下架") +
        "。工具上线前须补 official，否则标「片源暂缺」。";
    } else if (official.length) {
      watchNote =
        "自用现开此链" +
        (t.playNote ? "（" + t.playNote + "）" : "") +
        "。工具模式改走 official。";
    } else {
      watchNote = t.playNote || "自用链接；工具前须核正版。";
    }
  }

  const playNote =
    official.length >= 2
      ? "正版备份已满 2 条 · 自用走 watchLink"
      : official.length === 1
        ? "正版备份 1 条 · 自用走 watchLink；工具前可再补 1 条"
        : "尚无正版备份 · 自用 watchLink；工具上线前须补或下架";

  if (official.length) stats.withOfficial++;
  else stats.needOfficial++;
  if (official.length >= 2) stats.dual++;

  const next = Object.assign({}, t, {
    watchLink: watchLink,
    watchLabel: watchLabel,
    watchNote: watchNote,
    official: official,
    link: watchLink,
    linkLabel: watchLabel,
    playNote: playNote,
  });
  // Keep altLink as second official for old UI, if any
  if (official[1]) {
    next.altLink = official[1].url;
    next.altLabel = official[1].label;
  } else if (official[0] && official[0].url !== watchLink) {
    next.altLink = official[0].url;
    next.altLabel = official[0].label;
  }
  return next;
});

const header = `/** 纪录片库：工作日 A / 周末 B；四格 + 审美/商业肌肉
 * play: stable=已核正版 | ok=自用可看 | missing=片源暂缺（工具态）| search/risk=旧标记
 * watchLink: 自家现在点开的地址（可免费高清 / 投稿）
 * official: 最多 2 条正版页，供以后付费工具切换；不抓片、不下载
 * blurb: 卡片外可见的一句话简介
 * 每部只归一个 category；盖印下沉到集（episodes[]）。
 * episode: { id, n, title, blurb, duration?, link?, hints?[] }
 * 无 episodes 的片子，界面会自动当成「整部 / 1 集」打卡。
 * link / linkLabel 与 watchLink / watchLabel 同步，兼容旧代码。
 */
window.DOC_CATALOG = `;

fs.writeFileSync(
  file,
  header + JSON.stringify(catalog, null, 2) + ";\n",
  "utf8"
);

console.log(
  "titles",
  catalog.titles.length,
  "withOfficial",
  stats.withOfficial,
  "needOfficial",
  stats.needOfficial,
  "dual",
  stats.dual
);
