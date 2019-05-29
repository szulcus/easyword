// BASIC
import React, {Component} from 'react';
import styled from 'styled-components';
import Global, {Wrapper, PageLink} from '../../../../components/Styled/Global/global';



const Div = styled.div`
   text-align: center;
   font-size: 30px;
`;

class Unit1 extends Component {
	render() {
	return (
		<>
		   <Global/>
		   <Wrapper>
		      <Div>Unit 2</Div>
		      <div>test</div>
		      <PageLink to="/easy-word/wsip">wróć</PageLink>
		   </Wrapper>
		</>
	)
	}
}

export default Unit1