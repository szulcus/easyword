import latinize from 'latinize'
function similarTranslation(translation) {
	let newTranslation = undefined;
	if(translation !== undefined) {
		newTranslation = latinize(translation.toLowerCase())
		if (translation.includes('(')) {
			newTranslation = newTranslation.replace(newTranslation.slice(translation.indexOf('(')-1, translation.indexOf(')') + 1), '')
		}
	}
	return newTranslation
}

export default similarTranslation