import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

// import { render } from '../../../tests'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'

import Product from './Product'

const mockDispatch = jest.fn()
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}))

afterEach(() => {
  jest.clearAllMocks()
})

const product = {
  id: 1,
  name: 'Ergonomic Concrete Shirt',
  description: 'Deleniti aliquid consequatur.',
  rating: 5,
  image: 'https://picsum.photos/640/480?random=272',
  promo: false,
  active: true,
}

const promoProduct = {
  id: 1,
  name: 'Ergonomic Concrete Shirt',
  description: 'Deleniti aliquid consequatur.',
  rating: 5,
  image: 'https://picsum.photos/640/480?random=272',
  promo: true,
  active: true,
}

const unavailableProduct = {
  id: 1,
  name: 'Ergonomic Concrete Shirt',
  description: 'Deleniti aliquid consequatur.',
  rating: 5,
  image: 'https://picsum.photos/640/480?random=272',
  promo: false,
  active: false,
}

test('Display product card with name and description', () => {
  const { getByText, queryByText } = render(<Product product={product} />)

  expect(getByText(product.name)).toBeInTheDocument()
  expect(getByText(product.description)).toBeInTheDocument()
  expect(queryByText(/promo/i)).not.toBeInTheDocument()

  expect(getByText(/show details/i)).toBeInTheDocument()
})

test('Display promo label on product with promotion', () => {
  const { getByText, queryByText } = render(<Product product={promoProduct} />)

  expect(getByText(product.name)).toBeInTheDocument()
  expect(getByText(product.description)).toBeInTheDocument()
  expect(queryByText(/promo/i)).toBeInTheDocument()
  expect(getByText(/show details/i)).toBeInTheDocument()
})

test('Display unavailable product', () => {
  const { getByText, queryByText } = render(
    <Product product={unavailableProduct} />
  )

  expect(getByText(product.name)).toBeInTheDocument()
  expect(getByText(product.description)).toBeInTheDocument()
  expect(getByText(/unavailable/i)).toBeInTheDocument()
  expect(queryByText(/promo/i)).not.toBeInTheDocument()
  expect(queryByText(/show details/i)).not.toBeInTheDocument()
})

test('Dispatch show details action after click button', () => {
  const { getByText } = render(<Product product={product} />)

  const button = getByText(/show details/i)
  fireEvent.click(button)

  expect(mockDispatch).toHaveBeenCalledTimes(1)
})

test('Do not dispatch show details action after click button on unavailable product ', () => {
  const { getByText } = render(<Product product={unavailableProduct} />)

  const button = getByText(/unavailable/i)
  fireEvent.click(button)

  expect(mockDispatch).toHaveBeenCalledTimes(0)
})
