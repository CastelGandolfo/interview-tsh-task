import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Loader from '../../common/loader/Loader'
import Product from '../product/Product'

import { Container, Row, Col } from 'react-bootstrap'

import { listProducts } from '../../actions/productActions'

const ProductsContainer = () => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { products, loading } = productList
  const searchParameters = useSelector((state) => state.searchParameters)
  const { text, promo, active, page } = searchParameters

  useEffect(() => {
    dispatch(listProducts(text, promo, active, page))
  }, [dispatch, text, promo, active, page])

  if (loading) {
    return <Loader />
  }

  return (
    <Container className='mt-4' style={{ maxWidth: '1300px' }}>
      <Row className='mr-0 justify-content-between'>
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
