// Helper functions
const get = (selector, scope) => {
  scope = scope ? scope : document;
  return scope.querySelector(selector);
};

const getAll = (selector, scope) => {
  scope = scope ? scope : document;
  return scope.querySelectorAll(selector);
};

// Declarations
const mainMenuButton = get("#mainMenuButton");
const openButtonSVG = get("#openButton");
const closeButtonSVG = get("#closeButton");
const mobileMenu = get("#mobileMenu");
const menuEntries = getAll(".menu a");

// Change from
// hidden -> block and block -> hidden on button

// Functions
mainMenuButton.addEventListener("click", () => {
	// TODO:
	// Implement a lock for the hidden state
	// i.e. we must prevent both buttons from
	// having the hidden class at the same time
	// or not having it at all.
	openButtonSVG.classList.toggle("hidden");
	closeButtonSVG.classList.toggle("hidden");
	mobileMenu.classList.toggle("hidden");
});

menuEntries.forEach(entry => {
	entry.addEventListener("click", (event) => {
		get("#topic-text").innerText =
			event.currentTarget.dataset.topic;

		get("#header-text").innerText =
			event.currentTarget.innerText;
	});
});

