import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Programmes from './Components/Pages/Programmes';
import Admissions from './Components/Pages/Admissions';
import EPortal from './Components/Pages/EPortal';
import SQIScholarship from './Components/Pages/SQIScholarship';
import News from './Components/Pages/News';
import PageNotFound from './Components/Pages/PageNotFound';
import AllCourses from './Components/Pages/AllCourses';
import CustomerService from './Components/CustomerService';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/programmes" element={<Programmes />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/e-portal" element={<EPortal />} />
        <Route path="/sqi-scholarship" element={<SQIScholarship />} />
        <Route path="/news" element={<News />} />
        <Route path="/all-courses" element={<AllCourses />} />
        <Route path="/customer-service" element={<CustomerService />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
