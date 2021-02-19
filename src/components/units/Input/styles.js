import styled from 'styled-components'
import Colors from 'theme/Colors'

const StyledInput = styled.input`
	top: 301px;
	left: 492px;
	width: 100%;
	height: 40px;
	border: 1px solid ${Colors.lightGrey};
	border-radius: 6px;
	opacity: 1;
	outline: none;

	&.success {
		background: ${Colors.whiteColor}; 0% 0% no-repeat padding-box;
		border: 1px solid ${Colors.lightGrey};
	}
	&.disabled {
		background: ${Colors.disabledColor} 0% 0% no-repeat padding-box;
		border: 2px solid ${Colors.lightGrey};
	}
	&.error {
		background: ${Colors.whiteColor} 0% 0% no-repeat padding-box;
		border: 1px solid ${Colors.darkRedColor};
	}
`

export default StyledInput
