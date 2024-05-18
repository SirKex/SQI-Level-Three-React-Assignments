import React from 'react'

const SectionFourA = () => {
  return (
      <div className='p-4' style={{ backgroundImage: "url(https://th.bing.com/th/id/OIP.PpMdGcQw2j-urqt7VsbSsAHaE8?w=262&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7)", backgroundSize: "cover"}}>
          <div className='w-75 mx-auto mt-5 d-flex justify-content-evenly'>
              <div className='w-25'>
                  <iframe width="396" height="223" className='rounded' src="https://www.youtube.com/embed/HgC6bjMbqpw" title="Campus Tour | SQI College of ICT, Ibadan" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className='w-25'></div>
              <div className='w-75 pb-5'>
                  <p className='fw-bold text-light mb-0' style={{fontSize: "48px"}}>Take a Tour</p>
                  <p className='text-light' style={{ fontSize: "18px" }}>Our campus is a living centre for innovation and creativity for sustainability. We love showing students our campus and allowing them to see, hear and feel the excitement that comes with being part of the Central community which is an atmosphere that is open-minded, always exciting, and filled with academic excellence.</p>
                  <button className='btn btn-dark rounded-pill py-3 px-4 mt-3'>Apply now</button>
              </div>
          </div>
    </div>
  )
}

export default SectionFourA