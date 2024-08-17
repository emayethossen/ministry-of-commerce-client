import { faCheck, faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Card = ({ title, logo, items, bgColor }) => {
  return (
    <div
      className="max-w-sm mx-auto w-[280px] rounded-lg shadow-lg overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <div className="p-4">
        <img src={logo} alt={`${title} Logo`} className="h-16 mx-auto" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{title}</h3>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index}>
              <FontAwesomeIcon icon={faLink} className="mr-2 text-blue-500" />
              <span className="font-semibold">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
