import React from 'react'

// import PropTypes from "prop-types";

// Styles
// import StyledForm from "./styles";

// Components
import Body from 'components/layout/Body/Body'
import UserList from 'components/UserList/UserList'

const Home = () => {
  return (
    <Body title='Usuarios registrados' isLoggedIn>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <UserList />
      </div>
    </Body>
  )
}

export default Home
