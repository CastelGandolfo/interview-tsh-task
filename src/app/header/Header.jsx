import React from 'react';
import { Navbar, Button } from 'react-bootstrap';

import Searchbox from './searchbox/Searchbox';
import Logo from '../common/logo/Logo';
import Checkboxes from './checkboxes/Checkboxes';

import {
  MainHeader,
  NavbarContainer,
  LogoContainer,
  SearchContainer,
  CheckboxesContainer,
  LoginContainer,
} from './Header.module.css';

const Header = () => {
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
          <Button variant='outline-primary' className='float-right'>
            Log In
          </Button>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
