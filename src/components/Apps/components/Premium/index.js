// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
import no from '../../../Images/no.png'
import {Link} from 'react-router-dom'

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
				<Title>Brak konta premium!</Title>
				<Image src={no} />
				<Description>Nie posidasz uprawnień do tej witryny. Przejdź do <Go to={'/easy-shop'}>sklepu</Go>, by kupić konto premium i cieszyć się grą w {this.props.game}</Description>
			</PremiumComponent>
		);
	}
}

export default Premium