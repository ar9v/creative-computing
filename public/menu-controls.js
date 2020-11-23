let menuButton = document.querySelector("#mainMenuButton")
let openButton = document.querySelector("#openButton")
let closeButton = document.querySelector("#closeButton")
let mobileMenu = document.querySelector("#mobileMenu")

menuButton.addEventListener("click", (e) => {
	// Change the svg in the button
	closeButton.classList.toggle("hidden")
	openButton.classList.toggle("hidden")

	// Display the block with the corresponding
	// menu options
	mobileMenu.classList.toggle("hidden")
});

// Card animations
let cards = document.querySelectorAll(".card")

cards.forEach(card => {
	card.addEventListener("mouseenter", () => {
		card.classList.toggle("animate-pulse")
	});

	card.addEventListener("mouseleave", () => {
		card.classList.toggle("animate-pulse")
	});
});
     
