function initialize() {
    const buttons = document.querySelectorAll("button");
  
    buttons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const currentButton = event.target;
        const parentDiv = currentButton.parentNode;
        const siblingDivs = Array.from(parentDiv.parentNode.children).filter(
          (div) => div !== parentDiv
        );
  
        if (currentButton.classList.contains("upButton")) {
          if (parentDiv.previousElementSibling) {
            parentDiv.parentNode.insertBefore(parentDiv, parentDiv.previousElementSibling);
          }
        } else if (currentButton.classList.contains("downButton")) {
          if (parentDiv.nextElementSibling) {
            parentDiv.parentNode.insertBefore(parentDiv.nextElementSibling, parentDiv);
          }
        }
  
        /*siblingDivs.forEach((div) => {
          div.classList.remove("highlight");
        });
        parentDiv.classList.add("highlight");*/
      });
    });
  }
  
  document.body.innerHTML = `
  <div>
      <span>Read emails</span>
      <button class="downButton" type="button">&darr;</button>
  </div>
  <div>
      <span>Prepare presentation</span>
      <button class="downButton" type="button">&darr;</button>
      <button class="upButton" type="button">&uarr;</button>
  </div>
  <div>
      <span>Monthly report</span>
      <button class="upButton" type="button">&uarr;</button>
  </div>`;
  
  initialize();
  
  document.querySelectorAll("button")[0].click();
  document.querySelectorAll("button")[3].click();
  document.querySelectorAll("button")[1].click();
  
  console.log(document.body.innerHTML);