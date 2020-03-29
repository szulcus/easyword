// BASIC
import React, { Component } from 'react'
import styled, {css, keyframes} from 'styled-components'
import {Link} from 'react-router-dom'
import {au, db} from '../../../../Config/firebase'
// ICONS
import {MdExitToApp} from 'react-icons/md'
import {FaGamepad, FaTimes} from 'react-icons/fa'
import {GiTwoCoins} from 'react-icons/gi'
import {TiChartLine, TiTick} from 'react-icons/ti'
//images
import exchange from '../../../Images/icons/exchange.svg'
import premium from '../../../Images/icons/reward.svg'

const fade = keyframes`
	from {
		opacity: 0;
		transform: scale(0.9);
	}
	to {
		opacity: 1;
		transform: scale(1);
	}
`
const ShopComponent = styled.div`
	display: none;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	flex-direction: column;
	padding: 0 50px;
	align-items: center;
	background-color: var(--color-dark);
	z-index: 5;
	font-size: 20px;
	color: var(--color-primary);
	animation: ${fade} 0.3s ease;
	${props =>
		props.show &&
		css`
			display: flex;
		`
	};
`
const ShopTitle = styled.h1`
	font-size: 30px;
	margin: 20px 0;
`
const Info = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	margin-bottom: 50px;
`
const Coins = styled.div``
const Text = styled.span`
	display: none;
	@media (min-width: 600px) {
		display: inline;
	}
`
const CoinIcon = styled(GiTwoCoins)`
	transform: translateY(3px);
`
const Experience = styled.div``
const ExperienceIcon = styled(TiChartLine)`
	transform: translateY(3px);
`
const Number = styled.strong`
	color: var(--color-decorative);
`
const AllProducts = styled.div`
	width: 90vw;
	max-width: 1000px;
	display: flex;
	flex-direction: column;
	align-items: center;
	max-height: calc(100vh - 250px);
	overflow-y: scroll;
	/* background-color: gray; */
	::-webkit-scrollbar {
		width: 0;
	}
`
const ProductsTitle = styled.h2`
	filter: blur(0);
`
const Products = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`
const animation1 = keyframes`
	0% {
		opacity: 0;
		transform: translate(-50%, -50%) rotate(-5deg) scale(0.7);
	}
	10% {
		opacity: 1;
		transform: translate(-50%, -50%) rotate(0) scale(1.2);
	}
	25% {
		opacity: 1;
		transform: translate(-50%, -50%) rotate(0) scale(1);
	}
	40% {
		opacity: 1;
		transform: translate(-50%, -50%) rotate(0) scale(1.1);
	}
	50% {
		opacity: 0;
		transform: translate(-50%, -50%) rotate(5deg) scale(0.7);
	}
	100% {
		opacity: 0;
	}
`
const animation2 = keyframes`
	0% {
		opacity: 0;
	}
	50% {
		opacity: 0;
		transform: translate(-50%, -50%) rotate(-10deg) scale(0.7);
	}
	60% {
		opacity: 1;
		transform: translate(-50%, -50%) rotate(0) scale(1.2);
	}
	75% {
		opacity: 1;
		transform: translate(-50%, -50%) rotate(0) scale(1);
	}
	90% {
		opacity: 1;
		transform: translate(-50%, -50%) rotate(0) scale(1.1);
	}
	100% {
		opacity: 0;
		transform: translate(-50%, -50%) rotate(10deg) scale(0.7);
	}
`
const ProductItem = styled.img`
	position: absolute;
	top: 40%;
	left: 50%;
	width: 60%;
	height: 60%;
	display: block;
	transform: translate(-50%, -50%);
	:first-child {
		opacity: 0;
	}
	${props =>
		props.first &&
		css`
			animation: ${animation1} 2s infinite both;
		`
	};
	${props =>
		props.second &&
		css`
			animation: ${animation2} 2s infinite both;
		`
	};
`
const ProductMenu = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	position: absolute;
	bottom: 10px;
	left: 50%;
	transform: translateX(-50%);
	font-size: 25px;
	text-align: center;
`
const Cost = styled.div`
	width: 80px;
	color: var(--color-decorative);
	font-size: 18px;
	font-weight: bold;
`
const Buy = styled.button`
	position: relative;
	display: none;
	justify-content: space-evenly;
	align-items: center;
	line-height: 150%;
	width: 100px;
	font-size: 20px;
	padding: 10px;
	padding: 10px;
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
		transform: translateX(-110px) skewX(-15deg);
		z-index: 2;
	}
	:hover {
		cursor: pointer;
		background-color: ${props => `var(--color-${props.color})`};
		color: ${props => props.color === 'main' || props.color === 'decorative' ? 'var(--color-bg)' : 'var(--color-light)'};
		::before {
			transform: translate(110px) skewX(-15deg);
			opacity: 0.6;
			transition: all 0.7s ease;
		}
	}
	:focus {
		outline: none
	}
`
const Back = styled(FaTimes)`
	display: none;
	width: 80px;
	font-size: 30px;
	color: var(--color-decorative);
	:hover {
		cursor: pointer;
	}
`
const Product = styled.div`
	position: relative;
	min-width: 150px;
	height: 150px;
	margin: 10px;
	border: 2px solid var(--color-secondary);
	border-radius: 20px;
	background-color: var(--color-bg);
	transition: transform 0.3s ease;
	/* kupione */
	${props =>
		props.purchased.includes(props.id) &&
		css`
			${Cost} {
				display: none;
			}
			${ProductItem} {
				top: 50%;
			}
		`
	}
	/* ustawiony */
	${props =>
		props.selected === props.id &&
		css`
			border: 2px solid var(--color-primary);
			${Cost} {
				display: block;
			}
			${ProductItem} {
				top: 40%;
			}
		`
	}
	/* gdy coś wybrano */
	${props =>
		!props.show &&
		css`
			:hover {
				cursor: pointer;
			}
		`
	}
	/* w tle */
	${props =>
		props.show && props.show !== props.id &&
		css`
			filter: blur(10px);
			${ProductsTitle} {
				filter: blur(10px);
			}
		`
	}
	/* aktywny produkt */
	${props =>
		props.show === props.id &&
		css`
			filter: blur(0);
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 80vmin;
			height: 80vmin;
			z-index: 2;
			${Cost} {
				font-size: 20px;
				@media (min-width: 400px) {
					font-size: 25px;
				}
			}
			${Buy} {
				display: flex;
				font-size: 18px;
				padding: 5px;
				@media (min-width: 400px) {
					font-size: 20px;
					padding: 10px;
				}
			}
			${Back} {
				display: block;
				font-size: 25px;
				@media (min-width: 400px) {
					font-size: 30px;
				}
			}
			${ProductItem} {
				top: 40%;
			}
			${ProductMenu} {
				min-height: 50px;
			}
			@media (min-width: 600px) {
				width: 60vmin;
				height: 60vmin;
			}
			${props =>
				props.selected === props.id &&
				css`
					${Cost} {
						display: none;
					}
				`
			}
		`
	}
`
const Exit = styled.div`
	position: absolute;
	bottom: 30px;
	width: 100%;
	display: flex;
	justify-content: space-evenly;
`
const Icon = styled.div`
	font-size: 40px;
	color: var(--color-decorative);
	transition: 0.3s ease;
	:hover {
		cursor: pointer;
		opacity: 0.5;
		transform: scale(0.99);
	}
`

class Shop extends Component {
	state = {
		userId: null,
		userPackages: {
			purchased: ['default', 'nerd'],
			selected: 'default',
		},
		packs: ['default', 'cat', 'cool', 'crazy', 'devil', 'nerd', 'nice'],
		animations: {
			catAnimation: false,
			coolAnimation: false,
			crazyAnimation: false,
			devilAnimation: false,
		},
		showProduct: ''
	}
	componentDidMount() {
		au.onAuthStateChanged(user => {
			if (user) {
				console.log(user);
				db.collection('users').doc(user.uid).onSnapshot(snap => {
					this.setState({
						userId: user.uid,
						userPackages: {
							purchased: Object.values(snap.data().info.packs.purchased),
							selected: snap.data().info.packs.selected
						}
					})
				})
				// db.collection('users').get().then(snaps => {
				// 	snaps.forEach(snap => {
				// 		db.collection('users').doc(snap.data().info.uid).update({
				// 			'info.packs': {
				// 				purchased: ['default'],
				// 				selected: 'default',
				// 			}
				// 		})
				// 	})
				// })
			}
		})
	}
	play = (e) => {
		if (!this.state.showProduct) {
			this.setState({
				animations: {
					[`${e.currentTarget.id}Animation`]: true
				}
			})
		}
	}
	stop = () => {
		if (!this.state.showProduct) {
			this.setState({animations: {}})
		}
	}
	showProduct = (e) => {
		if (!this.state.showProduct) {
			this.play(e);
			this.setState({
				showProduct: e.currentTarget.id
			})
		}
	}
	backProduct = (e) => {
		const element = e.currentTarget.parentElement.parentElement;
		if (this.state.showProduct === element.id) {
			this.stop();
			this.setState({
				showProduct: ''
			})
		}
		// console.log(e.currentTarget);
	}
	buy = (e) => {
		e.persist();
		if (this.state.userId) {
			db.collection('users').doc(this.state.userId).get().then(snap => {
				const purchased = snap.data().info.packs.purchased;
				const coins = snap.data().info.coins;
				if (coins >= 50) {
					db.collection('users').doc(this.state.userId).update({
						'info.coins': coins - 50,
						'info.packs.purchased': purchased.concat(e.target.parentElement.parentElement.id)
					})
				}
				else {
					alert('Brak wystarczających środków na koncie!')
				}
			})
		}
	}
	set = (e) => {
		e.persist();
		const elementId = e.target.parentElement.parentElement.id;
		if (this.state.userId) {
			db.collection('users').doc(this.state.userId).update({
				'info.packs.selected': elementId
			})
		}
	}
	render() {
		return (
			<ShopComponent show={this.props.show}>
				<ShopTitle>EasyShop</ShopTitle>
				<Info>
					<Coins>
						<Text>EasyCoins:</Text> <Number>{this.props.coins} <CoinIcon /></Number>
					</Coins>
					<Experience>
						<Text>Doświadczenie:</Text> <Number>{this.props.experience} <ExperienceIcon /></Number>
					</Experience>
				</Info>
				<AllProducts>
					<ProductsTitle>Paczki</ProductsTitle>
					<Products>
						{this.state.packs.map(product => {
							return (
								<Product purchased={this.state.userPackages.purchased} selected={this.state.userPackages.selected} id={product} show={this.state.showProduct} onClick={this.showProduct} onMouseOver={this.play} onMouseOut={this.stop}>
									<ProductItem first={this.state.animations[`${product}Animation`]} src={require(`../../../Images/icons/packs/${product}-pack/${product}1.svg`)} />
									<ProductItem second={this.state.animations[`${product}Animation`]} src={require(`../../../Images/icons/packs/${product}-pack/${product}2.svg`)} />
									<ProductMenu>
										<Cost>{!this.state.userPackages.purchased.includes(product) ? <>50 <CoinIcon/></> : <TiTick />}</Cost>
										{this.state.userPackages.selected === product ? '' : (!this.state.userPackages.purchased.includes(product) ? <Buy onClick={this.buy} color="decorative">Kup</Buy> : <Buy onClick={this.set} color="decorative">Ustaw</Buy>)}
										<Back onClick={this.backProduct} />
									</ProductMenu>
								</Product>
							)
						})}
					</Products>
					<ProductsTitle>Paczki</ProductsTitle>
					<Products>
						{this.state.packs.map(product => {
							return (
								<Product purchased={this.state.userPackages.purchased} selected={this.state.userPackages.selected} id={product} show={this.state.showProduct} onClick={this.showProduct} onMouseOver={this.play} onMouseOut={this.stop}>
									<ProductItem first={this.state.animations[`${product}Animation`]} src={require(`../../../Images/icons/packs/${product}-pack/${product}1.svg`)} />
									<ProductItem second={this.state.animations[`${product}Animation`]} src={require(`../../../Images/icons/packs/${product}-pack/${product}2.svg`)} />
									<ProductMenu>
										<Cost>{!this.state.userPackages.purchased.includes(product) ? <>50 <CoinIcon/></> : <TiTick />}</Cost>
										{this.state.userPackages.selected === product ? '' : (!this.state.userPackages.purchased.includes(product) ? <Buy onClick={this.buy} color="decorative">Kup</Buy> : <Buy onClick={this.set} color="decorative">Ustaw</Buy>)}
										<Back onClick={this.backProduct} />
									</ProductMenu>
								</Product>
							)
						})}
					</Products>
				</AllProducts>
				<Exit>
					<Link to='/'>
						<Icon>
							<FaGamepad />
						</Icon>
					</Link>
					<Icon>
						<MdExitToApp onClick={this.props.onBack} />
					</Icon>
				</Exit>
			</ShopComponent>
		);
	}
}

export default Shop