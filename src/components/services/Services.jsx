import React from 'react'
import serbanner from "../../../public/anthorimages/service.jpg"
import { FaCheck } from "react-icons/fa";
import { HiHomeModern } from "react-icons/hi2";
import { FaBuilding } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa6";
import { PiMoneyWavyBold } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { IoCall } from "react-icons/io5";
import { IoCalendarNumberOutline } from "react-icons/io5";



const services = [

    {
        id: 1,
        icon: <HiHomeModern />,
        title: "Luxury Residential",
        description: "Exclusive apartments, penthouses and villas in premium locations with world-class amenities and bespoke living experiences.",
    },


    {
        id: 2,
        icon: <FaBuilding />,
        title: "Commercial Properties",
        description: "Premium office spaces, retail outlets and commercial complexes in strategic business locations with high ROI potential.",
    },


    {
        id: 3,
        icon: <FaRegHandshake />,
        title: "Property Management",
        description: "End-to-end property management services ensuring your investment remains in pristine condition with maximum returns.",
    },


    {
        id: 4,
        icon: <PiMoneyWavyBold />,
        title: "Investment Advisory",
        description: "Strategic investment guidance, market analysis and portfolio management to maximize returns on your real estate investments.",
    },



]

const Services = () => {
    return (
        <div className='app-container'>
            <div>
                <div
                    className="w-full lg:h-60  max-lg:h-36 bg-cover bg-center flex justify-center items-center rounded-4xl"
                    style={{ backgroundImage: `url(${serbanner})` }} >

                    <h1 className='lg:text-4xl font-bold max-lg:text-2xl text-red-600'>Services</h1>

                </div>
                <p className='lg:mt-8 max-lg:mt-6 text-center lg:text-md max-lg:text-sm'>Audvik homes always delivers quality. Our excellence garners unwavering trust from countless clients.Our commitment towards timely delivery without compromising on quality is a benchmark.</p>

                <h1 className='lg:text-4xl max-lg:text-2xl lg:mt-16 max-lg:mt-12 font-bold text-red-600 '> Our Premium Services</h1>
                <p className='lg:text-md max-lg:text-sm'>Comprehensive real estate solutions tailored to meet your luxury living requirements.</p>


            </div>
            <div className='flex justify-center items-start max-lg:flex-col'>
                <div className='lg:space-y-6 max-lg:space-y-4  max-lg:mb-12'>

                    <h1 className='lg:text-4xl max-lg:text-2xl lg:mt-16 max-lg:mt-12 font-bold text-red-600'>Elevating Real Estate Experiences</h1>
                    <p className='lg:text-md max-lg:text-sm'>At Wealthway Luxury Realty, we provide end-to-end real estate solutions that go beyond transactions. Our expertise spans across residential, commercial, and investment properties, ensuring you receive personalized guidance at every step.</p>
                    <ul className="lg:space-y-4 max-lg:space-y-2">
                        <li className="flex items-center gap-3">
                            <FaCheck className="text-red-600" />
                            <span>Personalized property selection based on your lifestyle</span>
                        </li>

                        <li className="flex items-center gap-3">
                            <FaCheck className="text-red-600" />
                            <span>Market analysis and investment advisory</span>
                        </li>

                        <li className="flex items-center gap-3">
                            <FaCheck className="text-red-600" />
                            <span>Legal and documentation assistance</span>
                        </li>

                        <li className="flex items-center gap-3">
                            <FaCheck className="text-red-600" />
                            <span>Post-purchase property management</span>
                        </li>

                        <li className="flex items-center gap-3">
                            <FaCheck className="text-red-600" />
                            <span>Access to exclusive pre-launch projects</span>
                        </li>
                    </ul>

                    <a href="https://wa.me/918076310637?text=Hello%20I%20am%20interested%20in%20your%20property" className='flex justify-center items-center gap-4 bg-[#C0C9EE] lg:py-3 text-white font-semibold lg:px-3 max-lg:py-2 max-lg:px-2 rounded-2xl w-fit'><span className='text-red-600'>Discuss Your Requirements</span> <img src="/icons/whatsapp.png" className='w-6 h-6' alt="whatsapp" /> </a>


                </div>
                <div>
                    <img className='rounded-4xl' src="/anthorimages/servicetype.avif" alt="image" />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  lg:mt-12 max-lg:mt-8
                justify-items-center gap-6">
                {services.map((item, index) => (
                    <Link
                        key={index}
                        className="flex flex-col justify-center items-center  bg-[#C0C9EE]  p-6 rounded-xl w-full max-w-65  transform transition duration-300 hover:-translate-y-4 hover:shadow-lg"
                    >
                        <div className="text-red-600 text-5xl p-4 rounded-full mb-4">
                            {item.icon}
                        </div>

                        <h1 className="text-lg font-semibold mb-2 text-red-600">
                            {item.title}
                        </h1>

                        <p className="text-sm  text-white">
                            {item.description}
                        </p>
                    </Link>
                ))}
            </div>

            <div className="flex flex-col justify-center items-center 
                lg:mt-20 max-lg:mt-8
                lg:gap-8 max-lg:gap-4
                bg-[#C0C9EE] py-6 
                rounded-4xl 
                max-w-5xl mx-auto text-center">

                <h1 className="lg:text-4xl max-lg:text-2xl font-bold text-red-600">
                    Ready to Transform Your Real Estate Experience?
                </h1>

                <p className="lg:text-md max-lg:text-sm text-white max-w-3xl">
                    Connect with our expert consultants for personalized guidance and discover
                    how we can help you achieve your property goals.
                </p>

                <div className="flex gap-4 justify-center flex-wrap">
                    <a href="https://wa.me/918076310637?text=Hello%20I%20am%20interested%20in%20your%20property" className="flex items-center gap-3 bg-red-600   text-white font-semibold
                  lg:py-3 lg:px-4 max-lg:py-2 max-lg:px-3 rounded-2xl  hover:bg-white hover:text-black cursor-pointer">
                        <IoCalendarNumberOutline size={20} />  Schedule Consultation

                    </a>

                    <a
                        href="tel:+918076310637"
                        className="flex items-center gap-3 bg-red-600 text-white font-semibold
             lg:py-3 lg:px-4 max-lg:py-2 max-lg:px-3
             rounded-2xl hover:bg-white hover:text-black cursor-pointer "
                    >
                        <IoCall size={20} />
                        Call Now : +91 8076310637
                    </a>

                </div>
            </div>




        </div>
    )
}

export default Services
