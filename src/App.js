// BASIC
import React, {Component} from 'react';
import { HashRouter as Router, Switch, Route} from 'react-router-dom';
// PAGES
import AppPage from './components/App/WritingApp'
import IrregularAppPage from './components/App/IrregularApp'
import WorkPage from './components/Work/Work'

import IndexPage from './pages/index'

import MacmillanBook from './pages/Books/1_Macmillan'
import WSiPBook from './pages/Books/2_WSiP'

import Books from './pages/Books'

import Facebook from './components/Facebook/Facebook'

import Leaves from './components/_Leaves/Leaves'

import Editor from './components/_Editor/Editor'

import Automatic from './components/Automatic/Auto'
// import OxfordList from './pages/books/3_Oxford/oxford'
import RoadSignsList from './pages/components/List/RoadSignsList'

import NotFoundPage from './pages/404/404'
// STYLED
import GlobalStyles from './components/Styled/Global/global';
// FILES
		// WORDS
			// WSiP
				// Rozdział 1
				
				// Rozdział 2
				
			// Oxford
				import b3_i1 from './components/Words/3_Oxford/Irregular_Verbs/1_FromBook'
				import b3_i2 from './components/Words/3_Oxford/Irregular_Verbs/2_FromApp'
			// --------------------------------- //
			// Znaki drogowe
				// Rozdział 1
				import b4_e1_words1A from './components/Words/4_Znaki_drogowe/1_A_ZnakiOstrzegawcze'
				import b4_e1_words2B from './components/Words/4_Znaki_drogowe/2_B_ZnakiZakazu'
				import b4_e1_words3C from './components/Words/4_Znaki_drogowe/3_C_ZnakiNakazu'
				import b4_e1_words4D from './components/Words/4_Znaki_drogowe/4_D_ZnakiInformacyjne'
				// import b4_e1_words5E from './components/Words/4_Znaki_drogowe/1_A_ZnakiOstrzegawcze'
				// import b4_e1_words6F from './components/Words/4_Znaki_drogowe/1_A_ZnakiOstrzegawcze'
				// import b4_e1_words7T from './components/Words/4_Znaki_drogowe/1_A_ZnakiOstrzegawcze'
				// import b4_e1_words8D from './components/Words/4_Znaki_drogowe/1_A_ZnakiOstrzegawcze'
				// import b4_e1_words9D from './components/Words/4_Znaki_drogowe/1_A_ZnakiOstrzegawcze'
				// Rozdział 2
				// import b4_e2_words1 from './components/Words/4_Znaki_drogowe/1_A_ZnakiOstrzegawcze'
				// import b4_e2_words2 from './components/Words/3_Oxford/Irregular_Verbs/2_FromApp'
				// Rozdział 3
				// import b4_e3_words1 from './components/Words/4_Znaki_drogowe/1_A_ZnakiOstrzegawcze'
				// import b4_e3_words2 from './components/Words/3_Oxford/Irregular_Verbs/2_FromApp'
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
				<Route path="/" exact component={IndexPage}/>
				{/* <WSiPBook /> */}
				{/* <MacmillanBook /> */}
				
						
						
					{/* OXFORD */}
					{/* <Route path="/oxford" render={(props) =>
						<WorkPage
							{...props}
							title="Ciągle myślę"
							image={thinking}
						/>
					}/> */}
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

				<Route path="/leaves" exact component={Leaves}/>

				<Route path="/editor" exact component={Editor}/>
				<Route path="/auto" exact component={Automatic}/>

				<Books />
			</Switch>
		</Router>
	);
	}
}

export default App;
