import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

const importantLinks = [
    { name: 'JDS Program', link: '#' },
    { name: 'Bangladesh Customs', link: '#' },
    { name: 'Ministry of Public Administration', link: '#' },
    { name: 'Prime Minister\'s Office', link: '#' },
    { name: 'President\'s Office (Bangabhaban)', link: '#' },
    { name: 'National Web Portal', link: '#' },
    { name: 'Cabinet Division', link: '#' },
];

const ImportantLinksList = () => {
    return (
        <div className="max-w-2xl mx-auto my-2 bg-[#EFF6FF] hover:bg-[#FEF2F2] rounded-lg shadow-md">
            <h1 className="text-2xl rounded-lg bg-green-500 text-center p-4 font-bold text-white">Important Links</h1>
            <ul className="space-y-2 p-6">
                {importantLinks.map((link, index) => (
                    <li key={index} className="flex items-center">
                        <FontAwesomeIcon icon={faCheckSquare} className="text-green-500 mr-2" />
                        <a
                            href={link.link}
                            className="text-black font-medium hover:underline"
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ImportantLinksList;
