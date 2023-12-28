document.addEventListener("DOMContentLoaded", function () {
  var checkboxes = document.querySelectorAll(".header-desk__toggle");

  checkboxes.forEach((checkbox) => {
    // Check if the current domain is the French subdomain
    checkbox.checked = window.location.href.includes("fr.");

    checkbox.addEventListener("change", function () {
      // Extract path and query string from the current URL
      let path = window.location.pathname;
      let queryString = window.location.search;

      // Determine the base domain
      let baseDomain = "utivahealth.ca";
      if (window.location.host.includes("www.")) {
        baseDomain = "www.utivahealth.ca";
      }

      // Construct the new URL based on the checkbox state
      let newUrl = checkbox.checked
        ? "https://fr." + baseDomain + path + queryString
        : "https://" + baseDomain.replace("www.", "") + path + queryString;

      // Redirect to the new URL
      window.location.href = newUrl;
    });
  });
});
