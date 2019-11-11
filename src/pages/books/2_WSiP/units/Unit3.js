// BASIC
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
// COMPONENTS
// import AppPage from '../../../../components/App/WritingApp'
import WorkPage from '../../../../components/Work/Work'
// FILES

// IMAGES
import working from '../../../../images/working.png'

class Unit3 extends Component {
	render() {
		return (
			<>
				{/* Rozdział 3 - Wśród przyjaciół */}
				{/* Rzeczowniki */}
				<Route path="/wsip/rozdział-3/rzeczowniki" render={(props) =>
					<WorkPage
						{...props}
						title="Prace trwają"
						image={working}
					/>
				}/>
				{/* Rodzaje budynków mieszkalnych */}
				<Route path="/wsip/rozdział-3/rodzaje-budynków-mieszkalnych" render={(props) =>
					<WorkPage
						{...props}
						title="Prace trwają"
						image={working}
					/>
				}/>
				{/* Rodzaje pomieszczeń */}
				<Route path="/wsip/rozdział-3/rodzaje-pomieszczeń" render={(props) =>
					<WorkPage
						{...props}
						title="Prace trwają"
						image={working}
					/>
				}/>
				{/* Umeblowanie */}
				<Route path="/wsip/rozdział-3/umeblowanie" render={(props) =>
					<WorkPage
						{...props}
						title="Prace trwają"
						image={working}
					/>
				}/>
				{/* Wygląd zewnętrzny człowieka */}
				<Route path="/wsip/rozdział-3/wygląd-zewnętrzny-człowieka" render={(props) =>
					<WorkPage
						{...props}
						title="Prace trwają"
						image={working}
					/>
				}/>
				{/* Cechy charakteru */}
				<Route path="/wsip/rozdział-3/cechy-charakteru" render={(props) =>
					<WorkPage
						{...props}
						title="Prace trwają"
						image={working}
					/>
				}/>
				{/* Przymiotniki */}
				<Route path="/wsip/rozdział-3/przymiotniki" render={(props) =>
					<WorkPage
						{...props}
						title="Prace trwają"
						image={working}
					/>
				}/>
				{/* Czasowniki */}
				<Route path="/wsip/rozdział-3/czasowniki" render={(props) =>
					<WorkPage
						{...props}
						title="Prace trwają"
						image={working}
					/>
				}/>
				{/* Określenia położenia */}
				<Route path="/wsip/rozdział-3/określenia-położenia" render={(props) =>
					<WorkPage
						{...props}
						title="Prace trwają"
						image={working}
					/>
				}/>
				{/* Zwroty i wyrażenia */}
				<Route path="/wsip/rozdział-3/zwroty-i-wyrażenia" render={(props) =>
					<WorkPage
						{...props}
						title="Prace trwają"
						image={working}
					/>
				}/>
				{/* Test */}
				<Route path="/wsip/rozdział-3/test" render={(props) =>
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

export default Unit3;
