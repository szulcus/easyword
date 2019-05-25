import React, {Component} from 'react';
// STYLED
import GlobalStyled, {Wrapper, PageLink} from '../components/Styled/Global/global';

class NotFoundPage extends Component {
	render() {
		return (
			<>
				<GlobalStyled/>
				<Wrapper center>
					<h1>Nie ma takiej strony!</h1>
					<PageLink styled to="/easy-word">Wróć do strony głównej</PageLink>
				</Wrapper>
			</>
		);
	}
};

export default NotFoundPage