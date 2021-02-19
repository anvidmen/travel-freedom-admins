import styled from 'styled-components'
import Colors from 'theme/Colors'

const StyledButton = styled.button`
	box-shadow: 0px 2px 4px #00000029;
	border: none;
	border-radius: 6px;
	opacity: 1;
	padding: 0.25rem 1rem;
	text-align: center;
	font: normal normal normal 15px/22px;
	letter-spacing: 0px;
	width: 100%;

	&.primary {
		background: transparent
			linear-gradient(98deg, ${Colors.lightPrimary} 0%, ${Colors.darkPrimary} 100%) 0% 0%
			no-repeat padding-box;
		color: ${Colors.whiteColor};
	}
	&.disabled {
		opacity: 0.57;
		cursor: not-allowed;
	}
	&:hover {
		filter: brightness(85%);
	}
	&.green {
		background: transparent
			linear-gradient(98deg, ${Colors.lightGreen} 0%, ${Colors.darkGreen} 100%) 0% 0%
			no-repeat padding-box;
		color: ${Colors.whiteColor};
	}
	&.delete {
		background: ${Colors.redColor};
		color: ${Colors.whiteColor};
	}
	&.update {
		background: ${Colors.darkBlueColor};
		color: ${Colors.whiteColor};
	}
	&.cancel {
		background: ${Colors.whiteColor};
		color: ${Colors.greyColor};
	}
	&.animated {
		svg {
			animation: rotation 0.8s ease-in-out infinite;
		}
	}
	@keyframes rotation {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`

export default StyledButton
