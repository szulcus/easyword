// BASIC
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import ban from '../../../Images/ban.png'

const PremiumComponent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 100%;
`
const Title = styled.h1`
	font-size: 40px;
	margin: 20px 0;
`
const Image = styled.img`
	display: block;
	min-width: 250px;
	width: calc(90vmin - 225px);
	max-width: 500px;
	margin: 0 auto;
	/* @media(max-height: 550px) {
		height: calc(100px + 2hmin);
	} */
	@media (max-width: 350px) {
		min-width: 200px;
	}
	@media(max-height: 450px) {
		display: none;
	}
`
const Description = styled.p`
	max-width: 1000px;
	text-align: center;
	font-size: 20px;
	margin: 40px 0 80px 0;
`
const Contact = styled.a`
	text-decoration: none;
	color: var(--color-main);
	transition: all 0.3s ease;
	font-weight: bold;
	:hover {
		opacity: 0.5;
	}
`
const Go = styled(Link)`
	text-decoration: none;
	color: var(--color-main);
	transition: all 0.3s ease;
	font-weight: bold;
	:hover {
		opacity: 0.5;
	}
`

class Premium extends Component {
	render() {
		return (
			<PremiumComponent>
				<Title>Masz bana!</Title>
				<Image src={ban} />
				<Description>Najprawdopodobniej działałeś niezgodnie z <Go to="/regulamin">regulaminem</Go>. Zostałeś zablokowany na {this.props.time}. W razie wątpliwości skontaktuj się z <Contact href="https://m.me/szulcus/" rel="noopener noreferrer" target="_blank">twórcą</Contact>.</Description>
			</PremiumComponent>
		);
	}
}

export default Premium