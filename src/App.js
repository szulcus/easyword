// BASIC
import React, {Component} from 'react';
import { HashRouter as Router, Switch, Route} from 'react-router-dom';
// PAGES
import AppPage from './components/App/App'

import MainPage from './pages/index'
import Page from './pages/Page'
import LinkedPage from './pages/Link'

import MacmillanList from './pages/books/Macmillan/macmillan'
import Unit1 from './pages/books/Macmillan/units/unit1'
import Unit2 from './pages/books/Macmillan/units/unit2'
import Unit3 from './pages/books/Macmillan/units/unit3'
import OxfordList from './pages/books/Oxford/oxford'

import WSiPList from './pages/books/WSiP/wsip'
import WSiP_Unit1 from './pages/books/WSiP/units/unit1'
import WSiP_Unit1_1 from './pages/books/WSiP/units/unit1-1'
import WSiP_Unit2 from './pages/books/WSiP/units/unit2'

import NotFoundPage from './pages/404'
// STYLED
import GlobalStyles from './components/Styled/Global/global';
// FILES
	// WORDS
	import b2_e1_words1 from './components/Words/2_Macmillan/Unit1/1_PersonalData'
	import b2_e1_words2 from './components/Words/2_Macmillan/Unit1/2_Apperance'
	import b2_e1_words3 from './components/Words/2_Macmillan/Unit1/3_Clothes'
	import b2_e1_words4 from './components/Words/2_Macmillan/Unit1/4_FeaturesOfCharacters'
	import b2_e1_words5 from './components/Words/2_Macmillan/Unit1/5_FeelingsAndEmotions'
	import b2_e1_words6 from './components/Words/2_Macmillan/Unit1/6_Interests'
	import b2_e1_words7 from './components/Words/2_Macmillan/Unit1/7_EthnicalProblems'
	import b2_e1_words8 from './components/Words/2_Macmillan/Unit1/8_Orther'


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
							<Route path="/macmillan/rozdział1-dane-osobowe" render={(props) =>
								<AppPage
									{...props}
									words1={b2_e1_words1}
									words2={b2_e1_words2}
									words3={b2_e1_words3}
									words4={b2_e1_words4}
									words5={b2_e1_words5}
									words6={b2_e1_words6}
									words7={b2_e1_words7}
									words8={b2_e1_words8}

									language="en"
								/>
							}/>
							{/* Wygląd zewnętrzny */}
							{/* Ubrania */}
							{/* Cechy charakteru */}
							{/* Uczucia i emocje */}
							{/* Zainteresowania */}
							{/* Problemy etyczne */}
							{/* Inne */}
								{/* Test */}
						{/* Rozdział 2 - Dom */}
							{/* Miejsce zamieszkania */}
							{/* Opis domu */}
							{/* Prace w domu i ogrodzie */}
							{/* Wynajem, kupno i sprzedaż nieruchomości */}
							{/* Inne */}
								{/* Test */}
						{/* Rozdział 3 - Szkoła */}
							{/* Przedmioty szkolne */}
							{/* Oceny i wymagania */}
							{/* Życie szkolne */}
							{/* Zajęcia pozalekcyjne */}
							{/* System oświaty */}
							{/* Inne */}
								{/* Test */}
						{/* Rozdział 4 - Praca */}
							{/* Zawody i związane z nimi czynności */}
							{/* Warunki pracy i zatrudnienia */}
							{/* Praca dorywcza */}
							{/* Rynek pracy */}
							{/* Inne */}
								{/* Test */}
						{/* Rozdział 5 - Życie rodzinne i towarzyskie */}
							{/* Etapy życia */}
							{/* Członkowie rodziny, koledzy i przyjaciele */}
							{/* Czynności życia codziennego */}
							{/* Formy spędzania czasu wolnego */}
							{/* Święta i uroczystości */}
							{/* Styl życia, konflikty i problemy */}
							{/* Inne */}
								{/* Test */}
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



				<Route path="/linked-page" component={LinkedPage}/>

				<Route path="/macmillan/test-człowiek" component={Unit1}/>
				<Route path="/macmillan/test-dom" component={Unit2}/>
				<Route path="/macmillan/test-szkoła" component={Unit3}/>
				<Route path="/macmillan/wybór-gry" component={Page}/>


				<Route path="/wsip/rzeczowniki-wybór-gry/pisanie" component={WSiP_Unit1_1}/>
				<Route path="/wsip/test-rejsy" exact component={WSiP_Unit1}/>
				<Route path="/wsip/test-w-stolicy-polski" exact component={WSiP_Unit2}/>

				<Route component={NotFoundPage}/>
			</Switch>
		</Router>
	);
	}
}

export default App;
