import words1 from '../../components/Words/2_Macmillan/Unit1/1_PersonalData'
import words2 from '../../components/Words/2_Macmillan/Unit1/2_Apperance'
import words3 from '../../components/Words/2_Macmillan/Unit1/3_Clothes'
import words4 from '../../components/Words/2_Macmillan/Unit1/4_FeaturesOfCharacters'
import words5 from '../../components/Words/2_Macmillan/Unit1/5_FeelingsAndEmotions'
import words6 from '../../components/Words/2_Macmillan/Unit1/6_Interests'
import words7 from '../../components/Words/2_Macmillan/Unit1/7_EthnicalProblems'
import words8 from '../../components/Words/2_Macmillan/Unit1/8_Orther'

let points = 0;
let allWords = [].concat(words1, words2, words3, words4, words5, words6, words7, words8);
let getWord = allWords[Math.floor(Math.random()*allWords.length)];
let word = getWord.word;
let word2 = getWord.word2;
let translation = getWord.translation;
let translation2 = getWord.translation2;
let translation3 = getWord.translation3;
let type = getWord.type;
let image = getWord.image;

function getNew() {
	const baseWord = document.getElementById('baseWord');
	const picture = document.getElementById('picture');
	const cathegory = document.getElementById('cathegory');
	
	document.getElementById('userText').value = '';
	document.getElementById('answer').innerHTML = '';
  
	cathegory.innerHTML = `${type.toUpperCase()}`;
  
	if (image !== '') {
    picture.innerHTML = `<img class="numbers" src="${image}" alt="dwa">`;
	}
  
	else {
    picture.innerHTML = '';
	}
  
	if(word2 !== undefined) {
    baseWord.innerHTML = `${word} / ${word2}`;
	}
  
	else if(word2 === undefined) {
    baseWord.innerHTML = word;
  }
  
}


  
  function consoleWords() {
    console.log(allWords);
    document.getElementById('answer').innerHTML = "coś";
  }
  
  function endGame(information, firework1, firework2, firework3) {
    document.getElementById('picture').innerHTML = `<div class="numbers"></div>`;
    document.getElementById('userText').style.display = 'none';
    document.getElementById('nav').innerHTML = '';
    
    firework1.style.display = 'block';
    firework2.style.display = 'block';
    firework3.style.display = 'block';
    
    firework1.style.animation = 'boom 0.7s ease-out';
    firework2.style.animation = 'boom 0.7s ease-out';
    firework3.style.animation = 'boom 0.7s ease-out';
    setTimeout(700);
    

  information.style.animation = 'scale 0.3s ease-in'
  information.innerHTML = `Gratulacje! zdobyłeś/aś już ${points} punktów. Odpocznij chwilę, bądź <a href="javascript:location.reload()">ZACZNIJ</a> grę od nowa.`;
}

function getAnswer() {
  const userText = document.getElementById('userText').value;
  const answer = document.getElementById('answer');
  const firework = document.getElementById('firework');
  const firework2 = document.getElementById('firework2');
  const firework3 = document.getElementById('firework3');
  const pointCounter = document.getElementById('pointCounter');
  
  let similarText = userText.toLowerCase().trim().replace('ą','a').replace('ć','c').replace('ę','e').replace('ł','l').replace('ń','n').replace('ó','o').replace('ś','s').replace('ź','z').replace('ż','z');
  
  let similarTranslation = translation.toLowerCase().replace('ą','a').replace('ć','c').replace('ę','e').replace('ł','l').replace('ń','n').replace('ó','o').replace('ś','s').replace('ź','z').replace('ż','z');
  let similarTranslation2 = '';
  let similarTranslation3 = '';
  
  
  
  if(translation3 !== undefined){
    similarTranslation3 = translation3.toLowerCase().replace('ą','a').replace('ć','c').replace('ę','e').replace('ł','l').replace('ń','n').replace('ó','o').replace('ś','s').replace('ź','z').replace('ż','z');
    if(translation.includes('(') === true) {
      similarTranslation = similarTranslation.slice(0, translation.indexOf('(') - 1);
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
    if(translation.includes('(') === true) {
      similarTranslation = similarTranslation.slice(0, translation.indexOf('(') - 1);
    }
    if(translation2.includes('(') === true) {
      similarTranslation2 = similarTranslation2.slice(0, translation2.indexOf('(') - 1);
    }
  }
  
  
  if(translation !== undefined) {
    if(translation.includes('(') === true) {
      similarTranslation = similarTranslation.slice(0, translation.indexOf('(') - 1)
    }
  }
  
  if(translation3 !== undefined) {
    if(similarText === similarTranslation || similarText === similarTranslation2 || similarText === similarTranslation3) {
      points = points + 1;
      if(points === 50) {
        endGame(answer, firework, firework2, firework3);
      }
      else {
        answer.style.color = 'green';
        firework.style.display = 'block';
        firework.style.animation = 'boom 0.7s ease-out';
        setTimeout(function(){firework.style.display = 'none';}, 700);
        answer.innerHTML = `Brawo! Dostajesz punkt! 😁`;
        setTimeout(function(){document.getElementById('new').click();}, 500);
      }
    }
    else {
      answer.innerHTML = `Pomyliłeś się 😶. Prawidłowe odpowiedzi to: <strong>${translation}</strong>, <strong>${translation2}</strong> lub <strong>${translation3}</strong>`;
      answer.style.color = 'firebrick';
      answer.style.animation = 'scale 0.3s ease-in-out';
      points = points - 1;
    }
  }
  
  else if(translation2 !== undefined) {
    if(similarText === similarTranslation || similarText === similarTranslation2) {
      points = points + 1;
      if(points === 5) {
        endGame(answer, firework, firework2, firework3);
      }
      else {
      answer.style.color = 'green';
      firework.style.display = 'block';
      firework.style.animation = 'boom 0.7s ease-out';
      setTimeout(function(){firework.style.display = 'none';}, 700);
      answer.innerHTML = `Brawo! Dostajesz punkt! 😁`;
      setTimeout(function(){document.getElementById('new').click();}, 500);
    }
  }
  else {
    answer.innerHTML = `Pomyliłeś się 😶. Prawidłowa odpowiedź to: <strong>${translation}</strong> lub <strong>${translation2}</strong>`;
    answer.style.color = 'firebrick';
    answer.style.animation = 'scale 0.3s ease-in-out';
    points = points - 1;
  }
}

else {
  if(similarText === similarTranslation) {
    points = points + 1;
    if(points === 50) {
      endGame(answer, firework, firework2, firework3);
    }
    else {
      answer.style.color = 'green';
      firework.style.display = 'block';
      firework.style.animation = 'boom 0.7s ease-out';
      setTimeout(function(){firework.style.display = 'none';}, 700);
      answer.innerHTML = `Brawo! Dostajesz punkt! 😁`;
      setTimeout(function(){document.getElementById('new').click();}, 500);
    }
  }
  else {
    answer.innerHTML = `Pomyliłeś się 😶. Prawidłowa odpowiedź to: <strong>${translation}</strong>`;
    answer.style.color = 'firebrick';
    answer.style.animation = 'scale 0.3s ease-in-out';
    points = points - 1;
  }
}


pointCounter.innerHTML = points;

}

function checkKeyCode(event) {
  getWord = allWords[Math.floor(Math.random()*33)];
	// alert(event.keyCode);
	// if (event.key === 'Enter' && event.shiftKey) {
    //  getNew();
    // }
    if (event.key === 'Enter') {
      getAnswer();
    }
  }
  

  export default getNew;
  export {consoleWords, checkKeyCode}