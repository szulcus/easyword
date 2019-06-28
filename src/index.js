import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './New-App';
import * as serviceWorker from './serviceWorker';

import getWord from './components/Scripts/Functions/getWord()'
import words1 from './components/Words/2_Macmillan/Unit1/1_PersonalData'
import words2 from './components/Words/2_Macmillan/Unit1/2_Apperance'
import words3 from './components/Words/2_Macmillan/Unit1/3_Clothes'

let randomWord = getWord(words1, words2, words3);
console.log(randomWord.type);

ReactDOM.render(
	<App
		cathegory={randomWord.type}
		word={randomWord.word1}
	/>,
	document.getElementById('root')
	);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
