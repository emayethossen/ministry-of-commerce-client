import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

const innovation = [
    { name: 'Innovation Team', link: '#' },
    { name: 'Innovation Report', link: '#' },
    { name: 'Innovation Action Plan', link: '#' },
    { name: '4th Industrial Revolution', link: '#' },
];

const InnovationCorner = () => {
    return (
        <div className="max-w-2xl mx-auto my-2 bg-[#E1F5FE] hover:bg-[#FEF2F2] rounded-lg shadow-md">
            <h1 className="text-2xl rounded-lg bg-green-500 text-center py-4 px-2 font-bold text-white">Innovation Corner</h1>
            <ul className="space-y-2 p-6">
                {innovation.map((service, index) => (
                    <li key={index} className="flex items-center">
                        <FontAwesomeIcon icon={faCheckSquare} className="text-green-500 mr-2" />
                        <a
                            href={service.link}
                            className="text-black font-medium hover:underline"
                        >
                            {service.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InnovationCorner;
