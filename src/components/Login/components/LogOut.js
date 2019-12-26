// BASIC
import React, { Component } from 'react'
import styled, {css} from 'styled-components'
import LoginButton, {Content} from './LoginButton'
// ICONS
import { FiLogOut } from 'react-icons/fi'

const LogOutComponent = styled(LoginButton)`
	display: none;
	background-color: black;
	${props =>
			props.preview &&
			css`
				display: block;
	`};
`

class LogOut extends Component {
	render() {
		return (
			<LogOutComponent preview={this.props.preview} onClick={this.props.onClick}>
				<Content>Wyloguj Się</Content>
				<FiLogOut/>
			</LogOutComponent>
		);
	}
}

export default LogOut