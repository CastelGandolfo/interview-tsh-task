import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ProductsContainer from './productsContainer/ProductsContainer'
import Paginate from './paginate/Paginate'

import { changeScreenWidth } from '../actions/searchActions'

export const Products = () => {
  const dispatch = useDispatch()

  const changeScreenWidthHandler = () => {
    dispatch(changeScreenWidth(window.innerWidth))
  }

  useEffect(() => {
    changeScreenWidthHandler()
    window.addEventListener('resize', changeScreenWidthHandler)
    return () => window.removeEventListener('resize', changeScreenWidthHandler)
  }, [])
  return (
    <>
      <ProductsContainer />
      <Paginate />
    </>
  )
}
