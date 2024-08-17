import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between mb-8">
          {/* Links */}
          <div className="flex flex-col md:flex-row md:space-x-8 mb-6 md:mb-0">
            <a href="/privacy-policy" className="hover:text-white mb-2 md:mb-0">Privacy Policy</a>
            <a href="/site-map" className="hover:text-white mb-2 md:mb-0">Site Map</a>
            <a href="/contact" className="hover:text-white mb-2 md:mb-0">Contact</a>
            <a href="/guideline" className="hover:text-white mb-2 md:mb-0">Guideline</a>
            <a href="/faq" className="hover:text-white">FAQ</a>
          </div>
          
          {/* Social Icons */}
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="https://facebook.com" aria-label="Facebook" className="text-[#1877F2] hover:text-white">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        {/* Site Info */}
        <div className="text-center text-sm">
          <p className="mb-2">Site was last updated: 2024-08-17 10:31:55</p>
          <p className="mb-2">
            Planning and Implementation: Cabinet Division, a2i, BCC, DOICT, BASIS.
          </p>
          <p>
            Technical Support: np-logo-set
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
