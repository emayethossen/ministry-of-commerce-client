import React from 'react';
import { Carousel, Button } from 'antd';
import image1 from '../assets/img27.webp';
import image2 from '../assets/img22.webp';
import image3 from '../assets/img23.jpg';

const slides = [
  {
    image: image1,
    heading: 'Commerce Ministry Vision',
    description: 'Building a prosperous economy through strategic trade policies and global market integration.',
    buttons: [
      { label: 'Learn More', link: '/learn-more' },
      { label: 'Contact Us', link: '/contact' }
    ]
  },
  {
    image: image2,
    heading: 'History of Commerce Ministry',
    description: 'Tracing the development of commerce from its origins to modern-day advancements.',
    buttons: [
      { label: 'Explore History', link: '/history' },
      { label: 'Key Milestones', link: '/milestones' }
    ]
  },
  {
    image: image3,
    heading: 'Our Achievements',
    description: 'A testament to our commitment to economic excellence and innovation.',
    buttons: [
      { label: 'View Achievements', link: '/achievements' },
      { label: 'Awards & Recognition', link: '/awards' }
    ]
  }
];

const Slider = () => (
  <Carousel autoplay>
    {slides.map((slide, index) => (
      <div key={index} className="relative">
        <div className="relative w-full md:h-[500px] h-[300px]">
          <img 
            src={slide.image} 
            alt={slide.heading} 
            className="w-full h-full object-cover opacity-70" 
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-2">{slide.heading}</h2>
          <p className="text-base text-center md:text-lg mb-4">{slide.description}</p>
          <div className="flex gap-4">
            {slide.buttons.map((button, i) => (
              <Button key={i} type="primary" href={button.link}>
                {button.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    ))}
  </Carousel>
);

export default Slider;
