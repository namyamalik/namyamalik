// this code is based (but adapted) on a video tutorial: https://www.youtube.com/watch?v=90bURgQDNkY

const projectsContainer = document.querySelector('.projects-categories')

projectsContainer.addEventListener('click', e=> {
	console.log(e)
	e.preventDefault()
	
const modalToggle = e.target.closest('.overlay-container')
console.log(modalToggle)

if (! modalToggle) return // immediately end script if user clicks on something that's not overlay container

const modalOpen = modalToggle.nextElementSibling // modal is the next element sibling in index.html
console.log(modalOpen)
modalOpen.classList.add('open')

const closeButton = modalOpen.querySelector('.modal-close-button') // inside of the modal find the close button
closeButton.addEventListener('click', _=> {
	console.log(e)
	modalOpen.classList.remove('open') 
	})

})
