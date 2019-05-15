// BASIC
import React, {Component} from 'react'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// STYLED
import Global, {Wrapper, PageLink, Separator} from '../components/Styled/Global/global'
// ICONS
import {  } from '@fortawesome/free-brands-svg-icons'
import { faPencilAlt, faCopy, faFire } from '@fortawesome/free-solid-svg-icons'

library.add(faPencilAlt, faCopy, faFire);

const Header = styled.header`
	font-size: 30px;
	text-transform: uppercase;
`
const SelectWrapper = styled.section`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	width: 100vw;
	height: calc(100vh - 120px);
	overflow-y: scroll;

	::-webkit-scrollbar {
		width: 0;
	}
`
const Game = styled.div`
	margin: 70px;
	text-align: center;
	
	div {
		margin-top: 10px;
		font-size: 25px;
		color: var(--color-primary);
	}
	`

const Icon = styled(FontAwesomeIcon)`
	font-size: 50px;
	color: var(--color-decorative);
`

class Page extends Component {
	render() {
		return (
			<>
				<Global/>
				<Wrapper center>
					<Header>Wybierz grę</Header>
					<Separator/>
					<SelectWrapper>
						<Game>
							<PageLink to='/macmillan'>
								<Icon icon={['fas', 'pencil-alt']}/>
								<div>Pisanie</div>
							</PageLink>
						</Game>
						<Game>
							<PageLink to='/macmillan'>
								<Icon icon={['fas', 'copy']}/>
								<div>Dopasowywanie</div>
							</PageLink>
						</Game>
						<Game>
							
							<PageLink to='/macmillan'>
								<Icon icon={['fas', 'fire']}/>
								<div>Tinder</div>
							</PageLink>
						</Game>
					</SelectWrapper>
				</Wrapper>
			</>
		);
	}
};

export default Page