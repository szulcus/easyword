// BASIC
import React, {Component} from 'react';
import styled, {css} from 'styled-components'
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/functions'
// STYLE
import Global from '../Styles/Global'
import { Wrapper } from '../Styles/Components'
// COMPONENTS
import SignUp from './components/SignUp'
import SignInWithFacebook from './components/SignInWithFacebook'
import SignInWithGoogle from './components/SignInWithGoogle'
import LogOut from './components/LogOut'
import points from './BlankPointsObject';

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
	.input:focus + .label .content-label,
	.input:valid + .label .content-label {
		transform: translateY(-200%);
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
	border-bottom: 1px solid var(--color-decorative);
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
`
const Choise = styled.div`
	display: grid;
	justify-content: center;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto auto;
	${props =>
			props.hide &&
			css`
				display: none;
	`};
	@media(max-width: 500px) {
		display: flex;
		align-items: center;
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
const Error = styled.p`

`
class App extends Component {
	state = {
		error: null
	}
	componentDidMount() {
		firebase.auth().onAuthStateChanged(user => {
			if(user) {
				this.props.history.push(`/users/${user.uid}`);
			}
		})
	}
	signInWithGoogle = () => {
		const provider = new firebase.auth.GoogleAuthProvider();

		firebase.auth().signInWithRedirect(provider).then(result => {
			console.log(result);
		}).catch(error => {
			console.log(error);
		})
	}
	signInWithFacebook = () => {
		const provider = new firebase.auth.FacebookAuthProvider();

		firebase.auth().signInWithPopup(provider).then(result => {
			console.log(result);
			console.log(result.uid);
		}).catch(error => {
			console.log(error);
		})
	}
	signUp = () => {
		const txtEmail = document.getElementById('txtEmail');
		const txtPassword = document.getElementById('txtPassword');
		const txtBiography = document.getElementById('txtBiography');
		const txtNick = document.getElementById('txtNick');
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();
		const db = firebase.firestore();
		auth.createUserWithEmailAndPassword(email, pass).then(cred => {
			console.log(`cred:`);
			console.log(cred.user.uid);
			this.props.history.push(`/users/${cred.user.uid}`);
				return db.collection('users').doc(cred.user.uid).set({
					bio: txtBiography.value,
					nick: txtNick.value,
					points: points
				})
			}).then((cred) => {
				console.log(cred);
				this.setState({error: ''});

			}).catch(err => {
				console.log(err);
				this.setState({error: err.message});
			})
	}
	render() {
		return (
			<>
				<Global />
				<Wrapper scroll onClick={this.exit}>
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
							<Field>
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
							</Field>
						</Form>
						<Choise hide={this.state.isLoggedIn}>
							<SignInWithFacebook onClick={this.signInWithFacebook} />
							<SignInWithGoogle onClick={this.signInWithGoogle} />
							<SignUp onClick={this.signUp} />
							<Error id="error">{this.state.error}</Error>
						</Choise>
						<LogOut onClick={this.logOut} preview={this.state.isLoggedIn} />
					</LoginElement>
				</Wrapper>
			</>
		);
	}
}

export default App;
