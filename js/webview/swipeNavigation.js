/* detects back/forward swipes */

window.addEventListener("mousewheel", function (e) {
	if (e.deltaY > 7 || e.deltaY < -7) {
		return;
	}

	if (!documentUnloaded) {

		totalMouseMove += e.deltaX


		if (totalMouseMove < -150) {
			doneNavigating = true;
			window.history.back();
			documentUnloaded = true;
			console.log("going back");
			setTimeout(function () {
				documentUnloaded = false;
			}, 3000);
		} else if (totalMouseMove > 100) {
			console.log("going forward");
			documentUnloaded = true;
			window.history.go(1);
			console.log(e);
			setTimeout(function () {
				documentUnloaded = false;
			}, 3000);
		}

	}
});

setInterval(function () {
	totalMouseMove = 0;
}, 4000)
