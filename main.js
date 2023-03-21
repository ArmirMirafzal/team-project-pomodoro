"use strict";
const audio = new Audio("ES_Button Switch Click 1 - SFX Producer.mp3");
const buttons = document.querySelectorAll("button");
const pomodoro = document.querySelector(".pomodoro");
const short = document.querySelector(".short-break");
const long = document.querySelector(".long-break");
const timer = document.querySelector(".timer");
const tbox = document.querySelector(".timer-box");
const start = document.querySelector(".start");
const actionBtns = document.querySelectorAll(".main-menu")

let time = 1500;
let intervalID;


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

function mainBtns(func, color, backcolor,twobackcolor){
    timer.textContent = func;
    tbox.style.background = backcolor;
    start.style.color = color;
    document.body.style.background = twobackcolor;
}

short.addEventListener("click", function (e) {
    mainBtns(timeConvertor(300),"#4C9196","#4C9196","#38858A");
});
pomodoro.addEventListener("click", function (e) {
    mainBtns(timeConvertor(1500),"#C15C5C","#C15C5C","#BA4949");
});
long.addEventListener("click", function (e) {
    mainBtns(timeConvertor(900),"#4D7FA2","#4D7FA2","#397097");
});



function handleStart() {
	const isActive = start.classList.contains("active");
	start.classList.toggle("active");
	start.innerText = isActive ? "START" : "PAUSE";

	const value = timeConvertor(time);
	console.log("value = ", value);
	if (isActive) {
		clearInterval(intervalID);
	} else {
		intervalID = setInterval(() => {
			time--;
			timer.innerText = timeConvertor(time);
		}, 1000);
	}
}


function handleActionBtnClick(actionBtn) {
	const currentTime = +actionBtn.getAttribute("time");
	const isActive = actionBtn.classList.contains("active");

	if (!isActive) {
		const isYes = start.classList.contains("active") ? confirm(`${actionBtn.innerText} 🧐 ? `) : true;

		if (isYes) {
			for (let btn of actionBtns) {
				btn.classList.remove("active");
			}

			clearInterval(intervalID);
			time = currentTime;
			timer.innerText = timeConvertor(time);
			start.classList.remove("active");
			start.innerText = `START`;
			actionBtn.classList.add("active");
		}
	}
}

function timeConvertor(time) {
	const minute = Math.floor(time / 60); // 1480 -> 24
	const second = time % 60; // 1480 % 60 = 40

	let result = (minute < 10 ? "0" : "") + minute;
	result += ":" + (second < 10 ? "0" : "") + second;

	return result;
}

function init() {
	start.addEventListener("click", handleStart);

	actionBtns.forEach((btn) => {
		btn.addEventListener("click", () => handleActionBtnClick(btn));
	});
}

init();
