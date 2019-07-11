// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
// STYLES
import Global from '../Styles/Global'
import { Wrapper } from '../Styles/Components'
// COMPONENTS
import Book from './components/Book'
import Header from './components/ListElement/Header'
import ListWrapper from './components/ListElement/ListWrapper'
import ListElement from './components/ListElement/ListElement'
import ListElementTest from './components/ListElement/ListElementTest'
// ICONS
import { faReply } from '@fortawesome/free-solid-svg-icons'

library.add(faReply);

const ListElementWrapper = styled.div``

const Separator = styled.hr`
	display: none;
	@media (min-width: 768px) {
		display: flex;
		width: 0;
		border: 0.5px solid gold;
		height: calc(100vh - 60px);
		margin: 0 30px;
	}
`

const SectionTitle = styled.h3`
	color: lightgray;
`;

const SectionList = styled.ul`
	list-style: none;
`

class List extends Component {
	render() {
		return (
			<>
				<Global />
				<Wrapper list>
					<Book src='https://www.macmillan.pl/components/com_ssshop/cache/500x500/9788376218496.png' information='Macmillan Education. Nr MEN: 916/2017'/>
					<Separator />
					<ListElementWrapper>
						<Header />
						<ListWrapper>
							<SectionTitle>Rozdział 1 - Człowiek</SectionTitle>
							<SectionList>
								<ListElement content="Dane osobowe" path="/macmillan/rozdział-1/dane-osobowe" />
								<ListElement content="Wygląd zewnętrzny" path="/macmillan/rozdział-1/wygląd-zewnętrzny" />
								<ListElement content="Ubrania" path="/macmillan/rozdział-1/ubrania" />
								<ListElement content="Cechy charakteru" path="/macmillan/rozdział-1/cechy-charakteru" />
								<ListElement content="Uczucia i emocje" path="/macmillan/rozdział-1/uczucia-i-emocje" />
								<ListElement content="Zainteresowania" path="/macmillan/rozdział-1/zainteresowania" />
								<ListElement content="Problemy etyczne" path="/macmillan/rozdział-1/problemy-etyczne" />
								<ListElement content="Inne" path="/macmillan/rozdział-1/inne" />
								<ListElementTest content="Test" path="/macmillan/rozdział-1/test" />
							</SectionList>
							<SectionTitle>Rozdział 2 - Dom</SectionTitle>
							<SectionList>
								<ListElement content="Miejsce zamieszkania" path="/macmillan/rozdział-2/dom" />
								<ListElement content="Opis Domu" path="/macmillan/rozdział-2/opis-domu" />
								<ListElement content="Prace w domu i ogrodzie" path="/macmillan/rozdział-2/prace-w-domu-i-ogrodzie" />
								<ListElement content="Wynajem, kupno i sprzedaż nieruchomości" path="/macmillan/rozdział-2/wynajem-kupno-i-sprzedaż-nieruchomości" />
								<ListElement content="Inne" path="/macmillan/rozdział-2/inne" />
								<ListElementTest content="Test" path="/macmillan/rozdział-2/test" />
							</SectionList>
							<SectionTitle>Rozdział 3 - Szkoła</SectionTitle>
							<SectionList>
								<ListElement content="Przedmioty szkolne" path="/rozdział-3/przedmioty-szkolne" />
								<ListElement content="Oceny i wymagania" path="/macmillan/rozdział-3/oceny-i-wymagania" />
								<ListElement content="Życie szkolne" path="/macmillan/rozdział-3/życie-szkolne" />
								<ListElement content="Zajęcia pozalekcyjne" path="/macmillan/rozdział-3/zajęcia-pozalekcyjne" />
								<ListElement content="System oświaty" path="/macmillan/rozdział-3/system-oświaty" />
								<ListElement content="Inne" path="/macmillan/rozdział-3/inne" />
								<ListElementTest content="Test" path="/macmillan/rozdział-3/test" />
							</SectionList>
							<SectionTitle>Rozdział 4 - Praca</SectionTitle>
							<SectionList>
								<ListElement content="Zawody i związane z nimi czynności" path="/macmillan/rozdział-4/zawody-i-związane-z-nimi-czynności" />
								<ListElement content="Warunki pracy i zatrudnienia" path="/macmillan/rozdział-4/warunki-pracy-i-zatrudnienia" />
								<ListElement content="Praca dorywcza" path="/macmillan/praca-dorywcza" />
								<ListElement content="Rynek pracy" path="/macmillan/rynek-pracy" />
								<ListElement content="Inne" path="/macmillan/rozdział-4/inne" />
								<ListElementTest content="Test" path="/macmillan/rozdział-4/test" />
							</SectionList>
							<SectionTitle>Rozdział 5 - Życie rodzinne i towarzyskie</SectionTitle>
							<SectionList>
								<ListElement content="Etapy życia" path="/macmillan/rozdział-5/etapy-życia" />
								<ListElement content="Członkowie rodziny, koledzy i przyjaciele" path="/macmillan/rozdział-5/członkowie-rodziny-koledzy-i-przyjaciele" />
								<ListElement content="Czynności życia codziennego" path="/macmillan/rozdział-5/członkowie-rodziny-koledzy-i-przyjaciele" />
								<ListElement content="Formy spędzania czasu wolnego" path="/macmillan/rozdział-5/formy-spędzania-czasu-wolnego" />
								<ListElement content="Święta i uroczystości" path="/macmillan/rozdział-5/święta-i-uroczystości" />
								<ListElement content="Styl życia, konflikty i problemy" path="/macmillan/rozdział-5/styl-życia-konflikty-i-problemy" />
								<ListElement content="Inne" path="/macmillan/rozdział-5/inne" />
								<ListElementTest content="Test" path="/macmillan/rozdział-5/test" />
							</SectionList>
						</ListWrapper>
					</ListElementWrapper>
				</Wrapper>
			</>
		);
	}
}

export default List