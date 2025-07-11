import React from 'react';

const Team = () => {
  const members = [
    {
      name: 'Alice Johnson',
      profile: 'https://randomuser.me/api/portraits/women/44.jpg',
      position: 'CEO',
      email: 'alice.johnson@example.com',
      linkedin: 'https://linkedin.com/in/alice-johnson',
    },
    {
      name: 'Michael Smith',
      profile: 'https://randomuser.me/api/portraits/men/45.jpg',
      position: 'CTO',
      email: 'michael.smith@example.com',
      linkedin: 'https://linkedin.com/in/michael-smith',
    },
    {
      name: 'Sophia Williams',
      profile: 'https://randomuser.me/api/portraits/women/65.jpg',
      position: 'Lead Developer',
      email: 'sophia.williams@example.com',
      linkedin: 'https://linkedin.com/in/sophia-williams',
    },
    {
      name: 'Daniel Lee',
      profile: 'https://randomuser.me/api/portraits/men/32.jpg',
      position: 'UI/UX Designer',
      email: 'daniel.lee@example.com',
      linkedin: 'https://linkedin.com/in/daniel-lee',
    },
    {
      name: 'Emma Davis',
      profile: 'https://randomuser.me/api/portraits/women/12.jpg',
      position: 'Marketing Head',
      email: 'emma.davis@example.com',
      linkedin: 'https://linkedin.com/in/emma-davis',
    },
    {
      name: 'James Wilson',
      profile: 'https://randomuser.me/api/portraits/men/54.jpg',
      position: 'Product Manager',
      email: 'james.wilson@example.com',
      linkedin: 'https://linkedin.com/in/james-wilson',
    },
    {
      name: 'Olivia Brown',
      profile: 'https://randomuser.me/api/portraits/women/28.jpg',
      position: 'Software Engineer',
      email: 'olivia.brown@example.com',
      linkedin: 'https://linkedin.com/in/olivia-brown',
    },
    {
      name: 'Liam Taylor',
      profile: 'https://randomuser.me/api/portraits/men/29.jpg',
      position: 'QA Engineer',
      email: 'liam.taylor@example.com',
      linkedin: 'https://linkedin.com/in/liam-taylor',
    },
  ];

  return (
    <div
      className='text-white px-4 py-2 pt-12 bg-gradient-to-br from-gray-900 via-gray-800 to-black'
      id='team'
    >
      {' '}
      <h1 className='text-center text-3xl font-bold'>Meet our Team</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center w-full md:w-[80%] mx-auto mt-5'>
        {members.map((member, id) => (
          <div
            className='border border-white/5 bg-black/5 hover:bg-white/20 backdrop-blur-md shadow-md rounded-xl px-4 py-6 text-white flex justify-center items-center flex-col'
            key={id}
          >
            <div className='w-20 h-20 rounded-full overflow-hidden'>
              <img src={member.profile} alt='' />
            </div>
            <h1 className='mt-5  font-black '> {member.name} </h1>
            <p className='mt-1 text-gray-300'> {member.email} </p>
            <p className='mt-1 text-xl italic'>{member.position}</p>
            <button className='px-4 w-52 py-2 mt-5 bg-blue-600 text-white shadow rounded'>
              <a href={member.linkedin}></a>
              Linkedin
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
