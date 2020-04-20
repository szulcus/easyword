import latinize from 'latinize'
function similarTranslation(translation) {
	let newTranslation = undefined;
	if(translation !== undefined) {
		newTranslation = latinize(translation.toLowerCase())
		if (translation.includes('(')) {
			newTranslation = newTranslation.replace( /(.+)/gi, '').replace(/(.+) /gi, '')
		}
	}
	return newTranslation
}

export default similarTranslation