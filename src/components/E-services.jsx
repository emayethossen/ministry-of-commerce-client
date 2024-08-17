import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

const eServices = [
    { name: 'Internal eServices', link: '#' },
    { name: 'Bangladesh Trade Portal', link: '#' },
    { name: 'Integrated Digital Service Delivery Platform', link: '#' },
    { name: 'Web Mail', link: '#' },
    { name: 'List of approved DBIDs', link: '#' },
    { name: 'Store Management and e-Requisition', link: '#' },
    { name: 'Regional and bilateral trade agreements', link: '#' },
];

const EServicesList = () => {
    return (
        <div className="max-w-2xl mx-auto my-2  bg-[#EFF6FF] hover:bg-[#FEF2F2] rounded-lg shadow-md">
            <h1 className="text-2xl rounded-lg bg-blue-500 text-center p-4 font-bold text-white">E-Services</h1>
            <ul className="space-y-2 p-6">
                {eServices.map((service, index) => (
                    <li key={index} className="flex items-center">
                        <FontAwesomeIcon icon={faCheckSquare} className="text-blue-500 mr-2" />
                        <a
                            href={service.link}
                            className="text-black hover:underline"
                        >
                            {service.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EServicesList;
