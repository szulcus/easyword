const chooseWord = (...args) => {
	let allWords = [];
	for (let i=0; i<args.length; i++) {
		allWords = allWords.concat(args[i]);
	}
	const index = Math.floor(Math.random() * (allWords.length - 1));
	const word = allWords[index];
	return word;
}

export default chooseWord