// BASIC
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
// COMPONENTS
import AppPage from '../../../../Components/App/WritingApp'
// FILES
import b1_e7_words1 from '../../../../Components/Words/1_Macmillan/Unit7/1_TypesOfShops'
import b1_e7_words2 from '../../../../Components/Words/1_Macmillan/Unit7/2_DescribingProducts'
import b1_e7_words3 from '../../../../Components/Words/1_Macmillan/Unit7/3_SellingAndBuying'
import b1_e7_words4 from '../../../../Components/Words/1_Macmillan/Unit7/4_Complaining'
import b1_e7_words5 from '../../../../Components/Words/1_Macmillan/Unit7/5_Advertising'
import b1_e7_words6 from '../../../../Components/Words/1_Macmillan/Unit7/6_Services'
import b1_e7_words7 from '../../../../Components/Words/1_Macmillan/Unit7/7_MeansOfPayment'
import b1_e7_words8 from '../../../../Components/Words/1_Macmillan/Unit7/8_Banks'
import b1_e7_words9 from '../../../../Components/Words/1_Macmillan/Unit7/9_Insurance'
import b1_e7_words10 from '../../../../Components/Words/1_Macmillan/Unit7/10_Other'

class unit_07 extends Component {
	render() {
		return (
			<>
				{/* Rozdzial 7 - Zakupy i uslugi */}
				{/* Rodzaje sklepów */}
				<Route path="/macmillan/rozdzial-7/rodzaje-sklepów" render={(props) =>
					<AppPage
						{...props}
						words={b1_e7_words1}
						info={{
							book: 'book_01',
							unit: 'unit_07',
							part: 'part_01'
						}}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Opisywanie towarów */}
				<Route path="/macmillan/rozdzial-7/opisywanie-towarów" render={(props) =>
					<AppPage
						{...props}
						words={b1_e7_words2}
						info={{
							book: 'book_01',
							unit: 'unit_07',
							part: 'part_02'
						}}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Sprzedawanie i kupowanie */}
				<Route path="/macmillan/rozdzial-7/sprzedawanie-i-kupowanie" render={(props) =>
					<AppPage
						{...props}
						words={b1_e7_words3}
						info={{
							book: 'book_01',
							unit: 'unit_07',
							part: 'part_03'
						}}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Reklamacje */}
				<Route path="/macmillan/rozdzial-7/reklamacje" render={(props) =>
					<AppPage
						{...props}
						words={b1_e7_words4}
						info={{
							book: 'book_01',
							unit: 'unit_07',
							part: 'part_04'
						}}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Reklama */}
				<Route path="/macmillan/rozdzial-7/reklama" render={(props) =>
					<AppPage
						{...props}
						words={b1_e7_words5}
						info={{
							book: 'book_01',
							unit: 'unit_07',
							part: 'part_05'
						}}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Korzystanie z uslug */}
				<Route path="/macmillan/rozdzial-7/korzystanie-z-uslug" render={(props) =>
					<AppPage
						{...props}
						words={b1_e7_words6}
						info={{
							book: 'book_01',
							unit: 'unit_07',
							part: 'part_06'
						}}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Środki platnicze */}
				<Route path="/macmillan/rozdzial-7/środki-platnicze" render={(props) =>
					<AppPage
						{...props}
						words={b1_e7_words7}
						info={{
							book: 'book_01',
							unit: 'unit_07',
							part: 'part_07'
						}}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Banki */}
				<Route path="/macmillan/rozdzial-7/banki" render={(props) =>
					<AppPage
						{...props}
						words={b1_e7_words8}
						info={{
							book: 'book_01',
							unit: 'unit_07',
							part: 'part_08'
						}}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Ubezpieczenie */}
				<Route path="/macmillan/rozdzial-7/ubezpieczenie" render={(props) =>
					<AppPage
						{...props}
						words={b1_e7_words9}
						info={{
							book: 'book_01',
							unit: 'unit_07',
							part: 'part_09'
						}}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Inne */}
				<Route path="/macmillan/rozdzial-7/inne" render={(props) =>
					<AppPage
						{...props}
						words={b1_e7_words10}
						info={{
							book: 'book_01',
							unit: 'unit_07',
							part: 'part_10'
						}}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Test */}
				<Route path="/macmillan/rozdzial-7/test" render={(props) =>
					<AppPage
						{...props}
						words={[].concat(b1_e7_words1, b1_e7_words2, b1_e7_words3, b1_e7_words4, b1_e7_words5, b1_e7_words6, b1_e7_words7, b1_e7_words8, b1_e7_words9, b1_e7_words10)}
						info={{
							book: 'book_01',
							unit: 'unit_07',
							part: 'part_11'
						}}
						base_language='en'
						translated_language='pl'
					/>
				}/>
			</>
		);
	}
}

export default unit_07;
