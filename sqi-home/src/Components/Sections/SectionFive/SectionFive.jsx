import React from 'react'
import SectionFiveA from './SectionFiveA'
import SectionFiveB from './SectionFiveB'

const SectionFive = () => {
  return (
    <div>
      <div className='mt-5 w-75 mx-auto d-flex justify-content-evenly p-5'>
        <div className='w-75'>
          <p className='fs-1 fw-bold'>Why study at SQI?</p>
          <SectionFiveA />
        </div>
        <img className='w-25' src="https://th.bing.com/th/id/R.480b87310d141a98c9f5b198468897d4?rik=rrBmy9N%2f%2fguuSw&pid=ImgRaw&r=0" alt="" />
      </div>
      <SectionFiveB />
    </div>
  )
}

export default SectionFive