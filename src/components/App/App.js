// BASIC
import React, {Component} from 'react'
// COMPONENTS
import Cathegory from './components/Cathegory'
import Navigation from './components/Navigation/Navigation'
import Word from './components/Word'
import Picture from './components/Picture'
import Input from './components/Input'
import AppNavigation from './components/AppNavigation';
import SocialMedia from './components/SocialMedia'
// STYLES
import Global from '../Styles/Global'
import { Wrapper } from '../Styles/Components'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {points: 0};
		this.increment = this.increment.bind(this);
		this.check = this.check.bind(this);
	}

	increment() {
		this.setState({points: this.state.points + 1});
	}

	check(translation, word) {
		if (translation === word) {
			alert("brawo!");
		}
		else if (translation !== word) {
			alert(translation);
		}
	}
	
	render() {
		const translation = this.props.translation;
		const word = this.props.word;
		return (
			<>
				<Global />
				<Wrapper center small>
					<Cathegory content={this.props.cathegory} />
					<Navigation points={this.state.points} />
					<Word content={this.props.word} />
					<Picture src={this.props.picture} word={this.props.word} url={`https://pxhere.com/${this.props.language}/photos?q=${this.props.word}`} />
					<Input />
					<AppNavigation onClick={this.check(translation, word)} />
					<SocialMedia />
				</Wrapper>
			</>
		);
	}
}

export default App