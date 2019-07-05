// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
// STYLES
import {PageLink, Icon} from '../../../Styles/Components'
// ICONS
import { faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faStar);

const ListElementTestItem = styled.li`
	padding: 3px;
	padding-top: 10px;
`

const RightIcon = styled(Icon)`
	margin-left: 7px;
`

class ListElementTest extends Component {
	render() {
		return (
			<ListElementTestItem>
				<Icon list icon={['fas', 'star']}/>
				<PageLink list to={this.props.path}>{this.props.content}</PageLink>
				<RightIcon list icon={['fas', 'star']}/>
			</ListElementTestItem>
		);
	}
}

export default ListElementTest