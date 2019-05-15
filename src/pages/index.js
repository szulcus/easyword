import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const PageWrapper = styled.main`
	text-align: center;
	padding: 50px;

	@media (max-width: 420px) {
		padding: 20px;
	}
`;

const PageHeader = styled.header`
	font-size: 20px;
	font-weight: bold;
	letter-spacing: 2px;
	color: lightgray;
	margin: 30px 0 30px 0;

	p {
		margin: 0;
		font-weight: normal;
		letter-spacing: 0;
	}
`;

const Logo = styled.span`
	display: block;
	color: snow;
	font-size: 50px;

	span {
		color: gold;
	}
`;

const LogoSeparator = styled.hr`
	max-width: 1000px;
	height: 0;
	border: solid 0.5px var(--color-decorative);
`;

const BooksWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	height: calc(100vh - 200px);
	overflow-y: scroll;

	::-webkit-scrollbar {
		width: 0px;
	}
`;

const Book = styled.div`
	width: 200px;
	height: calc(1.41 * 200px);
	margin: 30px;
	position: relative;
	
	::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		box-shadow: 0 0 30px gray;
		opacity: 0;
		transition: all .2s ease;
		z-index: -1;
	}

	:hover::before {
		opacity: 1;
	}

	img {
		width: 100%;
		height: 100%;
	}
`;

const IndexPage = () => (
	<>
		<PageWrapper>
			<PageHeader>
				<Logo><span>E</span>asy<span>W</span>ord</Logo>
				<LogoSeparator/>
				<p>aplikacja do nauki słówek</p>
			</PageHeader>
			<BooksWrapper>
				<Book>
					<Link to='/macmillan'>
						<img src="https://www.macmillan.pl/components/com_ssshop/cache/500x500/9788376218496.png" alt="Macmillan Education"/>
					</Link>
				</Book>
				<Book>
					<Link to='/oxford'>
						<img src="https://www.gandalf.com.pl/o/oxford-solutions-intermediate,big,578379.jpg" alt="Oxford Solutions Intermediate"/>
					</Link>
				</Book>
				<Book>
					<Link to='/wsip'>
						<img src="https://sklep.wsip.pl/uploads/tx_evosenk/covers/upload_temp_tF8lhB.jpg" alt="test"/>
					</Link>
				</Book>
			</BooksWrapper>
		</PageWrapper>
	</>
)

export default IndexPage
