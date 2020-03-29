// BASIC
import React, { Component } from 'react'
import styled, {keyframes} from 'styled-components'
import {Link} from 'react-router-dom'
// ICONS
import { FaUserTie } from 'react-icons/fa'
import { au } from '../../../Config/firebase'
import pl from '../../Images/icons/pl.svg'
import uk from '../../Images/icons/uk.svg'
import random from '../../Images/icons/pl-uk.svg'

const fade = keyframes`
	from {
		opacity: 0;
		transform: translateY(10px)
	}
	to {
		opacity: 1;
		transform: translateY(0)
	}
`
const NavigationComponent = styled.nav`
	/* display: none; */
	position: absolute;
	bottom: 10px;
	display: flex;
	justify-content: center;
	list-style: none;
	width: 60vw;
	padding: 0;
	text-align: center;
	font-size: 30px;
	/* opacity: 0.5; */
	transition-duration: 0.5s;
	animation: ${fade} 0.3s ease-in;
	z-index: 2;
	@media(max-height: 550px) {
		display: none;
	}
`
const Icon = styled.img`
	height: 30px;
`

// const SocialMediaItem = styled.li`
// 	margin: 0 10px;
// `

const SocialMediaItem = styled(Link)`
	text-decoration: none;
	color: var(--color-decorative);
	margin: 0 10px;
	transition: all 0.2s ease;
	:hover {
		opacity: 0.7;
	}
`

class SocialMedia extends Component {
	state = {
		userId: null
	}
	componentDidMount() {
		au.onAuthStateChanged(user => {
			if (user) {
				this.setState({userId: user.uid})
			}
		})
	}
	render() {
		return (
			<NavigationComponent>
				{/* <SocialMediaItem>
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
				</SocialMediaItem> */}
				{!this.state.userId ? '' : <SocialMediaItem to={`/users/${this.state.userId}`}>
					<FaUserTie />
				</SocialMediaItem>}
				{this.props.lang.word === 'word' ? <Icon onClick={this.props.changeLanguage} src={pl} alt="pl" title="Zmień na język polski" /> : <Icon onClick={this.props.changeLanguage} src={uk} alt="uk" title="Zmień na język angielski" />}
				
				{/* <Icon src={pl} alt="pl" title="J. Polski" /> */}
				{/* <Icon src={random} alt="pl-uk" title="Na przemian" /> */}
			</NavigationComponent>
		);
	}
}

export default SocialMedia