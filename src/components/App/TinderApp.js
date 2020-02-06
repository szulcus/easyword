// BASIC
import React, { Component } from 'react'
import styled, {keyframes, css} from 'styled-components'
// FIREBASE
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/functions'

const like = keyframes`
	from {
		transform: translate(-50%, -60%) scale(1.1);
		opacity: 1;
	}
	to {
		transform: translate(100%, -40%) scale(1.1) rotate(20deg);
		opacity: 0;
	}
`
const nope = keyframes`
	from {
		transform: translate(-50%, -60%) scale(1.1);
		opacity: 1;
	}
	to {
		transform: translate(-200%, -40%) scale(1.1) rotate(-20deg);
		opacity: 0;
	}
`

const Card = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -52%);
	width: 80vw;
	max-width: 500px;
	height: 70vh;
	max-height: 700px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: var(--color-dark);
	border-radius: 20px;
	transition: transform 0.3s ease, background-color 0.1s ease;
	perspective: 1000px;
	:nth-last-child(3) {
		box-shadow: 0px 0px 3px var(--color-secondary);
	}
	:nth-last-child(2) {
		transform: translate(-50%, -56%) scale(1.05);
		/* background-color: #303030; */
		box-shadow: 0px 0px 3px var(--color-secondary);
	}
	:last-child {
		transform: translate(-50%, -60%) scale(1.1);
		background-color: var(--color-dark);
		box-shadow: 0px 0px 3px var(--color-secondary);
		/* ::after, */
		::before {
			content: 'before';
			width: 100%;
			height: 100%;
			position: absolute;
			border-radius: 6px;
			backface-visibility: hidden;
			transition: 0.3s transform ease;
			background-color: red;
			transform: rotateY(180deg);
		}
		${props =>
			props.answer &&
			css`
				transform: translate(-50%, -60%) scale(1.1) rotateY(180deg);
				::before {
					transform: rotateY(360deg);
				}
			`
		}
		${props =>
			props.like &&
			css`
				animation: ${like} 0.5s both;
			`
		}
		${props =>
			props.nope &&
			css`
				animation: ${nope} 0.5s both;
			`
		}
	}
`
const Image = styled.img`
	width: 90%;
`

const Decision = styled.div`

`

const Button = styled.button`

`

class TinderApp extends Component {
	state = {
		words: null,
		like: false,
		nope: false,
		answer: false
	}
	componentDidMount() {
		const db = firebase.firestore();
		db.collection('books').doc('macmillan').onSnapshot((snap) => {
			// const unit = `unit_${this.props.match.params.unitNumber}`
			const words = snap.data().unit_02.parts.part_01.words;
			this.setState({words});
			console.log(this.state.words);
			// const element = document.getElementById(this.props.match.params.unitName);
			// if (element) {
				// console.log(element);
			// 	element.scrollIntoView();
			// }
		})
	}
	delete = (e) => {
		const element = document.getElementById(e.target.parentElement.id);
		element.style.backgroundColor = 'gray';
		setTimeout(() => {
			element.remove();
		}, 500);
	}
	getAnswer = () => {
		this.setState({answer: true})
		setTimeout(() => {
			this.setState({answer: false})
		}, 1000);
	}
	greenDelete = () => {
		const element = document.getElementById('list').lastElementChild;
		// element.style.backgroundColor = 'green';
		this.setState({like: true})
		setTimeout(() => {
			this.setState({like: false})
			element.remove();
		}, 500);
	}
	redDelete = () => {
		const element = document.getElementById('list').lastElementChild;
		// element.style.backgroundColor = 'red';
		this.setState({nope: true})
		setTimeout(() => {
			this.setState({nope: false})
			element.remove();
		}, 500);
	}
	render() {
		return (
			<>
				<div id="list">
					{!this.state.words ? <Card>Loading...</Card> : this.state.words.map(({word1, translation1, image}) => {
						return (
							<Card like={this.state.like} nope={this.state.nope} answer={this.state.answer} id={word1}>
								<h3>{word1}</h3>
								<h3>{translation1}</h3>
								<Image src={image} alt={word1} />
								{/* <button onClick={this.delete}>click</button> */}
							</Card>
						)
					})}
				</div>
				<Decision>
					<Button onClick={this.greenDelete}>Yes</Button>
					<Button onClick={this.getAnswer}>???</Button>
					<Button onClick={this.redDelete}>No</Button>
				</Decision>
			</>
		);
	}
}

export default TinderApp