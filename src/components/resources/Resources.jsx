import React from "react";
import { FaHome, FaCalculator, FaBook, FaQuestionCircle } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <section className="w-full app-container py-16">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h1 className="text-4xl font-bold mb-4">
          Real Estate Resources
        </h1>
        <p className="text-gray-600 text-lg">
          Helpful guides, tools, and insights to make smarter property decisions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <FaHome className="text-4xl text-amber-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Buying Guide</h2>
          <p className="text-gray-600 mb-4">
            Step-by-step guide to help you purchase residential or commercial
            property with confidence.
          </p>
          <Link
            to="/resources/buying-guide"
            className="text-amber-700 font-medium hover:underline"
          >
            Learn More →
          </Link>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <FaBook className="text-4xl text-amber-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Selling Guide</h2>
          <p className="text-gray-600 mb-4">
            Understand pricing strategies, documentation, and marketing tips
            to sell faster.
          </p>
          <Link
            to="/resources/selling-guide"
            className="text-amber-700 font-medium hover:underline"
          >
            Learn More →
          </Link>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <FaCalculator className="text-4xl text-amber-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Property Calculator</h2>
          <p className="text-gray-600 mb-4">
            Estimate EMI, affordability, and returns before making an
            investment.
          </p>
          <Link
            to="/resources/calculator"
            className="text-amber-700 font-medium hover:underline"
          >
            Use Calculator →
          </Link>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <FaQuestionCircle className="text-4xl text-amber-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">FAQs</h2>
          <p className="text-gray-600 mb-4">
            Answers to common questions about buying, selling, renting,
            and investing.
          </p>
          <Link
            to="/resources/faqs"
            className="text-amber-700 font-medium hover:underline"
          >
            View FAQs →
          </Link>
        </div>
      </div>

      <div className="mt-20 bg-gray-50 rounded-3xl p-10">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Market Insights & Locality Guides
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow">
            <MdLocationOn className="text-3xl text-amber-600 mb-3" />
            <h3 className="text-xl font-semibold mb-2">
              City & Locality Guides
            </h3>
            <p className="text-gray-600">
              Explore detailed information about popular localities,
              infrastructure, pricing trends, and future growth prospects.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <FaBook className="text-3xl text-amber-600 mb-3" />
            <h3 className="text-xl font-semibold mb-2">
              Real Estate Blogs & News
            </h3>
            <p className="text-gray-600">
              Stay updated with the latest property news, government policies,
              and expert investment advice.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Need Expert Guidance?
        </h2>
        <p className="text-gray-600 mb-6">
          Our real estate professionals are here to help you at every step.
        </p>
        <Link
          to="/contact-us"
          className="inline-block bg-amber-700 text-white px-8 py-3 rounded-full hover:bg-amber-800 transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default Resources;
