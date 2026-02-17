javascript:(function() {
	document.addEventListener('DOMContentLoaded', function() {
		const delay = 5000; // ms
		const shortlistText = "SHORTLIST PENDING"
		const beepFile = "https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3";
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
	})
})();

