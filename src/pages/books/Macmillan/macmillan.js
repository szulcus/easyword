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
			<BookImage src="https://www.macmillan.pl/components/com_ssshop/cache/500x500/9788376218496.png" alt="https://www.macmillan.pl/katalog/repetytorium-dla-uczniow-liceow-i-technikow-poziom-podstawowy-i-rozszerzony-wersja-wieloletnia,p-642-84"/>
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
				<ListSection>Rozdział 1 - Człowiek</ListSection>
				<ListSubsection>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/macmillan/wybór-gry'>Dane osobowe</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/macmillan'>Wygląd zewnętrzny</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/macmillan'>Ubrania</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/macmillan'>Cechy charakteru</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/macmillan'>Uczucia i emocje</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/macmillan'>Zainteresowania</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/macmillan'>Problemy etyczne</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/macmillan'>Inne</PageLink>
					</li>
					<li>
						<Icon test icon={['fas', 'star']}/>
						<PageLink list to='/macmillan/test-człowiek'>Test</PageLink>
						<Icon test icon={['fas', 'star']}/>
					</li>
				</ListSubsection>
				<ListSection>Rozdział 2 - Dom</ListSection>
				<ListSubsection>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/macmillan'>Miejsce zamieszkania</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/macmillan'>Opis Domu</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/macmillan'>Prace w domu i ogrodzie</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/macmillan'>Wynajem, kupno i sprzedaż nieruchomości</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/macmillan'>Inne</PageLink>
					</li>
					<li>
						<Icon test icon={['fas', 'star']}/>
						<PageLink list to='/macmillan/test-dom'>Test</PageLink>
						<Icon test icon={['fas', 'star']}/>
					</li>
				</ListSubsection>

				<ListSection>Rozdział 3 - Szkoła</ListSection>
				<ListSubsection>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/macmillan'>Przedmioty szkolne</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/macmillan'>Oceny i wymagania</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/macmillan'>Życie szkolne</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/macmillan'>Zajęcia pozalekcyjne</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/macmillan'>Education system</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/macmillan'>Inne</PageLink>
					</li>
					<li>
						<Icon test icon={['fas', 'star']}/>
						<PageLink list to='/macmillan/test-szkoła'>Test</PageLink>
						<Icon test icon={['fas', 'star']}/>
					</li>
				</ListSubsection>
				<ListSection>Rozdział 4 - Praca</ListSection>
				<ListSubsection>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/macmillan'>Zawody związane z innymi czynnościami</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/macmillan'>Warunki pracy i zatrudnienia</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/macmillan'>Praca dorywcza</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/macmillan'>Rynek pracy</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/macmillan'>Inne</PageLink>
					</li>
					<li>
						<Icon test icon={['fas', 'star']}/>
						<PageLink list to='/macmillan/test-praca'>Test</PageLink>
						<Icon test icon={['fas', 'star']}/>
					</li>
				</ListSubsection>
				<ListSection>Rozdział 5 - Życie rodzinne i towarzyskie</ListSection>
				<ListSubsection>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/macmillan'>Etapy życia</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/macmillan'>Członkowie rodziny, koledzy i przyjaciele</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/macmillan'>Czynności życia codziennego</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/macmillan'>Formy spędzania czasu wolnego</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/macmillan'>Święta i uroczystości</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/macmillan'>Styl życia, konflikty i problemy</PageLink>
					</li>
					<li>
						<Icon list icon={['fas', 'angle-right']}/>
						<PageLink list to='/macmillan'>Inne</PageLink>
					</li>
					<li>
						<Icon test icon={['fas', 'star']}/>
						<PageLink list to='/macmillan/test-życie-rodzinne-i-towarzyskie'>Test</PageLink>
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