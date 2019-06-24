// BASIC
import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
// STYLES
import Global, {PageLink, Icon} from '../../../components/Styled/Global/global'
// ICONS
import { faAngleRight, faStar, faReply } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleRight, faStar, faReply);

const ListWrapper = styled.div`
	padding: 30px;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 768px) {
		flex-direction: column;
		padding: 0 10px;
	}
`;

const Book = styled(Link)`
	display: flex;
	align-items: center;
`;

const BookImage = styled.img`
	width: 300px;
	transition: all 0.2s ease;

	:hover {
		box-shadow: 0 0 30px gray;
	}

	@media (max-width: 768px) {
		display: none;
	}
`;

const ListSeparator = styled.hr`
	border: 0.5px solid gold;
	height: calc(100vh - 60px);
	width: 0;
	margin: 0 30px;
	@media (max-width: 768px) {
		display: none;
	}
`;

const ListHeader = styled.header`
	display: block;
	width: 100%;
	color: white;

	h1 {
		margin-bottom: 0;
	}

	@media (max-width: 768px) {
		text-align: center;
		margin-bottom: 5px;
	}
`;

const Back = styled(PageLink)`
	display: none;
	font-size: 25px;
	margin: 0;
	color: var(--color-decorative);
	@media (max-width: 768px) {
		display: block;
	}
`

const List = styled.div`
	width: 800px;
	height: calc(100vh - 200px);
	overflow-y: scroll;
	padding-right: 30px;

	::-webkit-scrollbar {
		width: 3px;
	}

	::-webkit-scrollbar-track {
		background: var(--color-dark); 
		border-radius: 3px;
	}
	::-webkit-scrollbar-thumb {
		background: var(--color-secondary);
	}

	@media (max-width: 1366px) {
		width: 50vw;
	}

	@media (max-width: 768px) {
		width: 90vw;
		padding: 0 20px;
		height: calc(100vh - 150px);

		ol {
			padding: 0;
		}
	}
`;

const ListSection = styled.h3`
	color: lightgray;
`;

const ListSubsection = styled.ul`
	list-style: none;

	li {
		padding: 3px;
	}

	li:last-child {
		padding-top: 10px;
	}
`;

const MacmillanBook = () => (
<>
	<Global/>
	<ListWrapper>
		<Book to='/easy-word/'>
			<BookImage src="https://sklep.wsip.pl/uploads/tx_evosenk/covers/upload_temp_tF8lhB.jpg" alt="WSiP - Nowyj Dialog 2"/>
		</Book>
		<ListSeparator/>
		<div>
		<ListHeader>
			<h1>Spis treści:</h1>
			<Back to='/'>
				<Icon list icon={['fas', 'reply']}/>
			</Back>
		</ListHeader>
		<List>
			<ol>
				<ListSection>Rozdział 1 - Rejsy</ListSection>
				<ListSubsection>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/wsip/rzeczowniki-wybór-gry/pisanie'>Rzeczowniki</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/wsip'>Strony świata</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/wsip'>Pytania o miejsce i kierunek</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/wsip'>Pory roku i nazwy miesięcy</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/wsip'>Zjawiska pogodowe</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/wsip'>Typy krajobrazu Rosji</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/wsip'>Przyroda</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/wsip'>Aktywny wypoczynek</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/wsip'>Wyposażenie turysty</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/wsip'>Czasowniki</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/wsip'>Zwroty i wyrażenia</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/wsip'>Przyimki</PageLink>
					</li>
					<li>
						<Icon test icon={['fas', 'star']}/>
						<PageLink list to='/wsip/test-rejsy'>Test</PageLink>
						<Icon test icon={['fas', 'star']}/>
					</li>
				</ListSubsection>
				<ListSection>Rozdział 2 - W stolicy Polski</ListSection>
				<ListSubsection>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/wsip/wybór-gry'>Rzeczowniki</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/wsip'>Rzeczowniki nieodmienne</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/wsip'>Określanie czasu</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/wsip'>Sztuka</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/wsip'>Kolej</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/wsip'>Kolory</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/wsip'>Przyimki</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/wsip'>Przymiotniki</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/wsip'>Czasowniki</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/wsip'>Przysłówki</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/wsip'>Liczebniki główne</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/wsip'>Zwroty i wyrażenia</PageLink>
					</li>
					<li>
						<Icon test icon={['fas', 'star']}/>
						<PageLink list to='/wsip/test-w-stolicy-polski'>Test</PageLink>
						<Icon test icon={['fas', 'star']}/>
					</li>
				</ListSubsection>
				<ListSection>Rozdział 3 - Wśród przyjaciół</ListSection>
				<ListSubsection>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/wsip/wybór-gry'>Rzeczowniki</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/wsip'>Rodzaje budynków mieszkalnych</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/wsip'>Rodzaje pomieszczeń</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/wsip'>Umeblowanie</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/wsip'>Wygląd zewnętrzny człowieka</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/wsip'>Cechy charakteru</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/wsip'>Przymiotniki</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/wsip'>Czasowniki</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/wsip'>Określanie położenia</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/wsip'>Zwroty i wyrażenia</PageLink>
					</li>
					<li>
						<Icon test icon={['fas', 'star']}/>
						<PageLink list to='/wsip/test-w-stolicy-polski'>Test</PageLink>
						<Icon test icon={['fas', 'star']}/>
					</li>
				</ListSubsection>
			</ol>
		</List>
		</div>
	</ListWrapper>
  </>
)

export default MacmillanBook