import React from 'react'
import { useSelector } from 'react-redux'

import { Navbar } from 'react-bootstrap'
import OutlineBtn from '../common/buttons/OutlineBtn'
import { useHistory } from 'react-router-dom'

import Searchbox from './searchbox/Searchbox'
import Logo from '../common/logo/Logo'
import Checkboxes from './checkboxes/Checkboxes'
import UserAvatar from './userAvatar/UserAvatar'

import {
  MainHeader,
  NavbarContainer,
  LogoContainer,
  SearchContainer,
  CheckboxesContainer,
  LoginContainer,
} from './Header.module.css'

const Header = () => {
  let history = useHistory()

  const user = useSelector((state) => state.user)
  const { loggedUser } = user

  const redirectToLogin = () => {
    history.push(`/login`)
  }
  return (
    <header className={MainHeader}>
      <Navbar className={NavbarContainer}>
        <div className={LogoContainer}>
          <Logo />
        </div>
        <div className={SearchContainer}>
          <Searchbox />
        </div>
        <div className={CheckboxesContainer}>
          <Checkboxes />
        </div>
        <div className={LoginContainer}>
          {loggedUser ? (
            <UserAvatar />
          ) : (
            <OutlineBtn
              style={{ width: '88px' }}
              onClickHandler={() => redirectToLogin()}
            >
              Log In
            </OutlineBtn>
          )}
        </div>
      </Navbar>
    </header>
  )
}

export default Header
