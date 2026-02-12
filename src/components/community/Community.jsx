import React from "react";
import {
  FaMapMarkerAlt,
  FaHome,
  FaSchool,
  FaHospital,
  FaShoppingCart,
  FaTree,
  FaShieldAlt,
  FaRoad,
} from "react-icons/fa";

const communityData = [
  {
    id: 1,
    name: "Whitefield",
    city: "Bangalore",
    image:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716",
    description:
      "Whitefield is one of Bangalore’s most prominent residential and IT hubs, known for premium housing, IT parks, and excellent infrastructure.",
    priceRange: "₹65 Lac – ₹3.5 Cr",
    propertyTypes: ["Apartments", "Villas", "Plots", "Commercial Spaces"],
    connectivity: [
      "ITPL – 5 mins",
      "Outer Ring Road – 15 mins",
      "Metro Line – Operational",
      "Airport – 50 mins",
    ],
    amenities: {
      schools: [
        "Delhi Public School",
        "Ryan International School",
        "Vibgyor High",
      ],
      hospitals: [
        "Manipal Hospital",
        "Columbia Asia",
        "Sakra World Hospital",
      ],
      shopping: [
        "Phoenix Marketcity",
        "Forum Neighbourhood Mall",
        "VR Bengaluru",
      ],
      parks: ["Inner Circle Park", "ITPL Greens"],
    },
    lifestyle: {
      safety: "High",
      crowd: "IT Professionals & Families",
      rentalDemand: "Very High",
    },
    marketTrends: {
      appreciation: "8–10% annually",
      avgRent: "₹35,000 – ₹75,000",
      demandType: "Buy & Rent",
    },
    projects: [
      "Prestige Shantiniketan",
      "Sobha Dream Acres",
      "Brigade Woods",
    ],
  },

  {
    id: 2,
    name: "Gurgaon Sector 57",
    city: "Gurgaon",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    description:
      "Sector 57 is a premium residential zone in Gurgaon offering luxury apartments, smooth connectivity, and modern lifestyle.",
    priceRange: "₹90 Lac – ₹5 Cr",
    propertyTypes: ["Luxury Apartments", "Builder Floors", "Penthouses"],
    connectivity: [
      "Golf Course Road – 5 mins",
      "NH-48 – 10 mins",
      "Rapid Metro – 12 mins",
      "IGI Airport – 30 mins",
    ],
    amenities: {
      schools: [
        "The Heritage School",
        "Scottish High International",
      ],
      hospitals: [
        "Artemis Hospital",
        "Fortis Memorial Research",
      ],
      shopping: [
        "South Point Mall",
        "Good Earth City Centre",
      ],
      parks: ["Tau Devi Lal Park"],
    },
    lifestyle: {
      safety: "High",
      crowd: "Business Class & Professionals",
      rentalDemand: "High",
    },
    marketTrends: {
      appreciation: "7–9% annually",
      avgRent: "₹45,000 – ₹1.2 Lac",
      demandType: "Luxury Buyers",
    },
    projects: [
      "Emaar Emerald Hills",
      "Ireo The Grand Arch",
      "BPTP Freedom Park",
    ],
  },
];

const Community = () => {
  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-red-600">
            Explore Popular Communities
          </h2>
          <p className="text-black mt-3 max-w-3xl mx-auto">
            Discover the best neighborhoods with detailed insights on lifestyle,
            pricing, amenities, and investment potential.
          </p>
        </div>

        {/* Community Cards */}
        <div className="space-y-16">
          {communityData.map((community) => (
            <div
              key={community.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
            >
              {/* Image */}
              <img
                src={community.image}
                alt={community.name}
                className="w-full h-80 object-cover"
              />

              {/* Content */}
              <div className="p-8">
                <h3 className="text-3xl font-bold text-red-600">
                  {community.name}, {community.city}
                </h3>

                <p className="mt-3 text-gray-600">
                  {community.description}
                </p>

                {/* Price & Type */}
                <div className="mt-6 grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold text-gray-700">
                      Price Range
                    </p>
                    <p className="text-red-600 font-bold">
                      {community.priceRange}
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-700">
                      Property Types
                    </p>
                    <p className="text-gray-600">
                      {community.propertyTypes.join(", ")}
                    </p>
                  </div>
                </div>

                {/* Connectivity */}
                <div className="mt-6">
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <FaRoad /> Connectivity
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2 text-gray-600">
                    {community.connectivity.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>

                {/* Amenities */}
                <div className="mt-8 grid md:grid-cols-4 gap-6 text-sm">
                  <div>
                    <h5 className="font-semibold flex gap-2 items-center">
                      <FaSchool /> Schools
                    </h5>
                    {community.amenities.schools.map((s, i) => (
                      <p key={i}>{s}</p>
                    ))}
                  </div>

                  <div>
                    <h5 className="font-semibold flex gap-2 items-center">
                      <FaHospital /> Hospitals
                    </h5>
                    {community.amenities.hospitals.map((h, i) => (
                      <p key={i}>{h}</p>
                    ))}
                  </div>

                  <div>
                    <h5 className="font-semibold flex gap-2 items-center">
                      <FaShoppingCart /> Shopping
                    </h5>
                    {community.amenities.shopping.map((m, i) => (
                      <p key={i}>{m}</p>
                    ))}
                  </div>

                  <div>
                    <h5 className="font-semibold flex gap-2 items-center">
                      <FaTree /> Parks
                    </h5>
                    {community.amenities.parks.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>

                {/* Lifestyle & Market */}
                <div className="mt-8 grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg flex gap-2 items-center">
                      <FaShieldAlt /> Lifestyle & Safety
                    </h4>
                    <p>Safety: {community.lifestyle.safety}</p>
                    <p>Crowd: {community.lifestyle.crowd}</p>
                    <p>Rental Demand: {community.lifestyle.rentalDemand}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg">
                      Market Trends
                    </h4>
                    <p>Appreciation: {community.marketTrends.appreciation}</p>
                    <p>Avg Rent: {community.marketTrends.avgRent}</p>
                    <p>Demand: {community.marketTrends.demandType}</p>
                  </div>
                </div>

                {/* Projects */}
                <div className="mt-8">
                  <h4 className="font-semibold text-lg flex gap-2 items-center">
                    <FaHome /> Popular Projects
                  </h4>
                  <div className="flex flex-wrap gap-3 mt-2">
                    {community.projects.map((project, i) => (
                      <span
                        key={i}
                        className="px-4 py-1 bg-red-100 text-red-700 rounded-full text-sm"
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button className="mt-8 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                  View Properties in {community.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
