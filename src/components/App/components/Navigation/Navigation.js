// BASIC
import React, { Component } from 'react'
import styled from 'styled-components';
// COMPONENTS
import Points from './components/Points'
import Hamburger from './components/Hamburger/Hamburger'

const NavigationElement = styled.nav`
	display: flex;
	width: 100%;
	justify-content: space-between;
`

class Navigation extends Component {
	render() {
		return (
				<NavigationElement>
					<Points/>
					<Hamburger />
				</NavigationElement>
		);
	}
}

export default Navigation