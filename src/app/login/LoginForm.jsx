import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitClickHandler = () => {
    console.log('login process');
  };

  return (
    <Form onSubmit={onSubmitClickHandler}>
      <h1>Sign In</h1>
      <Form.Group controlId='username'>
        <Form.Label className='mb-0'>Username</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Form.Group controlId='password'>
        <Form.Label className='mb-0'>Password</Form.Label>
        <Form.Control
          type='password'
          placeholder='Enter password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Button type='submit' variant='primary' block>
        Sign In
      </Button>
    </Form>
  );
};

export default LoginForm;
