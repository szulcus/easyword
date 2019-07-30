// BASIC
import React, { Component } from 'react'
import styled, { css } from 'styled-components'
// STYLES
import { BrowserLink } from '../../Styles/Components'
// COMPONENTS
import Delete from './Delete'

const PictureElement = styled.div`
	width: 90vw;
	height: calc(90vw / 1.618);
	max-height: calc(100vh - 341px);
	margin: 0 auto;
	border-radius: 20px;
	overflow: hidden;
	/* ${props =>
		props.several &&
		css`
			display: flex;
			justify-content: center;
			height: calc(90vw / (1.618 * 2));
		`
	} */
	${props =>
		props.deleteImage &&
		css`
			animation: scaleOut 1s both;
		`
	}

	@media(min-width: 700px) {
		width: 647px;
		height: 400px;
		/* ${props =>
			props.several &&
			css`
				height: 200px;
			`
		} */
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
	
	${props =>
		props.entry &&
		css`
			animation: scaleIn 0.5s ease;
		`
	}
`

const PictureWrapper = styled.div`
	position: relative;
	/* animation: scaleIn 1s ease; */
`

class Picture extends Component {
	constructor(props) {
		super(props);
		this.state = {
			longImage: false,
			deleteImage: false,
			animatedImage: false
		};
	}
	render() {
		return (
			<PictureWrapper>
				<Delete up={this.state.deleteImage}
					onClick={
						() => {
							if (this.state.deleteImage === false) {
								this.setState({deleteImage: true, animatedImage: false})
							}
							else {
								this.setState({deleteImage: false, animatedImage: true})
							}
						}
					}
				/>
				<PictureElement id="imgElement" deleteImage={this.state.deleteImage} src={this.props.src}>
					<BrowserLink href={this.props.link} target="_blank">
						<Image entry={this.state.animatedImage} id="img" src={this.props.src} alt={`${this.props.word} image`} title={`${this.props.word} image`}
							delete={this.state.deleteImage}
							longImage={this.state.longImage}
							onLoad={
								() => {
									const width = document.getElementById('img').width;
									const height = document.getElementById('img').height;
									const elementHeight = document.getElementById('imgElement').height;
									// console.log(`szerokość: ${width} wysokość: ${height}`)
									// console.log(height*1.618);
									console.log(this.props.src);
									if (height * 1.618 < width) {
										this.setState({longImage: true});
									}
									else {
										this.setState({longImage: false});
									}
								}
							}
						/>
					</BrowserLink>
				</PictureElement>
			</PictureWrapper>
		);
	}
}

export default Picture