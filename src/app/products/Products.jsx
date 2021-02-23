import React from 'react'
import { useSelector } from 'react-redux'

import ProductsContainer from './productsContainer/ProductsContainer'
import Paginate from './paginate/Paginate'

export const Products = () => {
  return (
    <>
      <ProductsContainer />
      <Paginate />
    </>
  )
}
