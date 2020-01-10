// BASIC
import React, { Component } from 'react'
import styled, {css} from 'styled-components'
import moment from 'moment'
import 'moment/locale/pl'
// STYLES
import Global from '../../../Components/Styles/Global'
import { Wrapper } from '../../../Components/Styles/Components'
// COMPONENTS
import Book from './components/Book'
import Header from './components/ListElement/Header'
import ListWrapper from './components/ListElement/ListWrapper'
import ListElement from './components/ListElement/ListElement'
import ListElementTest from './components/ListElement/ListElementTest'
import Unit from './components/Unit'
// ICONS
import { IoIosTimer } from 'react-icons/io'

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

const AdTitle = styled.h3`
text-align: center;
	margin-top: 10px;
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

const SectionTitle = styled.h3`
`;

const SectionList = styled.ul`
	list-style: none;
`

class List extends Component {
	state = {
		plannedDate: '20200103',
	}
	render() {
		moment.locale('pl')
		return (
			<>
				<Global />
				<Wrapper list>
					<Book src='https://www.macmillan.pl/components/com_ssshop/cache/500x500/9788376218496.png' information='Macmillan Education. Nr MEN: 916/2017'/>
					<Separator />
					<ListElementWrapper>
						<Header />
						<ListWrapper>
							<Term>
								<Date>{`${moment(this.state.plannedDate, "YYYYMMDD").format('LL')}r`}</Date>
								<Line>|</Line>
								<Time>{moment(this.state.plannedDate, "YYYYMMDD").fromNow()}</Time>
							</Term>
							<Advertisement>
								<Unit
									book='macmillan'
									number = '09'
									title = 'Kultura'
									links = {[
										{
											title: 'Dziedziny kultury',
											path: '/macmillan/rozdzial-9/dziedziny-kultury'
										},
										{
											title: 'Twórcy i ich dziela',
											path: '/macmillan/rozdzial-9/twórcy-i-ich-dziela'
										},
										{
											title: 'Uczestnictwo w kulturze',
											path: '/macmillan/rozdzial-9/uczestnictwo-w-kulturze'
										},
										{
											title: 'Media',
											path: '/macmillan/rozdzial-9/media'
										}
									]}
								/>
							</Advertisement>
							<Unit
								book='macmillan'
								number = '01'
								title = 'Czlowiek'
								links = {[
									{
										title: 'Dane osobowe',
										path: '/macmillan/rozdzial-1/dane-osobowe'
									},
									{
										title: 'Wygląd zewnętrzny',
										path: '/macmillan/rozdzial-1/wygląd-zewnętrzny'
									},
									{
										title: 'Ubrania',
										path: '/macmillan/rozdzial-1/ubrania'
									},
									{
										title: 'Cechy charakteru',
										path: '/macmillan/rozdzial-1/cechy-charakteru'
									},
									{
										title: 'Uczucia i emocje',
										path: '/macmillan/rozdzial-1/uczucia-i-emocje'
									},
									{
										title: 'Zainteresowania',
										path: '/macmillan/rozdzial-1/zainteresowania'
									},
									{
										title: 'Problemy etyczne',
										path: '/macmillan/rozdzial-1/problemy-etyczne'
									}
								]}
							/>
							<Unit
								book='macmillan'
								number = '02'
								title = 'Dom'
								links = {[
									{
										title: 'Miejsce zamieszkania',
										path: '/macmillan/rozdzial-2/dom'
									},
									{
										title: 'Opis Domu',
										path: '/macmillan/rozdzial-2/opis-domu'
									},
									{
										title: 'Prace w domu i ogrodzie',
										path: '/macmillan/rozdzial-2/prace-w-domu-i-ogrodzie'
									},
									{
										title: 'Wynajem, kupno i sprzedaż nieruchomości',
										path: '/macmillan/rozdzial-2/wynajem-kupno-i-sprzedaż-nieruchomości'
									}
								]}
							/>
							<Unit
								book='macmillan'
								number = '03'
								title = 'Szkola'
								links = {[
									{
										title: 'Przedmioty szkolne',
										path: '/rozdzial-3/przedmioty-szkolne'
									},
									{
										title: 'Oceny i wymagania',
										path: '/macmillan/rozdzial-3/oceny-i-wymagania'
									},
									{
										title: 'Życie szkolne',
										path: '/macmillan/rozdzial-3/życie-szkolne'
									},
									{
										title: 'Zajęcia pozalekcyjne',
										path: '/macmillan/rozdzial-3/zajęcia-pozalekcyjne'
									},
									{
										title: 'System oświaty',
										path: '/macmillan/rozdzial-3/system-oświaty'
									}
								]}
							/>
							<Unit
								book='macmillan'
								number = '04'
								title = 'Praca'
								links = {[
									{
										title: 'Zawody i związane z nimi czynności',
										path: '/macmillan/rozdzial-4/zawody-i-związane-z-nimi-czynności'
									},
									{
										title: 'Warunki pracy i zatrudnienia',
										path: '/macmillan/rozdzial-4/warunki-pracy-i-zatrudnienia'
									},
									{
										title: 'Praca dorywcza',
										path: '/macmillan/rozdzial-4/praca-dorywcza'
									},
									{
										title: 'Rynek pracy',
										path: '/macmillan/rozdzial-4/rynek-pracy'
									}
								]}
							/>
							<Unit
								book='macmillan'
								number = '05'
								title = 'Życie rodzinne i towarzyskie'
								links = {[
									{
										title: 'Etapy życia',
										path: '/macmillan/rozdzial-5/etapy-życia'
									},
									{
										title: 'Czlonkowie rodziny, koledzy i przyjaciele',
										path: '/macmillan/rozdzial-5/czlonkowie-rodziny-koledzy-i-przyjaciele'
									},
									{
										title: 'Czynności życia codziennego',
										path: '/macmillan/rozdzial-5/czynności-życia-codziennego'
									},
									{
										title: 'Formy spędzania czasu wolnego',
										path: '/macmillan/rozdzial-5/formy-spędzania-czasu-wolnego'
									},
									{
										title: 'Święta i uroczystości',
										path: '/macmillan/rozdzial-5/święta-i-uroczystości'
									},
									{
										title: 'Styl życia, konflikty i problemy',
										path: '/macmillan/rozdzial-5/styl-życia-konflikty-i-problemy'
									}
								]}
							/>
							<Unit
								book='macmillan'
								number = '06'
								title = 'Zakupy i uslugi'
								links = {[
									{
										title: 'Artykuly spożywcze',
										path: '/macmillan/rozdzial-5/artykuly-spozywcze'
									},
									{
										title: 'Posilki i ich przygotowanie',
										path: '/macmillan/rozdzial-5/posilki-i-ich-przygotowanie'
									},
									{
										title: 'Lokale gastronomiczne',
										path: '/macmillan/rozdzial-5/lokale-gastronomiczne'
									},
									{
										title: 'Diety',
										path: '/macmillan/rozdzial-5/diety'
									}
								]}
							/>
							<Unit
								book='macmillan'
								number = '07'
								title = 'Zakupy i uslugi'
								links = {[
									{
										title: 'Rodzaje sklepów',
										path: '/macmillan/rozdzial-7/rodzaje-sklepów'
									},
									{
										title: 'Opisywanie towarów',
										path: '/macmillan/rozdzial-7/opisywanie-towarów'
									},
									{
										title: 'Sprzedawanie i kupowanie',
										path: '/macmillan/rozdzial-7/sprzedawanie-i-kupowanie'
									},
									{
										title: 'Reklamacje',
										path: '/macmillan/rozdzial-7/reklamacje'
									},
									{
										title: 'Reklama',
										path: '/macmillan/rozdzial-7/reklama'
									},
									{
										title: 'Korzystanie z uslug',
										path: '/macmillan/rozdzial-7/korzystanie-z-uslug'
									},
									{
										title: 'Środki platnicze',
										path: '/macmillan/rozdzial-7/środki-platnicze'
									},
									{
										title: 'Banki',
										path: '/macmillan/rozdzial-7/banki'
									},
									{
										title: 'Ubezpieczenie',
										path: '/macmillan/rozdzial-7/ubezpieczenie'
									}
								]}
							/>
							<Unit
								book='macmillan'
								number = '08'
								title = 'Podróżowanie i turystyka'
								links = {[
									{
										title: 'Podróżowanie i środki transportu',
										path: '/macmillan/rozdzial-8/podróżowanie-i-środki-transportu'
									},
									{
										title: 'Informacja turystyczna',
										path: '/macmillan/rozdzial-8/informacja-turystyczna'
									},
									{
										title: 'Baza noclegowa',
										path: '/macmillan/rozdzial-8/baza-noclegowa'
									},
									{
										title: 'Wycieczki i zwiedzanie',
										path: '/macmillan/rozdzial-8/wycieczki-i-zwiedzanie'
									},
									{
										title: 'Wypadki',
										path: '/macmillan/rozdzial-8/wypadki'
									}
								]}
							/>
							<Unit
								book='macmillan'
								number = '09'
								title = 'Kultura'
								links = {[
									{
										title: 'Dziedziny kultury',
										path: '/macmillan/rozdzial-9/dziedziny-kultury'
									},
									{
										title: 'Twórcy i ich dziela',
										path: '/macmillan/rozdzial-9/twórcy-i-ich-dziela'
									},
									{
										title: 'Uczestnictwo w kulturze',
										path: '/macmillan/rozdzial-9/uczestnictwo-w-kulturze'
									},
									{
										title: 'Media',
										path: '/macmillan/rozdzial-9/media'
									}
								]}
							/>
							<Unit
								book='macmillan'
								number = '10'
								title = 'Sport'
								links = {[
									{
										title: 'Dyscypliny sportu',
										path: '/macmillan/rozdzial-10/dyscypliny-sportu'
									},
									{
										title: 'Imprezy sportowe',
										path: '/macmillan/rozdzial-10/imprezy-sportowe'
									},
									{
										title: 'Sport wyczynowy',
										path: '/macmillan/rozdzial-10/sport-wyczynowy'
									}
								]}
							/>
							<Unit
								book='macmillan'
								number = '11'
								title = 'Zdrowie'
								links = {[
									{
										title: 'Samopoczucie',
										path: '/macmillan/rozdzial-11/samopoczucie'
									},
									{
										title: 'Częsci ciala',
										path: '/macmillan/rozdzial-11/czesci-ciala'
									},
									{
										title: 'Zdrowy styl życia',
										path: '/macmillan/rozdzial-11/zdrowy-styl-zycia'
									},
									{
										title: 'Niepelnosprawni',
										path: '/macmillan/rozdzial-11/niepelnosprawni'
									},
									{
										title: 'Uzależnienia',
										path: '/macmillan/rozdzial-11/uzaleznienia'
									},
									{
										title: 'Ochrona zdrowia',
										path: '/macmillan/rozdzial-11/ochrona-zdrowia'
									},
									
								]}
							/>
							<Unit
								book='macmillan'
								number = '12'
								title = 'Nauka i technika'
								links = {[
									{
										title: 'Dziedziny nauki i naukowcy',
										path: '/macmillan/rozdzial-12/dziedziny-nauki-i-naukowcy'
									},
									{
										title: 'Wynalazki i odkrycia',
										path: '/macmillan/rozdzial-12/wynalazki-i-odkrycia'
									},
									{
										title: 'Badania naukowe',
										path: '/macmillan/rozdzial-12/badania-naukowe'
									},
									{
										title: 'Korzystanie z urządzeń technicznych',
										path: '/macmillan/rozdzial-12/korzystanie-z-urzadzen-technicznych'
									},
									{
										title: 'Technologie informacyjno-komunikacyjne',
										path: '/macmillan/rozdzial-12/technologie-informacyjno-komunikacyjne'
									},
									{
										title: 'Awarie techniczne',
										path: '/macmillan/rozdzial-12/awarie-techniczne'
									}
								]}
							/>
							<Unit
								book='macmillan'
								number = '13'
								title = 'Świat przyrody'
								links = {[
									{
										title: 'Pogoda i klimat',
										path: '/macmillan/rozdzial-13/pogoda-i-klimat'
									},
									{
										title: 'Świat roślin i zwierząt',
										path: '/macmillan/rozdzial-13/swiat-roslin-i-zwierzat'
									},
									{
										title: 'Krajobraz',
										path: '/macmillan/rozdzial-13/krajobraz'
									},
									{
										title: 'Zagrożenia środowiska naturalnego',
										path: '/macmillan/rozdzial-13/zagrozenia-srodowiska-naturalnego'
									},
									{
										title: 'Ochrona środowiska naturalnego',
										path: '/macmillan/rozdzial-13/ochrona-srodowiska-naturalnego'
									},
									{
										title: 'Klęski żywiolowe',
										path: '/macmillan/rozdzial-13/kleski-zywiolowe'
									},
									{
										title: 'Przestrzeń kosmiczna',
										path: '/macmillan/rozdzial-13/przestrzen-kosmiczna'
									}
								]}
							/>
							<Unit
								book='macmillan'
								number = '14'
								title = 'Państwo i spoleczeństwo'
								links = {[
									{
										title: 'Struktura państwa i urzędy',
										path: '/macmillan/rozdzial-14/struktura-panstwa-i-urzedy'
									},
									{
										title: 'Organizacje spoleczne i międzynarodowe',
										path: '/macmillan/rozdzial-14/organizacje-spoleczne-i-miedzynarodowe'
									},
									{
										title: 'Konflikty wewnętrzne i międzynarodowe',
										path: '/macmillan/rozdzial-14/konflikty-wewnetrzne-i-miedzynarodowe'
									},
									{
										title: 'Przestępczość',
										path: '/macmillan/rozdzial-14/przestepczosc'
									},
									{
										title: 'Wymiar sprawiedliwości',
										path: '/macmillan/rozdzial-14/wymiar-sprawiedliwosci'
									},
									{
										title: 'Polityka spoleczna',
										path: '/macmillan/rozdzial-14/polityka-spoleczna'
									},
									{
										title: 'Gospodarka',
										path: '/macmillan/rozdzial-14/gospodarka'
									}
								]}
							/>
						</ListWrapper>
					</ListElementWrapper>
				</Wrapper>
			</>
		);
	}
}

export default List