import getWord from '../Functions/getWord()'
import endGame from '../Functions/endGame()'
import close from '../close'
import words1 from '../../Words/2_Macmillan/Unit1/1_PersonalData'
import words2 from '../../Words/2_Macmillan/Unit1/2_Apperance'
import words3 from '../../Words/2_Macmillan/Unit1/3_Clothes'
import words4 from '../../Words/2_Macmillan/Unit1/4_FeaturesOfCharacters'
import words5 from '../../Words/2_Macmillan/Unit1/5_FeelingsAndEmotions'
import words6 from '../../Words/2_Macmillan/Unit1/6_Interests'
import words7 from '../../Words/2_Macmillan/Unit1/7_EthnicalProblems'
import words8 from '../../Words/2_Macmillan/Unit1/8_Orther'

let points = 0;

function getNew() {
  let randomWord = getWord(words1, words2, words3, words4, words5, words6, words7, words8);
  
  let word1 = randomWord.word1;
  let word2 = randomWord.word2;
  let word3 = randomWord.word3;
  let type = randomWord.type;
  let subtype = randomWord.subtype;
  let subsubtype = randomWord.subsubtype;
  let image = randomWord.image;
  
  let translation1 = randomWord.translation1;
  let translation2 = randomWord.translation2;
  let translation3 = randomWord.translation3;
  
	const baseWord = document.getElementById('baseWord');
	const picture = document.getElementById('picture');
  const cathegory = document.getElementById('cathegory');
  const userText = document.getElementById('userText');

  const checkB = document.getElementById('checkButton');
  const newB = document.getElementById('newButton');

  const takeEnglishWords = document.getElementById('hamburger-list-element-1');
  const takePolishWords = document.getElementById('hamburger-list-element-2');
  const takeAlternatelyWords = document.getElementById('hamburger-list-element-3');
  const hamburger = document.getElementById('hamburger-menu');

	userText.value = '';
	document.getElementById('answer').style.display = 'none';
  
	picture.innerHTML = `<img src="${image}" alt="${word1} image">`;
  
  if(subtype !== undefined) {
    cathegory.innerHTML = `${type} (${subtype})`;
  }

  else if (subsubtype !== undefined) {
    cathegory.innerHTML = `${type} (${subsubtype})`;
  }

  else {
    cathegory.innerHTML = type;
  }
  
	if(word3 !== undefined) {
    baseWord.innerHTML = `${word1} / ${word2} / ${word3}`;
	}
  
	else if(word2 !== undefined) {
    baseWord.innerHTML = `${word1} / ${word2}`;
  }

  else {
    baseWord.innerHTML = word1;
  }

  userText.addEventListener('keypress', function(event){
    if (event.key === 'Enter') {
      getAnswer();
    }
  });

  checkB.addEventListener('click', getAnswer);

  newB.addEventListener('click', getNew);

  takeEnglishWords.addEventListener('click', function(){
    close();
    hamburger.classList.toggle('hamburger--active');
  });

  takePolishWords.addEventListener('click', function(){
    close();
    hamburger.classList.toggle('hamburger--active');
  });

  takeAlternatelyWords.addEventListener('click', function(){
    close();
    hamburger.classList.toggle('hamburger--active');
  });



function getAnswer() {

  let userText = document.getElementById('userText').value;

  const answer = document.getElementById('answer');
  const pointCounter = document.getElementById('pointCounter');
  
  let similarText = userText.toLowerCase().trim().replace('ą','a').replace('ć','c').replace('ę','e').replace('ł','l').replace('ń','n').replace('ó','o').replace('ś','s').replace('ź','z').replace('ż','z');
  
  let similarTranslation = translation1.toLowerCase().replace('ą','a').replace('ć','c').replace('ę','e').replace('ł','l').replace('ń','n').replace('ó','o').replace('ś','s').replace('ź','z').replace('ż','z');
  let similarTranslation2 = '';
  let similarTranslation3 = '';
  
  
  
  if(translation3 !== undefined){
    similarTranslation3 = translation3.toLowerCase().replace('ą','a').replace('ć','c').replace('ę','e').replace('ł','l').replace('ń','n').replace('ó','o').replace('ś','s').replace('ź','z').replace('ż','z');
    if(translation1.includes('(') === true) {
      similarTranslation = similarTranslation.slice(0, translation1.indexOf('(') - 1);
    }
    if(translation2.includes('(') === true) {
      similarTranslation2 = similarTranslation2.slice(0, translation2.indexOf('(') - 1);
    }
    if(translation3.includes('(') === true) {
      similarTranslation3 = similarTranslation3.slice(0, translation3.indexOf('(') - 1);
    }
  }
  
  
  if(translation2 !== undefined) {
    similarTranslation2 = translation2.toLowerCase().replace('ą','a').replace('ć','c').replace('ę','e').replace('ł','l').replace('ń','n').replace('ó','o').replace('ś','s').replace('ź','z').replace('ż','z');
    if(translation1.includes('(') === true) {
      similarTranslation = similarTranslation.slice(0, translation1.indexOf('(') - 1);
    }
    if(translation2.includes('(') === true) {
      similarTranslation2 = similarTranslation2.slice(0, translation2.indexOf('(') - 1);
    }
  }
  
  
  if(translation1 !== undefined) {
    if(translation1.includes('(') === true) {
      similarTranslation = similarTranslation.slice(0, translation1.indexOf('(') - 1)
    }
  }
  
  if(translation3 !== undefined) {
    if(similarText === similarTranslation || similarText === similarTranslation2 || similarText === similarTranslation3) {
      points = points + 1;
      if(points === 50) {
        endGame();
        points = 0;
      }
      else {
        answer.style.color = 'green';
        answer.style.display = 'block';
        answer.innerHTML = `Brawo! Dostajesz punkt! 😁`;
        setTimeout(getNew, 500);
      }
    }
    else {
      answer.style.display = 'block';
      answer.innerHTML = `Źle 😶. Odpowiedź to: <strong>${translation1}</strong>, <strong>${translation2}</strong> lub <strong>${translation3}</strong>`;
      answer.style.color = 'firebrick';
    }
  }
  
  else if(translation2 !== undefined) {
    if(similarText === similarTranslation || similarText === similarTranslation2) {
      points = points + 1;
      if(points === 50) {
        endGame();
        points = 0;
      }
      else {
        answer.style.color = 'green';
        answer.style.display = 'block';
        answer.innerHTML = `Brawo! Dostajesz punkt! 😁`;
        setTimeout(function(){getNew();}, 500);
      }
    }
    else {
      answer.style.display = 'block';
      answer.innerHTML = `Źle 😶. Odpowiedź to: <strong>${translation1}</strong> lub <strong>${translation2}</strong>`;
      answer.style.color = 'firebrick';
    }
  }
  
  else {
    if(similarText === similarTranslation) {
      points = points + 1;
      if(points === 50) {
        endGame();
        points = 0;
      }
      else {
        answer.style.color = 'green';
        answer.style.display = 'block';
        answer.innerHTML = `Brawo! Dostajesz punkt! 😁`;
        setTimeout(function(){getNew();}, 500);
      }
    }
    else {
      answer.style.display = 'block';
      answer.innerHTML = `Źle 😶. Odpowiedź to: <strong>${translation1}</strong>`;
      answer.style.color = 'firebrick';
    }
  }
  
  
  pointCounter.innerHTML = points;
  
  }
}

  export default getNew