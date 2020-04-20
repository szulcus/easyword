// BASIC
import React, {Component} from 'react';
import styled, {css} from 'styled-components'
import {au, auth} from '../../Config/firebase'
// ICONS
import {FaFacebookF, FaGoogle} from 'react-icons/fa'

const LoginElement = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	color: var(--color-primary);
	width: 100vw;
	padding: 20px;
`
const LoginTitle = styled.header`
	font-size: 40px;
	font-weight: bold;
	text-align: center;
	margin: 30px 0;
	@media(min-width: 720px) {
		font-size: 50px;
	}
	@media(max-height: 600px) {
		margin: 0;
		font-size: 40px;
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
	.input:focus + .label .content-label,
	.input:valid + .label .content-label {
		transform: translateY(-150%);
		font-size: 15px;
	}
`
const Input = styled.input`
	display: block;
	/* margin: 20px; */
	padding: 5px;
	padding-top: 20px;
	color: var(--color-light);
	font-size: 20px;
	background-color: transparent;
	border: none;
	outline: none;
`
const Label = styled.label`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	pointer-events: none;
	border-bottom: 1px solid var(--color-main);
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
	width: 100%;
	transition: all 0.2s ease;
	background-color: var(--color-bg);
`
const Choise = styled.div`
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 20px;
	width: 90vw;
	max-width: 700px;
	margin-top: 30px;
	@media(max-width: 600px) {
		grid-template-columns: repeat(1, 1fr);
		max-width: 250px;
	}
`
const UserContent = styled.ul`
	display: none;
	text-align: center;
	li {
		list-style: none;
	}
	${props =>
			props.preview &&
			css`
				display: block;
	`};
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
		error: null
	}
	componentDidMount() {
		au.onAuthStateChanged(user => {
			if(user) {
				this.props.history.push(`/users/${user.uid}`);
			}
		})
	}
	signInWithGoogle = () => {
		const provider = new auth.GoogleAuthProvider();

		au.signInWithRedirect(provider).then(result => {
			console.log(result.user);
		}).catch(error => {
			console.log(error);
		})
	}
	signInWithFacebook = () => {
		const provider = new auth.FacebookAuthProvider();

		au.signInWithPopup(provider).then(result => {
			console.log(result.user);
		}).catch(error => {
			console.log(error);
		})
	}
	signUp = () => {
		const txtEmail = document.getElementById('txtEmail');
		const txtPassword = document.getElementById('txtPassword');
		const email = txtEmail.value;
		const pass = txtPassword.value;
		au.createUserWithEmailAndPassword(email, pass).then(cred => {
			console.log(cred.user.uid);
		}).catch(err => {
				console.log(err.message);
		})
	}
	render() {
		return (
			<>
					<LoginElement>
						<LoginTitle>Zarejestruj się</LoginTitle>
						<UserContent preview={this.state.isLoggedIn}>
							{this.state.userContent}
						</UserContent>
						<Form id="userForm" hide={this.state.isLoggedIn}>
							<Field>
								<Input className="input" id="txtEmail" type="text" name="email" autoComplete="off" required />
								<Label className="label" htmlFor="email">
									<ContentLabel className="content-label">E-mail</ContentLabel>
								</Label>
							</Field>
							<Field>
								<Input className="input" id="txtPassword" type="password" name="password" autoComplete="off" required />
								<Label className="label" htmlFor="password">
									<ContentLabel className="content-label">Hasło</ContentLabel>
								</Label>
							</Field>
							{/* <Field>
								<Input className="input" id="txtBiography" type="text" name="biography" autoComplete="off" required />
								<Label className="label" htmlFor="biography">
									<ContentLabel className="content-label">Biogram / Opis</ContentLabel>
								</Label>
							</Field>
							<Field>
								<Input className="input" id="txtNick" type="text" name="nick" autoComplete="off" required />
								<Label className="label" htmlFor="nick">
									<ContentLabel className="content-label">Nick / Imię</ContentLabel>
								</Label>
							</Field> */}
						</Form>
						<Choise>
							<LogIn color="fb" onClick={this.signInWithFacebook}>
								<Icon><FaFacebookF /></Icon>
								Zaloguj się
							</LogIn>
							<LogIn color="gplus" onClick={this.signInWithGoogle}>
								<Icon><FaGoogle /></Icon>
								Zaloguj się
							</LogIn>
							<LogIn color="decorative" onClick={this.signUp}>
								Zarejestruj się
							</LogIn>
						</Choise>
					</LoginElement>
			</>
		);
	}
}

export default App;
