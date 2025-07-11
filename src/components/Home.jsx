import React from 'react';
import Hero from './Hero';
import Header from './Header';
import About from './About';
import Team from './Team';
import ContactUs from './ContactUs';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Team />
      <ContactUs />
    </div>
  );
};

export default Home;
