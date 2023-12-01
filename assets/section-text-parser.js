function handleSectionText(
  sectionContainer,
  userRichText,
  isCustomize = false
) {
  const textContainer = sectionContainer.querySelector(".text-content");
  const desktopDefinition = sectionContainer.querySelector(
    ".definition__desktop"
  );
  let indexerBtn = [];
  let indexerDefinition = 0;
  let quickIndex = 0;
  let formattedText = userRichText.replaceAll("<strong>", () => {
    const randNumber = Math.ceil(Math.random() * 10000);
    indexerBtn.push(randNumber);
    return `<span data-btnindex="${randNumber}" class="interactive-btn  interactive-btn__${randNumber}">`;
  });

  formattedText = formattedText.replaceAll(
    "</strong>",
    () =>
      `<button class="interactive-btn__line1 ${
        quickIndex++ === 0 ? "" : "interactive-btn__line2"
      }"></button></span>`
  );
  formattedText = formattedText.replaceAll(
    /<\/em>(<a(.*?))<em>(.*?)<\/em>(<\/a>)<em>/g,
    "$1$3$4"
  );
  formattedText = formattedText.replaceAll(
    /<p>(<a (.*?)>)<em>(.*?)<\/em>(<\/a>)<\/p>/g,
    "<p><em>$1$3$4</em></p>"
  );
  formattedText = formattedText.replaceAll(
    /(<a (.*?)>)<em>(.*?)<\/em>(<\/a>)/g,
    "<em>$1$3$4</em>"
  );
  formattedText = formattedText.replaceAll("<em>", () => {
    const str = `<span data-btnindex="${
      indexerBtn[indexerDefinition]
    }" class="definition definition__${indexerBtn[indexerDefinition]} ${
      indexerDefinition === 0 ? "show-definition" : " "
    }">`;
    indexerDefinition++;
    return str;
  });
  formattedText = formattedText.replaceAll("</em>", () => `</span>`);

  textContainer.innerHTML = formattedText;
  const firstOpenedText = document.querySelector(
    `.definition__${indexerBtn[0]}`
  )?.innerHTML;

  desktopDefinition.innerHTML = firstOpenedText.trim();
  console.log(desktopDefinition.innerHTML);
  desktopDefinition.innerText &&
    desktopDefinition.classList.add("desktop__show");
  const openedMobileDefinition =
    textContainer.querySelector(".show-definition");
  !openedMobileDefinition.innerText.trim() &&
    openedMobileDefinition.classList.remove("show-definition");
  const interactiveHTML = textContainer;
  if (!isCustomize) {
    sectionContainer.addEventListener("click", (e) => {
      const parentIndex = e.target.parentNode.dataset.btnindex;
      const btnIndex = e.target.dataset.btnindex;
      if (!btnIndex && !parentIndex) return;
      const allDefinitions = interactiveHTML.querySelectorAll(`.definition`);
      const definition = interactiveHTML.querySelector(
        `.definition__${btnIndex || parentIndex}`
      );

      if (
        definition.innerText.replace(/\s+/g, " ").trim() ===
        desktopDefinition.innerText.replace(/\s+/g, " ").trim()
      ) {
        desktopDefinition.classList.remove("desktop__show");
        const timeoutRemoveText = setTimeout(() => {
          desktopDefinition.innerHTML = "";
        }, 400);
      } else {
        definition.innerText.trim();
        desktopDefinition.innerHTML = definition.innerHTML.trim();
        desktopDefinition.classList.add("desktop__show");
      }
      allDefinitions.forEach((el) => {
        if (definition === el) {
          return;
        } else {
          el.classList.remove("show-definition");
          $(`.interactive-btn__${el.dataset.btnindex}`)
            .children(".interactive-btn__line1")
            .addClass("interactive-btn__line2");
        }
      });
      $(`.interactive-btn__${parentIndex || btnIndex}`)
        .children(".interactive-btn__line1")
        .toggleClass("interactive-btn__line2");
      definition.classList.toggle("show-definition");
    });
  }
}
