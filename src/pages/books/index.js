// BASIC
import React, {Component} from 'react';
// import {Route} from 'react-router-dom';
// COMPONENTS
// import CompendiumList from '../components/List/CompendiumList'
// import ProfessionalEnglishList from '../components/List/ProfessionalEnglishList'
import WSiPBook from './2_WSiP'

class Books extends Component {
	render() {
		return (
			<>
				{/* <Route path="/repetytorium" exact component={CompendiumList}/> */}
				{/* <Route path="/jezyk-angielski-zawodowy" exact component={ProfessionalEnglishList}/> */}
				<WSiPBook />
			</>
		);
	}
}

export default Books