// BASIC
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
// COMPONENTS
import MacmillanList from '../../components/List/MacmillanList'
import Unit1 from './Units/Unit1'
import Unit2 from './Units/Unit2'
import Unit3 from './Units/Unit3'
import Unit4 from './Units/Unit4'
import Unit5 from './Units/Unit5'
import Unit7 from './Units/Unit5'
import Unit8 from './Units/Unit8'

class index extends Component {
	render() {
		return (
			<>
				{/* MACMILLAN */}
				<Route path="/macmillan" exact component={MacmillanList}/>
				<Unit1 />
				<Unit2 />
				<Unit3 />
				<Unit4 />
				<Unit5 />
				<Unit7 />
				<Unit8 />
			</>
		);
	}
}

export default index