import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Global, {PageLink} from '../../../components/Styled/Global/global'

const ListWrapper = styled.div`
	padding: 30px;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 768px) {
		flex-direction: column;
		padding: 0 10px;
	}
`;

const Book = styled(Link)`
	display: flex;
	align-items: center;
`;

const BookImage = styled.img`
	width: 300px;
	transition: all 0.2s ease;

	:hover {
		box-shadow: 0 0 30px gray;
	}

	@media (max-width: 768px) {
		display: none;
	}
`;

const ListSeparator = styled.hr`
	border: 0.5px solid gold;
	height: calc(100vh - 60px);
	width: 0;
	margin: 0 30px;
	@media (max-width: 768px) {
		display: none;
	}
`;

const ListHeader = styled.h1`
	color: white;

	@media (max-width: 768px) {
		text-align: center;
	}
`;

const List = styled.div`
	max-width: 1000px;
	height: calc(100vh - 200px);
	overflow-y: scroll;
	padding-right: 30px;

	::-webkit-scrollbar {
		width: 3px;
	}

	::-webkit-scrollbar-track {
		background: #000; 
		border-radius: 3px;
	}
	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background: gray;
	}

	@media (max-width: 768px) {
		margin: 0 20px;
		height: calc(100vh - 150px);
	}
`;

const ListSection = styled.h3`
	color: lightgray;
`;

const ListSubsection = styled.ul`
	list-style: none;

	li {
		padding: 3px;

		::before {
			content: "↪";
			color: gold;
			margin-left: -20px;
			margin-right: 5px;
		}

		:last-child {
			color: white;
		}

		:last-child::before {
			content: "🎓";
			text-shadow: 0 0px 7px #998100;
			margin-left: -24px;
		}

		:last-child::after {
			content: "🎓";
			text-shadow: 0 0px 7px #998100;
			margin-left: 7px;
		}
	}
`;

const MacmillanBook = () => (
<>
	<Global/>
	<ListWrapper>
		<Book to='/'>
			<BookImage src="https://www.gandalf.com.pl/o/oxford-solutions-intermediate,big,578379.jpg" alt="Oxford Solutions Intermediate"/>
		</Book>
		<ListSeparator/>
		<div>
		<ListHeader>Spis treści:</ListHeader>
		<List>
			<ol>
				<ListSection>Czasowniki nieregularne</ListSection>
				<ListSubsection>
					<li>
						<PageLink list to='/macmillan'>Podstawa (z podręcznika)</PageLink>
					</li>
					<li>
						<PageLink list to='/macmillan'>Rozszerzenie</PageLink>
					</li>
					<li>
						<PageLink list to='/macmillan/test-człowiek'>Test</PageLink>
					</li>
				</ListSubsection>
			</ol>
		</List>
		</div>
	</ListWrapper>
  </>
)

export default MacmillanBook