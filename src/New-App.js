// BASIC
import React, {Component} from 'react';
import { HashRouter as Router, Switch, Route} from 'react-router-dom';
// PAGES
import MainPage from './pages/index'
import AppPage from './components/App/App'
import WorkPage from './components/Work/Work'
import NotFoundPage from './pages/404'
// STYLED
import GlobalStyles from './components/Styled/Global/global';
// FILES
import working from './images/working.png'
import thinking from './images/thinking.png'

class App extends Component {
	render() {
	return (
		<Router>
		<GlobalStyles/>
			<Switch>
				<Route path="/" exact component={MainPage}/>
				{/* <Route path="/work" component={WorkPage}/> */}
				<Route path="/working" render={(props) =>
					<WorkPage
						{...props}
						title="Prace trwają"
						image={working}
					/>
				}/>
				<Route path="/thinking" render={(props) =>
					<WorkPage
						{...props}
						title="Ciągle myślę"
						image={thinking}
					/>
				}/>
				<Route path="/app" render={(props) =>
					<AppPage
						{...props}
						cathegory={this.props.cathegory}
						word={this.props.word}
						translation={this.props.translation}
						picture={this.props.picture}
						language={this.props.language}
					/>
				}/>
				<Route component={NotFoundPage}/>
			</Switch>
		</Router>
	);
	}
}

export default App;
