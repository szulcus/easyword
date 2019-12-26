// BASIC
import React, { Component } from 'react'
import styled, {css} from 'styled-components'
import LoginButton from './LoginButton'
// ICONS
import { FaGooglePlusG } from 'react-icons/fa'

const SignInWithGoogleComponent = styled(LoginButton)`
	background-color: #dd4b39;
	:hover {
		background-color: #cc3a28;
	}
`
const Content = styled.span`
	margin-right: 10px;
`

class SignInWithGoogle extends Component {
	render() {
		return (
				<SignInWithGoogleComponent onClick={this.props.onClick}>
					<Content>Zaloguj się</Content>
					<FaGooglePlusG/>
				</SignInWithGoogleComponent>
		);
	}
}

export default SignInWithGoogle