function endGame() {

	const socialMedia = document.getElementById('social-media');
	const background = document.getElementById('end-game');
	const information = document.getElementById('information');
	const userText = document.getElementById('userText');
	const answer = document.getElementById('answer');

	answer.style.display = 'none';
	userText.style.display = 'none';
	background.style.display = 'flex';
	information.style.display = 'block';
	socialMedia.style.transform = 'translateY(-10vh)';
	socialMedia.style.opacity = '1';
}

export default endGame