/*
 * modal.js
 *
 * Author: Namya Malik
 * 
 * This code is based (but heavily modified) on a video tutorial: https://www.youtube.com/watch?v=90bURgQDNkY
 *
 */

const projectsContainer = document.querySelector('.projects-section')

projectsContainer.addEventListener('click', e=> {
// 	console.log(e)
	e.preventDefault()
	
	const modalToggle = e.target.closest('.overlay-container')
	// console.log(modalToggle)

	if (! modalToggle) return // immediately end script if user clicks on something that's not overlay container

	/**************** OPENING THE MODAL ****************/
	const modalOpen = modalToggle.nextElementSibling // modal is the next element sibling of overlay-container in index.html
	// console.log(modalOpen)
	modalOpen.classList.add('open')
	
	// DISABLE HEADER LINKS WHEN A MODAL IS OPEN
	var logoLink = document.getElementById('logoLinkID')
	var aboutLink = document.getElementById('aboutLinkID')
	var projectsLink = document.getElementById('projectsLinkID')
	// console.log(logoLink)
	logoLink.classList.add('disable') // see CSS for a.disable functionality
	aboutLink.classList.add('disable')
	projectsLink.classList.add('disable')
	
	// 	DISABLE CLICK ON OTHER OVERLAY CONTAINERS in BACKGROUND WHEN A MODAL IS OPEN
	var overlayContainerArray = document.getElementsByClassName('overlay-container'); // returns an array of all elements with that class name
	for (var i = 0; i < overlayContainerArray.length; i++) { // loop through array to disable each overlay container
		console.log(overlayContainerArray[i])
		overlayContainerArray[i].classList.add('disable') // see CSS for .overlay-container.disable functionality
	}
	      
	/**************** CLOSING THE MODAL ****************/
	const closeButton = modalOpen.querySelector('.modal-close-button') // inside of the modal find the close button
	closeButton.addEventListener('click', _=> {
	
		// ENABLE HEADER LINKS AGAIN
		modalOpen.classList.remove('open') 
		logoLink.classList.remove('disable')
		aboutLink.classList.remove('disable')
		projectsLink.classList.remove('disable')
		
		// ENABLE OVERLAY CONTAINER FUNCTIONALITY AGAIN
		for (var i = 0; i < overlayContainerArray.length; i++) { // loop through array to enable each overlay container
			console.log(overlayContainerArray[i])
			overlayContainerArray[i].classList.remove('disable')
		}	

	}) // line 37 event listener closing brackets

})	// line 5 event listener closing brackets
