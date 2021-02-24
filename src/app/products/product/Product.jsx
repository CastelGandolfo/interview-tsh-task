import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Card, Button } from 'react-bootstrap'
import {
  ImageContainer,
  ProductCard,
  CardInfo,
  PromoLabel,
  UnavailableCover,
} from './Product.module.css'

import { showProductDetails } from '../../actions/productActions'

import Rating from '../../common/rating/Rating'

const Product = ({ product }) => {
  const dispatch = useDispatch()

  return (
    <Card className={ProductCard}>
      <div className={ImageContainer}>
        {!product.active && <div className={UnavailableCover}></div>}
        {product.promo && <div className={PromoLabel}>Promo</div>}

        <img
          src={product.image}
          className='img-fluid img-responsive'
          alt='Product image'
        ></img>
      </div>

      <Card.Body style={{ padding: '5px 16px 24px 16px' }}>
        <div className={CardInfo}>
          <div>
            <div className='title'>{product.name}</div>
            <div className='description'>{product.description}</div>
          </div>
          <div>
            <Rating value={product.rating} />
            {product.active ? (
              <Button
                variant='primary'
                block
                className='mt-2'
                onClick={() => dispatch(showProductDetails(product))}
              >
                Show details
              </Button>
            ) : (
              <Button
                disabled
                block
                className='mt-2'
                style={{
                  background: '#9194a5',
                  borderColor: '#9194a5',
                  fontSize: '14px',
                }}
              >
                Unavailable
              </Button>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Product
