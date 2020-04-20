// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
import ClipboardJS from 'clipboard';
// STYLES
import Global from '../Styles/Global'
import './components/codeFormat.css'
// ICONS
import { MdContentCopy } from 'react-icons/md';

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
	min-height: 350px;
	color: var(--color-primary);
	@media (min-height: 600px) {
		min-height: 400px;
	}
	@media (min-height: 800px) {
		min-height: 450px;
	}
`
const Code = styled.code`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	width: 100%;
	height: 50vh;
	background: transparent;
	color: var(--color-primary);
	font-size: 18px;
	font-weight: bold;
	font-family: 'Inconsolata', monospace;
	overflow-y: scroll;
	outline: none;
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
	div,
	span,
	br {
		::selection {
			background-color: transparent;
		}
	}
	@media (min-width: 600px) {
		font-size: 20px;
	}
`

const Input = styled.input`
	background: none;
	outline: none;
	border: none;
	border-bottom: 1px solid var(--color-main);
	padding: 0 10px;
	font-size: 20px;
	color: var(--color-white);
	margin: 3px;
	@media (min-height: 600px) {
		margin: 5px;
	}
	@media (min-height: 800px) {
		margin: 10px;
	}
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
	color: var(--color-main);
	font-size: 30px;
	font-weight: bold;
	outline: none;
	transition: transform 0.1s ease;
	/* :hover {
		transform: scale(1.5);
	} */
	:active {
		/* opacity: 0.5; */
		transform: scale(1.5);
	}
	
`

const Variable = styled.span`
	color: #569CD6;
`

const CheckBox = styled.label`
	display: block;
	margin: 5px;
`

const Name = styled.div`
	
`

const Copy = styled.button`
	position: absolute;
	right: 20px;
	bottom: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 50px;
	background-color: var(--color-dark);
	border-radius: 100%;
	z-index: 2;
	outline: none;
	transition: transform 0.05s ease;
	:hover {
		cursor: pointer;
	}
	:active {
		transform: scale(0.9);
	}
`

const CopyImg = styled(MdContentCopy)`
	text-decoration: none;
	color: var(--color-main);
	font-size: 20px;
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
	select = (e) => {
		// let range = new Range();
		// let id = e.target.id;
		// console.log(id)
		// console.log(range)
		// let spans = document.querySelectorAll("span[class='name']");
		// range.setStart(spans[0], 1);
		// range.setEnd(spans[0], 2);
		// document.getSelection().removeAllRanges();
		// document.getSelection().addRange(range);
	}
	write = (e) => {
		// <p id="p">Example: <i>italic</i> and <b>bold</b></p>

		//   button.onclick = () => {
		//     let range = new Range();
		
		//     range.setStart(p, start.value);
		//     range.setEnd(p, end.value);
		
		//     // apply the selection, explained later
		//     document.getSelection().removeAllRanges();
		//     document.getSelection().addRange(range);
		//   };
		document.getElementById('text').innerHTML +=
		`
			&emsp;<span class="second-brackets">{</span><br/>
			&emsp;&emsp;<span class="name">word1</span>: <span onClick={this.select} class="string">\`${this.state.word1.toLowerCase().trim()}\`</span>,<br/>
			&emsp;&emsp;<span class="name">translation1</span>: <span class="string">\`${this.state.translation1.toLowerCase().trim()}\`</span>,<br/>
			&emsp;&emsp;<span class="name">level</span>: <span class="string">\`${this.state.level.toLowerCase().trim()}\`</span>,<br/>
			&emsp;&emsp;<span class="name">type</span>: <span class="string">\`${this.state.type.toLowerCase().trim()}\`</span>,<br/>
			&emsp;&emsp;<span class="name">image</span>: <span class="string">\`${this.state.image.toLowerCase().trim()}\`</span>,<br/>
			&emsp;<span class="second-brackets">}</span>,<br/>
		`
		console.log(this.state.code);
		const inputs = document.querySelectorAll("input[type='text']");
		for (const input of inputs) {
			input.value = '';
		}
		document.getElementById('copy').click();
		inputs[0].focus();
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
		new ClipboardJS('#copy');
		return (
			<>
				<Global/>
				<EditorElement id="box" onChange={this.handleChange}>
					<Form onSubmit={this.write} id="form">
						<CheckBox onFocus={this.select} id="word1Box">
							<Name>word:</Name>
							<Input onChange={this.setVariable} onKeyPress={this.focus} id="word1" type="text" name="1" placeholder="słowo" autoComplete="off" /> +
						</CheckBox>
						<CheckBox id="translation1Box">
							<Name>translation:</Name>
							<Input onChange={this.setVariable} onKeyPress={this.focus} id="translation1" type="text" name="2" placeholder="tłumaczenie" autoComplete="off" /> +
						</CheckBox>
						<CheckBox id="levelBox">
							<Name>level:</Name>
							<Input onChange={this.setVariable} onKeyPress={this.focus} id="level" type="text" name="3" placeholder="basic" autoComplete="off" />
						</CheckBox>
						<CheckBox id="typeBox">
							<Name>type:</Name>
							<Input onChange={this.setVariable} onKeyPress={this.focus} id="type" type="text" name="4" placeholder="type" autoComplete="off" />
						</CheckBox>
						<CheckBox id="imageBox">
							<Name>image:</Name>
							<Input onChange={this.setVariable} onKeyPress={this.focus} id="image" type="text" name="5" placeholder="url" autoComplete="off" />
						</CheckBox>
						<Submit type="submit" value="+" />
					</Form>
					<Code contentEditable="true" id="code">
						<div spellcheck="false" id="text" onChange={this.handleChange} onKeyPress={this.handleKeyPress}>
							<Variable>const</Variable> <span class="name">words1_PersonalData</span> = <span class="first-brackets">{'['}</span><br/>
						</div>
						<div spellcheck="false">
						<span class="first-brackets">{']'}</span>;<br/><br/>
						<span class="export">export default</span> <span class="name">words1_PersonalData</span>
						</div>
					</Code>
					<Copy id="copy" data-clipboard-target="#code" title="Skopiuj text!">
						<CopyImg>c</CopyImg>
					</Copy>
				</EditorElement>
			</>
		);
	}
}

export default Editor
