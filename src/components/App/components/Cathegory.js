// BASIC
import React, { Component } from 'react'
import styled from 'styled-components';

const CathegoryItem = styled.div`
	width: calc(100vw - 20px);
	margin: 0 10px 10px 10px;
	color: var(--color-secondary);
	text-align: center;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	text-transform: uppercase;
`

class Cathegory extends Component {
	render() {
		return (
			<CathegoryItem>
				{this.props.content}
			</CathegoryItem>
		);
	}
}

export default Cathegory