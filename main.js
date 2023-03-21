
"use strict";
let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
      audio.play();
    });
  });