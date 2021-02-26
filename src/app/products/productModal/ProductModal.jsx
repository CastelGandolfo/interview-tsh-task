import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import BasicModal from '../../common/modal/BasicModal'
// import BasicModal from 'app/common/modal/BasicModal'
import { closeProductDetails } from '../../actions/productActions'
import {
  ModalSize,
  ImageContainer,
  CardInfo,
  ProductTitle,
  ProductDescription,
} from './ProductModal.module.css'

const ProductModal = () => {
  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { product, showDetails } = productDetails

  if (!product) {
    return null
  }
  return (
    <BasicModal
      show={showDetails}
      onHide={() => dispatch(closeProductDetails())}
      contentClassName={ModalSize}
    >
      <div className={ImageContainer}>
        <img src={product.image} alt='Product'></img>
      </div>

      <div className={CardInfo}>
        <div>
          <div className={ProductTitle}>{product.name}</div>
          <div className={ProductDescription}>{product.description}</div>
        </div>
      </div>
    </BasicModal>
  )
}

export default ProductModal
