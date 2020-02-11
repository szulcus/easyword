// BASIC
import React, {Component} from 'react';
import { HashRouter as Router, Switch, Route} from 'react-router-dom';
// PAGES
import AppPage from './Components/App/WritingApp'
import IrregularAppPage from './Components/App/IrregularApp'
import WorkPage from './Components/Work/Work'
import IndexPage from './pages/index'

import Books from './pages/Books'

import Facebook from './Components/Facebook/Facebook'

import Login from './Components/Login/LoginApp'
import Registration from './Components/Login/Registration'
import UserProfile from './Components/Login/UserProfile'

import Leaves from './Components/_Leaves/Leaves'

import Editor from './Components/_Editor/Editor'
import NotFoundPage from './pages/404/404'

import Automatic from './Components/Automatic/Auto'
import TinderApp from './Components/App/TinderApp'
import Stats from './Components/Stats'
// import OxfordList from './pages/books/3_Oxford/oxford'
import RoadSignsList from './pages/components/List/RoadSignsList'
import List from './pages/components/List/List'

// STYLED
import Global from './Components/Styles/Global';
// FILES
		// WORDS
			// WSiP
				// Rozdział 1
				
				// Rozdział 2
				
			// Oxford
				import b3_i1 from './Components/Words/3_Oxford/Irregular_Verbs/1_FromBook'
				import b3_i2 from './Components/Words/3_Oxford/Irregular_Verbs/2_FromApp'
			// --------------------------------- //
			// Znaki drogowe
				// Rozdział 1
				import b4_e1_words1A from './Components/Words/4_Znaki_drogowe/1_A_ZnakiOstrzegawcze'
				import b4_e1_words2B from './Components/Words/4_Znaki_drogowe/2_B_ZnakiZakazu'
				import b4_e1_words3C from './Components/Words/4_Znaki_drogowe/3_C_ZnakiNakazu'
				import b4_e1_words4D from './Components/Words/4_Znaki_drogowe/4_D_ZnakiInformacyjne'
		// IMAGES
		import working from './Components/Images/working.png'
		import thinking from './Components/Images/thinking.png'

		import testWords from './Components/Words/_test'
import WordList from './Components/WordList';
import b1_e1_words1 from './Components/Words/1_Macmillan/Unit1/1_PersonalData'

class App extends Component {
	render() {
	return (
		<Router>
		<Global/>
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
				<Route path="/" exact component={IndexPage}/>
					{/* ZNAKI DROGOWE */}
					<Route path="/znaki-drogowe" exact component={RoadSignsList}/>
						{/* 1 - Znaki drogowe pionowe */}
							{/* Znaki ostrzegawcze */}
							<Route path="/znaki-drogowe/rozdział-1/znaki-ostrzegawcze" render={(props) =>
								<AppPage
									{...props}
									words={b4_e1_words1A}
									base_language='en'
									translated_language='pl'
								/>
							}/>
							{/* Znaki zakazu */}
							<Route path="/znaki-drogowe/rozdział-1/znaki-zakazu" render={(props) =>
								<AppPage
									{...props}
									words={b4_e1_words2B}
									base_language='en'
									translated_language='pl'
								/>
							}/>
							{/* Znaki nakazu */}
							<Route path="/znaki-drogowe/rozdział-1/znaki-nakazu" render={(props) =>
								<AppPage
									{...props}
									words={b4_e1_words3C}
									base_language='en'
									translated_language='pl'
								/>
							}/>
							{/* Znaki informacyjne */}
							<Route path="/znaki-drogowe/rozdział-1/znaki-informacyjne" render={(props) =>
								<AppPage
									{...props}
									words={b4_e1_words4D}
									base_language='en'
									translated_language='pl'
								/>
							}/>
							{/* Znaki kierunku i miejscowości */}
							<Route path="/znaki-drogowe/rozdział-1/znaki-kierunku-i-miejscowości" render={(props) =>
								<WorkPage
									{...props}
									title="Prace trwają"
									image={working}
								/>
							}/>
							{/* Znaki uzupełniające */}
							<Route path="/znaki-drogowe/rozdział-1/znaki-uzupełniające" render={(props) =>
								<WorkPage
									{...props}
									title="Prace trwają"
									image={working}
								/>
							}/>
							{/* Tabliczki do znaków drogowych */}
							<Route path="/znaki-drogowe/rozdział-1/tabliczki-do-znaków-drogowych" render={(props) =>
								<WorkPage
									{...props}
									title="Prace trwają"
									image={working}
								/>
							}/>
							{/* Znaki dodatkowe */}
							<Route path="/znaki-drogowe/rozdział-1/znaki-dodatkowe" render={(props) =>
								<WorkPage
									{...props}
									title="Prace trwają"
									image={working}
								/>
							}/>
								{/* Test */}
								<Route path="/znaki-drogowe/rozdział-1/test" render={(props) =>
									<WorkPage
										{...props}
										title="Prace trwają"
										image={working}
									/>
								}/>
						{/* 2 - Znaki drogowe poziome */}
								{/* Test */}
								<Route path="/znaki-drogowe/rozdział-2/test" render={(props) =>
									<WorkPage
										{...props}
										title="Prace trwają"
										image={working}
									/>
								}/>
						{/* 3 - Sygnały świetlne */}
							{/* Sygnały świetlne dla kierujących i pieszych */}
							<Route path="/znaki-drogowe/rozdział-3/sygnały-świetlne-dla-kierujących-i-pieszych" render={(props) =>
								<WorkPage
									{...props}
									title="Prace trwają"
									image={working}
								/>
							}/>
							{/* Sygnały świetlne dla kierujących pojazdami wykonującymi odpłatny przewóz osób na regularnych liniach */}
							<Route path="/znaki-drogowe/rozdział-3/znaki-drogowe/rozdział-4/sygnały-świetlne-dla-kierujących-pojazdami-wykonującymi-odpłatny-przewóz-osób-na-regularnych-liniach" render={(props) =>
								<WorkPage
									{...props}
									title="Prace trwają"
									image={working}
								/>
							}/>
								{/* Test */}
								<Route path="/znaki-drogowe/rozdział-3/test" render={(props) =>
									<WorkPage
										{...props}
										title="Prace trwają"
										image={working}
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

				<Route path="/fb" exact component={Facebook}/>
				<Route path="/login" exact component={Login}/>
				<Route path="/rejestracja" exact component={Registration}/>
				<Route path="/users/:id" exact component={UserProfile}/>
				<Route path="/leaves" exact component={Leaves}/>

				<Route path="/editor" exact component={Editor}/>
				<Route path="/auto" exact component={Automatic}/>
				<Route path="/tinder" exact component={TinderApp}/>
				<Route path="/ranking" exact component={Stats}/>
				<Route path="/not-found-page" exact component={NotFoundPage}/>
				<Route path="/:bookName" exact component={List}/>
				<Route path="/:bookName/rozdzial-:unitNumber/:unitName" exact render={(props) =>
					<AppPage
						{...props}
						words={b1_e1_words1}
						info={{
							book: 'book_01',
							unit: 'unit_01',
							part: 'part_04'
						}}
						base_language='en'
						translated_language='pl'
					/>
				} />
				<Route path="/:bookName/spis-slowek/rozdzial-:unitNumber/:unitName" exact component={WordList}/>

				<Books />
				{/* <Route component={NotFoundPage} /> */}
			</Switch>
		</Router>
	);
	}
}

export default App;
