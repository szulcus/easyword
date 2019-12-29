// BASIC
import React, { Component } from 'react'
import styled, {css} from 'styled-components'
import Lottie from 'react-lottie'
// DATA
import backgroundAnimationData from '../../lotties/data/11309-change-background-color.json'
import gift from '../../lotties/data/427-happy-birthday.json'
import badge from '../../lotties/data/9639-badge-earned.json'
// KEYFRAMES
import {flyGift, speedAbsoluteBack, speedAbsoluteEntry} from '../../Styles/Keyframes'

const CongratulationsElement = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	display: none;
	justify-content: center;
	align-items: center;
	background-color: var(--color-dark);
	z-index: 3;
	${props =>
		props.preview &&
		css`
			display: flex;
	`};
`

const Message = styled.div`
	width: 50vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 30px;
`
const Animations = styled.div`
	position: relative;
	width: 30vw;
	height: 30vw;
`

class Congratulations extends Component {
	state = {
		open: false
	}
	open = () => {
		this.setState({open: true});
		// setTimeout(() => alert('?'), 2180)
	}
	render() {
		const Animation = styled.div`
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			${props =>
				props.gift &&
				css`
					/* animation: ${flyGift} 3s linear infinite; */
					${props =>
						props.open &&
						css`
							animation: ${speedAbsoluteBack} 1s both;
					`};
					:hover {
						cursor: pointer;
					}
			`}
			${props =>
				props.badge &&
				css`
					display: none;
					animation: ${speedAbsoluteEntry} 1s both;
					${props =>
						props.preview &&
						css`
							display: block;
					`};
			`}
			${props =>
				props.points &&
				css`
					font-size: 70px;
					font-weight: bold;
					color: var(--color-light);
					display: none;
					animation: ${speedAbsoluteEntry} 1s both;
					${props =>
						props.preview &&
						css`
							display: block;
					`};
			`}
		`
		return (
			<CongratulationsElement preview={this.props.preview}>
				<Animations>
					<Animation gift open={this.state.open} onClick={this.open}>
						<Lottie
							options={{
								loop: false,
								autoplay: true,
								animationData: gift,
							}}
							isStopped={this.state.open}
						/>
					</Animation>
					<Animation badge preview={this.state.open}>
						<Lottie options={{
							loop: false,
							autoplay: true,
							animationData: badge,
						}} />
					</Animation>
					<Animation points preview={this.state.open}>{this.props.prize}</Animation>
				</Animations>
				<Message>
					<h1>Brawo!!</h1>
					{/* <p>Uzyskałeś już 50 punktów! W nagrodę dostajesz 50 punktów doswiadczenia. Przyda ci się teraz chwila odpoczynku, ale możesz tez kontunuować i zawalczyc o nowy rekord</p> */}
					<p>Uzyskałeś już {this.props.level} poziom! W nagrodę dostajesz {this.props.prize} punktów doswiadczenia. Chcesz zawalczyć o kolejną nagrodę?</p>
					<button onClick={this.props.onClick}>Kontynuuj</button>
				</Message>
			</CongratulationsElement>
		);
	}
}

export default Congratulations