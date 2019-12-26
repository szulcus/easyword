// BASIC
import React, { Component } from 'react'
import styled, {css} from 'styled-components'
import LoginButton, {Content} from './LoginButton'
// ICONS
import logo from '../../Images/logo.png'

const LogInComponent = styled(LoginButton)`
	background-color: var(--color-dark);
	box-shadow: 0 6px var(--color-decorative);
	grid-column: 1/3;
	:hover {
		background-color: var(--color-dark);
		box-shadow: 0 3px gold;
	}
	${props =>
			props.hide &&
			css`
				display: none;
	`};
`
const Img = styled.img`
	height: 20px;
`

class LogIn extends Component {
	render() {
		return (
			<LogInComponent hide={this.props.hide} onClick={this.props.onClick}>
				<Content>Zaloguj się</Content>
				<Img src={logo} alt="" />
			</LogInComponent>
		);
	}
}

export default LogIn