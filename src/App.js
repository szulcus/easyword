// BASIC
import React, {Component} from 'react';
import { HashRouter as Router, Switch, Route} from 'react-router-dom';
// PAGES
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

class App extends Component {
	render() {
	return (
		<Router>
		<GlobalStyles/>
			<Switch>
				<Route path="/" exact component={MainPage}/>
				<Route path="/linked-page" component={LinkedPage}/>
				<Route path="/macmillan" exact component={MacmillanList}/>

				<Route path="/macmillan/test-człowiek" component={Unit1}/>
				<Route path="/macmillan/test-dom" component={Unit2}/>
				<Route path="/macmillan/test-szkoła" component={Unit3}/>
				<Route path="/macmillan/wybór-gry" component={Page}/>

				<Route path="/oxford" exact component={OxfordList}/>

				<Route path="/wsip" exact component={WSiPList}/>
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
