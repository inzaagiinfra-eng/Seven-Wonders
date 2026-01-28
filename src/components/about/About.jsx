import React from 'react'

const About = () => {
    return (
        <div className='app-container'>
            <div>
                <img src="/anthorimages/about.webp" alt="" />
                <p className='text-center lg:text-md max-lg:text-sm lg:mt-12 max-lg:mt-6'>At <span className='font-semibold'>SEVEN WONDERS</span>, we are your trusted destination for premium real estate solutions and property services. Our mission is to help you find the perfect home or investment by offering carefully curated properties along with exceptional service and expert guidance. From the moment you connect with us, you’ll experience our dedication to turning your real estate goals into reality—creating spaces that match your lifestyle, aspirations, and long-term vision.</p>

            </div>

            <div className='flex justify-center items-center max-lg:flex-col w-full lg:mt-26 max-lg:mt-12'>

                <div className='max-lg:w-full lg:w-[50%] '>
                    <img src="/anthorimages/journey.jpg" className='rounded-4xl' alt="journey" />
                </div>
                <div className='max-lg:w-full lg:w-[50%] max-lg:mt-8'>
                    <h1 className='lg:text-4xl max-lg:text-2xl font-bold lg:mb-4 '>OUR JOURNEY</h1>
                    <p className='lg:text-md max-lg:text-sm'>Founded with a passion for creating exceptional living spaces, SEVEN WONDERS, has grown into a trusted name in the real estate industry. Our journey began with a clear vision: to connect people with high-quality homes, commercial properties, and investment opportunities that suit every lifestyle and purpose. From residential homes and offices to retail spaces, cafés, hotels, and more, we take pride in delivering properties that meet the highest standards. Today, we are recognized for our commitment to excellence, transparency, and client satisfaction—always striving to exceed expectations.</p>
                </div>
            </div>
            <div className='flex justify-center items-center max-lg:flex-col w-full lg:mt-26 max-lg:mt-12 lg:gap-14'>

                <div className='max-lg:w-full lg:w-[50%] lg:hidden'>
                    <img src="/anthorimages/vison.jpg" className='rounded-4xl' alt="journey" />
                </div>
                <div className='max-lg:w-full lg:w-[50%] max-lg:mt-8'>
                    <h1 className='lg:text-4xl max-lg:text-2xl font-bold lg:mb-4 '>OUR VISION</h1>
                    <p>At Seven Wonders, we envision creating a harmonious blend of quality construction, sustainable development, and timeless architectural design. Rooted in strong values yet inspired by modern lifestyles, we aim to deliver premium residential and commercial spaces that transform the way people live, work, and invest. With a commitment to excellence, innovation, and responsible growth, Seven Wonders strives to redefine the real estate experience by offering spaces that reflect comfort, elegance, and long-term value. </p>
                </div>
                <div className='max-lg:w-full lg:w-[50%] max-lg:hidden '>
                    <img src="/anthorimages/vison.jpg" className='rounded-4xl' alt="journey" />
                </div>
            </div>

        </div>
    )
}

export default About
