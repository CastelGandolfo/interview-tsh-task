import React from 'react'
import { BsBag } from 'react-icons/bs'
import {
  CardContainer,
  BagIcon,
  TextPrimary,
  TextSecondary,
} from './EmptyCard.module.css'

const EmptyCard = () => {
  return (
    <div className={CardContainer}>
      <BsBag className={BagIcon} />
      <span className={TextPrimary}>Ooops... It's empty here</span>
      <span className={TextSecondary}>There are no products on the list</span>
    </div>
  )
}

export default EmptyCard
