import close from './close'
function removeButtons() {
	const buttons = document.getElementById('nav');
	const hamburger = document.getElementById('hamburger-menu');

	buttons.style.display = 'none';
	close();
	hamburger.classList.toggle('hamburger--active');

}

export default removeButtons