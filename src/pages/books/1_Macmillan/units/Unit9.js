// BASIC
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
// COMPONENTS
import AppPage from '../../../../Components/App/WritingApp'
// FILES
import b1_e9_words1 from '../../../../Components/Words/1_Macmillan/Unit9/1_FormsOfCulture'
import b1_e9_words2 from '../../../../Components/Words/1_Macmillan/Unit9/2_ArtistsAndTheirWork'
import b1_e9_words3 from '../../../../Components/Words/1_Macmillan/Unit9/3_ParticipatingInCulturalEvents'
import b1_e9_words4 from '../../../../Components/Words/1_Macmillan/Unit9/4_MassMedia'
import b1_e9_words5 from '../../../../Components/Words/1_Macmillan/Unit9/5_Other'

class Unit9 extends Component {
	render() {
		return (
			<>
				{/* Rozdzial 9 - Kultura */}
				{/* Dziedziny kultury */}
				<Route path="/macmillan/rozdzial-9/dziedziny-kultury" render={(props) =>
					<AppPage
						{...props}
						words={b1_e9_words1}
						info={{
							book: 'book_01',
							unit: 'unit_09',
							part: 'part_01'
						}}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Twórcy i ich dziela */}
				<Route path="/macmillan/rozdzial-9/twórcy-i-ich-dziela" render={(props) =>
					<AppPage
						{...props}
						words={b1_e9_words2}
						info={{
							book: 'book_01',
							unit: 'unit_08',
							part: 'part_02'
						}}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Uczestnictwo w kulturze */}
				<Route path="/macmillan/rozdzial-9/uczestnictwo-w-kulturze" render={(props) =>
					<AppPage
						{...props}
						words={b1_e9_words3}
						info={{
							book: 'book_01',
							unit: 'unit_08',
							part: 'part_03'
						}}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Media */}
				<Route path="/macmillan/rozdzial-9/media" render={(props) =>
					<AppPage
						{...props}
						words={b1_e9_words4}
						info={{
							book: 'book_01',
							unit: 'unit_08',
							part: 'part_04'
						}}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Inne */}
				<Route path="/macmillan/rozdzial-9/inne" render={(props) =>
					<AppPage
						{...props}
						words={b1_e9_words5}
						info={{
							book: 'book_01',
							unit: 'unit_08',
							part: 'part_05'
						}}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Test */}
				<Route path="/macmillan/rozdzial-9/test" render={(props) =>
					<AppPage
						{...props}
						words={[].concat(b1_e9_words1, b1_e9_words2, b1_e9_words3, b1_e9_words4, b1_e9_words5)}
						info={{
							book: 'book_01',
							unit: 'unit_08',
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

export default Unit9;
