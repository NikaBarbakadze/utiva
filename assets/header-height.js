(() => {
  window.addEventListener("DOMContentLoaded", () => {
    let e = document.getElementById("announcement-bar"),
      n = document.getElementById("shopify-section-header");
    let s = {
        "announcement-bar": "--announcement-bar-height",
        "shopify-section-header": "--header-height",
      },
      t = new ResizeObserver(c);
    e && t.observe(e), n && t.observe(n);
    function c(a) {
      for (let o of a) {
        let r = s[o.target.id];
        r &&
          document.documentElement.style.setProperty(
            r,
            `${o.contentRect.height}px`
          );
      }
    }
  });
})();
