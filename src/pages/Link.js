import React, {Component} from 'react';
import {PageLink} from '../components/Styled/Global/global'

class LinkPage extends Component {
	render() {
		return (
			<div>
			<h1>Linkowana strona www</h1>
			<PageLink to='/easy-word/'>Wróć</PageLink>
			</div>
		);
	}
};

export default LinkPage