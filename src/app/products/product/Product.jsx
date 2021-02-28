import React from 'react'
import { useDispatch } from 'react-redux'

import { Card } from 'react-bootstrap'
import Btn from '../../common/btn/Btn'
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

import Rating from '../../common/rating/Rating'
// import Rating from '../../common/rating/Rating'

const Product = ({ product }) => {
  const dispatch = useDispatch()

  return (
    <Card className={ProductCard}>
      <div className={ImageContainer}>
        {!product.active && <div className={UnavailableCover}></div>}
        {product.promo && <div className={PromoLabel}>Promo</div>}

        <img src={product.image} alt='Product'></img>
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
                onClickHandler={() => dispatch(showProductDetails(product))}
              >
                Show details
              </Btn>
            ) : (
              <Btn disabled block>
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
