const checkAndAddControls = () => {
  const controls = document.querySelector(".ytp-right-controls");
  if (controls) {
    const style = document.createElement("style");
    style.innerHTML = `
        .yt-aspect-scaled.html5-video-container {
          height: 100% !important;
        }
        .yt-aspect-scaled .html5-main-video {
          height: 100% !important;
          top: 0 !important;
        }
      `;
    document.head.appendChild(style);

    const button = document.createElement("button");
    button.innerText = "Scale";
    button.classList.add("ytp-button");
    button.style.float = "left";
    button.style.width = "auto";
    button.style.marginRight = "6px";
    button.style.display = "flex";
    button.style.alignItems = "center";
    button.style.padding = "0 14px";

    button.addEventListener("click", () => {
      if (button.innerText === "Scale") {
        button.innerText = "Unscale";
        document
          .querySelector(".html5-video-container")
          .classList.add("yt-aspect-scaled");
      } else {
        button.innerText = "Scale";
        document
          .querySelector(".html5-video-container")
          .classList.remove("yt-aspect-scaled");
      }
    });

    controls.insertBefore(button, controls.firstChild);
  } else {
    // Retry if controls aren't there.
    setTimeout(() => {
      checkAndAddControls();
    }, 100);
  }
};

window.addEventListener("load", checkAndAddControls);
