// BASIC
import React, { Component } from 'react'
import styled, {css, keyframes} from 'styled-components'

const PointsElement = styled.div`
	color: var(--color-secondary);
`
const Value = styled.strong`
	color: var(--color-decorative);
	${props =>
		props.empty &&
		css`
			color: var(--color-primary);
		`
	};
`
const swim = keyframes`
	from {
		margin-left: 10px;
		opacity: 1;
	}
	to {
		margin-left: 0;
		opacity: 0;
	}
`
const Add = styled.b`
	color: green;
	animation: ${swim} 0.3s 1.5s both;
`

class Points extends Component {
	render() {
		return (
			<PointsElement>
				Punkty: {this.props.points === 0 ? (
					<Value empty>{this.props.points}</Value>
				)	: (
					<Value>{this.props.points}</Value>
				)}
				<Add>{this.props.pointsAnimation}</Add>
			</PointsElement>
		);
	}
}

export default Points