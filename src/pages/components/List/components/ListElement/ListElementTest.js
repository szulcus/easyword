// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
// STYLES
import {PageLink} from '../../../../../Components/Styles/Components'
// ICONS
import { FaStar } from 'react-icons/fa'

const ListElementTestItem = styled.li`
	padding: 3px;
	padding-top: 10px;
`

const RightIcon = styled(FaStar)`
	margin-left: 7px;
`

class ListElementTest extends Component {
	render() {
		return (
			<ListElementTestItem>
				<FaStar />
				<PageLink list to={this.props.path}>{this.props.content}</PageLink>
				<RightIcon />
			</ListElementTestItem>
		);
	}
}

export default ListElementTest