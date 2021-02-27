import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

// import { render } from '../../../tests'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'

import Searchbox from './Searchbox'

const mockDispatch = jest.fn()
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}))

afterEach(() => {
  jest.clearAllMocks()
})

jest.useFakeTimers()

test('Displays searchbox with Search placeholder after render Searchbox component', () => {
  const { getByPlaceholderText } = render(<Searchbox />)

  expect(getByPlaceholderText(/search/i)).toBeInTheDocument()
})

test('Allow to type in searchbox and check if after 500ms dispatch function', () => {
  const { getByPlaceholderText } = render(<Searchbox />)

  const searchbox = getByPlaceholderText(/search/i)

  fireEvent.change(searchbox, { target: { value: 'product' } })
  jest.advanceTimersByTime(500)
  jest.runAllTimers()
  expect(searchbox.value).toBe('product')
  expect(mockDispatch).toHaveBeenCalledTimes(1)
})

test('Type in searchbox and not dispatch search function immediately', () => {
  const { getByPlaceholderText } = render(<Searchbox />)

  const searchbox = getByPlaceholderText(/search/i)

  fireEvent.change(searchbox, { target: { value: 'product' } })
  expect(searchbox.value).toBe('product')
  expect(mockDispatch).toHaveBeenCalledTimes(0)
})
