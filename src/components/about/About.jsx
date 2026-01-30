import React from 'react'

const About = () => {
    return (
        <div className='app-container'>
            <div>
                <img src="/anthorimages/about.webp" alt="" />
                <p className='text-center lg:text-md max-lg:text-sm lg:mt-12 max-lg:mt-6'>At <span className='font-semibold'>SEVEN WONDERS</span>, we are a trusted real estate company specializing in the sale, purchase, and rental of residential and commercial properties. Our goal is to make property transactions simple, transparent, and rewarding for our clients. Whether you are looking for a dream home, a profitable investment, or the perfect commercial space, we provide expert guidance and carefully selected properties to meet your needs. With a client-first approach and deep market knowledge, Seven Wonders is committed to helping you make confident real estate decisions.</p>

            </div>

            <div className='flex justify-center items-center max-lg:flex-col w-full lg:mt-26 max-lg:mt-12'>

                <div className='max-lg:w-full lg:w-[50%] '>
                    <img src="/anthorimages/journey.jpg" className='rounded-4xl' alt="journey" />
                </div>
                <div className='max-lg:w-full lg:w-[50%] max-lg:mt-8'>
                    <h1 className='lg:text-4xl max-lg:text-2xl font-bold lg:mb-4 '>OUR JOURNEY</h1>
                    <p className='lg:text-md max-lg:text-sm'>Founded with a strong vision and passion for real estate, Seven Wonders began its journey with the aim of delivering reliable and professional property solutions. Over the years, we have built a reputation for trust, integrity, and quality service across residential and commercial real estate. From buying and selling homes to renting offices, shops, cafés, hotels, and other commercial spaces, our experience spans diverse property needs. Today, our journey continues with a focus on long-term relationships, transparent dealings, and consistent client satisfaction.</p>
                </div>
            </div>
            <div className='flex justify-center items-center max-lg:flex-col w-full lg:mt-26 max-lg:mt-12 lg:gap-14'>

                <div className='max-lg:w-full lg:w-[50%] lg:hidden'>
                    <img src="/anthorimages/vison.jpg" className='rounded-4xl' alt="journey" />
                </div>
                <div className='max-lg:w-full lg:w-[50%] max-lg:mt-8'>
                    <h1 className='lg:text-4xl max-lg:text-2xl font-bold lg:mb-4 '>OUR VISION</h1>
                    <p>At Seven Wonders, our vision is to redefine the real estate experience by offering high-quality residential and commercial properties that add real value to our clients’ lives and investments. We aim to combine market expertise, ethical practices, and modern real estate solutions to create lasting opportunities. With a focus on sustainable growth, smart investments, and customer trust, Seven Wonders strives to become a preferred real estate partner for individuals, businesses, and investors alike.</p>
                </div>
                <div className='max-lg:w-full lg:w-[50%] max-lg:hidden '>
                    <img src="/anthorimages/vison.jpg" className='rounded-4xl' alt="journey" />
                </div>
            </div>

        </div>
    )
}

export default About
