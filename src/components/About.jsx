import React from 'react';
import {
  Award,
  Users,
  Clock,
  Target,
  Code,
  Cpu,
  Zap,
  Shield,
  Globe,
  Database,
  Smartphone,
  Cloud,
} from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Modern Development',
      description:
        'Cutting-edge frameworks and technologies for scalable solutions',
    },
    {
      icon: Cpu,
      title: 'AI-Powered Solutions',
      description:
        'Leveraging artificial intelligence to create smarter applications',
    },
    {
      icon: Shield,
      title: 'Cybersecurity First',
      description: 'Enterprise-grade security protocols and data protection',
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Scalable cloud-native solutions for global deployment',
    },
  ];

  const techStack = [
    { name: 'React', color: 'from-blue-400 to-blue-600' },
    { name: 'Node.js', color: 'from-green-400 to-green-600' },
    { name: 'Python', color: 'from-yellow-400 to-yellow-600' },
    { name: 'AWS', color: 'from-orange-400 to-orange-600' },
    { name: 'Docker', color: 'from-blue-500 to-blue-700' },
    { name: 'Kubernetes', color: 'from-purple-400 to-purple-600' },
    { name: 'MongoDB', color: 'from-green-500 to-green-700' },
    { name: 'GraphQL', color: 'from-pink-400 to-pink-600' },
  ];

  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: Code },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '24/7', label: 'Support Available', icon: Clock },
    { number: '50+', label: 'Tech Experts', icon: Users },
  ];

  return (
    <section
      id='about'
      className='py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden'
    >
      {/* Animated Background Elements */}
      <div className='absolute inset-0'>
        <div className='absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse'></div>
        <div className='absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000'></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='text-center mb-16'>
          <div className='inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6'>
            <Zap className='h-5 w-5 text-cyan-400' />
            <span className='text-cyan-400 font-medium'>Innovation Driven</span>
          </div>
          <h2 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-400 bg-clip-text text-transparent mb-6'>
            About TechLab
          </h2>
          <div className='w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto mb-8 rounded-full'></div>
          <p className='text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>
            We are digital architects crafting the future of technology. Our
            team combines
            <span className='text-cyan-400 font-semibold'>
              {' '}
              artificial intelligence
            </span>
            ,
            <span className='text-blue-400 font-semibold'>
              {' '}
              cloud computing
            </span>
            , and
            <span className='text-purple-400 font-semibold'>
              {' '}
              cutting-edge development
            </span>
            to build solutions that don't just meet today\'s needs—they
            anticipate tomorrow\'s possibilities.
          </p>
        </div>

        {/* Stats Section */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
          {stats.map((stat, index) => (
            <div
              key={index}
              className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group'
            >
              <stat.icon className='h-8 w-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300' />
              <div className='text-3xl font-bold text-white mb-2'>
                {stat.number}
              </div>
              <div className='text-gray-400 text-sm'>{stat.label}</div>
            </div>
          ))}
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16'>
          {/* Left Content */}
          <div className='space-y-8'>
            <div className='space-y-6'>
              <h3 className='text-3xl font-bold text-white mb-6 flex items-center'>
                <Database className='h-8 w-8 text-cyan-400 mr-3' />
                Our Mission
              </h3>
              <p className='text-gray-300 text-lg leading-relaxed'>
                At TechLab, we don't just build software—we engineer digital
                ecosystems that evolve with your business. Our mission is to
                harness the power of emerging technologies like AI, blockchain,
                and quantum computing to create solutions that are not just
                functional, but transformational.
              </p>
              <p className='text-gray-300 text-lg leading-relaxed'>
                We believe in the convergence of human creativity and machine
                intelligence. Every line of code we write, every architecture we
                design, and every solution we deploy is crafted with precision,
                scalability, and future-readiness in mind.
              </p>
            </div>

            {/* Tech Stack */}
            <div className='space-y-4'>
              <h4 className='text-xl font-semibold text-white flex items-center'>
                <Smartphone className='h-6 w-6 text-purple-400 mr-2' />
                Our Tech Arsenal
              </h4>
              <div className='grid grid-cols-2 gap-3'>
                {techStack.map((tech, index) => (
                  <div key={index} className='group cursor-pointer'>
                    <div
                      className={`bg-gradient-to-r ${tech.color} p-3 rounded-lg text-white font-semibold text-center transform group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl`}
                    >
                      {tech.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Features Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105'
              >
                <div className='bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl p-3 w-fit mb-6 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300'>
                  <feature.icon className='h-8 w-8 text-cyan-400 group-hover:scale-110 transition-transform duration-300' />
                </div>
                <h4 className='text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300'>
                  {feature.title}
                </h4>
                <p className='text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300'>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className='relative'>
          <div className='bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 backdrop-blur-sm rounded-3xl p-12 text-center border border-gray-700/50 relative overflow-hidden'>
            {/* Animated border */}
            <div className='absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 p-[1px]'>
              <div className='bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 backdrop-blur-sm rounded-3xl h-full w-full'></div>
            </div>

            <div className='relative z-10'>
              <Globe className='h-16 w-16 text-cyan-400 mx-auto mb-6 animate-pulse' />
              <h3 className='text-3xl font-bold text-white mb-4'>
                Ready to Build the Future?
              </h3>
              <p className='text-gray-300 mb-8 text-lg max-w-2xl mx-auto'>
                Join the digital revolution. Let's architect solutions that
                don't just solve problems—they redefine possibilities.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <button className='bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25'>
                  Start Your Project
                </button>
                <button className='border border-gray-600 text-gray-300 px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300'>
                  Explore Technologies
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
