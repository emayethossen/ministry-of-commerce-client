import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';

const newsTitles = [
    { title: "Ministry of Commerce Launches New Trade Initiative", endDate: "2024-08-30" },
    { title: "New Policy Reforms Announced by Ministry of Commerce", endDate: "2024-09-15" },
    { title: "Commerce Ministry Strengthens Ties with Neighboring Countries", endDate: "2024-09-01" },
    { title: "Digital Transformation in Commerce Sector Underway", endDate: "2024-08-25" },
    { title: "Minister of Commerce Discusses Export Strategies", endDate: "2024-09-10" },
    { title: "Commerce Ministry to Facilitate SME Growth", endDate: "2024-08-31" },
    { title: "Trade Agreement Signed with Major International Partner", endDate: "2024-09-20" },
    { title: "New E-commerce Regulations Released by Ministry", endDate: "2024-09-05" },
    { title: "Commerce Ministry Hosts International Trade Conference", endDate: "2024-09-18" },
    { title: "Government to Support Local Industries, Says Commerce Minister", endDate: "2024-08-28" },
];

const colors = [
    'text-blue-600',
    'text-green-600',
    'text-red-600',
    'text-yellow-600',
    'text-purple-600',
    'text-teal-600',
    'text-orange-600',
    'text-pink-600',
    'text-indigo-600',
    'text-gray-600',
];

const NewsTicker = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [show, setShow] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShow(false);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % newsTitles.length);
                setShow(true);
            }, 500);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="max-w-lg mx-auto md:mt-4 p-4 bg-white rounded-lg shadow-md">
            <div className='flex justify-between items-center'>
                <h2 className="text-xl font-bold text-center">Latest News</h2>
                <div className="flex justify-center items-center">
                    <button
                        className="text-white font-medium bg-blue-500 hover:bg-blue-700 font-semibold py-2 px-4 rounded"
                    >
                        See All
                    </button>
                </div>
            </div>
            <div className="h-12 flex items-center justify-center">
                <Transition
                    as="div"
                    show={show}
                    enter="transition-opacity duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    className={`font-medium text-center ${colors[currentIndex % colors.length]}`}
                >
                    <span>{newsTitles[currentIndex].title} ({newsTitles[currentIndex].endDate})</span>
                </Transition>
            </div>
        </div>
    );
};

export default NewsTicker;
