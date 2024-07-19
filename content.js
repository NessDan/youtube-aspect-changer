window.addEventListener("load", () => {
  const controls = document.querySelector(".ytp-right-controls");
  if (controls) {
    const button = document.createElement("button");
    button.innerText = "Scale";
    button.classList.add("ytp-button");
    button.style.float = "left";
    button.style.width = "auto";
    button.style.marginRight = "6px";

    const btnListener = button.addEventListener("click", () => {
      const style = document.createElement("style");
      style.innerHTML = `
        .html5-main-video {
          height: 100vh !important;
          top: 0 !important;
        }
      `;
      document.head.appendChild(style);
      document.removeEventListener("click", btnListener);
    });

    controls.insertBefore(button, controls.firstChild);
  }
});
