import React, { useState } from 'react';
import { IoIosMenu } from 'react-icons/io';
import { NavLink, useNavigate } from 'react-router-dom';

const MovieHeader = () => {
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
        <NavLink to='/' className=' cursor-pointer transition-colors'>
          Home
        </NavLink>

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
          <NavLink
            to='/'
            className='hover:text-[#870c15] cursor-pointer transition-colors'
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>

          <NavLink to='/movie'>Movies</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default MovieHeader;
