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
	componentDidMount() {

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
									number = '9'
									title = 'Kultura'
									links = {[
										{
											title: 'Dziedziny kultury',
											path: '/macmillan/rozdział-9/dziedziny-kultury'
										},
										{
											title: 'Twórcy i ich dzieła',
											path: '/macmillan/rozdział-9/twórcy-i-ich-dzieła'
										},
										{
											title: 'Uczestnictwo w kulturze',
											path: '/macmillan/rozdział-9/uczestnictwo-w-kulturze'
										},
										{
											title: 'Media',
											path: '/macmillan/rozdział-9/media'
										}
									]}
								/>
							</Advertisement>
							<Unit
								number = '1'
								title = 'Człowiek'
								links = {[
									{
										title: 'Dane osobowe',
										path: '/macmillan/rozdział-1/dane-osobowe'
									},
									{
										title: 'Wygląd zewnętrzny',
										path: '/macmillan/rozdział-1/wygląd-zewnętrzny'
									},
									{
										title: 'Ubrania',
										path: '/macmillan/rozdział-1/ubrania'
									},
									{
										title: 'Cechy charakteru',
										path: '/macmillan/rozdział-1/cechy-charakteru'
									},
									{
										title: 'Uczucia i emocje',
										path: '/macmillan/rozdział-1/uczucia-i-emocje'
									},
									{
										title: 'Zainteresowania',
										path: '/macmillan/rozdział-1/zainteresowania'
									},
									{
										title: 'Problemy etyczne',
										path: '/macmillan/rozdział-1/problemy-etyczne'
									}
								]}
							/>
							<Unit
								number = '2'
								title = 'Dom'
								links = {[
									{
										title: 'Miejsce zamieszkania',
										path: '/macmillan/rozdział-2/dom'
									},
									{
										title: 'Opis Domu',
										path: '/macmillan/rozdział-2/opis-domu'
									},
									{
										title: 'Prace w domu i ogrodzie',
										path: '/macmillan/rozdział-2/prace-w-domu-i-ogrodzie'
									},
									{
										title: 'Wynajem, kupno i sprzedaż nieruchomości',
										path: '/macmillan/rozdział-2/wynajem-kupno-i-sprzedaż-nieruchomości'
									}
								]}
							/>
							<Unit
								number = '3'
								title = 'Szkoła'
								links = {[
									{
										title: 'Przedmioty szkolne',
										path: '/rozdział-3/przedmioty-szkolne'
									},
									{
										title: 'Oceny i wymagania',
										path: '/macmillan/rozdział-3/oceny-i-wymagania'
									},
									{
										title: 'Życie szkolne',
										path: '/macmillan/rozdział-3/życie-szkolne'
									},
									{
										title: 'Zajęcia pozalekcyjne',
										path: '/macmillan/rozdział-3/zajęcia-pozalekcyjne'
									},
									{
										title: 'System oświaty',
										path: '/macmillan/rozdział-3/system-oświaty'
									}
								]}
							/>
							<Unit
								number = '4'
								title = 'Praca'
								links = {[
									{
										title: 'Zawody i związane z nimi czynności',
										path: '/macmillan/rozdział-4/zawody-i-związane-z-nimi-czynności'
									},
									{
										title: 'Warunki pracy i zatrudnienia',
										path: '/macmillan/rozdział-4/warunki-pracy-i-zatrudnienia'
									},
									{
										title: 'Praca dorywcza',
										path: '/macmillan/rozdział-4/praca-dorywcza'
									},
									{
										title: 'Rynek pracy',
										path: '/macmillan/rozdział-4/rynek-pracy'
									}
								]}
							/>
							<Unit
								number = '5'
								title = 'Życie rodzinne i towarzyskie'
								links = {[
									{
										title: 'Etapy życia',
										path: '/macmillan/rozdział-5/etapy-życia'
									},
									{
										title: 'Członkowie rodziny, koledzy i przyjaciele',
										path: '/macmillan/rozdział-5/członkowie-rodziny-koledzy-i-przyjaciele'
									},
									{
										title: 'Czynności życia codziennego',
										path: '/macmillan/rozdział-5/czynności-życia-codziennego'
									},
									{
										title: 'Formy spędzania czasu wolnego',
										path: '/macmillan/rozdział-5/formy-spędzania-czasu-wolnego'
									},
									{
										title: 'Święta i uroczystości',
										path: '/macmillan/rozdział-5/święta-i-uroczystości'
									},
									{
										title: 'Styl życia, konflikty i problemy',
										path: '/macmillan/rozdział-5/styl-życia-konflikty-i-problemy'
									}
								]}
							/>
							<Unit
								number = '6'
								title = 'Zakupy i usługi'
								links = {[
									{
										title: 'Artykuły spożywcze',
										path: '/macmillan/rozdział-5/artykuly-spozywcze'
									},
									{
										title: 'Posiłki i ich przygotowanie',
										path: '/macmillan/rozdział-5/posilki-i-ich-przygotowanie'
									},
									{
										title: 'Lokale gastronomiczne',
										path: '/macmillan/rozdział-5/lokale-gastronomiczne'
									},
									{
										title: 'Diety',
										path: '/macmillan/rozdział-5/diety'
									}
								]}
							/>
							<Unit
								number = '7'
								title = 'Zakupy i usługi'
								links = {[
									{
										title: 'Rodzaje sklepów',
										path: '/macmillan/rozdział-7/rodzaje-sklepów'
									},
									{
										title: 'Opisywanie towarów',
										path: '/macmillan/rozdział-7/opisywanie-towarów'
									},
									{
										title: 'Sprzedawanie i kupowanie',
										path: '/macmillan/rozdział-7/sprzedawanie-i-kupowanie'
									},
									{
										title: 'Reklamacje',
										path: '/macmillan/rozdział-7/reklamacje'
									},
									{
										title: 'Reklama',
										path: '/macmillan/rozdział-7/reklama'
									},
									{
										title: 'Korzystanie z usług',
										path: '/macmillan/rozdział-7/korzystanie-z-usług'
									},
									{
										title: 'Środki płatnicze',
										path: '/macmillan/rozdział-7/środki-płatnicze'
									},
									{
										title: 'Banki',
										path: '/macmillan/rozdział-7/banki'
									},
									{
										title: 'Ubezpieczenie',
										path: '/macmillan/rozdział-7/ubezpieczenie'
									}
								]}
							/>
							<Unit
								number = '8'
								title = 'Podróżowanie i turystyka'
								links = {[
									{
										title: 'Podróżowanie i środki transportu',
										path: '/macmillan/rozdział-8/podróżowanie-i-środki-transportu'
									},
									{
										title: 'Informacja turystyczna',
										path: '/macmillan/rozdział-8/informacja-turystyczna'
									},
									{
										title: 'Baza noclegowa',
										path: '/macmillan/rozdział-8/baza-noclegowa'
									},
									{
										title: 'Wycieczki i zwiedzanie',
										path: '/macmillan/rozdział-8/wycieczki-i-zwiedzanie'
									},
									{
										title: 'Wypadki',
										path: '/macmillan/rozdział-8/wypadki'
									}
								]}
							/>
							<Unit
								number = '9'
								title = 'Kultura'
								links = {[
									{
										title: 'Dziedziny kultury',
										path: '/macmillan/rozdział-9/dziedziny-kultury'
									},
									{
										title: 'Twórcy i ich dzieła',
										path: '/macmillan/rozdział-9/twórcy-i-ich-dzieła'
									},
									{
										title: 'Uczestnictwo w kulturze',
										path: '/macmillan/rozdział-9/uczestnictwo-w-kulturze'
									},
									{
										title: 'Media',
										path: '/macmillan/rozdział-9/media'
									}
								]}
							/>
							<Unit
								number = '10'
								title = 'Sport'
								links = {[
									{
										title: 'Dyscypliny sportu',
										path: '/macmillan/rozdział-10/dyscypliny-sportu'
									},
									{
										title: 'Imprezy sportowe',
										path: '/macmillan/rozdział-10/imprezy-sportowe'
									},
									{
										title: 'Sport wyczynowy',
										path: '/macmillan/rozdział-10/sport-wyczynowy'
									}
								]}
							/>
							<Unit
								number = '11'
								title = 'Zdrowie'
								links = {[
									{
										title: 'Samopoczucie',
										path: '/macmillan/rozdział-11/samopoczucie'
									},
									{
										title: 'Częsci ciała',
										path: '/macmillan/rozdział-11/czesci-ciala'
									},
									{
										title: 'Zdrowy styl życia',
										path: '/macmillan/rozdział-11/zdrowy-styl-zycia'
									},
									{
										title: 'Zdrowy styl życia',
										path: '/macmillan/rozdział-11/niepelnosprawni'
									},
									{
										title: 'Uzależnienia',
										path: '/macmillan/rozdział-11/uzaleznienia'
									},
									{
										title: 'Ochrona zdrowia',
										path: '/macmillan/rozdział-11/ochrona-zdrowia'
									},
									
								]}
							/>
							<Unit
								number = '12'
								title = 'Nauka i technika'
								links = {[
									{
										title: 'Dziedziny nauki i naukowcy',
										path: '/macmillan/rozdział-12/dziedziny-nauki-i-naukowcy'
									},
									{
										title: 'Wynalazki i odkrycia',
										path: '/macmillan/rozdział-12/wynalazki-i-odkrycia'
									},
									{
										title: 'Badania naukowe',
										path: '/macmillan/rozdział-12/badania-naukowe'
									},
									{
										title: 'Korzystanie z urządzeń technicznych',
										path: '/macmillan/rozdział-12/korzystanie-z-urzadzen-technicznych'
									},
									{
										title: 'Technologie informacyjno-komunikacyjne',
										path: '/macmillan/rozdział-12/technologie-informacyjno-komunikacyjne'
									},
									{
										title: 'Awarie techniczne',
										path: '/macmillan/rozdział-12/awarie-techniczne'
									}
								]}
							/>
							<Unit
								number = '13'
								title = 'Świat przyrody'
								links = {[
									{
										title: 'Pogoda i klimat',
										path: '/macmillan/rozdział-13/pogoda-i-klimat'
									},
									{
										title: 'Świat roślin i zwierząt',
										path: '/macmillan/rozdział-13/swiat-roslin-i-zwierzat'
									},
									{
										title: 'Krajobraz',
										path: '/macmillan/rozdział-13/krajobraz'
									},
									{
										title: 'Zagrożenia środowiska naturalnego',
										path: '/macmillan/rozdział-13/zagrozenia-srodowiska-naturalnego'
									},
									{
										title: 'Ochrona środowiska naturalnego',
										path: '/macmillan/rozdział-13/ochrona-srodowiska-naturalnego'
									},
									{
										title: 'Klęski żywiołowe',
										path: '/macmillan/rozdział-13/kleski-zywiolowe'
									},
									{
										title: 'Przestrzeń kosmiczna',
										path: '/macmillan/rozdział-13/przestrzen-kosmiczna'
									}
								]}
							/>
							<Unit
								number = '14'
								title = 'Państwo i społeczeństwo'
								links = {[
									{
										title: 'Struktura państwa i urzędy',
										path: '/macmillan/rozdział-14/struktura-panstwa-i-urzedy'
									},
									{
										title: 'Organizacje społeczne i międzynarodowe',
										path: '/macmillan/rozdział-14/organizacje-spoleczne-i-miedzynarodowe'
									},
									{
										title: 'Konflikty wewnętrzne i międzynarodowe',
										path: '/macmillan/rozdział-14/konflikty-wewnetrzne-i-miedzynarodowe'
									},
									{
										title: 'Przestępczość',
										path: '/macmillan/rozdział-14/przestepczosc'
									},
									{
										title: 'Wymiar sprawiedliwości',
										path: '/macmillan/rozdział-14/wymiar-sprawiedliwosci'
									},
									{
										title: 'Polityka społeczna',
										path: '/macmillan/rozdział-14/polityka-spoleczna'
									},
									{
										title: 'Gospodarka',
										path: '/macmillan/rozdział-14/gospodarka'
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