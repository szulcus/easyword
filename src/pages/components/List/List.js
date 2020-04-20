// BASIC
import React, { Component } from 'react'
import styled, {keyframes, css} from 'styled-components'
// import moment from 'moment'
import 'moment/locale/pl'
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/functions'
import {Link} from 'react-router-dom'
import latinize from 'latinize'
import {paramCase} from 'change-case'
// STYLES
import Global from '../../../Components/Styles/Global'
import { Wrapper } from '../../../Components/Styles/Components'
// COMPONENTS
import Book from './components/Book'
import Header from './components/ListElement/Header'
import ListWrapper from './components/ListElement/ListWrapper'
// ICONS
import { FaAngleRight, FaStar, FaListUl, FaBomb } from 'react-icons/fa'
import {GoKebabVertical} from 'react-icons/go'

const ListComponent = styled.div`
	text-align: center;
`
const Separator = styled.hr`
	display: none;
	@media (min-width: 800px) {
		display: flex;
		width: 0;
		border: 0.5px solid gold;
		height: calc(100vh - 60px);
		margin: 0 30px;
	}
`
const ListElementWrapper = styled.div``
const UnitTitle = styled.h3`
	text-align: left;
`
const UnitList = styled.ul`
	list-style: none;
	@media (max-width: 400px) {
		padding-left: 20px;
	}
`
const Menu = styled(GoKebabVertical)`
	position: absolute;
	right: 0px;
	transform: translateY(3px);
	color: var(--color-main);
	@media (min-width: 600px) {
		display: none;
	}
`
const Links = styled.div`
	position: absolute;
	right: 0;
	display: none;
	justify-content: flex-end;
	transform: translateX(-10px);
	transition: all 0.3s ease;
	@media (max-width: 600px) {
		background-color: var(--color-dark);
		padding: 8px 0 5px 0;
		transform: translateY(-5px) translateX(0);
		border-radius: 10px;
		margin-right: 20px;
	}
`
const listEntry = keyframes`
	0% {
		transform: translateX(-100%);
		opacity: 0;
	}
	100% {
		transform: translateX(0);
		opacity: 1;
	}
`
const Go = styled(Link)`
	display: block;
	margin: 0 5px;
	color: var(--color-main);
	opacity: 0;
	transition: all 0.2s ease;
	:first-child {
		animation: ${listEntry} 0.3s 0.1s both;
	}
	:last-child {
		animation: ${listEntry} 0.5s 0.1s both;
	}
	:hover {
		color: rgb(255,223,0, 0.5);
	}
`
const UnitListItem = styled.li`
	position: relative;
	display: flex;
	justify-content: flex-start;
	padding: 3px;
	text-align: left;
	@media (max-width: 600px) {
		padding-right: 30px;
	}
`
const Arrow = styled(FaAngleRight)`
	color: var(--color-main);
	min-width: 20px;
`
const Star = styled(FaStar)`
	color: var(--color-main);
	min-width: 20px;
	:first-child {
		margin-left: 20px;
	}
`
const PageLink = styled(Link)`
	display: block;
	text-align: left;
	text-decoration: none;
	color: var(--color-secondary);
	transition: all 0.15s ease-in;
	:hover {
		color: var(--color-primary);
	}
`


class List extends Component {
	state = {
		plannedDate: '20200128',
		units: null
	}
	componentDidMount() {
		const db = firebase.firestore();

		let {bookName} = this.props.match.params;
		this.setState({bookName});
		if (bookName === 'repetytorium') {
			bookName = 'book_01'
		}
		else if (bookName === 'wsip') {
			bookName = 'book_02'
		}
		else if (bookName === 'jezyk-angielski-zawodowy') {
			bookName = 'book_03'
		}
		else if (bookName === 'znaki-drogowe') {
			bookName = 'book_04'
		}
		else if (bookName === 'czasowniki-nieregularne') {
			bookName = 'book_05'
		}
		else {
			this.props.history.push('not-found-page')
		}
		db.collection('books').get().then((snaps) => {
			// const data = snaps.filter((snap) => snap.data().info.id.includes(this.props.match.params.bookName));
			let units = [];
			let info = {}
			snaps.forEach(snap => {
				if (snap.data().info.id.includes(this.props.match.params.bookName)) {
					units = units.concat(Object.values(snap.data()).slice(1))
					if (snap.data().info.id === this.props.match.params.bookName) {
						info = snap.data().info
					}
				}
			})
			this.setState({units, info})
		})
	}
	showLinks = (e) => {
		const children = e.currentTarget.children;
		children[children.length - 1].style.display = 'flex';
	}
	hideLinks = () => {
		document.querySelectorAll('.links').forEach(element => element.style.display = 'none')
	}
	render() {
		return (
			<ListComponent>
				<Global />
				{!this.state.units ? 'Wczytywanie...' : <Wrapper list="true">
					<Book src={this.state.info.src} information='WSiP - język angielski zawodowy w logistyce i spedycji. Zeszyt ćwiczeń'/>
					<Separator />
					<ListElementWrapper>
						<Header />
						<ListWrapper>
							{this.state.units.map(({title, parts}, unitIndex) => {
								return(
									<div key={`${unitIndex}_${title}`}>
										<UnitTitle>Rozdział {unitIndex + 1} - {title}</UnitTitle>
										<UnitList>
											{Object.values(parts).length === 1 ? '' : Object.values(parts).map(({name}, partIndex) => {
												return(
													<UnitListItem onMouseOver={this.showLinks} onMouseOut={this.hideLinks} key={`${partIndex}_${name}`}>
														<Arrow />
														<PageLink list="true" to={`/${this.state.bookName}/rozdzial-${unitIndex + 1}.${partIndex + 1}/${paramCase(latinize(name))}`}>{name}</PageLink>
														<Menu />
														<Links className="links">
															<Go to={`/${this.state.bookName}/spis-slowek/rozdzial-${unitIndex + 1}/${paramCase(latinize(name))}`}>
																<FaListUl />
															</Go>
															<Go to={`/${this.state.bookName}/rozdzial-${unitIndex + 1}.${partIndex + 1}/${paramCase(latinize(name))}/easy-shoot`}>
																<FaBomb />
															</Go>
														</Links>
													</UnitListItem>
												)
											})}
											<UnitListItem onMouseOver={this.showLinks} onMouseOut={this.hideLinks}>
												<Star />
												<PageLink list="true" to={`/${this.state.bookName}/rozdzial-${unitIndex + 1}/test`}>&nbsp;Test&nbsp;</PageLink>
												<Star />
												<Menu />
												<Links className="links">
													<Go to={`/${this.state.bookName}/spis-slowek/rozdzial-${unitIndex + 1}/test`}>
														<FaListUl />
													</Go>
													<Go to={`/${this.state.bookName}/spis-slowek/rozdzial-${unitIndex + 1}/test/easy-shoot`}>
														<FaBomb />
													</Go>
												</Links>
											</UnitListItem>
										</UnitList>
									</div>
								)
							})}
						</ListWrapper>
					</ListElementWrapper>
				</Wrapper>}
			</ListComponent>
		);
	}
}

export default List