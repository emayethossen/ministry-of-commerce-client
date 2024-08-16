import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Ministry of Commerce. All rights reserved.</p>
        <ul className="flex space-x-4">
          <li>
            <a href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms-of-service" className="hover:text-gray-400">Terms of Service</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
