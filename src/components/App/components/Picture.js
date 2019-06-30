// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
// STYLES
import { BrowserLink } from '../../Styles/Components'

const PictureElement = styled.div`
	width: 90vw;
	height: calc(90vw / 1.618);
	margin: 0 auto;
	background-color: gray;
	border-radius: 20px;
	overflow: hidden;

	@media(min-width: 700px) {
		width: 647px;
		height: 400px;
	}
`

const Image = styled.img`
	width: 100%;
	height: 100%;
`

class Picture extends Component {
	render() {
		return (
			<PictureElement>
				<BrowserLink href={this.props.url} target="_blank">
					<Image src={this.props.src} alt={`${this.props.word} image`} title={`${this.props.word} image`} />
				</BrowserLink>
			</PictureElement>
		);
	}
}

export default Picture