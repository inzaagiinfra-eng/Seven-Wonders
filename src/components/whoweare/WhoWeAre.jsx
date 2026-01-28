import React from 'react'
import CountUp from "react-countup";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';


const WhoWeAre = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });



    return (
        <div className='app-container mt-16 lg:mt-20'>
            <div className='flex flex-col items-center text-center'>
                <p className='font-semibold text-gray-600 text-sm lg:text-md'>Who we are?</p>
                <h1 className='font-bold text-3xl lg:text-5xl mt-2'>
                    We are a global, boutique real estate brokerage                </h1>
            </div>

            <div className='flex flex-col lg:flex-row justify-between items-center lg:mt-16 max-lg:mt-4 w-full gap-8'>

                <motion.div initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.7,
                        ease: "easeOut",
                    }}
                    viewport={{ once: false, amount: 0.3 }} className='flex flex-col lg:w-[50%] w-full lg:gap-6  max-lg:gap-2'>
                    <h2 className='text-2xl lg:text-3xl font-semibold'>
                        In the United States, the transfer acquisition of real estate                    </h2>
                    <p className='text-sm lg:text-md font-semibold'>
                        Real estate is different from personal property, which is not permanently attached to the land (or comes with the land), such as vehicles, boats, jewelry, furniture, tools, and the rolling stock of a farm and farm. In the United States, the transfer, owning, or acquisition.                    </p>
                    <div className='flex gap-4'>
                        <button className='px-6 py-2 bg-black cursor-pointer text-white rounded-4xl hover:border hover:bg-white hover:text-black '>Contact Us</button>
                        <button className='px-6 py-2 border cursor-pointer rounded-4xl hover:bg-blue-400 hover:text-white'>Read More</button>
                    </div>

                    <div ref={ref} className='flex lg:justify-start max-lg:justify-center items-start lg:gap-28 md:gap-20  max-md:gap-12 mt-8'>
                        <div className='flex flex-col items-center lg:text-4xl font-bold max-lg:text-2xl mt-1'>
                            {inView && <CountUp start={0} end={500} delay={0.3} suffix='+' duration={5} />}                            <p className='lg:text-lg max-lg:text-sm' >Projects</p>
                        </div>
                        <div className='flex flex-col items-center lg:text-4xl max-lg:text-2xl mt-1 font-bold'>
                            {inView && <CountUp start={0} end={200} delay={0.3} suffix='+' duration={5} />}
                            <p className='lg:text-lg max-lg:text-sm'>Clients</p>
                        </div>
                        <div className='flex flex-col items-center lg:text-4xl max-lg:text-2xl mt-1 font-bold'>
                            {inView && <CountUp start={0} end={50} delay={0.3} suffix='+' duration={5} />}
                            <p className='lg:text-lg max-lg:text-sm'>Awards</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.7,
                        ease: "easeOut",
                        delay: 0.2,
                    }}
                    viewport={{ once: false, amount: 0.3 }} className='w-full lg:w-[50%]'>
                    <img src="/weare.jpeg" alt="Who we are" className='w-full h-full rounded-4xl object-cover' />
                </motion.div>
            </div>
        </div>
    )
}

export default WhoWeAre;
