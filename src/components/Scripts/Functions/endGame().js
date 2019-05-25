function endGame() {

	const socialMedia = document.getElementById('social-media');
	const background = document.getElementById('end-game');
	const information = document.getElementById('information');

	background.style.display = 'flex';
	information.style.display = 'block';
	socialMedia.style.transform = 'translateY(-10vh)';
	socialMedia.style.opacity = '1';
}

export default endGame