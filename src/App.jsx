import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import { ToastContainer } from 'react-toastify';
import ContactUs from './components/ContactUs';

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <ContactUs />
      <ToastContainer position='top-right' autoClose={3000} />
    </div>
  );
};

export default App;
