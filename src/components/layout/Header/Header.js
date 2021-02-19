import React, { useState } from 'react'

// Styles
import {
  StyledTitle,
  StyledHeaderTop,
  StyledImg,
  StyledDropdown,
  StyledLi,
  StyledButton,
  StyledProfile,
  StyledLogo,
  StyledText,
  StyledUl
} from './styles'
const profilePicSrc =
	'https://upload.wikimedia.org/wikipedia/commons/9/9e/Lion_%28Panthera_leo%29_male_6y.jpg'

//
const Header = ({ isLoggedIn, title }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false)

  const handleClick = () => {
    setDropdownVisible(!dropdownVisible)
  }
  document.addEventListener('mousedown', (e) => {
    const arr = [...document.getElementsByClassName('dropdown')]
    if (!arr.includes(e.target)) {
      setDropdownVisible(false)
    }
  })

  if (isLoggedIn) {
    return (
      <header>
        <StyledHeaderTop className='logged'>
          <StyledLogo>
            <p>Logo Empresa</p>
          </StyledLogo>
          <StyledProfile>
            <StyledButton onClick={handleClick} className='dropdown'>
              <StyledImg src={profilePicSrc} alt='profile' className='dropdown' />
              <StyledText className='dropdown'>Mi perfil</StyledText>
            </StyledButton>

            {dropdownVisible ? (
              <StyledDropdown>
                <StyledUl>
                  <StyledLi className='dropdown'>
                    <a href='/'>Editar perfil</a>
                  </StyledLi>
                  <StyledLi className='dropdown' style={{ color: 'red' }}>
                    <a href='/'>Cerrar sesión</a>
                  </StyledLi>
                </StyledUl>
              </StyledDropdown>
            ) : null}
          </StyledProfile>
        </StyledHeaderTop>
        <StyledTitle className='logged'>
          <h1>{title}</h1>
        </StyledTitle>
      </header>
    )
  } else {
    return (
      <header>
        <StyledHeaderTop>Logo Empresa</StyledHeaderTop>
        <StyledTitle>
          <h1>{title}</h1>
        </StyledTitle>
      </header>
    )
  }
}

export default Header
