import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStickyNote } from '@fortawesome/free-solid-svg-icons';

const notices = [
  "Notice about Trade License Renewal for 2024",
  "New Guidelines for Importers Effective September 1st",
  "Commerce Ministry Hosts Workshop on Export Procedures",
  "Amendments to the Trade Policy 2024 Announced",
  "Notice on Digital Services for Exporters",
  "Important: Changes in Import Tariffs Starting Next Month",
];

const NoticePage = () => {
  return (
    <div className="md:mb-8 mb-4 p-6 shadow-lg rounded-lg">
      <div className='flex mb-6 justify-between items-center'>
        <h2 className="text-xl w-3/4 md:text-2xl font-bold"><span className='text-blue-500'>Ministry</span> of Commerce Noticeboard</h2>
        <div className="">
          <button
            className="text-white bg-blue-500 hover:bg-blue-700 font-semibold py-2 px-4 rounded"
          >
            See All
          </button>
        </div>
      </div>
      <ul className="space-y-2">
        {notices.map((notice, index) => (
          <li key={index} className="flex items-center bg-blue-50 p-2 md:p-4 rounded-md shadow-lg hover:underline font-semibold hover:bg-blue-100 transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faStickyNote} className="text-blue-600 mr-3" />
            <span className="text-gray-800">{notice}</span>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default NoticePage;
