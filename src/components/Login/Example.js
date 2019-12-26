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
import LogIn from './components/LogIn'
import LogOut from './components/LogOut'
// ICONS
import {AiFillDelete} from 'react-icons/ai'
// KEYFRAMES
import {entry} from '../Styles/Keyframes'

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
const UserContent = styled.div`
	display: none;
	text-align: center;
	${props =>
			props.preview &&
			css`
				display: block;
	`};
`
const Create = styled.button`
	padding: 5px;
	border-radius: 5px;
`
const Data = styled.div`
	display: flex;
	justify-content: center;
`
const Articles = styled.div`
	width: 100vw;
	display: flex;
	justify-content: center;
	ul {
		margin: 0;
		padding: 0;
		display: block;
		width: 50vw;
		li {
			list-style: none;
		}
	}
`

class UserProfile extends Component {
	state = {
		isLoggedIn: false,
		isAdmin: false,
		guides: '',
		cafes: '',
		userId: '',
		findedCity: '',
		findedSign: '>',
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
				// .where('city', '>', '')
				// .where('city', '==', 'Luzino')
				// firebase.firestore().collection('cafes').doc('---id---').update({
				// 	city: 'Blabla'
				// })
				// firebase.firestore().collection('cafes').doc('---id---').set({
				// 	city: 'Blabla'
				// })
				db.collection('cafes').orderBy('title').onSnapshot(snap => {
				this.setUpCafes(snap.docs);
				}, err => {
					console.log(err.message)
				});
				// db.collection('cafes').orderBy('city').onSnapshot(snap => {
				// 	let changes = snap.docChanges();
				// 	changes.forEach(change => {
				// 		if (change.type == 'added') {
				// 			this.setUpCafes(snap.docs);
				// 		}
				// 		else if (change.type == 'removed') {
				// 			let li = document.getElementById(change.doc.id);
				// 			document.querySelector('.listElement').removeChild(li);
				// 		}
				// 	})
				// })
			}
			else {
				console.log('not logged in');
				this.setState({isLoggedIn: false, isAdmin: false, userEmail: ''});
				this.setUpGuides([]);
			}
		})
	}
	styledArticle = (title, content, id, onclick) => {
		const ListElement = styled.li`
			position: relative;
			margin: 20px;
			border: 1px solid var(--color-secondary);
			border-radius: 10px;
		`;
		const Delete = styled(AiFillDelete)`
			position: absolute;
			top: 10px;
			right: 10px;
			color: gold;
			cursor: pointer;
		`;
		const Header = styled.h3`
		`;
		return (
			<ListElement className="listElement" id={id} key={id}>
				<Delete onClick={onclick}/>
				<Header>{title}</Header>
				<p>{content}</p>
			</ListElement>
		);
	}
	setUpGuides = (data) => {
		console.log(data[0]);
		if (data.length) {
			let html = data.map(doc => {
				const guide = doc.data();
				return this.styledArticle(guide.title, guide.content, doc.id, this.deleteGuides)
			})
			this.setState({guides: html})
		}
		else {
			this.setState({guides: ''})
		}
	}
	setUpCafes = (data) => {
		if (data.length) {
			let html = data.map(doc => {
				const cafe = doc.data();
				return this.styledArticle(cafe.title, cafe.city, doc.id, this.deleteCafes)
			})
			this.setState({cafes: html})
		}
		else {
			this.setState({cafes: ''})
		}
	}
	deleteCafes = (e) => {
		e.stopPropagation();
		let id = e.target.parentElement.parentElement.id;
		firebase.firestore().collection('cafes').doc(id).delete();
	}
	deleteGuides = (e) => {
		e.stopPropagation();
		let id = e.target.parentElement.parentElement.id;
		firebase.firestore().collection('guides').doc(id).delete();
	}
	findCity = (e) => {
			this.setState({findedCity: e.target.value, findedSign: '=='});
	}
	createNewGuides = (e) => {
		e.preventDefault();
		const titleElement = document.getElementById('guideTitle');
		const contentElement = document.getElementById('content');
		firebase.firestore().collection('guides').add({
			title: titleElement.value,
			content: contentElement.value
		}).then(() => {
			document.getElementById('guideForm').reset();
			// titleElement.value = '';
			// contentElement.value = '';
		})
	}
	createNewCafes = (e) => {
		e.preventDefault();
		const titleElement = document.getElementById('cafeTitle');
		const cityElement = document.getElementById('city');
		firebase.firestore().collection('cafes').add({
			title: titleElement.value,
			city: cityElement.value
		}).then(() => {
			document.getElementById('cafeForm').reset();
			// titleElement.value = '';
			// cityElement.value = '';
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
		this.props.history.push(`/login`);
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
		const txtEmail = document.getElementById('txtEmail');
		const txtPassword = document.getElementById('txtPassword');
		const txtBiography = document.getElementById('txtBiography');
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();
		const db = firebase.firestore();
		auth.createUserWithEmailAndPassword(email, pass).then(cred => {
				return db.collection('users').doc(cred.user.uid).set({
					bio: txtBiography.value
				})
			}).then((cred) => {
				console.log(cred);
				document.getElementById('error').innerHTML = '';

			}).catch(err => {
				document.getElementById('error').innerHTML = err.message;
			})
	}
	logOut = () => {
		firebase.auth().signOut();
		this.props.history.push(`/login`);
	}
	render() {
		return (
			<>
				<Global />
				<Wrapper scroll onClick={this.exit}>
					<LoginElement>
						<LoginTitle>
							{this.state.isLoggedIn ? (
								`Witaj ${this.state.userEmail} ${this.state.userId}`
							) : (
								"Nie jesteś zalogowany!"
							)}
						</LoginTitle>
						<AddAdmin onSubmit={this.addAdminCloudFunction} className="admin" preview={this.state.isAdmin}>
							<input type="email" placeholder="User email" id="adminEmail" required />
							<button>Make admin</button>
						</AddAdmin>
						<UserContent preview={this.state.isLoggedIn}>
							<Data>
								<Form onSubmit={this.createNewGuides} className="admin" id="guideForm">
									<Create type="submit">Create Guide</Create>
									<Field>
										<Input className="input" id="guideTitle" type="text" name="guideTitle" autoComplete="off" required />
										<Label className="label" htmlFor="guideTitle">
											<ContentLabel className="content-label">Tytuł</ContentLabel>
										</Label>
									</Field>
									<Field>
										<Input className="input" id="content" type="text" name="content" autoComplete="off" required />
										<Label className="label" htmlFor="content">
											<ContentLabel className="content-label">Zawartość</ContentLabel>
										</Label>
									</Field>
								</Form>
								<div>
									<input onChange={this.findCity} type="text" placeholder="Wyszukaj" required/>
								</div>
								<Form onSubmit={this.createNewCafes} className="admin" id="cafeForm">
									<Create type="submit">Create Cafe</Create>
									<Field>
										<Input className="input" id="cafeTitle" type="text" name="cafeTitle" autoComplete="off" required />
										<Label className="label" htmlFor="cafeTitle">
											<ContentLabel className="content-label">Tytuł</ContentLabel>
										</Label>
									</Field>
									<Field>
										<Input className="input" id="city" type="text" name="city" autoComplete="off" required />
										<Label className="label" htmlFor="city">
											<ContentLabel className="content-label">Miasto</ContentLabel>
										</Label>
									</Field>
								</Form>
							</Data>
							<Articles>
								<ul>
									{this.state.guides}
								</ul>
								<ul>
									{this.state.cafes}
								</ul>
							</Articles>
						</UserContent>
						<LogIn onClick={this.logIn} />
						<LogOut onClick={this.logOut} preview={this.state.isLoggedIn} />
					</LoginElement>
				</Wrapper>
			</>
		);
	}
}

export default UserProfile;
