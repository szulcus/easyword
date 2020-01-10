// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/functions'
// STYLES
import { Wrapper } from '../Styles/Components'

const WordListPage = styled(Wrapper)`
	flex-direction: column;
	align-items: center;
	overflow-y: scroll;
`
const TableHead = styled.thead``
const Th = styled.th``
const TableBody = styled.tbody``
const Td = styled.td``
const Tr = styled.tr``
const Image = styled.img``
const ContentTable = styled.table`

  /* text-align: left; */
  /* border-collapse: collapse;  */
th, td {
  /* padding: 0.2rem; */
}
th {
  /* background: white; */
  position: sticky;
  top: 0;
}
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
					const words = snap.data().unit_01.parts.part_03.words;
					this.setState({words});
				})
			}
			else {
				console.log('not logged in');
			}
		})
	}
	render() {
		return (
			<WordListPage>
				<header>
					<h1>Tabela</h1>
				</header>
				<ContentTable>
					<TableHead>
						<Tr>
							<Th>Słówko</Th>
							<Th>Tłumaczenie</Th> 
							<Th>Poziom</Th>
							<Th>Rozdział</Th>
						</Tr>
					</TableHead>
					<TableBody>
						{!this.state.words ? 'Wczytywanie...' : (this.state.words.map(({word1, word2, word3, translation1, level, type, image}) => {
							return (
								<Tr>
									<Td>{word3 ? `${word1} / ${word2} / ${word3}` : word2 ? `${word1} / ${word2}` : word1}</Td>
									<Td>{translation1}</Td> 
									<Td>{level === 'basic' ? 'Podstawowy': 'Rozszerzony'}</Td>
									<Td>{type}</Td>
								</Tr>
							)
						}))}
					</TableBody>
				</ContentTable>
			</WordListPage>
		);
	}
}

export default WordList