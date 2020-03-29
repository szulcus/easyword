// BASIC
import React, { Component } from 'react'
import styled, { css, keyframes } from 'styled-components'
// IMAGES
import LeftArrow from './Images/arrows/left-arrow.svg'
import RightArrow from './Images/arrows/right-arrow.svg'

const PreloaderElement = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	width: 100vw;
	height: 100vh;
	background-color: black;
	z-index: 100;
	${props =>
		props.hide &&
		css`
			animation: hide 0.3s both;
		`
	}
	${props =>
		props.delete &&
		css`
			display: none;
		`
	}
`

const Arrows = styled.div`
	display: flex;
	position: relative;
	width: 500px;
	height: 500px;
`
const arrow =  keyframes`
	0% {
		opacity: 0;
		transform: scale(0.8) translateX(-200px);
	}
	50% {
		opacity: 1;
		transform: scale(1);
	}
	100% {
		transform: translateX(0);
		opacity: 1;
	}
`
const Arrow = styled.img`
	width: 100%;
	position: absolute;
	left: 0;
	top: 0;
	transform: translateX(-100px);
	:first-child {
		animation: ${arrow} 1.5s both;
	}
	:last-child {
		animation: ${arrow} 1.3s both;
	}
`

class Preloader extends Component {
	state = {
		hide: false,
		delete: false
	}
	componentDidMount() {
		setTimeout(() => {this.setState({hide: true})}, 1000);
		setTimeout(() => {this.setState({delete: true})}, 1300);
	}
	render() {
		return (
			<PreloaderElement hide={this.state.hide} delete={this.state.delete}>
				<Arrows>
					<Arrow src={LeftArrow} />
					<Arrow src={RightArrow} />
				</Arrows>
			</PreloaderElement>
		);
	}
}

export default Preloader