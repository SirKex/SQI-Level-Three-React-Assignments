import React from 'react'
import { Link } from 'react-router-dom'

const BottomAccessory = () => {
  return (
      <div>
          <div>
              <div className='fixed-bottom m-5 d-flex align-items-center'>
                  <Link to={"/customer-service"}>
                      <div className='rounded-circle p-2' style={{ backgroundColor: "rgb(45, 183, 66)" }}>
                          <i style={{ fontSize: "40px", color: "white" }} class="fa-brands fa-whatsapp"></i>
                      </div>
                  </Link>
                  <div className='mx-2 d-flex card rounded-0 pt-1 px-2 w-auto' style={{ fontSize: "12px", height: "30px" }}>Need help? Chat with us
                  </div>
              </div>

          </div>
    </div>
  )
}

export default BottomAccessory