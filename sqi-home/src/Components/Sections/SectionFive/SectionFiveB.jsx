import React from 'react'

const SectionFiveB = () => {
  return (
      <div>
          <section className='bg-dark text-light px-5 pt-5 pb-4'>
              <div className='w-75 mx-auto d-flex pt-5'>
                  <div className='w-50'>
                      <p className='fw-semibold mb-0'>FAQ</p>
                      <p className='fs-1 w-75 fw-semibold' style={{lineHeight: "46.8px"}}>Frequently Asked Questions</p>
                      <p className='mt-5 fs-4 text-warning w-25' style={{borderBottom: "1px solid yellow"}}>Contact Us</p>
                  </div>
                  <div className='w-50'>
                      <p className='fs-4 mb-5 text-warning' style={{borderBottom: "1px solid rgb(189, 147, 16)"}}>How do I get into the college</p>
                      <p className='fs-4 mb-5 text-warning' style={{borderBottom: "1px solid rgb(189, 147, 16)"}}>How much is the tution?</p>
                      <p className='fs-4 mb-5 text-warning' style={{borderBottom: "1px solid rgb(189, 147, 16)"}}>Are your classes physical or virtual?</p>
                      <p className='fs-4 mb-5 text-warning' style={{borderBottom: "1px solid rgb(189, 147, 16)"}}>Will I get a job after my training?</p>
                  </div>
              </div>
          </section>
          <section className='text-light px-5 pt-3 pb-5' style={{ backgroundColor: "rgb(0, 11, 63)"}}>
              <div className='w-75 mx-auto pt-5 pb-5 mb-4'>
                  <p className='fw-semibold mb-0'>IT’S TIME FOR YOU TO TAKE YOUR TECH CAREER TO THE NEXT LEVEL</p>
                  <p className='fw-bold' style={{ fontSize: "57px" }}>Ready to Get Started?</p>
                  <p className='w-50 fw-semibold'>We provide and lead others in quality education, service, industry, and character as well as discipline.</p>
                  <button className='btn btn-dark rounded-pill px-4 py-3'>Join Us Today</button>
            </div>
          </section>
    </div>
  )
}

export default SectionFiveB