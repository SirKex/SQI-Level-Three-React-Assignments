import React from 'react'

const SectionSixCard = ({image, textOne, date, text, textTwo}) => {
  return (
      <div>
          <img className='img-fluid' src={image} alt="" />
          <p className='fw-bold'>{textOne}</p>
          <p className='fs-6 text-warning'>{date}</p>
          <p>{ text}</p>
          <p>{textTwo}</p>
    </div>
  )
}

export default SectionSixCard