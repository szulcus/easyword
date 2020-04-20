// BASIC
import React, {Component} from 'react'
import styled from 'styled-components'
// STYLED
import Global, {Wrapper, PageLink, Separator, Back} from '../components/Styles/Global'
// ICONS
import { FaPencilAlt, FaCopy, FaFire, FaReply } from 'react-icons/fa'

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
	color: var(--color-main);
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
								<FaPencilAlt />
								<div>Pisanie</div>
							</PageLink>
						</Game>
						<Game>
							<PageLink to='/macmillan'>
								<FaCopy />
								<div>Dopasowywanie</div>
							</PageLink>
						</Game>
						<Game>
							<PageLink to='/macmillan'>
								<FaFire />
								<div>Tinder</div>
							</PageLink>
						</Game>
					</SelectWrapper>
					<Back to='/wsip'>
						<FaReply />
					</Back>
				</Wrapper>
			</>
		);
	}
};

export default Page