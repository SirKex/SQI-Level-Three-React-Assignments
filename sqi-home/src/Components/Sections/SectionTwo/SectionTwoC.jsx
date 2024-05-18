import React from 'react'
import { Link } from 'react-router-dom'
import SectionTwoCI from './SectionTwoCI'
import SectionTwoCII from './SectionTwoCII'

const SectionTwoC = () => {
    return (
        <div>
            <div className='w-75 mx-auto d-flex align-items-center justify-content-evenly'>
                <div className='mb-5'>
                    <div className='p-2'>
                        <h1 className='mt-4'>Our Top Courses</h1>
                        <p className='mb-4 mt-3'>Take a look at some of our popular courses</p>
                        <Link to={"/all-courses"}>View all courses   <i style={{ fontSize: "8px" }} class="fa-solid fa-chevron-right"></i></Link>
                    </div>
                    <SectionTwoCI />
                </div>
                <SectionTwoCII />
            </div>
        </div>
    )
}

export default SectionTwoC