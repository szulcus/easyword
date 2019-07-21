// BASIC
import React, {Component} from 'react';
import { HashRouter as Router, Switch, Route} from 'react-router-dom';
// PAGES
import AppPage from './components/App/WritingApp'
import IrregularAppPage from './components/App/IrregularApp'
import WorkPage from './components/Work/Work'

import MainPage from './pages/index'

import MacmillanList from './components/List/MacmillanList'
import WSiPList from './components/List/WSiPList'
// import OxfordList from './pages/books/3_Oxford/oxford'

import NotFoundPage from './pages/404/404'
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
			// WSiP
				// Rozdział 1
				import b2_e1_words1 from './components/Words/2_WSiP/Unit1/1_Rzeczowniki'
				import b2_e1_words2 from './components/Words/2_WSiP/Unit1/2_StronyŚwiata'
				import b2_e1_words3 from './components/Words/2_WSiP/Unit1/3_PytaniaOMiejsceIKierunek'
				import b2_e1_words4 from './components/Words/2_WSiP/Unit1/4_PoryRokuINazwyMiesięcy'
				import b2_e1_words5 from './components/Words/2_WSiP/Unit1/5_ZjawiskaPogodowe'
				import b2_e1_words6 from './components/Words/2_WSiP/Unit1/6_TypyKrajobrazuRosji'
				// Rozdział 2
				import b2_e2_words1 from './components/Words/2_WSiP/Unit2/1_Rzeczowniki'
				import b2_e2_words2 from './components/Words/2_WSiP/Unit2/2_RzeczownikiNieodmienne'
				import b2_e2_words3 from './components/Words/2_WSiP/Unit2/3_OkreślanieCzasu'
				import b2_e2_words4 from './components/Words/2_WSiP/Unit2/4_Sztuka'
				import b2_e2_words5 from './components/Words/2_WSiP/Unit2/5_Kolej'
				import b2_e2_words6 from './components/Words/2_WSiP/Unit2/6_Kolory'
				import b2_e2_words7 from './components/Words/2_WSiP/Unit2/7_Przyimki'
				import b2_e2_words8 from './components/Words/2_WSiP/Unit2/8_Przymiotniki'
			// Oxford
				import b3_i1 from './components/Words/3_Oxford/Irregular_Verbs/1_FromBook'
				import b3_i2 from './components/Words/3_Oxford/Irregular_Verbs/2_FromApp'
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
							<Route path="/macmillan/rozdział-4/zawody-i-związane-z-nimi-czynności" render={(props) =>
								<AppPage
									{...props}
									words={[].concat(b1_e4_words1)}
									base_language='en'
									translated_language='pl'
								/>
							}/>
							{/* Warunki pracy i zatrudnienia */}
							<Route path="/macmillan/rozdział-4/warunki-pracy-i-zatrudnienia" render={(props) =>
								<AppPage
									{...props}
									words={[].concat(b1_e4_words2)}
									base_language='en'
									translated_language='pl'
								/>
							}/>
							{/* Praca dorywcza */}
							<Route path="/macmillan/rozdział-4/praca-dorywcza" render={(props) =>
								<AppPage
									{...props}
									words={[].concat(b1_e4_words3)}
									base_language='en'
									translated_language='pl'
								/>
							}/>
							{/* Rynek pracy */}
							<Route path="/macmillan/rozdział-4/rynek-pracy" render={(props) =>
								<AppPage
									{...props}
									words={[].concat(b1_e4_words4)}
									base_language='en'
									translated_language='pl'
								/>
							}/>
							{/* Inne */}
							<Route path="/macmillan/rozdział-4/inne" render={(props) =>
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
							<Route path="/macmillan/rozdział-5/etapy-życia" render={(props) =>
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
					{/* WSIP */}
					<Route path="/wsip" exact component={WSiPList}/>
						{/* Rozdział 1 - Podróże* /}
							{/* Rzeczowniki */}
							<Route path="/wsip/rozdział-1/rzeczowniki" render={(props) =>
								<AppPage
									{...props}
									words={b2_e1_words1}
									base_language='ru'
									translated_language='pl'
								/>
							}/>
							{/* Strony świata */}
							<Route path="/wsip/rozdział-1/strony-świata" render={(props) =>
								<AppPage
									{...props}
									words={b2_e1_words2}
									base_language='ru'
									translated_language='pl'
								/>
							}/>
							{/* Pytania o miejsce i kierunek */}
							<Route path="/wsip/rozdział-1/pytania-o-miejsce-i-kierunek" render={(props) =>
								<AppPage
									{...props}
									words={b2_e1_words3}
									base_language='ru'
									translated_language='pl'
								/>
							}/>
							{/* Pory roku i nazwy miesięcy */}
							<Route path="/wsip/rozdział-1/pory-roku-i-nazwy-miesięcy" render={(props) =>
								<AppPage
									{...props}
									words={b2_e1_words4}
									base_language='ru'
									translated_language='pl'
								/>
							}/>
							{/* Zjawiska pogodowe */}
							<Route path="/wsip/rozdział-1/zjawiska-pogodowe" render={(props) =>
								<AppPage
									{...props}
									words={b2_e1_words5}
									base_language='ru'
									translated_language='pl'
								/>
							}/>
							{/* Typy krajobrazu Rosji */}
							<Route path="/wsip/rozdział-1/typy-krajobrazu-rosji" render={(props) =>
								<AppPage
									{...props}
									words={b2_e1_words6}
									base_language='ru'
									translated_language='pl'
								/>
							}/>
							{/* Przyroda */}
							<Route path="/wsip/rozdział-1/przyroda" render={(props) =>
								<WorkPage
									{...props}
									title="Prace trwają"
									image={working}
								/>
							}/>
							{/* Aktywny wypoczynek */}
							<Route path="/wsip/rozdział-1/aktywny-wypoczynek" render={(props) =>
								<WorkPage
									{...props}
									title="Prace trwają"
									image={working}
								/>
							}/>
							{/* Wyposażenie turysty */}
							<Route path="/wsip/rozdział-1/wyposażenie-turysty" render={(props) =>
								<WorkPage
									{...props}
									title="Prace trwają"
									image={working}
								/>
							}/>
							{/* Czasowniki */}
							<Route path="/wsip/rozdział-1/czasowniki" render={(props) =>
								<WorkPage
									{...props}
									title="Prace trwają"
									image={working}
								/>
							}/>
							{/* Zwroty i wyrażenia */}
							<Route path="/wsip/rozdział-1/zwroty-i-wyrażenia" render={(props) =>
								<WorkPage
									{...props}
									title="Prace trwają"
									image={working}
								/>
							}/>
							{/* Przyimki */}
							<Route path="/wsip/rozdział-1/przyimki" render={(props) =>
								<WorkPage
									{...props}
									title="Prace trwają"
									image={working}
								/>
							}/>
								{/* Test */}
								<Route path="/wsip/rozdział-1/test" render={(props) =>
									<AppPage
										{...props}
										words={[].concat(b2_e1_words1, b2_e1_words2, b2_e1_words3, b2_e1_words4, b2_e1_words5, b2_e1_words6)}
										base_language='ru'
										translated_language='pl'
									/>
								}/>
						{/* Rozdział 2 - W stolicy Polski */}
							{/* Rzeczowniki */}
							<Route path="/wsip/rozdział-2/rzeczowniki" render={(props) =>
								<AppPage
									{...props}
									words={b2_e2_words1}
									base_language='ru'
									translated_language='pl'
								/>
							}/>
							{/* Rzeczowniki nieodmienne */}
							<Route path="/wsip/rozdział-2/rzeczowniki-nieodmienne" render={(props) =>
								<AppPage
									{...props}
									words={b2_e2_words2}
									base_language='ru'
									translated_language='pl'
								/>
							}/>
							{/* Określanie czasu */}
							<Route path="/wsip/rozdział-2/określanie-czasu" render={(props) =>
								<AppPage
									{...props}
									words={b2_e2_words3}
									base_language='ru'
									translated_language='pl'
								/>
							}/>
							{/* Sztuka */}
							<Route path="/wsip/rozdział-2/sztuka" render={(props) =>
								<AppPage
									{...props}
									words={b2_e2_words4}
									base_language='ru'
									translated_language='pl'
								/>
							}/>
							{/* Kolej */}
							<Route path="/wsip/rozdział-2/kolej" render={(props) =>
								<AppPage
									{...props}
									words={b2_e2_words5}
									base_language='ru'
									translated_language='pl'
								/>
							}/>
							{/* Kolory */}
							<Route path="/wsip/rozdział-2/kolory" render={(props) =>
								<AppPage
									{...props}
									words={b2_e2_words6}
									base_language='ru'
									translated_language='pl'
								/>
							}/>
							{/* Przyimki */}
							<Route path="/wsip/rozdział-2/przyimki" render={(props) =>
								<AppPage
									{...props}
									words={b2_e2_words7}
									base_language='ru'
									translated_language='pl'
								/>
							}/>
							{/* Przymiotniki */}
							<Route path="/wsip/rozdział-2/przymiotniki" render={(props) =>
								<AppPage
									{...props}
									words={b2_e2_words8}
									base_language='ru'
									translated_language='pl'
								/>
							}/>
							{/* Czasowniki */}
							<Route path="/wsip/rozdział-2/czasowniki" render={(props) =>
								<WorkPage
									{...props}
									title="Prace trwają"
									image={working}
								/>
							}/>
							{/* Przysłówki */}
							<Route path="/wsip/rozdział-2/przysłówki" render={(props) =>
								<WorkPage
									{...props}
									title="Prace trwają"
									image={working}
								/>
							}/>
							{/* Liczebniki główne */}
							<Route path="/wsip/rozdział-2/liczebniki-główne" render={(props) =>
								<WorkPage
									{...props}
									title="Prace trwają"
									image={working}
								/>
							}/>
							{/* Zwroty i wyrażenia */}
							<Route path="/wsip/rozdział-2/zwroty-i-wyrażenia" render={(props) =>
								<WorkPage
									{...props}
									title="Prace trwają"
									image={working}
								/>
							}/>
							
								{/* Test */}
								<Route path="/wsip/rozdział-2/test" render={(props) =>
									<AppPage
										{...props}
										words={[].concat(b2_e2_words1, b2_e2_words2, b2_e2_words3, b2_e2_words4, b2_e2_words5, b2_e2_words6, b2_e2_words7, b2_e2_words8)}
										base_language='ru'
										translated_language='pl'
									/>
								}/>
						{/* Rozdział 3 - Wśród przyjaciół */}
							{/* Rzeczowniki */}
							<Route path="/wsip/rozdział-3/rzeczowniki" render={(props) =>
								<WorkPage
									{...props}
									title="Prace trwają"
									image={working}
								/>
							}/>
							{/* Rodzaje budynków mieszkalnych */}
							<Route path="/wsip/rozdział-3/rodzaje-budynków-mieszkalnych" render={(props) =>
								<WorkPage
									{...props}
									title="Prace trwają"
									image={working}
								/>
							}/>
							{/* Rodzaje pomieszczeń */}
							<Route path="/wsip/rozdział-3/rodzaje-pomieszczeń" render={(props) =>
								<WorkPage
									{...props}
									title="Prace trwają"
									image={working}
								/>
							}/>
							{/* Umeblowanie */}
							<Route path="/wsip/rozdział-3/umeblowanie" render={(props) =>
								<WorkPage
									{...props}
									title="Prace trwają"
									image={working}
								/>
							}/>
							{/* Wygląd zewnętrzny człowieka */}
							<Route path="/wsip/rozdział-3/wygląd-zewnętrzny-człowieka" render={(props) =>
								<WorkPage
									{...props}
									title="Prace trwają"
									image={working}
								/>
							}/>
							{/* Cechy charakteru */}
							<Route path="/wsip/rozdział-3/cechy-charakteru" render={(props) =>
								<WorkPage
									{...props}
									title="Prace trwają"
									image={working}
								/>
							}/>
							{/* Przymiotniki */}
							<Route path="/wsip/rozdział-3/przymiotniki" render={(props) =>
								<WorkPage
									{...props}
									title="Prace trwają"
									image={working}
								/>
							}/>
							{/* Czasowniki */}
							<Route path="/wsip/rozdział-3/czasowniki" render={(props) =>
								<WorkPage
									{...props}
									title="Prace trwają"
									image={working}
								/>
							}/>
							{/* Określenia położenia */}
							<Route path="/wsip/rozdział-3/określenia-położenia" render={(props) =>
								<WorkPage
									{...props}
									title="Prace trwają"
									image={working}
								/>
							}/>
							{/* Zwroty i wyrażenia */}
							<Route path="/wsip/rozdział-3/zwroty-i-wyrażenia" render={(props) =>
								<WorkPage
									{...props}
									title="Prace trwają"
									image={working}
								/>
							}/>
								{/* Test */}
								<Route path="/wsip/rozdział-3/test" render={(props) =>
									<WorkPage
										{...props}
										title="Prace trwają"
										image={working}
									/>
								}/>
					{/* OXFORD */}
					<Route path="/oxford" render={(props) =>
						<WorkPage
							{...props}
							title="Prace trwają"
							image={working}
						/>
					}/>
					{/* ZNAKI DROGOWE */}
					<Route path="/znaki-drogowe" render={(props) =>
						<WorkPage
							{...props}
							title="Ciągle myślę"
							image={thinking}
						/>
					}/>
					{/* CZASOWNIKI NIEREGULARNE */}
					<Route path="/czasowniki-nieregularne" render={(props) =>
						<WorkPage
							{...props}
							title="Ciągle myślę"
							image={thinking}
						/>
					}/>

				<Route path="/test" render={(props) =>
					<AppPage
						{...props}
						words={testWords}
						base_language="en"
						translated_language="pl"
					/>
				}/>

				<Route path="/en" render={(props) =>
					<IrregularAppPage
						{...props}
						words={[].concat(b3_i1, b3_i2)}
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
