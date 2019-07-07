// BASIC
import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const AnswerElement = styled.div`
	font-weight: bold;
	transition: color 0.2s ease;
	animation: scale 0.3s ease;
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