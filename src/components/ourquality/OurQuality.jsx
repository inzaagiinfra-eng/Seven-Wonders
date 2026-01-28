import React from 'react'
import { BsCheck2Circle } from "react-icons/bs";
import { motion } from "framer-motion"

const OurQuality = () => {
    return (
        <div className='app-container' >

            <div className='flex max-lg:flex-col justify-between lg:items-center max-lg:items-start w-full gap-8'>



                <motion.div initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.7,
                        ease: "easeOut",
                        delay: 0.2,
                    }}
                    viewport={{ once: false, amount: 0.3 }} className='lg:w-[50%] max-lg:w-full'>
                    <img className='w-full' src="/quality.png" alt="property" />
                </motion.div>


                <motion.div initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.7,
                        ease: "easeOut",
                    }}
                    viewport={{ once: false, amount: 0.3 }} className=' flex flex-col justify-center items-start lg:gap-4'>
                    <p>our best services</p>
                    <h1 className='lg:text-5xl max-lg:text-2xl font-bold'>And here's how? We do <br /> insurance better</h1>
                    <ul className='flex flex-col justify-center items-start lg:gap-4 max-lg:gap-2'>
                        <li className='flex  justify-center items-center font-semibold gap-2'><span className=''><BsCheck2Circle size={24} /></span> <span>Save an average of 1000000 per year</span></li>
                        <li className='flex  justify-center items-center font-semibold  gap-2'><span className=''><BsCheck2Circle size={24} /></span> <span>File a claim in 3 minutes</span></li>
                        <li className='flex  justify-center items-center font-semibold  gap-2'><span className=''><BsCheck2Circle size={24} /></span> <span> Easily manage your policy online</span></li>
                        <li className='flex  justify-center items-center font-semibold  gap-2'><span className=''><BsCheck2Circle size={24} /></span> <span>Skip the faxing, long paperwork, and unnecessary phone calls</span></li>
                        <li className='flex  justify-center items-center font-semibold  gap-2'><span className=''><BsCheck2Circle size={24} /></span> <span> Get support from an American-based team</span></li>

                    </ul>

                </motion.div>
            </div>
        </div>
    )
}

export default OurQuality
