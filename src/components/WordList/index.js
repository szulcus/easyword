// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/functions'
import latinize from 'latinize'
import camelcase from 'camelcase'
import ReactHtmlParser from 'react-html-parser';
// STYLES
import { Wrapper } from '../Styles/Components'
// WORDS
import w1 from '../../Components/Words/1_Macmillan/Unit2/1_ThePlaceWhereWeLive'
import w2 from '../../Components/Words/1_Macmillan/Unit2/2_DescribingHouses'
import w3 from '../../Components/Words/1_Macmillan/Unit2/3_HouseholdAndGardenJobs'
import w4 from '../../Components/Words/1_Macmillan/Unit2/4_RentingPurchasingAndSellingProperty'
import w5 from '../../Components/Words/1_Macmillan/Unit2/5_Orther'
// import w6 from '../../Components/Words/1_Macmillan/Unit10/'
// import w7 from '../../Components/Words/1_Macmillan/Unit10/'
// import w8 from '../../Components/Words/1_Macmillan/Unit10/'
// import w9 from '../../Components/Words/1_Macmillan/Unit10/'
// import w10 from '../../Components/Words/1_Macmillan/Unit7/10_Other'
// COMPONENTS
import Picture from '../../Components/App/components/Picture'
import { useParams } from 'react-router-dom'

const WordListPage = styled(Wrapper)`
	flex-direction: column;
	align-items: center;
	overflow-y: scroll;
`
const TableHead = styled.thead``
const Th = styled.th``
const UnitName = styled.th``
const TableBody = styled.tbody``
const Td = styled.td``
const Tr = styled.tr``
const Image = styled.img``
const ContentTable = styled.table`
	position: relative;
	border-collapse: collapse;
	margin: 25px 0;
	width: 90vw;
	max-width: 1300px;
	text-align: center;
	@media (max-width: 600px) {
		width: 100vw;
	}
	${TableHead} ${Th},
	${TableHead} ${UnitName} {
		background-color: #009878;
		font-weight: bold;
		position: sticky;
		top: 0;
	}
	${TableHead} ${Tr} {
		background-color: #009878;
		font-weight: bold;
	}
	${Th}, ${Td} {
		@media(max-width: 1100px) {
			:nth-child(3) {
				display: none;
			}
		}
		@media (max-width: 1000px) {
			:nth-child(4) {
				display: none;
			}
		}
		@media (max-width: 600px) {
			height: 70px;
			:nth-child(5) {
				display: none;
			}
		}
		@media (max-width: 400px) {
			height: 60px;
			:nth-child(2) {
				display: none;
			}
		}
	}
	${TableHead} ${UnitName} {
		background-color: #11a989;
	}
	${Th},
	${UnitName},
	${Td} {
		width: 20%;
		padding: 12px 15px;
		::first-letter {
			text-transform: capitalize;
		}
		:first-child {
			text-transform: capitalize;
		}
	}
	${TableBody} ${Tr} {
		border-bottom: 1px solid #ddd;
	}
	${TableBody} ${Tr}:nth-of-type(even) {
		background-color: #303030;
	}
	${TableBody} ${Tr}:last-of-type {
		border-bottom: 2px solid #009878;
	}
	${Image} {
		width: 141px;
		height: 100px;
		border-radius: 5px;
		:hover {
			cursor: pointer;
		}
	}
`
const Specification = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: none;
	width: 100%;
	height: 100vh;
	background-color: var(--color-dark);
	animation: scale 0.2s ease;
`

class WordList extends Component {
	state = {
		words: null
	}
	componentDidMount() {
		firebase.auth().onAuthStateChanged(user => {
			if(user) {
				console.log(user.uid);
				const db = firebase.firestore();
				db.collection('books').doc('macmillan').onSnapshot((snap) => {
					const unit = `unit_${this.props.match.params.unitNumber}`
					const words = snap.data()[unit];
					this.setState({words});
					const element = document.getElementById(this.props.match.params.unitName);
					if (element) {
						console.log(element);
						element.scrollIntoView();
					}
				})
				// db.collection('books').doc('macmillan').update({
				// 	unit_02: {
				// 		title: 'Dom',
				// 		parts: {
				// 			part_01: {
				// 				name: w1[0].type,
				// 				words: w1
				// 			},
				// 			part_02: {
				// 				name: w2[0].type,
				// 				words: w2
				// 			},
				// 			part_03: {
				// 				name: w3[0].type,
				// 				words: w3
				// 			},
				// 			part_04: {
				// 				name: w4[0].type,
				// 				words: w4
				// 			},
				// 			part_05: {
				// 				name: w5[0].type,
				// 				words: w5
				// 			}
				// 		}
				// 	}
				// })
			}
			else {
				console.log('not logged in');
			}
		})
	}
	getElements = (e) => {
		const id = e.target.parentElement.id;
		const children = document.querySelectorAll(`.${id}`);
		const activeElements = [];
		children.forEach(child => {
			activeElements.push(child.innerHTML)
		})
		// this.expand(activeElements)
		this.setState(
			
			() => {
				return {
					activeElements
				};
			},
			
			() => {
				this.expand();
			}
			
			);
	}
	expand = () => {
		console.log(this.state.activeElements);
		document.getElementById('specification').style.display = 'block';
	}
	render() {
		// if (this.state.words) {
		// 	console.log(Object.values(this.state.words.parts));
		// }
		return (
			<WordListPage>
				<header>
					<h1>Tabela</h1>
					<button onClick={this.scroll}>scroll</button>
					<p>{this.props.match.params.unitName}</p>
				</header>
				<ContentTable>
				{!this.state.words ? 'Wczytywanie...' : Object.values(this.state.words.parts).map(({name, words}, index) => {
				return (
					<>
						<TableHead id={latinize(name).split(' ').join('-')} key={name}>
							<Tr>
								<UnitName colSpan="5">{name}</UnitName>
							</Tr>
							<Tr>
								<Th>Słówko</Th>
								<Th>Tłumaczenie</Th> 
								<Th>Poziom</Th>
								<Th>Rozdział</Th>
								<Th>Zdjęcie</Th>
							</Tr>
						</TableHead>
						<TableBody>
							{words.map(({word1, word2, word3, translation1, level, type, image}) => {
								return (
									<Tr key={word1} id={camelcase(word1)} onClick={this.getElements}>
										<Td className={camelcase(word1)}>{word3 ? `${word1} / ${word2} / ${word3}` : word2 ? `${word1} / ${word2}` : word1}</Td>
										<Td className={camelcase(word1)}>{translation1}</Td> 
										<Td className={camelcase(word1)}>{level === 'basic' ? 'Podstawowy': 'Rozszerzony'}</Td>
										<Td className={camelcase(word1)}>{type}</Td>
										<Td className={camelcase(word1)}>
											<Image src={image !== 'url' ? image : `https://fakeimg.pl/647x400/?text=${word1}`} alt=""/>
										</Td>
									</Tr>
								)
							})}
						</TableBody>
					</>
				)})}
				</ContentTable>
				<Specification id="specification">
					{!this.state.activeElements ? 'Wczytywanie...' : <ul>
						<li>word: {this.state.activeElements[0]}</li>
						<li>translation: {this.state.activeElements[1]}</li>
						<li>poziom: {this.state.activeElements[2]}</li>
						<li>rozdział: {this.state.activeElements[3]}</li>
						<li>zdkecie: { () => {
							const image = ReactHtmlParser(this.state.activeElements[4])
							return (
								<img src={image.src} alt=""/>
							)
						}
						}</li>
					</ul>}
				</Specification>
			</WordListPage>
		);
	}
}

export default WordList