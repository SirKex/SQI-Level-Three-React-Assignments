import React from 'react'
import SectionFiveCard from './SectionFiveCard'

const SectionFiveA = () => {
    const cardInfo = [
        {
            id: 1,
            icon: <i class="fa-solid fa-atom"></i>,
            textOne: "Project Based Learning",
            textTwo: "Our courses are practical, hands-on learning. Practice and apply knowledge with real world projects that contribute largely to your portfolio."
        },
        {
            id: 2,
            icon: <i class="fa-brands fa-readme"></i>,
            textOne: "Expert Instructors",
            textTwo: "Get to interact with different mentors and draw from their loads of experience."
        },
        {
            id: 3,
            icon: <i class="fa-solid fa-water"></i>,
            textOne: "Physical & Virtual Class",
            textTwo: "You can now choose physical class experience or online classroom and learn from anywhere in the world."
        },
        {
            id: 4,
            icon: <i class="fa-brands fa-readme"></i>,
            textOne: "Free access to our hub and community",
            textTwo: "You will have access to our fully functional hub for co-working and working on projects, assignments and even begin a start-up."
        },
        {
            id: 5,
            icon: <i class="fa-solid fa-medal"></i>,
            textOne: "Certification",
            textTwo: "Be certified by an accredited and globally recognized institution. SQI got its accreditation in Sept 2021 from the NBTE, Nigeria."
        },
        {
            id: 6,
            icon: <i class="fa-regular fa-message"></i>,
            textOne: "Alumni Support",
            textTwo: "Our students have access to alumni who currently work at top tech organizations in the world such as Google, Microsoft, Interswitch etc."
        },
        {
            id: 7,
            icon: <i class="fa-solid fa-briefcase"></i>,
            textOne: "Job Opportunity",
            textTwo: "78.5% of our students found secure employment within three months of graduation. Students leave from learning to getting job roles."
        },
        {
            id: 8,
            icon: <i class="fa-solid fa-book"></i>,
            textOne: "Access to study materials",
            textTwo: "Students have access to prerecorded videos and resources they can make use of to further solidify their knowledge."
        }
    ]
    return (
        <div>
            <div className='d-flex flex-wrap gap-5'>
                {cardInfo.map((data) => (
                    <div key={data.id} className="col-11 col-md-6 col-lg-4" style={{ width: "40%" }}>
                        <SectionFiveCard
                            icon={data.icon}
                            textOne={data.textOne}
                            textTwo={data.textTwo}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SectionFiveA