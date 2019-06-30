// BASIC
import React from 'react'
import styled, { css } from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// ICONS
import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faUserTie, faReply, faCog } from '@fortawesome/free-solid-svg-icons'

library.add(faFacebookF, faGithub, faLinkedinIn, faUserTie, faReply, faCog);

const Wrapper = styled.main`
	display: flex;
	height: 100vh;
	
	${props =>
		props.default &&
		css`
			padding: 50px;
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
		props.small &&
		css`
			padding: 20px;
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

	
	`;

const Icon = styled(FontAwesomeIcon)`
	${props =>
		props.list &&
		css`
			color: var(--color-decorative);
			margin-right: 5px;
			margin-left: -15px;
		`
	};

	${props =>
		props.test &&
		css`
			margin: 0 5px;
			color: var(--color-decorative);
			:first-child {
				margin-left: 10px;
			}
		`
	};
`

const Back = props => (
	<PageLink to={props.to}>
		<Icon icon={['fas', 'reply']} />
	</PageLink>
);

// // //

const Emoji = props => (
	<span
		className="emoji"
		role="img"
		aria-label={props.label ? props.label : ""}
		aria-hidden={props.label ? "false" : "true"}
	>
		{props.symbol}
	</span>
);

// STYLES
export {Separator, PageLink, BrowserLink, Wrapper, Icon, Back}
// COMPONENTS
export {Emoji}