// BASIC
import React, { Component } from 'react'
import styled, { css, keyframes } from 'styled-components'
import {au, db} from '../../../Config/firebase'
// ICONS
import {FaTimes} from 'react-icons/fa'

const PictureWrapper = styled.div`
	position: relative;
	/* animation: scaleIn 1s ease; */
	@media(max-height: 450px) {
		display: none;
	}
`
const Delete = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	right: 0;
	width: 40px;
	height: 40px;
	background-color: #000000;
	border-bottom-left-radius: 20px;
	border-top-right-radius: 10px;
	transition: transform 0.5s ease; 
	z-index: 2;
	:hover {
		cursor: pointer;
	}
	${props =>
		props.up &&
		css`
			transform: translateY(-35px) rotate(45deg);
			background: transparent;
		`
	}
`

const Cross = styled(FaTimes)`
	display: block;
	color: gold;
	transition: all ease 0.2s;
`
const fadeIn = keyframes`
	from {
		opacity: 0;
		transform: scale(0.9);
	}
	to {
		opacity: 1;
		transform: scale(1);
	}
`
const fadeOut = keyframes`
	from {
		opacity: 1;
		transform: scale(1);
	}
	to {
		opacity: 0;
		transform: scale(0.9);
	}
`
const PictureElement = styled.div`
	position: relative;
	width: 90vw;
	height: calc(100vw / 1.618);
	max-height: calc(100vh - 341px);
	margin: 0 auto;
	border-radius: 20px;
	overflow: hidden;
	@media(min-width: 700px) {
		width: 647px;
		height: 400px;
	}
	::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: url("${props => props.src}") no-repeat center top;
		background-size: cover;
		animation: ${fadeIn} 0.5s ease;
		${props =>
			props.hideImage &&
			css`
				animation: ${fadeOut} 0.5s both;
			`
		}
	}
`
const animation = keyframes`
	0% {
		opacity: 0;
		transform: translate(-50%, -50%) rotate(-5deg) scale(0.7);
	}
	20% {
		opacity: 1;
		transform: translate(-50%, -50%) rotate(0) scale(1.2);
	}
	50% {
		opacity: 1;
		transform: translate(-50%, -50%) rotate(0) scale(1);
	}
	80% {
		opacity: 1;
		transform: translate(-50%, -50%) rotate(0) scale(1.1);
	}
	100% {
		opacity: 0;
		transform: translate(-50%, -50%) rotate(5deg) scale(0.7);
	}
`
const Animation = styled.img`
	opacity: 0;
	position: absolute;
	top: 50%;
	left: 50%;
	width: 60%;
	height: 60%;
	transform: translate(-50%, -50%);
	animation: ${animation} 0.7s 0.3s ease;
`

class Picture extends Component {
	state = {
		hideImage: true,
		selected: 'default'
	}
	componentDidMount() {
		au.onAuthStateChanged(user => {
			if (user) {
				db.collection('users').doc(user.uid).onSnapshot(snap => {
					this.setState({
						selected: snap.data().info.packs.selected
					});
				})
			}
		})
	}
	handleCross = () => {
		!this.state.hideImage ? this.setState({hideImage: true}) : this.setState({hideImage: false});
		// this.state.hideImage && setTimeout(console.log('object'), 300);
	}
	render() {
		return (
			<PictureWrapper>
				<Delete up={this.state.hideImage} onClick={this.handleCross}>
					<Cross />
				</Delete>
				<PictureElement src={this.props.src} hideImage={this.state.hideImage} />
				{this.props.animation === 'great' ? <Animation src={require(`../../Images/icons/packs/${this.state.selected}-pack/${this.state.selected}2.svg`)} /> : this.props.animation === 'good' ? <Animation src={require(`../../Images/icons/packs/${this.state.selected}-pack/${this.state.selected}1.svg`)} /> : ''}
			</PictureWrapper>
		);
	}
}

export default Picture