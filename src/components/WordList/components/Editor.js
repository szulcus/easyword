// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'

const EditorElement = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100vh;
	background-color: var(--color-dark);
`

class Editor extends Component {
	render() {
		return (
			<EditorElement>
				<h1>Edytuj</h1>
				<label htmlFor="word1">Pierwsze tłumaczenie</label>
				<input type="text" name="word1"/>
				<label htmlFor="word2">Pierwsze tłumaczenie</label>
				<input type="text" name="word2"/>
				<label htmlFor="word3">Pierwsze tłumaczenie</label>
				<input type="text" name="word3"/>
			</EditorElement>
		);
	}
}

export default Editor