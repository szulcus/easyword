// BASIC
import React, {Component} from 'react';
import { HashRouter as Router, Switch, Route} from 'react-router-dom';
// PAGES
import AppPage from './components/App/App'
import WorkPage from './components/Work/Work'

import MainPage from './pages/index'

import MacmillanList from './pages/books/1_Macmillan/macmillan'
import WSiPList from './pages/books/2_WSiP/wsip'
import OxfordList from './pages/books/3_Oxford/oxford'

import NotFoundPage from './pages/404'
// STYLED
import GlobalStyles from './components/Styled/Global/global';
// FILES
		// WORDS
			// 1_Macmillan
				// Rozdział 1
				import b1_e1_words1 from './components/Words/1_Macmillan/Unit1/1_PersonalData'
				import b1_e1_words2 from './components/Words/1_Macmillan/Unit1/2_Apperance'
				import b1_e1_words3 from './components/Words/1_Macmillan/Unit1/3_Clothes'
				import b1_e1_words4 from './components/Words/1_Macmillan/Unit1/4_FeaturesOfCharacters'
				import b1_e1_words5 from './components/Words/1_Macmillan/Unit1/5_FeelingsAndEmotions'
				import b1_e1_words6 from './components/Words/1_Macmillan/Unit1/6_Interests'
				import b1_e1_words7 from './components/Words/1_Macmillan/Unit1/7_EthnicalProblems'
				import b1_e1_words8 from './components/Words/1_Macmillan/Unit1/8_Orther'
				// Rozdział 2
				import b1_e2_words1 from './components/Words/1_Macmillan/Unit2/1_ThePlaceWhereWeLive'
				import b1_e2_words2 from './components/Words/1_Macmillan/Unit2/2_DescribingHouses'
				import b1_e2_words3 from './components/Words/1_Macmillan/Unit2/3_HouseholdAndGardenJobs'
				import b1_e2_words4 from './components/Words/1_Macmillan/Unit2/4_RentingPurchasingAndSellingProperty'
				import b1_e2_words5 from './components/Words/1_Macmillan/Unit2/5_Orther'
				// Rozdział 3
				import b1_e3_words1 from './components/Words/1_Macmillan/Unit3/1_SchoolSubjects'
				import b1_e3_words2 from './components/Words/1_Macmillan/Unit3/2_GradesAndCourseRequirements'
				import b1_e3_words3 from './components/Words/1_Macmillan/Unit3/3_SchoolLive'
				import b1_e3_words4 from './components/Words/1_Macmillan/Unit3/4_ExtracurricularActivities'
				import b1_e3_words5 from './components/Words/1_Macmillan/Unit3/5_EducationSystem'
				import b1_e3_words6 from './components/Words/1_Macmillan/Unit3/6_Orther'
				// Rozdział 4
				import b1_e4_words1 from './components/Words/1_Macmillan/Unit4/1_JobsAndResponsibilities'
				import b1_e4_words2 from './components/Words/1_Macmillan/Unit4/2_EmploymentAndWorkConditions'
				import b1_e4_words3 from './components/Words/1_Macmillan/Unit4/3_TemporaryWork'
				import b1_e4_words4 from './components/Words/1_Macmillan/Unit4/4_JobMarket'
				import b1_e4_words5 from './components/Words/1_Macmillan/Unit4/5_Orther'
		// IMAGES
		import working from './images/working.png'
		import thinking from './images/thinking.png'

		import testWords from './components/Words/_test'

class App extends Component {
	render() {
	return (
		<Router>
		<GlobalStyles/>
			<Switch>
				{/* <Route path="/app" render={(props) =>
					<AppPage
						{...props}
						cathegory={this.props.cathegory}
						word={this.props.word}
						translation={this.props.translation}
						picture={this.props.picture}
						language={this.props.language}
					/>
				}/> */}
				{/* STRONA GŁÓWNA */}
				<Route path="/" exact component={MainPage}/>
					{/* MACMILLAN */}
					<Route path="/macmillan" exact component={MacmillanList}/>
						{/* Rozdział 1 - Człowiek */}
							{/* Dane osobowe */}
							<Route path="/macmillan/rozdział-1/dane-osobowe" render={(props) =>
								<AppPage
									{...props}
									words={b1_e1_words1}
									base_language='en'
									translated_language='pl'
								/>
							}/>
							{/* Wygląd zewnętrzny */}
							<Route path="/macmillan/rozdział-1/wygląd-zewnętrzny" render={(props) =>
								<AppPage
									{...props}
									words={b1_e1_words2}
									base_language='en'
									translated_language='pl'
								/>
							}/>
							{/* Ubrania */}
							<Route path="/macmillan/rozdział-1/ubrania" render={(props) =>
								<AppPage
									{...props}
									words={b1_e1_words3}
									base_language='en'
									translated_language='pl'
								/>
							}/>
							{/* Cechy charakteru */}
							<Route path="/macmillan/rozdział-1/cechy-charakteru" render={(props) =>
								<AppPage
									{...props}
									words={b1_e1_words4}
									base_language='en'
									translated_language='pl'
								/>
							}/>
							{/* Uczucia i emocje */}
							<Route path="/macmillan/rozdział-1/uczucia-i-emocje" render={(props) =>
								<AppPage
									{...props}
									words={b1_e1_words5}
									base_language='en'
									translated_language='pl'
								/>
							}/>
							{/* Zainteresowania */}
							<Route path="/macmillan/rozdział-1/zainteresowania" render={(props) =>
								<AppPage
									{...props}
									words={b1_e1_words6}
									base_language='en'
									translated_language='pl'
								/>
							}/>
							{/* Problemy etyczne */}
							<Route path="/macmillan/rozdział-1/problemy-etyczne" render={(props) =>
								<AppPage
									{...props}
									words={b1_e1_words7}
									base_language='en'
									translated_language='pl'
								/>
							}/>
							{/* Inne */}
							<Route path="/macmillan/rozdział-1/inne" render={(props) =>
								<AppPage
									{...props}
									words={b1_e1_words8}
									base_language='en'
									translated_language='pl'
								/>
							}/>
								{/* Test */}
								<Route path="/macmillan/rozdział-1/test" render={(props) =>
									<AppPage
										{...props}
										words={[].concat(b1_e1_words1, b1_e1_words2, b1_e1_words3, b1_e1_words4, b1_e1_words5, b1_e1_words6, b1_e1_words7, b1_e1_words8)}
										base_language='en'
										translated_language='pl'
									/>
								}/>
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
							<Route path="/macmillan/rozdział-2/test" render={(props) =>
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
						{/* Rozdział 3 - Szkoła */}
							{/* Przedmioty szkolne */}
							<Route path="/macmillan/rozdział-3/przedmioty-szkolne" render={(props) =>
								<AppPage
									{...props}
									words={b1_e3_words1}
									base_language='en'
									translated_language='pl'
								/>
							}/>
							{/* Oceny i wymagania */}
							<Route path="/macmillan/rozdział-3/oceny-i-wymagania" render={(props) =>
								<AppPage
									{...props}
									words={b1_e3_words2}
									base_language='en'
									translated_language='pl'
								/>
							}/>
							{/* Życie szkolne */}
							<Route path="/macmillan/rozdział-3/życie-szkolne" render={(props) =>
								<AppPage
									{...props}
									words={b1_e3_words3}
									base_language='en'
									translated_language='pl'
								/>
							}/>
							{/* Zajęcia pozalekcyjne */}
							<Route path="/macmillan/rozdział-3/zajęcia-pozalekcyjne" render={(props) =>
								<AppPage
									{...props}
									words={b1_e3_words4}
									base_language='en'
									translated_language='pl'
								/>
							}/>
							{/* System oświaty */}
							<Route path="/macmillan/rozdział-3/system-oświaty" render={(props) =>
								<AppPage
									{...props}
									words={b1_e3_words5}
									base_language='en'
									translated_language='pl'
								/>
							}/>
							{/* Inne */}
							<Route path="/macmillan/rozdział-3/inne" render={(props) =>
								<AppPage
									{...props}
									words={b1_e3_words6}
									base_language='en'
									translated_language='pl'
								/>
							}/>
								{/* Test */}
								<Route path="/macmillan/rozdział-3/test" render={(props) =>
									<AppPage
										{...props}
										words={[].concat(b1_e3_words1, b1_e3_words2, b1_e3_words3, b1_e3_words4, b1_e3_words5, b1_e3_words6)}
										base_language='en'
										translated_language='pl'
									/>
								}/>
						{/* Rozdział 4 - Praca */}
							{/* Zawody i związane z nimi czynności */}
							<Route path="/macmillan/rozdział-4/test" render={(props) =>
								<AppPage
									{...props}
									words={[].concat(b1_e4_words1)}
									base_language='en'
									translated_language='pl'
								/>
							}/>
							{/* Warunki pracy i zatrudnienia */}
							<Route path="/macmillan/rozdział-4/test" render={(props) =>
								<AppPage
									{...props}
									words={[].concat(b1_e4_words2)}
									base_language='en'
									translated_language='pl'
								/>
							}/>
							{/* Praca dorywcza */}
							<Route path="/macmillan/rozdział-4/test" render={(props) =>
								<AppPage
									{...props}
									words={[].concat(b1_e4_words3)}
									base_language='en'
									translated_language='pl'
								/>
							}/>
							{/* Rynek pracy */}
							<Route path="/macmillan/rozdział-4/test" render={(props) =>
								<AppPage
									{...props}
									words={[].concat(b1_e4_words4)}
									base_language='en'
									translated_language='pl'
								/>
							}/>
							{/* Inne */}
							<Route path="/macmillan/rozdział-4/test" render={(props) =>
								<AppPage
									{...props}
									words={[].concat(b1_e4_words5)}
									base_language='en'
									translated_language='pl'
								/>
							}/>
								{/* Test */}
								<Route path="/macmillan/rozdział-4/test" render={(props) =>
									<AppPage
										{...props}
										words={[].concat(b1_e4_words1, b1_e4_words2, b1_e4_words3, b1_e4_words4, b1_e4_words5)}
										base_language='en'
										translated_language='pl'
									/>
								}/>
						{/* Rozdział 5 - Życie rodzinne i towarzyskie */}
							{/* Etapy życia */}
							<Route path="/macmillan/rozdział-5/życie-rodzinne-i-towarzyskie" render={(props) =>
								<WorkPage
									{...props}
									title="Prace trwają"
									image={working}
								/>
							}/>
							{/* Członkowie rodziny, koledzy i przyjaciele */}
							<Route path="/macmillan/rozdział-5/członkowie-rodziny-koledzy-i-przyjaciele" render={(props) =>
								<WorkPage
									{...props}
									title="Prace trwają"
									image={working}
								/>
							}/>
							{/* Czynności życia codziennego */}
							<Route path="/macmillan/rozdział-5/czynności-życia-codziennego" render={(props) =>
								<WorkPage
									{...props}
									title="Prace trwają"
									image={working}
								/>
							}/>
							{/* Formy spędzania czasu wolnego */}
							<Route path="/macmillan/rozdział-5/formy-spędzania-czasu-wolnego" render={(props) =>
								<WorkPage
									{...props}
									title="Prace trwają"
									image={working}
								/>
							}/>
							{/* Święta i uroczystości */}
							<Route path="/macmillan/rozdział-5/święta-i-uroczystości" render={(props) =>
								<WorkPage
									{...props}
									title="Prace trwają"
									image={working}
								/>
							}/>
							{/* Styl życia, konflikty i problemy */}
							<Route path="/macmillan/rozdział-5/styl-życia-konflikty-i-problemy" render={(props) =>
								<WorkPage
									{...props}
									title="Prace trwają"
									image={working}
								/>
							}/>
							{/* Inne */}
							<Route path="/macmillan/rozdział-5/inne" render={(props) =>
								<WorkPage
									{...props}
									title="Prace trwają"
									image={working}
								/>
							}/>
								{/* Test */}
								<Route path="/macmillan/rozdział-5/test" render={(props) =>
									<WorkPage
										{...props}
										title="Prace trwają"
										image={working}
									/>
								}/>
						{/* Rozdział 6 - Żywienie */}
							{/* Inne */}
								{/* Test */}
						{/* Rozdział 7 - Zakupy i usługi */}
							{/* Inne */}
								{/* Test */}
						{/* Rozdział 8 - Podróżowanie i turystyka */}
							{/* Inne */}
								{/* Test */}
						{/* Rozdział 9 - Kultura */}
							{/* Inne */}
								{/* Test */}
						{/* Rozdział 10 - Sport */}
							{/* Inne */}
								{/* Test */}
						{/* Rozdział 11 - Zdrowie */}
							{/* Inne */}
								{/* Test */}
						{/* Rozdział 12 - Nauka i technika */}
							{/* Inne */}
								{/* Test */}
						{/* Rozdział 13 - Świat przyrody */}
							{/* Inne */}
								{/* Test */}
						{/* Rozdział 14 - Państwo i społeczeństwo* /}
							{/* Inne */}
								{/* Test */}
					{/* OXFORD */}
					<Route path="/oxford" exact component={OxfordList}/>
					{/* WSIP */}
					<Route path="/wsip" exact component={WSiPList}/>

				<Route path="/thinking" render={(props) =>
					<WorkPage
						{...props}
						title="Ciągle myślę"
						image={thinking}
					/>
				}/>

				<Route path="/test" render={(props) =>
					<AppPage
						{...props}
						words={[].concat(testWords)}
						base_language="en"
						translated_language="pl"
					/>
				}/>
				<Route component={NotFoundPage}/>
			</Switch>
		</Router>
	);
	}
}

export default App;
