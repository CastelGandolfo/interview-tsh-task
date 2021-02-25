import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Navbar, Button, NavDropdown } from 'react-bootstrap'
import OutlineBtn from 'app/common/buttons/OutlineBtn'
import { useHistory, Link } from 'react-router-dom'

import Searchbox from './searchbox/Searchbox'
import Logo from '../common/logo/Logo'
import Checkboxes from './checkboxes/Checkboxes'

import {
  MainHeader,
  NavbarContainer,
  LogoContainer,
  SearchContainer,
  CheckboxesContainer,
  LoginContainer,
  LoginButton,
  Dropdown,
  Avatar,
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
        {loggedUser ? (
          <div className={LoginContainer}>
            <NavDropdown
              alignRight
              className={Dropdown}
              title={
                <img
                  className={Avatar}
                  src={loggedUser.avatar}
                  alt={loggedUser.username}
                />
              }
              id='basic-nav-dropdown'
            >
              <NavDropdown.Item href='#action/3.1'>Logout</NavDropdown.Item>
            </NavDropdown>
          </div>
        ) : (
          <div className={LoginContainer}>
            <OutlineBtn
              style={{ width: '88px' }}
              onClickHandler={() => redirectToLogin()}
            >
              Log In
            </OutlineBtn>
          </div>
        )}
      </Navbar>
    </header>
  )
}

export default Header
