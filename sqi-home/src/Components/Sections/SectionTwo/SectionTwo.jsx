import React from 'react'
import Card from './SectionTwoCard';
import SectionTwoB from './SectionTwoB';
import SectionTwoC from './SectionTwoC';

const SectionTwo = () => {
    const cardInfo = [
        {
            id: 1,
            image: "https://edu.sqi.ng/wp-content/uploads/2023/06/college.jpg",
            title: "National Innovative Diploma (NID)",
            text: "The National Innovation Diploma (NID) offered at SQI College of ICT is a 2 year approved academic program of the National Board for Technical Education (NBTE).",
            learnmore: "Learn More"
        },
        {
            id: 2,
            image: "https://edu.sqi.ng/wp-content/uploads/2023/06/prof.jpg",
            title: "Professional Diploma Certificate",
            text: "The Professional Certificate Program is 1 year practical training with wide range of edge-cutting IT certification courses offered in SQI College of ICT to people who want to advance their career.",
            learnmore: "Learn More"
        },
        {
            id: 3,
            image: "https://edu.sqi.ng/wp-content/uploads/2023/06/certificate.jpg",
            title: "Certificate Program",
            text: "The Certificate Program is a short-term training, 2 weeks to 6 months with a wide range of edge-cutting IT certification courses offered in SQI College of ICT to people who want to advance their careers.",
            learnmore: "Learn More"
        },
    ];
    return (
        <div>
            <div className="row w-75 mx-auto">
                {cardInfo.map((data) => (
                    <div key={data.id} className="col-11 col-md-6 col-lg-4">
                        <Card
                            image={data.image}
                            title={data.title}
                            text={data.text}
                            learnmore={data.learnmore}
                        />
                    </div>
                ))}
            </div>
            <SectionTwoB />
            <SectionTwoC />
        </div>
    )
}

export default SectionTwo