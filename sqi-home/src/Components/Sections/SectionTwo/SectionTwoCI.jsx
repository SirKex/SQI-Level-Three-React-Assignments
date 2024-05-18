import React from 'react'
import SectionTwoCCard from './SectionTwoCCard'

const SectionTwoCI = () => {
    const cardInfo = [
        {
            id: 1,
            image: "https://edu.sqi.ng/wp-content/uploads/2023/01/software-engineering-630x330-1.webp",
            title: "Software Engineering",
            textOne: "Software Engineering is one of the most in-demand jobs across the globe today.",
            textTwo: "Software Engineers are also known as programmers, developers or coders. They are the ones behind all the apps and software you use today either on your phone or computer within your browser. Software such as banking apps, booking apps, mailing apps (e.g Gmail), Chat apps (e.g WhatsApp) and other Social apps (e.g Twitter, Facebook) and many more are created by software engineers.",
            learnmore: "Learn More"
        },
        {
            id: 2,
            image: "https://edu.sqi.ng/wp-content/uploads/2023/03/product.jpg",
            title: "UI/UX – Product Design",
            textOne: "More than ever before individuals and businesses are relying on digital products and services. From online meeting tools to finance, from e-commerce platforms to healthcare and food apps. Making an intuitive digital product design is even more import at this time as it determines the overall experience of the users.",
            textTwo: "Here, you’ll build your product design skillset from the bottom up with lessons, mentorship sessions, and career advice from our design professionals.",
            learnmore: "Learn More"
        },
    ]
    return (
        <div>
            <div className='d-flex align-items-center flex-column justify-content-evenly w-100 mx-auto'>
                {cardInfo.map((data) => (
                    <div key={data.id} className="card col-11 col-md-6 col-lg-5 mb-5 bg-success-subtle p-5 shadow" style={{ width: "97%", borderRadius: "20px" }}>
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

export default SectionTwoCI