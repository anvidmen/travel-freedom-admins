import styled from 'styled-components'
import Colors from 'theme/Colors'

export const StyledList = styled.div`
	display: flex;
	width: 70vw;
	min-width: 320px;
	flex-direction: column;
	padding: 1rem;
	box-shadow: 0px 3px 6px ${Colors.boxShadow};
	border-radius: 12px;
	opacity: 1;
	font-style: bold;
	font-size: 16px;
	color: ${Colors.headerBlue};
`

export const StyledRow = styled.div`
	display: flex;
	width: 100%;
	margin: 0.2rem 0;
`

export const StyledIcons = styled.div`
	display: flex;
	justify-content: space-around;
	flex: 3;
`

export const StyledItem = styled.div`
	text-align: left;
	flex: 1;
`

export const StyledImg = styled.img`
	border-radius: 50%;
	margin: 0 5px;
	width: 35px;
	height: 35px;
`
