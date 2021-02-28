import React from 'react'
import { useSelector } from 'react-redux'

import { Navbar } from 'react-bootstrap'
import Btn from '../common/btn/Btn'
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
            <Btn outline onClickHandler={() => redirectToLogin()}>
              Log In
            </Btn>
          )}
        </div>
      </Navbar>
    </header>
  )
}

export default Header
