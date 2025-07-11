import React from 'react';
import Hero from './Hero';
import Header from './Header';
import About from './About';
import Team from './Team';
import ContactUs from './ContactUs';
import Slider from './Slider';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Slider />
      <Team />
      <ContactUs />
    </div>
  );
};

export default Home;
