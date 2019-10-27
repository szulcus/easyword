// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
// STYLES
import Global from '../Styles/Global'
import { Wrapper } from '../Styles/Components'

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
				<Wrapper center onClick={this.handleClick}>
					<Number>{this.state.counter}</Number>
				</Wrapper>
			</>
		);
	}
}

export default Leaves