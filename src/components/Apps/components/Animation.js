// BASIC
import React, { Component } from 'react'
import styled, {css} from 'styled-components'
//IMAGES
import tick from '../../Images/tick.svg'

const AnimationComponent = styled.div`
	width: 50vw;
	max-width: 250px;
	position: absolute;
	top: 150px;
	left: 50%;
	transform: translatex(-50%);
	border: 1px solid red;
	${props =>
		props.lowHeight &&
		css`
			height: calc(100vh - 400px);
			max-height: 350px;
		`
	};
`
const Image = styled.img`
	display: block;
	width: 100%;
	height: 100%;
`

class Animation extends Component {
	state = {
		lowHeight: false
	}
	componentDidMount() {
		window.innerWidth < window.innerHeight ? this.setState({lowHeight: false}) : this.setState({lowHeight: true})
		window.addEventListener('resize', () => {
			window.innerWidth < window.innerHeight ? this.setState({lowHeight: false}) : this.setState({lowHeight: true})
			// window.innerWidth < window.innerHeight ? console.log('height') : console.log('width');
			// console.log('coś');
		})
	}
	render() {
		return (
			// <AnimationComponent lowHeight={this.state.lowHeight}>
			// 	<Image src={tick} alt="good" />
			// </AnimationComponent>
			<></>
		)
	}
}

export default Animation