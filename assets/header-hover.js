(() => {
  document.addEventListener("DOMContentLoaded", function () {
    let o = 0,
      e = document.querySelector(".header-desktop"),
      d = e.querySelectorAll(".header-desktop__nav--item"),
      t = document.querySelector(".header-desktop__submenu");
    d.forEach((r) => {
      r.addEventListener("mouseenter", () => {
        e.classList.remove("tw-hidden"), e.classList.add("hovered"), s();
      });
    }),
      e.addEventListener("mouseleave", () => {
        e.classList.add("tw-hidden"), e.classList.remove("hovered"), n();
      }),
      t == null ||
        t.addEventListener("mouseleave", () => {
          e.classList.add("tw-hidden"), e.classList.remove("hovered");
        });
    function s() {
      (o = window.pageYOffset),
        (document.body.style.overflow = "tw-hidden"),
        (document.body.style.position = "fixed"),
        (document.body.style.top = `-${o}px`),
        (document.body.style.width = "100%");
    }
    function n() {
      document.body.style.removeProperty("overflow"),
        document.body.style.removeProperty("position"),
        document.body.style.removeProperty("top"),
        document.body.style.removeProperty("width"),
        window.scrollTo({ top: o, behavior: "auto" });
    }
  });
})();
