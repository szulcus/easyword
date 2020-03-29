// BASIC
import React, { Component } from 'react'
import styled from 'styled-components';

const WordElement = styled.div`
	margin: 5px 0;
	padding: 0 30px;
	text-align: center;
	color: var(--color-highlighted);
	font-weight: bold;
`

class Word extends Component {
	render() {
		return (
				<WordElement>
					{this.props.content ? this.props.content : '...'}
				</WordElement>
		);
	}
}

export default Word