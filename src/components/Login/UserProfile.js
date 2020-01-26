// BASIC
import React, {Component} from 'react';
import styled, {css} from 'styled-components'
import firebase from 'firebase/app'
import {Link} from 'react-router-dom'
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
import Achievements from './components/Achievements'
// ICONS
import {FaPencilAlt} from 'react-icons/fa'
// KEYFRAMES
import { editOpacity } from '../Styles/Keyframes'
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
const AddAdmin = styled.form`
	display: none;
	${props =>
			props.preview &&
			css`
				display: block;
	`};
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
const Avatar = styled.div`
	width: 250px;
	height: 250px;
	position: relative;
	border-radius: 100%;
	overflow: hidden;
`
const AvatarImage = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	
`
const Edit = styled(FaPencilAlt)`
	display: none;
	position: absolute;
	top: 0;
	left: 0;
	width: 250px;
	height: 250px;
	padding: 100px;
	background-color: var(--color-dark);
	animation: ${editOpacity} 0.2s ease;
	cursor: pointer;
	${Avatar}:hover & {
		display: block;
		opacity: 0.5;
	}
`
class UserProfile extends Component {
	state = {
		user: {
			name: '',
			avatar: 'https://fakeimg.pl/250x250/?text=Avatar',
			email: '',
			isLoggedIn: false,
			isAdmin: false,
			id: '',
		},
		points: null,
		previewUserAchievements: false,
	}
	componentDidMount() {
		firebase.auth().onAuthStateChanged(user => {
			if(user) {
				console.log(user);
				// this.setState({user: {
				// 	isLoggedIn: true,
				// 	email: user.email
				// }});
				this.setState(prevState => ({
					user: {
						...prevState.user,
						isLoggedIn: true,
						email: user.email
					}
				}))
				if (user.displayName) {
					this.setState(prevState => ({
						user: {
							...prevState.user,
							name: user.displayName
						}
					}))
				}
				if (user.photoURL) {
					this.setState(prevState => ({
						user: {
							...prevState.user,
							avatar: user.photoURL
						}
					}))
				}
				const db = firebase.firestore();
				user.getIdTokenResult().then(idTokenResult => {
					if (idTokenResult.claims.admin) {
						this.setState(prevState => ({
							user: {
								...prevState.user,
								isAdmin: true
							}
						}))
					}
					else {
						this.setState(prevState => ({
							user: {
								...prevState.user,
								isAdmin: false
							}
						}))
					}
					user.admin = idTokenResult.claims.admin
				})
				
				db.collection('users').doc(user.uid).get().then(doc => {
					if (!doc.data() || (!doc.data().points && !doc.data().nick)) {
						db.collection('users').doc(user.uid).update({
							points: points,
							nick: user.displayName
						})
					}
					else if (doc.data().points) {
						this.setState(prevState => ({
							points: doc.data().points,
							user: {
								...prevState.user,
								nick: doc.data().nick
							}
						}))
						console.log(this.state.points);
					}
				});
				
				

			}
			else {
				console.log('not logged in');
				this.setState(prevState => ({
					user: {
						...prevState.user,
						isLoggedIn: false,
						isAdmin: false,
						email: ''
					}
				}))
			}
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
	logOut = () => {
		firebase.auth().signOut();
		this.props.history.push(`/login`);
	}
	editAvatar = () => {
		alert("Edycja zdjęcia")
	}
	handleUserAchievements = () => {
		this.state.previewUserAchievements ? this.setState({previewUserAchievements: false}) : this.setState({previewUserAchievements: true})
		
	}
	render() {
			console.log(this.state.points);
		return (
			<>
				<Global />
				<Wrapper scroll onClick={this.exit}>
					<LoginElement>
						<LoginTitle>
							{/* {this.state.user.isLoggedIn ? (
								`Witaj ${this.state.user.name}!`
							) : (
								"Nie jesteś zalogowany!"
							)} */}
							Witaj {this.state.user.nick}!
						</LoginTitle>
						<AddAdmin onSubmit={this.addAdminCloudFunction} className="admin" preview={this.state.user.isAdmin}>
							<input type="email" placeholder="User email" id="adminEmail" required />
							<button>Dodaj uprawnienia</button>
						</AddAdmin>
						<UserContent preview={this.state.user.isLoggedIn}>
							<Avatar>
								<AvatarImage src={this.state.user.avatar} alt="User Image"/>
								<Edit onClick={this.editAvatar} />
							</Avatar>
							<div>Wygrane rundy: </div>
							<div>Doświadczenie: {!this.state.points ? '-' : this.state.points.experience} XP</div>
						</UserContent>
						<button onClick={this.handleUserAchievements}>Zobacz swoje wyniki</button>
						<button>Przejdź do tablicy wyników</button>
						<Link to='/'>Wróć do strony głównej</Link>
						<LogIn onClick={this.logIn} hide={this.state.user.isLoggedIn} />
						<LogOut onClick={this.logOut} preview />
					</LoginElement>
					<Achievements preview={this.state.previewUserAchievements} points={this.state.points} back={this.handleUserAchievements} />
				</Wrapper>
			</>
		);
	}
}

export default UserProfile;
