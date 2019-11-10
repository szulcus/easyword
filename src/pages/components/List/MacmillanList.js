// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
// STYLES
import Global from '../../../components/Styles/Global'
import { Wrapper } from '../../../components/Styles/Components'
// COMPONENTS
import Book from './components/Book'
import Header from './components/ListElement/Header'
import ListWrapper from './components/ListElement/ListWrapper'
import ListElement from './components/ListElement/ListElement'
import ListElementTest from './components/ListElement/ListElementTest'
// ICONS
import { faReply } from '@fortawesome/free-solid-svg-icons'
import {IoIosTimer} from 'react-icons/io'

library.add(faReply);

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

const ListElementWrapper = styled.div``

const Advertisement = styled.div`
	text-align: center;
	background-color: var(--color-dark);
	padding: 20px;
	margin: 30px 0;
	border-radius: 20px;
`

const AdTitle = styled.h3`
	margin-top: 10px;
`

const Term = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

const TimeIcon = styled(IoIosTimer)`
	line-height: 100%;
	margin-right: 5px;
	font-size: 30px;
color: var(--color-decorative);
`

const SectionTitle = styled.h3``;

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
							<Advertisement>
								<Term>
									<TimeIcon />
									{/* 19.10.2019r | 00:00:00 */}
								</Term>
								<AdTitle>Rozdział 8 - Podróżowanie i turystyka</AdTitle>
							<SectionList>
								<ListElement content="Podróżowanie i środki transportu" path="/macmillan/rozdział-8/podróżowanie-i-środki-transportu" />
								<ListElement content="Informacja turystyczna" path="/macmillan/rozdział-8/informacja-turystyczna" />
								<ListElement content="Baza noclegowa" path="/macmillan/rozdział-8/baza-noclegowa" />
								<ListElement content="Wycieczki i zwiedzanie" path="/macmillan/rozdział-8/wycieczki-i-zwiedzanie" />
								<ListElement content="Wypadki" path="/macmillan/rozdział-8/wypadki" />
								<ListElement content="Inne" path="/macmillan/rozdział-8/inne" />
								<ListElementTest content="Test" path="/macmillan/rozdział-8/test" />
							</SectionList>
							</Advertisement>
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
							<SectionTitle>Rozdział 7 - Zakupy i usługi</SectionTitle>
							<SectionList>
								<ListElement content="Rodzaje sklepów" path="/macmillan/rozdział-7/rodzaje-sklepów" />
								<ListElement content="Opisywanie towarów" path="/macmillan/rozdział-7/opisywanie-towarów" />
								<ListElement content="Sprzedawanie i kupowanie" path="/macmillan/rozdział-7/sprzedawanie-i-kupowanie" />
								<ListElement content="Reklamacje" path="/macmillan/rozdział-7/reklamacje" />
								<ListElement content="Reklama" path="/macmillan/rozdział-7/reklama" />
								<ListElement content="Korzystanie z usług" path="/macmillan/rozdział-7/korzystanie-z-usług" />
								<ListElement content="Środki płatnicze" path="/macmillan/rozdział-7/środki-płatnicze" />
								<ListElement content="Banki" path="/macmillan/rozdział-7/banki" />
								<ListElement content="Ubezpieczenie" path="/macmillan/rozdział-7/ubezpieczenie" />
								<ListElement content="Inne" path="/macmillan/rozdział-7/inne" />
								<ListElementTest content="Test" path="/macmillan/rozdział-7/test" />
							</SectionList>
							<SectionTitle>Rozdział 8 - Podróżowanie i turystyka</SectionTitle>
							<SectionList>
								<ListElement content="Podróżowanie i środki transportu" path="/macmillan/rozdział-8/podróżowanie-i-środki-transportu" />
								<ListElement content="Informacja turystyczna" path="/macmillan/rozdział-8/informacja-turystyczna" />
								<ListElement content="Baza noclegowa" path="/macmillan/rozdział-8/baza-noclegowa" />
								<ListElement content="Wycieczki i zwiedzanie" path="/macmillan/rozdział-8/wycieczki-i-zwiedzanie" />
								<ListElement content="Wypadki" path="/macmillan/rozdział-8/wypadki" />
								<ListElement content="Inne" path="/macmillan/rozdział-8/inne" />
								<ListElementTest content="Test" path="/macmillan/rozdział-8/test" />
							</SectionList>
							<SectionTitle>Rozdział 9 - Kultura</SectionTitle>
							<SectionList>
								<ListElement content="Dziedziny kultury" path="/macmillan/rozdział-9/dziedziny-kultury" />
								<ListElement content="Twórcy i ich dzieła" path="/macmillan/rozdział-9/twórcy-i-ich-dzieła" />
								<ListElement content="Uczestnictwo w kulturze" path="/macmillan/rozdział-9/uczestnictwo-w-kulturze" />
								<ListElement content="Media" path="/macmillan/rozdział-9/media" />
								<ListElement content="Inne" path="/macmillan/rozdział-9/inne" />
								<ListElementTest content="Test" path="/macmillan/rozdział-9/test" />
							</SectionList>
							{/* <SectionTitle>Rozdział</SectionTitle>
							<SectionList>
								<ListElement content="content" path="/macmillan/rozdział" />
								<ListElement content="content" path="/macmillan/rozdział" />
								<ListElement content="content" path="/macmillan/rozdział" />
								<ListElement content="content" path="/macmillan/rozdział" />
								<ListElement content="content" path="/macmillan/rozdział" />
								<ListElement content="Inne" path="/macmillan/rozdział-?/inne" />
								<ListElementTest content="Test" path="/macmillan/rozdział-?/test" />
							</SectionList> */}
						</ListWrapper>
					</ListElementWrapper>
				</Wrapper>
			</>
		);
	}
}

export default List