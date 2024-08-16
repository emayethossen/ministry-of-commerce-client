import React from 'react';
import { cardData } from '../assets/data';
import Card from './Card';

const backgroundColors = [
  "#E8EAF6",
  "#EFF6FF",
  "#FEF2F2",
  "#FEFCE8",
  "#E0F7FA",
  "#F3E5F5",
  "#FFF3E0",
  "#FFEBEE",
  "#E8F5E9",
  "#FFFDE7",
  "#F1F8E9",
  "#E0F2F1",
  "#FCE4EC",
  "#F3E5F5",
  "#FBE9E7",
  "#FFF8E1",
  "#EDE7F6",
  "#E1F5FE",
  "#F9FBE7",
  "#ECEFF1",
  "#F8BBD0"
];

const Cards = () => {
  return (
    <div>
      <h1 className='md:text-3xl text-xl font-bold text-center'>Ministry of Commerce Services</h1>
      <p className='w-3/4 mx-auto my-4 font-medium text-center'>The Ministry of Commerce provides trade facilitation, market regulation, policy development, and support services to enhance national economic growth and international trade.</p>
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cardData.map((data, index) => (
        <Card
          key={index}
          title={data.title}
          logo={data.logo}
          items={data.items}
          bgColor={backgroundColors[index % backgroundColors.length]}
        />
      ))}
    </div>
    </div>
  );
};

export default Cards;
