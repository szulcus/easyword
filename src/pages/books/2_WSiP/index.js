// BASIC
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
// COMPONENTS
import WSiPList from '../../components/List/WSiPList'
import Unit1 from './Units/Unit1'
import Unit2 from './Units/Unit2'
import Unit3 from './Units/Unit3'

class WSiPBook extends Component {
	render() {
		return (
			<>
				{/* WSIP */}
				<Route path="/wsip" exact component={WSiPList}/>
				<Unit1 />
				<Unit2 />
				<Unit3 />
			</>
		);
	}
}

export default WSiPBook