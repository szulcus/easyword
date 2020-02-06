// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import 'moment/locale/pl'
// STYLES
import Global from '../../../Components/Styles/Global'
import { Wrapper } from '../../../Components/Styles/Components'
// COMPONENTS
import Book from './components/Book'
import Header from './components/ListElement/Header'
import ListWrapper from './components/ListElement/ListWrapper'
import Unit from './components/Unit'

const Separator = styled.hr`
	display: none;
	@media (min-width: 800px) {
		display: flex;
		width: 0;
		border: 0.5px solid gold;
		height: calc(100vh - 60px);
		margin: 0 30px;
	}
`

const ListElementWrapper = styled.div``

const Advertisement = styled.div`
	background-color: var(--color-dark);
	padding: 10px;
	margin-bottom: 50px;
	border-radius: 20px;
	@media (min-width: 600px) {
		padding: 10px 20px;
	}
`

const Term = styled.div`
	display: flex;
	justify-content: space-around;
	line-height: 100%;
	margin: 20px;
	font-size: 30px;
	color: var(--color-decorative);
`

const Line = styled.div`
	display: none;
		@media (min-width: 600px) {
			display: block;
		}
`

const Time = styled.div`
	width: 200px;
	font-size: 20px;
	text-align: center;
	::after {
		content: ' 😉';
	}
`

const Date = styled.div`
	width: 200px;
	font-size: 20px;
	text-align: center;
	display: none;
		@media (min-width: 600px) {
			display: block;
		}
`

class List extends Component {
	state = {
		plannedDate: '20200128',
	}
	render() {
		moment.locale('pl')
		return (
			<>
				<Global />
				<Wrapper list>
					<Book src='https://sklep.wsip.pl/uploads/tx_evosenk/covers/upload_temp_kyFIwn.jpg' information='WSiP - język angielski zawodowy w logistyce i spedycji. Zeszyt ćwiczeń'/>
					<Separator />
					<ListElementWrapper>
						<Header />
						<ListWrapper>
							{/* <Term>
								<Date>{`${moment(this.state.plannedDate, "YYYYMMDD").format('LL')}r`}</Date>
								<Line>|</Line>
								<Time>{moment(this.state.plannedDate, "YYYYMMDD").add(11, 'hours').add(40, 'minutes').fromNow()}</Time>
							</Term> */}
							<Advertisement>
								<Unit
									book='jezyk-angielski-zawodowy'
									number = '6'
									title = 'Materiały i towary'
								/>
							</Advertisement>
							{/* <Unit
								book='jezyk-angielski-zawodowy'
								number = '01'
								title = 'Podstawowa terminologia'
								// links = {[
								// 	{
								// 		path: '/jezyk-angielski-zawodowy/rozdzial-1/podstawowa-terminologia'
								// 	}
								// ]}
							/>
							<Unit
								book='jezyk-angielski-zawodowy'
								number = '02'
								title = 'Dom'
								links = {[
									{
										title: 'Miejsce zamieszkania',
										path: '/jezyk-angielski-zawodowy/rozdzial-2.1/dom'
									},
									{
										title: 'Opis Domu',
										path: '/jezyk-angielski-zawodowy/rozdzial-2.2/opis-domu'
									},
									{
										title: 'Prace w domu i ogrodzie',
										path: '/jezyk-angielski-zawodowy/rozdzial-2.3/prace-w-domu-i-ogrodzie'
									},
									{
										title: 'Wynajem, kupno i sprzedaż nieruchomości',
										path: '/jezyk-angielski-zawodowy/rozdzial-2.4/wynajem-kupno-i-sprzedaż-nieruchomości'
									}
								]}
							/>
							<Unit
								book='jezyk-angielski-zawodowy'
								number = '03'
								title = 'Szkola'
								links = {[
									{
										title: 'Przedmioty szkolne',
										path: '/jezyk-angielski-zawodowy/rozdzial-3.1/przedmioty-szkolne'
									},
									{
										title: 'Oceny i wymagania',
										path: '/jezyk-angielski-zawodowy/rozdzial-3.2/oceny-i-wymagania'
									},
									{
										title: 'Życie szkolne',
										path: '/jezyk-angielski-zawodowy/rozdzial-3.3/życie-szkolne'
									},
									{
										title: 'Zajęcia pozalekcyjne',
										path: '/jezyk-angielski-zawodowy/rozdzial-3.4/zajęcia-pozalekcyjne'
									},
									{
										title: 'System oświaty',
										path: '/jezyk-angielski-zawodowy/rozdzial-3.5/system-oświaty'
									}
								]}
							/>
							<Unit
								book='jezyk-angielski-zawodowy'
								number = '04'
								title = 'Praca'
								links = {[
									{
										title: 'Zawody i związane z nimi czynności',
										path: '/jezyk-angielski-zawodowy/rozdzial-4.1/zawody-i-związane-z-nimi-czynności'
									},
									{
										title: 'Warunki pracy i zatrudnienia',
										path: '/jezyk-angielski-zawodowy/rozdzial-4.2/warunki-pracy-i-zatrudnienia'
									},
									{
										title: 'Praca dorywcza',
										path: '/jezyk-angielski-zawodowy/rozdzial-4.3/praca-dorywcza'
									},
									{
										title: 'Rynek pracy',
										path: '/jezyk-angielski-zawodowy/rozdzial-4.4/rynek-pracy'
									}
								]}
							/>
							<Unit
								book='jezyk-angielski-zawodowy'
								number = '05'
								title = 'Życie rodzinne i towarzyskie'
								links = {[
									{
										title: 'Etapy życia',
										path: '/jezyk-angielski-zawodowy/rozdzial-5.1/etapy-życia'
									},
									{
										title: 'Czlonkowie rodziny, koledzy i przyjaciele',
										path: '/jezyk-angielski-zawodowy/rozdzial-5.2/czlonkowie-rodziny-koledzy-i-przyjaciele'
									},
									{
										title: 'Czynności życia codziennego',
										path: '/jezyk-angielski-zawodowy/rozdzial-5.3/czynności-życia-codziennego'
									},
									{
										title: 'Formy spędzania czasu wolnego',
										path: '/jezyk-angielski-zawodowy/rozdzial-5.4/formy-spędzania-czasu-wolnego'
									},
									{
										title: 'Święta i uroczystości',
										path: '/jezyk-angielski-zawodowy/rozdzial-5.5/święta-i-uroczystości'
									},
									{
										title: 'Styl życia, konflikty i problemy',
										path: '/jezyk-angielski-zawodowy/rozdzial-5.6/styl-życia-konflikty-i-problemy'
									}
								]}
							/>
							<Unit
								book='jezyk-angielski-zawodowy'
								number = '06'
								title = 'Zakupy i uslugi'
								links = {[
									{
										title: 'Artykuly spożywcze',
										path: '/jezyk-angielski-zawodowy/rozdzial-6.1/artykuly-spozywcze'
									},
									{
										title: 'Posilki i ich przygotowanie',
										path: '/jezyk-angielski-zawodowy/rozdzial-6.2/posilki-i-ich-przygotowanie'
									},
									{
										title: 'Lokale gastronomiczne',
										path: '/jezyk-angielski-zawodowy/rozdzial-6.3/lokale-gastronomiczne'
									},
									{
										title: 'Diety',
										path: '/jezyk-angielski-zawodowy/rozdzial-6.4/diety'
									}
								]}
							/>
							<Unit
								book='jezyk-angielski-zawodowy'
								number = '07'
								title = 'Zakupy i uslugi'
								links = {[
									{
										title: 'Rodzaje sklepów',
										path: '/jezyk-angielski-zawodowy/rozdzial-7.1/rodzaje-sklepów'
									},
									{
										title: 'Opisywanie towarów',
										path: '/jezyk-angielski-zawodowy/rozdzial-7.2/opisywanie-towarów'
									},
									{
										title: 'Sprzedawanie i kupowanie',
										path: '/jezyk-angielski-zawodowy/rozdzial-7.3/sprzedawanie-i-kupowanie'
									},
									{
										title: 'Reklamacje',
										path: '/jezyk-angielski-zawodowy/rozdzial-7.4/reklamacje'
									},
									{
										title: 'Reklama',
										path: '/jezyk-angielski-zawodowy/rozdzial-7.5/reklama'
									},
									{
										title: 'Korzystanie z uslug',
										path: '/jezyk-angielski-zawodowy/rozdzial-7.6/korzystanie-z-uslug'
									},
									{
										title: 'Środki platnicze',
										path: '/jezyk-angielski-zawodowy/rozdzial-7.7/środki-platnicze'
									},
									{
										title: 'Banki',
										path: '/jezyk-angielski-zawodowy/rozdzial-7.8/banki'
									},
									{
										title: 'Ubezpieczenie',
										path: '/jezyk-angielski-zawodowy/rozdzial-7.9/ubezpieczenie'
									}
								]}
							/>
							<Unit
								book='jezyk-angielski-zawodowy'
								number = '08'
								title = 'Podróżowanie i turystyka'
								links = {[
									{
										title: 'Podróżowanie i środki transportu',
										path: '/jezyk-angielski-zawodowy/rozdzial-8.1/podróżowanie-i-środki-transportu'
									},
									{
										title: 'Informacja turystyczna',
										path: '/jezyk-angielski-zawodowy/rozdzial-8.2/informacja-turystyczna'
									},
									{
										title: 'Baza noclegowa',
										path: '/jezyk-angielski-zawodowy/rozdzial-8.3/baza-noclegowa'
									},
									{
										title: 'Wycieczki i zwiedzanie',
										path: '/jezyk-angielski-zawodowy/rozdzial-8.4/wycieczki-i-zwiedzanie'
									},
									{
										title: 'Wypadki',
										path: '/jezyk-angielski-zawodowy/rozdzial-8.5/wypadki'
									}
								]}
							/>
							<Unit
								book='jezyk-angielski-zawodowy'
								number = '09'
								title = 'Kultura'
								links = {[
									{
										title: 'Dziedziny kultury',
										path: '/jezyk-angielski-zawodowy/rozdzial-9.1/dziedziny-kultury'
									},
									{
										title: 'Twórcy i ich dziela',
										path: '/jezyk-angielski-zawodowy/rozdzial-9.2/twórcy-i-ich-dziela'
									},
									{
										title: 'Uczestnictwo w kulturze',
										path: '/jezyk-angielski-zawodowy/rozdzial-9.3/uczestnictwo-w-kulturze'
									},
									{
										title: 'Media',
										path: '/jezyk-angielski-zawodowy/rozdzial-9.4/media'
									}
								]}
							/>
							<Unit
								book='jezyk-angielski-zawodowy'
								number = '10'
								title = 'Sport'
								links = {[
									{
										title: 'Dyscypliny sportu',
										path: '/jezyk-angielski-zawodowy/rozdzial-10.1/dyscypliny-sportu'
									},
									{
										title: 'Imprezy sportowe',
										path: '/jezyk-angielski-zawodowy/rozdzial-10.2/imprezy-sportowe'
									},
									{
										title: 'Sport wyczynowy',
										path: '/jezyk-angielski-zawodowy/rozdzial-10.3/sport-wyczynowy'
									}
								]}
							/>
							<Unit
								book='jezyk-angielski-zawodowy'
								number = '11'
								title = 'Zdrowie'
								links = {[
									{
										title: 'Samopoczucie',
										path: '/jezyk-angielski-zawodowy/rozdzial-11.1/samopoczucie'
									},
									{
										title: 'Częsci ciala',
										path: '/jezyk-angielski-zawodowy/rozdzial-11.2/czesci-ciala'
									},
									{
										title: 'Zdrowy styl życia',
										path: '/jezyk-angielski-zawodowy/rozdzial-11.3/zdrowy-styl-zycia'
									},
									{
										title: 'Niepelnosprawni',
										path: '/jezyk-angielski-zawodowy/rozdzial-11.4/niepelnosprawni'
									},
									{
										title: 'Uzależnienia',
										path: '/jezyk-angielski-zawodowy/rozdzial-11.5/uzaleznienia'
									},
									{
										title: 'Ochrona zdrowia',
										path: '/jezyk-angielski-zawodowy/rozdzial-11.6/ochrona-zdrowia'
									},
									
								]}
							/>
							<Unit
								book='jezyk-angielski-zawodowy'
								number = '12'
								title = 'Nauka i technika'
								links = {[
									{
										title: 'Dziedziny nauki i naukowcy',
										path: '/jezyk-angielski-zawodowy/rozdzial-12.1/dziedziny-nauki-i-naukowcy'
									},
									{
										title: 'Wynalazki i odkrycia',
										path: '/jezyk-angielski-zawodowy/rozdzial-12.2/wynalazki-i-odkrycia'
									},
									{
										title: 'Badania naukowe',
										path: '/jezyk-angielski-zawodowy/rozdzial-12.3/badania-naukowe'
									},
									{
										title: 'Korzystanie z urządzeń technicznych',
										path: '/jezyk-angielski-zawodowy/rozdzial-12.4/korzystanie-z-urzadzen-technicznych'
									},
									{
										title: 'Technologie informacyjno-komunikacyjne',
										path: '/jezyk-angielski-zawodowy/rozdzial-12.5/technologie-informacyjno-komunikacyjne'
									},
									{
										title: 'Awarie techniczne',
										path: '/jezyk-angielski-zawodowy/rozdzial-12.6/awarie-techniczne'
									}
								]}
							/>
							<Unit
								book='jezyk-angielski-zawodowy'
								number = '13'
								title = 'Świat przyrody'
								links = {[
									{
										title: 'Pogoda i klimat',
										path: '/jezyk-angielski-zawodowy/rozdzial-13.1/pogoda-i-klimat'
									},
									{
										title: 'Świat roślin i zwierząt',
										path: '/jezyk-angielski-zawodowy/rozdzial-13.2/swiat-roslin-i-zwierzat'
									},
									{
										title: 'Krajobraz',
										path: '/jezyk-angielski-zawodowy/rozdzial-13.3/krajobraz'
									},
									{
										title: 'Zagrożenia środowiska naturalnego',
										path: '/jezyk-angielski-zawodowy/rozdzial-13.4/zagrozenia-srodowiska-naturalnego'
									},
									{
										title: 'Ochrona środowiska naturalnego',
										path: '/jezyk-angielski-zawodowy/rozdzial-13.5/ochrona-srodowiska-naturalnego'
									},
									{
										title: 'Klęski żywiolowe',
										path: '/jezyk-angielski-zawodowy/rozdzial-13.6/kleski-zywiolowe'
									},
									{
										title: 'Przestrzeń kosmiczna',
										path: '/jezyk-angielski-zawodowy/rozdzial-13.7/przestrzen-kosmiczna'
									}
								]}
							/>
							<Unit
								book='jezyk-angielski-zawodowy'
								number = '14'
								title = 'Państwo i spoleczeństwo'
								links = {[
									{
										title: 'Struktura państwa i urzędy',
										path: '/jezyk-angielski-zawodowy/rozdzial-14.1/struktura-panstwa-i-urzedy'
									},
									{
										title: 'Organizacje spoleczne i międzynarodowe',
										path: '/jezyk-angielski-zawodowy/rozdzial-14.2/organizacje-spoleczne-i-miedzynarodowe'
									},
									{
										title: 'Konflikty wewnętrzne i międzynarodowe',
										path: '/jezyk-angielski-zawodowy/rozdzial-14.3/konflikty-wewnetrzne-i-miedzynarodowe'
									},
									{
										title: 'Przestępczość',
										path: '/jezyk-angielski-zawodowy/rozdzial-14.4/przestepczosc'
									},
									{
										title: 'Wymiar sprawiedliwości',
										path: '/jezyk-angielski-zawodowy/rozdzial-14.5/wymiar-sprawiedliwosci'
									},
									{
										title: 'Polityka spoleczna',
										path: '/jezyk-angielski-zawodowy/rozdzial-14.6/polityka-spoleczna'
									},
									{
										title: 'Gospodarka',
										path: '/jezyk-angielski-zawodowy/rozdzial-14.7/gospodarka'
									}
								]}
							/> */}
						</ListWrapper>
					</ListElementWrapper>
				</Wrapper>
			</>
		);
	}
}

export default List