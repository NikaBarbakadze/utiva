document.addEventListener("DOMContentLoaded", function () {
  var checkboxes = document.querySelectorAll(".header-desk__toggle");

  checkboxes.forEach((checkbox) => {
    // Initialize the checkbox based on current domain
    checkbox.checked = window.location.host.startsWith("fr.");

    checkbox.addEventListener("change", function () {
      // Extract path and query string from the current URL
      let path = window.location.pathname;
      let queryString = window.location.search;

      // Construct the new URL based on the checkbox state
      let newUrl;
      if (checkbox.checked) {
        // Redirect to the French subdomain
        newUrl = "https://fr.utivahealth.ca" + path + queryString;
      } else {
        // Redirect to the regular domain
        newUrl = "https://utivahealth.ca" + path + queryString;
      }

      // Redirect to the new URL
      window.location.href = newUrl;
    });
  });
});
