// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import 'moment/locale/pl'
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/functions'
import {Link} from 'react-router-dom'
import latinize from 'latinize'
// STYLES
import Global from '../../../Components/Styles/Global'
import { Wrapper, PageLink } from '../../../Components/Styles/Components'
import { listEntry, listHover } from '../../../Components/Styles/Keyframes'
// COMPONENTS
import Book from './components/Book'
import Header from './components/ListElement/Header'
import ListWrapper from './components/ListElement/ListWrapper'
import Unit from './components/Unit'
// ICONS
import { FaAngleRight, FaStar, FaListUl} from 'react-icons/fa'

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

const Advertisement = styled.div`
	background-color: var(--color-dark);
	padding: 10px;
	margin-bottom: 50px;
	border-radius: 20px;
	@media (min-width: 600px) {
		padding: 10px 20px;
	}
`

const Term = styled.div`
	display: flex;
	justify-content: space-around;
	line-height: 100%;
	margin: 20px;
	font-size: 30px;
	color: var(--color-decorative);
`

const Line = styled.div`
	display: none;
		@media (min-width: 600px) {
			display: block;
		}
`

const Time = styled.div`
	width: 200px;
	font-size: 20px;
	text-align: center;
	::after {
		content: ' 😉';
	}
`

const Date = styled.div`
	width: 200px;
	font-size: 20px;
	text-align: center;
	display: none;
		@media (min-width: 600px) {
			display: block;
		}
`




const UnitElement = styled.div`
	
`

const UnitTitle = styled.h3`

`;

const UnitList = styled.ul`
	list-style: none;
`

const Go = styled(Link)`
	position: absolute;
	top: 1.5px;
	right: 0px;
	display: none;
	padding: 3px;
	color: var(--color-decorative);
	opacity: 0;
	animation: ${listEntry} 0.3s 0.1s both;
	transition: all 0.1s ease;
	:hover {
		animation: ${listHover} 0.3s both;
	}
`
const UnitListItem = styled.li`
	position: relative;
	display: flex;
	align-items: center;
	padding: 3px;
	:hover ${Go} {
		display: block;
	}
	:hover ${PageLink} {
		color: var(--color-primary);
	}
`
const Arrow = styled(FaAngleRight)`
	color: var(--color-decorative);
`
const Star = styled(FaStar)`
	color: var(--color-decorative);
`


class List extends Component {
	state = {
		plannedDate: '20200128',
	}
	componentDidMount() {
		const db = firebase.firestore();

		let {bookName} = this.props.match.params;
		this.setState({bookName});
		if (bookName === 'macmillan') {
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
		db.collection('books').doc(this.props.match.params.bookName).onSnapshot((snap) => {
			this.setState({
				data: snap.data()
			})
			// console.log(this.state.data);
			// console.log(Object.values(this.state.data));
		});
	}
	flat = (name) => {
		return name ? latinize(name.toLowerCase()).split(' ').join('-').replace(/,/g, '') : '';
	}
	render() {
		moment.locale('pl')
		return (
			<>
				<Global />
				{!this.state.data ? 'Wczytywanie...' : <Wrapper list>
					<Book src={this.state.data.info.src} information='WSiP - język angielski zawodowy w logistyce i spedycji. Zeszyt ćwiczeń'/>
					<Separator />
					<ListElementWrapper>
						<Header />
						<ListWrapper>
							{/* <Term>
								<Date>{`${moment(this.state.plannedDate, "YYYYMMDD").format('LL')}r`}</Date>
								<Line>|</Line>
								<Time>{moment(this.state.plannedDate, "YYYYMMDD").add(11, 'hours').add(40, 'minutes').fromNow()}</Time>
							</Term> */}
							{/* <Advertisement>
								<Unit
									book='jezyk-angielski-zawodowy'
									number = '6'
									title = 'Materiały i towary'
								/>
							</Advertisement> */}

							{Object.values(this.state.data).slice(1).map(({title, parts}, unitIndex) => {
								return(
									<>
										<UnitTitle>Rozdział {unitIndex + 1} - {title}</UnitTitle>
										<UnitList>
											{Object.values(parts).length === 1 ? '' : Object.values(parts).map(({name}, partIndex) => {
												return(
													<UnitListItem>
														<Arrow />
														<PageLink list="true" to={`${this.state.bookName}/rozdzial-${unitIndex + 1}.${partIndex + 1}/${this.flat(name)}`}>{name}</PageLink>
														<Go to={`${this.state.bookName}/spis-slowek/rozdzial-${unitIndex + 1}.${partIndex + 1}/${this.flat(name)}`}>
															<FaListUl />
														</Go>
														{}
													</UnitListItem>
												)
											})}
											<UnitListItem>
												<Star />
												<PageLink list="true" to={`${this.state.bookName}/rozdzial-${unitIndex + 1}/test`}>&nbsp;Test&nbsp;</PageLink>
												<Star />
												<Go to={`${this.state.bookName}/spis-slowek/rozdzial-${this.props.number}/test`}>
													<FaListUl />
												</Go>
											</UnitListItem>
										</UnitList>
									</>
								)
							})}

						</ListWrapper>
					</ListElementWrapper>
				</Wrapper>}
			</>
		);
	}
}

export default List