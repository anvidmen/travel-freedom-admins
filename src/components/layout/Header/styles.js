import styled from 'styled-components'
import Colors from 'theme/Colors'

export const StyledHeaderTop = styled.div`
	display: flex;
	justify-content: center;
	color: ${Colors.darkBlueColor};
	padding: 10px 5vw;
	&.logged {
		justify-content: space-between;
	}
`

export const StyledLogo = styled.div`
	align-items: center;
	color: ${Colors.headerBlue};
	text-transform: uppercase;
	opacity: 1;
	font-size: 15px;
`

export const StyledProfile = styled.div`
	position: relative;
	display: flex;
	align-items: center;
`

export const StyledButton = styled.button`
	display: flex;
	justify-content: space-around;
	align-items: center;
	background: ${Colors.white} 0% 0% no-repeat padding-box;
	box-shadow: 0px 4px 8px ${Colors.boxShadow};
	border: none;
	border-radius: 10px;
	opacity: 1;
	padding: 0;
	width: 132px;
	height: 40px;
`

export const StyledImg = styled.img`
	border-radius: 50%;
	margin: 0 5px;
	width: 35px;
	height: 35px;
`

export const StyledText = styled.p`
	text-align: left;
	color: ${Colors.headerGrey};
	opacity: 1;
	font-size: 15px;
`

export const StyledDropdown = styled.div`
	position: absolute;
	padding: 0;
	z-index: 1;
	text: center;
	background: ${Colors.whiteColor} 0% 0% no-repeat padding-box;
	border: 1px solid ${Colors.lightGrey};
	border-radius: 6px 6px 0px 0px;
	opacity: 1;
	top: 57px;
`

export const StyledUl = styled.ul`
	list-style-type: none;
	padding: 0px;
	margin: 0px;
	position: absolute;
	width: 132px;
`

export const StyledLi = styled.li`
	border: 1px solid ${Colors.lightGrey};
	padding-top: 10px;
	align-items: center;
	text-align: center;
	min-height: 2.5rem;
	min-width: 6rem;
	line-height: 100%;
	display: block;
	background-color: white;
`

export const StyledTitle = styled.div`
	color: white;
	background-color: ${Colors.darkBlueColor};
	padding: 2px 15vw;
	text-align: center;
	&.logged {
		text-align: left;
	}
	max-height: 81px;
	@media only screen and (min-width: 481px) {
		font-size: 18px;
	}
	@media only screen and (max-width: 480px) {
		font-size: 12px;
	}
`
