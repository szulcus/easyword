// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
// ICONS
import {FaReply} from 'react-icons/fa'

const EditorElement = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
	height: 100vh;
	background-color: var(--color-dark);
`
const Main = styled.div`
	display: flex;
	align-items: space-evenly;
	width: 100%;
`
const Div = styled.div`
	display: flex;
	flex-direction: column;
	width: 90vw;
	max-width: 300px;
	padding: 30px;
	border: 1px solid var(--color-secondary);
	border-radius: 10px;
`

class Editor extends Component {
	render() {
		return (
			<EditorElement>
				<h1>Edytuj</h1>
				<Main>
					<Div>
						<label htmlFor="word1">Pierwsze słówko</label>
						<input type="text" name="word1"/>
						<label htmlFor="word2">Drugie słówko</label>
						<input type="text" name="word2"/>
						<label htmlFor="word3">trzecie słówko</label>
						<input type="text" name="word3"/>
					</Div>
					<Div>
						<label htmlFor="translation1">Pierwsze tłumaczenie</label>
						<input type="text" name="translation1"/>
						<label htmlFor="translation2">Drugie tłumaczenie</label>
						<input type="text" name="translation2"/>
						<label htmlFor="translation3">trzecie tłumaczenie</label>
						<input type="text" name="translation3"/>
					</Div>
				</Main>
				<FaReply />
			</EditorElement>
		);
	}
}

export default Editor