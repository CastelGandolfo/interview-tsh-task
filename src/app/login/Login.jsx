import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'

import { ImgHalfPage, MainContainer, ImageContainer } from './Login.module.css'

import FormContainer from '../common/formContainer/FormContainer'
import LoginForm from './loginForm/LoginForm'
import Logo from '../common/logo/Logo'

export const Login = () => {
  return (
    <>
      <Row className={MainContainer}>
        <Col sm={12} lg={4} className={ImageContainer}>
          <Image
            src='https://images.pexels.com/photos/5185041/pexels-photo-5185041.jpeg'
            className={ImgHalfPage}
          />
        </Col>
        <Col sm={12} md={12} lg={8}>
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
