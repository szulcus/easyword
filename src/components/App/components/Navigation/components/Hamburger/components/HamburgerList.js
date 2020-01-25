// BASIC
import React, { Component } from 'react'
import styled, {css} from 'styled-components'
// ICONS
import { FaReply } from 'react-icons/fa'
import { MdSettings } from 'react-icons/md'
import pl from '../../../../../../Images/icons/pl.svg'
import uk from '../../../../../../Images/icons/uk.svg'
import random from '../../../../../../Images/icons/pl-uk.svg'
// KEYFRAMES
import '../../../../../../Keyframes/main-keyframes.css'
// STYLES
import {Go} from '../../../../../../Styles/Components'

const HamburgerListElement = styled.ul`
	position: absolute;
	top: -12px;
	right: 70px;
	display: flex;
	transition: 0.5s;
	transform: translateX(100vw);
	margin: 10px;
	padding: 0;
	align-items: center;
	@media(max-width: 550px) {
		top: 20vh;
		right: 20vw;
		width: 60vw;
		height: 60vh;
		transform: translateY(-100vh);
		flex-direction: column;
		justify-content: center;
		align-items: center;
		top: 0;
	}
`
const HamburgerListItem = styled.li`
	margin: 0 15px;
	font-size: 25px;
	list-style-type: none;
	cursor: pointer;
	text-transform: uppercase;
	color: var(--color-highlighted);
	:hover {
		animation: opacity 1s ease;
	}
	:nth-child(1) {
		transition-duration: 0.2s;
	}
	:nth-child(2) {
		transition-duration: 0.3s;
	}
	:nth-child(3) {
		transition-duration: 0.4s;
	}
	:nth-child(4) {
		transition-duration: 0.5s;
	}
	:nth-child(5) {
		transition-duration: 0.6s;
	}
	@media(max-width: 700px) {
		margin: 0 10px;
		:hover {
			animation: none;
		}
		:nth-child(1) {
			transition-duration: 0.6s;
		}
		:nth-child(2) {
			transition-duration: 0.5s;
		}
		:nth-child(3) {
			transition-duration: 0.4s;
		}
		:nth-child(4) {
			transition-duration: 0.3s;
		}
	}
	@media(max-width: 550px) {
		font-size: 20px;
		width: 100%;
		padding: 30px 0;
		border-bottom: 1px solid gold;
		text-align: center;
		:last-child {
			border-bottom: 0;
		}
	}
	@media(max-width: 350px) {
		padding: 20px 0;
	}
	${props =>
		props.active &&
		css`
			transform: translateX(-100vw);
		`
	}
`
const Img = styled.img`
	height: 30px;
`

class HamburgerList extends Component {
	render() {
		return (
			<HamburgerListElement id="hamburger-list">
				<HamburgerListItem active={this.props.active}>
					<Img src={pl} alt="ddd"/>
				</HamburgerListItem>
				<HamburgerListItem active={this.props.active}>
					<Img src={uk} alt="ddd"/>
				</HamburgerListItem>
				<HamburgerListItem active={this.props.active}>
					<Img src={random} alt="ddd"/>
				</HamburgerListItem>
				<HamburgerListItem active={this.props.active}>
					<Go to='/macmillan'>
						<FaReply />
					</Go>
				</HamburgerListItem>
				<HamburgerListItem active={this.props.active}>
					<MdSettings />
				</HamburgerListItem>
			</HamburgerListElement>
		);
	}
}

export default HamburgerList