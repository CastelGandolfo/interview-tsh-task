import React from 'react'

// import { render } from '../../../tests'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'

import Btn from './Btn'

describe('Basic button functions tests', () => {
  test('Displays btn with text', () => {
    const { getByText } = render(<Btn>test btn</Btn>)

    expect(getByText(/test btn/i)).toBeInTheDocument()
  })
  test('check if button run onClick function', () => {
    const onClickHandler = jest.fn()

    const { getByText } = render(
      <Btn onClickHandler={onClickHandler}>test btn</Btn>
    )

    fireEvent.click(screen.getByText(/test btn/i))

    expect(onClickHandler).toHaveBeenCalledTimes(1)
  })
})
