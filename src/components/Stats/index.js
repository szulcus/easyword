// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/functions'
// IMAGES
import first from '../Images/icons/podium/first.svg'
import second from '../Images/icons/podium/second.svg'
import third from '../Images/icons/podium/third.svg'

const StatsElement = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`
const UserList = styled.div`
	height: 80vh;
	overflow-y: scroll;
	::-webkit-scrollbar {
		width: 3px;
	}

	::-webkit-scrollbar-track {
		background: var(--color-dark); 
		border-radius: 3px;
	}
	::-webkit-scrollbar-thumb {
		background: var(--color-secondary);
	}
`
const User = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 90vw;
	max-width: 500px;
	margin: 10px;
	padding: 20px;
	border: 1px solid var(--color-secondary);
	border-radius: 10px;
	text-align: center;
	font-weight: bold;
	:nth-child(1) {
		::after {
			content: '';
			position: absolute;
			top: 10px;
			right: 10px;
			width: 50px;
			height: 50px;
			background: url(${first}) no-repeat;
			background-size: 50px;
		}
	}
	:nth-child(2) {
		::after {
			content: '';
			position: absolute;
			top: 10px;
			right: 10px;
			width: 50px;
			height: 50px;
			background: url(${second}) no-repeat;
			background-size: 50px;
		}
	}
	:nth-child(3) {
		::after {
			content: '';
			position: absolute;
			top: 10px;
			right: 10px;
			width: 50px;
			height: 50px;
			background: url(${third}) no-repeat;
			background-size: 50px;
		}
	}

`
const Nick = styled.h1`
	margin-top: 0px;
	font-size: 25px;
	max-width: calc(100% - 100px);
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`
const Points = styled.strong`
	font-size: 20px;
	color: var(--color-decorative);
`

class Stats extends Component {
	state = {
		users: null,
	}
	componentDidMount() {
		firebase.firestore().collection('_storage').doc('uid').onSnapshot(snap => {
			snap.data().allUsers.forEach(uid => {
				// firebase.firestore().collection('users').doc(uid).onSnapshot(snap => {
				// 	let users = this.state.users ? this.state.users : []
				// 	let user;
				// 	user = {
				// 		nick: snap.data().nick,
				// 		id: uid,
				// 		exp: snap.data().points.experience,
				// 	}
				// 	this.setState({
				// 		users: users.concat(user),
				// 	});
				// });
			});
		})
		firebase.firestore().collection('users').orderBy('points.experience', 'desc').onSnapshot(snap => {
				if (this.state.users) {
					this.setState({users: null})
				}
				snap.docs.forEach(doc => {
					let users = this.state.users ? this.state.users : []
					this.setState({
						users: users.concat(doc.data()),
					});
					console.log(this.state.users);
				})
		})
		// stat.forEach(({id}) => {
		// 	if(id === 4) {
		// 		console.log('ta');
		// 	}
		// })
	}
	// updateData = () => {
	// 	documnet.getElementById(uid).value = snap.data().experience
	// }
	render() {
		let users = this.state.users;
		return (
			<StatsElement>
				<h1>Ranking</h1>
				{/* <Bitmoji src={libmoji.buildPreviewUrl("head",2,gender[1],style[1],0,traits,outfit)} alt=""/> */}
					{!users ? 'Wczytywanie...' : <UserList>
						{users.map(({nick, points}, index) => {
							return (
								<User key={index}>
									<Nick>{nick}</Nick>
									<Points>{points.experience}</Points>
								</User>
							)
						})}
					</UserList>}
			</StatsElement>
		);
	}
}

export default Stats