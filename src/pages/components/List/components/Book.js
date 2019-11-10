// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const BookElement = styled(Link)`
	display: flex;
	align-items: center;
`

const BookImage = styled.img`
	display: none;
	@media (min-width: 800px) {
		display: block;
		width: 300px;
		transition: all 0.2s ease;
		:hover {
			box-shadow: 0 0 30px gray;
		}
	}
`;

class Book extends Component {
	render() {
		return (
			<BookElement to='/'>
				<BookImage src={this.props.src} alt={this.props.information} title="Przejdź do biblioteki"/>
			</BookElement>
		);
	}
}

export default Book