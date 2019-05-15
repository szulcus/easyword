import React from 'react'
import styled, {createGlobalStyle, css} from 'styled-components'
import {Link} from 'react-router-dom'


const Global = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Ubuntu:400,700&subset=latin-ext');
	
	*, *::before, *::after {
		box-sizing: border-box;
	}
	
	* {
		--color-primary: lightgray;
		--color-secondary: gray;
		--color-decorative: gold;
		--color-background: #303030;
		--color-background-app: #202020;
		--color-light: #ffffff;
		--color-dark: #000000;
	}
	
	body {
		width: 100vw;
		height: 100vh;
		margin: 0;
		padding: 0;
		background-color: var(--color-background-app);
		color: var(--color-primary);
		font-size: 20px;
		font-family: 'Ubuntu', sans-serif;
		overflow: hidden;
	}
	`;

const Wrapper = styled.main`
	display: flex;
	padding: 50px;
	
	${props =>
		props.center &&
		css`
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
`;

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
			`};
			`;

const BrowserLink = styled.a`
	transition: all .15s ease;
	text-decoration: none;
	color: var(--color-primary);
	
	:hover {
		opacity: 0.5;
	}
	`;

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
export default Global
export {Separator, PageLink, BrowserLink, Wrapper}
// COMPONENTS
export {Emoji}