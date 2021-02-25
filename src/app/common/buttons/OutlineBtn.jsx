import React from 'react'
import { Button } from 'react-bootstrap'
import { ButtonOutline } from './OutlineBtn.module.css'

const OutlineBtn = ({ children, block, disabled }) => {
  return (
    <Button
      variant='outline'
      block={block}
      disabled={disabled}
      className={ButtonOutline}
    >
      {children}
    </Button>
  )
}

export default OutlineBtn
