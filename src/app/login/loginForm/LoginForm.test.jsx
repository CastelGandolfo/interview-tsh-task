import React from 'react'

// import { render } from '../../../tests'
import {
  render,
  fireEvent,
  waitFor,
  screen,
  getByLabelText,
} from '@testing-library/react'

import LoginForm from './LoginForm'

test('Displays login form elements with correct labels', () => {
  const { getByText } = render(<LoginForm />)

  expect(getByText('Login')).toBeInTheDocument()
  expect(getByText('Password')).toBeInTheDocument()
  expect(getByText(/sign in/i)).toBeInTheDocument()
  expect(getByText(/forgot password/i)).toBeInTheDocument()
})

test('Allow to type in username and password field', () => {
  const { getByPlaceholderText } = render(<LoginForm />)

  const usernameInput = getByPlaceholderText(/enter username/i)
  const passwordInput = getByPlaceholderText(/enter password/i)

  fireEvent.change(usernameInput, { target: { value: 'User' } })
  fireEvent.change(passwordInput, { target: { value: '1234567' } })

  expect(usernameInput.value).toBe('User')
  expect(passwordInput.value).toBe('1234567')
})
