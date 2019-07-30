// BASIC
import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
// ICONS
import { faTimes } from '@fortawesome/free-solid-svg-icons'
// STYLES
import { Icon } from '../../Styles/Components'

library.add(faTimes);

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
	/* border: 3px dotted gold; */
	/* border-radius: 20px; */
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

const Cross = styled(Icon)`
	display: block;
	color: gold;
	transition: all ease 0.2s;
`

class Delete extends Component {
	render() {
		return (
			<DeleteElement up={this.props.up} onClick={this.props.onClick}>
				<Cross icon={['fas', 'times']} />
			</DeleteElement>
		);
	}
}

export default Delete