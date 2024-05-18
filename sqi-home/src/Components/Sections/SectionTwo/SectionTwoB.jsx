import React from 'react'
import SectionTwoBCard from './SectionTwoBCard';

const SectionTwoB = () => {
    const cardInfo = [
        {
            id: 1,
            pOne: "2 Years",
            pTwo: "Both National Diploma and Professional Diploma.",
            pThree: "Academic Institution recognized skills and In-demand professional skills.",
            pFour: "120 min in JAMB, 5 Credits in O - Level, Your passion",
            pFive: "(usually Laptop)",
            pSix: "Yes (Any University)"
        },
        {
            id: 2,
            pOne: "1 Year Courses",
            pTwo: "Professional Diploma",
            pThree: " In-demand professional skills",
            pFour: "Your passion",
            pFive: "(usually Laptop)",
            pSix: "Partially Yes (LAUTECH ODL)"
        },
        {
            id: 3,
            pOne: "2 weeks to 6 months",
            pTwo: "Certificate Program",
            pThree: " In-demand professional skills",
            pFour: "Your passion",
            pFive: "(usually Laptop)",
            pSix: "Partially Yes (LAUTECH ODL)"
        },
    ];
    return (
        <div>
            <div className="row mt-5 w-75 mx-auto">
                {cardInfo.map((data) => (
                    <div key={data.id} className="col-11 col-md-6 col-lg-4">
                        <SectionTwoBCard
                            pOne={data.pOne}
                            pTwo={data.pTwo}
                            pThree={data.pThree}
                            pFour={data.pFour}
                            pFive={data.pFive}
                            pSix={data.pSix}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SectionTwoB