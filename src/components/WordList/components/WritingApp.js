// BASIC
import React, { Component } from 'react'
import styled, {keyframes, css} from 'styled-components'
import {au, db} from '../../../Config/firebase'
import latinize from 'latinize'
// COMPONENTS
import Input from '../../App/components/WritingApp/Input'
import Cathegory from '../../App/components/Cathegory'
import Word from '../../App/components/Word'
import Picture from '../../App/components/Picture'
import SocialMedia from '../../App/components/SocialMedia'
// ICONS
import {MdExitToApp, MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'

const fade = keyframes`
	from {
		opacity: 0;
		scale: 0.9;
	}
	to {
		opacity: 1;
		scale: 1;
	}
`
const fadeOut = keyframes`
	from {
		opacity: 1;
		scale: 1;
	}
	to {
		opacity: 0;
		scale: 0.9;
	}
`
const WritingAppComponent = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	padding: 20px;
	padding-bottom: 50px;
	background-color: var(--color-dark);
	z-index: 2;
	animation: ${fade} 0.3s ease;
	${props =>
		props.hide &&
		css`
			animation: ${fadeOut} 0.3s both;
		`
	};
	@media (max-height: 400px) {
		padding-bottom: 10px;
	}
`
const Navigation = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	transform: translateY(-10px);
`
const Exit = styled(MdExitToApp)`
	font-size: 30px;
	margin: 0 10px;
	transition: all 0.2s ease;
	:hover {
		opacity: 0.5;
		cursor: pointer;
	}
`
const Arrow = styled.div`
	font-size: 50px;
	transform: translateY(5px);
	color: var(--color-decorative);
	margin: 0 10px;
	transition: all 0.2s ease;
	${props =>
		props.hide &&
		css`
			opacity: 0;
		`
	};
	:hover {
		opacity: 0.5;
		cursor: pointer;
	}
`

class WritingApp extends Component {
	state = {
		isAdmin: false,
		hide: false
	}
	componentDidMount() {
		au.onAuthStateChanged(user => {
			if(user) {
				user.getIdTokenResult().then(idTokenResult => {
					if (idTokenResult.claims.admin) {
						this.setState({isAdmin: true})
					}
				})
			}
		})
	}
	edit = (variable) => {
		if (this.state.isAdmin && typeof variable === 'string') {
			const {bookName, unitNumber, partIndex, wordIndex} = this.props.data;
			console.log(unitNumber, partIndex, wordIndex);
			const unit = `unit_${unitNumber.padStart(2, '0')}`;
			const part = `part_${(partIndex + 1).toString().padStart(2, '0')}`
			const book = Number(unitNumber) <= 10 ? bookName : `${bookName}2`
			console.log(book);
			db.collection('books').doc(book).get().then(snap => {
				// console.log(snap.data())
				const data = prompt(`${variable}:`, this.props.data[variable]);
				console.log(`${unit}.parts.${part}.words.${wordIndex}.${variable}`)
				if (data) {
					db.collection('books').doc(book).update({
						[`${unit}.parts.${part}.words.${wordIndex}.${variable}`]: data
					}).then(() => {
						this.props.updateData(variable, data);
					})
				}
			})
		}
	}
	exit = () => {
		this.setState({hide: true})
		setTimeout(() => {
			this.props.onBack()
			// this.setState({hide: false})
		}, 300)
	}
	render() {
		let {word1, word2, word3, translation1, translation2, translation3, level, type, subtype, image, partIndex, wordIndex} = this.props.data ? this.props.data : {};
		// replace empty images
		if (image === `url`) {
			image = `https://fakeimg.pl/647x400/?text=${latinize(word1)}`;
		}
		// subtype exceptions
		if(subtype) {
			type = `${type} (${subtype})`;
		}
		// word2 and word3 exceptions
		if(word3) {
			word1 = `${word1} / ${word2} / ${word3}`;
		}
		else if(word2) {
			word1 = `${word1} / ${word2}`;
		}
		// translation2 and translation3 exceptions
		if(translation3) {
			translation1 = `${translation1} / ${translation2} / ${translation3}`;
		}
		else if(translation2) {
			translation1 = `${translation1} / ${translation2}`;
		}
		return (
			<WritingAppComponent hide={this.state.hide}>
				<Cathegory content={type} />
				<Word content={word1} />
				<Picture
					isAdmin={this.state.isAdmin}
					onEdit={this.edit}
					// animation={this.state.animation}
					// onClick={this.deleteImg}
					src={image}
					word={word1} link={`https://pxhere.com/pl/photos?q=${this.props.data.word1}`}
				/>
				<Input text={translation1} readOnly />
				<Navigation>
					<Arrow hide={partIndex === 1 && wordIndex === 0}>
						<MdKeyboardArrowLeft onClick={this.props.goToPrevious} />
					</Arrow>
					<Exit onClick={this.exit} />
					<Arrow hide={wordIndex + 1 === this.props.unitsLength[`part_${(partIndex + 1).toString().padStart(2, '0')}`]}>
						<MdKeyboardArrowRight onClick={this.props.goToNext} />
					</Arrow>
				</Navigation>
				<SocialMedia />
			</WritingAppComponent>
		);
	}
}

export default WritingApp