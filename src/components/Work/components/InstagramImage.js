// BASIC
import React, { Component } from 'react'
import styled, { css } from 'styled-components'
// FILES
import instagramLogo from '../../../images/instagram-icon.png'
import instagramDescription from '../../../images/instagram-d.png'

const InstagramImageElement = styled.img`
	display: block;
	width: 70px;
	margin: 0 10px;
	border-radius: 25px;
	transition: opacity 0.1s ease;
	
	@media(min-height: 600px) {
		width: 100px;
	}

	${props =>
		props.default &&
		css`
			@media(min-width: 720px) {
				:hover {
					opacity: 0.5;
					cursor: pointer;
				}
			}
		`};
	

	${props =>
		props.preview &&
		css`
			transform: scale(3);
			position: absolute;
			top: calc(50vh - 35px);
			left: calc(50vw - 35px);
			transition: transform 0.3s ease;

			@media(min-height: 600px) {
				top: calc(50vh - 50px);
				left: calc(50vw - 50px);
			}
			:hover {
				opacity: 1;
				cursor: default;
			}
	`};
`

class InstagramImage extends Component {
	constructor(props) {
		super(props);
		this.state = {default: true, preview: false, instagramSrc: instagramLogo};
		this.see = this.see.bind(this);
		this.exit = this.exit.bind(this);
	}

	see() {
		if (this.state.default === true) {
			this.setState({
				default: false,
				preview: true,
				instagramSrc: instagramDescription
			});
		}

		else {
			this.setState({
				default: true,
				preview: false,
				instagramSrc: instagramLogo
			});
		}
	}

	exit() {
		if (this.state.preview === true) {
			this.setState({
				default: true,
				preview: false
			});
		}
	}

	render() {
		return (
				<InstagramImageElement src={this.state.instagramSrc} onClick={this.see} default={this.state.default} preview={this.state.preview} />
		);
	}
}

export default InstagramImage