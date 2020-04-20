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

const Icon = styled(FaStar)`
	color: var(--color-main);
`

class ListElementTest extends Component {
	render() {
		return (
			<ListElementTestItem>
				<Icon />
					<PageLink list="true" to={this.props.path}> {this.props.content} </PageLink>
				<Icon />
			</ListElementTestItem>
		);
	}
}

export default ListElementTest