// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
// Images
import hello from '../../Images/hello.png'

const InformationElement = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background-color: var(--color-background);
	z-index: 10;
	font-size: 20px;
`

const Title = styled.h1`

`

const Image = styled.img`
	display: block;
	height: 50vh;
	max-height: 500px;
	max-height: 90vw;

	max-width: 500px;
	max-width: 90vw;
	margin: 0 auto;
	@media(max-height: 550px) {
		height: calc(100px + 2hmin);
	}
	@media(max-height: 450px) {
		display: none;
	}
`
const LogIn = styled.button`
	position: relative;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	line-height: 150%;
	min-width: 180px;
	font-size: 20px;
	padding: 10px 20px;
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
		transform: translateX(-250px) skewX(-15deg);
		z-index: 2;
	}
	:hover {
		cursor: pointer;
		background-color: ${props => `var(--color-${props.color})`};
		color: ${props => props.color === 'main' || props.color === 'decorative' ? 'var(--color-bg)' : 'var(--color-light)'};
		::before {
			transform: translate(250px) skewX(-15deg);
			opacity: 0.6;
			transition: all 0.7s ease;
		}
	}
	:focus {
		outline: none
	}
`
const Button = styled.button`
	border: none;
	background-color: inherit;
	padding: 14px 28px;
	font-size: 20px;
	cursor: pointer;
	display: inline-block;
	color: var(--color-secondary);
	font-family: 'Ubuntu', sans-serif;
	outline: none;
	transition: color 0.2s ease;
	:hover {
		color: var(--color-primary);
	}
`

class Information extends Component {
	render() {
		return (
			<InformationElement>
				<Title>Zapisz swoje osiągnięcia!</Title>
				<Image src={hello} />
				<LogIn color="main" onClick={this.props.onClick}>Zaloguj się</LogIn>
				<Button onClick={this.props.onBack}>Pomiń</Button>
			</InformationElement>
		);
	}
}

export default Information