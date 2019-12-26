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
import LogOut from './components/LogOut'

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
const AddAdmin = styled.form`
	display: none;
	${props =>
			props.preview &&
			css`
				display: block;
	`};
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
const CreateGuide = styled.button`
	padding: 5px;
	border-radius: 5px;
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
				console.log(user);
				this.setState({isLoggedIn: true, userEmail: user.email});
				const db = firebase.firestore();
				user.getIdTokenResult().then(idTokenResult => {
					if (idTokenResult.claims.admin) {
						this.setState({isAdmin: true})
					}
					else {
						this.setState({isAdmin: false})
					}
					user.admin = idTokenResult.claims.admin
				})
				db.collection('users').doc(user.uid).get().then(doc => {
					if (doc.data()) {
						this.setState({userId: doc.data().bio})
					}
				});
				db.collection('guides').onSnapshot(snap => {
				this.setUpGuides(snap.docs);
				}, err => {
					console.log(err.message)
				});
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
					nick: txtNick.value
				})
			}).then((cred) => {
				console.log(cred);
				document.getElementById('error').innerHTML = '';

			}).catch(err => {
				document.getElementById('error').innerHTML = `${err.message}`;
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
									<ContentLabel className="content-label">Biogram</ContentLabel>
								</Label>
							</Field>
							<Field>
								<Input className="input" id="txtNick" type="text" name="nick" autoComplete="off" required />
								<Label className="label" htmlFor="nick">
									<ContentLabel className="content-label">Nick</ContentLabel>
								</Label>
							</Field>
						</Form>
						<Choise hide={this.state.isLoggedIn}>
							<SignInWithFacebook onClick={this.signInWithFacebook} />
							<SignInWithGoogle onClick={this.signInWithGoogle} />
							<SignUp onClick={this.signUp} />
							<Error id="error"></Error>
						</Choise>
						<LogOut onClick={this.logOut} preview={this.state.isLoggedIn} />
					</LoginElement>
				</Wrapper>
			</>
		);
	}
}

export default App;
