// BASIC
import React, { Component } from 'react'
import styled, {css} from 'styled-components'
// ICONS
import {FaReply} from 'react-icons/fa'

const EditorElement = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: none;
	align-items: center;
	flex-direction: column;
	width: 100%;
	height: 100vh;
	background-color: var(--color-dark);
	${props =>
		props.show &&
		css`
			display: flex;
		`
	}
`
const Title = styled.h1`
	margin: 15px 0;
	font-size: 30px;
	line-height: 40px;
`
const Main = styled.form`
	width: 100%;
`
const Fields = styled.div`
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
	height: calc(100vh - 150px);
	margin: 10px;
	overflow-y: scroll;
	::-webkit-scrollbar {
		width: 3px;
	}
	::-webkit-scrollbar-track {
		background: var(--color-dark); 
		border-radius: 3px;
	}
	::-webkit-scrollbar-thumb {
		background: var(--color-secondary);
	}
`
const Field = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	width: 90vw;
	max-width: 300px;
	margin: 20px;
	padding: 30px;
	border: 1px solid var(--color-secondary);
	border-radius: 10px;
	text-align: center;
`
const Submit = styled.button`

`
const Div = styled.div`
	margin: 5px;
`
const Label = styled.label`
	display: block;
`
const Input = styled.input`
	text-align: center;
	border: none;
	border-radius: 20px;
	padding: 5px;
	outline: none;
	width: 90%;
`

class Editor extends Component {
	render() {
		let {word1, word2, word3, translation1, translation2, translation3, image, female, type, level } = this.props.activeWord ? this.props.activeWord : '';
		return (
			<EditorElement show={this.props.show}>
				<Title>Edytuj</Title>
				<Main onSubmit={this.props.onSubmit}>
					<Fields>
						<Field>
							<Div>
								<Label htmlFor="word1">1 słówko</Label>
								<Input defaultValue={word1} onChange={this.props.onChange} type="text" name="word1" id="word1" autoComplete="off" />
							</Div>
							<Div>
								<Label htmlFor="word2">2 słówko</Label>
								<Input defaultValue={word2} onChange={this.props.onChange} type="text" name="word2" id="word2" autoComplete="off" />
							</Div>
							<Div>
								<Label htmlFor="word3">3 słówko</Label>
								<Input defaultValue={word3} onChange={this.props.onChange} type="text" name="word3" id="word3" autoComplete="off" />
							</Div>
						</Field>
						<Field>
							<Div>
								<Label htmlFor="translation1">1 tłumaczenie</Label>
								<Input defaultValue={translation1} onChange={this.props.onChange} type="text" name="translation1" id="translation1" autoComplete="off" />
							</Div>
							<Div>
								<Label htmlFor="translation2">2 tłumaczenie</Label>
								<Input defaultValue={translation2} onChange={this.props.onChange} type="text" name="translation2" id="translation2" autoComplete="off" />
							</Div>
							<Div>
								<Label htmlFor="translation3">3 tłumaczenie</Label>
								<Input defaultValue={translation3} onChange={this.props.onChange} type="text" name="translation3" id="translation3" autoComplete="off" />
							</Div>
						</Field>
						<Field>
							<Div>
								<Label htmlFor="image">Zdjęcie</Label>
								<Input defaultValue={image} onChange={this.props.onChange} type="text" name="image" id="image" autoComplete="off" />
							</Div>
						</Field>
						<Field>
							<Div>
								<Label htmlFor="female">Feminizacja</Label>
								<Input defaultValue={female} onChange={this.props.onChange} type="text" name="female" id="female" autoComplete="off" />
							</Div>
							<Div>
								<Label htmlFor="type">Nazwa podrozdziału</Label>
								<Input defaultValue={type} onChange={this.props.onChange} type="text" name="type" id="type" autoComplete="off" />
							</Div>
							<Div>
								<Label htmlFor="level">Poziom</Label>
								<Input defaultValue={level} onChange={this.props.onChange} type="text" name="level" id="level" autoComplete="off" />
							</Div>
						</Field>
					</Fields>
					<Submit type='submit'>Potwierdź</Submit>
				</Main>
				<FaReply onClick={this.props.back} />
			</EditorElement>
		);
	}
}

export default Editor