import React from 'react'

const SectionFourB = () => {
  return (
    <div>
      <div className='w-75 mx-auto mt-5'>
        <p style={{ fontSize: "48px", fontWeight: "bold", paddingLeft: "20px" }}>Testimonials</p>
        <p className='w-50'>Read what our current students and alumni have to say about their SQI experience.</p>
        <div className='d-flex justify-content-evenly'>
          <div className='d-flex flex-column align-items-center'>
            <img style={{ width: "50px", height: "50px", borderRadius: "100%" }} src="https://lh3.googleusercontent.com/places/AAcXr8o3QIDwJ6rZBswrekAOU16lGdxZTU6hVAbrHfF33yW9DLiOxUHGH4Xw_iG3njJpZ-bjT8tQeeb-Dr_JDXt3frw66HapCb1NkJ4=s1600-w300-h300" alt="" />
            <p className='fw-bold mb-0'>SQI College of ICT IBADAN</p>
            <p className='mb-0'>5.0 <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
            <p className='mb-0'>Based on 84 reviews</p>
            <p>powered by Google</p>
            <button className='btn btn-primary rounded-pill px-3'>review us on <i class="fa-brands fa-google"></i></button>
          </div>
          <div className='card col-lg-3 px-3'>
            <div className='d-flex pt-3'>
              <img style={{ width: "50px", height: "50px", borderRadius: "100%" }} src="https://th.bing.com/th/id/OIP.0LkWk0_BUxzLScq3nQlZ-gHaHa?w=198&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
              <div className='px-2'>
                <p className='mb-0'>Test User</p>
                <p>1 year ago</p>
              </div>
            </div>
            <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, ipsum mollitia?</p>
          </div>
          <div className='card col-lg-3 px-3'>
            <div className='d-flex pt-3'>
              <img style={{ width: "50px", height: "50px", borderRadius: "100%" }} src="https://th.bing.com/th/id/OIP.0LkWk0_BUxzLScq3nQlZ-gHaHa?w=198&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
              <div className='px-2'>
                <p className='mb-0'>Test User</p>
                <p>1 year ago</p>
              </div>
            </div>
            <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, ipsum mollitia?</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionFourB