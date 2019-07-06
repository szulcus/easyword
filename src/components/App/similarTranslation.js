function similarTranslation(translation) {
	return translation
		.toLowerCase()
		.replace('ą','a')
		.replace('ć','c')
		.replace('ę','e')
		.replace('ł','l')
		.replace('ń','n')
		.replace('ó','o')
		.replace('ś','s')
		.replace('ź','z')
		.replace('ż','z');
}

export default similarTranslation