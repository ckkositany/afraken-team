document.addEventListener("DOMContentLoaded", function () {
	function setEqualHeight() {
		let responsibilityDivs = document.querySelectorAll(".responsibility");
		let maxHeight = 0;

		// Reset heights to auto to correctly calculate the tallest one
		responsibilityDivs.forEach((div) => {
			div.style.height = "auto";
		});

		// Find the maximum height
		responsibilityDivs.forEach((div) => {
			let height = div.offsetHeight;
			if (height > maxHeight) {
				maxHeight = height;
			}
		});

		// Set all divs to the maximum height
		responsibilityDivs.forEach((div) => {
			div.style.height = `${maxHeight}px`;
		});
	}

	// Initial call
	setEqualHeight();

	// Re-apply equal heights on window resize
	window.addEventListener("resize", setEqualHeight);
});
