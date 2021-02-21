import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import {
  ImageContainer,
  ProductCard,
  CardInfo,
  PromoLabel,
  UnavailableCover,
} from './Product.module.css';

import Rating from '../rating/Rating';

const Product = ({ product }) => {
  return (
    <Card className={ProductCard}>
      <div className={ImageContainer}>
        <div className={UnavailableCover}></div>
        <div className={PromoLabel}>Promo</div>
        <img
          src={product.image}
          className='img-fluid img-responsive'
          alt='Product image'
        ></img>
      </div>

      <Card.Body>
        <div className={CardInfo}>
          <div>
            <div className='title'>{product.name}</div>
            <div className='description'>{product.description}</div>
          </div>
          <div>
            <Rating value={product.rating} />
            <Button variant='primary' block className='mt-2'>
              Show details
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Product;
