import React from 'react'
import ReactStars from 'react-rating-stars-component'

const Rating = ({ value, color = '#F9A52B' }) => {
  return (
    <ReactStars
      count={5}
      value={value}
      size={24}
      isHalf={true}
      activeColor={color}
      color='#B1B5C9'
      edit={false}
    />
  )
}

export default Rating
