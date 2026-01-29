import React, { useState } from 'react'
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser"


const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };
 

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_8a5h8bq",
               "template_078q0hv",
                e.target,
                "FdeJLhJ7IBSpFDl-Y"
            )
            .then(
                () => {
                    toast.success("Email sent successfully ✅");
                    setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        message: "",
                    });
                },
                () => {
                    toast.error("Failed to send email ❌");
                }
            );
    };



    return (
        <section className="w-full mt-10 app-container">
            <div className="  bg-linear-to-r from-blue-100 via-blue-50 to-orange-200  rounded-4xl flex items-center justify-between max-lg:flex-col  lg:min-h-[60vh] max-lg:min-h-[80vh]">


                <motion.div initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.7,
                        ease: "easeOut",
                    }}
                    viewport={{ once: false, amount: 0.3 }} className="text-center max-lg:mt-8 lg:text-left max-w-xl px-6 w-[50%] max-lg:w-full">
                    <form onSubmit={handleSubmit} className='flex flex-col bg-white rounded-4xl p-4 gap-4 w-full'>
                        <h1 className='lg:text-2xl font-bold'>Invest In Your Dreams</h1>
                        <p className='text-gray-500 text-sm'>Fill in the form to get in touch.</p>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="py-3 px-4 rounded-full border border-gray-200 focus:border-black focus:ring-0 outline-none transition placeholder:text-gray-400" />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="py-3 px-4 rounded-full border border-gray-200 focus:border-black focus:ring-0 outline-none transition placeholder:text-gray-400" />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Your Number"
                            value={formData.phone}
                            onChange={handleChange}
                            className="py-3 px-4 rounded-full border border-gray-200 focus:border-black focus:ring-0 outline-none transition placeholder:text-gray-400" />

                        <textarea
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            className="py-3 px-4 rounded-full border border-gray-200 focus:border-black focus:ring-0 outline-none transition placeholder:text-gray-400"
                        />

                        <button
                            type="submit"
                            className="border px-4 py-1 inline-flex items-center rounded-4xl w-fit self-center hover:bg-black hover:text-white cursor-pointer"
                        >
                            Submit
                        </button>


                    </form>
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
                        src="/bottomfooter.png"
                        alt="hero-img"
                        className="w-450 max-lg:w-300"
                    />
                </motion.div>

            </div>
        </section>
    )
}

export default Contact
