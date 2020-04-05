// BASIC
import React, { Component } from 'react'
import styled, {css} from 'styled-components'
import {db, au} from '../../Config/firebase'
import latinize from 'latinize'
import camelcase from 'camelcase'
import {paramCase} from 'change-case'
// STYLES
import { Wrapper } from '../Styles/Components'
// COMPONENTS
import Specification from './components/Specification'
import Editor from './components/Editor'
import WritingApp from './components/WritingApp'

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
const Item = styled.span``
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
		z-index: 2;
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
		@media (max-width: 500px) {
			height: 60px;
			:nth-child(2) {
				display: none;
			}
		}
	}
	${Th} {
		@media (max-width: 1000px) {
			:nth-child(1) {
				display: none;
			}
			:nth-child(2) {
				display: none;
			}
			:nth-child(5) {
				display: none;
			}
			:nth-child(4) {
				display: none;
			}
		}
	}
	${TableHead} ${UnitName} {
		background-color: #11a989;
		@media (max-width: 1000px) {
			padding: 7px 30px;
			border-bottom-left-radius: 50px;
			border-bottom-right-radius: 50px;
		}
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
		border-bottom: 1px solid var(--color-primary);
		transition: all 0.3s ease;
		:hover {
			opacity: 0.5;
			cursor: pointer;
		}
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
	}
`

class WordList extends Component {
	state = {
		units: [],
		unitWords: [],
		unitsLength: {},
		wordData: null
	}
	componentDidMount() {
		let {bookName, unitNumber, unitName} = this.props.match.params;
		au.onAuthStateChanged(user => {
			if(user) {
				user.getIdTokenResult().then(idTokenResult => {
					if (idTokenResult.claims.admin) {
						db.collection('books').onSnapshot(snaps => {
							let units = [];
							snaps.forEach(snap => {
								if (snap.data().info.id.includes(bookName)) {
									units = units.concat(Object.values(snap.data()).slice(1))
								}
							})
							const unitWords = units[unitNumber - 1];
							this.setState({units, unitWords});
							const element = document.getElementById(unitName);
							if (element) {
								element.scrollIntoView();
							}
						})
					}
					else {
						db.collection('books').get().then(snaps => {
							let units = [];
							snaps.forEach(snap => {
								if (snap.data().info.id.includes(bookName)) {
									units = units.concat(Object.values(snap.data()).slice(1))
								}
							})
							const unitWords = units[unitNumber - 1];
							this.setState({units, unitWords});
							const element = document.getElementById(unitName);
							if (element) {
								element.scrollIntoView();
							}
						})
					}
				})
			}
		})
	}
	setData = (word1, word2, word3, translation1, translation2, translation3, female, level, type, image, partIndex, wordIndex, e) => {
		this.setState({
			wordData: {
				word1, word2, word3, translation1, translation2, translation3, female, level, type, image, partIndex, wordIndex,
				bookName: this.props.match.params.bookName,
				unitNumber: this.props.match.params.unitNumber
			}
		})
		if (e.target.parentElement.id) {
			this.setState({
				activeWord: e.target.parentElement.id.replace(/word-/, '')
			})
		}
	}
	updateData = (name, data) => {
		this.setState(prevState => ({
			wordData: {
				...prevState.wordData,
				[name]: data
			}
		}));
	}
	clearData = () => {
		this.setState({
			wordData: null
		})
	}
	goToPrevious = () => {
		const activeWord = this.state.activeWord.split('-');
		const previousId = `word-${activeWord[0]}-${Number(activeWord[1]) - 1}`;
		if (document.getElementById(previousId)) {
			document.getElementById(previousId).click()
			this.setState({activeWord: previousId.replace(/word-/, '')})
		}
	}
	goToNext = () => {
		const activeWord = this.state.activeWord.split('-');
		const nextId = `word-${activeWord[0]}-${Number(activeWord[1]) + 1}`;
		if (document.getElementById(nextId)) {
			document.getElementById(nextId).click()
			this.setState({activeWord: nextId.replace(/word-/, '')})
		}
	}
	render() {
		let unitsLength = {};
		return (
			<WordListPage>
				<>
				{this.state.unitWords.length === 0 ? 'Wczytywanie...' : Object.values(this.state.unitWords.parts).map(({name, words}, partIndex) => {
				// this.setState(prevState => ({
				// 	unitsLength: {
				// 		...prevState.unitsLength,
				// 		[paramCase(latinize(name))]: Object.values(words).length
				// 	}
				// }))
				unitsLength[`part_${(partIndex + 1).toString().padStart(2, '0')}`] = Object.values(words).length;
				return (
					<ContentTable key={name} id={paramCase(latinize(name))}>
						<TableHead>
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
							{Object.values(words).map(({word1, word2, word3, translation1, translation2, translation3, female, level, type, image}, wordIndex) => {
								return (
									<Tr id={`word-${partIndex + 1}-${wordIndex}`} key={`word-${partIndex + 1}-${wordIndex}`} onClick={(e) => this.setData(word1, word2, word3, translation1, translation2, translation3, female, level, type, image, partIndex, wordIndex, e)}>
										<Td className={camelcase(word1)}>
											{word3 ? <>
												<Item>{word1}</Item> / <Item>{word2}</Item> / <Item>{word3}</Item>
											</> : word2 ? <>
												<Item>{word1}</Item> / <Item>{word2}</Item>
											</> : <>
												<Item>{word1}</Item>
											</>}
										</Td>
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
					</ContentTable>
				)})}
				</>
				{this.state.wordData && <WritingApp data={this.state.wordData} unitsLength={unitsLength} goToNext={this.goToNext} goToPrevious={this.goToPrevious} onBack={this.clearData} updateData={this.updateData} />}
			</WordListPage>
		);
	}
}

export default WordList