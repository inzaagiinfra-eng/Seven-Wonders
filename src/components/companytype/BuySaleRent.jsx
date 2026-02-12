import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

const types = [
    {
        id: 1,
        title: "Buy a Property",
        description: "Find the perfect residential or commercial property with Seven Wonders. We offer verified listings and expert guidance to help you make the right investment.",
        img: "/property-buy.svg"
    },
    {
        id: 2,
        title: "Sell a Property",
        description: "Sell your property with confidence. Seven Wonders ensures the best market value, transparent deals, and a smooth selling experience from start to finish.",
        img: "/property-sell.svg"
    },
    {
        id: 3,
        title: "Rent a Property",
        description: "Explore premium rental options for homes, offices, and commercial spaces. We connect you with reliable tenants and properties that match your requirements.",
        img: "/property-rent.svg"
    },
];


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

const BuySaleRent = () => {
    return (
        <div className='app-container max-lg:mt-12 lg:mt-20'>
            <motion.div initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }} className='flex justify-center items-center'>
                <h1 className='max-lg:text-2xl lg:text-4xl font-bold text-red-600'>Everything Should be easy</h1>

            </motion.div>
            <motion.div variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }} className='grid lg:mt-8 max-lg:mt-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-items-center'>
                {types.map((item, index) => (

                    <motion.div
                        key={item.id}
                        variants={card}
                    >

                        <Link to={item.link} key={item.id} className='flex flex-col text-white hover:bg-white hover:text-black  justify-center items-center lg:space-y-4 max-lg:space-y-2   xl:mx-8 bg-red-600 px-8 py-8 rounded-full '>
                            <img src={item.img} alt="type images" />
                            <h1 className='lg:text-2xl max-lg:text-xl   font-semibold'>{item.title}</h1>
                            <p className='lg:text-md max-lg:text-sm text-center'>{item.description}</p>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default BuySaleRent
