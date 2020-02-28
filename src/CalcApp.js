// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'

/*eslint-disable no-eval */

const CalcAppComponent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	font-size: 30px;
`
const Number = styled.strong`
	color: var(--color-decorative);
	margin: 10px;
`
const Sign = styled.b``

const Input = styled.input`
	width: 100px;
	background-color: transparent;
	padding: 10px;
	margin: 10px;
	font-size: 30px;
	font-weight: bold;
	color: var(--color-primary);
	border: 1px solid var(--color-secondary);
	border-radius: 20px;
	outline: none;
	::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}
`

class CalcApp extends Component {
	state = {
		firstNumber: null,
		secondNumber: null,
		result: null,
		maxValue: 100,
		sign: '+'
	}
	componentDidMount() {
		this.randomNumbers();
	}
	randomNumbers = () => {
		const firstNumber = Math.round((Math.random() - 0.5) * this.state.maxValue);
		const freeSpace = this.state.maxValue - firstNumber;
		console.log(freeSpace);
		const secondNumber = Math.ceil(Math.random() * freeSpace);
		const result = eval(`firstNumber ${this.state.sign} secondNumber`);
		this.setState({firstNumber, secondNumber, result});
	}
	check = (e) => {
		if(parseInt(e.target.value) === this.state.result) {
			console.log("Brawo!!");
			setTimeout(() => {
				document.getElementById('input').value = '';
				this.randomNumbers();
			}, 100)
		}
	}
	render() {
		return (
			<CalcAppComponent>
				<Number>{this.state.firstNumber}</Number>
				<Sign>{this.state.sign}</Sign>
				<Number>{this.state.secondNumber}</Number>
				<Sign>=</Sign>
				<Input id="input" onChange={this.check} type="number" />
				<Number>{this.state.result}</Number>
				<button onClick={this.randomNumbers}>choose</button>
			</CalcAppComponent>
		);
	}
}

export default CalcApp