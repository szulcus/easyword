// BASIC
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
// COMPONENTS
import AppPage from '../../../../components/App/WritingApp'
// FILES
import b1_e8_words1 from '../../../components/Words/1_Macmillan/Unit8/1_TravellingAndMeansOfTransport'
import b1_e8_words2 from '../../../components/Words/1_Macmillan/Unit8/2_TouristInformation'
import b1_e8_words3 from '../../../components/Words/1_Macmillan/Unit8/3_Accomodation'
import b1_e8_words4 from '../../../components/Words/1_Macmillan/Unit8/4_TipsAndSightseeing'
import b1_e8_words5 from '../../../components/Words/1_Macmillan/Unit8/5_Accidents'
import b1_e8_words6 from '../../../components/Words/1_Macmillan/Unit8/6_Other'

class Unit8 extends Component {
	render() {
		return (
			<>
				{/* Rozdział 8 - Podróżowanie i turystyka */}
				{/* Rodzaje sklepów */}
				<Route path="/macmillan/rozdział-8/rodzaje-sklepów" render={(props) =>
					<AppPage
						{...props}
						words={b1_e8_words1}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Opisywanie towarów */}
				<Route path="/macmillan/rozdział-8/opisywanie-towarów" render={(props) =>
					<AppPage
						{...props}
						words={b1_e8_words2}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Sprzedawanie i kupowanie */}
				<Route path="/macmillan/rozdział-8/sprzedawanie-i-kupowanie" render={(props) =>
					<AppPage
						{...props}
						words={b1_e8_words3}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Reklamacje */}
				<Route path="/macmillan/rozdział-8/reklamacje" render={(props) =>
					<AppPage
						{...props}
						words={b1_e8_words4}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Reklama */}
				<Route path="/macmillan/rozdział-8/reklama" render={(props) =>
					<AppPage
						{...props}
						words={b1_e8_words5}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Inne */}
				<Route path="/macmillan/rozdział-8/inne" render={(props) =>
					<AppPage
						{...props}
						words={b1_e8_words6}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Test */}
				<Route path="/macmillan/rozdział-8/test" render={(props) =>
					<AppPage
						{...props}
						words={[].concat(b1_e8_words1, b1_e8_words2, b1_e8_words3, b1_e8_words4, b1_e8_words5, b1_e8_words6)}
						base_language='en'
						translated_language='pl'
					/>
				}/>
			</>
		);
	}
}

export default Unit8;
