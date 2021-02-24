import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import BasicModal from '../../common/modal/BasicModal'
import { closeProductDetails } from '../../actions/productActions'
import { ModalSize, ImageContainer, CardInfo } from './ProductModal.module.css'

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
        <img
          src={product.image}
          className=' img-responsive'
          alt='Product image'
        ></img>
      </div>

      <div className={CardInfo}>
        <div>
          <div className='title'>{product.name}</div>
          <div className='description'>{product.description}</div>
        </div>
      </div>
    </BasicModal>
  )
}

export default ProductModal
