// BASIC
import React, { Component } from 'react'
import styled from 'styled-components';

const WordItem = styled.div`
	color: var(--color-highlighted);
	font-weight: bold;
`

class Word extends Component {
	render() {
		return (
			<WordItem>
				{this.props.content}
			</WordItem>
		);
	}
}

export default Word