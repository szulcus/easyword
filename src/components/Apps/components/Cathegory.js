// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'

const CathegoryItem = styled.div`
	width: 100%;
	margin: 0 10px 10px 10px;
	color: var(--color-secondary);
	text-align: center;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	text-transform: uppercase;
	font-size: 20px;
`

class Cathegory extends Component {
	render() {
		return (
			<CathegoryItem>
				{this.props.content ? this.props.content : '...'}
			</CathegoryItem>
		);
	}
}

export default Cathegory