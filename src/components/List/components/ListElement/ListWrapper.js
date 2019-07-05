// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'

const ListWrapper = styled.div`
	width: 90vw;
	height: calc(100vh - 150px);
	
	overflow-y: scroll;
	padding: 0 20px;
	

	::-webkit-scrollbar {
		width: 3px;
	}

	::-webkit-scrollbar-track {
		background: var(--color-dark); 
		border-radius: 3px;
	}
	::-webkit-scrollbar-thumb {
		background: var(--color-secondary);
	}

	@media (min-width: 768px) {
		width: 50vw;
		height: calc(100vh - 200px);
		padding-right: 30px;
	}

	@media (min-width: 1366px) {
		width: 800px;
	}
`

export default ListWrapper