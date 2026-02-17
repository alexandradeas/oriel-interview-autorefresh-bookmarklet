// ==UserScript==
// @name         Shortlist
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       Alexandra Deas
// @description  Auto-refreshes the oriel page and plays an audible and alert on status change
// @match        https://www.oriel.nhs.uk/Web/Application/Application
// @grant        none
// ==/UserScript==

(function() {
	const delay = 60000; // 1m
	const beepFile =
		"https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3";

	const beep = new Audio(beepFile);

	setTimeout(function() {
		const shortlistBlock = document.getElementById("stageShortlist");
		const inProgress = shortlistBlock.querySelector(".in-progress");
		const passed = shortlistBlock.querySelector(".passed");
		if (inProgress) {
			window.location.reload();
		} else if (passed) {
			beep.play();
			alert("Interview slots available");
		} else {
			beep.play();
			alert("Unknown shortlist status");
		}
	}, delay);
})();
