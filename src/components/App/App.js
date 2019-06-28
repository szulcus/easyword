// BASIC
import React, {Component} from 'react'
// COMPONENTS
import Cathegory from './components/Cathegory'
import Navigation from './components/Navigation/Navigation'
import SocialMedia from './components/SocialMedia'
// STYLES
import Global from '../Styles/Global'
import { Wrapper } from '../Styles/Components'

class App extends Component {
	render() {
		return (
			<>
				<Global />
				<Wrapper center small>
					<Cathegory content={this.props.cathegory}/>
					<Navigation />
					<SocialMedia />
				</Wrapper>
			</>
		);
	}
}

export default App