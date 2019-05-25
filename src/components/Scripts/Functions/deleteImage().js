function deleteImage() {
	const image = document.getElementById('picture');
	const information = document.getElementById('delete-information');
	const yes = document.getElementById('yes');
	const no = document.getElementById('no');
	information.style.animation = "scale 0.3s ease-out";
	information.style.display = "flex";
	yes.addEventListener('click', function(){
		image.style.display = "none";
		information.style.animation = "scaleOut 0.3s ease-out";
		setTimeout(function(){
			information.style.display = "none";
		}, 250);
	})
	no.addEventListener('click', function(){
		information.style.animation = "scaleOut 0.3s ease-out";
		setTimeout(function(){
			information.style.display = "none";
		}, 250);
	})
}

export default deleteImage;