import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Card, Button } from 'react-bootstrap'
import Btn from 'app/common/buttons/Btn'
import {
  ImageContainer,
  ProductCard,
  ProductTitle,
  ProductDescription,
  CardInfo,
  PromoLabel,
  UnavailableCover,
} from './Product.module.css'

import { showProductDetails } from '../../actions/productActions'

import Rating from 'app/common/rating/Rating'
// import Rating from '../../common/rating/Rating'

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
            <div className={ProductTitle}>{product.name}</div>
            <div className={ProductDescription}>{product.description}</div>
          </div>
          <div>
            <Rating value={product.rating} />
            {product.active ? (
              <Btn
                block
                className='mt-2'
                onClickHandler={() => dispatch(showProductDetails(product))}
              >
                Show details
              </Btn>
            ) : (
              <Btn disabled block className='mt-2'>
                Unavailable
              </Btn>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Product
