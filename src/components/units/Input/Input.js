import React from 'react'
import PropTypes from 'prop-types'

// Style
import StyledInput from './styles'

const Input = ({
  type,
  value,
  onChange,
  disabled,
  onFocus,
  onBlur,
  placeholder,
  required,
  size,
  id,
  name,
  inputStyles,
  labelText,
  labelStyles,
  errorText,
  errorStyles,
  className,
  divStyles,
  error
}) => {
  return (
    <div style={{ ...divStyles }}>
      <label htmlFor={name} style={{ ...labelStyles }} id={id}>
        {labelText}
      </label>
      <StyledInput
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        required={required}
        size={size}
        id={id}
        name={name}
        style={{ ...inputStyles }}
        className={`${className}  ${error ? 'error' : ''}  ${disabled ? 'disabled' : ''}  `}
      />

      {error ? (
        <span dangerouslySetInnerHTML={{ __html: errorText }} style={{ ...errorStyles }} />
      ) : null}
    </div>
  )
}
Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func,
  disabled: PropTypes.string,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  size: PropTypes.number,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  inputStyles: PropTypes.object,
  labelStyles: PropTypes.object,
  errorText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  errorStyles: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  divStyles: PropTypes.object,
  error: PropTypes.bool
}

export default Input
