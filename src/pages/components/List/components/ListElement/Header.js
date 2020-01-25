// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'

const HeaderElement = styled.header`
	text-align: center;
	margin-bottom: 5px;
	@media (min-width: 800px) {
		display: block;
		width: 100%;
		color: white;
	}
`

const Title = styled.h1`
	margin-bottom: 0;
`

class Header extends Component {
	render() {
		return (
			<HeaderElement>
				<Title>Spis treści:</Title>
			</HeaderElement>
		);
	}
}

export default Header