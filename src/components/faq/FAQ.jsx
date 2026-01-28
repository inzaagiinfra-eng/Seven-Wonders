import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
const faq = [
  {
    title: "Q: How do I enquire about a property?",
    p: "You can enquire about any property by filling out the enquiry form available on our website or by directly contacting our property consultants via call or WhatsApp. Once we receive your enquiry, our team will get in touch with you to understand your requirements and share suitable property options, pricing details, and site visit availability.",
  },
  {
    title: "Q: How long does it take to schedule a site visit?",
    p: "Site visits are usually scheduled within 24 to 48 hours, subject to property availability and client convenience. In case of under-construction or gated projects, prior approval from the developer or seller may be required. Our team ensures smooth coordination and timely updates for every site visit.",
  },
  {
    title: "Q: Are there any consultation or site visit charges?",
    p: "No, our property consultation and site visits are completely free of charge. There are no hidden fees. However, any government charges, booking amount, stamp duty, registration fees, or developer-specific charges are payable as per applicable laws and project terms.",
  },
  {
    title: "Q: What documents should I verify before buying a property?",
    p: "Before purchasing a property, it is important to verify documents such as the title deed, sale agreement, approved building plans, RERA registration, completion/occupancy certificate (if applicable), and payment receipts. Our legal experts assist you throughout the documentation and verification process to ensure a safe and transparent transaction.",
  },
  {
    title: "Q: Will the property be exactly as shown during the site visit or on the website?",
    p: "While we strive to ensure complete transparency, minor variations in layout, furnishings, or finishes may occur depending on project stage and developer specifications. All structural details, carpet area, and amenities will strictly adhere to approved plans and agreements as per RERA guidelines.",
  },
  {
    title: "Q: What happens if there is a delay in possession?",
    p: "In case of possession delays, the terms mentioned in the agreement with the developer will apply. We proactively coordinate with developers to keep our clients informed about construction updates and revised timelines. Any compensation or penalty clauses will be as per the signed agreement and applicable regulations.",
  },
  {
    title: "Q: Do you assist with home loans and financing?",
    p: "Yes, we provide complete assistance for home loans and financing. Our team works with leading banks and financial institutions to help you get the best interest rates and smooth loan approvals. We also assist with documentation required for loan processing.",
  },
  {
    title: "Q: What support do you provide after property purchase?",
    p: "Our relationship doesn’t end after the sale. We offer post-purchase support including registration assistance, possession coordination, property handover, and guidance for resale, leasing, or property management services whenever required.",
  },
];


const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggleSection = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="responsive-container lg:mt-20 max-lg:mt-4  lg:px-24">
      <div>
        <div className="text-sm text-gray-600 mb-">
          <p>
            Below FAQ are some common concerns of our clients before purchasing
            the theme.
          </p>
          <p>
            If you have other questions, please just send it to{" "}
            <span className="underline cursor-pointer">
            sevanwonders9761@gmail.com
            </span>
            .
          </p>
        </div>
        <h1 className="lg:text-xl max-lg:text-md font-semibold lg:py-8 max-lg:py-4 underline underline-offset-4 decoration-2">
          FAQs
        </h1>
        <div className="">
          {faq.map((sec, i) => (
            <div
              key={i}
              className="border-b bg-gray-100 p-4 rounded-2xl hover:shadow-md border-gray-300 mb-2"
            >
              <button
                onClick={() => toggleSection(i)}
                className="flex justify-between w-full border-0 text-left text-black font-bold max-lg:text-sm lg:text-md"
              >
                {sec.title}
                <span className="cursor-pointer max-lg:text-md lg:text-2xl">
                  {open === i ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden mt-2"
                  >
                    <p className="lg:text-sm max-lg:text-[11px] text-gray-500">{sec.p}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <div className="flex lg:mb-30 max-lg:flex-col lg:pt-12 max-lg:pt-6 lg:justify-end max-lg:justify-center max-lg:items-center  gap-4">
          <p className="lg:text-sm max-lg:text-[11px]">Unable to find satisfactory answers ?</p>
          <Link to="/contact-us" className="bg-yellow-950 py-2 max-lg:text-sm px-12 lg:text-md font-semibold text-white"> CONTECT SUPPORT</Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;