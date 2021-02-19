import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link, Redirect } from 'react-router-dom'

// Data
import USERS from 'data/data'

// Styles
import { StyledForm, StyledRegistration } from './styles'
import Colors from 'theme/Colors'

// Components
import AsyncButton from 'components/units/AsyncButton/AsyncButton'
import Input from 'components/units/Input/Input'
import Body from 'components/layout/Body/Body'

const authenticateUser = (email, password) => {
  let authenticated = false
  for (let i = 0; i < USERS.length; i++) {
    const user = USERS[i]
    if (user.email === email && user.password === password) {
      authenticated = true

      localStorage.setItem('TOKEN', 'travelfreedom')
    }
  }
  if (authenticated) {
    localStorage.setItem('travelfreedom', 'ok')
    return true
  } else {
    return false
  }
}

const Login = ({ id, name, className, method, action, formStyle }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  // input
  const [isEmailError, setIsEmailError] = useState(false)
  const [isPasswordError, setIsPasswordError] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const errorStyles = {
    postion: 'absolute',
    textAlign: 'justify',
    fontWeight: 'bold',
    font: 'italic normal normal 12px',
    letterSpacing: 0,
    color: `${Colors.darkRedColor}`,
    opacity: 1,
    padding: 5,
    marginBottom: 5,
    lineHeight: '1rem'
  }

  const validateEmail = (email) => {
    const regexEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    return !!regexEmail.test(email)
  }

  const validatePassword = (password) => {
    const regexPassword = /[a-z]\d|\d[a-z]/i
    return regexPassword.test(password) && password.length > 3
  }

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value)
      const val = e.target.value
      const isEmail = validateEmail(val)
      setIsEmailError(!isEmail)
    } else if (e.target.name === 'password') {
      setPassword(e.target.value)
      const password = e.target.value
      const isPassword = validatePassword(password)
      setIsPasswordError(!isPassword)
    }
  }

  // button state
  const [loadingState, setloadingState] = useState(false)
  const [disabledState, setdisabledState] = useState(false)
  const [animatedState, setanimatedState] = useState(false)

  const handleClick = () => {
    console.log('clicked')
  }

  // submit method

  const handleSubmit = async (e) => {
    e.preventDefault()
    setloadingState(true)
    setdisabledState(true)
    setanimatedState(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsLoggedIn(authenticateUser(email, password))
    } catch (err) {
      console.log(err)
    }
    setloadingState(false)
    setdisabledState(false)
    setanimatedState(false)
  }

  return (
    <>
      {isLoggedIn ? <Redirect to='/' /> : null}
      <Body title='Acceso Admins' isLoggedIn={isLoggedIn}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <StyledForm
            id={id}
            name={name}
            className={className}
            method={method}
            onSubmit={(e) => handleSubmit(e)}
            action={action}
            formStyle={formStyle}
            autocomplete='off'
          >
            <Input
              type='email'
              name='email'
              value={email}
              placeholder='Introduce tu email'
              onChange={handleChange}
              size={20}
              inputStyles={{
                padding: 10,
                marginBottom: 5,
                marginTop: 5
              }}
              error={isEmailError}
              errorText='Introduce una dirección de correo electrónico válido.'
              errorStyles={errorStyles}
              className='success'
              divStyles={{ display: 'flex', flexDirection: 'column' }}
              passwordError={isPasswordError}
            />
            <Input
              type='password'
              name='password'
              value={password}
              onChange={handleChange}
              placeholder='Introduce tu contraseña'
              size={20}
              inputStyles={{ padding: 10, marginBottom: 5, marginTop: 5 }}
              error={isPasswordError}
              errorText='La contraseña debe tener al menos 4 caracteres e incluir al menos una letra y un número.'
              errorStyles={errorStyles}
              className='success'
              divStyles={{ display: 'flex', flexDirection: 'column' }}
            />
            <AsyncButton
              text='Acceder'
              loadingText='Accediendo'
              iconPosition='left'
              type='submit'
              className='primary'
              isLoading={loadingState}
              animated={animatedState}
              disabled={disabledState}
              onClick={handleClick}
              buttonStyles={{ marginTop: 10, marginBottom: 5 }}
            />
            <Link
              to='/registration'
              className='link message'
              style={{ textDecoration: 'none' }}
            >
              {' '}
              <StyledRegistration>¿No estás registrado?</StyledRegistration>
            </Link>
          </StyledForm>
        </div>
      </Body>
    </>
  )
}

Login.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  method: PropTypes.string,
  action: PropTypes.string,
  formStyle: PropTypes.object,
  onSubmit: PropTypes.func
}

export default Login
