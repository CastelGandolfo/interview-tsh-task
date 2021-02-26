import React from 'react'
import ReactStars from 'react-rating-stars-component'

const Rating = ({ value, color = '#F9A52B' }) => {
  return (
    <ReactStars
      count={5}
      value={value}
      size={24}
      // isHalf={true}
      activeColor={color}
      color='#B1B5C9'
      edit={false}
      emptyIcon={
        <i
          className='far fa-star'
          style={{
            fontSize: '13px',
            paddingRight: '10px',
            marginBottom: '10px',
          }}
        ></i>
      }
      filledIcon={
        <i
          className='fas fa-star'
          style={{
            fontSize: '13px',
            paddingRight: '10px',
            marginBottom: '10px',
          }}
        ></i>
      }
    />
  )
}

export default Rating
