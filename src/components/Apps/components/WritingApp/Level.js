// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'

const LevelElement = styled.div`
	position: absolute;
	top: 0;
	left: 0;
`

class Level extends Component {
	render() {
		return (
			<LevelElement>
				<progress value={this.props.progress} max="60" />
			</LevelElement>
		);
	}
}

export default Level