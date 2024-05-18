import React from 'react'
import "./SideBar.css"

const SideBar = () => {
  return (
      <div>
          <div className='parentDiv'>
              <div className='divOne'>
                  <i class="fa-brands fa-facebook-f"></i>
              </div>
              <div className='divTwo'>
                  <i class="fa-brands fa-twitter"></i>
              </div>
              <div className='divOne'>
                  <i class="fa-brands fa-linkedin-in"></i>
              </div>
          </div>
    </div>
  )
}

export default SideBar