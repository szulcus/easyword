// BASIC
import React from 'react'
import Lottie from 'react-lottie'

const LottieAnimation = props => (
	<Lottie options={{
		loop: false,
		autoplay: true,
		animationData: props.animationData,
		rendererSettings: {
			preserveAspectRadio: 'xMidYMid slice'
		}
	}} />
);

export default LottieAnimation