// BASIC
import React, { Component } from 'react'
import styled, {css, keyframes} from 'styled-components'
import {Link} from 'react-router-dom'
// IMAGES
import win from '../../Images/win.png'
// ICONS
import {MdExitToApp} from 'react-icons/md'
import {FaGamepad} from 'react-icons/fa'

const fade = keyframes`
	from {
		opacity: 0;
		transform: scale(0.9);
	}
	to {
		opacity: 1;
		transform: scale(1);
	}
`
const EndComponent = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: none;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	background-color: var(--color-dark);
	z-index: 2;
	animation: ${fade} 0.3s 1s ease;
	${props =>
		props.show &&
		css`
			display: flex;
		`
	};
`
const Image = styled.img`
	width: 50vmin;
	max-width: 500px;
`
const Message = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding: 20px;
	margin-bottom: 100px;
`
const Title = styled.h1`
	color: var(--color-main);
`
const Choise = styled.div`
	width: 100%;
	max-width: 500px;
	display: flex;
	justify-content: space-evenly;
	margin: 20px 0;
	font-size: 35px;
`
const Icon = styled.span`
	color: var(--color-main);
	:hover {
		cursor: pointer;
	}
`

class End extends Component {
	close = () => {
		this.props.onBack()
	}
	render() {
		return (
			<EndComponent show={this.props.show}>
				<Image src={win} alt="win"/>
				<Message>
					<Title>Gratulacje!</Title>
					Przetłumaczyłeś(aś) juz prawidłowo wszystkie słówka z tego {this.props.part === 'test' ? 'rozdziału' : 'podrozdziału'}. Kontynuuj, lub zacznij naukę nowych słówek.
					<Choise>
						<Icon title="Kontynuuj" onClick={this.close}>
							<FaGamepad />
						</Icon>
						<Link to={`/${this.props.bookName}/spis-tresci`}>
							<Icon title="Przejdź do spisu treści" onClick={this.back}>
								<MdExitToApp />
							</Icon>
						</Link>
					</Choise>
				</Message>
			</EndComponent>
		);
	}
}

export default End