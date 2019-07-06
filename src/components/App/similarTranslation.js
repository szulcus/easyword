function similarTranslation(translation) {
	let newTranslation = undefined;
	if(translation !== undefined) {
		newTranslation = translation.toLowerCase().replace('ą','a').replace('ć','c').replace('ę','e').replace('ł','l').replace('ń','n').replace('ó','o').replace('ś','s').replace('ź','z').replace('ż','z');
	}
	return newTranslation
}

export default similarTranslation