import React from "react";
import { Link } from "react-router-dom";

import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Textarea from "../../components/common/Textarea";

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
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/browse">
            <Button label="📍 Find Help Near You" />
          </Link>
          <Link to="/offer">
            <Button label="🤝 Offer Your Help" variant="secondary" />
          </Link>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-10 px-6 md:px-20 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Search for Help</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <Input placeholder="Search category (e.g., food, shelter)" />
            <Input placeholder="Enter location" />
            <Button label="Search" />
          </div>
          <div className="mt-6">
            <div className="bg-gray-200 h-56 rounded-lg flex items-center justify-center text-gray-500">
              🗺️ Mini Map Snapshot
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
              step: "🧭",
              title: "Browse Help Requests",
              desc: "See who needs help in your local area.",
            },
            {
              step: "💬",
              title: "Chat & Connect",
              desc: "Secure messaging with verified users.",
            },
            {
              step: "🤝",
              title: "Help or Get Help",
              desc: "Support or receive support quickly.",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-100 p-6 rounded-lg shadow">
              <div className="text-4xl mb-3">{item.step}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          Help Categories
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            ["🩺", "Medical"],
            ["🍽️", "Food"],
            ["🏠", "Shelter"],
            ["🎓", "Education"],
            ["🧹", "Community Support"],
            ["🛍️", "Supplies"],
          ].map(([icon, label], idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center"
            >
              <div className="text-3xl mb-2">{icon}</div>
              <p className="font-medium text-lg">{label}</p>
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
        <Link to="/signup">
          <Button label="Sign Up Now" />
        </Link>
      </section>
    </div>
  );
};

export default Home;
