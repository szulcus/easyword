// BASIC
import React, { Component } from 'react'
import styled, { css } from 'styled-components'
// IMAGES
import loader from '../Images/arrows/loader.svg'
import LeftArrow from '../Images/arrows/left-arrow.svg'
import RightArrow from '../Images/arrows/right-arrow.svg'
// ANIMATIONS
import '../Styles/main-keyframes.css'

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

const Loader = styled.img`
	display: none;
	width: 10vmin;
	animation: load 2s infinite linear;
	${props =>
		props.preview &&
		css`
			display: block;
		`
	}
`

const Arrows = styled.div`
	display: none;
	position: relative;
	width: 500px;
	height: 500px;
	${props =>
		props.isLoaded &&
		css`
			display: flex;
		`
	}
`

const Arrow = styled.img`
	width: 100%;
	position: absolute;
	left: 0;
	top: 0;
	transform: translateX(-100px);
	:first-child {
		animation: arrow 1.5s both;
	}
	:last-child {
		animation: arrow 1.3s both;
	}
`

class Preloader extends Component {
	state = {
		isLoaded: false,
		isLoading: true,
		hide: false,
		delete: false
	}
	componentWillReceiveProps() {
		this.setState({isLoaded: true, isLoading: false})
		setTimeout(() => {this.setState({hide: true})}, 1000);
		setTimeout(() => {this.setState({delete: true})}, 1300);
	}
	render() {
		return (
			<PreloaderElement hide={this.state.hide} delete={this.state.delete}>
				<Loader src={loader} preview={this.state.isLoading} />
				<Arrows isLoaded={this.state.isLoaded}>
					<Arrow src={LeftArrow} />
					<Arrow src={RightArrow} />
				</Arrows>
			</PreloaderElement>
		);
	}
}

export default Preloader