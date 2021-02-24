import React from 'react'
import { Modal, Container } from 'react-bootstrap'
import { ModalBackdrop, CloseIcon } from './BasicModal.module.css'
import { ImCross } from 'react-icons/im'

const BasicModal = ({ contentClassName, onHide, show, children }) => {
  return (
    <Container>
      <Modal
        backdropClassName={ModalBackdrop}
        contentClassName={contentClassName}
        centered
        onHide={onHide}
        show={show}
        // aria-labelledby='contained-modal-title-vcenter'
      >
        <ImCross className={CloseIcon} onClick={onHide} />
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </Container>
  )
}

export default BasicModal
