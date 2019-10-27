// BASIC
import React, {Component} from 'react'
import greatAnimationData from '../../lotties/72-favourite-app-icon.json'
import goodAnimationData from '../../lotties/433-checked-done.json'
import styled, { css } from 'styled-components'
// COMPONENTS
import Preloader from './Preloader'
import Cathegory from './components/Cathegory'
import Navigation from './components/Navigation/Navigation'
import Word from './components/Word'
import Picture from './components/Picture'
import Input from './components/WritingApp/Input'
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
import similarTranslation from './similarTranslation'
// ANIMATIONS
import LottieAnimation from '../../lotties/Animations'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			load: false,
			language: this.props.base_language,
			points: 0,
			baseWord: getWord(this.props.words),
			hideAnswer: true,
			answer: '',
			good: false,
			great: false,
			counter: 0,
			deleteImage: false
		};
	}

	componentDidMount() {
		this.setState({load: true})
	}
	getNew = () => {
		if (this.state.hideAnswer === true || this.state.answer === 'Brawo!') {
			this.setState({baseWord: getWord(this.props.words)});
		}
		else {
			alert('Najpierw odpowiedz!')
		}
	}

	increment = () => {
		this.setState({points: this.state.points + 1});
	}

	check = (e) => {
		// if (female(this.state.baseWord).feminine_translation1 !== undefined) {
		// 	console.log('jest')
		// }
		this.setState({counter: this.state.counter + 1});
		let userWord = e.target.value.toLowerCase().trim().replace('ą','a').replace('ć','c').replace('ę','e').replace('ł','l').replace('ń','n').replace('ó','o').replace('ś','s').replace('ź','z').replace('ż','z');

		const translation1 = similarTranslation(this.state.baseWord.translation1);
		const translation2 = similarTranslation(this.state.baseWord.translation2);
		const translation3 = similarTranslation(this.state.baseWord.translation3);
		const feminine_translation1 = similarTranslation(female(this.state.baseWord).feminine_translation1);
		const feminine_translation2 = similarTranslation(female(this.state.baseWord).feminine_translation2);
		const feminine_translation3 = similarTranslation(female(this.state.baseWord).feminine_translation3);

		console.log(this.state.counter);

		console.log(translation1)
		console.log(translation2)
		console.log(translation3)
		console.log(feminine_translation1)
		console.log(feminine_translation2)
		console.log(feminine_translation3)

		if (
			userWord === translation1 ||
			userWord === translation2 ||
			userWord === translation3 ||
			userWord === feminine_translation1 ||
			userWord === feminine_translation2 ||
			userWord === feminine_translation3
			) {
			document.getElementById('answer').style.color = 'var(--color-decorative)';
			const target = e.target
			this.setState({
				answer: 'Brawo!',
				hideAnswer: false,
				counter: 0
			});
			if (translation1.length > this.state.counter && this.state.hideAnswer === true) {
				this.setState({
					great: true,
					points: this.state.points + 2
				});
				setTimeout(function () {
					target.value = '';
					this.getNew();
					this.setState({
						hideAnswer: true,
						great: false
					});
				}.bind(this), 1000)
			}
			else {
				this.setState({
					good: true,
					points: this.state.points + 1
				});
				setTimeout(function () {
					target.value = '';
					this.getNew();
					this.setState({
						hideAnswer: true,
						good: false
					});
				}.bind(this), 1000)
			}
		}
	}

	getAnswer = () => {

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

	keyPress = (e) => {
		if (e.key === 'Enter' && e.shiftKey) {
			this.getNew();
		}
		
		else if (e.key === 'Enter') {
			this.getAnswer();
		}
	}

	deleteImg = () => {
			if (this.state.deleteImage === false) {
				this.setState({deleteImage: true})
			}
			else {
				this.setState({deleteImage: false})
			}
	}
	
	render = () => {
		let baseWord = this.state.baseWord;

		// replace empty images

		let image = baseWord.image;
		// let image2 = baseWord.image2;
		
		if (image === `url`) {
			image = `https://fakeimg.pl/647x400/?text=${baseWord.word1}`;
		}

		// if (image2 !== undefined) {
		// 	image = `https://fakeimg.pl/647x400/?text=${baseWord.word1}`;
		// }
		
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
		console.log(baseWord);

		if(baseWord.word3 !== undefined) {
			word = `${word} / ${baseWord.word2} / ${baseWord.word3}`;
		}
		
		else if(baseWord.word2 !== undefined) {
			word = `${word} / ${baseWord.word2}`;
		}

		const Animation = styled.div`
			display: none;
			position: absolute;
			top: calc(100px + 5vw);
			left: 50%;
			width: 50vw;
			max-width: 300px;
			max-height: calc(100vh - 336px);
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
				<Preloader load={this.state.load} />
					<Cathegory content={cathegory} />
					<Navigation points={this.state.points} />
					<Word content={word} />
					<Picture hide={this.state.deleteImage} onClick={this.deleteImg} src={image} word={word} link={`https://pxhere.com/${this.state.language}/photos?q=${baseWord.word1}`} />
					<Input onChange={this.check} press={this.keyPress} />
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