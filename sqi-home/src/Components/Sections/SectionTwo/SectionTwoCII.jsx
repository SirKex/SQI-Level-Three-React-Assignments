import React from 'react'
import SectionTwoCCard from './SectionTwoCCard'

const SectionTwoCII = () => {
    const cardInfo = [

        {
            id: 1,
            image: "https://edu.sqi.ng/wp-content/uploads/2023/01/DATA-SQI.jpg",
            title: "Data Science & Analysis",
            textOne: "The eruption of data is transforming indiviuals and businesses. Companies either big or small are now expecting their business decisions to be based on data-led insight.",
            textTwo: "Data specialists have a tremendous impact on business strategies and marketing tactics because everyone now depends on data to formulate improved strategies for the future of their companies.",
            learnmore: "Learn More"
        },
        {
            id: 2,
            image: "https://edu.sqi.ng/wp-content/uploads/2023/03/digital-literacy.jpg",
            title: "Digital Literacy",
            textOne: "This course is designed to prepare you for success in a modern world full of computers—not only the traditional computers such as desktop and notebook PCs but also computers that you interact with in other places too, like your bank’s ATM or your employer’s computerized cash register. In this course, you will learn about the technologies that drive our computerized society, including the Internet and local area networks (LANs).",
            textTwo: "Taking this course will help you become a digitally literate person—that is, someone who understands how computer technology fits into our modern society and knows how to navigate a variety of computing environments.",
            learnmore: "Learn More"
        }
    ]
    return (
        <div>
            <div className='d-flex align-items-center flex-column justify-content-evenly w-100 mx-auto'>
                {cardInfo.map((data) => (
                    <div key={data.id} className="card col-11 col-md-6 col-lg-5 mb-5 bg-primary-subtle p-5 shadow" style={{ width: "88%", borderRadius: "20px", border: "1px solid black" }}>
                        <SectionTwoCCard
                            image={data.image}
                            title={data.title}
                            textOne={data.textOne}
                            textTwo={data.textTwo}
                            learnmore={data.learnmore}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SectionTwoCII