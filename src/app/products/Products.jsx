import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../routing/AppRoute.enum';
import Header from '../header/Header';
import ProductsContainer from './productsContainer/ProductsContainer';

export const Products = () => {
  return (
    <>
      <Header />
      <ProductsContainer />
    </>
  );
};
