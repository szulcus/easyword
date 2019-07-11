// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'

const InputsWrapper = styled.div`
	display: flex;
	width: 90vw;
	margin: 10px 0;
	@media(min-width: 700px) {
		flex-direction: row;
		width: 600px;
		margin: 0;
	}
	/* @media(min-width: 550px) {
		flex-direction: row;
		width: 600px;
	} */
`

const InputElement = styled.input`
	width: 30vw;
	padding: 5px;
	border: 0;
	border-radius: 20px;
	font-size: 20px;
	text-align: center;
	outline: none;
	font-family: 'Ubuntu', sans-serif;

	::placeholder {
		transition: all 0.2s ease-in-out;
		color: var(--color-secondary);
	}

	:focus::placeholder {
		opacity: 0;
		transform: scale(0);
	}
	@media(min-width: 700px) {
		flex-direction: row;
		width: 200px;
		margin: 15px 2px;

	}
`

class Input extends Component {
	render() {
		return (
			<InputsWrapper>
				<InputElement id="form1" onChange={this.props.onChange1} onKeyPress={this.props.press} placeholder="1 forma" type="text" autoComplete="off" />
				<InputElement id="form2" onChange={this.props.onChange2} onKeyPress={this.props.press} placeholder="2 forma" type="text" autoComplete="off" />
				<InputElement id="form3" onChange={this.props.onChange3} onKeyPress={this.props.press} placeholder="3 forma" type="text" autoComplete="off" />
			</InputsWrapper>
		);
	}
}

export default Input