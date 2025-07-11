import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home';
import MovieSearch from './api/MovieSearch';
import MovieDetail from './api/MovieDetail';

const App = () => {
  return (
    <div>
     
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie' element={<MovieSearch />} />
        <Route path='/movie/:id' element={<MovieDetail />} />
      </Routes>
      <Footer />
      <ToastContainer position='top-right' autoClose={3000} />
    </div>
  );
};

export default App;
