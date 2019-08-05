// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
// STYLES
import Global from '../Styles/Global'

const LeavesElement = styled.div`
	display: flex;

	width: 100%;
	height: 100%;
	justify-content: center;
`

const Number = styled.div`
	font-size: 150px;
	font-weight: bold;
`

class Leaves extends Component {
	state = {
		counter: 0
	}

	handleClick = () => {
		this.setState({counter: this.state.counter + 10})
	}

	render() {
		return (
			<>
				<Global />
				<LeavesElement onClick={this.handleClick}>
					<Number>{this.state.counter}</Number>
				</LeavesElement>
			</>
		);
	}
}

export default Leaves