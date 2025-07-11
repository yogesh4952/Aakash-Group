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

  const isFormComplete = Object.values(formData).every(
    (value) => value.trim() !== ''
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormComplete) {
      toast.error('Please fill in all fields.');
      return;
    }

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success('Form submitted successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error('Failed to submit form. Please try again.');
      console.log(error);
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
          className='h-6 w-6 text-blue-200'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          viewBox='0 0 24 24'
        >
          <rect width='20' height='16' x='2' y='4' rx='2' />
          <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
        </svg>
      ),
      title: 'Email',
      detail: 'info@techlab.com',
    },
    {
      icon: (
        <svg
          className='h-6 w-6 text-blue-200'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          viewBox='0 0 24 24'
        >
          <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2 4.11 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.14.97.4 1.89.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
        </svg>
      ),
      title: 'Phone',
      detail: '9746254850',
    },
    {
      icon: (
        <svg
          className='h-6 w-6 text-blue-200'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          viewBox='0 0 24 24'
        >
          <path d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z' />
          <circle cx='12' cy='10' r='3' />
        </svg>
      ),
      title: 'Location',
      detail: 'Tikathali, Lalitpur',
    },
  ];

  return (
    <div
      id='contact-us'
      className='px-4 py-2 text-white pb-14 pt-20 text-center bg-gradient-to-br from-gray-900 via-gray-800 to-black'
    >
      <div className='relative inline-block'>
        <h1 className='text-3xl font-black'>Get in Touch</h1>
        <span className='absolute bottom-[-5px] w-36 left-5 h-1 bg-blue-700 rounded-md'></span>
      </div>
      <p className='mt-7'>
        Ready to start your project? Let’s discuss how we can help you achieve
        your goals.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-[85%] mx-auto mt-16'>
        {/* Left */}
        <div>
          <div className='px-5 py-4 rounded shadow border border-gray-200'>
            <h1 className='text-2xl mb-6 text-left'>Contact Information</h1>
            {contactInfo.map((item, index) => (
              <div key={index} className='flex items-center gap-4 mb-5'>
                {item.icon}
                <div className='text-left'>
                  <h2 className='font-semibold'>{item.title}</h2>
                  <p className='text-gray-300 text-sm'>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='border border-gray-200 px-4 py-4 rounded mt-4'>
            <h1 className='text-left font-black mt-4'>Office Hours</h1>
            <div className='mt-4 text-gray-300 text-sm space-y-2'>
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

        <form
          onSubmit={handleSubmit}
          className='space-y-6 text-white text-left'
        >
          <div className='grid md:grid-cols-2 gap-4'>
            <div>
              <label htmlFor='name' className='block mb-1'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                value={formData.name}
                onChange={handleChange}
                className='w-full px-3 py-2  rounded border border-gray-300 focus:outline-none'
                required
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-1'>
                Email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                value={formData.email}
                onChange={handleChange}
                className='w-full px-3 py-2 rounded border border-gray-300 focus:outline-none '
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor='subject' className='block mb-1'>
              Subject
            </label>
            <input
              type='text'
              name='subject'
              id='subject'
              value={formData.subject}
              onChange={handleChange}
              className='w-full px-3 py-2 rounded border border-gray-300 focus:outline-none '
              required
            />
          </div>
          <div>
            <label htmlFor='message' className='block mb-1'>
              Message
            </label>
            <textarea
              name='message'
              id='message'
              value={formData.message}
              onChange={handleChange}
              rows='5'
              className='w-full px-3 py-2 rounded border border-gray-300 focus:outline-none  resize-none'
              required
            />
          </div>
          <button
            type='submit'
            disabled={!isFormComplete || isLoading}
            className={`w-full py-2 rounded text-white font-semibold transition duration-200 ${
              !isFormComplete || isLoading
                ? 'bg-blue-300 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
