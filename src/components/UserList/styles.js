import styled from 'styled-components'
import Colors from 'theme/Colors'

export const StyledMainDiv = styled.div`
	display: flex;
	justify-content: center;
`

export const StyledGrandfather = styled.div`
	@media only screen and (min-width: 1020px) {
		display: flex;
		flex-direction: column;
		width: 60vw;

		background: ${Colors.whiteColor} 0% 0% no-repeat padding-box;
		box-shadow: 0px 3px 6px ${Colors.boxShadow};
		border: 1px solid ${Colors.borderColor};
		border-radius: 6px;
		opacity: 1;
		width: 80%;
		min-width: 32rem;
		boxsizing: border - box;
		padding: 1rem 2rem;
		margin-left: 5rem;
		margin-right: 5rem;
		margin-bottom: 2rem;
	}
	@media only screen and (max-width: 1019px) {
		display: flex;
		flex-direction: column;
		width: 60vw;

		background: ${Colors.whiteColor} 0% 0% no-repeat padding-box;
		box-shadow: 0px 3px 6px ${Colors.boxShadow};
		border: 1px solid ${Colors.borderColor};
		border-radius: 6px;
		opacity: 1;
		width: 70%;
		min-width: 15rem;
		boxsizing: border - box;
		padding: 1rem 2rem;
		margin-left: 5rem;
		margin-right: 5rem;
	}
	@media only screen and (max-width: 468px) {
		display: flex;
		flex-direction: column;
		width: 60vw;

		background: ${Colors.whiteColor} 0% 0% no-repeat padding-box;
		box-shadow: 0px 3px 6px ${Colors.boxShadow};
		border: 1px solid ${Colors.borderColor};
		border-radius: 6px;
		opacity: 1;
		width: 70%;
		min-width: 20rem;
		boxsizing: border - box;
		padding: 1rem 1rem;
		margin-left: 1rem;
		margin-right: 1rem;
	}
`

export const StyledFather = styled.div`
	display: flex;
/* 	justify-content: space-between; */
	align-items: center;
	/* align-content: space-between; */
    padding-top 20px;
    margin-right: 20px;
    min-width: 2rem;

    &.topFather {
        justify-content: flex-start;
		padding-bottom: 10px;
        border-bottom: 1px solid black;
        
    }
    &.middleFather {
        justify-content: space-between;
		padding-bottom: 10px;
        border-bottom: 1px solid black;
    }
    &.bottomFather {
        justify-content: space-between; 
        padding-bottom: 10px;
}
`

export const Title = styled.div`
	@media only screen and (min-width: 1020px) {
		/* 	text-align: left; */
		font: normal normal bold 18px Ubuntu;
		letter-spacing: 0px;
		color: #005593;
		opacity: 1;
		padding-bottom: 10px;

		&.titlePicture {
			flex: 1;
			text-align: left;
		}

		&.titleName {
			flex: 2;
			text-align: left;
			padding-left: 20px;
		}

		&.titleEmail {
			flex: 4;
			text-align: left;
			padding-right: 40px; // cambiar en el segundo y tercero media querry
		}

		&.titleAction {
			text-align: center;
			padding-left: 10px; // cambiar en el segundo y tercero media querry
			flex: 2;
		}
	}
	@media only screen and (max-width: 1019px) {
		/* 	text-align: left; */
		font: normal normal bold 14px Ubuntu;
		letter-spacing: 0px;
		color: #005593;
		opacity: 1;
		padding-bottom: 10px;

		&.titlePicture {
			flex: 1;
			text-align: left;
		}

		&.titleName {
			flex: 2;
			text-align: left;
			padding-left: 5px;
		}

		&.titleEmail {
			flex: 2;
			text-align: left;
			padding-right: 60px;
		}

		&.titleAction {
			text-align: right;
			padding-left: 5px;
			flex: 1;
		}
	}
	@media only screen and (max-width: 468px) {
		/* 	text-align: left; */
		font: normal normal bold 14px Ubuntu;
		letter-spacing: 0px;
		color: #005593;
		opacity: 1;
		padding-bottom: 10px;

		&.titlePicture {
			flex: 1;
			text-align: left;
		}

		&.titleName {
			flex: 2;
			text-align: left;
			padding-left: 5px;
		}

		&.titleEmail {
			flex: 1;
			text-align: left;
			padding-right: 70px;
		}

		&.titleAction {
			text-align: right;
			padding-left: 5px;
			flex: 1;
		}
	}
`

export const StyledImg = styled.img`
	@media only screen and (min-width: 1020px) {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		margin-left: 0px;
		margin-right: 10px;
		flex: 1;
	}
	@media only screen and (max-width: 1019px) {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		margin-left: 0px;
		margin-right: 10px;
		flex: 1;
	}
	@media only screen and (max-width: 468px) {
		width: 35px;
		height: 35px;
		border-radius: 50%;
		margin-left: 0px;
		margin-right: 2px;
		flex: 1;
	}
`

export const StyledEmail = styled.div`
	@media only screen and (min-width: 1020px) {
		text-align: left;
		font: normal normal bold 14px Ubuntu;
		letter-spacing: 0;
		color: #00324c;
		opacity: 1;
		padding-right: 25px;
		flex: 4;
	}
	@media only screen and (max-width: 1019px) {
		text-align: left;
		font: normal normal bold 14px Ubuntu;
		letter-spacing: 0;
		color: #00324c;
		opacity: 1;
		padding-right: 25px;
		flex: 4;
	}
	@media only screen and (max-width: 468px) {
		text-align: left;
		font: normal normal bold 12px Ubuntu;
		letter-spacing: 0;
		color: #00324c;
		opacity: 1;
		padding-right: 3px;
		flex: 1;
	}
`

export const StyledText = styled.div`
@media only screen and (min-width: 1020px) {


text-align: left;
letter-spacing: 0px;
color: #005593;
font: normal normal bold 14px Ubuntu ;
padding-right: 10px;
padding-left: 10px;
flex: 2,
}
@media only screen and (max-width: 1019px) {
  
text-align: left;
letter-spacing: 0px;
color: #005593;
font: normal normal bold 14px Ubuntu ;
padding-right: 10px;
padding-left: 10px;
flex: 2,
}

@media only screen and (max-width: 468px) {

text-align: left;
letter-spacing: "0px;
color: #005593;
font: normal normal bold 12px Ubuntu ;
padding-right: 5px;
padding-left: 5px;
flex: 1,
}

`
