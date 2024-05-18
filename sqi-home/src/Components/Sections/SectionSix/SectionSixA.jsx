import React from 'react'
import SectionSixCard from './SectionSixCard'

const SectionSixA = () => {
    const cardInfo = [
        {
            id: 1,
            image: "https://edu.sqi.ng/wp-content/uploads/2024/01/commisioner-for-education-400x250.jpg",
            textOne: "THE KEY NOTE ADDRESS DELIVERED BY THE HONOURABLE COMMISSIONER PROFESSOR ABDULWAHEED ADELABU",
            date: "Jan 30, 2024",
            textTwo: "THE KEYNOTE ADDRESS DELIVERED BY THE HONOURABLE COMMISSIONER MINISTRY OF EDUCATION SCIENCE AND TECHNOLOGY, PROFESSOR ABDULWAHEED ADELABU ON THE OCCASION OF OPENING OF THE SQI AI AND ROBOTIC RESEARCH AND TRAINING AT HAIER THERMOCOOL BUILDING CHALLENGE ON 27TH JANUARY,..."
        },
        {
            id: 2,
            image: "https://edu.sqi.ng/wp-content/uploads/2024/01/NID-admission-2023-2024-400x250.jpg",
            textOne: "APPLICATION FOR ALL PROGRAMS FOR THE 2023/2024 ACADEMIC SESSION IS NOW OPEN!",
            date: "Jan 13, 2024",
            text: "APPLICATION FOR ALL PROGRAMS FOR THE 2023/2024 ACADEMIC SESSION IS NOW OPEN.",
            textTwo: "We are pleased to let you know that the admission process for the 2023/2024 academic session has started. Intending candidates are to choose SOFTQUEST INCORPORATED(SQI) College of ICT as their first choice in their JAMB/ UTME registration to be eligible."
        },
        {
            id: 3,
            image: "https://edu.sqi.ng/wp-content/uploads/2023/07/sqijamb1-400x250.jpg",
            textOne: "SQI College of ICT Post-UTME Examination Date, and Change of Institution 2023",
            date: "Jul 10, 2023",
            textTwo: "SQI College of ICT Post-UTME Examination Date, and Change of Institution We would like to inform you that the SQI Post-UTME Examination has been slated for July 29, 2023. This examination is a crucial step towards gaining admission into SQI College of ICT for the..."
        }
    ]
  return (
      <div className='bg-dark-subtle pb-5 pt-4'>
          <section className='w-75 mx-auto mt-5 mb-4 pb-5'>
              <div className='d-flex align-items-center justify-content-between mb-4'>
                  <p className='fs-1 fw-bold'>Latest News</p>
                  <button className='btn btn-dark rounded-pill px-4 py-3'>Read more</button>
              </div>
              <div className='d-flex justify-content-between pb-5'>
                  {cardInfo.map((data) => (
                      <div key={data.id} className="card p-3 border border-0 rounded-0 col-11 col-md-6 col-lg-4" style={{width: "30%", height: "fit-content"}}>
                          <SectionSixCard
                              image={data.image}
                              textOne={data.textOne}
                              date={data.date}
                              text={data.text}
                              textTwo={data.textTwo}
                          />
                      </div>
                  ))}
              </div>
          </section>
    </div>
  )
}

export default SectionSixA