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

// Modal controls
function toggleModal () {
    const body = document.querySelector('body')
    const modal = document.querySelector('.modal')
    modal.classList.toggle('opacity-0')
    modal.classList.toggle('pointer-events-none')
    body.classList.toggle('modal-active')
}

let modalOpeners = document.querySelectorAll('.modal-open')
modalOpeners.forEach(opener => {
	opener.addEventListener('click', event => {
		event.preventDefault()
		toggleModal()
	});
});

const overlay = document.querySelector('.modal-overlay')
overlay.addEventListener('click', toggleModal)

let modalClosing = document.querySelectorAll('.modal-close')
modalClosing.forEach(closingElement => {
	closingElement.addEventListener('click', toggleModal);
});

     
