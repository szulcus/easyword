// BASIC
import React, {Component} from 'react'
import styled, { css } from 'styled-components'
import greatAnimationData from '../lotties/data/72-favourite-app-icon.json'
import goodAnimationData from '../lotties/data/433-checked-done.json'
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/functions'
// COMPONENTS
import Preloader from './Preloader'
import Cathegory from './components/Cathegory'
import Navigation from './components/Navigation/Navigation'
import Word from './components/Word'
import Picture from './components/Picture'
import Input from './components/WritingApp/Input'
import AppNavigation from './components/AppNavigation';
import Answer from './components/Answer'
import SocialMedia from './components/SocialMedia'
import Congratulations from './components/Congratulations'
// STYLES
import Global from '../Styles/Global'
import { Wrapper } from '../Styles/Components'
import '../../Components/Styles/main-keyframes.css'
// FUNCTIONS
import getWord from './components/Functions/chooseWord'
import female from './components/Functions/createFemaleTranslations'
import similarTranslation from './similarTranslation'
// ANIMATIONS
import LottieAnimation from '../lotties/LottieAnimation'

class App extends Component {
	state = {
		load: false,
		points: 0,
		appLevel: 1,
		goal: 15,
		experience: 0,
		words: null,
		baseWord: null,
		hideAnswer: true,
		answer: '',
		good: false,
		great: false,
		counter: 0,
		deleteImage: false,
		message: false,
		info: {}
	}
	componentDidMount() {
		const db = firebase.firestore();
		this.setState({load: true});

		let {bookName, unitNumber} = this.props.match.params;
		if (bookName === 'macmillan') {
			bookName = 'book_01'
		}
		else if (bookName === 'wsip') {
			bookName = 'book_02'
		}
		else if (bookName === 'oxford') {
			bookName = 'book_03'
		}
		else if (bookName === 'znaki-drogowe') {
			bookName = 'book_04'
		}
		else if (bookName === 'czasowniki-nieregularne') {
			bookName = 'book_05'
		}
		let partNumber;
		if (unitNumber.includes('.') && Number(unitNumber)) {
			partNumber = unitNumber.replace(/[0-9]*\./g,'').replace(/[0-9]*/g, x => x.length === 1 ? `0${x}` : x);
			unitNumber = unitNumber.replace(/\.[0-9]*/g, '').replace(/[0-9]*/g, x => x.length === 1 ? `0${x}` : x);
		}
		else if (Number(unitNumber)) {
			unitNumber = unitNumber.replace(/[0-9]*/g, x => x.length === 1 ? `0${x}` : x);
		}
		else {
			alert('nie ma strony!');
		}
		if (unitNumber.length === 1) {
			unitNumber = `0${unitNumber}`;
		}

		firebase.auth().onAuthStateChanged(user => {
			if(user) {
				console.log(user);
				this.setState({userId: user.uid});
				db.collection('users').doc(user.uid).onSnapshot(snapshot => {
					const unit = `unit_${unitNumber}`;
					const part = partNumber ? `part_${partNumber}` : 'test';
					const book = bookName;
					const points = snapshot.data().points.books[book].units[unit].parts[part].points;
					const appLevel = snapshot.data().points.books[book].units[unit].parts[part].level;
					const experience = snapshot.data().points.experience;
					this.setState({ points, experience, appLevel });
					if (appLevel === 1) {
						this.setState({goal: 10});
					}
					else if (appLevel === 2) {
						this.setState({goal: 30});
					}
					else if (appLevel === 3) {
						this.setState({goal: 60});
					}
					else if (appLevel === 4) {
						this.setState({goal: 100});
					}
					else if (appLevel === 5) {
						this.setState({goal: 150});
					}
					else if (appLevel === 6) {
						this.setState({goal: 210});
					}
					else if (appLevel === 7) {
						this.setState({goal: 280});
					}
					else if (appLevel === 8) {
						this.setState({goal: 460});
					}
					else if (appLevel === 9) {
						this.setState({goal: 550});
					}
					else if (appLevel === 10) {
						this.setState({goal: 650});
					}
					
					// if (this.state.points >= this.state.goal) {
					// 	this.showNotification();
					// }
				});
			}
			db.collection('books').doc(this.props.match.params.bookName).onSnapshot((snap) => {
				let partWords;
				const unit = `unit_${unitNumber}`
				const words = snap.data()[unit];
				if (partNumber) {
					partWords = words.parts[`part_${partNumber}`].words;
				}
				else {
					partWords = words.parts.part_01.words;
				}
				this.setState({
					words: partWords,
					baseWord: getWord(partWords),
					info: {
						unitNumber,
						partNumber,
						bookName
					}
				})
			});

			
			
		})
	}
	showNotification = () => {
		let book;
		if (this.state.info.book === 'macmillan') {
			book = 'book_01'
		}
		else if (this.state.info.book === 'macmillan') {
			book = 'book_02'
		}
		const {unitNumber, partNumber} = this.state.info;
		const unit = `unit_${unitNumber}`;
		const part = partNumber ? `part_${partNumber}` : 'test';
		const appLevel = `points.books.${book}.units.${unit}.parts.${part}.level`;
		this.setState({prize: this.state.goal * this.state.appLevel});
		firebase.firestore().collection('users').doc(this.state.userId).update({
			'points.experience': this.state.experience + this.state.goal * this.state.appLevel,
			[appLevel]: this.state.appLevel + 1
		})
		this.handleMessage()
	}
	getNew = () => {
		if (this.state.hideAnswer === true || this.state.answer === 'Brawo!') {
			this.setState({baseWord: getWord(this.state.words)});
		}
		else {
			alert('Najpierw odpowiedz!');
		}
	}

	check = (e) => {
		this.setState({counter: this.state.counter + 1});
		let userWord = e.target.value.toLowerCase().trim().replace('ą','a').replace('ć','c').replace('ę','e').replace('ł','l').replace('ń','n').replace('ó','o').replace('ś','s').replace('ź','z').replace('ż','z');

		const translation1 = similarTranslation(this.state.baseWord.translation1);
		const translation2 = similarTranslation(this.state.baseWord.translation2);
		const translation3 = similarTranslation(this.state.baseWord.translation3);
		const feminine_translation1 = similarTranslation(female(this.state.baseWord).feminine_translation1);
		const feminine_translation2 = similarTranslation(female(this.state.baseWord).feminine_translation2);
		const feminine_translation3 = similarTranslation(female(this.state.baseWord).feminine_translation3);

		const {bookName, unitNumber, partNumber} = this.state.info;
		const unit = `unit_${unitNumber}`;
		const part = partNumber ? `part_${partNumber}` : 'test';
		const appPoints = `points.books.${bookName}.units.${unit}.parts.${part}.points`;

		if (
			userWord === translation1 ||
			userWord === translation2 ||
			userWord === translation3 ||
			userWord === feminine_translation1 ||
			userWord === feminine_translation2 ||
			userWord === feminine_translation3
			) {
			document.getElementById('answer').style.color = 'var(--color-decorative)';
			const target = e.target
			this.setState({
				answer: 'Brawo!',
				hideAnswer: false,
				counter: 0
			});
			if (translation1.length > this.state.counter && this.state.hideAnswer === true) {
				e.persist();
				this.setState({
					great: true,
				});
				firebase.firestore().collection('users').doc(this.state.userId).update({
					[appPoints]: this.state.points + 2,
					'points.experience': this.state.experience + 2
				})
				setTimeout(() => {
					target.value = '';
					this.getNew();
					this.setState({
						hideAnswer: true,
						great: false
					});
				}, 1000)
			}
			else {
				e.persist();
				this.setState({
					good: true,
				});
				firebase.firestore().collection('users').doc(this.state.userId).update({
					[appPoints]: this.state.points + 1,
					'points.experience': this.state.experience + 1
				})
				setTimeout(() => {
					target.value = '';
					this.getNew();
					this.setState({
						hideAnswer: true,
						good: false
					});
				}, 1000)
			}
		}
	}

	getAnswer = () => {

		if (this.state.hideAnswer !== false) {
			let {translation1, translation2, translation3} = this.state.baseWord;
			const {full_translation1, full_translation2, full_translation3} = female(this.state.baseWord);

			const {bookName, unitNumber, partNumber} = this.state.info;
			const unit = `unit_${unitNumber}`;
			const part = partNumber ? `part_${partNumber}` : 'test';
			const appPoints = `points.books.${bookName}.units.${unit}.parts.${part}.points`;

			if (full_translation1 !== undefined) {
				translation1 = full_translation1;
			}
			if (full_translation2 !== undefined) {
				translation2 = full_translation2;
			}
			if (full_translation3 !== undefined) {
				translation3 = full_translation3;
			}

			if (this.state.points >= 2) {
				firebase.firestore().collection('users').doc(this.state.userId).update({
					[appPoints]: this.state.points - 2
				})
			}

			else {
				this.setState({points: 0});
			}

			document.getElementById('answer').style.color = 'firebrick';

			let answer = [translation1, translation2, translation3].join('  ').trim().replace('    ', ', ').replace('  ', ', ').trim();
			this.setState({answer: answer, hideAnswer: false})
		}
	}

	keyPress = (e) => {
		if (e.key === 'Enter' && e.shiftKey) {
			this.getNew();
		}
		
		else if (e.key === 'Enter') {
			this.getAnswer();
		}
	}

	deleteImg = () => {
			if (this.state.deleteImage === false) {
				this.setState({deleteImage: true})
			}
			else {
				this.setState({deleteImage: false})
			}
	}

	handleMessage = () => {
		!this.state.message ? this.setState({message: true}) : this.setState({message: false});
		// alert('o')
	}
	
	render = () => {
		let baseWord = {};
		if (this.state.baseWord) {
			baseWord = this.state.baseWord;
		}
		// replace empty images
		let image = baseWord.image;
		// let image2 = baseWord.image2;
		if (image === `url`) {
			image = `https://fakeimg.pl/647x400/?text=${baseWord.word1}`;
		}
		// if (image2 !== undefined) {
		// 	image = `https://fakeimg.pl/647x400/?text=${baseWord.word1}`;
		// }
		// subtype and subsubtype exceptions
		let cathegory = baseWord.type;
		if(baseWord.subtype !== undefined) {
			cathegory = `${cathegory} (${baseWord.subtype})`;
		}
		
		else if (baseWord.subsubtype !== undefined) {
			cathegory = `${cathegory} (${baseWord.subsubtype})`;
		}
		// word2 and word3 exceptions
		let word = baseWord.word1;
		// console.log(baseWord);
		if(baseWord.word3 !== undefined) {
			word = `${word} / ${baseWord.word2} / ${baseWord.word3}`;
		}
		else if(baseWord.word2 !== undefined) {
			word = `${word} / ${baseWord.word2}`;
		}
		const Animation = styled.div`
			display: none;
			position: absolute;
			top: calc(100px + 5vw);
			left: 50%;
			width: 50vw;
			max-width: 300px;
			max-height: calc(100vh - 336px);
			transform: translatex(-50%);
			${props =>
				props.preview &&
				css`
					display: block;
				`
			};
			@media(min-width: 700px) {
				top: 150px;
			}
		`
		return (
			<>
				<Global />
				<Wrapper center small>
					<Preloader load={this.state.load} />
					<Cathegory content={cathegory} />
					<Navigation points={this.state.points} />
					<Word content={word} />
					<Picture hide={this.state.deleteImage} onClick={this.deleteImg} src={image} word={word} link={`https://pxhere.com/pl/photos?q=${baseWord.word1}`} />
					<Input onChange={this.check} press={this.keyPress} points={this.state.points} max={this.state.goal} />
					<AppNavigation check={this.getAnswer} change={this.getNew} />
					<Answer hideAnswer={this.state.hideAnswer} text={this.state.answer} />
					{/* <button onClick={this.handleMessage}>Klik {this.state.experience}</button> */}
					<Animation preview={this.state.great}>
						<LottieAnimation data={greatAnimationData} />
					</Animation>
					<Animation preview={this.state.good}>
						<LottieAnimation data={goodAnimationData} />
					</Animation>
					<Congratulations preview={this.state.message} level={this.state.appLevel} prize={this.state.prize} onClick={this.handleMessage} />
					<SocialMedia />
				</Wrapper>
			</>
		);
	}
}

export default App