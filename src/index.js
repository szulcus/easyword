import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './New-App';
import * as serviceWorker from './serviceWorker';

import getWord from './components/Scripts/Functions/getWord()'
// import words1 from './components/Words/2_Macmillan/Unit1/1_PersonalData'
// import words2 from './components/Words/2_Macmillan/Unit1/2_Apperance'
// import words3 from './components/Words/2_Macmillan/Unit1/3_Clothes'
import words5 from './components/Words/3_WSiP/Unit1/5_ZjawiskaPogodowe'

// choose a word object
let randomWord = getWord(words5);

// variables
let word1 = randomWord.word1;
let word2 = randomWord.word2;
let word3 = randomWord.word3;
let type = randomWord.type;
let subtype = randomWord.subtype;
let subsubtype = randomWord.subsubtype;
let image = randomWord.image;
let translation1 = randomWord.translation1;
// let translation2 = randomWord.translation2;
// let translation3 = randomWord.translation3;

// replace alt attribute
if (image === `url`) {
	image = `https://fakeimg.pl/647x400/?text=${randomWord.word1}`;
}

// subtype and subsubtype exceptions
if(subtype !== undefined) {
	type = `${type} (${subtype})`;
}

else if (subsubtype !== undefined) {
	type = `${type} (${subsubtype})`;
}

// word2 and word3 exceptions
if(word3 !== undefined) {
	word1 = `${word1} / ${word2} / ${word3}`;
}

else if(word2 !== undefined) {
	word1 = `${word1} / ${word2}`;
}

ReactDOM.render(
	<App
		cathegory={type}
		word={word1}
		translation={translation1}
		picture={image}
		language="ru"
	/>,
	document.getElementById('root')
	);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
