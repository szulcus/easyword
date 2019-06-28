// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
// FUNCTIONS
import expand from '../../../../../Scripts/Functions/expand()'
import HamburgerList from './components/HamburgerList';

const HamburgerElement = styled.div`
	display: block;
	position: relative;

	.hamburger {
		display: flex;
		border: 0;
		background-color: transparent;
		cursor: pointer;
	}

	.hamburger__container {
		display: flex;
		align-items: center;
		position: relative;
		width: 35px;
		height: 30px;
	}

	.hamburger__bars {
		position: absolute;
		width: 35px;
		height: 2px;
		background-color: gray;
		transition: transform 220ms ease-in-out;
	}

	.hamburger__bars:before,
	.hamburger__bars:after {
		display: block;
		position: absolute;
		width: 35px;
		height: 2px;
		background-color: gray;
		content: '';
	}

	.hamburger__bars:before {
		top: -12px;
		transition: top 100ms 250ms ease-in, transform 220ms ease-in-out;
	}

	.hamburger__bars:after {
		bottom: -12px;
		transition: bottom 100ms 250ms ease-in, transform 220ms ease-in-out;
	}

	.hamburger--active .hamburger__bars {
		transform: rotate(225deg);
		transition: transform 220ms 120ms ease-in-out;
	}

	.hamburger--active .hamburger__bars:before {
		top: 0;
		transition: top 100ms ease-out;
	}

	.hamburger--active .hamburger__bars:after {
		bottom: 0;
		transform: rotate(-90deg);
		transition: bottom 100ms ease-out, transform 220ms 120ms ease-in-out;
	}

	.hamburger:focus,
	.hamburger__container:focus {
		outline: none;
	}
`

class Hamburger extends Component {
	render() {
		return (
			<HamburgerElement>
				<button onClick={expand} id="hamburger-menu" className="hamburger" aria-label="Menu">
						<span className="hamburger__container" tabIndex="-1">
							<span className="hamburger__bars"></span>
						</span>
				</button>
				<HamburgerList />
			</HamburgerElement>
		);
	}
}

export default Hamburger