// BASIC
import React, { Component } from 'react'
import styled, {css} from 'styled-components'
// FUNCTIONS
// import expand from '../../../../../Scripts/Functions/expand()'
import HamburgerList from './components/HamburgerList';

const Menu = styled.button`
	display: flex;
	border: 0;
	background-color: transparent;
	padding: 0;
	cursor: pointer;
	:focus {
		outline: none;
	}
`

const Container = styled.span`
	display: flex;
	align-items: center;
	position: relative;
	width: 35px;
	height: 30px;
`
const Bars = styled.span`
	position: absolute;
	width: 35px;
	height: 2px;
	background-color: var(--color-secondary);
	transition: transform 220ms ease-in-out;
	:before,
	:after {
		display: block;
		position: absolute;
		width: 35px;
		height: 2px;
		background-color: var(--color-secondary);
		content: '';
	}
	:before {
		top: -12px;
		transition: top 100ms 250ms ease-in, transform 220ms ease-in-out;
	}
	:after {
		bottom: -12px;
		transition: bottom 100ms 250ms ease-in, transform 220ms ease-in-out;
	}
	${props =>
		props.active &&
		css`
			transform: rotate(225deg);
			transition: transform 220ms 120ms ease-in-out;
			:before {
				top: 0;
				transition: top 100ms ease-out;
			}
			:after {
				bottom: 0;
				transform: rotate(-90deg);
				transition: bottom 100ms ease-out, transform 220ms 120ms ease-in-out;
			}
		`
	}
`

const HamburgerElement = styled.div`
	display: block;
	position: relative;
`

class Hamburger extends Component {
	state = {
		active: false
	}
	expand = () => {
		!this.state.active ? this.setState({active: true}) : this.setState({active: false})
	}
	render() {
		return (
			<HamburgerElement>
				<Menu onClick={this.expand}>
					<Container>
						<Bars active={this.state.active} />
					</Container>
				</Menu>
				{/* <HamburgerList active={this.state.active} /> */}
			</HamburgerElement>
		);
	}
}

export default Hamburger