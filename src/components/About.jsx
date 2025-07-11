import React from 'react';
import { Users, Clock, Code, Shield, Globe, Database } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description:
        'We write code that actually makes sense to other developers',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Working together to build stuff that people want to use',
    },
    {
      icon: Shield,
      title: 'Security Focus',
      description: 'Keeping your data safe because nobody likes getting hacked',
    },
    {
      icon: Globe,
      title: 'Web Solutions',
      description: 'Building websites and apps that work on all devices',
    },
  ];

  const skills = [
    'React',
    'Node.js',
    'Python',
    'MongoDB',
    'PostgreSQL',
    'Docker',
  ];

  const stats = [
    { number: '50+', label: 'Projects Done', icon: Code },
    { number: '5+', label: 'Years Experience', icon: Clock },
    { number: '24/7', label: 'Support', icon: Users },
    { number: '99%', label: 'Client Satisfaction', icon: Shield },
  ];

  return (
    <section id='about-us' className='py-16 bg-gray-900'>
      <div className='container mx-auto px-6 max-w-6xl'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Us</h2>
          <div className='w-20 h-1 bg-blue-500 mx-auto mb-6'></div>
          <p className='text-lg text-gray-300 max-w-3xl mx-auto'>
            We're a small team of developers who love building web applications.
            Started a few years ago, we focus on creating clean, functional
            websites and apps that solve real problems.
          </p>
        </div>

        {/* Stats Section */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-16'>
          {stats.map((stat, index) => (
            <div
              key={index}
              className='bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors'
            >
              <stat.icon className='h-8 w-8 text-blue-400 mx-auto mb-3' />
              <div className='text-2xl font-bold text-white mb-1'>
                {stat.number}
              </div>
              <div className='text-gray-400 text-sm'>{stat.label}</div>
            </div>
          ))}
        </div>

        <div className='grid md:grid-cols-2 gap-12 items-start mb-12'>
          {/* Left Content */}
          <div>
            <h3 className='text-2xl font-bold text-white mb-4 flex items-center'>
              <Database className='h-6 w-6 text-blue-400 mr-2' />
              What We Do
            </h3>
            <div className='space-y-4 text-gray-300'>
              <p>
                We build websites and web applications using modern
                technologies. Most of our work involves React frontends with
                Node.js backends, but we're comfortable with other stacks too.
              </p>
              <p>
                Whether you need a simple business website or a complex web app,
                we try to keep things simple and focus on what actually works
                rather than using the latest trendy framework.
              </p>
            </div>

            {/* Skills */}
            <div className='mt-8'>
              <h4 className='text-lg font-semibold text-white mb-4'>
                Technologies We Use
              </h4>
              <div className='flex flex-wrap gap-2'>
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className='bg-blue-600 text-white px-3 py-1 rounded text-sm'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Features Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors'
              >
                <feature.icon className='h-8 w-8 text-blue-400 mb-4' />
                <h4 className='text-lg font-semibold text-white mb-2'>
                  {feature.title}
                </h4>
                <p className='text-gray-400 text-sm'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Simple CTA */}
        <div className='bg-gray-800 rounded-lg p-8 text-center'>
          <Globe className='h-12 w-12 text-blue-400 mx-auto mb-4' />
          <h3 className='text-2xl font-bold text-white mb-3'>
            Let's Work Together
          </h3>
          <p className='text-gray-300 mb-6 max-w-xl mx-auto'>
            Have a project in mind? We'd love to hear about it and see if we can
            help.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors'>
              Get In Touch
            </button>
            <button className='border border-gray-600 text-gray-300 px-6 py-3 rounded hover:bg-gray-700 transition-colors'>
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
