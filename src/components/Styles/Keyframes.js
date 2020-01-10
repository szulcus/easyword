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

const speedEntry = keyframes`
	from {
		transform: scale(0.5);
		opacity: 0;
	}
	to {
		transform: scale(1);
		opacity: 1;
	}
`

const speedAbsoluteEntry = keyframes`
	from {
		transform: translate(-50%, -40%) scale(0.9);
		opacity: 0;
	}
	to {
		transform: translate(-50%, -50%) scale(1);
		opacity: 1;
	}
`

const speedAbsoluteBack = keyframes`
	0% {
		transform: translate(-50%, -50%) scale(1);
		opacity: 1;
	}
	99% {
		transform: translate(-50%, -40%) scale(0.9);
		opacity: 0;
	}
	100% {
		transform: scale(0);
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
const flyGift = keyframes`
	0% {
		transform: scale(1) rotate(0);
	}
	25% {
		transform: scale(0.99) rotate(1deg);
	}
	50% {
		transform: scale(1) rotate(0);
	}
	75% {
		transform: scale(0.99) rotate(-1deg);
	}
	100% {
		transform: scale(1) rotate(0);
	}
`
const hide = keyframes`
	0% {
		transform: scale(1);
	}
	99% {
		transform: scale(0.5) rotate(200deg);
		opacity: 0
	}
	100% {
		transform: scale(0);
	}
`

const listEntry = keyframes`
	0% {
		transform: translateX(-50%);
		opacity: 0;
	}
	100% {
		transform: translateX(0);
		opacity: 1;
	}
`
const listHover = keyframes`
	0% {
		opacity: 1;
		transform: scale(1);
	}
	100% {
		opacity: 0.8;
		transform: scale(0.98);
	}
`

export {
	entry,
	speedEntry,
	speedAbsoluteEntry,
	speedAbsoluteBack,
	opacity,
	editOpacity,
	flyGift,
	hide,
	listEntry,
	listHover
}