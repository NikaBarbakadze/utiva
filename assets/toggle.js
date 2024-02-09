document.addEventListener("DOMContentLoaded", function () {
  var checkboxes = document.querySelectorAll(".header-desk__toggle");

  checkboxes.forEach((checkbox) => {
    // Set the checkbox based on the current domain
    checkbox.checked = window.location.host.startsWith("fr.");

    checkbox.addEventListener("change", function () {
      // Extract path and query string from the current URL
      let path = window.location.pathname;
      let queryString = window.location.search;

      // Remove 'www.' if present and construct the new URL
      let hostWithoutWww = window.location.host.replace("www.", "");
      let newUrl = "";

      if (checkbox.checked) {
        // Redirect to the French subdomain
        newUrl =
          "https://fr." +
          hostWithoutWww.replace("fr.", "") +
          path +
          queryString;
      } else {
        // Redirect to the regular domain
        newUrl =
          "https://" + hostWithoutWww.replace("fr.", "") + path + queryString;
      }

      // Redirect to the new URL
      window.location.href = newUrl;
    });
  });
});
