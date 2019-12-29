// BASIC
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
// COMPONENTS
import AppPage from '../../../../Components/App/WritingApp'
// FILES
import b1_e1_words1 from '../../../../Components/Words/1_Macmillan/Unit1/1_PersonalData'
import b1_e1_words2 from '../../../../Components/Words/1_Macmillan/Unit1/2_Apperance'
import b1_e1_words3 from '../../../../Components/Words/1_Macmillan/Unit1/3_Clothes'
import b1_e1_words4 from '../../../../Components/Words/1_Macmillan/Unit1/4_FeaturesOfCharacters'
import b1_e1_words5 from '../../../../Components/Words/1_Macmillan/Unit1/5_FeelingsAndEmotions'
import b1_e1_words6 from '../../../../Components/Words/1_Macmillan/Unit1/6_Interests'
import b1_e1_words7 from '../../../../Components/Words/1_Macmillan/Unit1/7_EthnicalProblems'
import b1_e1_words8 from '../../../../Components/Words/1_Macmillan/Unit1/8_Orther'

class Unit1 extends Component {
	render() {
		return (
			<>
				{/* Rozdział 1 - Człowiek */}
				{/* Dane osobowe */}
				<Route path="/macmillan/rozdział-1/dane-osobowe" render={(props) =>
					<AppPage
						{...props}
						words={b1_e1_words1}
						info={{
							book: 'book_01',
							unit: 'unit_01',
							part: 'part_01'
						}}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Wygląd zewnętrzny */}
				<Route path="/macmillan/rozdział-1/wygląd-zewnętrzny" render={(props) =>
					<AppPage
						{...props}
						words={b1_e1_words2}
						info={{
							book: 'book_01',
							unit: 'unit_01',
							part: 'part_02'
						}}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Ubrania */}
				<Route path="/macmillan/rozdział-1/ubrania" render={(props) =>
					<AppPage
						{...props}
						words={b1_e1_words3}
						info={{
							book: 'book_01',
							unit: 'unit_01',
							part: 'part_03'
						}}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Cechy charakteru */}
				<Route path="/macmillan/rozdział-1/cechy-charakteru" render={(props) =>
					<AppPage
						{...props}
						words={b1_e1_words4}
						info={{
							book: 'book_01',
							unit: 'unit_01',
							part: 'part_04'
						}}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Uczucia i emocje */}
				<Route path="/macmillan/rozdział-1/uczucia-i-emocje" render={(props) =>
					<AppPage
						{...props}
						words={b1_e1_words5}
						info={{
							book: 'book_01',
							unit: 'unit_01',
							part: 'part_05'
						}}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Zainteresowania */}
				<Route path="/macmillan/rozdział-1/zainteresowania" render={(props) =>
					<AppPage
						{...props}
						words={b1_e1_words6}
						info={{
							book: 'book_01',
							unit: 'unit_01',
							part: 'part_06'
						}}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Problemy etyczne */}
				<Route path="/macmillan/rozdział-1/problemy-etyczne" render={(props) =>
					<AppPage
						{...props}
						words={b1_e1_words7}
						info={{
							book: 'book_01',
							unit: 'unit_01',
							part: 'part_07'
						}}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Inne */}
				<Route path="/macmillan/rozdział-1/inne" render={(props) =>
					<AppPage
						{...props}
						words={b1_e1_words8}
						info={{
							book: 'book_01',
							unit: 'unit_01',
							part: 'part_08'
						}}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Test */}
				<Route path="/macmillan/rozdział-1/test" render={(props) =>
					<AppPage
						{...props}
						words={[].concat(b1_e1_words1, b1_e1_words2, b1_e1_words3, b1_e1_words4, b1_e1_words5, b1_e1_words6, b1_e1_words7, b1_e1_words8)}
						info={{
							book: 'book_01',
							unit: 'unit_01',
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

export default Unit1;
