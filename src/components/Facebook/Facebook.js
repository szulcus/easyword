// BASIC
import React, { Component } from 'react'
import styled, { css } from 'styled-components'
	// LOGIN
	import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
	import { GoogleLogin } from 'react-google-login';
// STYLE
import Global from '../Styles/Global'
import { Wrapper } from '../Styles/Components'
// ICONS
import { FaFacebookF, FaGoogle } from 'react-icons/fa'
// FILES
import good from '../Images/good.png'
import hello from '../Images/hello.png'
import logo from '../Images/logo.png'

const LoginElement = styled.div`
	color: var(--color-highlighted);
	width: 100vw;
`

const LoginTitle = styled.header`
	font-size: 35px;
	font-weight: bold;
	text-align: center;
	margin: 30px 0;
	@media(min-width: 720px) {
		font-size: 50px;
	}
	@media(max-height: 600px) {
		margin: 15px 0 0 0;
		font-size: 35px;
	}
	@media(max-height: 450px) {
		margin: 30px 0;
	}
`

const LoginImage = styled.img`
	display: block;
	height: 50vh;
	max-height: 500px;
	max-height: 90vw;

	max-width: 500px;
	max-width: 90vw;
	margin: 0 auto;
	@media(max-height: 550px) {
		height: calc(100px + 2hmin);
	}
	@media(max-height: 450px) {
		display: none;
	}
`

// const LoginDescription = styled.p`
// 	font-size: 20px;
// 	text-align: center;
// 	margin: 30px;
// 	@media(max-height: 600px) {
// 		margin: 20px;
// 	}
// `

const Choise = styled.div`
	display: grid;
	justify-content: center;
	grid-template-columns: 250px 250px;
	grid-template-rows: auto auto;
	${props =>
		props.hide &&
		css`
			display: none;
	`};
`

const LoginButton = styled.button`
	display: inline-block;
	margin: 10px;
	padding: 20px;
	font-size: 20px;
	font-family: 'Ubuntu', sans-serif;
	cursor: pointer;
	text-align: center;
	outline: none;
	color: #fff;
	border: none;
	border-radius: 20px;
	box-shadow: 0 6px #999;
	transition: all 0.2s ease;
	${props =>
		props.ew &&
		css`
			/* border: 2px solid gold; */
			background-color: var(--color-dark);
			/* box-shadow: 0 6px #aa8200; */
			box-shadow: 0 6px gold;
	`};
	${props =>
		props.fb &&
		css`
			background-color: #3b5998;
	`};
	${props =>
		props.gplus &&
		css`
			background-color: #dd4b39;
	`};
	:hover {
		box-shadow: 0 3px #666;
		transform: translateY(4px);
		${props =>
			props.ew &&
			css`
				background-color: var(--color-dark);
				box-shadow: 0 3px gold;
		`};
		${props =>
			props.fb &&
			css`
				background-color: #2a4887;
		`};
		${props =>
			props.gplus &&
			css`
				background-color: #cc3a28;
		`};
	}
`

const Registration = styled(LoginButton)`
	grid-column: 1/3;
`

const Content = styled.span`
	margin-right: 10px;
`

const Logo = styled.img`
	height: 20px;
`

const Data = styled.div`
	display: none;
	${props =>
		props.preview &&
		css`
			display: flex;
			flex-direction: column;
	`}
`
const Avatar = styled.img`
	width: 50px;
	height: 50px;
	margin: 10px;
	border-radius: 100%;
`

const Email = styled.p``

const DefaultData = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 50px;
`

const AppData = styled.div`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
`

const UserPoints = styled.p``

const Points = styled.span`
	color: var(--color-decorative);
	font-weight: bold;
`

// 306976829495-7ka62q36tt4s6lsodu077r9kri63scnn.apps.googleusercontent.com
// tajny
// nC3ZI3woaPxK8vTAACJdPntA
class Login extends Component {
	state = {
		isLoggedIn: false,
		userId: '',
		name: '',
		email: '',
		picture: good,
		avatar: '',
		title: 'Rejestracja',
		description: 'Jak chcesz się zarejestrować?',
		userPoints: 0
	}

	componentClicked = () => {
		console.log('clicked');
	}

	responseFacebook = (response) => {
		console.log(response)
		this.setState({
			isLoggedIn: true,
			userID: response.userID,
			name: response.name,
			email: response.email,
			avatar: response.picture.data.url,
			picture: hello,
			title: `Cześć ${response.name}!`,
			description: 'Oto twoje dane:'
		});
	}

	responseGoogle = (response) => {
		console.log(response)
	}

	render() {
		let fbContent;
		let googleButton;

		if (this.state.isLoggedIn) {
			// this.setState({

			// })
		}
		else {
			fbContent = (
				<FacebookLogin
					appId="1321699797994971"
					autoLoad={true}
					fields="name,email,picture"
					callback={this.responseFacebook}
					render={renderProps => (
						<LoginButton fb onClick={renderProps.onClick}>
							<Content>Zaloguj się</Content>
							<FaFacebookF />
						</LoginButton>
					)}
				/>
			)
			googleButton = (
				<GoogleLogin
					clientId="306976829495-7ka62q36tt4s6lsodu077r9kri63scnn.apps.googleusercontent.com"
					render={renderProps => (
						<LoginButton gplus onClick={renderProps.onClick} disabled={renderProps.disabled}>
							<Content>Zaloguj się</Content>
							<FaGoogle />
						</LoginButton>
					)}
					// buttonText="Login"
					onSuccess={this.responseGoogle}
					onFailure={this.responseGoogle}
					cookiePolicy={'single_host_origin'}
				/>

			)
		}

		return (
			<>
				<Global />
				<Wrapper onClick={this.exit}>
					<LoginElement>
						<LoginTitle>{this.state.title}</LoginTitle>
						<LoginImage hide={this.state.login} src={this.state.picture} title="Przejdź do biblioteki" alt=""/>
						{/* <LoginDescription>{this.state.description}</LoginDescription> */}
						<Choise hide={this.state.isLoggedIn}>
							<Registration ew>
								<Content>Zarejestruj się</Content>
								<Logo src={logo} alt="logo" />
							</Registration>
							{fbContent}
							{googleButton}
						</Choise>
						<Data preview={this.state.isLoggedIn}>
							<DefaultData>
								<Avatar src={this.state.avatar} alt={this.state.name} />
								<Email>
									{this.state.email}
								</Email>
							</DefaultData>
							<AppData>
								<UserPoints>
									Ukończone gry: <Points>{this.state.userPoints}</Points>
								</UserPoints>
								<UserPoints>
									Zdobyte punkty: <Points>{this.state.userPoints}</Points>
								</UserPoints>
								<UserPoints>
									Poziom: <Points>początkujący</Points>
								</UserPoints>
							</AppData>
						</Data>
					</LoginElement>
				</Wrapper>
			</>
		);
	}
}

export default Login