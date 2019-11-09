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
		text: ''
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

		text.value = text.value.replace(/[ -z]+\n\n/g, (x) => {
			return `\ttranslation1: \`${x.replace(/\n/g, '')}\`,\n\n`
		});

		text.value = text.value.replace(/[a-z]+\n/g, (x) => {
			return `\tword1: \`${x.replace(/\n/g, '')}\`,\n`
		});

		


		// text.value = text.value.replace(/[ -z]+\n\n/g, (x) => {
		// 	return `\`${x.replace(/\n/g, '')}\`\n\n`
		// });

		// text.value = text.value.replace(/[ -z]+\n/g, (x) => {
		// 	return `\`${x.replace(/\n/g, '')}\`\n`
		// });
	}
	render() {
		return (
			<>
				<Global />
				<AutoElement>
					coś
					<Text id="text" onChange={this.updateText}>{`coo\nbaker's\n\ncoo\ncoo\n\ncoo\ncoo\n\ncoo\ncoo`}</Text>
					<ConvertButton onClick={this.convert}>Konwertuj</ConvertButton>
				</AutoElement>
			</>
		);
	}
}

export default Auto