// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'

const PointsElement = styled.div`
	color: var(--color-secondary);
	strong {
		color: var(--color-highlighted);
	}
`

class Points extends Component {
	render() {
		return (
			<PointsElement>
				Punkty: <strong>{this.props.points}</strong>
			</PointsElement>
		);
	}
}

export default Points