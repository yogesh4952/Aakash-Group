import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import { ToastContainer } from 'react-toastify';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Team from './components/Team';
import About from './components/About';

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Team />
      <ContactUs />
      <Footer />
      <ToastContainer position='top-right' autoClose={3000} />
    </div>
  );
};

export default App;
