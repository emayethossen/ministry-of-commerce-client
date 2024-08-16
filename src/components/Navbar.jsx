import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">
          <a to="/">Ministry of Commerce</a>
        </h1>
        <ul className="flex space-x-6 text-white">
          <li>
            <a to="/">Home</a>
          </li>
          <li>
            <a to="/about">About Us</a>
          </li>
          <li>
            <a to="/services">Services</a>
          </li>
          <li>
            <a to="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
