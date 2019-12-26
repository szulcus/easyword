// BASIC
import styled, {css} from 'styled-components'

const LoginButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px;
	padding: 20px;
	font-size: 20px;
	font-family: 'Ubuntu', sans-serif;
	cursor: pointer;
	text-align: center;
	outline: none;
	color: #fff;
	border: none;
	border-radius: 20px;
	box-shadow: 0 6px #999;
	transition: all 0.2s ease;
	:hover {
		box-shadow: 0 3px #666;
		transform: translateY(4px);
		${props =>
			props.gplus &&
			css`
				background-color: #cc3a28;
		`};
	}
`

export const Content = styled.span`
	margin-right: 10px;
`


export default LoginButton