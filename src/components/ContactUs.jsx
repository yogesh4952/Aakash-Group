import React from 'react';

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const datas = [
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
          class='lucide lucide-mail h-6 w-6 text-blue-200'
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
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
          class='lucide lucide-phone h-6 w-6 text-blue-200'
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
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
          class='lucide lucide-map-pin h-6 w-6 text-blue-200'
        >
          <path d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z'></path>
          <circle cx='12' cy='10' r='3'></circle>
        </svg>
      ),

      title: 'Location',
      detail: 'Tikathali,Lalitpur',
    },
  ];
  return (
    <div className='px-4 py-2 mt-5 mb-5 text-center'>
      <div className='relative inline-block'>
        <h1 className='text-3xl font-black'>Get in Touch</h1>
        <span className='absolute bottom-[-5px ] w-36 left-5 h-1 bg-blue-700 rounded-md'></span>
      </div>
      <p className='mt-7'>
        Ready to start your project? Let's discuss how we can help you achieve
        your goals.
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 w-[70%] mx-auto mt-20'>
        {/* Left */}
        <div>
          {/* top */}
          <div className='px-5 py-4 rounded shadow border  border-gray-200 '>
            <h1 className='text-2xl mb-6 text-left'>Contact Information</h1>

            {datas.map((data, index) => (
              <div key={index} className='flex items-center gap-5 mb-4'>
                <div>{data.icon}</div>
                <div className=' text-left'>
                  <h1> {data.title} </h1>
                  <p> {data.detail} </p>
                </div>
              </div>
            ))}
          </div>

          {/* bottom */}
          <div className='border border-gray-200 px-4 py-4   rounded mt-4'>
            <h1 className='text-left font-black mt-4'>Office Hours</h1>
            <div className='mt-4 text-gray-600 text-sm'>
              <div className='flex justify-between'>
                <h1>Monday-Friday:</h1>
                <p>9:00 AM - 6:00 PM</p>
              </div>

              <div className='flex justify-between'>
                <h1>Saturday</h1>
                <p>10:00 AM - 4:00 PM</p>
              </div>

              <div className='flex justify-between'>
                <h1>Sunday</h1>
                <p>Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}

        <form className='px-6  py-2' onClick={(e) => handleSubmit(e)}>
          <div className='flex gap-2 justify-between items-center '>
            <div className='flex flex-col text-left'>
              <label htmlFor='name' required>
                Name
              </label>
              <input
                type='text'
                className='border border-gray-200'
                name='name'
                id='name'
              />
            </div>

            <div className='flex flex-col text-left'>
              <label htmlFor='name' required>
                Email
              </label>
              <input
                type='email'
                className='border border-gray-200'
                name='name'
                id='name'
              />
            </div>
          </div>

          <div className='flex flex-col text-left mt-5 text-sm'>
            <label htmlFor='name' className='mb-2' required>
              Subject
            </label>
            <input
              type='text'
              name='name'
              className='border border-gray-200 px-2 py-1'
              id='name'
              placeholder='Subject of your message'
            />
          </div>

          <div className='flex flex-col text-left mt-5 text-sm'>
            <label className='mb-2' htmlFor='message' required>
              Message
            </label>
            <textarea
              className='min-w-full border px-2 py-4 border-gray-200 rounded min-h-20 max-h-32 overflow-y-auto'
              type='text'
              name='name'
              id='name'
              placeholder='Your message here...'
            />
          </div>

          <button
            type='submit'
            className='mt-5 bg-blue-500 w-full px-4 py-2 text-white rounded font-bold hover:bg-blue-400 cursor-pointer'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
