import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FormContainer = ({ children }) => {
  return (
    <Col sm={12} md={12} lg={8} className='justify-content-md-center'>
      {children}
    </Col>
  );
};

export default FormContainer;
