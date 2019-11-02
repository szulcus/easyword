// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
// STYLES
import Global from '../Styles/Global'
import './components/codeFormat.css'

const EditorElement = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	min-width: 320px;
	width: 100vw;
	height: 100vh;
	background-color: var(--color-dark);
	padding: 10px;
	font-weight: bold;
`

const Form = styled.form`
	width: 100%;
	height: 50vh;
	min-height: 300px;
	color: var(--color-primary);
`
const Code = styled.code`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	width: 100%;
	height: 50vh;
	background: none;
	color: var(--color-primary);
	font-size: 18px;
	font-weight: bold;
	font-family: 'Consolas', monospace;
	overflow-y: scroll;
	::-webkit-scrollbar {
		width: 3px;
	}

	::-webkit-scrollbar-track {
		background: var(--color-dark); 
		border-radius: 3px;
	}
	::-webkit-scrollbar-thumb {
		background: var(--color-secondary);
	}
`

const Input = styled.input`
	background: none;
	outline: none;
	border: none;
	border-bottom: 1px solid var(--color-decorative);
	padding: 0 10px;
	font-size: 20px;
	color: var(--color-white);

	::placeholder {
		transition: all 0.2s ease;
		color: var(--color-secondary);
	}
	
	:focus::placeholder {
		opacity: 0;
		transform: translateX(30px);
	}
`

const Submit = styled.input`
	display: block;
	margin: 0 auto;
	padding: 10px;
	background: none;
	border: none;
	color: var(--color-decorative);
	font-size: 30px;
	font-weight: bold;
	outline: none;
	transition: transform 0.2s ease;
	:hover {
		transform: scale(1.5);
	}
	
`

const Variable = styled.span`
	color: #569CD6;
`

const Name = styled.span`
	color: #9CDCFE;
`

const CheckBox = styled.label`
	display: block;
	margin: 5px;
`

class Editor extends Component {
	state = {
		typeOfWords: 'words1_PersonalData',
		word1: ``,
		translation1: ``,
		level: `basic`,
		type: `type`,
		image: `url`,
		inputsDisabled: {
			first: false,
			second: false,
			third: false,
			fourth: false,
			fifth: false,
		}
	}
	setVariable = (e) => {
		e.persist()

		this.setState(
			
			() => {
				return {
					[e.target.id]: e.target.value
				};
			},
			
			() => {
				// this.check();
				// document.querySelectorAll("input").value = '';
				// document.getElementById('word1').value = '';
			}
			
			);
	}
	write = (e) => {
		document.getElementById('text').innerHTML +=
		`
			&emsp;<span class="second-brackets">{</span><br/>
			&emsp;&emsp;<span class="name">word1</span>: <span class="string">\`${this.state.word1}\`</span>,<br/>
			&emsp;&emsp;<span class="name">translation1</span>: <span class="string">\`${this.state.translation1}\`</span>,<br/>
			&emsp;&emsp;<span class="name">level</span>: <span class="string">\`${this.state.level}\`</span>,<br/>
			&emsp;&emsp;<span class="name">type</span>: <span class="string">\`${this.state.type}\`</span>,<br/>
			&emsp;&emsp;<span class="name">image</span>: <span class="string">\`${this.state.image}\`</span>,<br/>
			&emsp;<span class="second-brackets">}</span>,<br/>
		`
		console.log(this.state.code);
		const inputs = document.querySelectorAll("input[type='text']");
		for (const input of inputs) {
			input.value = '';
		}
		e.preventDefault();
	}
	handleChange = (e) => {
		
	}
	focus = (e) => {
		let number = Number(e.target.name) -1;
		let inputs = document.querySelectorAll('input')

		if (e.key === 'Enter' && e.shiftKey) {
			if (number > 0) {
				inputs[number - 1].focus();
			}
			else {
				inputs[4].focus();
			}
			e.preventDefault();
		}
		else if (e.key === 'Enter') {
			if (number < 4) {
				inputs[number + 1].focus();
				inputs[number + 1].value = '';
			}
			else {
				inputs[0].focus();
				inputs[0].value = '';
			}
			e.preventDefault();
		}
	}
	render() {
		return (
			<>
				<Global/>
				<EditorElement id="box" onChange={this.handleChange}>
					<Form onSubmit={this.write} id="form">
						<CheckBox>
							word: <Input onChange={this.setVariable} onKeyPress={this.focus} id="word1" type="text" name="1" placeholder="słowo" autoComplete="off" /> +
						</CheckBox>
						<CheckBox>
							translation: <Input onChange={this.setVariable} onKeyPress={this.focus} id="translation1" type="text" name="2" placeholder="tłumaczenie" autoComplete="off" /> +
						</CheckBox>
						<CheckBox>
							level: <Input onChange={this.setVariable} onKeyPress={this.focus} id="level" type="text" name="3" placeholder="basic" autoComplete="off" />
						</CheckBox>
						<CheckBox>
							type: <Input onChange={this.setVariable} onKeyPress={this.focus} id="type" type="text" name="4" placeholder="type" autoComplete="off" />
						</CheckBox>
						<CheckBox>
							image: <Input onChange={this.setVariable} onKeyPress={this.focus} id="image" type="text" name="5" placeholder="url" autoComplete="off" />
						</CheckBox>
						<Submit type="submit" value="+" />
					</Form>
					<Code contentEditable="true">
						<div spellcheck="false" id="text" onChange={this.handleChange} onKeyPress={this.handleKeyPress}>
							<Variable>const</Variable> <Name>words1_PersonalData</Name> = <span class="first-brackets">{'['}</span><br/>
						</div>
						<div spellcheck="false">
						<span class="first-brackets">{']'}</span>;<br/><br/>
						<Name><span class="export">export default</span> words1_PersonalData</Name>
						</div>
					</Code>
				</EditorElement>
			</>
		);
	}
}

export default Editor