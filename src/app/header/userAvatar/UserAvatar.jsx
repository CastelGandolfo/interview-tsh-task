import React from 'react'
import { NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar, Dropdown } from './UserAvatar.module.css'

import { logout } from '../../actions/userActions'

const UserAvatar = () => {
  const dispatch = useDispatch()

  const user = useSelector((state) => state.user)
  const { loggedUser } = user

  return (
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
      <NavDropdown.Item onClick={() => dispatch(logout())}>
        Logout
      </NavDropdown.Item>
    </NavDropdown>
  )
}

export default UserAvatar
