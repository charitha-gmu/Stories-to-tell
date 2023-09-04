import React from 'react'
import { HTMLInputTypeAttribute } from 'react'

type TextInputProps = {
  placeholder?: string
  className?: string
  value: string | number
  maxLength?: number
  minLength?: number
  type?: HTMLInputTypeAttribute
  onChange: (str: string) => void
  onBlur?: (str: string) => void
  onClick?: () => void
}

const TextInput = (props: TextInputProps) => {
  const {
    placeholder,
    className,
    value,
    type = 'text',
    onChange,
    onBlur,
    onClick,
  } = props
  return (
    <input
      value={value}
      placeholder={placeholder}
      className={`input-style ${className || ''}`}
      maxLength={props?.maxLength}
      minLength={props?.minLength}
      type={type}
      onChange={event => onChange(event?.target?.value)}
      onBlur={event => onBlur && onBlur(event?.target?.value)}
      onClick={() => onClick && onClick()}
    />
  )
}

export default TextInput
