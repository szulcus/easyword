// BASIC
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
// COMPONENTS
import AppPage from '../../../../Components/App/WritingApp'
// FILES
import b1_e3_words1 from '../../../../Components/Words/1_Macmillan/Unit3/1_SchoolSubjects'
import b1_e3_words2 from '../../../../Components/Words/1_Macmillan/Unit3/2_GradesAndCourseRequirements'
import b1_e3_words3 from '../../../../Components/Words/1_Macmillan/Unit3/3_SchoolLive'
import b1_e3_words4 from '../../../../Components/Words/1_Macmillan/Unit3/4_ExtracurricularActivities'
import b1_e3_words5 from '../../../../Components/Words/1_Macmillan/Unit3/5_EducationSystem'
import b1_e3_words6 from '../../../../Components/Words/1_Macmillan/Unit3/6_Orther'

class Unit3 extends Component {
	render() {
		return (
			<>
				{/* Rozdział 3 - Szkoła */}
				{/* Przedmioty szkolne */}
				<Route path="/macmillan/rozdział-3/przedmioty-szkolne" render={(props) =>
					<AppPage
						{...props}
						words={b1_e3_words1}
						info={{
							book: 'book_01',
							unit: 'unit_03',
							part: 'part_01'
						}}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Oceny i wymagania */}
				<Route path="/macmillan/rozdział-3/oceny-i-wymagania" render={(props) =>
					<AppPage
						{...props}
						words={b1_e3_words2}
						info={{
							book: 'book_01',
							unit: 'unit_03',
							part: 'part_02'
						}}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Życie szkolne */}
				<Route path="/macmillan/rozdział-3/życie-szkolne" render={(props) =>
					<AppPage
						{...props}
						words={b1_e3_words3}
						info={{
							book: 'book_01',
							unit: 'unit_03',
							part: 'part_03'
						}}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Zajęcia pozalekcyjne */}
				<Route path="/macmillan/rozdział-3/zajęcia-pozalekcyjne" render={(props) =>
					<AppPage
						{...props}
						words={b1_e3_words4}
						info={{
							book: 'book_01',
							unit: 'unit_03',
							part: 'part_04'
						}}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* System oświaty */}
				<Route path="/macmillan/rozdział-3/system-oświaty" render={(props) =>
					<AppPage
						{...props}
						words={b1_e3_words5}
						info={{
							book: 'book_01',
							unit: 'unit_03',
							part: 'part_05'
						}}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Inne */}
				<Route path="/macmillan/rozdział-3/inne" render={(props) =>
					<AppPage
						{...props}
						words={b1_e3_words6}
						info={{
							book: 'book_01',
							unit: 'unit_03',
							part: 'part_06'
						}}
						base_language='en'
						translated_language='pl'
					/>
				}/>
				{/* Test */}
				<Route path="/macmillan/rozdział-3/test" render={(props) =>
					<AppPage
						{...props}
						words={[].concat(b1_e3_words1, b1_e3_words2, b1_e3_words3, b1_e3_words4, b1_e3_words5, b1_e3_words6)}
						info={{
							book: 'book_01',
							unit: 'unit_03',
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

export default Unit3;
