import React from 'react';
import img1 from '../assets/yonus.jpg'
import img2 from '../assets/selim.jpg'

const PersonCard = ({ name, title, position, imageSrc }) => (
    <div className="bg-[#EFF6FF] hover:bg-[#FEF2F2] p-4 rounded-lg space-y-2 shadow-md overflow-hidden">
        <div className='mt-4 w-1/2 mx-auto'>
            <img className="w-full md:h-[120px] h-full rounded object-cover" src={imageSrc} alt={name} />
        </div>
        <div className="text-center">
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-black font-semibold">{title}</p>
            <p className="text-black font-semibold">{position}</p>
        </div>
        <div className='flex justify-center items-center'>
            <button class="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Details
            </button>
        </div>
    </div>
);

const HonorableAdvisers = () => {
    const advisers = [
        {
            name: 'Dr. Mohammad Yunus',
            title: 'Honorable Chief Adviser',
            position: 'Ministry of Commerce',
            imageSrc: 'https://i.ibb.co/2q7JDPy/yonus.jpg',
        },
        {
            name: 'Md. Selim Uddin',
            title: 'Secretary',
            position: 'Ministry of Commerce',
            imageSrc: 'https://i.ibb.co/kDdTfmp/selim.jpg',
        },
    ];

    return (
        <div className="grid grid-cols-1 gap-2">
            {advisers.map((adviser, index) => (
                <PersonCard
                    key={index}
                    name={adviser.name}
                    title={adviser.title}
                    position={adviser.position}
                    imageSrc={adviser.imageSrc}
                />
            ))}
        </div>
    );
};

export default HonorableAdvisers;
