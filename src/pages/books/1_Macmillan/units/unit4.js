// BASIC
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
// COMPONENTS
import AppPage from '../../../../Components/App/WritingApp'
// FILES
import b1_e4_words1 from '../../../../Components/Words/1_Macmillan/Unit4/1_JobsAndResponsibilities'
import b1_e4_words2 from '../../../../Components/Words/1_Macmillan/Unit4/2_EmploymentAndWorkConditions'
import b1_e4_words3 from '../../../../Components/Words/1_Macmillan/Unit4/3_TemporaryWork'
import b1_e4_words4 from '../../../../Components/Words/1_Macmillan/Unit4/4_JobMarket'
import b1_e4_words5 from '../../../../Components/Words/1_Macmillan/Unit4/5_Orther'

class Unit4 extends Component {
	render() {
		return (
			<>
				{/* Rozdzial 4 - Praca */}
				{/* Zawody i związane z nimi czynności */}
				<Route path="/macmillan/rozdzial-4/zawody-i-związane-z-nimi-czynności" render={(props) =>
					<AppPage
						{...props}
						words={b1_e4_words1}
						info={{
							book: 'book_01',
							unit: 'unit_04',
							part: 'part_01'
						}}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Warunki pracy i zatrudnienia */}
				<Route path="/macmillan/rozdzial-4/warunki-pracy-i-zatrudnienia" render={(props) =>
					<AppPage
						{...props}
						words={b1_e4_words2}
						info={{
							book: 'book_01',
							unit: 'unit_04',
							part: 'part_02'
						}}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Praca dorywcza */}
				<Route path="/macmillan/rozdzial-4/praca-dorywcza" render={(props) =>
					<AppPage
						{...props}
						words={b1_e4_words3}
						info={{
							book: 'book_01',
							unit: 'unit_04',
							part: 'part_03'
						}}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Rynek pracy */}
				<Route path="/macmillan/rozdzial-4/rynek-pracy" render={(props) =>
					<AppPage
						{...props}
						words={b1_e4_words4}
						info={{
							book: 'book_01',
							unit: 'unit_04',
							part: 'part_04'
						}}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Inne */}
				<Route path="/macmillan/rozdzial-4/inne" render={(props) =>
					<AppPage
						{...props}
						words={b1_e4_words5}
						info={{
							book: 'book_01',
							unit: 'unit_04',
							part: 'part_05'
						}}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Test */}
				<Route path="/macmillan/rozdzial-4/test" render={(props) =>
					<AppPage
						{...props}
						words={[].concat(b1_e4_words1, b1_e4_words2, b1_e4_words3, b1_e4_words4, b1_e4_words5)}
						info={{
							book: 'book_01',
							unit: 'unit_04',
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

export default Unit4;
