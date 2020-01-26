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
import LogIn from './components/LogIn'
import SignInWithFacebook from './components/SignInWithFacebook'
import SignInWithGoogle from './components/SignInWithGoogle'

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
	grid-template-columns: 250px 250px;
	grid-template-rows: auto auto;
	${props =>
			props.hide &&
			css`
				display: none;
	`};
`
const Error = styled.p`

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
		firebase.auth().onAuthStateChanged(user => {
			if(user) {
				this.props.history.push(`/users/${user.uid}`);
			}
			else {
				console.log('not logged in');
				this.setState({isLoggedIn: false, isAdmin: false, userEmail: ''});
				this.setUpGuides([]);
			}
		})
	}
	setUpGuides = (data) => {
		if (data.length) {
			let html = data.map(doc => {
				const guide = doc.data();
				return <li key={guide.title}>
						<h1>{guide.title}</h1>
						<p>{guide.content}</p>
					</li>
			})
			this.setState({userContent: html})
		}
		else {
			this.setState({userContent: ''})
		}
	}
	createNewGuides = (e) => {
		e.preventDefault();
		const titleElement = document.getElementById('title');
		const contentElement = document.getElementById('content');
		firebase.firestore().collection('guides').add({
			title: titleElement.value,
			content: contentElement.value
		}).then(() => {
			document.getElementById('userForm').reset();
			titleElement.value = '';
			contentElement.value = '';
		})
	}
	addAdminCloudFunction = (e) => {
		e.preventDefault();
		const adminEmail = document.getElementById('adminEmail').value;
		const addAdminRole = firebase.functions().httpsCallable('addAdminRole');
		addAdminRole({email: adminEmail}).then(result => {
			console.log(result);
		})
	}
	logIn = () => {
		const txtEmail = document.getElementById('txtEmail');
		const txtPassword = document.getElementById('txtPassword');
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();
		auth.signInWithEmailAndPassword(email, pass).catch(err => {
			document.getElementById('error').innerHTML = err.message
		});
		console.log(email);
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
			console.log("result");
		}).catch(error => {
			console.log(error);
		})
	}
	signUp = () => {
		this.props.history.push(`/rejestracja`);
	}
	render() {
		return (
			<>
				<Global />
				<Wrapper scroll onClick={this.exit}>
					<LoginElement>
						<LoginTitle>
							Zaloguj się
						</LoginTitle>
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
						</Form>
							<Choise hide={this.state.isLoggedIn}>
								<LogIn onClick={this.logIn} />
								<SignInWithFacebook onClick={this.signInWithFacebook} />
								<SignInWithGoogle onClick={this.signInWithGoogle} />
								<SignUp onClick={this.signUp} />
								<Error id="error"></Error>
							</Choise>
					</LoginElement>
				</Wrapper>
			</>
		);
	}
}

export default App;
