// BASIC
import React, {Component} from 'react';
import styled, {css} from 'styled-components'
import {au, auth} from '../../Config/firebase'
// STYLE
import { Wrapper } from '../Styles/Components'
// ICONS
import {FaFacebookF, FaGoogle} from 'react-icons/fa'
// // COMPONENTS
// import SignUp from './components/SignUp'
// import LogIn from './components/LogIn'
// import SignInWithFacebook from './components/SignInWithFacebook'
// import SignInWithGoogle from './components/SignInWithGoogle'

const LoginElement = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	color: var(--color-primary);
	width: 100vw;
	/* min-width: 540px; */
	/* min-height: 720px; */
	padding: 20px;
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
const Form = styled.form`
	display: block;
	${props =>
			props.hide &&
			css`
				display: none;
	`};
`
const Field = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	margin: 30px;
	/* ::after {
		position: absolute;
		top: 0;
		left: 0;
		background-color: black;
	} */
	.input:focus + .label .content-label,
	.input:valid + .label .content-label {
		transform: translateY(-150%);
		font-size: 15px;
	}
`
const Input = styled.input`
	display: block;
	padding: 5px;
	padding-top: 20px;
	color: var(--color-light);
	font-size: 20px;
	background-color: transparent;
	border: none;
	outline: none;
	/* ::placeholder {
		color: green;
	} */
`
const Label = styled.label`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	pointer-events: none;
	border-bottom: 1.5px solid var(--color-main);
	::after {
		content: '';
		position: absolute;
		height: 100%;
		width: 100%;
	}
	`
const ContentLabel = styled.span`
	position: absolute;
	bottom: 5px;
	left: 0;
	transition: all 0.2s ease;
	background-color: var(--color-bg);
	width: 100%;
`
const Choise = styled.div`
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 20px;
	width: 90vw;
	max-width: 500px;
	${props =>
			props.hide &&
			css`
				display: none;
	`};
	@media (max-width: 450px) {
		grid-template-columns: repeat(1, 1fr);
		max-width: 250px;
	}
`
const LogIn = styled.button`
	position: relative;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	line-height: 150%;
	min-width: 180px;
	font-size: 20px;
	padding: 10px 20px;
	background-color: transparent;
	border-radius: 20px;
	border: 2px solid ${props => `var(--color-${props.color})`};
	color: var(--color-primary);
	transition: all 0.5s ease;
	overflow: hidden;
	::before {
		content: '';
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: ${props => `var(--color-${props.color})`};
		opacity: 0.5;
		filter: blur(5px);
		transform: translateX(-250px) skewX(-15deg);
		z-index: 2;
	}
	:hover {
		cursor: pointer;
		background-color: ${props => `var(--color-${props.color})`};
		color: ${props => props.color === 'main' || props.color === 'decorative' ? 'var(--color-bg)' : 'var(--color-light)'};
		::before {
			transform: translate(250px) skewX(-15deg);
			opacity: 0.6;
			transition: all 0.7s ease;
		}
	}
	:focus {
		outline: none
	}
`
const Icon = styled.span`
	transform: translateY(3px);
`
class App extends Component {
	state = {
		isLoggedIn: false,
		isAdmin: false,
		userContent: '',
		userId: '',
		name: '',
		email: '',
		avatar: '',
		title: 'Rejestracja',
		userPoints: 0
	}
	componentDidMount() {
		au.onAuthStateChanged(user => {
			if(user) {
				this.props.history.push(`/users/${user.uid}`);
			}
			else {
				console.log('not logged in');
				this.setState({isLoggedIn: false, isAdmin: false, userEmail: ''});
			}
		})
	}
	logIn = () => {
		const txtEmail = document.getElementById('txtEmail');
		const txtPassword = document.getElementById('txtPassword');
		const email = txtEmail.value;
		const pass = txtPassword.value;
		au.signInWithEmailAndPassword(email, pass).catch(error => {
			alert(error.message);
		});
		console.log(email);
	}
	signInWithGoogle = () => {
		const provider = new auth.GoogleAuthProvider();

		au.signInWithRedirect(provider).then(result => {
			console.log(result);
		}).catch(error => {
			alert(error.message);
		})
	}
	signInWithFacebook = () => {
		const provider = new auth.FacebookAuthProvider();

		au.signInWithPopup(provider).then(result => {
			console.log(result);
		}).catch(error => {
			alert(error.message);
		})
	}
	signUp = () => {
		this.props.history.push(`/rejestracja`);
	}
	render() {
		return (
				<Wrapper scroll onClick={this.exit}>
					<LoginElement>
						<LoginTitle>
							Zaloguj się
						</LoginTitle>
						<Form id="userForm" hide={this.state.isLoggedIn}>
							<Field>
								<Input className="input" id="txtEmail" type="text" name="email" autoComplete="off" required placeholder="Wpisz e-mail" />
								<Label className="label" htmlFor="email">
									<ContentLabel className="content-label">E-mail</ContentLabel>
								</Label>
							</Field>
							<Field>
								<Input className="input" id="txtPassword" type="password" name="password" autoComplete="off" required placeholder="Wpisz hasło" />
								<Label className="label" htmlFor="password">
									<ContentLabel className="content-label">Hasło</ContentLabel>
								</Label>
							</Field>
						</Form>
						<Choise hide={this.state.isLoggedIn}>
							<LogIn color="fb" onClick={this.signInWithFacebook}>
								<Icon><FaFacebookF /></Icon>
								Zaloguj się 
							</LogIn>
							<LogIn color="gplus" onClick={this.signInWithGoogle}>
								<Icon><FaGoogle /></Icon>
								Zaloguj się
							</LogIn>
							<LogIn color="main" onClick={this.logIn}>
								Zaloguj się
							</LogIn>
							<LogIn color="decorative" onClick={this.signUp}>
								Zarejestruj się
							</LogIn>
						</Choise>
					</LoginElement>
				</Wrapper>
		);
	}
}

export default App;
