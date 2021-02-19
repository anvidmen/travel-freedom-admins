import React from 'react'
import Header from 'components/layout/Header/Header'
import Footer from 'components/layout/Footer/Footer'

// Style
import StyledBody from './styles'

const Body = ({ children, title, isLoggedIn }) => {
  return (
    <>
      <Header title={title} isLoggedIn={isLoggedIn} />
      <StyledBody>{children}</StyledBody>
      <Footer />
    </>
  )
}

export default Body
