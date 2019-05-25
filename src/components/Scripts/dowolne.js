function dowolne(...args) {
	let allWords = [];
	for (let i=0; i<args.length; i++) {
		allWords = allWords.concat(args[i]);
	}
	console.log(allWords);
	const randomWord = allWords[Math.floor(Math.random()*allWords.length)];
	console.log(randomWord);
}

export default dowolne

// import words1 from '../../Words/3_WSiP/Unit1/1_Rzeczowniki'
// import words2 from '../../Words/3_WSiP/Unit1/2_StronyŚwiata'
// import words3 from '../../Words/3_WSiP/Unit1/3_PytaniaOMiejsceIKierunek'
// import words4 from '../../Words/3_WSiP/Unit1/4_PoryRokuINazwyMiesięcy'

// function getWord() {
//   const allWords = [].concat(words1, words2, words3, words4);
//   const randomWord = allWords[Math.floor(Math.random()*allWords.length)];
//   return randomWord;
// }

// export default getWord