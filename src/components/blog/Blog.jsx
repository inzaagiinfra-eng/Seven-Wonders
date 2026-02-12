import React from "react";
import { FaUser, FaCalendarAlt, FaClock, FaTag } from "react-icons/fa";

const blogData = [
  {
    id: 1,
    title: "Top 10 Areas to Buy Property in Bangalore in 2025",
    slug: "top-areas-to-buy-property-bangalore",
    image:
      "data:image/jpeg;base64,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",
    description:
      "Planning to invest in Bangalore real estate? Here are the top 10 areas offering high appreciation, rental demand, and excellent infrastructure.",
    category: "Property Investment",
    author: "Amit Sharma",
    date: "12 Jan 2025",
    readTime: "6 min read",
  },
  {
    id: 2,
    title: "Home Loan Guide: Interest Rates, EMI & Eligibility",
    slug: "home-loan-guide-india",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcXtSRXXI3sUciMYM9-JtMsEVgIKE3WEgY4g&s",
    description:
      "Understand home loan interest rates, EMI calculation, eligibility criteria, and tips to get the best housing loan deal.",
    category: "Home Loan",
    author: "Neha Verma",
    date: "05 Jan 2025",
    readTime: "5 min read",
  },
  {
    id: 3,
    title: "Rent vs Buy: What is Better in 2025?",
    slug: "rent-vs-buy-india",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjn7mbWlHkzGfpy2lawCw1ugkHUo364wFJNg&s",
    description:
      "Confused between renting or buying a home? This blog compares costs, benefits, and long-term value to help you decide.",
    category: "Buying Guide",
    author: "Rohit Mehta",
    date: "28 Dec 2024",
    readTime: "4 min read",
  },
  {
    id: 4,
    title: "Luxury Real Estate Trends in India",
    slug: "luxury-real-estate-trends",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw9neS9VvDQQ8hBaFJH9Sb_7elN4VaJmaKtA&s",
    description:
      "Explore how luxury housing is evolving in India, including smart homes, gated communities, and premium amenities.",
    category: "Luxury Homes",
    author: "Priya Singh",
    date: "18 Dec 2024",
    readTime: "7 min read",
  },
];

const Blog = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-red-600">
            Real Estate Insights & Blogs
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Latest property news, buying guides, investment tips, and real
            estate trends curated by industry experts.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogData.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              {/* Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-cover"
              />

              {/* Content */}
              <div className="p-5">
                <span className="inline-flex items-center gap-2 text-xs text-red-600 font-medium">
                  <FaTag className="" /> {blog.category}
                </span>

                <h3 className="mt-3 text-lg font-semibold text-red-600 leading-snug">
                  {blog.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                  {blog.description}
                </p>

                {/* Meta Info */}
                <div className="mt-4 space-y-1 text-xs text-gray-500">
                  <p className="flex items-center gap-2">
                    <FaUser className="text-red-600" /> {blog.author}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaCalendarAlt className="text-red-600" /> {blog.date}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaClock className="text-red-600" /> {blog.readTime}
                  </p>
                </div>

                {/* CTA */}
                <button className="mt-4 w-full py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
