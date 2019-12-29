// BASIC
import React, { Component } from 'react'
import styled, { css, keyframes } from 'styled-components'
import latinize from 'latinize';
import camelCase from 'camelcase'
// ICONS
import { GiAchievement } from 'react-icons/gi'
import { FaUser, FaHome, FaUsers, FaHamburger, FaShoppingBasket, FaPlane, FaTheaterMasks, FaRunning, FaHeartbeat, FaUserShield, FaCity, FaReply } from 'react-icons/fa'
import { MdSchool, MdWork } from 'react-icons/md'
import { GiChemicalDrop, GiHighGrass } from 'react-icons/gi'
// STYLES
import { Wrapper } from '../../Styles/Components'
import { speedAbsoluteEntry, speedAbsoluteBack } from '../../Styles/Keyframes'

const AchievementsComponent = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: none;
	flex-direction: column;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background-color: var(--color-dark);
	text-align: center;
	${props =>
			props.preview &&
			css`
				display: flex;
	`};
`
const Title = styled.h1`
	color: gold;
`
const Loading = styled.div`
	width: 100%;
`
const moveBooks = keyframes`
	from {
		width: 50%;
	}
	to {
		width: 90%;
	}
`
const returnBooks = keyframes`
	from {
		width: 90%;
	}
	to {
		width: 50%;
	}
`
const BooksWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 50%;
	${props =>
		props.preview &&
		css`
			animation: ${moveBooks} 0.3s both;
	`};
	${props =>
		props.hide &&
		css`
			animation: ${returnBooks} 0.3s both;
	`};
`
const Book = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 350px;
`
const BookImage = styled.img`
	display: block;
	height: 200px;
	margin: 30px;
	border-radius: 10px;
	:hover {
		cursor: pointer;
	}
`
const Units = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`
const Unit = styled.div`
	/* :nth-child(1) {
		transform: translateY(-60px);
	}*/
`
const UnitIcon = styled.div`
	display: block;
	margin: 5px;
	font-size: 30px;
	transition: all 0.2s ease;
	:hover {
		cursor: pointer;
		opacity: 0.5;
		transform: scale(0.98);
	}
`
const List = styled.ul`
	display: none;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	list-style-type: none;
	width: 500px;
	border: 1.5px solid var(--color-decorative);
	border-radius: 20px;
	animation: ${speedAbsoluteEntry} 0.2s both;
	${props =>
		props.back &&
		css`
			animation: ${speedAbsoluteBack} 0.2s both;
	`};
`
const ListItem = styled.li`
	/* display: none; */
`
const Points = styled.strong`
	color: white
	${props =>
			props.empty &&
			css`
				color: firebrick;
	`};
	${props =>
			props.max &&
			css`
				color: green;
	`};
	${props =>
			props.globalMax &&
			css`
				color: gold;
	`};
`
const Back = styled(FaReply)`
	position: absolute;
	bottom: 30px;
	font-size: 30px;
	transition: all 0.2s ease;
	:hover {
		cursor: pointer;
		opacity: 0.5;
		transform: scale(0.98) translateX(-5px);
	}
`
class Achievements extends Component {
	state = {
		bookMove: false,
		bookReturn: false
	}
	getImageLink = (name) => {
		if (name === 'Macmillan') {
			return 'https://www.macmillan.pl/components/com_ssshop/cache/500x500/9788376218496.png'
		}
		else if (name === 'WSiP') {
			return 'https://sklep.wsip.pl/uploads/tx_evosenk/covers/upload_temp_tF8lhB.jpg'
		}
	}
	getIcon = name => {
		if (name === 'Człowiek') {
			return <FaUser />
		}
		else if (name === 'Dom') {
			return <FaHome />
		}
		else if (name === 'Szkoła') {
			return <MdSchool />
		}
		else if (name === 'Praca') {
			return <MdWork />
		}
		else if (name === 'Życie rodzinne i towarzyskie' || name === 'Wśród przyjaciół') {
			return <FaUsers />
		}
		else if (name === 'Żywienie') {
			return <FaHamburger />
		}
		else if (name === 'Zakupy i usługi') {
			return <FaShoppingBasket />
		}
		else if (name === 'Podróżowanie i turystyka' || name === 'Podróże') {
			return <FaPlane />
		}
		else if (name === 'Kultura') {
			return <FaTheaterMasks />
		}
		else if (name === 'Sport') {
			return <FaRunning />
		}
		else if (name === 'Zdrowie') {
			return <FaHeartbeat />
		}
		else if (name === 'Nauka i technika') {
			return <GiChemicalDrop />
		}
		else if (name === 'Świat przyrody') {
			return <GiHighGrass />
		}
		else if (name === 'W stolicy Polski') {
			return <FaCity />
		}
		else if (name === 'Państwo i społeczeństwo') {
			return <FaUserShield />
		}
		else {
			return '-'
		}
	}
	previewList = (name) => {
			this.setState({bookMove: true, bookReturn: false})
			document.querySelectorAll('.list').forEach((list) => list.style.display = 'none');
			document.getElementById(name).style.display = 'block';
	}
	close = () => {
		if (this.state.bookMove) {
			this.setState({bookMove: false, bookReturn: true})
			document.querySelectorAll('.list').forEach((list) => list.style.display = 'none');
		}
		else {
			this.props.back()
		}
	}
	render() {
		return (
			<AchievementsComponent preview={this.props.preview}>
				<Title><GiAchievement /> Twoje osiągnięcia <GiAchievement /></Title>
				<BooksWrapper preview={this.state.bookMove} hide={this.state.bookReturn}>
					{!this.props.points ? (<Loading>Wczytywanie...</Loading>) : (Object.values(this.props.points.books).map(({name, units}) => {
						let globalMaxValue = 0;
						return (
							<Book key={name}>
								<BookImage src={this.getImageLink(name)} alt={name} title={name}/>
								<Units>
									{Object.values(units).map(({title, parts}) => {
										let maxValue = 0;
										return (
												<Unit key={title}>
													<UnitIcon onClick={() => this.previewList(title)} title={title}>{this.getIcon(title)}</UnitIcon>
													<List id={title} className="list" back={this.state.bookReturn}>
														<h1>{title}</h1>
															{Object.values(parts).map(({name, points}) => {
																if(points > maxValue) {
																	maxValue = points;
																	if(maxValue > globalMaxValue) {
																		globalMaxValue = maxValue;
																	}
																}
																return (
																	<ListItem key={`${title} - ${name}`}>
																		{name}: {points === 0 ? <Points empty>{points}</Points> : <Points>{points}</Points>}
																	</ListItem>
																)
															})}
														<p>Rekord w rozdziale: <Points max="true">{maxValue}</Points></p>
														<p>Twój rekord: <Points globalMax>{globalMaxValue}</Points></p>
													</List>
												</Unit>
										)
									})}
								</Units>
							</Book>
						)
					}))}
				</BooksWrapper>
				<Back onClick={this.close} />
			</AchievementsComponent>
		);
	}
}

export default Achievements