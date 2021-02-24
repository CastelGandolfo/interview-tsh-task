import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { InputGroup, FormControl, Form, Button } from 'react-bootstrap'
import { AiOutlineSearch } from 'react-icons/ai'
import { Icon, SearchForm, SearchFormContainer } from './Searchbox.module.css'

import { changeSearchText } from '../../actions/searchActions'

import { DebounceInput } from 'react-debounce-input'

const Searchbox = () => {
  const dispatch = useDispatch()

  const changeSearch = (e) => {
    dispatch(changeSearchText(e.target.value))
  }
  return (
    <div className={SearchFormContainer}>
      <DebounceInput
        className={SearchForm}
        minLength={2}
        placeholder='Search'
        debounceTimeout={300}
        onChange={(e) => changeSearch(e)}
      />

      <AiOutlineSearch className={Icon} />
    </div>
  )
}

export default Searchbox
