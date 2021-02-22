import React from 'react'
import Product from '../product/Product'
import { Container, Row, Col } from 'react-bootstrap'

const products = [
  {
    id: 1,
    name: 'Ergonomic Concrete Shirt',
    description: 'Deleniti aliquid consequatur.',
    rating: 5,
    image: 'https://picsum.photos/640/480?random=272',
    promo: false,
    active: true,
  },
  {
    id: 2,
    name: 'Incredible Wooden Sausages',
    description: 'Ratione voluptas cum est corrupti at autem temporibus quis.',
    rating: 3,
    image: 'https://picsum.photos/640/480?random=1670',
    promo: false,
    active: true,
  },
  {
    id: 3,
    name: 'Fantastic Concrete Mouse',
    description: 'Expedita deserunt odio hic.',
    rating: 4,
    image: 'https://picsum.photos/640/480?random=1482',
    promo: false,
    active: true,
  },
  {
    id: 4,
    name: 'Refined Rubber Chicken',
    description: 'Tempore deserunt voluptatibus.',
    rating: 2,
    image: 'https://picsum.photos/640/480?random=3010',
    promo: true,
    active: false,
  },
  {
    id: 5,
    name: 'Tasty Fresh Sausages',
    description: 'Voluptatibus dolor asperiores maiores.',
    rating: 5,
    image: 'https://picsum.photos/640/480?random=8451',
    promo: true,
    active: true,
  },
  {
    id: 6,
    name: 'Sleek Soft Fish',
    description: 'Deserunt provident nulla eum atque.',
    rating: 5,
    image: 'https://picsum.photos/640/480?random=4054',
    promo: true,
    active: true,
  },
  {
    id: 7,
    name: 'Awesome Wooden Tuna',
    description: 'Laborum error nulla qui est.',
    rating: 3,
    image: 'https://picsum.photos/640/480?random=9095',
    promo: true,
    active: false,
  },
  {
    id: 8,
    name: 'Unbranded Rubber Soap',
    description: 'Voluptate iure illo ipsa vero ut dicta deserunt nulla.',
    rating: 2,
    image: 'https://picsum.photos/640/480?random=7248',
    promo: false,
    active: true,
  },
]

const ProductsContainer = () => {
  return (
    <Container className='mt-4' style={{ maxWidth: '1300px' }}>
      <Row className='mr-0 justify-content-between'>
        {products.map((product) => (
          <Col xs={12} sm={6} md={6} lg={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ProductsContainer
