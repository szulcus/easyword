// BASIC
import React, { Component } from 'react'
import styled, { css, keyframes } from 'styled-components'

const fade = keyframes`
	from {
		opacity: 0;
		transform: scale(0.9);
	}
	to {
		opacity: 1;
		transform: scale(1);
	}
`
const AnswerElement = styled.div`
	font-weight: bold;
	transition: color 0.2s ease;
	animation: ${fade} 0.3s ease;
	${props =>
		props.hide &&
		css`
			display: none;
		`
	};
`

class Answer extends Component {
	render() {
		return (
			<AnswerElement id="answer" hide={this.props.hideAnswer}>
				{this.props.text}
			</AnswerElement>
		);
	}
}

export default Answer