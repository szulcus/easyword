// BASIC
import React, { Component } from 'react'
import styled, {css} from 'styled-components'
import Lottie from 'react-lottie'
// DATA
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
	flex-direction: column;
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
// const Message = styled.div`
// 	width: 50vw;
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	justify-content: center;
// 	padding: 30px;
// `
const Animations = styled.div`
	/* position: relative; */
	width: 100vw;
`

class Congratulations extends Component {
	state = {
		open: false,
		load: false
	}
	componentDidMount() {
		setTimeout(() => {
			this.setState({load: true})
		}, 5000);
	}
	open = () => {
		this.setState({open: true});
		setTimeout(() => {
			this.setState({open: false})
			this.props.onClick();
		}, 2180)
	}
	render() {
		const Animation = styled.div`
			display: flex;
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
					{this.state.load ? <Animation gift open={this.state.open} onClick={this.open}>
						<Lottie
							options={{
								loop: false,
								// autoplay: false,
								animationData: gift,
							}}
						/>
					</Animation> : ''}
					<Animation badge preview={this.state.open}>
						<Lottie options={{
							loop: false,
							autoplay: true,
							animationData: badge,
						}} />
					</Animation>
					<Animation points='true' preview={this.state.open}>{this.props.prize}</Animation>
				</Animations>
			</CongratulationsElement>
		);
	}
}

export default Congratulations