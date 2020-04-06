// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
import {db, au} from '../../Config/firebase'
import { saveAs } from 'file-saver';
import JSZip from 'jszip'
// ICONS
import {MdCloudDownload, MdCloud} from 'react-icons/md'
//wo
import w1 from '../Words/1_Macmillan/Unit5/1_StagesOfLife'
import w2 from '../Words/1_Macmillan/Unit5/2_FamilyAndFriends'
import w3 from '../Words/1_Macmillan/Unit5/3_EverydayActivities'
import w4 from '../Words/1_Macmillan/Unit5/4_FreeTimeActivities'
import w5 from '../Words/1_Macmillan/Unit5/5_HolidaysAndCelebrations'
import w6 from '../Words/1_Macmillan/Unit5/6_LifestyleConflictsAndProblems'
import w7 from '../Words/1_Macmillan/Unit5/7_Other'

const BackupComponent = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
`
const Download = styled(MdCloudDownload)`
	width: 90vmin;
	max-width: 1500px;
	font-size: 150px;
	color: var(--color-decorative);
	transition: all 0.3s ease;
	:hover {
		opacity: 0.5;
		cursor: pointer;
	}
`
const Cloud = styled(MdCloud)`
	width: 90vmin;
	max-width: 1500px;
	font-size: 150px;
	color: var(--color-decorative);
`
const Info = styled.div`
	font-size: 25px;
	text-align: center;
`

class Backup extends Component {
	state = {
		isAdmin: false,
		collections: {
			'books': {},
			'users': {},
			'games-data': {},
		},
	}
	componentDidMount() {
		au.onAuthStateChanged(user => {
			if (user) {
				user.getIdTokenResult().then(idTokenResult => {
					if (idTokenResult.claims.admin) {
						Object.keys(this.state.collections).forEach(element => {
							db.collection(element).onSnapshot(snaps => {
								snaps.forEach((snap) => {
									this.setState(prevState => ({
										collections: {
											...prevState.collections,
											[element]: {
												...prevState.collections[element],
												[snap.id]: snap.data()
											}
										}
									}));
								})
							});
						})
						this.setState({isAdmin: true})
					}
				})
			}
		})
	}
	download = () => {
		const zip = new JSZip();
		zip.file("createdAt.txt", String(new Date()));
		Object.keys(this.state.collections).forEach(element => {
			const content = Object.values(this.state.collections[element]);
			Object.keys(this.state.collections[element]).forEach((name, index) => {
				zip.folder(element).file(`${name}.json`, JSON.stringify(content[index]));
			})
			zip.folder('all').file(`${element}.json`, JSON.stringify(content));
		})
		zip.generateAsync({type:"blob"}).then(content => saveAs(content, "EasyLearn backup.zip"));
	}
	render() {
		return (
			<BackupComponent>
				{this.state.isAdmin ? <Download onClick={this.download} /> : <>
					<Cloud />
					<Info>Aby pobrać kopię zapasową, musisz być administratorem!</Info>
				</>}
			</BackupComponent>
		);
	}
}

export default Backup