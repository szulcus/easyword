// BASIC
import React, { Component } from 'react'
import styled, {keyframes, css} from 'styled-components'
import {Link} from 'react-router-dom'
// ICONS
import { FaUserTie } from 'react-icons/fa'
import { au, db } from '../../../Config/firebase'
import pl from '../../Images/icons/pl.svg'
import uk from '../../Images/icons/uk.svg'
import answerIcon from '../../Images/icons/answer-icon.svg'

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
const LanguageIcon = styled.div`
	position: relative;
	height: 30px;
	margin: 0 5px;
	transition: all 0.2s ease;
	::after {
		content: "${props => props.langChanges}";
		position: absolute;
		top: -7px;
		right: -7px;
		display: flex;
		justify-content: center;
		align-items: center;
		min-width: 20px;
		height: 20px;
		padding: 0 5px;
		background-color: var(--color-dark);
		border-radius: 20px;
		font-size: 13px;
		font-weight: bold;
		color: var(--color-main);
	}
	:hover {
		cursor: pointer;
		opacity: 0.5;
		transform: scale(0.99);
	}
`
const messageAnimation = keyframes`
	0% {
		opacity: 0;
	}
	20% {
		opacity: 1;
	}
	80% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
`
const LangMessage = styled.div`
	display: none;
	opacity: 0;
	position: absolute;
	top: -35px;
	left: 50%;
	transform: translateX(-50%);
	padding: 5px;
	width: 270px;
	border-radius: 20px;
	background-color: var(--color-dark);
	font-size: 14px;
	animation: ${messageAnimation} 2s ease;
	${props =>
		props.show &&
		css`
			display: block;
		`
	}
`
const AnswerIcon = styled.div`
	position: relative;
	height: 30px;
	margin: 0 5px;
	transition: all 0.2s ease;
	::after {
		content: "${props => props.answers}";
		position: absolute;
		top: -7px;
		right: -7px;
		display: flex;
		justify-content: center;
		align-items: center;
		min-width: 20px;
		height: 20px;
		padding: 0 5px;
		background-color: var(--color-dark);
		border-radius: 20px;
		font-size: 13px;
		font-weight: bold;
		color: var(--color-main);
	}
	:hover {
		cursor: pointer;
		opacity: 0.5;
		transform: scale(0.99);
	}
`
const Icon = styled.img`
	height: 100%;
`

// const SocialMediaItem = styled.li`
// 	margin: 0 10px;
// `
const Go = styled(Link)`
	text-decoration: none;
	color: var(--color-main);
	transition: opacity 0.2s ease;
	:hover {
		opacity: 0.5;
	}
`
const SocialMediaItem = styled(Link)`
	text-decoration: none;
	color: var(--color-main);
	margin: 0 5px;
	transition: all 0.2s ease;
	:hover {
		opacity: 0.5;
		transform: scale(0.99);
	}
`

class SocialMedia extends Component {
	state = {
		userId: null,
		showMessage: false
	}
	componentDidMount() {
		au.onAuthStateChanged(user => {
			if (user) {
				db.collection('users').doc(user.uid).get().then(snap => {
					this.setState({
						userId: user.uid,
					});
				})
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
				{!this.props.lang || !this.props.premium || this.props.ban ? '' : <>
					{this.props.lang.word  === 'word' ? (
						<LanguageIcon langChanges={this.props.langChanges} onClick={this.props.changeLanguage} title="Zmień na język polski">
							<LangMessage show={this.state.showMessage}><Go to="/login">Zaloguj się</Go>, aby znów zmienić język <span role="img" aria-label="wink">😉</span></LangMessage>
							<Icon src={pl} alt="pl" />
						</LanguageIcon>
					) : (
						<LanguageIcon langChanges={this.props.langChanges} onClick={this.props.changeLanguage} title="Zmień na język polski">
							<LangMessage show={this.state.showMessage}><Go to="/login">Zaloguj się</Go>, aby znów zmienić język <span role="img" aria-label="wink">😉</span></LangMessage>
							<Icon src={uk} alt="uk" />
						</LanguageIcon>
					)}
					<AnswerIcon answers={this.props.answers}>
						<Icon src={answerIcon} onClick={this.props.hint} />
					</AnswerIcon>
				</>}
			</NavigationComponent>
		);
	}
}

export default SocialMedia