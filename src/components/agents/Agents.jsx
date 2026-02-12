import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const agentsData = [
  {
    id: 1,
    name: "Amit Sharma",
    role: "Senior Property Consultant",
    experience: "8+ Years",
    phone: "+91 98765 43210",
    email: "amit.sharma@realestate.com",
    location: "Delhi NCR",
    properties: 120,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Neha Verma",
    role: "Luxury Real Estate Agent",
    experience: "6+ Years",
    phone: "+91 98765 12345",
    email: "neha.verma@realestate.com",
    location: "Mumbai",
    properties: 95,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Rohit Mehta",
    role: "Commercial Property Expert",
    experience: "10+ Years",
    phone: "+91 91234 56789",
    email: "rohit.mehta@realestate.com",
    location: "Bangalore",
    properties: 160,
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    id: 4,
    name: "Priya Singh",
    role: "Residential Sales Manager",
    experience: "5+ Years",
    phone: "+91 99887 66554",
    email: "priya.singh@realestate.com",
    location: "Pune",
    properties: 80,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Agents = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-red text-red-600">
            Meet Our Property Experts
          </h2>
          <p className="text-black mt-3">
            Our professional agents are here to help you buy, sell, or rent your
            dream property.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {agentsData.map((agent) => (
            <div
              key={agent.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              {/* Image */}
              <img
                src={agent.image}
                alt={agent.name}
                className="w-full h-60 object-cover"
              />

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-red-600">
                  {agent.name}
                </h3>
                <p className="text-grey-600 text-sm">{agent.role}</p>

                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <p className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-red-600" />
                    {agent.location}
                  </p>
                  <p>Experience: {agent.experience}</p>
                  <p>Properties: {agent.properties}+</p>
                </div>

                {/* Contact */}
                <div className="mt-5 space-y-2">
                  <p className="flex items-center gap-2 text-sm">
                    <FaPhoneAlt className="text-red-600" />
                    {agent.phone}
                  </p>
                  <p className="flex items-center gap-2 text-sm">
                    <FaEnvelope className="text-red-500" />
                    {agent.email}
                  </p>
                </div>

                <button className="mt-5 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
                  Contact Agent
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agents;
