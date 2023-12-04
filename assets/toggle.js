document.addEventListener("DOMContentLoaded", function () {
  var checkboxes = document.querySelectorAll(".header-desk__toggle");

  checkboxes.forEach((checkbox) => {
    if (window.location.href.includes("fr.")) {
      checkbox.checked = true;
    }
    checkbox.addEventListener("change", function () {
      if (checkbox.checked === true) {
        window.location.href = "https://fr.utivahealth.ca";
      } else {
        window.location.href = "https://utivahealth.ca";
      }
    });
  });
});
