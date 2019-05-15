// BASIC
import React, {Component} from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// SCRIPTS
import getNew from '../../../../components/Scripts/index.1'
import expand from '../../../../components/Scripts/menu-hamburger'
import deleteImage from '../../../../components/Scripts/deleteImage()'
// STYLES
import Global, {Wrapper, PageLink, BrowserLink, Emoji} from '../../../../components/Styled/Global/global';
import '../../../../components/Styled/Keyframes/main-keyframes.css'
// FILES
import information from '../../../../images/information.png'
// ICONS
import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'

library.add(faFacebookF, faGithub, faLinkedinIn, faUserTie);

const Loader = styled.div`
	display: none;
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: black;
	animation: opacity 0.1s ease;
`

const Cathegory = styled.div`
	width: 90vw;
	margin-bottom: 10px;
	color: var(--color-secondary);
	text-align: center;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	text-transform: uppercase;
`;

const Navigation = styled.nav`
	display: flex;
	width: 100%;
	justify-content: space-between;
`;

const Points = styled.div`
	display: block;
	color: var(--color-secondary);
	strong {
		font-weight: bold;
		color: var(--color-primary);
	}
`;


const Hamburger = styled.div`
	display: block;
	position: relative;

	.hamburger {
		display: flex;
		border: 0;
		background-color: transparent;
		cursor: pointer;
	}

	.hamburger__container {
		display: flex;
		align-items: center;
		position: relative;
		width: 35px;
		height: 30px;
	}

	.hamburger__bars {
		position: absolute;
		width: 35px;
		height: 2px;
		background-color: gray;
		transition: transform 220ms ease-in-out;
	}

	.hamburger__bars:before,
	.hamburger__bars:after {
		display: block;
		position: absolute;
		width: 35px;
		height: 2px;
		background-color: gray;
		content: '';
	}

	.hamburger__bars:before {
		top: -12px;
		transition: top 100ms 250ms ease-in, transform 220ms ease-in-out;
	}

	.hamburger__bars:after {
		bottom: -12px;
		transition: bottom 100ms 250ms ease-in, transform 220ms ease-in-out;
	}

	.hamburger--active .hamburger__bars {
		transform: rotate(225deg);
		transition: transform 220ms 120ms ease-in-out;
	}

	.hamburger--active .hamburger__bars:before {
		top: 0;
		transition: top 100ms ease-out;
	}

	.hamburger--active .hamburger__bars:after {
		bottom: 0;
		transform: rotate(-90deg);
		transition: bottom 100ms ease-out, transform 220ms 120ms ease-in-out;
	}

	.hamburger:focus,
	.hamburger__container:focus {
		outline: none;
	}

	#hamburger-list {
		position: absolute;
		top: -12px;
		right: 70px;
		display: flex;
		transition: 0.5s;
		transform: translateX(100vw);

	@media(max-width: 550px) {
		top: 20vh;
		right: 20vw;
		width: 60vw;
		height: 60vh;
		transform: translateY(-100vh);
		flex-direction: column;
		justify-content: center;
		align-items: center;
		top: 0;
	}


		li {
			margin: 0 15px;
			font-size: 17px;
			list-style-type: none;
			cursor: pointer;
			text-transform: uppercase;
		
			:hover {
				animation: opacity 1s ease;
			}

			:nth-child(1) {
				transition-duration: 0.3s;
			}

			:nth-child(2) {
				transition-duration: 0.4s;
			}

			:nth-child(3) {
				transition-duration: 0.5s;
			}

			:nth-child(4) {
				transition-duration: 0.6s;
			}

			@media(max-width: 700px) {
				margin: 0 10px;

				:hover {
					animation: none;
				}

				:nth-child(1) {
					transition-duration: 0.6s;
				}

				:nth-child(2) {
					transition-duration: 0.5s;
				}

				:nth-child(3) {
					transition-duration: 0.4s;
				}

				:nth-child(4) {
					transition-duration: 0.3s;
				}
			}
			@media(max-width: 550px) {
				font-size: 20px;
				width: 100%;
				padding: 30px 0;
				border-bottom: 1px solid gold;
				text-align: center;
				:last-child {
					border-bottom: 0;
				}
			}
		}
	}
`;

const SocialMedia = styled.ul`
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

	li {
		margin: 0 10px;
	}
`

const Firework = styled.img`
	width: 400px;
	@media(max-width: 700px) {
		width: 55vw;
	}
`

const Word = styled.div`
	font-weight: bold;
	margin: 10px 0 5px 0;
`

const Picture = styled.div`
	width: 647px;
	height: 400px;
	margin: 0 auto;
	background-color: gray;
	border-radius: 20px;
	
	img {
		width: 100%;
		height: 100%;
		border-radius: 20px;
	}

	@media(max-width: 700px) {
		width: 90vw;
		height: calc(90vw / 1.618)
	}
`

const DeleteImage = styled.div`
	position: absolute;
	top: 25vh;
	left: 25vw;
	display: none;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 50vw;
	height: 50vh;
	padding: 5vh 5vw;
	text-align: center;
	background: var(--color-dark);
	animation: scale 0.3s ease-in;

	h1 {
		display: block;
		padding: 0;
		margin: 0;
	}

	hr {
		width: 100%;
		border: 0.5px solid var(--color-decorative);
		margin: 3vh 0;
	}

	ul {
		display: flex;
		list-style: none;
		padding: 0;
		margin: 0;
		font-size: 25px;

		li {
			padding: 0 20px;
			transition: opacity 0.15s ease-in-out;
			text-transform: uppercase;

			:hover {
				opacity: 0.5;
				cursor: pointer;
			}
		}
	}

	@media(max-width: 768px) {
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
	}
`

const Win = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: none;
	flex-direction: column-reverse;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	padding: 50px;
	background: var(--color-dark);
	font-size: 30px;
	text-align: center;

	@media(max-width: 768px) {
		padding: 0 30px;
	}
`

const Information = styled.div`
	padding: 30px 0;
	border-top: 1px solid var(--color-decorative);
	border-bottom: 1px solid var(--color-decorative);
	margin-top: -10vh;
	animation: scale 0.3s ease-in;

	p {
		margin: 30px 0;
	}

	@media(max-width: 768px) {
		padding: 20px 0;
		font-size: 20px;
		p {
			margin: 20px 0;
		}
	}
`

const Nav = styled.div`
	button {
		width: 110px;
		font-weight: bold;
		background: var(--color-secondary);
		padding: 7px;
		margin: 0 5px;
		border-radius: 20px;
		outline: none;
		color: lightgray;
		transition: opacity 0.1s ease-in;
		font-family: 'Ubuntu', sans-serif;
		text-transform: uppercase;
		
		:hover {
			cursor: pointer;
			opacity: 0.9;
		}
	}
`
const Input = styled.input`
	width: 500px;
	margin: 15px 0;
	padding: 5px;
	border: 0;
	border-radius: 20px;
	font-size: 20px;
	text-align: center;
	outline: none;
	font-family: 'Ubuntu', sans-serif;
	
	::placeholder {
		transition: all 0.2s ease-in-out;
		color: var(--color-secondary);
	}

	:focus::placeholder {
		opacity: 0;
		transform: scale(0);
	}
	@media(max-width: 550px) {
		width: 90vw;
		margin: 10px 0;

	}
`

const Answer = styled.div`
	text-align: center;
`

const Back = styled(PageLink)`
	font-size: 30px;
	line-height: 20px;
`
class Unit1 extends Component {
	render() {
	return (
		<>
			<Global/>
			<Loader id="loader-bg"/>
			<Wrapper center small onLoad={getNew}>
				<Cathegory id="cathegory">Jakaś bardzo długa i zawiła kategoria</Cathegory>
				<Navigation id="navigation">
					<Points>Punkty: <strong id="pointCounter">0</strong></Points>
					<Hamburger>
						<button onClick={expand} id="hamburger-menu" className="hamburger" aria-label="Menu">
								<span className="hamburger__container" tabIndex="-1">
									<span className="hamburger__bars"></span>
								</span>
						</button>
						<ul id="hamburger-list">
							<li id="hamburger-list-element-1">Całość</li>
							<li id="hamburger-list-element-2">Podstawa</li>
							<li id="hamburger-list-element-3">Rozszerzenie</li>
							<li id="back"><Back to='/macmillan'>↩</Back></li>
						</ul>
					</Hamburger>
					<SocialMedia id="social-media">
						<li>
							<BrowserLink href="https://www.facebook.com/programista.webowy.jakub.schulz"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></BrowserLink>
						</li>
						<li>
							<BrowserLink href="https://github.com/jakub104"><FontAwesomeIcon icon={['fab', 'github']} /></BrowserLink>
						</li>
						<li>
							<BrowserLink href="https://www.linkedin.com/in/jakub-schulz-265931186/"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></BrowserLink>
						</li>
						<li>
							<BrowserLink href="https://programista-webowy-jakub-schulz.000webhostapp.com"><FontAwesomeIcon icon={['fas', 'user-tie']} /></BrowserLink>
						</li>
					</SocialMedia>
				</Navigation>
				<Firework id="firework"></Firework>
				<Word id="baseWord">...</Word>

				<Picture id="picture" onClick={deleteImage}>
					<a href="https://www.google.pl/chrome/?brand=CHBD&gclid=CjwKCAjwp_zkBRBBEiwAndwD9ayiRmEEnDSbN1hUD5bnVb9VYCRjdh87Rm68PNSXyMi1PSjBeSkm-hoCJUcQAvD_BwE&gclsrc=aw.ds">
						<img src={information} alt="Twoja przeglądarka nie wspiera Standardu JavaScript ES6!" title="Pobierz Google Chrome!"/>
					</a>
				</Picture>
				<DeleteImage id="delete-information">
					<h1>Usunąć?</h1>
					<hr/>
					<ul>
						<li id="yes">Tak</li>
						<li id="no">Nie</li>
					</ul>
				</DeleteImage>
				<Win id="end-game">
					<Information id="information">
						<p>Gratulacje! Zdobyłeś już 50 punktów <Emoji symbol="😁"/>.</p>
						<p>Odpocznij chwilę, lub <PageLink to='/macmillan'>zacznij inną grę</PageLink> <Emoji symbol="😃"/>.</p>
					</Information>
				</Win>
				<Input placeholder="Wpisz tłumaczenie" id="userText" type="text"/>
				<Nav id="nav">
					<button id="check">Sprawdź</button>
					<button id="new">Następny</button>
				</Nav>

				<Answer id="answer"></Answer>
			</Wrapper>
	</>
	)
	}
}

export default Unit1