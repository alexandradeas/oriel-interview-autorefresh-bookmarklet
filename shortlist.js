"use strict";
(function() {
	const url = "https://www.oriel.nhs.uk/Web/Applicant/Application";
	const delay = 5000; // ms
	const beepFile =
		"https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3";

	if (window.location.href === url) {
		const beep = new Audio(beepFile);

		document.addEventListener("DOMContentLoaded", function() {
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
		});
	}
})();
