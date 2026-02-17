// ==UserScript==
// @name         Application - Interview Hold
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       Alexandra Deas
// @description  Auto-refreshes the oriel page and plays an audible and alert when interview becomes available
// @match        https://www.oriel.nhs.uk/Web/Application/Application
// @grant        none
// ==/UserScript==

(function() {
	const delay = 60000; // 1m
	const beepFile =
		"https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3";

	const beep = new Audio(beepFile);

meout(function() {
		const block = document.getElementById("stageInterview");
		const inProgress = block.querySelector(".in-progress");

		if (inProgress) {
			console.log('interview stage is in progress');
			beep.play();
			alert("Interview stage available");
		} else {
			console.log('interview stage not in progress, reloading...');
			window.location.reload();
		}
	}, delay);
})();
