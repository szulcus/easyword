// BASIC
import React, {Component} from 'react'
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
// SCRIPTS
import getWord from '../Scripts/Functions/getWord()'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			language: this.props.base_language,
			points: 0,
			baseWord: getWord(this.props.words),
			answer: ''
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
		let userWord = e.target.value.toLowerCase().trim().replace('ą','a').replace('ć','c').replace('ę','e').replace('ł','l').replace('ń','n').replace('ó','o').replace('ś','s').replace('ź','z').replace('ż','z');
		const translation = this.state.baseWord.translation1.toLowerCase().replace('ą','a').replace('ć','c').replace('ę','e').replace('ł','l').replace('ń','n').replace('ó','o').replace('ś','s').replace('ź','z').replace('ż','z');
		console.log(userWord);
		console.log(translation);
		if (userWord === translation) {
			this.setState({answer: 'Brawo!'});
			this.increment();
			this.getNew();
			e.target.value = '';
		}
	}
	
	render() {
		let baseWord = this.state.baseWord;

		let word = baseWord.word1;
		console.log(baseWord);
		let cathegory = baseWord.type;
		let image = baseWord.image;

		if (image === `url`) {
			image = `https://fakeimg.pl/647x400/?text=${baseWord.word1}`;
		}
		
		// subtype and subsubtype exceptions
		if(baseWord.subtype !== undefined) {
			cathegory = `${cathegory} (${baseWord.subtype})`;
		}
		
		else if (baseWord.subsubtype !== undefined) {
			cathegory = `${cathegory} (${baseWord.subsubtype})`;
		}
		
		// word2 and word3 exceptions
		if(baseWord.word3 !== undefined) {
			word = `${word} / ${baseWord.word2} / ${baseWord.word3}`;
		}
		
		else if(baseWord.word2 !== undefined) {
			word = `${word} / ${baseWord.word2}`;
		}

		console.log(baseWord);
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
					<SocialMedia />
				</Wrapper>
			</>
		);
	}
}

export default App