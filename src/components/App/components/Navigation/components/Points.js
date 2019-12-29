// BASIC
import React, { Component } from 'react'
import styled, {css} from 'styled-components'

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

class Points extends Component {
	render() {
		return (
			<PointsElement>
				Punkty: {this.props.points === 0 ? <Value empty>{this.props.points}</Value> : <Value>{this.props.points}</Value>}
			</PointsElement>
		);
	}
}

export default Points