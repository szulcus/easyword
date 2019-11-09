// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
import Global from '../Styles/Global';

const AutoElement = styled.div`
	
`

const Text = styled.textarea`
	width: 100vw;
	height: 50vh;
`

const ConvertButton = styled.button`
`

class Auto extends Component {
	state = {
		text: '',
		chapterName: '6_Other',
		level: 'basic',
		type: 'inne',
		image: 'url'
	}
	updateText = (e) => {
		e.persist()

		this.setState(
			() => {
				return {
					text: e.target.value
				};
			},
			
			() => {
				console.log(this.state.text);
			}
			
			);
	}
	convert = () => {
		console.log("Działa");
		let text = document.getElementById('text');
		text.value += '\n\n';

		text.value = text.value.replace(/[a-zA-Zą-żĄ-Żó ,\-'()/]+\n\n/g, (x) => {
			return `\t\ttranslation1: \`${x.replace(/\n/g, '')}\`,\n\t\tlevel: \`${this.state.level}\`,\n\t\ttype: \`${this.state.type}\`,\n\t\timage: \`${this.state.image}\`\n\t},\n`
		});

		text.value = text.value.replace(/[a-zA-Zą-żĄ-Żó \-'()/]+\n/g, (x) => {
			return `\t{\n\t\tword1: \`${x.replace(/\n/g, '')}\`,\n`
		});

		text.value = `const words${this.state.chapterName} = [\n${text.value}];\n\nexport default words${this.state.chapterName}`
	}
	render() {
		return (
			<>
				<Global />
				<AutoElement>
					<Text id="text" placeholder="Wpisz text" onChange={this.updateText}></Text>
					<ConvertButton onClick={this.convert}>Konwertuj</ConvertButton>
					<ConvertButton onClick={this.createFile}>Stwórz plik</ConvertButton>
				</AutoElement>
			</>
		);
	}
}

export default Auto