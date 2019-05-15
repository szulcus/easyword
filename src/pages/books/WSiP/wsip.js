import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Global, {PageLink} from '../../../components/Styled/Global/global'

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

const ListHeader = styled.h1`
	color: white;

	@media (max-width: 768px) {
		text-align: center;
		margin-bottom: 0;
	}
`;

const Back = styled(PageLink)`
	color: var(--color-decorative);
	display: none;
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
		border-radius: 10px;
		background: var(--color-secondary);
	}

	@media (max-width: 1366px) {
		width: 50vw;
	}

	@media (max-width: 768px) {
		width: 90vw;
		padding: 0 20px;
		height: calc(100vh - 150px);
	}
`;

const ListSection = styled.h3`
	color: lightgray;
`;

const ListSubsection = styled.ul`
	list-style: none;

	li {
		padding: 3px;

		::before {
			content: "↪";
			color: gold;
			margin-left: -20px;
			margin-right: 5px;
		}

		:last-child::before {
			content: "🎓";
			text-shadow: 0 0px 7px #998100;
			margin-left: -24px;
		}

		:last-child::after {
			content: "🎓";
			text-shadow: 0 0px 7px #998100;
			margin-left: 7px;
		}
	}
`;

const MacmillanBook = () => (
<>
	<Global/>
	<ListWrapper>
		<Book to='/'>
			<BookImage src="https://sklep.wsip.pl/uploads/tx_evosenk/covers/upload_temp_tF8lhB.jpg" alt="WSiP - Nowyj Dialog 2"/>
		</Book>
		<ListSeparator/>
		<div>
		<ListHeader>
			<div>Spis treści:</div>
			<Back to='/'>↩</Back>
		</ListHeader>
		<List>
			<ol>
				<ListSection>Rozdział 1 - Rejsy</ListSection>
				<ListSubsection>
					<li>
						<PageLink list to='/wsip/wybór-gry-rzeczowniki'>Rzeczowniki</PageLink>
					</li>
					<li>
						<PageLink list to='/wsip'>Strony świata</PageLink>
					</li>
					<li>
						<PageLink list to='/wsip'>Pytania o miejsce i kierunek</PageLink>
					</li>
					<li>
						<PageLink list to='/wsip'>Pory roku i nazwy miesięcy</PageLink>
					</li>
					<li>
						<PageLink list to='/wsip'>Zjawiska pogodowe</PageLink>
					</li>
					<li>
						<PageLink list to='/wsip'>Typy krajobrazu Rosji</PageLink>
					</li>
					<li>
						<PageLink list to='/wsip'>Przyroda</PageLink>
					</li>
					<li>
						<PageLink list to='/wsip'>Aktywny wypoczynek</PageLink>
					</li>
					<li>
						<PageLink list to='/wsip'>Wyposażenie turysty</PageLink>
					</li>
					<li>
						<PageLink list to='/wsip'>Czasowniki</PageLink>
					</li>
					<li>
						<PageLink list to='/wsip'>Zwroty i wyrażenia</PageLink>
					</li>
					<li>
						<PageLink list to='/wsip'>Przyimki</PageLink>
					</li>
					<li>
						<PageLink list to='/wsip/test-rejsy'>Test</PageLink>
					</li>
				</ListSubsection>
				<ListSection>Rozdział 2 - W stolicy Polski</ListSection>
				<ListSubsection>
				<li>
						<PageLink list to='/wsip/wybór-gry'>Rzeczowniki</PageLink>
					</li>
					<li>
						<PageLink list to='/wsip'>Rzeczowniki nieodmienne</PageLink>
					</li>
					<li>
						<PageLink list to='/wsip'>Określanie czasu</PageLink>
					</li>
					<li>
						<PageLink list to='/wsip'>Sztuka</PageLink>
					</li>
					<li>
						<PageLink list to='/wsip'>Kolej</PageLink>
					</li>
					<li>
						<PageLink list to='/wsip'>Kolory</PageLink>
					</li>
					<li>
						<PageLink list to='/wsip'>Przyimki</PageLink>
					</li>
					<li>
						<PageLink list to='/wsip'>Przymiotniki</PageLink>
					</li>
					<li>
						<PageLink list to='/wsip'>Czasowniki</PageLink>
					</li>
					<li>
						<PageLink list to='/wsip'>Przysłówki</PageLink>
					</li>
					<li>
						<PageLink list to='/wsip'>Liczebniki główne</PageLink>
					</li>
					<li>
						<PageLink list to='/wsip'>Zwroty i wyrażenia</PageLink>
					</li>
					<li>
						<PageLink list to='/wsip/test-w-stolicy-polski'>Test</PageLink>
					</li>
				</ListSubsection>
				<ListSection>Rozdział 3 - Wśród przyjaciół</ListSection>
				<ListSubsection>
				<li>
						<PageLink list to='/wsip/wybór-gry'>Rzeczowniki</PageLink>
					</li>
					<li>
						<PageLink list to='/wsip'>Rodzaje budynków mieszkalnych</PageLink>
					</li>
					<li>
						<PageLink list to='/wsip'>Rodzaje pomieszczeń</PageLink>
					</li>
					<li>
						<PageLink list to='/wsip'>Umeblowanie</PageLink>
					</li>
					<li>
						<PageLink list to='/wsip'>Wygląd zewnętrzny człowieka</PageLink>
					</li>
					<li>
						<PageLink list to='/wsip'>Cechy charakteru</PageLink>
					</li>
					<li>
						<PageLink list to='/wsip'>Przymiotniki</PageLink>
					</li>
					<li>
						<PageLink list to='/wsip'>Czasowniki</PageLink>
					</li>
					<li>
						<PageLink list to='/wsip'>Określanie położenia</PageLink>
					</li>
					<li>
						<PageLink list to='/wsip'>Zwroty i wyrażenia</PageLink>
					</li>
					<li>
						<PageLink list to='/wsip/test-w-stolicy-polski'>Test</PageLink>
					</li>
				</ListSubsection>
			</ol>
		</List>
		</div>
	</ListWrapper>
  </>
)

export default MacmillanBook