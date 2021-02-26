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

describe('Searchbox tests', () => {
  test('Displays searchbox with Search placeholder after render Searchbox component', () => {
    const { getByPlaceholderText } = render(<Searchbox />)

    expect(getByPlaceholderText(/search/i)).toBeInTheDocument()
  })

  test('Allow to type in searchbox', async () => {
    const { getByPlaceholderText } = render(<Searchbox />)

    const searchbox = getByPlaceholderText(/search/i)

    fireEvent.change(searchbox, { target: { value: '23' } })

    // await waitFor(() => expect(mockDispatch).toHaveBeenCalledTimes(1))
    expect(searchbox.value).toBe('23')
  })
})

describe('Check dispatch', () => {
  test('Dispatch onChange function one time after change value in searchbox', async () => {
    const { getByPlaceholderText } = render(<Searchbox />)

    const searchbox = getByPlaceholderText(/search/i)

    fireEvent.change(searchbox, { target: { value: 'product' } })

    await waitFor(() => expect(mockDispatch).toHaveBeenCalledTimes(1))
  })
})
