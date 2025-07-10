import React from 'react';
import Facebook from '../pages/Facebook';
import Twitter from '../pages/Twitter';
import Linkedin from '../pages/Linkedin';
import Instagram from '../pages/Instagram';
import { BsMailbox } from 'react-icons/bs';
import { CgMail } from 'react-icons/cg';
import { MdDialerSip } from 'react-icons/md';
import { BiLocationPlus } from 'react-icons/bi';
import { CiLocationOff, CiLocationOn } from 'react-icons/ci';
const Footer = () => {
  return (
    <div className='  h-full bg-gray-900 text-white'>
      <div className=' pt-5 border-b grid grid-cols-1 sm:grid-cols-4 gap-4 w-[80%] mx-auto px-4 py-2'>
        <div className='border-b pb-7 border-gray-200 sm:border-none'>
          <h1 className='text-lg font-bold text-white'>
            <span className='text-blue-600'>{'<'}</span>{' '}
            <span className='text-blue-500'> {'>'} </span> TechLab
          </h1>

          <p className='text-gray-300 text-sm text-justify mt-5 pr-4  '>
            Building innovative solutions for the digital world. We create
            amazing experiences that drive results.
          </p>

          {/* Social links */}
          <div className='flex gap-4 size-1 mt-4'>
            <Facebook size={5} />
            <Twitter />
            <Linkedin />
            <Instagram />
          </div>
        </div>

        <div className='border-b border-gray-200 sm:border-none'>
          <h1 className='text-white font-bold '>Quick Links</h1>

          <div className='mt-4 text-gray-300 flex flex-col gap-2 items-start justify-around text-sm'>
            <a className='text-sm' href='#about-us'>
              About Us
            </a>
            <a href='#our-time'>Our Team</a>
            <a href='#contact-us'>Contact</a>
            <a href='#api-demo'>Api Demo</a>
          </div>
        </div>

        <div className='border-b border-gray-200 sm:border-none'>
          <h1 className='text-white font-bold'>Services</h1>

          <div className='mt-4 text-gray-300 flex flex-col gap-2 items-start justify-around text-sm'>
            <a className='text-sm hover:text-gray-100' href='#about-us'>
              Web Development
            </a>
            <a className='text-sm hover:text-gray-100' href='#our-time'>
              Mobile Apps
            </a>
            <a className='text-sm hover:text-gray-100' href='#contact-us'>
              API Integration
            </a>
            <a className='text-sm hover:text-gray-100' href='#api-demo'>
              Cloud Solutions
            </a>
          </div>
        </div>

        {/* contact ko section */}
        <div>
          <h1 className='text-white font-bold'>Contact Info</h1>

          <div className='text-sm text-gray-300'>
            <div className='flex gap-4 items-center mt-4 '>
              <CgMail />
              <p>info@aakashgroup.com</p>
            </div>

            <div className='flex gap-4 items-center text-gray-300'>
              <MdDialerSip />
              <p>01-4430891</p>
            </div>

            <div className='flex gap-4 items-center text-gray-300'>
              <CiLocationOn />
              <p>Putalisadak, Kathmandu</p>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-5 text-gray-300 pb-5 text-lg text-center'>
        © 2024 TechLab. All rights reserved. Built with React & TypeScript.
      </div>
    </div>
  );
};

export default Footer;
