// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
// COMPONENTS
import LogIn from '../../Login/components/LogIn'
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
				<LogIn onClick={this.props.onClick} />
				<Button onClick={this.props.onBack}>Pomiń</Button>
			</InformationElement>
		);
	}
}

export default Information