// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'

const EasyChoiseComponent = styled.div`
	
`

class EasyChoise extends Component {
	render() {
		const array = [
			{
				word: 'one',
				translation: 'jeden',
				number: 1
			},
			{
				word: 'two',
				translation: 'dwa',
				number: 2
			},
			{
				word: 'three',
				translation: 'trzy',
				number: 3
			},
			{
				word: 'four',
				translation: 'cztery',
				number: 4
			},
			{
				word: 'five',
				translation: 'pięć',
				number: 5
			}
		];
		const disabled = [
			0, 3
		];
		const filtered = array.filter((x, index) => {
			console.log(index);
			return !disabled.includes(index)
		});
		console.log(filtered);
		return (
			<EasyChoiseComponent>
				EasyChoise
			</EasyChoiseComponent>
		);
	}
}

export default EasyChoise