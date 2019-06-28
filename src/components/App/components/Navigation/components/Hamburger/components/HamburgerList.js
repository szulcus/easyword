// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
// STYLES
import { Back } from '../../../../../../Styles/Components'
// KEYFRAMES
import '../../../../../../Keyframes/main-keyframes.css'

const HamburgerListElement = styled.ul`
	position: absolute;
	top: -12px;
	right: 70px;
	display: flex;
	transition: 0.5s;
	transform: translateX(100vw);

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
			font-size: 17px;
			list-style-type: none;
			cursor: pointer;
			text-transform: uppercase;
			color: var(--color-highlighted);
		
			:hover {
				animation: opacity 1s ease;
			}

			:nth-child(1) {
				transition-duration: 0.3s;
			}

			:nth-child(2) {
				transition-duration: 0.4s;
			}

			:nth-child(3) {
				transition-duration: 0.5s;
			}

			:nth-child(4) {
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
`

class HamburgerList extends Component {
	render() {
		return (
			<HamburgerListElement id="hamburger-list">
				<HamburgerListItem id="hamburger-list-element-1">Angielski</HamburgerListItem>
				<HamburgerListItem id="hamburger-list-element-2">Polski</HamburgerListItem>
				<HamburgerListItem id="hamburger-list-element-3">Przemiennie</HamburgerListItem>
				<HamburgerListItem id="back"><Back to='/macmillan' /></HamburgerListItem>
			</HamburgerListElement>
		);
	}
}

export default HamburgerList