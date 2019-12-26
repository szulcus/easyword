// BASIC
import React from 'react'
import styled, { css } from 'styled-components'
import {Link} from 'react-router-dom'
// ICONS
import { FaFacebookF, FaGithub, FaLinkedinIn, FaUserTie, FaReply, FaCog } from 'react-icons/fa'

const Wrapper = styled.main`
	display: flex;
	width: 100vw;
	height: 100vh;
	
	${props =>
		props.deFault &&
		css`
			padding: 50px;
		`
	}

	${props =>
		props.small &&
		css`
			padding: 20px;
		`
	}

	${props =>
		props.list &&
		css`
			padding: 30px;
			display: flex;
			justify-content: center;
			align-items: center;

			@media (max-width: 768px) {
				flex-direction: column;
				padding: 0 10px;
			}
		`
	}

	${props =>
		props.center &&
		css`
			text-align: center;
			align-items: center;
			flex-direction: column;
		`
	}

	${props =>
		props.scroll &&
		css`
			overflow-y: scroll;
			::-webkit-scrollbar {
				width: 0;
			}
		`
	}
`

const Separator = styled.hr`
	width: calc(100vw - 100px);
	max-width: 1000px;
	height: 0;
	border: 0.5px solid var(--color-decorative);
`;

const PageLink = styled(Link)`
	display: block;
	text-decoration: none;
	color: var(--color-bright);
	transition: all 0.15s ease-in;
	:hover {
		opacity: 0.5;
	}
	
	${props =>
		props.content &&
		css`
			display: contents;
			color: var(--color-decorative)
	`};

	${props =>
		props.center &&
		css`
			display: flex;
			justify-content: center;
	`};
			
	${props =>
		props.styled &&
		css`
			display: flex;
			justify-content: center;
			padding: 0px 20px 5px 20px;
			border-bottom: 1px solid gold;
			transition: all 0.3s ease-in-out;
			:hover {
				padding: 0px 50px 5px 50px;
			}
	`};
			
	${props =>
		props.list &&
		css`
			display: contents;
			color: var(--color-secondary);
			:hover {
				color: var(--color-light);
				opacity: 1;
			}
		`
	};
`;

const BrowserLink = styled.a`
	transition: all .15s ease;
	text-decoration: none;
	color: var(--color-light);
	
	${props =>
		props.socialMedia &&
		css`
			:hover {
				opacity: 0.5;
			}
		`
	};
	
	${props =>
		props.workMedia &&
		css`
		display: block;
		margin: 0 auto;
		width: 30px;
		color: var(--color-decorative);
		font-size: 30px;
			:hover {
				opacity: 0.5;
			}
		`
	};
	`;

const WebLink = props => (
	<BrowserLink workMedia={props.workMedia} href={props.to} target="_blank">
		{props.content}
	</BrowserLink>
);

// // //

const Emoji = props => (
	<span
		className="emoji"
		role="img"
		aria-label={props.label ? props.label : ""}
		aria-hidden={props.label ? "False" : "true"}
	>
		{props.symbol}
	</span>
);

// STYLES
export {Separator, PageLink, BrowserLink, WebLink, Wrapper}
// COMPONENTS
export {Emoji}