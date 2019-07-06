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
import Input from './components/Input'
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
			language: this.props.base_language,
			points: 0,
			baseWord: getWord(this.props.words),
			answer: '',
			good: false,
			great: false,
			counter: 0
		};
		this.increment = this.increment.bind(this);
		this.check = this.check.bind(this);
		this.getNew = this.getNew.bind(this);
	}

	getNew() {
		this.setState({baseWord: getWord(this.props.words)});
	}

	increment() {
		this.setState({points: this.state.points + 1});
	}

	check(e) {

		// if (female(this.state.baseWord).feminine_translation1 !== undefined) {
		// 	console.log('jest')
		// }
		this.setState({counter: this.state.counter + 1});
		let userWord = e.target.value.toLowerCase().trim().replace('ą','a').replace('ć','c').replace('ę','e').replace('ł','l').replace('ń','n').replace('ó','o').replace('ś','s').replace('ź','z').replace('ż','z');

		const translation1 = similarTranslation(this.state.baseWord.translation1);
		const translation2 = similarTranslation(this.state.baseWord.translation2);
		const translation3 = similarTranslation(this.state.baseWord.translation3);

		console.log(female(this.state.baseWord));


		console.log(similarTranslation(translation1))
		console.log(translation1)
		console.log(userWord);
		console.log(translation1);
		console.log(this.state.counter);
		if (userWord === translation1) {
			const target = e.target
			if (translation1.length > this.state.counter ||
				1 === 2) {
				this.setState({
					answer: 'Brawo!',
					great: true,
					points: this.state.points + 2,
					counter: 0
				});
				setTimeout(function () {
					target.value = '';
					this.getNew();
					this.setState({answer: '', great: false});
				}.bind(this), 1000)
			}
			else {
				this.setState({
					answer: 'Brawo!',
					good: true,
					points: this.state.points + 1,
					counter: 0
				});
				setTimeout(function () {
					target.value = '';
					this.getNew();
					this.setState({answer: '', good: false});
				}.bind(this), 1000)
			}
			
		}
		

	}
	
	render() {
		let baseWord = this.state.baseWord;

		// replace empty images

		let image = baseWord.image;
		
		if (image === `url`) {
			image = `https://fakeimg.pl/647x400/?text=${baseWord.word1}`;
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
		console.log(baseWord);

		if(baseWord.word3 !== undefined) {
			word = `${word} / ${baseWord.word2} / ${baseWord.word3}`;
		}
		
		else if(baseWord.word2 !== undefined) {
			word = `${word} / ${baseWord.word2}`;
		}

		const defaultOptions = {
			loop: false,
			autoplay: true,
			animationData: this.props.animationData,
			rendererSettings: {
				preserveAspectRadio: 'xMidYMid slice'
			}
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
					<Word content={word} />
					<Picture src={image} word={word} url={`https://pxhere.com/${this.state.language}/photos?q=${baseWord.word1}`} />
					<Input onChange={this.check} />
					<AppNavigation change={this.getNew}/>
					<Answer text={this.state.answer} />
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