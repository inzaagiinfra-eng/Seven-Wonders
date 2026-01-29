import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Services from './components/services/Services';
import ContactUs from './components/contact/ContactUs';
import FAQ from './components/faq/FAQ';
import Projects from './components/projects/Projects';
import Resources from './components/resources/Resources';
import Agents from './components/agents/Agents';
import Community from './components/community/Community';
import ShowReviews from './components/review/ShowReviews';
import Blog from './components/blog/Blog';
import PressInfo from './components/pressinfo/PressInfo';
 


function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about-us' element={<About/>} />
        <Route path='/service' element={<Services/>} />
        <Route path='/contact-us' element={<ContactUs/>} />
        <Route path='/faq' element={<FAQ/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/resources' element={<Resources/>} />
        <Route path='/agents' element={<Agents/>} />
        <Route path='/community' element={<Community/>} />
        <Route path='/review' element={<ShowReviews/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/press-info' element={<PressInfo/>} />
       


      </Routes>

      <Footer/>

    </>
  )
}

export default App
