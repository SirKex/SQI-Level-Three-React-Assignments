import React from 'react'

const SectionFiveCard = ({icon, textOne, textTwo}) => {
  return (
      <div>
      <p style={{fontSize: "32px"}}>{icon}</p>
      <p className='fs-4 mb-1'>{textOne}</p>
      <p style={{fontSize: "16px", fontWeight: "400"}}>{textTwo}</p>
    </div>
  )
}

export default SectionFiveCard