import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Header = ({ children }) => {
  return (
    <header>
      <Navbar>
        <Container>{children}</Container>
      </Navbar>
    </header>
  );
};

export default Header;
