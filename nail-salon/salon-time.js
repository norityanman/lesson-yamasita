/*
  予約の締め切りと「いま」の時刻を決めるしくみ。
  空き状況ページ（reserve.html）と管理ページ（admin.html）の両方で使います。
  ※ オーナーさんがこのファイルを書きかえる必要はありません。
     締め切りの時間は availability.js の CUTOFF_HOUR で変えられます。

  練習用：ページのアドレスの最後に ?now=2026-12-04T17:59 のように付けると、
  「いま」をその日時ということにして表示します（本当の時刻は変わりません）。
*/
window.SalonTime = (function () {
  "use strict";

  function readPractice() {
    try {
      var v = new URLSearchParams(location.search).get("now");
      if (!v) return null;
      var m = v.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/);
      if (!m) return null;
      var d = new Date(+m[1], +m[2] - 1, +m[3], +m[4], +m[5]);
      if (d.getMonth() !== +m[2] - 1 || d.getDate() !== +m[3]) return null;
      return d;
    } catch (e) {
      return null;
    }
  }
  var practice = readPractice();

  function now() {
    return practice ? new Date(practice.getTime()) : new Date();
  }

  // 前の日の何時で締め切るか（0〜23）。書いていなければ18時。
  function cutoffHour() {
    var h = window.CUTOFF_HOUR;
    return (typeof h === "number" && h >= 0 && h <= 23) ? Math.floor(h) : 18;
  }

  // その日の予約の締め切り（前の日の◯時ちょうど）
  function deadline(day) {
    return new Date(day.getFullYear(), day.getMonth(), day.getDate() - 1, cutoffHour(), 0, 0);
  }

  // 締め切りを過ぎているか（ちょうど◯時になったら締め切り）
  function isClosed(day) {
    return now() >= deadline(day);
  }

  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function label(d) {
    return d.getFullYear() + "年" + (d.getMonth() + 1) + "月" + d.getDate() + "日 " + pad(d.getHours()) + ":" + pad(d.getMinutes());
  }

  // 練習中だけ、ページのいちばん上にお知らせを出す
  function showPracticeBanner() {
    if (!practice) return;
    var bar = document.createElement("div");
    bar.className = "practice-banner";
    bar.setAttribute("role", "status");
    bar.textContent = "練習モード：いまを「" + label(practice) + "」として表示しています（本当の時刻ではありません）";
    document.body.insertBefore(bar, document.body.firstChild);
  }

  return {
    now: now,
    practice: practice,
    cutoffHour: cutoffHour,
    deadline: deadline,
    isClosed: isClosed,
    label: label,
    showPracticeBanner: showPracticeBanner
  };
})();
