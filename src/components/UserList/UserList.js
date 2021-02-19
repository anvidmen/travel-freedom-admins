import React from 'react'
import PropTypes from 'prop-types'
import Body from 'components/layout/Body/Body'

// Styles
import {
  StyledGrandfather,
  StyledFather,
  Title,
  StyledImg,
  StyledEmail,
  StyledText,
  StyledMainDiv
} from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUserAltSlash,
  faUserCheck,
  faUserClock,
  faEye,
  faTrash
} from '@fortawesome/free-solid-svg-icons'

import Colors from 'theme/Colors'

const profilePicSrc =
	'https://upload.wikimedia.org/wikipedia/commons/9/9e/Lion_%28Panthera_leo%29_male_6y.jpg'

const UserList = () => {
  return (
    <Body title='Usuarios registrados' isLoggedIn>
      <StyledMainDiv>
        <StyledGrandfather>
          <StyledFather className='topFather'>
            <Title className='titlePicture'>Foto</Title>
            <Title className='titleName'>Nombre</Title>
            <Title className='titleEmail'>Email</Title>
            <Title className='titleAction'>Acciones</Title>
          </StyledFather>

          <StyledFather className='middleFather'>
            <StyledImg src={profilePicSrc} alt='profile' />
            <StyledText>itacademy</StyledText>
            <StyledEmail>itacademy@mail.com</StyledEmail>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                paddingLeft: '10px',
                flex: 2
              }}
            >
              <FontAwesomeIcon
                icon={faUserClock}
                style={{ color: `${Colors.darkerGreen}` }}
              />
              <FontAwesomeIcon icon={faEye} style={{ color: `${Colors.ulColor}` }} />
              <FontAwesomeIcon icon={faTrash} style={{ color: `${Colors.redColor}` }} />
            </div>
          </StyledFather>

          <StyledFather className='middleFather'>
            <StyledImg src={profilePicSrc} alt='profile' />
            <StyledText>itacademy</StyledText>
            <StyledEmail>itacademy@mail.com</StyledEmail>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                paddingLeft: '10px',
                flex: 2
              }}
            >
              <FontAwesomeIcon
                icon={faUserCheck}
                style={{ color: `${Colors.ulColor}` }}
              />
              <FontAwesomeIcon icon={faEye} style={{ color: `${Colors.ulColor}` }} />
              <FontAwesomeIcon icon={faTrash} style={{ color: `${Colors.redColor}` }} />
            </div>
          </StyledFather>

          <StyledFather className='bottomFather'>
            <StyledImg src={profilePicSrc} alt='profile' />
            <StyledText>itacademy</StyledText>
            <StyledEmail>itacademy@mail.com</StyledEmail>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                paddingLeft: '10px',
                flex: 2
              }}
            >
              <FontAwesomeIcon
                icon={faUserAltSlash}
                style={{ color: `${Colors.redColor}` }}
              />
              <FontAwesomeIcon icon={faEye} style={{ color: `${Colors.ulColor}` }} />
              <FontAwesomeIcon icon={faTrash} style={{ color: `${Colors.redColor}` }} />
            </div>
          </StyledFather>
        </StyledGrandfather>
      </StyledMainDiv>
    </Body>
  )

  UserList.propTypes = {
    iconStyles: PropTypes.object
  }
}

export default UserList
