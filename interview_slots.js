// ==UserScript==
// @name         Interview Slots
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Run my script on page load
// @match        https://www.oriel.nhs.uk/Web/Application/Interview
// @grant        none
// ==/UserScript==

(function() {
	"use strict";
	const delay = 60000; // 1m
	const beepFile = "https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3";

	const beep = new Audio(beepFile);

	setTimeout(function() {
		const noData = document.querySelector("#noDataMessage").checkVisibility();
		if (noData) {
			window.location.reload();
		} else {
			beep.play();
			alert("Interview slots available");
		}
	}, delay);
})()
