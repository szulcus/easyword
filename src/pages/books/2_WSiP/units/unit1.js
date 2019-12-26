// BASIC
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
// COMPONENTS
import AppPage from '../../../../Components/App/WritingApp'
import WorkPage from '../../../../Components/Work/Work'
// FILES
import b2_e1_words1 from '../../../../Components/Words/2_WSiP/Unit1/1_Rzeczowniki'
import b2_e1_words2 from '../../../../Components/Words/2_WSiP/Unit1/2_StronyŚwiata'
import b2_e1_words3 from '../../../../Components/Words/2_WSiP/Unit1/3_PytaniaOMiejsceIKierunek'
import b2_e1_words4 from '../../../../Components/Words/2_WSiP/Unit1/4_PoryRokuINazwyMiesięcy'
import b2_e1_words5 from '../../../../Components/Words/2_WSiP/Unit1/5_ZjawiskaPogodowe'
import b2_e1_words6 from '../../../../Components/Words/2_WSiP/Unit1/6_TypyKrajobrazuRosji'
// IMAGES
import working from '../../../../Components/Images/working.png'

class Unit1 extends Component {
	render() {
		return (
			<>
				{/* Rozdział 1 - Podróże* /}
				{/* Rzeczowniki */}
				<Route path="/wsip/rozdział-1/rzeczowniki" render={(props) =>
					<AppPage
						{...props}
						words={b2_e1_words1}
						base_language='ru'
						translated_language='pl'
					/>
				}/>
				{/* Strony świata */}
				<Route path="/wsip/rozdział-1/strony-świata" render={(props) =>
					<AppPage
						{...props}
						words={b2_e1_words2}
						base_language='ru'
						translated_language='pl'
					/>
				}/>
				{/* Pytania o miejsce i kierunek */}
				<Route path="/wsip/rozdział-1/pytania-o-miejsce-i-kierunek" render={(props) =>
					<AppPage
						{...props}
						words={b2_e1_words3}
						base_language='ru'
						translated_language='pl'
					/>
				}/>
				{/* Pory roku i nazwy miesięcy */}
				<Route path="/wsip/rozdział-1/pory-roku-i-nazwy-miesięcy" render={(props) =>
					<AppPage
						{...props}
						words={b2_e1_words4}
						base_language='ru'
						translated_language='pl'
					/>
				}/>
				{/* Zjawiska pogodowe */}
				<Route path="/wsip/rozdział-1/zjawiska-pogodowe" render={(props) =>
					<AppPage
						{...props}
						words={b2_e1_words5}
						base_language='ru'
						translated_language='pl'
					/>
				}/>
				{/* Typy krajobrazu Rosji */}
				<Route path="/wsip/rozdział-1/typy-krajobrazu-rosji" render={(props) =>
					<AppPage
						{...props}
						words={b2_e1_words6}
						base_language='ru'
						translated_language='pl'
					/>
				}/>
				{/* Przyroda */}
				<Route path="/wsip/rozdział-1/przyroda" render={(props) =>
					<WorkPage
						{...props}
						title="Prace trwają"
						image={working}
					/>
				}/>
				{/* Aktywny wypoczynek */}
				<Route path="/wsip/rozdział-1/aktywny-wypoczynek" render={(props) =>
					<WorkPage
						{...props}
						title="Prace trwają"
						image={working}
					/>
				}/>
				{/* Wyposażenie turysty */}
				<Route path="/wsip/rozdział-1/wyposażenie-turysty" render={(props) =>
					<WorkPage
						{...props}
						title="Prace trwają"
						image={working}
					/>
				}/>
				{/* Czasowniki */}
				<Route path="/wsip/rozdział-1/czasowniki" render={(props) =>
					<WorkPage
						{...props}
						title="Prace trwają"
						image={working}
					/>
				}/>
				{/* Zwroty i wyrażenia */}
				<Route path="/wsip/rozdział-1/zwroty-i-wyrażenia" render={(props) =>
					<WorkPage
						{...props}
						title="Prace trwają"
						image={working}
					/>
				}/>
				{/* Przyimki */}
				<Route path="/wsip/rozdział-1/przyimki" render={(props) =>
					<WorkPage
						{...props}
						title="Prace trwają"
						image={working}
					/>
				}/>
				{/* Test */}
				<Route path="/wsip/rozdział-1/test" render={(props) =>
					<AppPage
						{...props}
						words={[].concat(b2_e1_words1, b2_e1_words2, b2_e1_words3, b2_e1_words4, b2_e1_words5, b2_e1_words6)}
						base_language='ru'
						translated_language='pl'
					/>
				}/>
			</>
		);
	}
}

export default Unit1;
