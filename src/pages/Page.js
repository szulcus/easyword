// BASIC
import React, {Component} from 'react'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
// STYLED
import Global, {Wrapper, PageLink, Separator, Icon, Back} from '../components/Styled/Global/global'
// ICONS
import { faPencilAlt, faCopy, faFire, faReply } from '@fortawesome/free-solid-svg-icons'

library.add(faPencilAlt, faCopy, faFire, faReply);

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

const StyledIcon = styled(Icon)`
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
							<PageLink to='/easy-word/macmillan'>
								<StyledIcon icon={['fas', 'pencil-alt']}/>
								<div>Pisanie</div>
							</PageLink>
						</Game>
						<Game>
							<PageLink to='/easy-word/macmillan'>
								<StyledIcon icon={['fas', 'copy']}/>
								<div>Dopasowywanie</div>
							</PageLink>
						</Game>
						<Game>
							<PageLink to='/easy-word/macmillan'>
								<StyledIcon icon={['fas', 'fire']}/>
								<div>Tinder</div>
							</PageLink>
						</Game>
					</SelectWrapper>
					<Back to='/easy-word/wsip'>
						<Icon icon={['fas', 'reply']}/>
					</Back>
				</Wrapper>
			</>
		);
	}
};

export default Page