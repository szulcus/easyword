// BASIC
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
// COMPONENTS
import AppPage from '../../../../components/App/WritingApp'
import WorkPage from '../../../../components/Work/Work'
// FILES
import b2_e2_words1 from '../../../../components/Words/2_WSiP/Unit2/1_Rzeczowniki'
import b2_e2_words2 from '../../../../components/Words/2_WSiP/Unit2/2_RzeczownikiNieodmienne'
import b2_e2_words3 from '../../../../components/Words/2_WSiP/Unit2/3_OkreślanieCzasu'
import b2_e2_words4 from '../../../../components/Words/2_WSiP/Unit2/4_Sztuka'
import b2_e2_words5 from '../../../../components/Words/2_WSiP/Unit2/5_Kolej'
import b2_e2_words6 from '../../../../components/Words/2_WSiP/Unit2/6_Kolory'
import b2_e2_words7 from '../../../../components/Words/2_WSiP/Unit2/7_Przyimki'
import b2_e2_words8 from '../../../../components/Words/2_WSiP/Unit2/8_Przymiotniki'
// IMAGES
import working from '../../../../images/working.png'

class Unit2 extends Component {
	render() {
		return (
			<>
				{/* Rozdział 2 - W stolicy Polski */}
				{/* Rzeczowniki */}
				<Route path="/wsip/rozdział-2/rzeczowniki" render={(props) =>
					<AppPage
						{...props}
						words={b2_e2_words1}
						base_language='ru'
						translated_language='pl'
					/>
				}/>
				{/* Rzeczowniki nieodmienne */}
				<Route path="/wsip/rozdział-2/rzeczowniki-nieodmienne" render={(props) =>
					<AppPage
						{...props}
						words={b2_e2_words2}
						base_language='ru'
						translated_language='pl'
					/>
				}/>
				{/* Określanie czasu */}
				<Route path="/wsip/rozdział-2/określanie-czasu" render={(props) =>
					<AppPage
						{...props}
						words={b2_e2_words3}
						base_language='ru'
						translated_language='pl'
					/>
				}/>
				{/* Sztuka */}
				<Route path="/wsip/rozdział-2/sztuka" render={(props) =>
					<AppPage
						{...props}
						words={b2_e2_words4}
						base_language='ru'
						translated_language='pl'
					/>
				}/>
				{/* Kolej */}
				<Route path="/wsip/rozdział-2/kolej" render={(props) =>
					<AppPage
						{...props}
						words={b2_e2_words5}
						base_language='ru'
						translated_language='pl'
					/>
				}/>
				{/* Kolory */}
				<Route path="/wsip/rozdział-2/kolory" render={(props) =>
					<AppPage
						{...props}
						words={b2_e2_words6}
						base_language='ru'
						translated_language='pl'
					/>
				}/>
				{/* Przyimki */}
				<Route path="/wsip/rozdział-2/przyimki" render={(props) =>
					<AppPage
						{...props}
						words={b2_e2_words7}
						base_language='ru'
						translated_language='pl'
					/>
				}/>
				{/* Przymiotniki */}
				<Route path="/wsip/rozdział-2/przymiotniki" render={(props) =>
					<AppPage
						{...props}
						words={b2_e2_words8}
						base_language='ru'
						translated_language='pl'
					/>
				}/>
				{/* Czasowniki */}
				<Route path="/wsip/rozdział-2/czasowniki" render={(props) =>
					<WorkPage
						{...props}
						title="Prace trwają"
						image={working}
					/>
				}/>
				{/* Przysłówki */}
				<Route path="/wsip/rozdział-2/przysłówki" render={(props) =>
					<WorkPage
						{...props}
						title="Prace trwają"
						image={working}
					/>
				}/>
				{/* Liczebniki główne */}
				<Route path="/wsip/rozdział-2/liczebniki-główne" render={(props) =>
					<WorkPage
						{...props}
						title="Prace trwają"
						image={working}
					/>
				}/>
				{/* Zwroty i wyrażenia */}
				<Route path="/wsip/rozdział-2/zwroty-i-wyrażenia" render={(props) =>
					<WorkPage
						{...props}
						title="Prace trwają"
						image={working}
					/>
				}/>
				{/* Test */}
				<Route path="/wsip/rozdział-2/test" render={(props) =>
					<AppPage
						{...props}
						words={[].concat(b2_e2_words1, b2_e2_words2, b2_e2_words3, b2_e2_words4, b2_e2_words5, b2_e2_words6, b2_e2_words7, b2_e2_words8)}
						base_language='ru'
						translated_language='pl'
					/>
				}/>
			</>
		);
	}
}

export default Unit2;
