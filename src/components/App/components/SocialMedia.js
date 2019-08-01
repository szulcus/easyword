// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
// STYLES
import { BrowserLink, Icon } from '../../Styles/Components'
// ICONS
import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'

library.add(faFacebookF, faGithub, faLinkedinIn, faUserTie);

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
						<Icon icon={['fab', 'facebook-f']} />
					</BrowserLink>
				</SocialMediaItem>
				<SocialMediaItem>
					<BrowserLink href="https://github.com/jakub104" target="_blank">
						<Icon icon={['fab', 'github']} />
					</BrowserLink>
				</SocialMediaItem>
				<SocialMediaItem>
					<BrowserLink href="https://www.linkedin.com/in/jakub-schulz-265931186/" target="_blank">
						<Icon icon={['fab', 'linkedin-in']} />
					</BrowserLink>
				</SocialMediaItem>
				<SocialMediaItem>
					<BrowserLink href="https://programista-webowy-jakub-schulz.000webhostapp.com" target="_blank">
						<Icon icon={['fas', 'user-tie']} />
					</BrowserLink>
				</SocialMediaItem>
			</SocialMediaElement>
		);
	}
}

export default SocialMedia