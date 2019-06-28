// BASIC
import React, {Component} from 'react';
import { HashRouter as Router, Switch, Route} from 'react-router-dom';
// PAGES
import MainPage from './pages/index'
import AppPage from './components/App/App'

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
				<Route path="/app" render={(props) => <AppPage {...props} cathegory={this.props.cathegory} word={this.props.word} />}/>
				<Route component={NotFoundPage}/>
			</Switch>
		</Router>
	);
	}
}

export default App;
