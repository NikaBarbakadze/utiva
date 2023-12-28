document.addEventListener("DOMContentLoaded", function () {
  var checkboxes = document.querySelectorAll(".header-desk__toggle");

  checkboxes.forEach((checkbox) => {
    // Check if the current domain is the French subdomain
    checkbox.checked = window.location.href.includes("fr.");

    checkbox.addEventListener("change", function () {
      // Extract path and query string from the current URL
      let path = window.location.pathname;
      let queryString = window.location.search;

      // Remove 'www.' if present and construct the base domain
      let baseDomain = "utivahealth.ca";

      // Construct the new URL based on the checkbox state
      let newUrl = checkbox.checked
        ? "https://fr." + baseDomain + path + queryString
        : "https://" + baseDomain + path + queryString;

      // Redirect to the new URL
      window.location.href = newUrl;
    });
  });
});
