// BASIC
import React, { Component } from 'react'
import styled, {css} from 'styled-components'

import Picture from '../../../Components/Apps/components/Picture'

const SpecificationComponent = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: none;
	width: 100%;
	height: 100vh;
	background-color: var(--color-dark);
	animation: scale 0.2s ease;
	${props =>
		props.show &&
		css`
			display: block;
		`
	}
`

class Specification extends Component {
	render() {
		return (
			<SpecificationComponent show={this.props.word}>
					{!this.props.word ? 'Wczytywanie...' : <div>
						<div>word: {this.props.word[0]}</div>
						<div>translation: {this.props.word[1]}</div>
						<div>poziom: {this.props.word[2]}</div>
						<div>rozdział: {this.props.word[3]}</div>
						{/* <li>zdkecie: {<img src={this.props.word[4]} alt='' />}</li> */}
						<Picture src={this.props.word[4]} />
						<div>{this.props.word[4]}</div>
					</div>}
					<button onClick={this.props.onClick}>Wróć</button>
			</SpecificationComponent>
		);
	}
}

export default Specification