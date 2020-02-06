// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import latinize from 'latinize'
// ICONS
import { FaAngleRight, FaStar, FaListUl} from 'react-icons/fa'
// STYLES
import { PageLink } from '../../../../../Components/Styles/Components'
import { listEntry, listHover } from '../../../../../Components/Styles/Keyframes'

const UnitElement = styled.div`
	
`

const UnitTitle = styled.h3`

`;

const UnitList = styled.ul`
	list-style: none;
`

const Go = styled(Link)`
	position: absolute;
	top: 1.5px;
	right: 0px;
	display: none;
	padding: 3px;
	color: var(--color-decorative);
	opacity: 0;
	animation: ${listEntry} 0.3s 0.1s both;
	transition: all 0.1s ease;
	:hover {
		animation: ${listHover} 0.3s both;
	}
`
const UnitListItem = styled.li`
	position: relative;
	display: flex;
	align-items: center;
	padding: 3px;
	:hover ${Go} {
		display: block;
	}
	:hover ${PageLink} {
		color: var(--color-primary);
	}
`
const Arrow = styled(FaAngleRight)`
	color: var(--color-decorative);
`
const Star = styled(FaStar)`
	color: var(--color-decorative);
`

class Unit extends Component {
	getLinkTitle = title => {
		// return latinize(title.toLowerCase()).split(' ').join('-').replace(/,/g, '');
		return title;
	}
	render() {
		// const link = this.props.links[0].path;
		// const index = link.lastIndexOf('/');
		// const beginning = this.props.links[0].path.slice(0, index).replace('.1', '');
		// const innerLink = `${beginning}/inne`;
		// const testLink = `${beginning}/test`;
		const testLink = `/${this.props.book}/rozdzial-${this.props.number}/test`
		return (
			<UnitElement>
				<UnitTitle>Rozdział {this.props.number} - {this.props.title}</UnitTitle>
				<UnitList>
					{// this.props.links ? (this.props.links.map(({title, path}) => {
						// return (
						// 	<>
						// 		<UnitListItem key={`${title} link`}>
						// 			<Arrow />
						// 			<PageLink list="true" to={path}>{title}</PageLink>
						// 			{/* {this.getLinkTitle(title)} */}
						// 			<Go to={`${this.props.book}/spis-slowek/rozdzial-${this.props.number}/${this.getLinkTitle(title)}`}>
						// 				<FaListUl />
						// 			</Go>
						// 		</UnitListItem>
						// 		{this.props.inner ? 
						// 			<UnitListItem>
						// 				<Arrow />
						// 				<PageLink list="true" to={innerLink}>Inne</PageLink>
						// 				<Go to={`${this.props.book}/spis-slowek/rozdzial-${this.props.number}/inne`}>
						// 					<FaListUl />
						// 				</Go>
						// 			</UnitListItem> : '' }
						// 	</>
						// )
					// })) : ''
				}
					<UnitListItem>
						<Star />
						<PageLink list="true" to={testLink}>&nbsp;Test&nbsp;</PageLink>
						<Star />
						<Go to={`${this.props.book}/spis-slowek/rozdzial-${this.props.number}/test`}>
							<FaListUl />
						</Go>
					</UnitListItem>
				</UnitList>
			</UnitElement>
		);
	}
}

export default Unit