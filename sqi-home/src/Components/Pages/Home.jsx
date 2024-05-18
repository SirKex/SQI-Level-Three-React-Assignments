import React from 'react';
import Navbar from '../Navbar';
import SectionOne from '../Sections/SectionOne';
import SectionTwo from '../Sections/SectionTwo/SectionTwo';
import SectionThree from '../Sections/SectionThree';
import SectionFour from '../Sections/SectionFour/SectionFour';
import SectionFive from '../Sections/SectionFive/SectionFive';
import SectionSix from '../Sections/SectionSix/SectionSix';
import Accessories from '../Accessories/Accessories';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div>
                <SectionOne />
                <SectionTwo />
                <SectionThree />
                <SectionFour />
                <SectionFive />
                <SectionSix />
                <Accessories />
                <div className='bg-dark text-light p-2'>
                    <p className='w-75 mx-auto'>Copyright © 2024 | SQI ICT Consultants. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Home