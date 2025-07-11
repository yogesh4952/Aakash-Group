import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Revolutionary Web Development',
      subtitle: "Building tomorrow's web experiences today",
      image:
        'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
      description:
        'Create stunning, responsive websites that captivate your audience and drive results.',
    },
    {
      id: 2,
      title: 'Mobile App Excellence',
      subtitle: 'Native and cross-platform solutions',
      image:
        'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
      description:
        'Develop powerful mobile applications that engage users across all platforms.',
    },
    {
      id: 3,
      title: 'Cloud Integration',
      subtitle: 'Scalable infrastructure for modern businesses',
      image:
        'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
      description:
        'Leverage cloud technologies to scale your business and improve performance.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className='relative h-96 md:h-[500px] overflow-hidden'>
      {/* Slides */}
      <div className='relative w-full h-full'>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className='relative w-full h-full'>
              <img
                src={slide.image}
                alt={slide.title}
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 bg-black bg-opacity-50'></div>
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='text-center text-white max-w-4xl mx-auto px-4'>
                  <h2 className='text-3xl md:text-5xl font-bold mb-4'>
                    {slide.title}
                  </h2>
                  <p className='text-xl md:text-2xl mb-4 text-blue-200'>
                    {slide.subtitle}
                  </p>
                  <p className='text-lg md:text-xl text-gray-200 max-w-2xl mx-auto'>
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200'
      >
        <ChevronLeft className='h-6 w-6' />
      </button>
      <button
        onClick={nextSlide}
        className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200'
      >
        <ChevronRight className='h-6 w-6' />
      </button>

      {/* Dots Indicator */}
      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;
