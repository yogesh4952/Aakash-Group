import React, { useState } from 'react';
import { SyncLoader } from 'react-spinners';
import { toast } from 'react-toastify';

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success('Form submitted successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.log(error.message);
      toast.error('Failed to submit form. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: (
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
          className='lucide lucide-mail h-6 w-6 text-blue-200'
        >
          <rect width='20' height='16' x='2' y='4' rx='2'></rect>
          <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'></path>
        </svg>
      ),
      title: 'Email',
      detail: 'info@techlab.com',
    },
    {
      icon: (
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
          className='lucide lucide-phone h-6 w-6 text-blue-200'
        >
          <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'></path>
        </svg>
      ),
      title: 'Phone',
      detail: '9746254850',
    },
    {
      icon: (
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
          className='lucide lucide-map-pin h-6 w-6 text-blue-200'
        >
          <path d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z'></path>
          <circle cx='12' cy='10' r='3'></circle>
        </svg>
      ),
      title: 'Location',
      detail: 'Tikathali, Lalitpur',
    },
  ];

  return (
    <div
      id='#contact-us'
      className='px-4 py-2 text-white pb-14 pt-20  text-center bg-gradient-to-br from-gray-900 via-gray-800 to-black '
    >
      <div className='relative inline-block'>
        <h1 className='text-3xl font-black'>Get in Touch</h1>
        <span className='absolute bottom-[-5px] w-36 left-5 h-1 bg-blue-700 rounded-md'></span>
      </div>
      <p className='mt-7'>
        Ready to start your project? Let's discuss how we can help you achieve
        your goals.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 w-full   md:w-[70%] mx-auto mt-20'>
        {/* Left */}
        <div>
          <div className='px-5 py-4 rounded shadow border border-gray-200'>
            <h1 className='text-2xl mb-6 text-left'>Contact Information</h1>
            {contactInfo.map((data, index) => (
              <div key={index} className='flex items-center gap-5 mb-4'>
                <div>{data.icon}</div>
                <div className='text-left'>
                  <h1>{data.title}</h1>
                  <p>{data.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='border border-gray-200 px-4 py-4 rounded mt-4'>
            <h1 className='text-left font-black mt-4'>Office Hours</h1>
            <div className='mt-4 text-gray-300 text-sm'>
              <div className='flex justify-between'>
                <h1>Monday-Friday:</h1>
                <p>9:00 AM - 6:00 PM</p>
              </div>
              <div className='flex justify-between'>
                <h1>Saturday:</h1>
                <p>10:00 AM - 4:00 PM</p>
              </div>
              <div className='flex justify-between'>
                <h1>Sunday:</h1>
                <p>Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        {isLoading ? (
          <div className='flex justify-center items-center h-[200px]'>
            <SyncLoader color='#3b82f6' size={25} />
          </div>
        ) : (
          <form className='px-6 py-2 ' onSubmit={handleSubmit}>
            <div className=' gap-2 flex flex-col md:flex-row w-full md:justify-between md:items-center'>
              <div className='flex flex-col text-left'>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  className='border border-gray-200 outline-1 px-2 py-1 rounded'
                  name='name'
                  id='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </div>
              <div className='flex flex-col text-left'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  className='border border-gray-200 outline-1 px-2 py-1 rounded'
                  name='email'
                  id='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </div>
            </div>
            <div className='flex flex-col text-left mt-5 text-sm'>
              <label htmlFor='subject' className='mb-2'>
                Subject
              </label>
              <input
                type='text'
                name='subject'
                className='border border-gray-200 outline-1 px-2 py-1 rounded'
                id='subject'
                placeholder='Subject of your message'
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>
            <div className='flex flex-col text-left mt-5 text-sm'>
              <label htmlFor='message' className='mb-2'>
                Message
              </label>
              <textarea
                className='min-w-full outline-none border px-2 py-4 border-gray-200 rounded min-h-20 max-h-32 overflow-y-auto'
                name='message'
                id='message'
                placeholder='Your message here...'
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>
            <button
              type='submit'
              className={`mt-5 bg-blue-500 w-full px-4 py-2 text-white rounded font-bold hover:bg-blue-400 cursor-pointer ${
                isLoading && 'opacity-50 cursor-not-allowed'
              }`}
              disabled={isLoading}
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
