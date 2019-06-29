// BASIC
import React, {Component} from 'react'
// COMPONENTS
import Cathegory from './components/Cathegory'
import Navigation from './components/Navigation/Navigation'
import Word from './components/Word'
import Picture from './components/Picture'
import Input from './components/Input'
import SocialMedia from './components/SocialMedia'
// STYLES
import Global from '../Styles/Global'
import { Wrapper } from '../Styles/Components'

class App extends Component {
	render() {
		console.log(this.props.cathegory);
		return (
			<>
				<Global />
				<Wrapper center small>
					<Cathegory content={this.props.cathegory} />
					<Navigation />
					<Word content={this.props.word} />
					<Picture src={this.props.picture} word={this.props.word} url={`https://pxhere.com/en/photos?q=${this.props.word}`} />
					<Input />
					<SocialMedia />
				</Wrapper>
			</>
		);
	}
}

export default App