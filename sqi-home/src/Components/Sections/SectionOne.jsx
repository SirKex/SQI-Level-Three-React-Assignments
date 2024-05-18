import React from 'react'

const SectionOne = () => {
  return (
      <div >
          <div className='w-75 d-flex align-items-center justify-content-evenly mx-auto p-3 mt-4' style={{height: "500px"}}>
              <div className='w-50'>
                  <div style={{ fontSize: "64px", fontWeight: "700", lineHeight: "70.4px", width: "80%"}}>
                    <p>Study to become a global talent</p>
                  </div>
                  <p className='fs-6 fw-semibold'>Learn new tech skills using a world-class curriculum from top industry experts in an accredited institution.</p>
                  <button className='btn btn-primary px-4 py-3'>Start Now</button>
              </div>
              <div>
                  <img src="https://edu.sqi.ng/wp-content/uploads/2023/06/bg-header-sqi-1.png" alt="" />
              </div>
          </div>
          <p style={{fontSize: "42px"}} className='fw-bold mx-auto w-75 mt-5 text-primary-emphasis'>Start here. Change the world.</p>
    </div>
  )
}

export default SectionOne