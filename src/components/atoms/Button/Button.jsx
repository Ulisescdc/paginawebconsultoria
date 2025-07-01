import React from 'react'
import "./Button.css"

const Button = ({children, onClick, variant  ="primary"}) => {
  return (
    <button onClick={onClick} className={variant}>{children}</button>
  )
}

export default Button