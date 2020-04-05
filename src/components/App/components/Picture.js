// BASIC
import React, { Component } from 'react'
import styled, { css, keyframes } from 'styled-components'
import {au, db} from '../../../Config/firebase'
// ICONS
import {FaTimes} from 'react-icons/fa'
import {AiOutlineWoman} from 'react-icons/ai'
import {MdImage, MdTitle, MdChat, MdChatBubble} from 'react-icons/md'



const PictureWrapper = styled.div`
	position: relative;
	${props =>
		!props.isAdmin &&
		css`
			@media(max-height: 450px) {
				display: none;
			}
		`
	};
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
	background-color: #000000;
	border-bottom-left-radius: 20px;
	border-top-right-radius: 10px;
	transition: transform 0.5s ease; 
	z-index: 2;
	:hover {
		cursor: pointer;
	}
	${props =>
		props.up &&
		css`
			transform: translateY(-35px) rotate(45deg);
			background: transparent;
		`
	}
`
const EditMenu = styled.div`
	position: absolute;
	bottom: 10px;
	display: flex;
	justify-content: center;
	width: 100%;
	z-index: 2;
`
const EditField = styled.div`
	position: relative;
	width: 30px;
	height: 30px;
	padding: 5px;
	margin: 0 5px;
	background-color: var(--color-dark);
	border-radius: 100%;
	${props =>
		props.content &&
		css`
			::after {
				content: "${props => props.content}";
				width: 40%;
				height: 40%;
				position: absolute;
				top: -3px;
				right: -3px;
				background-color: var(--color-dark);
				color: var(--color-decorative);
				border-radius: 100%;
				font-size: 10px;
				text-align: center;
				font-weight: bold;
			}
		`
	};
`
const Cross = styled(FaTimes)`
	display: block;
	color: gold;
	transition: all ease 0.2s;
`
const fadeIn = keyframes`
	from {
		opacity: 0;
		transform: scale(0.9);
	}
	to {
		opacity: 1;
		transform: scale(1);
	}
`
const fadeOut = keyframes`
	from {
		opacity: 1;
		transform: scale(1);
	}
	to {
		opacity: 0;
		transform: scale(0.9);
	}
`
const PictureElement = styled.div`
	position: relative;
	width: 90vw;
	height: calc(100vw / 1.618);
	max-height: calc(100vh - 341px);
	margin: 0 auto;
	border-radius: 20px;
	overflow: hidden;
	@media(min-width: 700px) {
		width: 647px;
		height: 400px;
	}
	${props =>
		props.isAdmin &&
		css`
			min-height: 100px;
		`
	};
	::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: url("${props => props.src}") no-repeat center top;
		background-size: cover;
		animation: ${fadeIn} 0.5s ease;
		${props =>
			props.hideImage &&
			css`
				animation: ${fadeOut} 0.5s both;
			`
		}
	}
`
const animation = keyframes`
	0% {
		opacity: 0;
		transform: translate(-50%, -50%) rotate(-5deg) scale(0.7);
	}
	20% {
		opacity: 1;
		transform: translate(-50%, -50%) rotate(0) scale(1.2);
	}
	50% {
		opacity: 1;
		transform: translate(-50%, -50%) rotate(0) scale(1);
	}
	80% {
		opacity: 1;
		transform: translate(-50%, -50%) rotate(0) scale(1.1);
	}
	100% {
		opacity: 0;
		transform: translate(-50%, -50%) rotate(5deg) scale(0.7);
	}
`
const Animation = styled.img`
	opacity: 0;
	position: absolute;
	top: 50%;
	left: 50%;
	width: 60%;
	height: 60%;
	transform: translate(-50%, -50%);
	animation: ${animation} 0.7s 0.3s ease;
`

class Picture extends Component {
	state = {
		hideImage: false,
		selected: 'default'
	}
	componentDidMount() {
		au.onAuthStateChanged(user => {
			if (user) {
				db.collection('users').doc(user.uid).onSnapshot(snap => {
					this.setState({
						selected: snap.data().info.packs.selected
					});
				})
			}
		})
	}
	handleCross = () => {
		!this.state.hideImage ? this.setState({hideImage: true}) : this.setState({hideImage: false});
		// this.state.hideImage && setTimeout(console.log('object'), 300);
	}
	render() {
		// console.log(this.props)
		return (
			<PictureWrapper isAdmin={this.props.isAdmin}>
				<Delete up={this.state.hideImage} onClick={this.handleCross}>
					<Cross />
				</Delete>
				{this.props.isAdmin && <EditMenu>
					<EditField onClick={() => this.props.onEdit('word1')} content="1"><MdChatBubble /></EditField>
					<EditField onClick={() => this.props.onEdit('word2')} content="2"><MdChatBubble /></EditField>
					<EditField onClick={() => this.props.onEdit('word3')} content="3"><MdChatBubble /></EditField>
					<EditField onClick={() => this.props.onEdit('translation1')} content="1"><MdChat /></EditField>
					<EditField onClick={() => this.props.onEdit('translation2')} content="2"><MdChat /></EditField>
					<EditField onClick={() => this.props.onEdit('translation3')} content="3"><MdChat /></EditField>
					<EditField onClick={() => this.props.onEdit('female')}><AiOutlineWoman /></EditField>
					<EditField onClick={() => this.props.onEdit('image')}><MdImage /></EditField>
					<EditField onClick={() => this.props.onEdit('type')}><MdTitle /></EditField>
				</EditMenu>}
				<a href={this.props.link} target="_blank" rel="noopener noreferrer">
					<PictureElement onClick={this.props.onEdit} src={this.props.src} hideImage={this.state.hideImage} isAdmin={this.props.isAdmin} />
				</a>
				{this.props.animation === 'great' ? <Animation src={require(`../../Images/icons/packs/${this.state.selected}-pack/${this.state.selected}2.svg`)} /> : this.props.animation === 'good' ? <Animation src={require(`../../Images/icons/packs/${this.state.selected}-pack/${this.state.selected}1.svg`)} /> : ''}
			</PictureWrapper>
		);
	}
}

export default Picture