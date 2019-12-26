// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
// STYLES
import { BrowserLink } from '../../Styles/Components'
// ICONS
import { FaFacebookF, FaGithub, FaLinkedinIn, FaUserTie } from 'react-icons/fa'


const SocialMediaElement = styled.ul`
	position: absolute;
	bottom: 0;
	right: 20vw;
	display: flex;
	justify-content: center;
	list-style: none;
	width: 60vw;
	padding: 0;
	text-align: center;
	font-size: 30px;
	opacity: 0.5;
	transition-duration: 0.5s;
	animation: floatBottom 0.3s ease-in;
	z-index: 10;

`

const SocialMediaItem = styled.li`
	margin: 0 10px;
`

class SocialMedia extends Component {
	render() {
		return (
			<SocialMediaElement>
				<SocialMediaItem>
					<BrowserLink href="https://www.facebook.com/programista.webowy.jakub.schulz" target="_blank">
						<FaFacebookF />
					</BrowserLink>
				</SocialMediaItem>
				<SocialMediaItem>
					<BrowserLink href="https://github.com/jakub104" target="_blank">
						<FaGithub />
					</BrowserLink>
				</SocialMediaItem>
				<SocialMediaItem>
					<BrowserLink href="https://www.linkedin.com/in/jakub-schulz-265931186/" target="_blank">
						<FaLinkedinIn />
					</BrowserLink>
				</SocialMediaItem>
				<SocialMediaItem>
					<BrowserLink href="https://programista-webowy-jakub-schulz.000webhostapp.com" target="_blank">
						<FaUserTie />
					</BrowserLink>
				</SocialMediaItem>
			</SocialMediaElement>
		);
	}
}

export default SocialMedia