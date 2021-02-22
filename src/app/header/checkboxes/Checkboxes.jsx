import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {
  changePromoCheckbox,
  changeActiveCheckbox,
} from '../../actions/searchActions'

const Checkboxes = () => {
  const dispatch = useDispatch()

  const [active, isActive] = useState(false)
  const [promo, isPromo] = useState(false)

  const changeActiveCheckboxHandler = (e) => {
    isActive(e.target.checked)
    dispatch(changeActiveCheckbox())
  }

  const changePromoCheckboxHandler = (e) => {
    isPromo(e.target.checked)
    dispatch(changePromoCheckbox())
  }

  return (
    <div>
      <Form.Check
        id={`custom-inline-checkbox-1`}
        custom
        inline
        label='Active'
        type='checkbox'
        checked={active}
        onChange={(e) => changeActiveCheckboxHandler(e)}
      />
      <Form.Check
        id={`custom-inline-checkbox-2`}
        custom
        inline
        label='Promo'
        type='checkbox'
        checked={promo}
        onChange={(e) => changePromoCheckboxHandler(e)}
      />
    </div>
  )
}

export default Checkboxes
