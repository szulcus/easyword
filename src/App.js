// BASIC
import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// PAGES
import MainPage from './pages/index'
import Page from './pages/Page'
import LinkedPage from './pages/Link'

import MacmillanList from './pages/books/Macmillan/macmillan'
import Unit1 from './pages/books/Macmillan/units/unit1'
import OxfordList from './pages/books/Oxford/oxford'

import WSiPList from './pages/books/WSiP/wsip'
import WSiP_Unit1 from './pages/books/WSiP/units/unit1'
import WSiP_Unit1_1 from './pages/books/WSiP/units/unit1-1'
import WSiP_Unit2 from './pages/books/WSiP/units/unit2'

import NotFoundPage from './pages/404'
// STYLED
import GlobalStyles from './components/Styled/Global/global';

class App extends Component {
	render() {
	return (
		<Router>
		<GlobalStyles/>
			<Switch>
				<Route path="/easy-word" exact component={MainPage}/>
				<Route path="/easy-word/linked-page" component={LinkedPage}/>
				<Route path="/easy-word/macmillan" exact component={MacmillanList}/>

				<Route path="/easy-word/macmillan/test-człowiek" component={Unit1}/>
				<Route path="/easy-word/macmillan/test-dom" component={Unit1}/>
				<Route path="/easy-word/macmillan/wybór-gry" component={Page}/>

				<Route path="/easy-word/oxford" exact component={OxfordList}/>

				<Route path="/easy-word/wsip" exact component={WSiPList}/>
				<Route path="/easy-word/wsip/rzeczowniki-wybór-gry/pisanie" component={WSiP_Unit1_1}/>
				<Route path="/easy-word/wsip/test-rejsy" exact component={WSiP_Unit1}/>
				<Route path="/easy-word/wsip/test-w-stolicy-polski" exact component={WSiP_Unit2}/>

				<Route component={NotFoundPage}/>
			</Switch>
		</Router>
	);
	}
}

export default App;
