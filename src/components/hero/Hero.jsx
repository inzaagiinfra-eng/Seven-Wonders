import React from "react";
import { motion } from "framer-motion"


const Hero = () => {
  return (

    <section className="w-full  app-container">


      <div className="bg-linear-to-r from-blue-100 via-blue-50 to-orange-200 px-8 rounded-4xl flex items-center justify-between max-lg:flex-col  lg:min-h-[60vh] max-lg:min-h-[80vh]">
        <motion.div initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          viewport={{ once: false, amount: 0.3 }} className="text-center  lg:text-left max-w-xl px-6">
            <p className="text-sm font-semibold lg:text-lg max-lg:text-md">welcome allstate</p>
          <h1 className="text-black text-5xl md:text-6xl font-bold mb-4">
            Manage your Property
          </h1>

          <p className="text-black max-lg:text-md lg:text-lg font-semibold">
           You Will have everything nearby supermarkets, buses, stations, cinemas, theatres, the Carmen neighbourbood, etc.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start gap-4">
            <button className="bg-black text-white px-6 py-2 rounded-4xl font-semibold hover:scale-105 transition">
              Get Started
            </button>

            <button className="border border-white text-white px-6 py-2 rounded-4xl hover:bg-white hover:text-black transition">
              Learn More
            </button>
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
