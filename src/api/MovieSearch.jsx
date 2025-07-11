import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Filter,
  Star,
  Calendar,
  Clock,
  TrendingUp,
  Film,
  X,
} from 'lucide-react';
import Header from '../components/Header';
import MovieDetail from './MovieDetail';
import MovieHeader from './MovieHeader';

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [sortBy, setSortBy] = useState('popularity');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const API_KEY = 'c0478f6d7e5895ce610c11bbd723951a';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    fetchGenres();
    fetchMovies();
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchMovies();
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [searchQuery, selectedGenre, sortBy, currentPage]);

  const fetchGenres = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
      );
      const data = await response.json();
      setGenres(data.genres);
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  };

  const fetchMovies = async () => {
    setLoading(true);
    try {
      let url = '';
      if (searchQuery.trim()) {
        url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
          searchQuery
        )}&page=${currentPage}`;
      } else {
        url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&page=${currentPage}&sort_by=${sortBy}.desc`;
        if (selectedGenre) {
          url += `&with_genres=${selectedGenre}`;
        }
      }

      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results || []);
      setTotalPages(Math.min(data.total_pages || 1, 500));
    } catch (error) {
      console.error('Error fetching movies:', error);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchMovies();
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedGenre(null);
    setSortBy('popularity');
    setCurrentPage(1);
  };

  const formatDate = (dateString) => new Date(dateString).getFullYear();
  const formatRating = (rating) => rating.toFixed(1);

  const getGenreNames = (genreIds) => {
    return genreIds
      .map((id) => genres.find((genre) => genre.id === id)?.name)
      .filter(Boolean)
      .slice(0, 3)
      .join(', ');
  };

  return (
    <div>
      <MovieHeader />
      <div className='min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pt-16'>
        <div className='absolute inset-0'>
          <div className='absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse'></div>
          <div className='absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000'></div>
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10'>
          <div className='text-center mb-12'>
            <div className='inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6'>
              <Film className='h-5 w-5 text-cyan-400' />
              <span className='text-cyan-400 font-medium'>Movie Discovery</span>
            </div>
            <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-400 bg-clip-text text-transparent mb-6'>
              Discover Movies
            </h1>
            <div className='w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto mb-8 rounded-full'></div>
          </div>

          <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-gray-700/50'>
            <form onSubmit={handleSearch} className='mb-6'>
              <div className='relative'>
                <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5' />
                <input
                  type='text'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder='Search for movies...'
                  className='w-full pl-12 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200'
                />
              </div>
            </form>

            <div className='flex flex-wrap items-center justify-between gap-4'>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className='flex items-center space-x-2 bg-gray-700/50 text-white px-4 py-2 rounded-lg hover:bg-gray-600/50 transition-colors duration-200'
              >
                <Filter className='h-4 w-4' />
                <span>Filters</span>
              </button>

              {(searchQuery || selectedGenre || sortBy !== 'popularity') && (
                <button
                  onClick={clearFilters}
                  className='flex items-center space-x-2 bg-red-600/20 text-red-400 px-4 py-2 rounded-lg hover:bg-red-600/30 transition-colors duration-200'
                >
                  <X className='h-4 w-4' />
                  <span>Clear Filters</span>
                </button>
              )}
            </div>

            {showFilters && (
              <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <label className='block text-sm font-medium text-gray-300 mb-2'>
                    Genre
                  </label>
                  <select
                    value={selectedGenre || ''}
                    onChange={(e) =>
                      setSelectedGenre(
                        e.target.value ? Number(e.target.value) : null
                      )
                    }
                    className='w-full bg-gray-700/50 border border-gray-600 rounded-lg text-white px-3 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-transparent'
                  >
                    <option value=''>All Genres</option>
                    {genres.map((genre) => (
                      <option key={genre.id} value={genre.id}>
                        {genre.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-300 mb-2'>
                    Sort By
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className='w-full bg-gray-700/50 border border-gray-600 rounded-lg text-white px-3 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-transparent'
                  >
                    <option value='popularity'>Popularity</option>
                    <option value='vote_average'>Rating</option>
                    <option value='release_date'>Release Date</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Results Section */}
          <div className='mb-8'>
            <div className='flex items-center justify-between mb-6'>
              <h2 className='text-2xl font-bold text-white'>
                {searchQuery
                  ? `Search Results for "${searchQuery}"`
                  : 'Discover Movies'}
              </h2>
              <div className='text-gray-400'>
                Page {currentPage} of {totalPages}
              </div>
            </div>

            {loading ? (
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
                {Array.from({ length: 20 }).map((_, index) => (
                  <div
                    key={index}
                    className='bg-gray-800/50 rounded-2xl overflow-hidden animate-pulse'
                  >
                    <div className='aspect-[2/3] bg-gray-700'></div>
                    <div className='p-4 space-y-3'>
                      <div className='h-4 bg-gray-700 rounded'></div>
                      <div className='h-3 bg-gray-700 rounded w-3/4'></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : movies.length === 0 ? (
              <div className='text-center py-12'>
                <Film className='h-16 w-16 text-gray-500 mx-auto mb-4' />
                <p className='text-gray-400 text-lg'>No movies found</p>
              </div>
            ) : (
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
                {movies.map((movie) => (
                  <Link
                    key={movie.id}
                    to={`/movie/${movie.id}`}
                    className='bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105'
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
                    </div>
                    <div className='p-4'>
                      <h3 className='text-white font-semibold mb-2 line-clamp-2 group-hover:text-cyan-400 transition-colors duration-300'>
                        {movie.title}
                      </h3>
                      <div className='flex items-center justify-between mb-2'>
                        <div className='flex items-center space-x-1'>
                          <Star className='h-4 w-4 text-yellow-400 fill-current' />
                          <span className='text-yellow-400 text-sm font-semibold'>
                            {formatRating(movie.vote_average)}
                          </span>
                        </div>
                        <div className='flex items-center space-x-1 text-gray-400'>
                          <Calendar className='h-3 w-3' />
                          <span className='text-xs'>
                            {formatDate(movie.release_date)}
                          </span>
                        </div>
                      </div>
                      {getGenreNames(movie.genre_ids) && (
                        <p className='text-gray-400 text-xs line-clamp-1'>
                          {getGenreNames(movie.genre_ids)}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className='flex justify-center items-center space-x-2'>
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className='px-4 py-2 bg-gray-700/50 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600/50 transition-colors duration-200'
              >
                Previous
              </button>
              <div className='flex space-x-1'>
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  const page =
                    Math.max(1, Math.min(totalPages - 4, currentPage - 2)) + i;
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-3 py-2 rounded-lg transition-colors duration-200 ${
                        currentPage === page
                          ? 'bg-cyan-500 text-white'
                          : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>
              <button
                onClick={() =>
                  setCurrentPage(Math.min(totalPages, currentPage + 1))
                }
                disabled={currentPage === totalPages}
                className='px-4 py-2 bg-gray-700/50 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600/50 transition-colors duration-200'
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieSearch;
