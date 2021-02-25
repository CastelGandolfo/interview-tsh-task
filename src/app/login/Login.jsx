import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'

import { ImgHalfPage } from './Login.module.css'

import FormContainer from '../common/formContainer/FormContainer'
import LoginForm from './loginForm/LoginForm'
import Logo from '../common/logo/Logo'

export const Login = () => {
  return (
    <>
      <Row className='mr-0 justify-content-between'>
        <Col sm={12} lg={4} className='d-none d-lg-block'>
          <Image
            src='https://images.pexels.com/photos/5185041/pexels-photo-5185041.jpeg'
            className={ImgHalfPage}
          />
        </Col>
        <Col sm={12} lg={7}>
          <Container>
            <div style={{ margin: '52px 0' }}>
              <Logo />
            </div>

            <FormContainer>
              <LoginForm />
            </FormContainer>
          </Container>
        </Col>
      </Row>
    </>
  )
}
