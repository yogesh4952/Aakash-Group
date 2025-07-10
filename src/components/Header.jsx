import React, { useState } from 'react';
import { IoIosMenu } from 'react-icons/io';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='sticky top-0 right-0 w-full px-4 py-5 shadow-lg flex justify-between items-center bg-[#fdfdfd] z-50'>
      {/* Logo */}
      <h1 className='text-xl font-bold'>{'<Tech Lab/>'}</h1>

      {/* Desktop menu */}
      <div className='hidden sm:flex gap-4'>
        <p className='hover:text-[#870c15] cursor-pointer transition-colors'>
          Home
        </p>{' '}
        <p className='hover:text-[#870c15] cursor-pointer transition-colors'>
          About Us
        </p>
        <p className='hover:text-[#870c15] cursor-pointer transition-colors'>
          Our Team
        </p>
        <p className='hover:text-[#870c15] cursor-pointer transition-colors'>
          Contact Us
        </p>
      </div>

      {/* Mobile menu icon */}
      <div
        className='block sm:hidden cursor-pointer z-50'
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label='Toggle mobile menu'
      >
        <IoIosMenu size={28} />
      </div>

      <div
        className={`fixed top-0 right-0 h-screen w-52 bg-white shadow-md transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='p-4 flex flex-col gap-4 mt-7'>
          <a
            href='#home'
            className='hover:text-[#870c15] cursor-pointer transition-colors'
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href='#about-us'
            className='hover:text-[#870c15] cursor-pointer transition-colors'
            onClick={() => setIsOpen(false)}
          >
            About Us
          </a>
          <a
            href='#our-team'
            className='hover:text-[#870c15] cursor-pointer transition-colors'
            onClick={() => setIsOpen(false)}
          >
            Our Team
          </a>
          <a
            href='#contact-us'
            className='hover:text-[#870c15] cursor-pointer transition-colors'
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
