// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'

const AnswerElement = styled.div`
	font-weight: bold;
	color: green;
`

class Answer extends Component {
	render() {
		return (
			<AnswerElement>
				{this.props.text}
			</AnswerElement>
		);
	}
}

export default Answer