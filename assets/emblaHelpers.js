const setupPrevNextBtns = (prevBtn, nextBtn, embla) => {
  prevBtn.addEventListener("click", embla.scrollPrev, false);
  nextBtn.addEventListener("click", embla.scrollNext, false);
};

const disablePrevNextBtns = (prevBtn, nextBtn, embla) => {
  return () => {
    if (embla.canScrollPrev()) {
      prevBtn.removeAttribute("disabled");
    } else {
      prevBtn.setAttribute("disabled", "disabled");
    }
    if (embla.canScrollNext()) {
      nextBtn.removeAttribute("disabled");
    } else {
      nextBtn.setAttribute("disabled", "disabled");
    }
  };
};

const setupDotBtns = (dotsArray, embla) => {
  dotsArray.forEach((dotNode, i) => {
    dotNode.addEventListener("click", () => embla.scrollTo(i), false);
  });
};

const generateDotBtns = (dots, embla, node) => {
  const template = node.querySelector(".embla-dot-template").innerHTML;
  dots.innerHTML = embla.scrollSnapList().reduce((acc) => acc + template, "");
  return [].slice.call(dots.querySelectorAll(".embla__dot"));
};

const selectDotBtn = (dotsArray, embla) => () => {
  const previous = embla.previousScrollSnap();
  const selected = embla.selectedScrollSnap();
  dotsArray[previous]?.classList.remove("is-selected");
  dotsArray[selected]?.classList.add("is-selected");
};
