// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
// STYLES
import {PageLink} from '../../../../../Components/Styles/Components'
// ICONS
import { FaAngleRight } from 'react-icons/fa'

const ListElementItem = styled.li`
	padding: 3px;
`

const Icon = styled(FaAngleRight)`
	color: var(--color-main);
`

class ListElement extends Component {
	render() {
		return (
			<ListElementItem>
				<Icon />
				<PageLink list="true" to={this.props.path}>{this.props.content}</PageLink>
			</ListElementItem>
		);
	}
}

export default ListElement