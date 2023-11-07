// Wait for the window to load
window.onload = function () {
  // Set a timeout to delay execution
  setTimeout(function handleAccordionOnMobile() {
    // Check if the window width is less than or equal to 1024 pixels
    if (window.innerWidth <= 1024) {
      // Find all elements with the class `.accordion-wrapper`
      const accordions = document.querySelectorAll(".accordion-wrapper");

      // Iterate over each accordion element
      accordions.forEach((accordion) => {
        // Find the button within the accordion
        const button = accordion.querySelector(".accordion-wrapper__button");

        // Attach a click event listener to the button
        button.addEventListener("click", () => {
          // Toggle the open state of the accordion
          toggleAccordion(accordion);
        });
      });
    }
  }, 1000); // Delay execution by 1000 milliseconds (1 second)
};

// Function to toggle the state of the accordion
function toggleAccordion(accordion) {
  // Find the plus/minus icon within the accordion
  const plusMinusIcon = accordion.querySelector(
    ".accordion-wrapper__plusminus"
  );
  // Find the content div within the accordion
  const content = accordion.querySelector(".accordion-wrapper__content");

  // Toggle the 'open' class on the accordion
  accordion.classList.toggle("open");
  // Toggle the 'active' class on the plus/minus icon
  plusMinusIcon.classList.toggle("active");

  // Expand or collapse the content based on the presence of 'open' class
  if (accordion.classList.contains("open")) {
    // Add 'active' class to content and set its height
    content.classList.add("active");
    content.style.height = `${content.scrollHeight}px`;
  } else {
    // Remove 'active' class from content and reset its height
    content.classList.remove("active");
    content.style.height = "0px";
  }
}
