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

describe('Login form tests', () => {
  test('Displays form elements with correct labels', () => {
    const { getByText } = render(<LoginForm />)

    expect(getByText('Login')).toBeInTheDocument()
    expect(getByText('Password')).toBeInTheDocument()
    expect(getByText(/sign in/i)).toBeInTheDocument()
    expect(getByText(/forgot password/i)).toBeInTheDocument()
  }),
    test('type in login form', () => {
      const onClickHandler = jest.fn()

      const { getByText } = render(
        <LoginForm onClickHandler={onClickHandler}>test btn</LoginForm>
      )

      fireEvent.click(screen.getByText(/test btn/i))

      expect(onClickHandler).toHaveBeenCalledTimes(1)
    })
})
