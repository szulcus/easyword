// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
// ICONS
import {FaEye} from 'react-icons/fa'

const AppNavigationElement = styled.div`
	
`

// const AppNavigationButton = styled.button`
// 	width: 110px;
// 	font-weight: bold;
// 	background: var(--color-secondary);
// 	padding: 7px;
// 	margin: 0 5px;
// 	margin-bottom: 5px;
// 	border-radius: 20px;
// 	outline: none;
// 	color: lightgray;
// 	transition: opacity 0.1s ease-in;
// 	font-family: 'Ubuntu', sans-serif;
// 	text-transform: uppercase;
// 	@media (max-height: 300px) {
// 		display: none;
// 	}
// `
const CheckIcon = styled(FaEye)`
	font-size: 30px;
	color: var(--color-main);
	margin-bottom: 10px;
	:hover {
		cursor: pointer;
	}
`

class AppNavigation extends Component {

	render() {
		return (
			<AppNavigationElement>
				<CheckIcon onClick={this.props.check} />
				{/* <AppNavigationButton onClick={this.props.change}>Następny</AppNavigationButton> */}
			</AppNavigationElement>
		);
	}
}

export default AppNavigation