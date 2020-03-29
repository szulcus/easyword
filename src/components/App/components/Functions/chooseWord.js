const chooseWord = (...args) => {
	let allWords = [];
	for (let i=0; i<args.length; i++) {
		allWords = allWords.concat(args[i]);
	}
	const index = Math.floor(Math.random()*allWords.length);
	const word = allWords[index];
	return word;
}

export default chooseWord