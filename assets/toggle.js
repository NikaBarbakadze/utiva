(() => {
  function a(s, g, r, o, c) {
    let toggles = document.querySelectorAll("#" + s);
    let beforeElems = document.querySelectorAll(g);
    let afterElems = document.querySelectorAll(r);

    toggles.forEach((toggle, index) => {
      let e = beforeElems[index];
      let t = afterElems[index];

      toggle.addEventListener("click", function () {
        if (toggle.checked) {
          e.style.color = o;
          e.classList.add("active-toggle");
          e.classList.remove("unactive-toggle");
          t.style.color = c;
          t.classList.add("unactive-toggle");
          t.classList.remove("active-toggle");
        } else {
          e.style.color = c;
          e.classList.add("unactive-toggle");
          e.classList.remove("active-toggle");
          t.style.color = o;
          t.classList.add("active-toggle");
          t.classList.remove("unactive-toggle");
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    a(
      "mobile-menu__toggle",
      ".mobile-menu__toggle--before",
      ".mobile-menu__toggle--after",
      "var(--color-black-60)",
      "var(--color-black)"
    );

    a(
      "header-desk__toggle",
      ".header-desktop__icons--toggle-track--before",
      ".header-desktop__icons--toggle-track--after",
      "var(--color-white-60)",
      "var(--color-white)"
    );

    var checkboxes = document.querySelectorAll(".header-desk__toggle");

    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
          window.location.href = "https://fr.utivahealth.ca";
        } else {
          window.location.href = "https://utivahealth.ca";
        }
      });
    });
  });
})();
