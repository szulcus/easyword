import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './New-App';
import * as serviceWorker from './serviceWorker';

import getWord from './components/Scripts/Functions/getWord()'
// import words1 from './components/Words/2_Macmillan/Unit1/1_PersonalData'
// import words2 from './components/Words/2_Macmillan/Unit1/2_Apperance'
// import words3 from './components/Words/2_Macmillan/Unit1/3_Clothes'
import words5 from './components/Words/2_Macmillan/Unit1/5_FeelingsAndEmotions'

import information from './images/information.png'

let randomWord = getWord(words5);
console.log(randomWord.type);

if (randomWord.image === `url`) {
	randomWord.image = `https://fakeimg.pl/647x400/?text=${randomWord.word1}`;
}

ReactDOM.render(
	<App
		cathegory={randomWord.type}
		word={randomWord.word1}
		picture={randomWord.image}
	/>,
	document.getElementById('root')
	);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
