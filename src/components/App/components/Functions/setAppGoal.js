const setAppGoal = (appLevel) => {
	if (appLevel === 1) {
		this.setState({goal: 10});
	}
	else if (appLevel === 2) {
		this.setState({goal: 30});
	}
	else if (appLevel === 3) {
		this.setState({goal: 60});
	}
	else if (appLevel === 4) {
		this.setState({goal: 100});
	}
	else if (appLevel === 5) {
		this.setState({goal: 150});
	}
	else if (appLevel === 6) {
		this.setState({goal: 210});
	}
	else if (appLevel === 7) {
		this.setState({goal: 280});
	}
	else if (appLevel === 8) {
		this.setState({goal: 460});
	}
	else if (appLevel === 9) {
		this.setState({goal: 550});
	}
	else if (appLevel === 10) {
		this.setState({goal: 650});
	}
}

export default setAppGoal