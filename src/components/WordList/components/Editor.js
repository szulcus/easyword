// BASIC
import React, { Component } from 'react'
import styled, {css} from 'styled-components'
// ICONS
import {FaReply} from 'react-icons/fa'

const EditorElement = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: none;
	align-items: center;
	flex-direction: column;
	width: 100%;
	height: 100vh;
	background-color: var(--color-dark);
	${props =>
		props.show &&
		css`
			display: flex;
		`
	}
`
const Main = styled.form`
	display: flex;
	justify-content: space-evenly;
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
	text-align: center;
`
const Label = styled.label`

`

class Editor extends Component {
	state = {
		data: {
			word1: null,
			word2: null,
			word3: null,
			translation1: null,
			translation2: null,
			translation3: null
		}
	}
	log = (e) => {
		e.preventDefault()
		console.log(this.state.data);
	}
	setVariable = (e) => {
		e.persist()

		// this.setState(prevState => ({
		// 	user: {
		// 		...prevState.user,
		// 		isLoggedIn: true,
		// 		email: user.email
		// 	}
		// }))

		this.setState(
			
			(prevState) => {
				return {
					data: {
						...prevState.data,
						[e.target.id]: e.target.value
					}
				};
			},
			
			() => {
				// this.check();
				// document.querySelectorAll("input").value = '';
				// document.getElementById('word1').value = '';
			}
			
			);
	}
	render() {
		return (
			<EditorElement show={this.props.show}>
				<h1>Edytuj</h1>
				<Main onSubmit={this.log}>
					<Div>
						<Label htmlFor="word1">1 słówko</Label>
						<input onChange={this.setVariable} type="text" name="word1" id="word1"/>
						<Label htmlFor="word2">2 słówko</Label>
						<input onChange={this.setVariable} type="text" name="word2" id="word2"/>
						<Label htmlFor="word3">3 słówko</Label>
						<input onChange={this.setVariable} type="text" name="word3" id="word3"/>
					</Div>
					<Div>
						<Label htmlFor="translation1">1 tłumaczenie</Label>
						<input onChange={this.setVariable} type="text" name="translation1" id="translation1"/>
						<Label htmlFor="translation2">2 tłumaczenie</Label>
						<input onChange={this.setVariable} type="text" name="translation2" id="translation2"/>
						<Label htmlFor="translation3">3 tłumaczenie</Label>
						<input onChange={this.setVariable} type="text" name="translation3" id="translation3"/>
					</Div>
				<button type='submit'>Click</button>
				</Main>
				<FaReply onClick={this.props.back} />
			</EditorElement>
		);
	}
}

export default Editor