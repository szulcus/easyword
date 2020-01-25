// BASIC
import React, { Component } from 'react'
import styled, { css } from 'styled-components'
// ICONS
import { FaTimes } from 'react-icons/fa'


const DeleteElement = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	right: 0;
	width: 40px;
	height: 40px;
	background-color: #000000;
	border-bottom-left-radius: 20px;
	border-top-right-radius: 10px;
	transition: transform 0.5s ease; 
	z-index: 2;
	:hover {
		cursor: pointer;
	}
	${props =>
		props.up &&
		css`
			transform: translateY(-35px) rotate(45deg);
			background: transparent;
		`
	}
`

const Cross = styled(FaTimes)`
	display: block;
	color: gold;
	transition: all ease 0.2s;
`

class Delete extends Component {
	render() {
		return (
			<DeleteElement up={this.props.up} onClick={this.props.onClick}>
				<Cross />
			</DeleteElement>
		);
	}
}

export default Delete