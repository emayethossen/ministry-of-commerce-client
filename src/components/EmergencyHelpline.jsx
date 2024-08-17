import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const helplines = [
    { service: 'দুদক', number: '১০৬' },
    { service: 'জরুরি সেবা', number: '৯৯৯' },
    { service: 'নাগরিক সেবা', number: '৩৩৩' },
    { service: 'শিশু সহায়তা', number: '১০৯৮' },
    { service: 'নারী ও শিশু নির্যাতন প্রতিরোধে', number: '১০৯' },
];

const EmergencyHelpline = () => {
    return (
        <div className="max-w-lg mx-auto my-2 bg-[#EFF6FF] hover:bg-[#FEF2F2] rounded-lg shadow-md">
            <h1 className="text-2xl rounded-lg bg-green-500 py-4 text-center font-bold text-white">Emergency Hotline</h1>
            <ul className="space-y-4 p-6">
                {helplines.map((helpline, index) => (
                    <li key={index} className="flex items-center justify-between">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faPhoneAlt} className="text-green-500 mr-3" />
                            <span className="text-black font-medium">{helpline.service}</span>
                        </div>
                        <span className="text-black font-bold">{helpline.number}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmergencyHelpline;
