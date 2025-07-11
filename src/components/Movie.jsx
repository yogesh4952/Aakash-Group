import React, { useState, useEffect } from 'react';
import {
  Play,
  Star,
  Calendar,
  Clock,
  RefreshCw,
  Film,
  TrendingUp,
} from 'lucide-react';

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('popular');

  const API_KEY = '3fd2be6f0c70a2a598f084ddfb75487c';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

  const fetchMovies = async (movieCategory) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${BASE_URL}/movie/${movieCategory}?api_key=${API_KEY}&language=en-US&page=1`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }

      const data = await response.json();
      setMovies(data.results.slice(0, 8));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(category);
  }, [category]);

  const formatDate = (dateString) => {
    return new Date(dateString).getFullYear();
  };

  const formatRating = (rating) => {
    return rating.toFixed(1);
  };

  const categories = [
    { key: 'popular', label: 'Popular', icon: TrendingUp },
    { key: 'top_rated', label: 'Top Rated', icon: Star },
    { key: 'now_playing', label: 'Now Playing', icon: Play },
  ];

  return (
    <section
      id='movies'
      className='py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden'
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
            <Film className='h-5 w-5 text-cyan-400' />
            <span className='text-cyan-400 font-medium'>
              API Integration Demo
            </span>
          </div>
          <h2 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-400 bg-clip-text text-transparent mb-6'>
            Movie Database
          </h2>
          <div className='w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto mb-8 rounded-full'></div>
          <p className='text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>
            Explore the latest movies powered by
            <span className='text-cyan-400 font-semibold'>
              {' '}
              The Movie Database (TMDB) API
            </span>
            . This section demonstrates real-time API integration with dynamic
            data fetching and responsive design.
          </p>
        </div>

        {/* Category Filters */}
        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setCategory(cat.key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                category === cat.key
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600'
              }`}
            >
              <cat.icon className='h-5 w-5' />
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Refresh Button */}
        <div className='text-center mb-8'>
          <button
            onClick={() => fetchMovies(category)}
            disabled={loading}
            className='bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 disabled:from-purple-400 disabled:to-pink-400 transition-all duration-200 flex items-center space-x-2 mx-auto shadow-lg hover:shadow-purple-500/25'
          >
            <RefreshCw className={`h-5 w-5 ${loading ? 'animate-spin' : ''}`} />
            <span>{loading ? 'Loading...' : 'Refresh Movies'}</span>
          </button>
        </div>

        {/* Error State */}
        {error && (
          <div className='bg-red-900/50 border border-red-500/50 text-red-200 px-6 py-4 rounded-lg mb-8 backdrop-blur-sm'>
            <p className='font-semibold'>Error:</p>
            <p>{error}</p>
          </div>
        )}

        {/* Movies Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {loading ? (
            // Loading Skeletons
            Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className='bg-gray-800/50 rounded-2xl overflow-hidden animate-pulse'
              >
                <div className='aspect-[2/3] bg-gray-700'></div>
                <div className='p-6 space-y-3'>
                  <div className='h-4 bg-gray-700 rounded'></div>
                  <div className='h-3 bg-gray-700 rounded w-3/4'></div>
                  <div className='h-3 bg-gray-700 rounded w-1/2'></div>
                </div>
              </div>
            ))
          ) : movies.length === 0 ? (
            <div className='col-span-full text-center py-12'>
              <Film className='h-16 w-16 text-gray-500 mx-auto mb-4' />
              <p className='text-gray-400 text-lg'>No movies found</p>
            </div>
          ) : (
            movies.map((movie) => (
              <div
                key={movie.id}
                className='bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105 shadow-lg hover:shadow-cyan-500/10'
              >
                <div className='relative aspect-[2/3] overflow-hidden'>
                  <img
                    src={
                      movie.poster_path
                        ? `${IMAGE_BASE_URL}${movie.poster_path}`
                        : '/api/placeholder/300/450'
                    }
                    alt={movie.title}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  <div className='absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <button className='w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-200'>
                      <Play className='h-4 w-4' />
                      <span>Watch Trailer</span>
                    </button>
                  </div>
                </div>

                <div className='p-6'>
                  <h3 className='text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-cyan-400 transition-colors duration-300'>
                    {movie.title}
                  </h3>

                  <div className='flex items-center justify-between mb-3'>
                    <div className='flex items-center space-x-1'>
                      <Star className='h-4 w-4 text-yellow-400 fill-current' />
                      <span className='text-yellow-400 font-semibold'>
                        {formatRating(movie.vote_average)}
                      </span>
                      <span className='text-gray-400 text-sm'>
                        ({movie.vote_count.toLocaleString()})
                      </span>
                    </div>
                    <div className='flex items-center space-x-1 text-gray-400'>
                      <Calendar className='h-4 w-4' />
                      <span className='text-sm'>
                        {formatDate(movie.release_date)}
                      </span>
                    </div>
                  </div>

                  <p className='text-gray-300 text-sm line-clamp-3 leading-relaxed'>
                    {movie.overview}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* API Info */}
        <div className='mt-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50'>
          <h3 className='text-2xl font-bold text-white mb-6 flex items-center'>
            <Film className='h-6 w-6 text-cyan-400 mr-3' />
            API Integration Details
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <div className='text-center'>
              <div className='bg-cyan-500/20 rounded-lg p-4 mb-3'>
                <RefreshCw className='h-8 w-8 text-cyan-400 mx-auto' />
              </div>
              <h4 className='font-semibold text-white mb-2'>Real-time Data</h4>
              <p className='text-gray-300 text-sm'>
                Live movie data from TMDB API
              </p>
            </div>
            <div className='text-center'>
              <div className='bg-blue-500/20 rounded-lg p-4 mb-3'>
                <Star className='h-8 w-8 text-blue-400 mx-auto' />
              </div>
              <h4 className='font-semibold text-white mb-2'>
                Multiple Categories
              </h4>
              <p className='text-gray-300 text-sm'>
                Popular, Top Rated, Now Playing
              </p>
            </div>
            <div className='text-center'>
              <div className='bg-purple-500/20 rounded-lg p-4 mb-3'>
                <Play className='h-8 w-8 text-purple-400 mx-auto' />
              </div>
              <h4 className='font-semibold text-white mb-2'>Rich Media</h4>
              <p className='text-gray-300 text-sm'>
                High-quality posters and metadata
              </p>
            </div>
            <div className='text-center'>
              <div className='bg-pink-500/20 rounded-lg p-4 mb-3'>
                <Clock className='h-8 w-8 text-pink-400 mx-auto' />
              </div>
              <h4 className='font-semibold text-white mb-2'>Fast Loading</h4>
              <p className='text-gray-300 text-sm'>
                Optimized API calls and caching
              </p>
            </div>
          </div>

          <div className='mt-8 p-6 bg-gray-800/50 rounded-xl border border-gray-700/50'>
            <h4 className='text-lg font-semibold text-white mb-4'>
              Technical Implementation
            </h4>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-sm'>
              <div>
                <p className='font-medium text-cyan-400 mb-1'>API Provider:</p>
                <p className='text-gray-300'>The Movie Database (TMDB)</p>
              </div>
              <div>
                <p className='font-medium text-cyan-400 mb-1'>Endpoint:</p>
                <p className='text-gray-300 break-all'>
                  https://api.themoviedb.org/3/movie/
                </p>
              </div>
              <div>
                <p className='font-medium text-cyan-400 mb-1'>Features:</p>
                <p className='text-gray-300'>
                  Category filtering, Real-time updates
                </p>
              </div>
              <div>
                <p className='font-medium text-cyan-400 mb-1'>Data Points:</p>
                <p className='text-gray-300'>
                  Title, Rating, Release Date, Overview
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movie;
