// BASIC
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
// COMPONENTS
import AppPage from '../../../../Components/App/WritingApp'
// FILES
import b1_e2_words1 from '../../../../Components/Words/1_Macmillan/Unit2/1_ThePlaceWhereWeLive'
import b1_e2_words2 from '../../../../Components/Words/1_Macmillan/Unit2/2_DescribingHouses'
import b1_e2_words3 from '../../../../Components/Words/1_Macmillan/Unit2/3_HouseholdAndGardenJobs'
import b1_e2_words4 from '../../../../Components/Words/1_Macmillan/Unit2/4_RentingPurchasingAndSellingProperty'
import b1_e2_words5 from '../../../../Components/Words/1_Macmillan/Unit2/5_Orther'

class Unit2 extends Component {
	render() {
		return (
			<>
				{/* Rozdzial 2 - Dom */}
				{/* Miejsce zamieszkania */}
				<Route path="/macmillan/rozdzial-2/dom" render={(props) =>
					<AppPage
						{...props}
						words={b1_e2_words1}
						info={{
							book: 'book_01',
							unit: 'unit_02',
							part: 'part_01'
						}}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Opis domu */}
				<Route path="/macmillan/rozdzial-2/opis-domu" render={(props) =>
					<AppPage
						{...props}
						words={b1_e2_words2}
						info={{
							book: 'book_01',
							unit: 'unit_02',
							part: 'part_02'
						}}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Prace w domu i ogrodzie */}
				<Route path="/macmillan/rozdzial-2/prace-w-domu-i-ogrodzie" render={(props) =>
					<AppPage
						{...props}
						words={b1_e2_words3}
						info={{
							book: 'book_01',
							unit: 'unit_02',
							part: 'part_03'
						}}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Wynajem, kupno i sprzedaż nieruchomości */}
				<Route path="/macmillan/rozdzial-2/wynajem-kupno-i-sprzedaż-nieruchomości" render={(props) =>
					<AppPage
						{...props}
						words={b1_e2_words4}
						info={{
							book: 'book_01',
							unit: 'unit_02',
							part: 'part_04'
						}}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Inne */}
				<Route path="/macmillan/rozdzial-2/inne" render={(props) =>
					<AppPage
						{...props}
						words={b1_e2_words5}
						info={{
							book: 'book_01',
							unit: 'unit_02',
							part: 'part_05'
						}}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Test */}
				<Route path="/macmillan/rozdzial-2/test" render={(props) =>
					<AppPage
						{...props}
						words={[].concat(b1_e2_words1, b1_e2_words2, b1_e2_words3, b1_e2_words4, b1_e2_words5)}
						info={{
							book: 'book_01',
							unit: 'unit_02',
							part: 'test'
						}}
						base_language='en'
						translated_language='pl'
					/>
				}/>
			</>
		);
	}
}

export default Unit2;
