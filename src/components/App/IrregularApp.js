// BASIC
import React, {Component} from 'react'
import greatAnimationData from '../../lotties/72-favourite-app-icon.json'
import goodAnimationData from '../../lotties/433-checked-done.json'
import styled, { css } from 'styled-components'
// COMPONENTS
import Cathegory from './components/Cathegory'
import Navigation from './components/Navigation/Navigation'
import Word from './components/Word'
import Picture from './components/Picture'
import Inputs from './components/IrregularApp/Inputs'
import AppNavigation from './components/AppNavigation';
import Answer from './components/Answer'
import SocialMedia from './components/SocialMedia'
// STYLES
import Global from '../Styles/Global'
import { Wrapper } from '../Styles/Components'
import '../../components/Styles/main-keyframes.css'
// SCRIPTS
import getWord from '../Scripts/Functions/getWord()'
import female from './female'
// import similarTranslation from './similarTranslation'
// ANIMATIONS
import LottieAnimation from '../../lotties/Animations'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			language: this.props.base_language,
			points: 0,
			baseWord: getWord(this.props.words),
			hideAnswer: true,
			answer: '',
			good: false,
			great: false,
			counter: 0,
			firstForm: undefined,
			secondForm: undefined,
			thirdForm: undefined,
			val: ''
		};
		this.increment = this.increment.bind(this);
		this.check = this.check.bind(this);
		this.getNew = this.getNew.bind(this);
		this.getAnswer = this.getAnswer.bind(this);
		this.keyPress = this.keyPress.bind(this);
		this.checkFirstVerbForm = this.checkFirstVerbForm.bind(this);
		this.checkSecondVerbForm = this.checkSecondVerbForm.bind(this);
		this.checkThirdVerbForm = this.checkThirdVerbForm.bind(this);
		this.focus = this.focus.bind(this);
		this.getState = this.getState.bind(this);
	}

	getNew() {
		if (this.state.hideAnswer === true || this.state.answer === 'Brawo!') {
			this.setState({baseWord: getWord(this.props.words)});
		}
		else {
			alert('Najpierw odpowiedz!')
		}
	}

	increment() {
		this.setState({points: this.state.points + 1});
	}

	check(e, verbForm) {
		console.log(verbForm)

		this.setState({
			counter: this.state.counter + 1
		});

		let userWord = e.target.value.toLowerCase().trim();

		if (
			userWord === verbForm
			) {
			document.getElementById('answer').style.color = 'var(--color-decorative)';
			this.setState({
				answer: 'Brawo!',
				hideAnswer: false,
				counter: 0
			});
			if (userWord.length > this.state.counter && this.state.hideAnswer === true) {
				this.setState({
					great: true,
					points: this.state.points + 1
				});
				setTimeout(function () {
					this.setState({
						hideAnswer: true,
						great: false
					});
				}.bind(this), 1000)
			}
			else {
				this.setState({
					good: true,
					points: this.state.points + 0.5
				});
				setTimeout(function () {
					this.setState({
						hideAnswer: true,
						good: false
					});
				}.bind(this), 1000)
			}
			this.setState({
				good: true,
				points: this.state.points + 0.5
			});
		}
		return false
	}

	checkFirstVerbForm(e) {
		this.check(e, this.state.baseWord.firstForm)
	}

	checkSecondVerbForm(e) {
		this.check(e, this.state.baseWord.secondForm)
	}

	checkThirdVerbForm(e) {
		this.check(e, this.state.baseWord.thirdForm)
		setTimeout(function () {
			this.getNew();
		}.bind(this), 1000)
	}

	getState = (e) => {
		console.log(e.target.value)
		// this.setState(

		// 	() => {
		// 		return {
		// 			val: e.target.value
		// 		};
		// 	},
			
		// 	() => {
		// 		console.log(this.state.val);
		// 	}
			
		// 	);
		// 	// console.log('test')
	}

	getAnswer() {

		if (this.state.hideAnswer !== false) {
			let translation1 = this.state.baseWord.translation1;
			let translation2 = this.state.baseWord.translation2;
			let translation3 = this.state.baseWord.translation3;
			const full_translation1 = female(this.state.baseWord).full_translation1;
			const full_translation2 = female(this.state.baseWord).full_translation2;
			const full_translation3 = female(this.state.baseWord).full_translation3;

			if (full_translation1 !== undefined) {
				translation1 = full_translation1;
			}
			if (full_translation2 !== undefined) {
				translation2 = full_translation2;
			}
			if (full_translation3 !== undefined) {
				translation3 = full_translation3;
			}

			if (this.state.points >= 2) {
				this.setState({points: this.state.points - 2});
			}

			else {
				this.setState({points: 0});
			}

			document.getElementById('answer').style.color = 'firebrick';

			let answer = [translation1, translation2, translation3].join('  ').trim().replace('    ', ', ').replace('  ', ', ').trim();
			this.setState({answer: answer, hideAnswer: false})
		}
	}

	keyPress(e) {
		if (e.key === 'Enter' && e.shiftKey) {
			this.getNew();
		}
		
		else if (e.key === 'Enter') {
			this.getAnswer();
		}
	}

	setFirstForm(e) {
		// this.setState({counter: this.state.counter + 1});
		console.log(e.target.value);
		const user = 'jakub';
		this.check(e, user);
	}
	
	focus() {
		// let number = parseInt(e.target.id.substring(e.target.id.length - 1));
		
		// if (e.key === 'Enter') {
		// 	if (number < 3) {
		// 		document.getElementById(`form${number + 1}`).focus();
		// 	}
		// 	else {
		// 		document.getElementById(`form1`).focus();
		// 	}
		// 	console.log(this.state.firstForm);
		// 	console.log(this.state.secondForm);
		// 	console.log(this.state.thirdForm);
		// }
		console.log('test')
	}
	
	render() {
		let baseWord = this.state.baseWord;
		// replace empty images
		let image = baseWord.image;
		if (image === `url`) {
			image = `https://fakeimg.pl/647x400/?text=${baseWord.firstForm}`;
		}
		// subtype and subsubtype exceptions
		let cathegory = baseWord.type;
		if(baseWord.subtype !== undefined) {
			cathegory = `${cathegory} (${baseWord.subtype})`;
		}
		else if (baseWord.subsubtype !== undefined) {
			cathegory = `${cathegory} (${baseWord.subsubtype})`;
		}
		// word2 and word3 exceptions
		let word = baseWord.word1;
		if(baseWord.word3 !== undefined) {
			word = `${word} / ${baseWord.word2} / ${baseWord.word3}`;
		}
		else if(baseWord.word2 !== undefined) {
			word = `${word} / ${baseWord.word2}`;
		}
		// translation2 and translation3 exceptions
		let translation = baseWord.translation1;
		if(baseWord.translation3 !== undefined) {
			translation = `${translation} / ${baseWord.translation2} / ${baseWord.translation3}`;
		}
		else if(baseWord.translation2 !== undefined) {
			translation = `${translation} / ${baseWord.translation2}`;
		}
		const Animation = styled.div`
			display: none;
			position: absolute;
			top: calc(100px + 5vw);
			left: 50%;
			width: 50vw;
			max-width: 300px;
			transform: translatex(-50%);
			${props =>
				props.preview &&
				css`
					display: block;
				`
			};
			@media(min-width: 700px) {
				top: 150px;
			}
		`
		return (
			<>
				<Global />
				<Wrapper center small>
					<Cathegory content={cathegory} />
					<Navigation points={this.state.points} />
					<Word content={translation} />
					<Picture src={image} word={word} url={`https://pxhere.com/${this.state.language}/photos?q=${baseWord.word1}`} />
					<Inputs 
						onChange1={this.getState}
						onChange2={this.checkSecondVerbForm}
						onChange3={this.checkThirdVerbForm}
						press={this.focus}
					/>
					<AppNavigation check={this.getAnswer} change={this.getNew} />
					<Answer hideAnswer={this.state.hideAnswer} text={this.state.answer} />
					<Animation preview={this.state.great}>
						<LottieAnimation animationData={greatAnimationData} />
					</Animation>
					<Animation preview={this.state.good}>
						<LottieAnimation animationData={goodAnimationData} />
					</Animation>
					<SocialMedia />
				</Wrapper>
			</>
		);
	}
}

export default App