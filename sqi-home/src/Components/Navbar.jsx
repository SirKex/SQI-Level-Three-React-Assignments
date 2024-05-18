import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='sticky-top' style={{backgroundColor: "white"}}>
          <div className='d-flex w-100 align-items-center justify-content-evenly border border-bottom-5'>
              <Link to={"/"}><img style={{ height: "80px" }} src="https://edu.sqi.ng/wp-content/uploads/2019/01/co.jpg" alt="" /></Link>
              <div className='d-flex w-50 d-flex align-items-center justify-content-evenly'>
                  <Link to={"/about-us"}>About</Link>
                  <Link to={"/programmes"}>Programmes</Link>
                  <Link to={"/admissions"}>Admissions</Link>
                  <Link to={"/e-portal"}>E-Portal</Link>
                  <Link to={"/sqi-scholarship"}>SQI Scholarship</Link>
                  <Link to={"/news"}>News</Link>
              </div>
          </div>
    </div>
  )
}

export default Navbar