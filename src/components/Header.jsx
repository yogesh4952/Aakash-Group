import React, { useState } from 'react';
import { IoIosMenu } from 'react-icons/io';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav
      id='our-team'
      className='fixed text-white top-0 right-0 w-full px-4 py-5 shadow-lg flex justify-between items-center backdrop-blur-md bg-black/30 border-b border-white/10   z-50'
    >
      {/* Logo */}
      <h1
        onClick={() => navigate('/')}
        className='text-2xl cursor-pointer  glow-text  font-bold'
      >
        {'<Tech Lab/>'}
      </h1>

      {/* Desktop menu */}
      <div className='hidden sm:flex gap-4 font-semibold'>
        <a href='#home' className=' cursor-pointer transition-colors'>
          Home
        </a>

        <a href='#about-us' className=' cursor-pointer transition-colors'>
          About Us
        </a>

        <a href='#team' className=' cursor-pointer transition-colors'>
          Our Team
        </a>

        <a href='#contact-us' className=' cursor-pointer transition-colors'>
          Contact Us
        </a>
        <NavLink to='/movie' className='cursor-pointer transition-colors'>
          Movies
        </NavLink>
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
        className={`fixed top-0 right-0 h-screen w-52 shadow-md transform transition-transform duration-300 ease-in-out backdrop-blur-md bg-black/80 border-l  border-white/10    z-40 ${
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
            href='# team'
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

          <NavLink to='/movie'>Movies</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
