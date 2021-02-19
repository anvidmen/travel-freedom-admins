import React from 'react'

// Styles
import { StyledList, StyledRow, StyledIcons, StyledItem, StyledImg } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUserAltSlash,
  faUserCheck,
  faUserClock,
  faEye,
  faTrash
} from '@fortawesome/free-solid-svg-icons'

const imgSrc =
	'https://media.istockphoto.com/vectors/profile-placeholder-image-gray-silhouette-no-photo-vector-id1016744034?b=1&k=6&m=1016744034&s=612x612&w=0&h=dbicqM9p31ex5Lm-FpsdOjHkPZM_6Lmkb02qJO9SY5E='

const UserList = () => {
  return (
    <StyledList>
      <StyledRow>
        <StyledItem>Foto</StyledItem>
        <StyledItem>Nombre</StyledItem>
        <StyledItem style={{ flex: 2 }}>Email</StyledItem>
        <StyledItem style={{ flex: 3, textAlign: 'center' }}>Acciones</StyledItem>
      </StyledRow>

      <StyledRow>
        <StyledItem>
          <StyledImg src={imgSrc} alt='profile' />
        </StyledItem>
        <StyledItem>itacademy</StyledItem>
        <StyledItem style={{ flex: 2 }}>itacademy@mail.com</StyledItem>
        <StyledIcons>
          <div>
            <FontAwesomeIcon icon={faUserCheck} />
          </div>
          <div>
            <FontAwesomeIcon icon={faEye} />
          </div>
          <div>
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </StyledIcons>
      </StyledRow>
    </StyledList>
  )
}

export default UserList
