// BASIC
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
// COMPONENTS
import WorkPage from '../../../../Components/Work/Work'
// IMAGES
import working from '../../../../Components/Images/working.png'

class Unit10 extends Component {
	render() {
		return (
			<>
				{/* Rozdział 10 - Sport */}
				{/* Dyscypliny sportu */}
				<Route path="/macmillan/rozdział-10/dyscypliny-sportu" render={(props) =>
					<WorkPage
						{...props}
						title="Prace trwają"
						image={working}
					/>
				}/>
				{/* Imprezy sportowe */}
				<Route path="/macmillan/rozdział-10/imprezy-sportowe" render={(props) =>
					<WorkPage
						{...props}
						title="Prace trwają"
						image={working}
					/>
				}/>
				{/* Sport wyczynowy */}
				<Route path="/macmillan/rozdział-10/sport-wyczynowy" render={(props) =>
					<WorkPage
						{...props}
						title="Prace trwają"
						image={working}
					/>
				}/>
				{/* Inne */}
				<Route path="/macmillan/rozdział-10/inne" render={(props) =>
					<WorkPage
						{...props}
						title="Prace trwają"
						image={working}
					/>
				}/>
				{/* Test */}
				<Route path="/macmillan/rozdział-10/test" render={(props) =>
					<WorkPage
						{...props}
						title="Prace trwają"
						image={working}
					/>
				}/>
			</>
		);
	}
}

export default Unit10;
