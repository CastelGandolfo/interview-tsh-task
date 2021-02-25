import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { LoginInput, SubmitButton } from './LoginForm.module.css'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitClickHandler = () => {
    console.log('login process')
  }

  return (
    <Form onSubmit={onSubmitClickHandler} style={{ marginTop: '20vh' }}>
      <h1 style={{ fontSize: '30px' }} className='mb-3'>
        Login
      </h1>
      <Form.Group controlId='username'>
        <Form.Label>Username</Form.Label>
        <Form.Control
          size='lg'
          className={LoginInput}
          type='text'
          placeholder='Enter username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Form.Group controlId='password'>
        <Form.Label className={LoginInput}>Password</Form.Label>
        <Form.Control
          size='lg'
          type='password'
          placeholder='Enter password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Button type='submit' variant='primary' block className={SubmitButton}>
        Sign In
      </Button>
      <a href='#!' className='text-secondary'>
        Forgot password?
      </a>
    </Form>
  )
}

export default LoginForm
