// BASIC
import React, {Component} from 'react';
import styled, {css} from 'styled-components'
import {Link} from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser'
// CONFIG
import {db, au, fu, st} from '../../../Config/firebase'
// ICONS
import {FaPencilAlt, FaTrophy, FaReply, FaUserPlus, FaShoppingBasket} from 'react-icons/fa'
import {TiChartPie, TiPlus} from 'react-icons/ti'
import {MdCloudDownload} from 'react-icons/md'
import {WiStars} from 'react-icons/wi'
// KEYFRAMES
import { editOpacity } from '../../Styles/Keyframes'

const UserProfileSite = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow-y: scroll;
	::-webkit-scrollbar {
		width: 0;
	}
`
const LoginTitle = styled.header`
	position: relative;
	margin: 30px 0;
	width: 70vw;
	max-width: 400px;
	${props =>
		props.editable &&
		css`
			:hover {
				cursor: pointer;
			}
		`
	}
`
const EditNick = styled.input`
	width: 100%;
	height: 100%;
	background-color: transparent;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	font-family: 'Ubuntu', sans-serif;
	font-size: 35px;
	font-weight: bold;
	text-align: center;
	border: 1px solid transparent;
	border-radius: 15px;
	color: var(--color-primary);
	transition: all 0.1s ease;
	:focus {
		outline: none;
	}
	${props =>
		props.editable &&
		css`
			cursor: pointer;
			:focus {
				border: 1px solid var(--color-secondary);
			}
		`
	};
`
const EditIcon = styled(FaPencilAlt)`
	position: absolute;
	top: 0;
	right: 0;
	transform: scale(0.9);
	font-size: 35px;
	opacity: 0;
	transition: all 0.3s ease;
	${props =>
		props.preview &&
		css`
			${LoginTitle}:hover & {
				transform: scale(1) translateX(50px);
				color: var(--color-main);
				opacity: 0.5;
			}
		`
	};
`
const Avatar = styled.div`
	width: 200px;
	min-height: 200px;
	position: relative;
	border-radius: 100%;
	overflow: hidden;
	background: url("${props => props.avatar}") no-repeat center center;
	background-size: cover;
	::after {
		/* content: '${props => props.progress > 20 ? `${props.progress}%` : ''}'; */
		content: '${props => `${Math.floor(props.progress)}%`}';
		width: ${props => `${props.progress}%`};
		height: 100%;
		position: absolute;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		top: 0;
		left: 0;
		padding-right: ${props => props.progress ? '10px' : '0'};
		background-color: var(--color-light);
		color: var(--color-dark);
		opacity: 0.5;
		font-weight: bold;
		font-size: 30px;
		transition: width 0.3s ease;
	}
	@media (min-width: 800px) {
		width: 250px;
		min-height: 250px;
	}
	${props =>
		props.premium &&
		css`
			border: 5px solid var(--color-decorative);
		`
	};
`
const Stars = styled(WiStars)`
	position: absolute;
	top: 0;
	right: 0;
	font-size: 30px;
	color: skyblue;
	z-index: 99;
`
const EditAvatar = styled(FaPencilAlt)`
	display: none;
	position: absolute;
	top: 0;
	left: 0;
	width: 200px;
	height: 200px;
	padding: 80px;
	background-color: var(--color-bg);
	animation: ${editOpacity} 0.2s ease;
	cursor: pointer;
	${props =>
		props.preview &&
		css`
			${Avatar}:hover & {
				display: block;
				opacity: 0.5;
			}
		`
	};
	@media (min-width: 800px) {
		width: 250px;
		height: 250px;
		padding: 100px;
	}
`
const UserContent = styled.div`
	position: relative;
	border: 1px solid var(--color-secondary);
	width: 90vw;
	max-width: 1000px;
	height: calc(100vh - 480px);
	min-height: 100px;
	padding: 10px;
	margin: 20px;
	border-radius: 20px;
	text-align: center;
	overflow-y: scroll;
	::-webkit-scrollbar {
		width: 0;
	}
	@media (min-width: 800px) {
		height: calc(100vh - 550px);
	}
`
const Biogram = styled.div`
	padding: 0 20px;
	:focus {
		outline: none;
	}
`
const Confirm = styled(TiPlus)`
	position: absolute;
	top: 10px;
	right: 10px;
	font-size: 25px;
	color: var(--color-main);
	opacity: 0;
	transition: all 0.2s ease;
	${props =>
		props.show &&
		css`
			opacity: 1;
			:hover {
				cursor: pointer;
			}
		`
	};
`
// "...jeśli nie poświęcasz czasu na rodzenie się, czas zajmuje ci umieranie..."
// -Steve Jobs
const AddAdmin = styled.form`
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	display: none;
	align-items: center;
	background-color: var(--color-bg);
	/* height: 30px; */
	${props =>
		props.preview &&
		css`
			display: flex;
	`}
`
const Email = styled.input`
	background-color: transparent;
	border: none;
	border-bottom: 2px solid var(--color-main);
	margin: 5px;
	:focus {
		outline: none;
	}
	::placeholder {
		transition: all 0.2s ease;
		color: var(--color-secondary);
		font-family: 'Ubuntu', sans-serif;
		font-size: 18px;
	}
	:focus::placeholder {
		opacity: 0;
		transform: translateX(30px);
	}
`
const Submit = styled.button`
	background-color: transparent;
	border: none;
	font-size: 30px;
	color: var(--color-main);
	:hover {
		cursor: pointer;
	}
`
const Input = styled.input`
	display: none;
`

const Achievements = styled.div`
	width: 90vw;
	max-width: 1000px;
	display: flex;
	justify-content: space-evenly;
`
const Achievement = styled.div`
	${props =>
		props.hide &&
		css`
			display: none;
		`
	};
`
const AchievementIcon = styled.span`
	font-size: 30px;
	color: var(--color-main);
	transition: all 0.3s ease;
	@media (min-width: 800px) {
		font-size: 40px;
	}
	:hover {
		cursor: pointer;
		opacity: 0.5;
	}
`
const Go = styled(Link)`
	text-decoration: none;
	color: var(--color-main);
`
const Return = styled.div`
	width: 90vw;
	max-width: 1000px;
	margin: 20px 0;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`
const Back = styled.div`
	font-size: 30px;
	transition: all 0.3s ease;
	:hover {
		cursor: pointer;
		opacity: 0.5;
	}
`
const LogIn = styled.button`
	position: relative;
	display: none;
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
	${props =>
		props.preview &&
		css`
			display: flex;
		`
	};
`

class UserProfile extends Component {
	state = {
		info: null,
		isAdmin: false,
		isOwner: false,
		previewUserAchievements: false,
		percentage: 0,
		biogramEdit: false,
		showShop: false,
		premium: false
	}
	componentDidMount() {
		// console.log(easyWord);
		au.onAuthStateChanged(user => {
			if(user) {
				if (user.uid === this.props.match.params.id) {
					console.log(user);
					db.collection('users').doc(user.uid).get().then(snap => {
						// --- 1: User zupełnie nowy
						if(!snap.data()) {
							// DODAWANIE NOWEJ STRUKTURY
							db.collection('games-data').doc('easy-word').get().then(snap => {
								const points = snap.data().points
								db.collection('users').doc(user.uid).set({
									'easy-word': points
								})
							}).then(() => {
								// DODANIE INFORMACJI
								const nick = prompt("Podaj swój nick:", `${user.displayName ? user.displayName : user.email.replace(/@.+/g, '')}`);
								const biogram = prompt("Napisz cos o sobie:", "Jestem nowym użytkownikiem EasyWord!")
								db.collection('users').doc(user.uid).update({
									info: {
										uid: user.uid,
										nick: nick,
										biogram: biogram,
										email: user.email,
										coins: 0,
										packs: {
											purchased: ['default'],
											selected: 'default'
										}
									}
								})
							}).then(() => {
								// DODANIE FOTKI
								if (user.photoURL) {
									db.collection('users').doc(user.uid).update({
										'info.avatar': user.photoURL
									})
								}
								else {
									db.collection('users').doc(user.uid).update({
										'info.avatar': 'https://firebasestorage.googleapis.com/v0/b/easyword.appspot.com/o/users%2Fjakubzlezena%40wp.pl%2Fhello.png?alt=media&token=667f08aa-7c17-4976-b208-96565dcf9175'
									})
								}
							}).then(() => {
								this.setData()
							})
						}
						else {
							this.setData()
						}
					})
				}
				else {
					this.setData()
				}
			}
			else {
				this.props.history.push(`/login`);
			}
		})
	}
	setData = () => {
		// POBRANIE ODPOWIEDNICH DANYCH
		au.onAuthStateChanged((user) => {
			if (user.uid === this.props.match.params.id) {
				user.getIdTokenResult().then(idTokenResult => {
					if (idTokenResult.claims.admin) {
						this.setState({isAdmin: true})
					}
					else {
						this.setState({isAdmin: false})
					}
					user.admin = idTokenResult.claims.admin
				})
				db.collection('users').doc(user.uid).onSnapshot(snap => {
					const {nick, biogram, uid, email, avatar, coins} = snap.data().info;
					this.setState({
						info: {
							nick, biogram, uid, email, avatar, coins
						},
						points: snap.data()['easy-word'].points,
						premium: snap.data()['easy-word'].premium,
						isOwner: true
					})
				});
			}
			else {
				db.collection('users').doc(this.props.match.params.id).onSnapshot(snap => {
					const {nick, biogram, uid, email, avatar, coins} = snap.data().info;
					this.setState({
						info: {
							nick, biogram, uid, email, avatar, coins
						},
						points: snap.data()['easy-word'].points,
						premium: snap.data()['easy-word'].premium
					})
				});
			}
		})
	}
	updateNick = (e) => {
		db.collection('users').doc(this.state.info.uid).update({
			'info.nick': e.target.value
		})
	}
	addAdminCloudFunction = (e) => {
		e.preventDefault();
		const adminEmail = document.getElementById('adminEmail').value;
		const addAdminRole = fu.httpsCallable('addAdminRole');
		addAdminRole({email: adminEmail}).then(result => {
			console.log(result);
		})
	}
	editAvatar = () => {
		if (this.state.isOwner) {
			document.getElementById('fileButton').click();
		}
	}
	handleUserAchievements = () => {
		this.state.previewUserAchievements ? this.setState({previewUserAchievements: false}) : this.setState({previewUserAchievements: true})
		
	}
	updateAvatar = (e) => {
		const file = e.target.files[0];
		const storageRef = st.ref(`users/${this.state.info.email}/${file.name}`);
		const task = storageRef.put(file);
		task.on('state_changed',
		(snap) => {
			this.setState({percentage: (snap.bytesTransferred / snap.totalBytes) * 100});
		}, err => {
			console.log(err);
		}, () => {
			st.ref(`users/${this.state.info.email}`).child(file.name).getDownloadURL().then(url => {
				console.log(url);
				db.collection('users').doc(this.state.info.uid).update({
					'info.avatar': url
				})
				this.setState({percentage: 0})
			})
		})
	}
	editBiogram = () => {
		this.setState({biogramEdit: true})
	}
	updateBiogram = () => {
		const html = document.getElementById('biogramEditor').innerHTML;
		db.collection('users').doc(this.state.info.uid).update({
			'info.biogram': html
		})
		this.setState({biogramEdit: false})
	}
	goToShop = () => {
		!this.state.showShop ? this.setState({showShop: true}) : this.setState({showShop: false})
	}
	logOut = () => {
		au.signOut();
		this.props.history.push(`/login`);
	}
	render() {
		// var d1 = new Date(); //"now"
		// var d2 = new Date("2011/02/01")  // some date
		// var diff = Math.abs(d1-d2);
		console.log(this.state.points)
		return (
			<UserProfileSite>
				{!this.state.info ? '...' : <>
					{/* {this.props.match.params.id === this.state.info.uid ? <> */}
						<LoginTitle editable={this.state.isOwner}>
							<EditNick defaultValue={this.state.info.nick} readOnly={!this.state.isOwner} onChange={this.updateNick} editable={this.state.isOwner} />
							<EditIcon preview={this.state.isOwner} />
						</LoginTitle>
						<Avatar avatar={this.state.info.avatar} progress={this.state.percentage} premium={this.state.premium}>
							<Stars />
							<EditAvatar preview={this.state.isOwner} onClick={this.editAvatar} />
							<Input type="file" accept="image/*" onChange={this.updateAvatar} id="fileButton"/>
						</Avatar>
						<UserContent>
							<Biogram id="biogramEditor" contentEditable={this.state.isOwner} onInput={this.editBiogram}>
								{ReactHtmlParser(this.state.info.biogram.replace(/kurw/gi, "k🤬w").replace(/pierdol/gi, "p🤬rdol").replace(/pierdal/gi, "p🤬rdal").replace(/jeban/gi, "j🤬an"))}
							</Biogram>
							<Confirm onClick={this.updateBiogram} show={this.state.biogramEdit} />
							<AddAdmin onSubmit={this.addAdminCloudFunction} className="admin" preview={this.state.isAdmin}>
								<Go to="/backup"><MdCloudDownload /></Go>
								<Email type="email" placeholder="User email" id="adminEmail" required />
								<Submit type="submit"><FaUserPlus /></Submit>
							</AddAdmin>
						</UserContent>
						<Achievements>
							<Achievement hide={!this.state.isOwner}>
								<AchievementIcon>
									<Go to='/easy-shop'><FaShoppingBasket /></Go>
								</AchievementIcon>
							</Achievement>
							<Achievement>
								<AchievementIcon>
									<Go to="/ranking"><FaTrophy /></Go>
								</AchievementIcon>
							</Achievement>
							<Achievement>
								<AchievementIcon>
									<TiChartPie />
								</AchievementIcon>
							</Achievement>
						</Achievements>
						<Return>
							<Back onClick={() => this.props.history.goBack()}><FaReply /></Back>
							<LogIn color="main" onClick={this.logOut} preview={this.state.isOwner}>Wyloguj się</LogIn>
						</Return>
						{/* </> : 'inny profil'} */}
				</>}
				{/* <button onClick={this.handleUserAchievements}>Zobacz swoje wyniki</button> */}
				{/* <button>Przejdź do tablicy wyników</button> */}
				{/* <Achievements preview={this.state.previewUserAchievements} points={this.state.points} back={this.handleUserAchievements} /> */}
			</UserProfileSite>
		);
	}
}

export default UserProfile;
