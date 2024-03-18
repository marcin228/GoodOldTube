/**
 * Hides elements queried with elementSelector parameter. By declaring hasElement parameter you can get :has() equivalent query behaviour.
 * @param {string} elementSelector
 * @param {string} [hasElement = '']
 * @returns {void}
 */
function hideElement(elementSelector, hasElement = ''){

	let interval;
	let elementsNum = 0;
	let hz = 60;

	function intervaledRemoving(elementSelector, hasElement){
		
		interval = setInterval(() => {
			
			let elementsSelected = document.querySelectorAll(elementSelector);
			
			if(elementsNum !== elementsSelected.length){
				elementsNum = elementsSelected.length;
				return;
			}
			
			if(elementsSelected !== undefined && elementsSelected.length !== 0){
			
				if(hasElement != '' && elementsSelected.querySelectorAll(hasElement).length == 0)
					return;
			
				elementsSelected.forEach(element => {
					element.style.display = 'none';
				});
				
				clearInterval(interval);
			}
		}, 1000 / hz);
	}
	
	intervaledRemoving(elementSelector);
}

/**
 * Driver function. Called on page load and scroll event.
 * @returns {void}
 */
function init(){
	
	document.documentElement.style.setProperty('--ytd-rich-grid-items-per-row', 8);
	hideElement('div #header');
	hideElement('.ytd-rich-section-renderer');
	hideElement('#chips-wrapper');
}

window.addEventListener('load', init);
window.addEventListener('scroll', init);