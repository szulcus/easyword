// BASIC
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
// COMPONENTS
import WorkPage from '../../../../Components/Work/Work'
// IMAGES
import working from '../../../../Components/Images/working.png'

class Unit5 extends Component {
	render() {
		return (
			<>
				{/* Rozdzial 5 - Życie rodzinne i towarzyskie */}
				{/* Etapy życia */}
				<Route path="/macmillan/rozdzial-5/etapy-życia" render={(props) =>
					<WorkPage
						{...props}
						title="Prace trwają"
						image={working}
					/>
				}/>
				{/* Czlonkowie rodziny, koledzy i przyjaciele */}
				<Route path="/macmillan/rozdzial-5/czlonkowie-rodziny-koledzy-i-przyjaciele" render={(props) =>
					<WorkPage
						{...props}
						title="Prace trwają"
						image={working}
					/>
				}/>
				{/* Czynności życia codziennego */}
				<Route path="/macmillan/rozdzial-5/czynności-życia-codziennego" render={(props) =>
					<WorkPage
						{...props}
						title="Prace trwają"
						image={working}
					/>
				}/>
				{/* Formy spędzania czasu wolnego */}
				<Route path="/macmillan/rozdzial-5/formy-spędzania-czasu-wolnego" render={(props) =>
					<WorkPage
						{...props}
						title="Prace trwają"
						image={working}
					/>
				}/>
				{/* Święta i uroczystości */}
				<Route path="/macmillan/rozdzial-5/święta-i-uroczystości" render={(props) =>
					<WorkPage
						{...props}
						title="Prace trwają"
						image={working}
					/>
				}/>
				{/* Styl życia, konflikty i problemy */}
				<Route path="/macmillan/rozdzial-5/styl-życia-konflikty-i-problemy" render={(props) =>
					<WorkPage
						{...props}
						title="Prace trwają"
						image={working}
					/>
				}/>
				{/* Inne */}
				<Route path="/macmillan/rozdzial-5/inne" render={(props) =>
					<WorkPage
						{...props}
						title="Prace trwają"
						image={working}
					/>
				}/>
				{/* Test */}
				<Route path="/macmillan/rozdzial-5/test" render={(props) =>
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

export default Unit5;
