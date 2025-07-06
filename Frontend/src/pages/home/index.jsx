import React from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaHandsHelping,
  FaStethoscope,
  FaUtensils,
  FaHome,
  FaGraduationCap,
  FaBroom,
  FaShoppingBag,
} from "react-icons/fa";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { BsCompass } from "react-icons/bs";

const Home = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="py-16 px-6 md:px-20 bg-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Connect. Support. Empower.
        </h1>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          A platform to find and offer help in your local community.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/browse"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
          >
            <FaMapMarkerAlt /> Find Help Near You
          </Link>
          <Link
            to="/offer"
            className="bg-gray-200 text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-300 transition flex items-center gap-2"
          >
            <FaHandsHelping /> Offer Your Help
          </Link>
        </div>
      </section>

      {/* Search & Map Snapshot */}
      <section className="py-10 px-6 md:px-20 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Search for Help</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Search category (e.g., food, shelter)"
              className="border rounded px-4 py-2 w-full"
            />
            <input
              type="text"
              placeholder="Enter location"
              className="border rounded px-4 py-2 w-full"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Search
            </button>
          </div>
          <div className="mt-6">
            <div className="bg-gray-200 h-56 rounded-lg flex items-center justify-center text-gray-500 text-lg font-semibold">
              Map Snapshot Coming Soon
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: <BsCompass size={36} className="mx-auto mb-3" />,
              title: "Browse Help Requests",
              desc: "See who needs help in your local area.",
            },
            {
              icon: <HiOutlineChatAlt2 size={36} className="mx-auto mb-3" />,
              title: "Chat & Connect",
              desc: "Secure messaging with verified users.",
            },
            {
              icon: <FaHandsHelping size={36} className="mx-auto mb-3" />,
              title: "Help or Get Help",
              desc: "Support or receive support quickly.",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-100 p-6 rounded-lg shadow">
              {item.icon}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          Help Categories
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { icon: <FaStethoscope size={30} />, label: "Medical" },
            { icon: <FaUtensils size={30} />, label: "Food" },
            { icon: <FaHome size={30} />, label: "Shelter" },
            { icon: <FaGraduationCap size={30} />, label: "Education" },
            { icon: <FaBroom size={30} />, label: "Community Support" },
            { icon: <FaShoppingBag size={30} />, label: "Supplies" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center"
            >
              <div className="mb-2 text-blue-600">{item.icon}</div>
              <p className="font-medium text-lg">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Our Users Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            ["Ritu, Dehradun", "I found a blood donor in just 10 minutes!"],
            [
              "Rahul, Almora",
              "This app helped my grandparents during lockdown.",
            ],
          ].map(([name, feedback], idx) => (
            <div key={idx} className="bg-gray-100 p-6 rounded-lg shadow">
              <p className="italic mb-3">“{feedback}”</p>
              <p className="font-semibold text-right">– {name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-20 bg-blue-50 text-center">
        <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
        <p className="mb-6">
          Be a part of something meaningful. Help or get help today!
        </p>
        <Link
          to="/signup"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Sign Up Now
        </Link>
      </section>
    </div>
  );
};

export default Home;
