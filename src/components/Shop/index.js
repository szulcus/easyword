// BASIC
import React, { Component } from 'react'
import styled, {css, keyframes} from 'styled-components'
import {Link} from 'react-router-dom'
import {au, db} from '../../Config/firebase'
// COMPONENTS
import Preloader from '../Preloader'
// ICONS
import {MdExitToApp} from 'react-icons/md'
import {FaGamepad, FaTimes, FaInfinity} from 'react-icons/fa'
import {GiTwoCoins} from 'react-icons/gi'
import {TiChartLine, TiTick} from 'react-icons/ti'
//images
import exchange from '../Images/icons/exchange.svg'
import exchangeIcon from '../Images/icons/exchange-icon.svg'
import answer from '../Images/icons/answer.svg'
import answerIcon from '../Images/icons/answer-icon.svg'
import up from '../Images/icons/up.svg'
import diamond from '../Images/icons/diamond.svg'
// import premium from '../../Images/icons/reward.svg'

const ShopComponent = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	padding: 0 50px;
	align-items: center;
	background-color: var(--color-dark);
	font-size: 20px;
	color: var(--color-primary);
`
const ShopTitle = styled.h1`
	font-size: 30px;
	margin: 20px 0;
`
const Info = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	margin-bottom: 30px;
`
const Items = styled.div`
	display: flex;
	flex-direction: column;
`
const Item = styled.div``
const Text = styled.span`
	display: none;
	@media (min-width: 600px) {
		display: inline;
	}
`
const CoinIcon = styled(GiTwoCoins)`
	transform: translateY(3px);
`
const Icon = styled.img`
	height: 16px;
	${props =>
		props.premium &&
		css`
			height: 20px;
		`
	};
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
	display: flex;
	flex-direction: column;
	align-items: center;
	max-height: calc(100vh - 220px);
	overflow-y: scroll;
	/* background-color: gray; */
	::-webkit-scrollbar {
		width: 0;
	}
`
const ProductsTitle = styled.h2`
	margin: 0;
	margin-top: 20px;
	filter: blur(0);
	${props =>
		props.blur &&
		css`
			filter: blur(10px);
		`
	};
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
const changes = keyframes`
	0% {
		transform: translate(-50%, -50%) rotate(0) scale(1);
	}
	20% {
		transform: translate(-50%, -50%) rotate(20deg) scale(1.2);
	}
	50% {
		transform: translate(-50%, -50%) rotate(0) scale(0.9);
	}
	80% {
		transform: translate(-50%, -50%) rotate(10deg) scale(1.1);
	}
	100% {
		transform: translate(-50%, -50%) rotate(0) scale(1);
	}
`
const answers = keyframes`
	0% {
		transform: translate(-50%, -50%) scale(1) rotate(0);
	}
	20% {
		transform: translate(-50%, -50%) scale(1.2) rotate(-10deg);
	}
	50% {
		transform: translate(-50%, -50%) scale(0.9) rotate(0);
	}
	80% {
		transform: translate(-50%, -50%) scale(1.1) rotate(-5deg);
	}
	100% {
		transform: translate(-50%, -50%) scale(1) rotate(0);
	}
`
const upper = keyframes`
	0% {
		transform: translate(-50%, -50%) scale(1);
	}
	20% {
		transform: translate(-50%, -55%) scale(1);
	}
	50% {
		transform: translate(-50%, -45%) scale(1);
	}
	80% {
		transform: translate(-50%, -60%) scale(1);
	}
	100% {
		transform: translate(-50%, -50%) scale(1);
	}
`
const premium = keyframes`
	0% {
		transform: translate(-50%, -50%) scale(1);
	}
	/* 20% {
		transform: translate(-50%, -40%) scale(1);
	} */
	50% {
		transform: translate(-50%, -45%) scale(1.15);
	}
	/* 80% {
		transform: translate(-50%, -40%) scale(1);
	} */
	100% {
		transform: translate(-50%, -50%) scale(1);
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
	${props =>
		props.rotate &&
		css`
			animation: ${changes} 1s infinite both;
		`
	}
	${props =>
		props.scale &&
		css`
			animation: ${answers} 1s infinite both;
		`
	}
	${props =>
		props.up &&
		css`
			animation: ${upper} 1s infinite both;
		`
	}
	${props =>
		props.premium &&
		css`
			animation: ${premium} 1s infinite both;
		`
	}
	${props =>
		props.small &&
		css`
			width: 50%;
			height: 50%;
		`
	};
	${props =>
		props.hide &&
		css`
			opacity: 0;
		`
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
const Quantity = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 35%;
	height: 35%;
	background-color: var(--color-bg);
	border: 2px solid var(--color-primary);
	border-radius: 100%;
	font-weight: bold;
	color: var(--color-decorative);

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
	width: 90px;
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
	width: 90px;
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
	/* overflow: hidden; */
	::before {
		opacity: 0;
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 20px;
		box-shadow: 0 0 30px var(--color-secondary);
		transition: opacity 0.2s ease-in;
	}
	${props =>
		props.premium &&
		css`
		border: 2px solid skyblue;
			${Quantity} {
				border: none;
				transform: translate(-50%, -55%) scale(0.9);
			}
		`
	}
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
			${Quantity} {
				font-size: 50px;
			}
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
	bottom: 20px;
	width: 100%;
	display: flex;
	justify-content: space-evenly;
`
const Play = styled(FaGamepad)`
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
		info: {
			coins: 0,
			experience: 0
		},
		userId: null,
		userPackages: {
			purchased: ['default', 'nerd'],
			selected: 'default',
		},
		packs: ['default', 'cat', 'cool', 'crazy', 'devil', 'nerd', 'nice'],
		langChanges: [{changes: 1, cost: 10}, {changes: 3, cost: 20}, {changes: 5, cost: 30}, {changes: 10, cost: 50}],
		answers: [{answers: 1, cost: 3}, {answers: 5, cost: 10}, {answers: 50, cost: 50}, {answers: 150, cost: 100}],
		experience: [{xp: 1000, cost: 100}, {xp: 3000, cost: 200}, {xp: 5000, cost: 300}, {xp: 10000, cost: 500}],
		premium: [{hours: 3, cost: 50}, {hours: 6, cost: 70}, {hours: 12, cost: 120}, {hours: 24, cost: 200}, {hours: '∞', cost: 1000}],
		animations: {
			catAnimation: false,
			coolAnimation: false,
			crazyAnimation: false,
			devilAnimation: false,
			langChanges1Animation: false,
			langChanges3Animation: false,
			langChanges5Animation: false,
			langChanges10Animation: false,
			answers1Animation: false,
			answers5Animation: false,
			answers50Animation: false,
			answers100Animation: false,
			experience1000Animation: false,
			experience3000Animation: false,
			experience5000Animation: false,
			experience10000Animation: false,
		},
		showProduct: ''
	}
	componentDidMount() {
		au.onAuthStateChanged(user => {
			if (user) {
				console.log(user);
				db.collection('users').doc(user.uid).onSnapshot(snap => {
					console.log(snap.data()['easy-word'].experience);
					console.log(snap.data().info.coins);
					this.setState({
						info: {
							coins: snap.data().info.coins,
							langChanges: snap.data()['easy-word'].langChanges,
							answers: snap.data()['easy-word'].answers,
							experience: snap.data()['easy-word'].experience
						},
						userId: user.uid,
						userPackages: {
							purchased: Object.values(snap.data().info.packs.purchased),
							selected: snap.data().info.packs.selected
						}
					})
				});
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
		const name = e.target.parentElement.parentElement.id;
		const number = name.replace(/[a-zA-Z]+/g, '');
		if (this.state.userId) {
			db.collection('users').doc(this.state.userId).get().then(snap => {
				const coins = snap.data().info.coins;
				if (name.includes('langChanges')) {
					console.log('lang');
					const object = this.state.langChanges.filter(({changes}) => changes.toString() === number);
					console.log(object[0].cost);
					if (coins >= object[0].cost) {
						const langChanges = snap.data()['easy-word'].langChanges;
						db.collection('users').doc(this.state.userId).update({
							'info.coins': coins - object[0].cost,
							'easy-word.langChanges': langChanges + object[0].changes
						})
					}
					else {
						alert('Brak wystarczających środków na koncie!')
					}
				}
				else if (name.includes('answers')) {
					console.log('answers');
					const object = this.state.answers.filter(({answers}) => answers.toString() === number);
					console.log(object[0].cost);
					if (coins >= object[0].cost) {
						const answers = snap.data()['easy-word'].answers;
						db.collection('users').doc(this.state.userId).update({
							'info.coins': coins - object[0].cost,
							'easy-word.answers': answers + object[0].answers
						})
					}
					else {
						alert('Brak wystarczających środków na koncie!')
					}
				}
				else if (name.includes('experience')) {
					console.log('xp');
					const object = this.state.experience.filter(({xp}) => xp.toString() === number);
					console.log(object[0].cost);
					if (coins >= object[0].cost) {
						const experience = snap.data()['easy-word'].experience;
						db.collection('users').doc(this.state.userId).update({
							'info.coins': coins - object[0].cost,
							'easy-word.experience': experience + object[0].experience
						})
					}
					else {
						alert('Brak wystarczających środków na koncie!')
					}
				}
				else if (name.includes('premium')) {
					console.log('premium');
					const object = this.state.premium.filter(({hours}) => hours.toString() === number);
					console.log(object[0].cost);
					if (coins >= object[0].cost) {
						// const experience = snap.data()['easy-word'].experience;
						// db.collection('users').doc(this.state.userId).update({
						// 	'info.coins': coins - object[0].cost,
						// 	'easy-word.experience': experience + object[0].experience
						// })
						alert('Niestety ta funkcja jest jeszcze niedostępna. Wyczekuj kolejnych aktualizacji, aby być na bieżąco ;)')
					}
					else {
						alert('Brak wystarczających środków na koncie!')
					}
				}
				else {
					if (coins >= 50) {
						const purchased = snap.data().info.packs.purchased;
						db.collection('users').doc(this.state.userId).update({
							'info.coins': coins - 50,
							'info.packs.purchased': purchased.concat(name)
						})
						this.set(e);
					}
					else {
						alert('Brak wystarczających środków na koncie!')
					}
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
			<>
				<Preloader />
				<ShopComponent>
					<ShopTitle>EasyShop</ShopTitle>
					<Info>
						<Item>
							<Text>EasyCoins:</Text> <Number>{this.state.info.coins} <CoinIcon /></Number>
						</Item>
						<Item>
							<Number>{this.state.info.langChanges} <Icon src={exchangeIcon} /></Number>
						</Item>
						<Item>
							<Number>{this.state.info.answers} <Icon src={answerIcon} /></Number>
						</Item>
						<Experience>
							<Text>Doświadczenie:</Text> <Number>{this.state.info.experience} <ExperienceIcon /></Number>
						</Experience>
					</Info>
					<AllProducts>
						<ProductsTitle blur={this.state.showProduct}>Paczki</ProductsTitle>
						<Products>
							{this.state.packs.map(product => {
								return (
									<Product purchased={this.state.userPackages.purchased} selected={this.state.userPackages.selected} id={product} show={this.state.showProduct} onClick={this.showProduct} onMouseOver={this.play} onMouseOut={this.stop}>
										<ProductItem hide first={this.state.animations[`${product}Animation`]} src={require(`../Images/icons/packs/${product}-pack/${product}1.svg`)} />
										<ProductItem second={this.state.animations[`${product}Animation`]} src={require(`../Images/icons/packs/${product}-pack/${product}2.svg`)} />
										<ProductMenu>
											<Cost>{!this.state.userPackages.purchased.includes(product) ? <>50 <CoinIcon/></> : <TiTick />}</Cost>
											{this.state.userPackages.selected === product ? '' : (!this.state.userPackages.purchased.includes(product) ? <Buy onClick={this.buy} color="decorative">Kup</Buy> : <Buy onClick={this.set} color="decorative">Ustaw</Buy>)}
											<Back onClick={this.backProduct} />
										</ProductMenu>
									</Product>
								)
							})}
						</Products>
						<ProductsTitle blur={this.state.showProduct}>
							<Icon premium src={diamond} /> Konto premium <Icon premium src={diamond} />
						</ProductsTitle>
						<Products>
							{this.state.premium.map(({hours, cost}) => {
								return (
									<Product premium purchased={this.state.userPackages.purchased} selected={this.state.userPackages.selected} id={`premium${hours}`} show={this.state.showProduct} onClick={this.showProduct} onMouseOver={this.play} onMouseOut={this.stop}>
										<ProductItem premium={this.state.animations[`premium${hours}Animation`]} src={diamond} />
										<Quantity>{isNaN(hours) ? <FaInfinity /> : hours.toString().replace(/[0-9]+/, x => `${x}H`)}</Quantity>
										<ProductMenu>
											<Cost>{cost} <CoinIcon/></Cost>
											<Buy onClick={this.buy} color="decorative">Kup</Buy>
											<Back onClick={this.backProduct} />
										</ProductMenu>
									</Product>
								)
							})}
						</Products>
						<ProductsTitle blur={this.state.showProduct}>Zmiany języka</ProductsTitle>
						<Products>
							{this.state.langChanges.map(({changes, cost}) => {
								return (
									<Product purchased={this.state.userPackages.purchased} selected={this.state.userPackages.selected} id={`langChanges${changes}`} show={this.state.showProduct} onClick={this.showProduct} onMouseOver={this.play} onMouseOut={this.stop}>
										<ProductItem rotate={this.state.animations[`langChanges${changes}Animation`]} src={exchange} />
										<Quantity>{changes}</Quantity>
										<ProductMenu>
											<Cost>{cost} <CoinIcon/></Cost>
											<Buy onClick={this.buy} color="decorative">Kup</Buy>
											<Back onClick={this.backProduct} />
										</ProductMenu>
									</Product>
								)
							})}
						</Products>
						<ProductsTitle blur={this.state.showProduct}>Podpowiedzi</ProductsTitle>
						<Products>
							{this.state.answers.map(({answers, cost}) => {
								return (
									<Product purchased={this.state.userPackages.purchased} selected={this.state.userPackages.selected} id={`answers${answers}`} show={this.state.showProduct} onClick={this.showProduct} onMouseOver={this.play} onMouseOut={this.stop}>
										<ProductItem scale={this.state.animations[`answers${answers}Animation`]} small src={answer} />
										<Quantity>{answers}</Quantity>
										<ProductMenu>
											<Cost>{cost} <CoinIcon/></Cost>
											<Buy onClick={this.buy} color="decorative">Kup</Buy>
											<Back onClick={this.backProduct} />
										</ProductMenu>
									</Product>
								)
							})}
						</Products>
						<ProductsTitle blur={this.state.showProduct}>Doświadczenie</ProductsTitle>
						<Products>
							{this.state.experience.map(({xp, cost}) => {
								return (
									<Product purchased={this.state.userPackages.purchased} selected={this.state.userPackages.selected} id={`experience${xp}`} show={this.state.showProduct} onClick={this.showProduct} onMouseOver={this.play} onMouseOut={this.stop}>
										<ProductItem up={this.state.animations[`experience${xp}Animation`]} src={up} />
										<Quantity>{xp.toString().replace(/000$/, 'K')}</Quantity>
										<ProductMenu>
											<Cost>{cost} <CoinIcon/></Cost>
											<Buy onClick={this.buy} color="decorative">Kup</Buy>
											<Back onClick={this.backProduct} />
										</ProductMenu>
									</Product>
								)
							})}
						</Products>
					</AllProducts>
					<Exit>
						<Link to='/'>
							<Play />
						</Link>
						{/* <Icon>
							<MdExitToApp onClick={() => {}} />
						</Icon> */}
					</Exit>
				</ShopComponent>
			</>
		);
	}
}

export default Shop