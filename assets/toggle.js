document.addEventListener("DOMContentLoaded", function () {
  var checkboxes = document.querySelectorAll(".header-desk__toggle");

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      let currentUrl = window.location.href;
      let newUrl;

      if (checkbox.checked) {
        // If checkbox is checked, change to French (fr.) subdomain
        newUrl = currentUrl.replace(
          /^(https?:\/\/)(www\.)?(utivahealth\.ca)/,
          "$1fr.$3"
        );
      } else {
        // If checkbox is unchecked, change to English (remove fr.) subdomain
        newUrl = currentUrl.replace(
          /^(https?:\/\/)fr\.(utivahealth\.ca)/,
          "$1$2"
        );
      }

      if (newUrl) {
        window.location.href = newUrl;
      }
    });
  });
});
