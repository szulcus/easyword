// BASIC
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
// COMPONENTS
import AppPage from '../../../../components/App/WritingApp'
// FILES
import b1_e2_words1 from '../../../components/Words/1_Macmillan/Unit2/1_ThePlaceWhereWeLive'
import b1_e2_words2 from '../../../components/Words/1_Macmillan/Unit2/2_DescribingHouses'
import b1_e2_words3 from '../../../components/Words/1_Macmillan/Unit2/3_HouseholdAndGardenJobs'
import b1_e2_words4 from '../../../components/Words/1_Macmillan/Unit2/4_RentingPurchasingAndSellingProperty'
import b1_e2_words5 from '../../../components/Words/1_Macmillan/Unit2/5_Orther'

class Unit2 extends Component {
	render() {
		return (
			<>
				{/* Rozdział 2 - Dom */}
				{/* Miejsce zamieszkania */}
				<Route path="/macmillan/rozdział-2/dom" render={(props) =>
					<AppPage
						{...props}
						words={b1_e2_words1}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Opis domu */}
				<Route path="/macmillan/rozdział-2/opis-domu" render={(props) =>
					<AppPage
						{...props}
						words={b1_e2_words2}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Prace w domu i ogrodzie */}
				<Route path="/macmillan/rozdział-2/prace-w-domu-i-ogrodzie" render={(props) =>
					<AppPage
						{...props}
						words={b1_e2_words3}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Wynajem, kupno i sprzedaż nieruchomości */}
				<Route path="/macmillan/rozdział-2/wynajem-kupno-i-sprzedaż-nieruchomości" render={(props) =>
					<AppPage
						{...props}
						words={b1_e2_words4}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Inne */}
				<Route path="/macmillan/rozdział-2/inne" render={(props) =>
					<AppPage
						{...props}
						words={b1_e2_words5}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Test */}
				<Route path="/macmillan/rozdział-2/test" render={(props) =>
					<AppPage
						{...props}
						words={[].concat(b1_e2_words1, b1_e2_words2, b1_e2_words3, b1_e2_words4, b1_e2_words5)}
						base_language='en'
						translated_language='pl'
					/>
				}/>
			</>
		);
	}
}

export default Unit2;
