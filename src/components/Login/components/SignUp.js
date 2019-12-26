// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
import LoginButton from './LoginButton'
// ICONS
import {FaUserAlt} from 'react-icons/fa'

const SignUpComponent = styled(LoginButton)`
	background-color: var(--color-dark);
	grid-column: 1/3;
	:hover {
		background-color: var(--color-dark);
	}
`
const Img = styled.img`
	height: 20px;
`

const Content = styled.span`
	margin-right: 10px;
`

class SignUp extends Component {
	render() {
		return (
			<SignUpComponent onClick={this.props.onClick}>
				<Content>Zarejestruj się</Content>
				<FaUserAlt />
			</SignUpComponent>
		);
	}
}

export default SignUp