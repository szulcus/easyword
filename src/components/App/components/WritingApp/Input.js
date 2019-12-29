// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
// Components
import Level from './Level'

const InputComponent = styled.div`
	position: relative;
`
const InputElement = styled.input`
	width: 90vw;
	margin: 10px 0;
	padding: 5px;
	border: 0;
	border-radius: 20px;
	font-size: 20px;
	text-align: center;
	outline: none;
	font-family: 'Ubuntu', sans-serif;
	opacity: 0.85;

	::placeholder {
		transition: all 0.2s ease-in-out;
		color: var(--color-secondary);
	}

	:focus::placeholder {
		opacity: 0;
		transform: scale(0);
	}
	@media(min-width: 550px) {
		width: 500px;
		margin: 15px 0;
	}
`

const LevelElement = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	/* z-index: -1; */
	width: 90vw;
	height: 32.2px;
	border-radius: 20px;
	overflow: hidden;
	margin: 10px 0;
	@media(min-width: 550px) {
		width: 500px;
		margin: 15px 0;
	}
`
const Progress = styled.progress`
	width: 100%;
	height: 100%;
	border: 0;
	border-radius: 20px;
	::-webkit-progress-bar {
		background-color: black;
	}
	::-webkit-progress-value {
		background-color: white;
		transition: width 0.2s ease;
	}
`

class Input extends Component {
	render() {
		return (
			<InputComponent>
				<LevelElement>
					{/* <Progress value={this.props.points} max="30" /> */}
					<Progress value={this.props.points} max={this.props.max} />
				</LevelElement>
				<InputElement onChange={this.props.onChange} onKeyPress={this.props.press} placeholder="Wpisz tłumaczenie" type="text" autoComplete="off" />
			</InputComponent>
		);
	}
}

export default Input