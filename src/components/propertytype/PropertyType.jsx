import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
const type = [
    {
        id: 1,
        title: "Apartments",
        img: "/propertytype/apartments.webp",
    },
    {
        id: 2,
        title: "Office",
        img: "/propertytype/office.webp",
    },
    {
        id: 3,
        title: "Villa",
        img: "/propertytype/Villa.jpeg",
    },
    {
        id: 4,
        title: "House",
        img: "/propertytype/house.webp",
    },
]


const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const card = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};


const PropertyType = () => {
    return (
        <div className='app-container mt-12'>
            <motion.div initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                    duration: 0.6,
                    ease: "easeOut"
                }} className='flex flex-col justify-center items-center gap-2'>
                <h1 className='lg:text-4xl max-lg:text-2xl font-bold text-red-600'>Explore Property Types</h1>
                <p className='max-lg:text-sm lg:text-md '>Where your dreams find their perfect abode</p>
            </motion.div>
            <motion.div initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }} className='  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:mt-12 max-lg:mt-2 '>
                {
                    type.map((item, index) => (
                        <motion.div
                            key={item.id}
                            variants={card}
                        >
                            <Link
                                to={item.link}
                                className="flex flex-col items-center m-4"
                            >
                                <div className="w-full h-66 overflow-hidden rounded-2xl">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                                <h1 className="font-bold mt-2 text-red-600">{item.title}</h1>
                            </Link>
                        </motion.div>
                    ))
                }


            </motion.div>
        </div>
    )
}

export default PropertyType
