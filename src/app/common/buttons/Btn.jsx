import React from 'react'
import { Button } from 'react-bootstrap'
import { ButtonFilled, ButtonOutline } from './Btn.module.css'

const Btn = ({
  children,
  block,
  disabled,
  onClickHandler,
  outline = false,
}) => {
  return (
    <Button
      block={block}
      disabled={disabled}
      className={outline ? ButtonOutline : ButtonFilled}
      onClick={onClickHandler}
    >
      {children}
    </Button>
  )
}

export default Btn
