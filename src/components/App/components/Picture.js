// BASIC
import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
// STYLES
import { BrowserLink, Icon } from '../../Styles/Components'
// ICONS
import { faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faTimes);

const PictureElement = styled.div`
	position: relative;
	width: 90vw;
	height: calc(90vw / 1.618);
	max-height: calc(100vh - 336px);
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
			display: none;
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

const Delete = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	right: 0;
	width: 40px;
	height: 40px;
	background-color: #000;
	border-bottom-left-radius: 20px;
	/* border: 3px dotted gold; */
	/* border-radius: 20px; */
	:hover {
		cursor: pointer;
	}
`

const Cross = styled(Icon)`
	display: block;
	color: gold;
	transition: all ease 0.2s;
	:hover {
		opacity: 0.5;
	}
	${props =>
		props.hide &&
		css`
			display: none;
		`
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
		props.delete &&
		css`
			display: none;
		`
	}
`

class Picture extends Component {
	constructor(props) {
		super(props);
		this.state = {
			longImage: false,
			deleteImage: false
		};
	}
	render() {
		return (
			// <PictureElement src={this.props.src}>
			<PictureElement deleteImage={this.state.deleteImage} src={this.props.src}>
				<Delete id="delete"
					onClick={
						() => {
							if (this.state.deleteImage === false) {
								this.setState({deleteImage: true})
							}
							else {
								this.setState({deleteImage: false})
							}
						}
					}
					>
					<Cross up icon={['fas', 'times']} />
				</Delete>
				<BrowserLink href={this.props.link} target="_blank">
					<Image id="img" src={this.props.src} alt={`${this.props.word} image`} title={`${this.props.word} image`}
						delete={this.state.deleteImage}
						longImage={this.state.longImage}
						onLoad={
							() => {
								const width = document.getElementById('img').width;
								const height = document.getElementById('img').height;
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
		);
	}
}

export default Picture