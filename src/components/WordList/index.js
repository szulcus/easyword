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
// STYLES
import { Wrapper } from '../Styles/Components'
// COMPONENTS
import Specification from './components/Specification'

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
	${Th} {
		@media (max-width: 400px) {
			:nth-child(1) {
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

class WordList extends Component {
	state = {
		words: null,
		activeElements: null
	}
	componentDidMount() {
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
	}
	showWord = (e) => {
		if (this.state.activeElements) {
			this.setState({activeElements: null});
		}
		else {
			const id = e.target.parentElement.id;
			const children = document.querySelectorAll(`.${id}`);
			const activeElements = [];
			children.forEach(child => {
				if (child.innerHTML.includes('<img')) {
					// console.log(child.children[0].src);
					activeElements.push(child.children[0].src);
				}
				else {
					activeElements.push(child.innerHTML);
				}
			})
			this.setState({activeElements});
		}
	}
	render() {
		// if (this.state.words) {
		// 	console.log(Object.values(this.state.words.parts));
		// }
		return (
			<WordListPage>
				<header>
					{/* <h1>Tabela</h1> */}
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
									<Tr key={word1} id={camelcase(word1)} onClick={this.showWord}>
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
				<Specification word={this.state.activeElements} onClick={this.showWord} />
			</WordListPage>
		);
	}
}

export default WordList