// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
//STYLES
import { Icon, PageLink } from '../../../../../components/Styles/Components'
// ICONS
import { faReply } from '@fortawesome/free-solid-svg-icons'

library.add(faReply);

const HeaderElement = styled.header`
	text-align: center;
	margin-bottom: 5px;
	@media (min-width: 768px) {
		display: block;
		width: 100%;
		color: white;
	}
`

const Title = styled.h1`
	margin-bottom: 0;
`

const Back = styled(PageLink)`
	display: none;
	font-size: 25px;
	margin: 0;
	color: var(--color-decorative);
	@media (max-width: 768px) {
		display: block;
	}
`

class Header extends Component {
	render() {
		return (
			<HeaderElement>
				<Title>Spis treści:</Title>
				<Back to='/'>
					<Icon list icon={['fas', 'reply']}/>
				</Back>
			</HeaderElement>
		);
	}
}

export default Header