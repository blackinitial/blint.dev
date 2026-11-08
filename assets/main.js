/* Theme toggle — replikasi perilaku <theme-toggle> Astro (vanilla).
   ponytail: 1 tombol global, simpan di localStorage 'theme'. */
(function () {
  var store =
    typeof localStorage !== "undefined" &&
    localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
  var isDark = store === "dark";
  document.documentElement.classList[isDark ? "add" : "remove"]("theme-dark");

  if (typeof localStorage !== "undefined") {
    new MutationObserver(function () {
      var dark = document.documentElement.classList.contains("theme-dark");
      localStorage.setItem("theme", dark ? "dark" : "light");
    }).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });
  }

  var btn = document.querySelector("button.theme-toggle");
  if (btn) {
    function isDarkNow() {
      return document.documentElement.classList.contains("theme-dark");
    }
    function apply(dark) {
      document.documentElement.classList[dark ? "add" : "remove"]("theme-dark");
      btn.classList[dark ? "add" : "remove"]("on");
      btn.setAttribute("aria-pressed", String(dark));
    }
    btn.addEventListener("click", function () {
      apply(!isDarkNow());
    });
    apply(isDarkNow());
  }
})();

/* Cursor spotlight: radial mask menerangi grid mengikuti pointer */
(function () {
  var wrap = document.querySelector(".spotlight-container");
  if (!wrap) return;
  document.addEventListener("mousemove", function (e) {
    wrap.style.setProperty("--mx", e.clientX + "px");
    wrap.style.setProperty("--my", e.clientY + "px");
  });
})();

/* Confetti: squares burst from the button center (vanilla DOM, no lib) */
(function () {
  var btn = document.querySelector("button.confetti");
  if (!btn) return;

  var reduce =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var colors = ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"];

  btn.addEventListener("click", function () {
    if (reduce) return;
    var rect = btn.getBoundingClientRect();
    var cx = rect.left + rect.width / 2;
    var cy = rect.top + rect.height / 2;

    for (var i = 0; i < 16; i++) {
      var angle = (i / 16) * Math.PI * 2 + (Math.random() - 0.5) * 0.3;
      var dist = 70 + Math.random() * 110;
      var size = 5 + Math.random() * 5;
      var rot = Math.random() * 720 - 360;

      var el = document.createElement("div");
      el.className = "confetti-piece";
      el.style.left = cx + "px";
      el.style.top = cy + "px";
      el.style.width = size + "px";
      el.style.height = size + "px";
      el.style.background = colors[i % colors.length];
      el.style.setProperty("---x", Math.cos(angle) * dist + "px");
      el.style.setProperty("---y", Math.sin(angle) * dist + "px");
      el.style.setProperty("---r", rot + "deg");
      document.body.appendChild(el);

      setTimeout(function () { el.remove(); }, 950);
    }
  });
})();