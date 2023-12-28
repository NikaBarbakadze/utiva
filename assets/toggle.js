document.addEventListener("DOMContentLoaded", function () {
  var checkboxes = document.querySelectorAll(".header-desk__toggle");

  checkboxes.forEach((checkbox) => {
    // Check if the current domain is the French subdomain
    if (window.location.href.includes("fr.")) {
      checkbox.checked = true;
    }

    checkbox.addEventListener("change", function () {
      // Extract path and query string from the current URL
      let path = window.location.pathname;
      let queryString = window.location.search;

      // Construct the new URL based on the checkbox state
      let newUrl;
      if (checkbox.checked === true) {
        newUrl = "https://fr.utivahealth.ca" + path + queryString;
      } else {
        // Remove 'www.' from the URL if it's there
        let domain = "utivahealth.ca";
        if (window.location.host.includes("www.")) {
          domain = "utivahealth.ca";
        }
        newUrl = "https://" + domain + path + queryString;
      }

      // Redirect to the new URL
      window.location.href = newUrl;
    });
  });
});
