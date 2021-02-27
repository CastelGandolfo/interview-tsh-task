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
