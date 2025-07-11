import React from 'react';
import { toast } from 'react-toastify';

const Hero = () => {
  const handleClickButton = () => {
    toast.success('Clicked');
  };

  const boxData = [
    {
      image: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='lucide lucide-zap h-12 w-12 text-yellow-400 mx-auto mb-4'
        >
          <polygon points='13 2 3 14 12 14 11 22 21 10 12 10 13 2'></polygon>
        </svg>
      ),
      heading: 'Fast Performance',
      paragraph: 'Lightning-fast applications built with modern frameworks',
    },
    {
      image: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='lucide lucide-shield h-12 w-12 text-green-400 mx-auto mb-4'
        >
          <path d='M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z'></path>
        </svg>
      ),
      heading: 'Secure & Reliable',
      paragraph: 'Enterprise-grade security and reliability you can trust',
    },
    {
      image: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='lucide lucide-globe h-12 w-12 text-blue-400 mx-auto mb-4'
        >
          <circle cx='12' cy='12' r='10'></circle>
          <path d='M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20'></path>
          <path d='M2 12h20'></path>
        </svg>
      ),
      heading: 'Global Reach',
      paragraph: 'Scalable solutions that work worldwide',
    },
  ];
  return (
    <div
      id='home'
      className='px-4 py2
       bg-hero min-h-[90vh]  text-white text-center  overflow-hidden  items-center '
    >
      <div className='mt-24'>
        <div>
          <h1 className='text-4xl font-bold'>Build the Future with </h1>
          <h1 className='text-4xl font-bold mt-2 text-yellow-400'>Tech Lab</h1>
          <p className='text-justify sm:w-xl mt-4 text-gray-200 mx-auto w-xs wrap-break-word'>
            We create innovative digital solutions that transform businesses and
            drive growth. Experience the power of modern technology with our
            expert team.
          </p>
        </div>

        <div className='space-x-5 mt-10'>
          <button
            onClick={() => handleClickButton()}
            className='cursor-pointer px-4 py-2 rounded border border-gray-200 bg-white text-black'
          >
            Get Started
          </button>
          <button
            onClick={() => handleClickButton()}
            className='cursor-pointer px-4 py-2 border  rounded'
          >
            {' '}
            Learn More
          </button>
        </div>

        <div className='grid grid-cols-1 w-[80%] sm:grid-cols-2  md:grid-cols-3 mx-auto md:w-[55%] gap-4 mt-10'>
          {boxData.map((elem, index) => (
            <div
              key={index}
              className='border border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-md shadow-md rounded-xl px-4 py-6 text-white'
            >
              <div className='mb-'>{elem.image}</div>
              <h1 className='font-bold text-lg mb-1'>{elem.heading}</h1>
              <p className='text-sm text-gray-300'>{elem.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
