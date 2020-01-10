const chooseWord = (...args) => {
	let allWords = [];
	for (let i=0; i<args.length; i++) {
		allWords = allWords.concat(args[i]);
	}
	const randomWord = allWords[Math.floor(Math.random()*allWords.length)];
	return randomWord;
}

export default chooseWord