// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'

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

class Input extends Component {
	render() {
		return (
			<InputElement onChange={this.props.onChange} onKeyPress={this.props.press} placeholder="Wpisz tłumaczenie" type="text" autoComplete="off" />
		);
	}
}

export default Input