// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
import Global from '../Styles/Global'
// ICONS
import {MdFileDownload, MdPhotoFilter} from 'react-icons/md'
// import {AiFillCode} from 'react-icons/ai'

const AutoElement = styled.div`
	padding: 10px;
`

const Text = styled.textarea`
	width: 100%;
	height: 50vh;
	background-color: transparent;
	font-size: 20px;
	color: var(--color-light);
	border: none;
	resize: none;
	outline: none;
	transition: transform 0.1s ease;
	overflow-y: scroll;
	overflow-x: hidden;
	::placeholder {
		transition: all 0.2s ease;
		color: var(--color-secondary);
	}
	
	:focus::placeholder {
		opacity: 0;
		transform: translateX(30px);
	}
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

const Inputs = styled.div`
	display: flex;
	justify-content: space-around;
`

const Input = styled.input`
	background: none;
	outline: none;
	border: none;
	border-bottom: 1px solid var(--color-decorative);
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

const Select = styled.select`
	width: 300px;
	background: none;
	outline: none;
	border: none;
	border-bottom: 1px solid var(--color-decorative);
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
`

const Option = styled.option`

`

const Buttons = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin: 50px 0;
`
const Action = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-weight: bold;
`

const ConvertIcon = styled(MdPhotoFilter)`
	margin: 10px;
	font-size: 50px;
	color: var(--color-decorative);
	:hover {
		cursor: pointer;
	}
	:active {
		transform: scale(0.9);
	}
`

const DownloadIcon = styled(MdFileDownload)`
	margin: 10px;
	font-size: 50px;
	color: var(--color-decorative);
	:hover {
		cursor: pointer;
	}
	:active {
		transform: scale(0.9);
	}
`



class Auto extends Component {
	state = {
		isConverted: false,
		text: '',
		chapterName: undefined,
		level: 'basic',
		type: undefined,
		image: 'url'
	}
	changeState = (e) => {
		e.persist()

		this.setState(
			() => {
				return {
					[e.target.id]: e.target.value
				};
			},
			
			() => {
				console.log(this.state[e.target.id]);
			}
			
			);
	}
	convert = () => {
		const expWord = /[a-zą-żó ,\-'()/0-9.?]+\n\n/gi;
		const expTranslation = /[a-zą-żó \-'()/0-9.?]+\n/gi;
		let text = document.getElementById('text');
		if (this.state.text === '') {
			alert("Nic jeszcze nie wpisałeś!");
		}
		else if (expWord.test(text.value += '\n\n') === false) {
			alert("Wpisałeś zły tekst!");
		}
		else if (this.state.chapterName === undefined || this.state.type === undefined) {
			alert("Najpierw uzupełnij wszystkie pola!")
		}
		else if (text.value.includes(`const words${this.state.chapterName}`) === false) {
			// text.value += '\n\n';
	
			text.value = text.value.replace(expWord, (x) => {
				return `\t\tword1: \`${x.replace(/\n/g, '')}\`,\n\t\tlevel: \`${this.state.level}\`,\n\t\ttype: \`${this.state.type}\`,\n\t\timage: \`${this.state.image}\`\n\t},\n`
			});
	
			text.value = text.value.replace(expTranslation, (x) => {
				return `\t{\n\t\ttranslation1: \`${x.replace(/\n/g, '')}\`,\n`
			});
	
			text.value = `const words${this.state.chapterName} = [\n${text.value}];\n\nexport default words${this.state.chapterName}`
			this.setState({isConverted: true});
		}
		else if(text.value.includes(`const words${this.state.chapterName}`)){
			alert('Tekst jest już gotowy!')
		}
	}
	download = () => {
		let filename = `${this.state.chapterName}.js`;
		let text = document.getElementById('text').value;
		const element = document.createElement('a');
		element.style.display = 'none';
		element.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`);
		element.setAttribute('download', filename);
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
	}
	render() {
		return (
			<>
				<Global />
				<AutoElement>
					<Text id="text" placeholder="Wpisz text..." onChange={this.changeState}></Text>
					<Inputs>
						<Input onChange={this.changeState} id="chapterName" placeholder="Nazwa działu" />
						<Input onChange={this.changeState} id="type" placeholder="Nazwa rozdziału" />
						<Select onChange={this.changeState} id="level" placeholder="Poziom">
							<Option value="basic">Podstawa</Option>
							<Option value="extended">Rozszerzenie</Option>
						</Select>
					</Inputs>
					<Buttons>
						<Action>
							<ConvertIcon onClick={this.convert} />
							Konwertuj
						</Action>
						<Action>
							<DownloadIcon onClick={this.download} />
							Pobierz
						</Action>
					</Buttons>
				</AutoElement>
			</>
		);
	}
}

export default Auto