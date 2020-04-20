// BASIC
import React, { Component } from 'react'
import styled, {css} from 'styled-components'
import {Link} from 'react-router-dom'

import {db} from '../../Config/firebase'
// IMAGES
import first from '../Images/icons/podium/first.svg'
import second from '../Images/icons/podium/second.svg'
import third from '../Images/icons/podium/third.svg'
import diamond from '../Images/icons/diamond.svg'
// ICONS
// import {FaSearch} from 'react-icons/fa'

const StatsElement = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`
const Header = styled.header`
	margin: 30px;
	font-size: 40px;
	line-height: 40px;
	font-weight: bold;
`
// const Search = styled(FaSearch)`
// 	color: var(--color-main);
// 	font-size: 30px;
// 	:hover {
// 		cursor: pointer;
// 	}
// `
const Main = styled.div`
	width: calc(100vw - 60px);
	height: calc(100vh - 150px);
	display: flex;
	justify-content: center;
	position: relative;
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
const UserList = styled.div`
	width: 100%;
	max-width: 500px;
	transition: transform 0.3s ease;
	${props =>
		props.active &&
		css`
			transform: translateX(-275px);
		`
	}
	@media (max-width: 1100px) {
		transform: translateX(0);
	}
`
const User = styled(Link)`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 10px;
	padding: 20px;
	border: 1px solid var(--color-secondary);
	border-radius: 10px;
	text-align: center;
	font-weight: bold;
	text-decoration: none;
	color: var(--color-primary);
	transition: all 0.2s ease;
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
	:hover {
		border: 1px solid var(--color-primary);
	}
	${props =>
		props.premium &&
		css`
			:hover {
				border: 1px solid var(--color-decorative);
			}
		`
	};
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
	color: var(--color-main);
`
// const entry = keyframes`
// 	from {
// 		opacity: 0;
// 		transform: scale(0.9) translateX(-100px);
// 	}
// 	to {
// 		opacity: 1;
// 		transform: scale(1) translateX(25px);
// 	}
// `
// const entryMobile = keyframes`
// 	from {
// 		opacity: 0;
// 		transform: scale(0.9);
// 	}
// 	to {
// 		opacity: 1;
// 		transform: scale(1);
// 	}
// `
// const Menu = styled.div`
// 	position: absolute;
// 	top: 0;
// 	left: 50vw;
// 	display: none;
// 	flex-direction: column;
// 	align-items: center;
// 	height: 80vh;
// 	width: 90vw;
// 	max-width: 500px;
// 	background-color: var(--color-dark);
// 	border-radius: 20px;
// 	padding: 30px;
// 	text-align: center;
// 	animation: ${entry} 0.3s both;
// 	${props =>
// 		props.active &&
// 		css`
// 			display: flex;
// 		`
// 	}
// 	@media (max-width: 1100px) {
// 		top: -100px;
// 		left: 0;
// 		max-width: 100vw;
// 		width: 100vw;
// 		height: 100vh;
// 		display: none;
// 		border-radius: 0;
// 		animation: ${entryMobile} 0.3s ease;
// 		${props =>
// 			props.active &&
// 			css`
// 				display: flex;
// 			`
// 		}
// 	}
// `
// const SearchTitle = styled.h2`
// 	margin: 0px;
// 	font-size: 30px;
// `
// const Books = styled.div`
// 	display: flex;
// 	justify-content: space-evenly;
// 	width: 100%;
// 	margin: 30px 0;
// 	@media (max-width: 500px) {
// 		flex-direction: column;
// 		align-items: center;
// 		justify-content: flex-start;
// 		width: 95vw;
// 		height: 100vh;
// 		overflow-y: scroll;
// 		transition: opacity 0.3s ease;
// 		::-webkit-scrollbar {
// 			width: 3px;
// 		}
// 		::-webkit-scrollbar-track {
// 			background: var(--color-dark); 
// 			border-radius: 3px;
// 		}
// 		::-webkit-scrollbar-thumb {
// 			background: var(--color-secondary);
// 		}
// 	}
// `
// const Book = styled.div`
// 	position: relative;
// `
// const BookImage = styled.img`
// 	width: 50%;
// 	max-width: 300px;
// 	transition: opacity 0.3s ease;
// 	${props =>
// 		props.hide &&
// 		css`
// 			opacity: 0;
// 		`
// 	}
// 	@media (max-width: 500px) {
// 		width: 80%;
// 		:first-child {
// 			margin-bottom: 50px
// 		}
// 	}
// `
// const Units = styled.ul`
// 	position: absolute;
// 	top: 0;
// 	left: 0;
// 	opacity: 0.5;
// 	list-style: none;
// 	z-index: 1;
// 	${props =>
// 		props.show &&
// 		css`
// 			opacity: 1;
// 		`
// 	}
// `
// const Unit = styled.li`

// `
const Diamond = styled.img`
	position: absolute;
	top: 10px;
	left: 10px;
	color: var(--color-main);
	width: 40px;
	:hover {
		cursor: pointer;
	}
`

class Stats extends Component {
	state = {
		users: null,
		books: null,
		hideBooks: false,
		active: false
	}
	componentDidMount() {
		db.collection('users').orderBy('easy-word.experience', 'desc').onSnapshot(snap => {
			if (this.state.users) {
				this.setState({users: null})
			}
			snap.docs.forEach(doc => {
				let users = this.state.users ? this.state.users : [];
				this.setState({
					users: users.concat(doc.data()),
				});
			})
		});
		db.collection('books').orderBy('info.name').get().then(snap => {
			snap.docs.forEach(doc => {
				let books = this.state.books ? this.state.books : [];
				this.setState({
					books: books.concat(doc.data()),
				})
			})
		});
	}
	changeActive = () => {
		!this.state.active ? this.setState({active: true}) : this.setState({active: false})
	}
	hideBooks = (e) => {
		e.persist();
		console.log(e.target.id);
		this.setState({hideBooks: true});
		setTimeout(() => {
			document.getElementById(e.target.id).parentElement.style.display = 'none';
		}, 500);
	}
	render() {
		let users = this.state.users;
		return (
			<StatsElement>
				{/* <Header>Ranking <Search onClick={this.changeActive} /></Header> */}
				<Header>Ranking</Header>
				{/* <Bitmoji src={libmoji.buildPreviewUrl("head",2,gender[1],style[1],0,traits,outfit)} alt=""/> */}
					<Main>
						{!users ? 'Wczytywanie...' : <UserList active={this.state.active}>
							{users.map((user, index) => {
								const {nick, uid} = user.info;
								return (
									<User premium={user['easy-word'].premium} to={`/users/${uid}`} id={uid} key={index}>
										<Nick>{nick}</Nick>
										<Points>{user['easy-word'].experience}</Points>
										{user['easy-word'].premium ? <Diamond src={diamond} alt={uid} title="Użytkownik premium" /> : ''}
									</User>
								)
							})}
						</UserList>}
						{/* <Menu active={this.state.active}>
							<SearchTitle>Szukaj według</SearchTitle>
							<Books id="books">
								{!this.state.books ? 'Wczytywanie...' : this.state.books.map((book) => {
									const {name, src, alt} = book.info;
									const units = Object.values(book).slice(1);
									return (
										<Book key={name}>
											<Units show={this.state.hideBooks}>
												{units.map(({title}) => <Unit key={title}>{title}</Unit>)}
											</Units>
											<BookImage hide={this.state.hideBooks} id={name} onClick={this.hideBooks} src={src} alt={alt} title={alt} />
										</Book>
									)
								})}
							</Books>
							<Search onClick={this.changeActive} />
						</Menu> */}
					</Main>
			</StatsElement>
		)
	}
}

export default Stats