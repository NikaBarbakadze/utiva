document.addEventListener("DOMContentLoaded", function () {
  var checkboxes = document.querySelectorAll(".header-desk__toggle");

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      let currentUrl = new URL(window.location.href);
      let hostname = currentUrl.hostname.split(".");

      if (checkbox.checked) {
        // Add 'fr' subdomain if not present
        if (hostname[0] !== "fr") {
          hostname.unshift("fr");
        }
      } else {
        // Remove 'fr' subdomain if present
        if (hostname[0] === "fr") {
          hostname.shift();
        }
      }

      currentUrl.hostname = hostname.join(".");

      window.location.href = currentUrl.href;
    });
  });
});
