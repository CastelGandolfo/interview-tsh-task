import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { render } from '../../../tests'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'

import Checkboxes from './Checkboxes'

const mockDispatch = jest.fn()
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}))

afterEach(() => {
  jest.clearAllMocks()
})

test('Displays checkboxes with labels Promo and Active', () => {
  const { getByText } = render(<Checkboxes />)

  expect(getByText(/Active/i)).toBeInTheDocument()
  expect(getByText(/Promo/i)).toBeInTheDocument()
})

test('On click active checkbox dispatch function to get new products one time and checked', () => {
  const { getByLabelText } = render(<Checkboxes />)

  const active = getByLabelText(/active/i)
  fireEvent.click(active)

  expect(mockDispatch).toHaveBeenCalledTimes(1)
  expect(active.checked).toEqual(true)
})

test('On click promo checkbox dispatch function to get new products one time and checked', () => {
  const { getByLabelText } = render(<Checkboxes />)

  const promo = getByLabelText(/promo/i)
  fireEvent.click(promo)

  expect(mockDispatch).toHaveBeenCalledTimes(1)
  expect(promo.checked).toEqual(true)
})
