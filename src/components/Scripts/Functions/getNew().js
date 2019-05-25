import getWord from './getWord()'
import endGame from './endGame()'

// import words1 from '../../../components/Words/3_WSiP/Unit1/1_Rzeczowniki'

let points = 0;

function getNew() {
  // let randomWord = getWord(arg[0]);
  
  
  // let word = randomWord.word;
  // let word2 = randomWord.word2;
  // let type = randomWord.type;
  // let image = randomWord.image;
  
  // let translation = randomWord.translation;
  // let translation2 = randomWord.translation2;
  // let translation3 = randomWord.translation3;
  
	const baseWord = document.getElementById('baseWord');
	const picture = document.getElementById('picture');
  const cathegory = document.getElementById('cathegory');
  const userText = document.getElementById('userText');
  
  userText.style.display = 'none';

// 	userText.value = '';
// 	document.getElementById('answer').innerHTML = '';
  
// 	cathegory.innerHTML = `${type.toUpperCase()}`;
  
// 	if (image !== '') {
//     picture.innerHTML = `<img class="numbers" src="${image}" alt="Brak obrazka!">`;
// 	}
  
// 	else {
//     picture.innerHTML = '';
// 	}
  
// 	if(word2 !== undefined) {
//     baseWord.innerHTML = `${word} / ${word2}`;
// 	}
  
// 	else if(word2 === undefined) {
//     baseWord.innerHTML = word;
//   }

//   userText.addEventListener('keypress', function(event){
//     if (event.key === 'Enter') {
//       getAnswer();
//     }
//   })


// function getAnswer() {

//   let userText = document.getElementById('userText').value;

//   const answer = document.getElementById('answer');
//   const firework = document.getElementById('firework');
//   const pointCounter = document.getElementById('pointCounter');
  
//   let similarText = userText.toLowerCase().trim().replace('ą','a').replace('ć','c').replace('ę','e').replace('ł','l').replace('ń','n').replace('ó','o').replace('ś','s').replace('ź','z').replace('ż','z');
  
//   let similarTranslation = translation.toLowerCase().replace('ą','a').replace('ć','c').replace('ę','e').replace('ł','l').replace('ń','n').replace('ó','o').replace('ś','s').replace('ź','z').replace('ż','z');
//   let similarTranslation2 = '';
//   let similarTranslation3 = '';
  
  
  
//   if(translation3 !== undefined){
//     similarTranslation3 = translation3.toLowerCase().replace('ą','a').replace('ć','c').replace('ę','e').replace('ł','l').replace('ń','n').replace('ó','o').replace('ś','s').replace('ź','z').replace('ż','z');
//     if(translation.includes('(') === true) {
//       similarTranslation = similarTranslation.slice(0, translation.indexOf('(') - 1);
//     }
//     if(translation2.includes('(') === true) {
//       similarTranslation2 = similarTranslation2.slice(0, translation2.indexOf('(') - 1);
//     }
//     if(translation3.includes('(') === true) {
//       similarTranslation3 = similarTranslation3.slice(0, translation3.indexOf('(') - 1);
//     }
//   }
  
  
//   if(translation2 !== undefined) {
//     similarTranslation2 = translation2.toLowerCase().replace('ą','a').replace('ć','c').replace('ę','e').replace('ł','l').replace('ń','n').replace('ó','o').replace('ś','s').replace('ź','z').replace('ż','z');
//     if(translation.includes('(') === true) {
//       similarTranslation = similarTranslation.slice(0, translation.indexOf('(') - 1);
//     }
//     if(translation2.includes('(') === true) {
//       similarTranslation2 = similarTranslation2.slice(0, translation2.indexOf('(') - 1);
//     }
//   }
  
  
//   if(translation !== undefined) {
//     if(translation.includes('(') === true) {
//       similarTranslation = similarTranslation.slice(0, translation.indexOf('(') - 1)
//     }
//   }
  
//   if(translation3 !== undefined) {
//     if(similarText === similarTranslation || similarText === similarTranslation2 || similarText === similarTranslation3) {
//       points = points + 1;
//       if(points === 1) {
//         endGame();
//       }
//       else {
//         answer.style.color = 'green';
//         firework.style.display = 'block';
//         firework.style.animation = 'boom 0.7s ease-out';
//         setTimeout(function(){firework.style.display = 'none';}, 700);
//         answer.innerHTML = `Brawo! Dostajesz punkt! 😁`;
//         setTimeout(function(){getNew();}, 500);
//       }
//     }
//     else {
//       answer.innerHTML = `Źle 😶. Odpowiedź to: <strong>${translation}</strong>, <strong>${translation2}</strong> lub <strong>${translation3}</strong>`;
//       answer.style.color = 'firebrick';
//       answer.style.animation = 'scale 0.3s ease-in-out';
//     }
//   }
  
//   else if(translation2 !== undefined) {
//     if(similarText === similarTranslation || similarText === similarTranslation2) {
//       points = points + 1;
//       if(points === 1) {
//         endGame();
//       }
//       else {
//         answer.style.color = 'green';
//         firework.style.display = 'block';
//         firework.style.animation = 'boom 0.7s ease-out';
//         setTimeout(function(){firework.style.display = 'none';}, 700);
//         answer.innerHTML = `Brawo! Dostajesz punkt! 😁`;
//         setTimeout(function(){getNew();}, 500);
//       }
//     }
//     else {
//       answer.innerHTML = `Źle 😶. Odpowiedź to: <strong>${translation}</strong> lub <strong>${translation2}</strong>`;
//       answer.style.color = 'firebrick';
//       answer.style.animation = 'scale 0.3s ease-in-out';
//     }
//   }
  
//   else {
//     if(similarText === similarTranslation) {
//       points = points + 1;
//       if(points === 1) {
//         endGame();
//       }
//       else {
//         answer.style.color = 'green';
//         firework.style.display = 'block';
//         firework.style.animation = 'boom 0.7s ease-out';
//         setTimeout(function(){firework.style.display = 'none';}, 700);
//         answer.innerHTML = `Brawo! Dostajesz punkt! 😁`;
//         setTimeout(function(){getNew();}, 500);
//       }
//     }
//     else {
//       answer.innerHTML = `Źle 😶. Odpowiedź to: <strong>${translation}</strong>`;
//       answer.style.color = 'firebrick';
//       answer.style.animation = 'scale 0.3s ease-in-out';
//     }
//   }
  
  
//   pointCounter.innerHTML = points;
  
//   }
}

  export default getNew