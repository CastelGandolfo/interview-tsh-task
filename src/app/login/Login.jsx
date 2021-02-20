import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container, Image } from 'react-bootstrap';

import { AppRoute } from '../../routing/AppRoute.enum';

import { ImgHalfPage } from './Login.module.css';

import FormContainer from '../common/FormContainer';
import LoginForm from './LoginForm';

export const Login = () => {
  return (
    <>
      <Row className='mr-0'>
        <Col sm={12} lg={4} className='d-none d-lg-block'>
          <Image
            src='https://images.pexels.com/photos/5185041/pexels-photo-5185041.jpeg'
            className={ImgHalfPage}
          />
        </Col>
        <FormContainer>
          {/* <Link to={AppRoute.home}>Products page</Link> */}

          {/* {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />} */}
          <LoginForm />
        </FormContainer>
      </Row>
    </>
  );
};

{
  /* <h2>Loginx</h2>
          <form>
            <div>
              <label>
                username:
                <input name='username' />
              </label>
            </div>
            <div>
              <label>
                password:
                <input name='password' type='password' />
              </label>
            </div>
            <button type='submit'>submit</button>
          </form> */
}
