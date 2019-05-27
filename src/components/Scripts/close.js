function expand() {
	const settings = document.getElementById('settings');
	const list = document.getElementById('hamburger-list');
	const list1 = document.getElementById('hamburger-list-element-1');
	const list2 = document.getElementById('hamburger-list-element-2');
	const list3 = document.getElementById('hamburger-list-element-3');
	const back = document.getElementById('back');
	const loader = document.getElementById('loader-bg');
	const socialMedia = document.getElementById('social-media');

		list.classList.toggle('slide');

		if (window.matchMedia("(min-width: 550px)").matches) {
			if (list.classList.contains('slide')){
				list1.style.transform = 'translateX(-100vw)';
				list2.style.transform = 'translateX(-100vw)';
				list3.style.transform = 'translateX(-100vw)';
				back.style.transform = 'translateX(-100vw)';
			}
			
			else {
				list1.style.transform = 'translateX(0)';
				list2.style.transform = 'translateX(0)';
				list3.style.transform = 'translateX(0)';
				back.style.transform = 'translateX(0)';
			}
		}
		
		else {
			if (list.classList.contains('slide')){
				settings.style.display = 'block';
				socialMedia.style.transform = 'translateY(-15vh)';
				socialMedia.style.opacity = '1';
				loader.style.display = 'block';
				list1.style.transform = 'translateY(100vh)';
				list2.style.transform = 'translateY(100vh)';
				list3.style.transform = 'translateY(100vh)';
				back.style.transform = 'translateY(100vh)';
			}
			
			else {
				settings.style.display = 'none';
				socialMedia.style.transform = 'translateY(0)';
				socialMedia.style.opacity = '0.5';
				loader.style.display = 'none';
				list1.style.transform = 'translateY(0)';
				list2.style.transform = 'translateY(0)';
				list3.style.transform = 'translateY(0)';
				back.style.transform = 'translateY(0)';
			}
		}

}
export default expand;
