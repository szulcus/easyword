// BASIC
import React, { Component } from 'react'
import styled, {css} from 'styled-components'
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
import Editor from './components/Editor'

const WordListPage = styled(Wrapper)`
	flex-direction: column;
	align-items: center;
	overflow-y: scroll;
`
const TableHead = styled.thead``
const Th = styled.th``
const UnitName = styled.th``
const TableBody = styled.tbody``
const Td = styled.td`
	${props =>
			props.edit &&
			css`
				position: relative;
				border: 2px solid var(--color-secondary);
				:hover {
					cursor: pointer;
					::before {
						content: '';
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						opacity: 0.5;
						background-color: var(--color-dark);
					}
				}
			`
		}
`
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
		isAdmin: false,
		words: null,
		activeElements: null,
		edit: false,
		showEditor: false
	}
	componentDidMount() {
		let {bookName, unitNumber} = this.props.match.params;
		unitNumber < 10 ? unitNumber = `0${unitNumber}` : unitNumber = `${unitNumber}` ;
		console.log(unitNumber);
		console.log(bookName);
		const db = firebase.firestore();
		db.collection('books').doc(bookName).onSnapshot((snap) => {
			const unit = `unit_${unitNumber}`
			const words = snap.data()[unit];
			this.setState({words});
			const element = document.getElementById(this.props.match.params.unitName);
			if (element) {
				console.log(element);
				element.scrollIntoView();
			}
		})

		firebase.auth().onAuthStateChanged(user => {
			if(user) {
				console.log(user);
				user.getIdTokenResult().then(idTokenResult => {
					if (idTokenResult.claims.admin) {
						this.setState({isAdmin: true});
						console.log('adminn');
					}
					user.admin = idTokenResult.claims.admin;
				})
			}
			else {
				console.log('not logged in');
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
	edit = (partIndex, index) => {
		let part;
		if (partIndex < 10) {
			part = `part_0${partIndex + 1}`;
		}
		else {
			part = `part_${partIndex + 1}`;
		}
		let unit = this.props.match.params.unitNumber;
		if (unit < 10) {
			unit = `unit_0${unit}`;
		}
		else {
			unit = `unit_${unit}`;
		}
		firebase.firestore().collection('books').doc('repetytorium').onSnapshot((snap) => {
			console.log(snap.data()[unit].parts[part].words[index]);
			console.log(snap.data()[unit]);
			console.log(unit);
		})
		this.changeEditorWindow();
	}
	changeEditorWindow = () => {
		!this.state.showEditor ? this.setState({showEditor: true}) : this.setState({showEditor: false})
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
				{!this.state.words ? 'Wczytywanie...' : Object.values(this.state.words.parts).map(({name, words}, partIndex) => {
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
							{words.map(({word1, word2, word3, translation1, level, type, image}, index) => {
								return (
									<Tr key={word1} id={camelcase(word1)} onDoubleClick={this.showWord}>
										<Td edit={this.state.isAdmin} onClick={() => this.edit(partIndex, index)} className={camelcase(word1)}>
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
										<Td onClick={this.changeEditorWindow} className={camelcase(word1)}>
											<Image src={image !== 'url' ? image : `https://fakeimg.pl/647x400/?text=${word1}`} alt=""/>
										</Td>
									</Tr>
								)
							})}
						</TableBody>
					</>
				)})}
				</ContentTable>
				<Editor word={this.state.activeElements} show={this.state.showEditor} back={this.changeEditorWindow} />
				<Specification word={this.state.activeElements} onClick={this.showWord} />
			</WordListPage>
		);
	}
}

export default WordList