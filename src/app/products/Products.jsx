import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Header from '../header/Header'
import ProductsContainer from './productsContainer/ProductsContainer'
import Paginate from './paginate/Paginate'

import ProductModal from './productModal/ProductModal'

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
      <ProductModal />
      <Header />
      <ProductsContainer />
      <Paginate />
    </>
  )
}
