"use strict";
const audio = new Audio("ES_Button Switch Click 1 - SFX Producer.mp3");
const buttons = document.querySelectorAll("button");
const pomodoro = document.querySelector(".pomodoro");
const short = document.querySelector(".short-break");
const long = document.querySelector(".long-break");
const timer = document.querySelector(".timer");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
      audio.play();
    });
});

var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function (e) {
  cursor.style.cssText = cursor2.style.cssText =
    "left: " + e.clientX + "px; top:" + e.clientY + "px;";
});

