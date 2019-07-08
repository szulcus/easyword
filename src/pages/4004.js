// BASIC
import React, {Component} from 'react';
// STYLED
import GlobalStyled, {Wrapper, PageLink} from '../components/Styled/Global/global';
// FILES
import wow from '../images/wow.png'

const Surprised = dtyled.img`
	
`

class NotFoundPage extends Component {
	render() {
		return (
			<>
				<GlobalStyled/>
				<Wrapper center>
					<h1>Nie ma takiej strony!</h1>
					<PageLink styled to="/">Wróć do strony głównej</PageLink>
				</Wrapper>
			</>
		);
	}
};

export default NotFoundPage