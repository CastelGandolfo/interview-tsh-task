import React from 'react'
import { Button } from 'react-bootstrap'
import { ButtonOutline } from './OutlineBtn.module.css'

const OutlineBtn = ({ children, block, disabled, onClickHandler }) => {
  return (
    <Button
      block={block}
      disabled={disabled}
      className={ButtonOutline}
      onClick={onClickHandler}
    >
      {children}
    </Button>
  )
}

export default OutlineBtn
