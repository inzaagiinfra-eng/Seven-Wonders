import React, { useState } from "react";
import { BiHomeCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { IoMailUnread } from "react-icons/io5";

const home = [
    { title: "Services", link: "/service" },
    { title: "Resources", link: "/resources" },
    { title: "Agents", link: "/agents" },
    { title: "Listings", link: "/projects" },
];

const company = [
    { title: "About Us", link: "/about-us" },
    { title: "Community", link: "/community" },
    { title: "Reviews", link: "/review" },
    { title: "FAQ", link: "/faq" },
];

const resources = [
    { title: "Press Info", link: "/press-info" },
    { title: "Customers", link: "/customers" },
    { title: "Service", link: "/service" },
    { title: "Blog", link: "/blog" },
];

const social = [
    { title: "Instagram", link: "https://www.instagram.com" },
    { title: "Facebook", link: "https://www.facebook.com" },
    { title: "Twitter", link: "https://twitter.com" },
    { title: "LinkedIn", link: "https://www.linkedin.com" },
];

const Footer = () => {
    const [open, setOpen] = useState(null);

    const sections = [
        { title: "Home", data: home },
        { title: "Company", data: company },
        { title: "Resources", data: resources },
        { title: "Social", data: social },
    ];

    return (
        <footer className="app-container py-10 lg:mt-40 max-lg:mt-18">
            <div className="flex max-lg:flex-col gap-10">


                <div className="lg:w-1/3 flex flex-col  ">
                    <h1 className="flex items-center gap-2 text-xl font-bold text-black">
                        <img src="/logo.png" alt="logo" className='max-md:w-20 md:w-30 ' />
                    </h1>
                    <div className="flex-col gap-2 flex">

                        <p className="text-sm flex items-center gap-2 text-black leading-relaxed">
                            <span><FaLocationDot size={20} />
                            </span>
                            <span>Building No.362, Sushant Lok-1,
                                Sector-43, Gurugram, Haryana</span>
                        </p>
                        <p className="text-sm flex items-center gap-2 text-black leading-relaxed">
                            <span><FaLocationDot size={20} />
                            </span>
                            <span>Building No.362, Sushant Lok-1,
                                Sector-43, Gurugram, Haryana</span>
                        </p>
                        <p className="text-sm flex items-center gap-2 text-black leading-relaxed">
                            <span><IoCallSharp size={20} />
                            </span>
                            <span>+91 8076310637</span>
                        </p>
                        <p className="text-sm flex items-center gap-2 text-black leading-relaxed">
                            <span><IoMailUnread  size={20} />
                            </span>
                            <span>sevenwonder234@gmail.com</span>
                        </p>
                    </div>
                </div>






                <div className="lg:w-2/3">
                    <div className="hidden lg:flex justify-between">
                        {sections.map((sec, i) => (
                            <div key={i} className="flex flex-col gap-6">
                                <h2 className="font-bold text-2xl text-black">
                                    {sec.title}
                                </h2>
                                {sec.data.map((item, idx) => (
                                    <Link
                                        key={idx}
                                        to={item.link}
                                        className="text-md font-semibold text-gray-500 hover:text-black hover:underline"
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className="hidden md:flex lg:hidden justify-between">
                        {sections.map((sec, i) => (
                            <div key={i} className="flex flex-col gap-3">
                                <h2 className="font-semibold text-black">
                                    {sec.title}
                                </h2>
                                {sec.data.map((item, idx) => (
                                    <Link
                                        key={idx}
                                        to={item.link}
                                        className="text-sm text-black hover:underline"
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className="md:hidden flex flex-col gap-4">
                        {sections.map((sec, i) => (
                            <div key={i} className="border-b pb-2">
                                <button
                                    onClick={() => setOpen(open === i ? null : i)}
                                    className="flex justify-between w-full font-semibold text-black"
                                >
                                    {sec.title}
                                    <span>{open === i ? "−" : "+"}</span>
                                </button>

                                {open === i && (
                                    <div className="flex flex-col gap-2 mt-2">
                                        {sec.data.map((item, idx) => (
                                            <Link
                                                key={idx}
                                                to={item.link}
                                                className="text-sm text-black hover:underline"
                                            >
                                                {item.title}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="lg:border-t lg:mt-10 pt-6 lg:mb-16 max-lg:mb-8 text-center">
                <p className="text-xs text-gray-500">
                    © Copyright Seven Wonders
                </p>
            </div>
        </footer>
    );
};

export default Footer;
