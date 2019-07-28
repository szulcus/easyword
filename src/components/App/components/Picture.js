// BASIC
import React, { Component } from 'react'
import styled, { css } from 'styled-components'
// STYLES
import { BrowserLink } from '../../Styles/Components'

const PictureElement = styled.div`
	width: 90vw;
	height: calc(90vw / 1.618);
	margin: 0 auto;
	border-radius: 20px;
	/* background: url(${props => props.src});
	background-size: cover ;
	background-repeat: no-repeat;
	background-position: center; */
	overflow: hidden;

	@media(min-width: 700px) {
		width: 647px;
		height: 400px;
	}
`

const Image = styled.img`
	width: 100%;
	height: auto;
	${props =>
		props.longImage &&
		css`
			width: auto;
			height: 100%;
		`
	}
`

class Picture extends Component {
	constructor(props) {
		super(props);
		this.state = {
			longImage: false
		};
	}
	render() {
		return (
			// <PictureElement src={this.props.src}>
			<PictureElement src={this.props.src}>
				<BrowserLink href={this.props.url} target="_blank">
					<Image id="img" src={this.props.src} alt={`${this.props.word} image`} title={`${this.props.word} image`}
						longImage={this.state.longImage}
						onLoad={
							() => {
								const width = document.getElementById('img').width;
								const height = document.getElementById('img').height;
								console.log(`szerokość: ${width} wysokość: ${height}`)
								console.log(height*1.618);
								if (height*1.618 < width) {
									this.setState({longImage: true});
								}
							}
						}
					/>
				</BrowserLink>
			</PictureElement>
		);
	}
}

export default Picture