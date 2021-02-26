import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Loader from '../../common/loader/Loader'
import Product from '../product/Product'
import EmptyCard from '../../common/emptyCard/EmptyCard'

import { Container, Row, Col } from 'react-bootstrap'

import { listProducts } from '../../actions/productActions'
import { changeScreenWidth } from '../../actions/searchActions'

const ProductsContainer = () => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { products, loading } = productList
  const searchParameters = useSelector((state) => state.searchParameters)
  const { text, promo, active, page, size } = searchParameters

  useEffect(() => {
    dispatch(listProducts(text, promo, active, page, size))
  }, [dispatch, text, promo, active, page, size])

  useEffect(() => {
    dispatch(changeScreenWidth(window.innerWidth))
  }, [])

  if (loading) {
    return <Loader />
  } else if (products.length === 0) {
    return (
      <Container>
        <EmptyCard />
      </Container>
    )
  }

  return (
    <Container className='mt-4' style={{ maxWidth: '1300px' }}>
      <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
        {products.map((product, index) => (
          <Col xs={12} sm={6} md={6} lg={3} key={index}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ProductsContainer
