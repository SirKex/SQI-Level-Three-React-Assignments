import React from 'react'
import { Link } from 'react-router-dom'

const SectionTwoCCard = ({image, title, textOne, textTwo, learnmore}) => {
  return (
      <div>
        <div className="w-100">
          <img className="img-fluid w-100 my-2 rounded" src={image} alt="" />
        </div>
        <h1 className="mt-3" style={{fontSize: "28px", fontWeight: "700" }}>{title}</h1>
        <p className="mt-4 my-2" style={{ fontSize: "14px", fontWeight: "500" }} >{textOne}</p>
        <p className="mt-2 my-2" style={{ fontSize: "14px", fontWeight: "500" }}>{textTwo}</p>
      <Link className="mt-5" style={{ fontSize: "14px", fontWeight: "600" }}>Learn more  <i style={{fontSize: "8px"}} class="fa-solid fa-chevron-right"></i></Link>
    </div>
  )
}

export default SectionTwoCCard