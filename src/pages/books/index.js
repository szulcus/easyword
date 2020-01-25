// BASIC
import React, {Component} from 'react';
// COMPONENTS
import MacmillanBook from './1_Macmillan'
import WSiPBook from './2_WSiP'

class Books extends Component {
	render() {
		return (
			<>
				<MacmillanBook />
				<WSiPBook />
			</>
		);
	}
}

export default Books