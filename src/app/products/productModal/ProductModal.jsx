import React from 'react'
import BasicModal from '../../common/modal/BasicModal'
import { ModalSize, ImageContainer, CardInfo } from './ProductModal.module.css'

const ProductModal = () => {
  return (
    <BasicModal
      show={true}
      onHide={console.log(10)}
      contentClassName={ModalSize}
    >
      <div className={ImageContainer}>
        <img
          src='https://picsum.photos/640/480?random=272'
          className=' img-responsive'
          alt='Product image'
        ></img>
      </div>

      <div className={CardInfo}>
        <div>
          <div className='title'>Ergonomic Concrete Shirt</div>
          <div className='description'>Deleniti aliquid consequatur.</div>
        </div>
      </div>
    </BasicModal>
  )
}

export default ProductModal
