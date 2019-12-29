// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
// ICONS
import { FaAngleRight, FaStar} from 'react-icons/fa'
// STYLES
import { PageLink } from '../../../../../Components/Styles/Components'

const UnitElement = styled.div`
	
`

const UnitTitle = styled.h3`

`;

const UnitList = styled.ul`
	list-style: none;
`

const UnitListItem = styled.li`
	padding: 3px;
`

const Arrow = styled(FaAngleRight)`
	color: var(--color-decorative);
`
const Star = styled(FaStar)`
	color: var(--color-decorative);
`

class Unit extends Component {
	render() {
		// Get links
		const link = this.props.links[0].path;
		const index = link.lastIndexOf('/');
		const beginning = this.props.links[0].path.slice(0, index);
		const innerLink = `${beginning}/inne`;
		const testLink = `${beginning}/test`;
		return (
			<UnitElement>
				<UnitTitle>Rozdział {this.props.number} - {this.props.title}</UnitTitle>
				<UnitList>
					{this.props.links.map(({title, path}) => {
						return (
							<UnitListItem>
								<Arrow />
								<PageLink list to={path}>{title}</PageLink>
							</UnitListItem>
						)
					})}
					<UnitListItem>
						<Arrow />
						<PageLink list to={innerLink}>Inne</PageLink>
					</UnitListItem>
					<UnitListItem>
						<Star />
						<PageLink list to={testLink}> Test </PageLink>
						<Star />
					</UnitListItem>
				</UnitList>
			</UnitElement>
		);
	}
}

export default Unit