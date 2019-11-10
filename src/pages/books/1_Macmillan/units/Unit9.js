// BASIC
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
// COMPONENTS
import AppPage from '../../../../components/App/WritingApp'
// FILES
import b1_e9_words1 from '../../../components/Words/1_Macmillan/Unit9/1_FormsOfCulture'
import b1_e9_words2 from '../../../components/Words/1_Macmillan/Unit9/2_ArtistsAndTheirWork'
import b1_e9_words3 from '../../../components/Words/1_Macmillan/Unit9/3_ParticipatingInCulturalEvents'
import b1_e9_words4 from '../../../components/Words/1_Macmillan/Unit9/4_MassMedia'
import b1_e9_words5 from '../../../components/Words/1_Macmillan/Unit9/5_Other'

class Unit9 extends Component {
	render() {
		return (
			<>
				{/* Rozdział 9 - Kultura */}
				{/* Dziedziny kultury */}
				<Route path="/macmillan/rozdział-9/dziedziny-kultury" render={(props) =>
					<AppPage
						{...props}
						words={b1_e9_words1}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Twórcy i ich dzieła */}
				<Route path="/macmillan/rozdział-9/twórcy-i-ich-dzieła" render={(props) =>
					<AppPage
						{...props}
						words={b1_e9_words2}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Uczestnictwo w kulturze */}
				<Route path="/macmillan/rozdział-9/uczestnictwo-w-kulturze" render={(props) =>
					<AppPage
						{...props}
						words={b1_e9_words3}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Media */}
				<Route path="/macmillan/rozdział-9/media" render={(props) =>
					<AppPage
						{...props}
						words={b1_e9_words4}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Inne */}
				<Route path="/macmillan/rozdział-9/inne" render={(props) =>
					<AppPage
						{...props}
						words={b1_e9_words5}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Test */}
				<Route path="/macmillan/rozdział-9/test" render={(props) =>
					<AppPage
						{...props}
						words={[].concat(b1_e9_words1, b1_e9_words2, b1_e9_words3, b1_e9_words4, b1_e9_words5)}
						base_language='en'
						translated_language='pl'
					/>
				}/>
			</>
		);
	}
}

export default Unit9;
