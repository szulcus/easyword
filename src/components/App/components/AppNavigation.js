// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'

const AppNavigationElement = styled.div`
	
`

const AppNavigationButton = styled.button`
	width: 110px;
	font-weight: bold;
	background: var(--color-secondary);
	padding: 7px;
	margin: 0 5px;
	margin-bottom: 5px;
	border-radius: 20px;
	outline: none;
	color: lightgray;
	transition: opacity 0.1s ease-in;
	font-family: 'Ubuntu', sans-serif;
	text-transform: uppercase;
`

class AppNavigation extends Component {

	render() {
		return (
			<AppNavigationElement>
				<AppNavigationButton onClick={this.props.onClick}>Sprawdź</AppNavigationButton>
				<AppNavigationButton>Następny</AppNavigationButton>
			</AppNavigationElement>
		);
	}
}

export default AppNavigation