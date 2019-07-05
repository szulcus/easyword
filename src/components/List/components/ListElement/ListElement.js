// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
// STYLES
import {PageLink, Icon} from '../../../Styles/Components'
// ICONS
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleRight);

const ListElementItem = styled.li`
	padding: 3px;
`

class ListElement extends Component {
	render() {
		return (
			<ListElementItem>
				<Icon list icon={['fas', 'angle-right']}/>
				<PageLink list to={this.props.path}>{this.props.content}</PageLink>
			</ListElementItem>
		);
	}
}

export default ListElement