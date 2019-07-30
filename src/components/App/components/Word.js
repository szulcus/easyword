// BASIC
import React, { Component } from 'react'
import styled from 'styled-components';

const WordElement = styled.div`
	margin: 5px 0;
	color: var(--color-highlighted);
	font-weight: bold;
`

class Word extends Component {
	render() {
		return (
				<WordElement>
					{this.props.content}
				</WordElement>
		);
	}
}

export default Word