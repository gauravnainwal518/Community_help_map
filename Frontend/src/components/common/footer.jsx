import React from "react";

const Footer = () => (
  <footer className="bg-gray-50 text-gray-500 py-6 mt-16">
    <div className="container mx-auto text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Community Help Map. All rights
        reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
