import React from "react";
import { useForm } from "react-hook-form";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser"

const ContactUs = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        emailjs
            .send(
                "service_8a5h8bq",
                "template_078q0hv",
                {
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    message: data.message,
                },
                "FdeJLhJ7IBSpFDl-Y"
            )
            .then(
                () => {
                    toast.success("Email sent successfully ✅");
                },
                () => {
                    toast.error("Failed to send email ❌");
                }
            );
    };


    return (
        <div className="app-container">
            <div className="lg:mt-12">
                <div>
                    <img src="/anthorimages/contectus.png" alt="contectus" />
                </div>

                <div className="flex max-lg:flex-col justify-center gap-16 items-start">
                    <div className=" max-lg:w-full p-6 lg:w-[60%]">
                        <div className="gap-2 mb-4 flex flex-col text-gray-600 text-sm">
                            <p>Have a question or comment?</p>
                            <p>
                                Use the form below to send us a message or contact us by mail
                                at:
                            </p>
                        </div>

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="  rounded-2xl  space-y-5"
                        >
                            <div>
                                <label className="block mb-2 font-medium">Name</label>
                                <input
                                    type="text"
                                    {...register("name", { required: "Name is required" })}
                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your name"
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm">{errors.name.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="block mb-2 font-medium">Phone</label>
                                <input
                                    type="tel"
                                    maxLength={10}
                                    onInput={(e) => {
                                        e.target.value = e.target.value.replace(/[^0-9]/g, "");
                                    }}
                                    {...register("phone", {
                                        required: "Phone is required",
                                        pattern: {
                                            value: /^[0-9]{10}$/,
                                            message: "Phone number must be exactly 10 digits",
                                        },
                                    })}
                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your 10-digit phone number"
                                />
                                {errors.phone && (
                                    <p className="text-red-500 text-sm">{errors.phone.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="block mb-2 font-medium">Email</label>
                                <input
                                    type="email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^\S+@\S+$/i,
                                            message: "Invalid email",
                                        },
                                    })}
                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your email"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="block mb-2 font-medium">Comment</label>
                                <textarea
                                    {...register("message", { required: "Comment is required" })}
                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    rows="4"
                                    placeholder="Write your message..."
                                ></textarea>
                                {errors.message && (
                                    <p className="text-red-500 text-sm">
                                        {errors.message.message}
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className=" bg-amber-950 font-bold text-white py-3 px-25 rounded-lg hover:bg-amber-900 transition"
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                    <div className="flex max-lg:w-full lg:w-[40%]">
                        <section className=" p-6 rounded-2xl">
                            <h2 className="text-3xl text-amber-950 font-bold mb-12 text-center">
                                Get In Touch!
                            </h2>
                            <p className="text-center mb-8 text-gray-700">
                                We'd love to hear from you - please use the form to send us your
                                message or ideas. Or simply pop in for a cup of fresh tea and a
                                cookie:
                            </p>

                            <div className="space-y-4 text-gray-700 text-md">
                                <p className="flex items-center gap-2">
                                    <FaPhoneAlt className="text-amber-950 text-2xl" /> +91
                                    8076310637
                                </p>

                                <p className="flex items-center gap-2">
                                    <FaEnvelope className="text-amber-950 text-2xl" />{" "}
                                    enzawood9761@gmail.com
                                </p>

                                <p className="flex items-start gap-2">
                                    <FaMapMarkerAlt className="text-amber-950 mt-1 text-2xl" />
                                    Building No.362, Sushant Lok-1,
                                    Sector-43, Gurugram, Haryana
                                </p>
                                <div className="border-b border-gray-400"></div>

                                <div className="flex items-start gap-2">
                                    <FaClock className="text-amber-950 mt-1 text-2xl" />
                                    <div>
                                        <p className="font-medium">Opening Hours:</p>
                                        <p>MON to SAT: 9:00AM - 10:00PM</p>
                                        <p>SUN: 10:00AM - 6:00PM</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;