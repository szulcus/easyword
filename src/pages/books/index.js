// BASIC
import React, {Component} from 'react';
import {Route} from 'react-router-dom'
// COMPONENTS
import MacmillanBook from './1_Macmillan'
import WSiPBook from './2_WSiP'
import NotFoundPage from '../404/404'

class Books extends Component {
	render() {
		return (
			<>
				<MacmillanBook />
				<WSiPBook />
				<Route component={NotFoundPage}/>
			</>
		);
	}
}

export default Books