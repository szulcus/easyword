// BASIC
import React, { Component } from 'react'
import styled, { css } from 'styled-components'
// STYLED
import Global from '../../components/Styles/Global'
import { Wrapper } from '../../components/Styles/Components'
// COMPONENTS
import SnapchatImage from './components/SnapchatImage'
import InstagramImage from './components/InstagramImage'


const WorkElement = styled.div`
	color: var(--color-highlighted);
	width: 100vw;
`

const WorkTitle = styled.header`
	font-size: 35px;
	font-weight: bold;
	text-align: center;
	margin: 30px 0;
	@media(min-width: 720px) {
		font-size: 50px;
	}
	@media(max-height: 600px) {
		margin: 15px 0 0 0;
		font-size: 35px;
	}
	@media(max-height: 360px) {
		margin: 30px 0;
	}
	${props =>
		props.blur &&
		css`
			filter: blur(10px);
	`};
`

const WorkImage = styled.img`
	display: block;
	height: 50vh;
	max-height: 500px;
	max-height: 90vw;

	max-width: 500px;
	max-width: 90vw;
	margin: 0 auto;
	${props =>
		props.blur &&
		css`
			filter: blur(10px);
	`};
	@media(max-height: 550px) {
		height: calc(100px + 2hmin);
	}
	@media(max-height: 360px) {
		display: none;
	}
`

const WorkDescription = styled.p`
	font-size: 20px;
	text-align: center;
	margin: 30px;
	@media(max-height: 600px) {
		margin: 10px;
	}
	${props =>
		props.blur &&
		css`
			filter: blur(10px);
	`};
`

const WorkSocialMediaElement = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
`

class Work extends Component {
	constructor(props) {
		super(props);
		this.state = {
				default: true,
				preview: false,
		};
	}

	render() {
		return (
			<>
				<Global />
				<Wrapper onClick={this.exit}>
					<WorkElement>
						<WorkTitle blur={this.state.previev}>{this.props.title}...</WorkTitle>
						<WorkImage blur={this.state.preview} src={this.props.image} />
						<WorkDescription blur={this.state.preview}>Zmiany na bieżąco publikuję na Snapchacie, oraz Instagramie:</WorkDescription>
						<WorkSocialMediaElement>
							<SnapchatImage />
							<InstagramImage />
						</WorkSocialMediaElement>
					</WorkElement>
				</Wrapper>
			</>
		);
	}
}

export default Work