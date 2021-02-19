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

const Registration = ({ id, name, className, method, action, formStyle }) => {
  const [isRegistered, setIsRegistered] = useState(false)
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

  // button
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
      if (!localStorage.getItem('users')) {
        USERS.push({ email: email, password: password })
        localStorage.setItem('users', JSON.stringify(USERS))
      } else {
        const currentUsers = JSON.parse(localStorage.getItem('users'))
        currentUsers.push({ email: email, password: password })
        localStorage.setItem('users', JSON.stringify(currentUsers))
      }

      await new Promise((resolve) => setTimeout(resolve, 2000))
      localStorage.setItem('travelfreedom', 'ok')
      setIsRegistered(true)
    } catch (err) {
      console.log(err)
    }

    setloadingState(false)
    setdisabledState(false)
    setanimatedState(false)
  }

  return (
    <>
      {isRegistered ? <Redirect to='/login' /> : null}
      <Body title='Registro Admins' isLoggedIn={false}>
        <div style={{ display: 'flex', justifyContent: 'center', minHeight: '65vh' }}>
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
              error={isEmailError}
              errorText='<p>Introduce una dirección de correo electrónico válido.</p>'
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
              placeholder='Introduce contraseña'
              size={20}
              inputStyles={{ margin: '1rem 0' }}
              error={isPasswordError}
              errorText='<p>La contraseña debe tener al menos 4 caracteres e incluir al menos una letra y un número.</p>'
              errorStyles={errorStyles}
              className='success'
              divStyles={{ display: 'flex', flexDirection: 'column' }}
            />
            <AsyncButton
              text='Registro'
              loadingText='Registrando'
              iconPosition='left'
              type='submit'
              className='primary'
              isLoading={loadingState}
              animated={animatedState}
              disabled={disabledState}
              onClick={handleClick}
              buttonStyles={{ margin: '1rem 0' }}
            />

            <Link to='/login' className='link message' style={{ textDecoration: 'none' }}>
              {' '}
              <StyledRegistration>¿Ya estás registrado?</StyledRegistration>
            </Link>
          </StyledForm>
        </div>
      </Body>
    </>
  )
}

Registration.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  method: PropTypes.string,
  action: PropTypes.string,
  formStyle: PropTypes.object,
  onSubmit: PropTypes.func
}

export default Registration
