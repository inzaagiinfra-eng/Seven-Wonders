import React, { useState } from 'react'
import { BiHomeCircle } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { RiAccountCircleLine } from "react-icons/ri";


const nav = [
  {
    id: 1,
    title: "About us",
    link: "/about-us"
  },
  {
    id: 2,
    title: "Projects",
    link: "/projects"
  },
  {
    id: 3,
    title: "Services",
    link: "/service"
  },
  {
    id: 4,
    title: "Listings",
    link: "/"
  },
  {
    id: 5,
    title: "",
    link: "/"
  },

]

const more = [
 
  {
    id: 2,
    title: "Contact Us",
    link: "/contact-us",
  },
]

const Navbar = () => {
  const [navbar, setnavbar] = useState(false)
  return (
    <div className='app-container'>
      <div className='relative'>
        <motion.div className='flex justify-between items-center' initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeOut"
          }} >

          <Link to="/" className='flex items-center '>
            <img src="/logo.png" alt="logo" className='max-md:w-20 md:w-40 ' />          
          </Link>
          <div className='lg:hidden max-lg:flex justify-center items-center gap-2 '>
            <button onClick={() => setnavbar(!navbar)}>
              <HiMenu size={28} />
            </button>


          </div>

          <div className='max-lg:hidden flex items-center justify-center gap-4'>
            {
              nav.map((item, index) => (
                <div key={item.id} className='flex items-center hover:bg-black hover:text-white px-2 py-0.5 rounded-2xl'>
                  <Link className='text-md font-semibold' to={item.link}>{item.title}</Link>
                </div>
              ))
            }

          </div>
          <div className='flex max-lg:hidden  gap-4 '>
            {
              more.map((item, index) => (
                <div key={item.id}>
                  <Link className='text-md font-semibold' to={item.link}>{item.title}</Link>
                </div>
              ))

            }

          </div>


        </motion.div>




        {navbar
          && (
            <div className='absolute right-10 bg-black text-white p-4 rounded-lg top-4'>
              {
                nav.map((item, index) => (
                  <div key={item.id}>
                    <Link to={item.link}>{item.title}</Link>
                  </div>
                ))
              }
              {
                more.map((item, index) => (
                  <div key={item.id}>
                    <Link to={item.link}>{item.title}</Link>
                  </div>
                ))
              }
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar