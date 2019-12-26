// BASIC
import {keyframes } from 'styled-components'

const entry = keyframes`
	from {
		transform: scale(0);
	}
	to {
		transform: scale(1);
	}
`

const opacity = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`
const editOpacity = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 0.5;
	}
`
export {
	entry,
	opacity,
	editOpacity
}