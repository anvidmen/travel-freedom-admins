import styled from 'styled-components'
import Colors from 'theme/Colors'

const StyledFooter = styled.footer`
	@media only screen and (min-width: 1020px) {
		div {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			padding: 2px 15vw;
			margin-bottom: 3rem;
		}
		p {
			text-align: left;
			font: normal normal normal 15px;
			letter-spacing: 0px;
			color: ${Colors.blackColor};
			text-transform: "uppercase";
			opacity: 1;
		}
		ul {
			text-align: right;
			font: normal normal normal 12px;
			letter-spacing: 0;
			color: ${Colors.ulColor};
			opacity: 1;
			list-style-type: none;
		}
		hr {
			margin: 2px 15vw;
		}
	}
	@media only screen and (max-width: 1019px) {
		div {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			padding: 2px 15vw;
			margin-bottom: 2rem;
		}
		p {
			text-align: left;
			font: normal normal normal 15px;
			color: ${Colors.blackColor};
			text-transform: uppercase;
			opacity: 1;
			min-width: 10rem;
			flex: 2;
		}
		ul {
			text-align: right;
			font: normal normal normal 12px;
			letterspacing: 0;
			color: #4a4a4a;
			opacity: 1;
			list-style-type: none;
			margin: 0px;
			padding-left: 0;
			min-width: 10rem;
			flex: 3;
		}
		hr {
			margin: 2px 15vw;
		}
	}
	@media only screen and (max-width: 468px) {
		div {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			margin-bottom: 2rem;
			backgroud-color: blue;
		}
		p {
			text-align: center;
			font: normal normal normal 15px;
			letter-spacing: 0px;
			color: ${Colors.blackColor};
			text-transform: uppercase;
			opacity: 1;
			padding-left: 25px;
			flex: 4;
		}
		ul {
			text-align: center;
			font: normal normal normal 12px;
			letterspacing: 0;
			color: #4a4a4a;
			opacity: 1;
			list-style-type: none;
			margin-top: 0.5rem;
			padding-left: 0;
			flex: 4;
		}
		hr {
			margin: 2px 15vw;
		}
	}
`

export default StyledFooter
