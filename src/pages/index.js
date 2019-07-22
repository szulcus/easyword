import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Wrapper} from '../components/Styled/Global/global'
import roadSignsBookImage from '../images/road-signs-book.png'
import irregularVerbsBookImage from '../images/irregular-verbs-book.png'

const PageHeader = styled.header`
	width: 90vw;
	font-size: 20px;
	font-weight: bold;
	letter-spacing: 2px;
	color: lightgray;
	margin: 30px 0;

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
`

const LogoSeparator = styled.hr`
	max-width: 1200px;
	height: 0;
	border: solid 0.5px var(--color-decorative);
`;

const Separator = styled.hr`
	display: block;
	width: calc(100vw - 100px);
	max-width: 700px;
	clip-path: polygon(10% 0, 90% 0, 100% 100%, 0 100%);
	border: groove 0.5px var(--color-decorative);
	margin-bottom: 50px;
`;

const BooksWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
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
		<Wrapper center scroll>
			<PageHeader>
				<Logo><span>E</span>asy<span>W</span>ord</Logo>
				<LogoSeparator/>
				<p>aplikacja do nauki słówek i definicji</p>
			</PageHeader>
			<BooksWrapper>
				<Book>
					<Link to='/macmillan'>
						<img src="https://www.macmillan.pl/components/com_ssshop/cache/500x500/9788376218496.png" alt="Macmillan Education"/>
					</Link>
				</Book>
				<Book>
					<Link to='/wsip'>
						<img src="https://sklep.wsip.pl/uploads/tx_evosenk/covers/upload_temp_tF8lhB.jpg" alt="test"/>
					</Link>
				</Book>
				<Book>
					<Link to='/oxford'>
						<img src="https://www.gandalf.com.pl/o/oxford-solutions-intermediate,big,578379.jpg" alt="Oxford Solutions Intermediate"/>
					</Link>
				</Book>
			</BooksWrapper>
			<Separator/>
			<BooksWrapper>
				<Book>
					<Link to='/znaki-drogowe'>
						<img src={roadSignsBookImage}/>
					</Link>
				</Book>
				<Book>
					<Link to='/czasowniki-nieregularne'>
						<img src={irregularVerbsBookImage}/>
					</Link>
				</Book>
			</BooksWrapper>
			<Separator/>
		</Wrapper>
	</>
)

export default IndexPage
