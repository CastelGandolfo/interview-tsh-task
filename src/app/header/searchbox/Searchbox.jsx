import React from 'react'
import { InputGroup, FormControl, Form, Button } from 'react-bootstrap'
import { AiOutlineSearch } from 'react-icons/ai'
import { Icon, SearchForm } from './Searchbox.module.css'
import { useDispatch, useSelector } from 'react-redux'

import { changeSearchText } from '../../actions/searchActions'

const Searchbox = () => {
  const dispatch = useDispatch()

  const changeSearch = (e) => {
    dispatch(changeSearchText(e.target.value))
  }
  return (
    <div className='d-flex'>
      <Form.Control
        id='inlineFormInput'
        placeholder='Search'
        onKeyUp={(e) => changeSearch(e)}
      />
      <AiOutlineSearch className={Icon} />
    </div>
  )
}

export default Searchbox
