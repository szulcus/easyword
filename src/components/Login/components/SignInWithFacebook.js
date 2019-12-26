// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
import LoginButton, {Content} from './LoginButton'
// ICONS
import { FaFacebookF } from 'react-icons/fa'

const SignInWithFacebookComponent = styled(LoginButton)`
	background-color: #3b5998;
	:hover {
		background-color: #2a4887;
	}
`

class SignInWithFacebook extends Component {
	render() {
		return (
			<SignInWithFacebookComponent onClick={this.props.onClick} icon={<FaFacebookF/>}>
				<Content>Zaloguj się</Content>
				<FaFacebookF />
			</SignInWithFacebookComponent>
		);
	}
}

export default SignInWithFacebook