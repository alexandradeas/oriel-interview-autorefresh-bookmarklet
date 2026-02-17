javascript:(function() {
	document.addEventListener('DOMContentLoaded', function() {
		const delay = 5000; // ms
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
	})
})()
