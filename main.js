"use strict";
const audio = new Audio("ES_Button Switch Click 1 - SFX Producer.mp3");
const buttons = document.querySelectorAll("button");
const pomodoro = document.querySelector(".pomodoro");
const short = document.querySelector(".short-break");
const long = document.querySelector(".long-break");
const timer = document.querySelector(".timer");
const tbox = document.querySelector(".timer-box");
const start = document.querySelector(".start");

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

short.addEventListener("click", function (e) {
  timer.textContent = "5:00";
  tbox.style.background = "#4C9196";
  start.style.color = "#4C9196";
  document.body.style.background = "#38858A";
});
pomodoro.addEventListener("click", function (e) {
  timer.textContent = "25:00";
  tbox.style.background = "#C15C5C";
  start.style.color = "#C15C5C";
  document.body.style.background = "#BA4949";
});
long.addEventListener("click", function (e) {
  timer.textContent = "15:00";
  tbox.style.background = "#4D7FA2";
  start.style.color = "#4D7FA2";
  document.body.style.background = "#397097";
});