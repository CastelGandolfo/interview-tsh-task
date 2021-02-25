import React from 'react'
import { Button } from 'react-bootstrap'
import { ButtonFilled } from './Btn.module.css'

const Btn = ({ children, block, disabled }) => {
  return (
    <Button block={block} disabled={disabled} className={ButtonFilled}>
      {children}
    </Button>
  )
}

export default Btn
