(() => {
  document.addEventListener("DOMContentLoaded", function () {
    // Select all instances of .customer-feedback__block
    let blocks = document.querySelectorAll(".customer-feedback__block");

    // Iterate over each block
    blocks.forEach((d) => {
      let t = d.querySelector(".customer-feedback__block--play");
      let e = d.querySelector("video");

      // Event listener for play button
      t.addEventListener("click", () => {
        if (e.paused) {
          e.play();
          t.style.display = "none";
        }
      });

      // Event listener for video element
      e.addEventListener("click", () => {
        if (!e.paused) {
          e.pause();
          t.style.display = "block";
        }
      });

      // Event listener for when the video ends
      e.addEventListener("ended", () => {
        t.style.display = "block";
      });
    });
  });
})();
