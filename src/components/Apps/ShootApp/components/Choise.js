// BASIC
import React, { Component } from 'react'
import styled, {keyframes, css} from 'styled-components'

const ChoiseComponent = styled.div`
	width: 90vw;
	max-width: 800px;
	height: 100px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 10px;
	margin: 20px;
`
const fade = keyframes`
	from {
		opacity: 0;
		transform: scale(0.8);
	}
	to {
		opacity: 1;
		transform: scale(1);
	}
`
const Answer = styled.div`
	padding: 9px;
	border: 2px solid var(--color-decorative);
	border-radius: 50px;
	font-weight: bold;
	text-overflow: ellipsis;
	overflow: hidden; 
	white-space: nowrap;
	transition: all 0.2s ease;
	animation: ${fade} 0.2s ease;
	:hover {
		cursor: pointer;
		background-color: var(--color-decorative);
		color: var(--color-bg);
	}
`

class Choise extends Component {
	render() {
		const words = this.props.words;
		return (
			<ChoiseComponent>
				{this.props.words.length !== 0 && <>
					<Answer onClick={this.props.check}>{words[0][this.props.translation]}</Answer>
					<Answer onClick={this.props.check}>{words[1][this.props.translation]}</Answer>
					<Answer onClick={this.props.check}>{words[2][this.props.translation]}</Answer>
					<Answer onClick={this.props.check}>{words[3][this.props.translation]}</Answer>
				</>}
			</ChoiseComponent>
		);
	}
}

export default Choise