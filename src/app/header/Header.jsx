import React from 'react';
import { Navbar, Button } from 'react-bootstrap';

import {
  MainHeader,
  NavbarContainer,
  LogoContainer,
  SearchContainer,
  ActiveContainer,
  PromoContainer,
  LoginContainer,
} from './Header.module.css';

const Header = () => {
  return (
    <header className={MainHeader}>
      <Navbar className={NavbarContainer}>
        <div className={LogoContainer}>1</div>
        <div className={SearchContainer}>2</div>
        <div className={ActiveContainer}>3</div>
        <div className={PromoContainer}>4</div>
        <div className={LoginContainer}>
          <Button variant='outline-primary'>Log In</Button>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
