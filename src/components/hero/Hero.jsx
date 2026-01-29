import React from "react";
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Hero = () => {
  return (

    <section className="w-full app-container">


      <div className="   bg-linear-to-r from-blue-100 via-blue-50 to-orange-200 px-8 lg:py-6 max-lg:py-4 rounded-4xl flex items-center justify-between max-lg:flex-col  lg:min-h-[60vh] max-lg:min-h-[80vh]">


        <motion.div initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          viewport={{ once: false, amount: 0.3 }} className="text-center max-lg:mt-8 lg:text-left max-w-xl px-6">
          <p className="text-sm font-semibold lg:text-lg max-lg:text-md">Welcome to Seven Wonders</p>
          <h1 className="text-black text-5xl md:text-6xl font-bold mb-4">
            Find the Right Property <br /> At the Right Price
          </h1>

          <p className="text-black max-lg:text-md lg:text-lg font-semibold">
            Seven Wonders helps you find the best properties for buying, selling, or renting.
            Trusted listings, expert support, and the right home—made simple.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start gap-4">
            <Link to="/contact-us" className="bg-black text-white px-6 py-2 rounded-4xl font-semibold hover:scale-105 transition">
              Get Started
            </Link>

            <Link to="/about-us" className="border border-white text-white px-6 py-2 rounded-4xl hover:bg-white hover:text-black transition">
              Learn More
            </Link>
          </div>
        </motion.div>


        <motion.div initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
            delay: 0.2,
          }}
          viewport={{ once: false, amount: 0.3 }} className="mt-10 lg:mt-0 px-6 max-lg:mb-8">
          <img
            src="/home1.png"
            alt="hero-img"
            className="w-450 max-lg:w-300"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
