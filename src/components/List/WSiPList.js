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
					<Book src='https://sklep.wsip.pl/uploads/tx_evosenk/covers/upload_temp_tF8lhB.jpg' information='WSiP - Nowyj Dialog 2. ISBN 978-83-02-15587-1'/>
					<Separator />
					<ListElementWrapper>
						<Header />
						<ListWrapper>
							<SectionTitle>Rozdział 1 - Podróże</SectionTitle>
							<SectionList>
								<ListElement content="Rzeczowniki" path="/wsip/rozdział-1/rzeczowniki" />
								<ListElement content="Strony świata" path="/wsip/rozdział-1/strony-świata" />
								<ListElement content="Pytania o miejsce i kierunek" path="/wsip/rozdział-1/pytania-o-miejsce-i-kierunek" />
								<ListElement content="Pory roku i nazwy miesięcy" path="/wsip/rozdział-1/pory-roku-i-nazwy-miesięcy" />
								<ListElement content="Zjawiska pogodowe" path="/wsip/rozdział-1/zjawiska-pogodowe" />
								<ListElement content="Typy krajobrazu Rosji" path="/wsip/rozdział-1/typy-krajobrazu-rosji" />
								<ListElement content="Przyroda" path="/wsip/rozdział-1/przyroda" />
								<ListElement content="Aktywny wypoczynek" path="/wsip/rozdział-1/aktywny-wypoczynek" />
								<ListElement content="Wyposażenie turysty" path="/wsip/rozdział-1/wyposażenie-turysty" />
								<ListElement content="Czasowniki" path="/wsip/rozdział-1/czasowniki" />
								<ListElement content="Zwroty i wyrażenia" path="/wsip/rozdział-1/zwroty-i-wyrażenia" />
								<ListElement content="Przyimki" path="/wsip/rozdział-1/przyimki" />
								<ListElementTest content="Test" path="/wsip/rozdział-1/test" />
							</SectionList>
							<SectionTitle>Rozdział 2 - W stolicy Polski</SectionTitle>
							<SectionList>
								<ListElement content="Rzeczowniki" path="/wsip/rozdział-2/rzeczowniki" />
								<ListElement content="Rzeczowniki nieodmienne" path="/wsip/rozdział-2/rzeczowniki-nieodmienne" />
								<ListElement content="Określanie czasu" path="/wsip/rozdział-2/określanie-czasu" />
								<ListElement content="Sztuka" path="/wsip/rozdział-2/sztuka" />
								<ListElement content="Kolej" path="/wsip/rozdział-2/kolej" />
								<ListElement content="Kolory" path="/wsip/rozdział-2/kolory" />
								<ListElement content="Przyimki" path="/wsip/rozdział-2/przyimki" />
								<ListElement content="Przymiotniki" path="/wsip/rozdział-2/przymiotniki" />
								<ListElement content="Czasowniki" path="/wsip/rozdział-2/czasowniki" />
								<ListElement content="Przysłówki" path="/wsip/rozdział-2/przysłówki" />
								<ListElement content="Liczebniki główne" path="/wsip/rozdział-2/liczebniki-główne" />
								<ListElement content="Zwroty i wyrażenia" path="/wsip/zwroty-i-wyrażenia" />
								<ListElementTest content="Test" path="/wsip/rozdział-2/test" />
							</SectionList>
							<SectionTitle>Rozdział 3 - Wśród przyjaciół</SectionTitle>
							<SectionList>
								<ListElement content="Rzeczowniki" path="/wsip/rozdział-3/rzeczowniki" />
								<ListElement content="Rodzaje budynków mieszkalnych" path="/wsip/rozdział-3/rodzaje-budynków-mieszkalnych" />
								<ListElement content="Rodzaje pomieszczeń" path="/wsip/rozdział-3/rodzaje-pomieszczeń" />
								<ListElement content="Umeblowanie" path="/wsip/rozdział-3/umeblowanie" />
								<ListElement content="Wygląd zewnętrzny człowieka" path="/wsip/rozdział-3/wygląd-zewnętrzny-człowieka" />
								<ListElement content="Cechy charakteru" path="/wsip/rozdział-3/cechy-charakteru" />
								<ListElement content="Przymiotniki" path="/wsip/rozdział-3/przymiotniki" />
								<ListElement content="Czasowniki" path="/wsip/rozdział-3/czasowniki" />
								<ListElement content="Określenia położenia" path="/wsip/rozdział-3/określenia-położenia" />
								<ListElement content="Zwroty i wyrażenia" path="/wsip/rozdział-3/zwroty-i-wyrażenia" />
								<ListElementTest content="Test" path="/wsip/rozdział-3/test" />
							</SectionList>
						</ListWrapper>
					</ListElementWrapper>
				</Wrapper>
			</>
		);
	}
}

export default List