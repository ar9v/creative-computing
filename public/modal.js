// Check for the artist, to know which json to load
let jsonName = document.querySelector('body').id
let titleElem = document.querySelector('#workTitle')
let descrElem = document.querySelector('#description')
let explElem = document.querySelector('#explanation')
let modalImage = document.querySelector('#modalImage')
let link = document.querySelector('#link')
let pageData

// Get the page data
fetch(`text/${jsonName}`)
	.then(response => response.json())
	.then(data => pageData = data);

// Fill in the information with the page data
function fillModal(element) {
	// This should actually be undefined-checked
	let info = pageData[element.id]

	titleElem.innerHTML = info.title
	descrElem.innerHTML = info.description
	explElem.innerHTML = info.explanation
	modalImage.src = info.bg
	link.href = info.link
}

// Modal controls
function toggleModal () {
	const modal = document.querySelector('.modal')
    const body = document.querySelector('body')
    modal.classList.toggle('opacity-0')
    modal.classList.toggle('pointer-events-none')
    body.classList.toggle('modal-active')
}

let modalOpeners = document.querySelectorAll('.modal-open')
modalOpeners.forEach(opener => {
	opener.addEventListener('click', event => {
		event.preventDefault()
		toggleModal()
		fillModal(event.currentTarget)
	});
});

const overlay = document.querySelector('.modal-overlay')
overlay.addEventListener('click', toggleModal)

let modalClosing = document.querySelectorAll('.modal-close')
modalClosing.forEach(closingElement => {
	closingElement.addEventListener('click', toggleModal);
});

