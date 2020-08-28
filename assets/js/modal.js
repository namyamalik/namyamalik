/** This code is based (but heavily modified) on a video tutorial: https://www.youtube.com/watch?v=90bURgQDNkY **/

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
	
	
	
	
	
	// window.addEventListener('mouseup', function(event) {
// 		var modalBox = document.getElementById('modalID')
// 		var bigArray = []
// 		myFunction(modalBox, ...bigArray)
// 		
// 		console.log(bigArray.length)
// 		
// 		var j
// 		for (j = 0; j < bigArray.length; j++) {
//   		 	console.log(bigArray[j])
//   		 	console.log(event.target)
//   		 	if (event.target != bigArray[j]) {
//   		 		modalOpen.classList.remove('open')
//   		 	}
//   		 }
// 	});
// 	
// 	function myFunction(parent, ...largeArray) {	
//   		var childArray = parent.children;
//   		var i
//   		for (i = 0; i < childArray.length; i++) {
//   			largeArray.push(childArray[i])
//   			myFunction(childArray[i])
//   		}
//   		console.log(largeArray.length)
  		 
  			// console.log(childArray[i])
//   			console.log(event.target)
//   			if (event.target != parent && event.target != childArray[i]) {
//   				myFunction(childArray[i])
//   			}
//   			modalOpen.classList.remove('open')
//     }
		
	// console.log(event.target)
// 	if (event.target != modalBox && event.target != modalWords && event.target != modalImages
// 	&& event.target.parentNode != modalBox && event.target.parentNode != modalWords 
// 	&& event.target.parentNode != modalImages) {
// 		modalOpen.classList.remove('open')
// 	}

	
// 		var modalArray = ['modal1ID', 'modal2ID', 'modal3ID', 'modal4ID', 'modal5ID', 'modal6ID', 'modal7ID', 'modal8ID']
		// var modalArray = ['modal1ID', 'modal2ID']
// 		window.addEventListener('mouseup', function(event) {
// 			
// 			console.log(event.target)
// 			console.log(event.target.parentNode)
// 			console.log(event.target.parentNode.parentNode)
// 			
// 			var i = 0
// 			while (i < modalArray.length) {
// 				var modalBox = document.getElementById(modalArray[i])
// 				if (i == (modalArray.length - 1)) {
// 					if (event.target != modalBox 
// 					&& event.target.parentNode != modalBox 
// 					&& event.target.parentNode.parentNode != modalBox
// 					&& event.target.parentNode.parentNode.parentNode != modalBox) {
// 						console.log(modalBox.id)
// 						return
// 					}	
// 					else {
// 						modalOpen.classList.remove('open')
// 					}
// 				}
// 				
// 				else {
// 					if (event.target != modalBox 
// 					&& event.target.parentNode != modalBox 
// 					&& event.target.parentNode.parentNode != modalBox
// 					&& event.target.parentNode.parentNode.parentNode != modalBox) {
// 						i++	
// 					}
// 					else {
// 						i++
// 					}
// 				}
// 			}
			
			
		// var modalWords = document.getElementById('modalWordsID')
// 		var modalImages = document.getElementById('modalImagesID')
	
		
		// console.log(event.target)
// 		console.log(event.target.parentNode)
		
		
		// function myFunction() {
//   			var c = modalBox.children;
//   			var i;
//   			for (i = 0; i < c.length; i++) {
//   				console.log(c[i])
//     		}
// 		}
		
// 	});
		
	
// 	window.addEventListener('mouseup', function(event) {
// 		var modalBox = document.getElementById('modalID')
// 		var modalWords = document.getElementById('modalWordsID')
// 		var modalImages = document.getElementById('modalImagesID')
// 		
// 		console.log(event.target)
// 		if (event.target != modalBox && event.target != modalWords && event.target != modalImages
// 		&& event.target.parentNode != modalBox && event.target.parentNode != modalWords 
// 		&& event.target.parentNode != modalImages) {
// 			modalOpen.classList.remove('open')
// 		}
// 		
// 		function myFunction() {
//   			var c = modalBox.children;
//   			var i;
//   			for (i = 0; i < c.length; i++) {
//   				console.log(c[i])
//     		}
// 		}
// 		
// 	});
// 
	
// 	console.log(modalOpen.classList.contains('open'))
	// if (modalOpen.classList.contains('open') == true) {
// 		window.addEventListener('click', evt=> {
// 		console.log(evt)
// 	const modalElement = document.getElementById('.modal');
//     let targetElement = evt.target; // clicked element	
//     console.log(targetElement)
// 	const modalID = document.getElementById("modalID");
//     if (targetElement == modalID) console.log(targetElement)
//     })
//     }
	
	// const closeAnywhere = modalToggle.nextElementSibling // inside of the modal find the close button
// 	modalOpen.addEventListener('click', _=> {
// 		console.log(e)
// 		var clicked = "true";
// 		console.log(clicked)
// 			if (clicked == true) modalOpen.classList.remove('open') 
// 	})	


// document.addEventListener('click', evt=> {
// 	console.log(evt)
// 	const modalElement = document.getElementById('.modal');
//     let targetElement = evt.target; // clicked element	
//     console.log(targetElement)
    
   //  if (targetElement == modalElement) {
//         // This is a click inside. Do nothing, just return.
//         console.log(evt)
//         return;
//     }
//     // Go up the DOM
//     targetElement = targetElement.parentNode;
// })
