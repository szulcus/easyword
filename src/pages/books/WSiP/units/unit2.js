// BASIC
import React, {Component} from 'react';
import styled from 'styled-components';
import Global, {Wrapper, PageLink} from '../../../../components/Styled/Global/global';




const Div = styled.div`
   text-align: center;
   font-size: 30px;
`;

const Description = styled.div`
   font-size: 20px;
`;

class Unit1 extends Component {
	render() {
	return (
		<>
		   <Global/>
		   <Wrapper center>
	      <Div>Unit 2</Div>
		      <Description>test</Description>
	         <PageLink to="/wsip">Wróć</PageLink>
	      </Wrapper>
		</>
	);
	}
}

export default Unit1