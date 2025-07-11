import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Star,
  Calendar,
  Clock,
  Globe,
  Play,
  Heart,
  Bookmark,
  Share2,
  Users,
  Award,
  TrendingUp,
} from 'lucide-react';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [videos, setVideos] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const API_KEY = 'c0478f6d7e5895ce610c11bbd723951a';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
  const BACKDROP_BASE_URL = 'https://image.tmdb.org/t/p/w1280';

  useEffect(() => {
    if (id) {
      fetchMovieDetails();
      fetchMovieCredits();
      fetchMovieVideos();
      fetchSimilarMovies();
    }
  }, [id]);

  const fetchMovieDetails = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
      );
      if (!response.ok) throw new Error('Failed to fetch movie details');

      const data = await response.json();
      setMovie(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const fetchMovieCredits = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
      );
      if (response.ok) {
        const data = await response.json();
        setCast(data.cast.slice(0, 12));
      }
    } catch (err) {
      console.error('Error fetching credits:', err);
    }
  };

  const fetchMovieVideos = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`
      );
      if (response.ok) {
        const data = await response.json();
        setVideos(
          data.results.filter((video) => video.site === 'YouTube').slice(0, 6)
        );
      }
    } catch (err) {
      console.error('Error fetching videos:', err);
    }
  };

  const fetchSimilarMovies = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`
      );
      if (response.ok) {
        const data = await response.json();
        setSimilarMovies(data.results.slice(0, 8));
      }
    } catch (err) {
      console.error('Error fetching similar movies:', err);
    }
  };

  const formatRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className='min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pt-16'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
          <div className='animate-pulse'>
            <div className='h-96 bg-gray-700 rounded-2xl mb-8'></div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
              <div className='lg:col-span-2 space-y-4'>
                <div className='h-8 bg-gray-700 rounded w-3/4'></div>
                <div className='h-4 bg-gray-700 rounded'></div>
                <div className='h-4 bg-gray-700 rounded w-5/6'></div>
              </div>
              <div className='space-y-4'>
                <div className='h-64 bg-gray-700 rounded'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !movie) {
    return (
      <div className='min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pt-16'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
          <div className='text-center'>
            <h1 className='text-2xl font-bold text-white mb-4'>
              Movie Not Found
            </h1>
            <p className='text-gray-400 mb-8'>
              {error || 'The requested movie could not be found.'}
            </p>
            <Link
              to='/movie'
              className='bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors duration-200'
            >
              Back to Movies
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pt-16'>
      {/* Hero Section with Backdrop */}
      <div className='relative h-96 md:h-[500px] overflow-hidden'>
        <div className='absolute inset-0'>
          <img
            src={
              movie.backdrop_path
                ? `${BACKDROP_BASE_URL}${movie.backdrop_path}`
                : '/api/placeholder/1280/720'
            }
            alt={movie.title}
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/30'></div>
        </div>

        <div className='relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-8'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 w-full'>
            <div className='lg:col-span-2'>
              <Link
                to='/movies'
                className='inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 mb-4 transition-colors duration-200'
              >
                <ArrowLeft className='h-5 w-5' />
                <span>Back to Movies</span>
              </Link>

              <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>
                {movie.title}
              </h1>
              {movie.tagline && (
                <p className='text-xl text-cyan-400 mb-4 italic'>
                  "{movie.tagline}"
                </p>
              )}

              <div className='flex flex-wrap items-center gap-4 mb-6'>
                <div className='flex items-center space-x-1'>
                  <Star className='h-5 w-5 text-yellow-400 fill-current' />
                  <span className='text-yellow-400 font-semibold text-lg'>
                    {movie.vote_average.toFixed(1)}
                  </span>
                  <span className='text-gray-300'>
                    ({movie.vote_count.toLocaleString()} votes)
                  </span>
                </div>

                <div className='flex items-center space-x-1 text-gray-300'>
                  <Calendar className='h-4 w-4' />
                  <span>{formatDate(movie.release_date)}</span>
                </div>

                <div className='flex items-center space-x-1 text-gray-300'>
                  <Clock className='h-4 w-4' />
                  <span>{formatRuntime(movie.runtime)}</span>
                </div>
              </div>

              <div className='flex flex-wrap gap-2 mb-6'>
                {movie.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className='bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm border border-cyan-500/30'
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Main Content */}
          <div className='lg:col-span-2'>
            {/* Tabs */}
            <div className='flex space-x-1 mb-8 bg-gray-800/50 rounded-lg p-1'>
              {[
                { key: 'overview', label: 'Overview', icon: Globe },
                { key: 'cast', label: 'Cast', icon: Users },
                { key: 'videos', label: 'Videos', icon: Play },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                    activeTab === tab.key
                      ? 'bg-cyan-500 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  <tab.icon className='h-4 w-4' />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50'>
              {activeTab === 'overview' && (
                <div className='space-y-6'>
                  <div>
                    <h3 className='text-xl font-semibold text-white mb-3'>
                      Synopsis
                    </h3>
                    <p className='text-gray-300 leading-relaxed'>
                      {movie.overview}
                    </p>
                  </div>

                  {movie.production_companies.length > 0 && (
                    <div>
                      <h3 className='text-xl font-semibold text-white mb-3'>
                        Production Companies
                      </h3>
                      <div className='flex flex-wrap gap-4'>
                        {movie.production_companies
                          .slice(0, 4)
                          .map((company) => (
                            <div key={company.id} className='text-gray-300'>
                              {company.name}
                            </div>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'cast' && (
                <div>
                  <h3 className='text-xl font-semibold text-white mb-6'>
                    Cast
                  </h3>
                  <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {cast.map((actor) => (
                      <div key={actor.id} className='text-center'>
                        <div className='aspect-square rounded-lg overflow-hidden mb-2'>
                          <img
                            src={
                              actor.profile_path
                                ? `${IMAGE_BASE_URL}${actor.profile_path}`
                                : '/api/placeholder/200/300'
                            }
                            alt={actor.name}
                            className='w-full h-full object-cover'
                          />
                        </div>
                        <h4 className='text-white font-medium text-sm'>
                          {actor.name}
                        </h4>
                        <p className='text-gray-400 text-xs'>
                          {actor.character}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'videos' && (
                <div>
                  <h3 className='text-xl font-semibold text-white mb-6'>
                    Videos & Trailers
                  </h3>
                  {videos.length > 0 ? (
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      {videos.map((video) => (
                        <div
                          key={video.id}
                          className='bg-gray-700/50 rounded-lg overflow-hidden'
                        >
                          <div className='aspect-video bg-gray-600 flex items-center justify-center'>
                            <a
                              href={`https://www.youtube.com/watch?v=${video.key}`}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors duration-200'
                            >
                              <Play className='h-8 w-8' />
                              <span>Watch on YouTube</span>
                            </a>
                          </div>
                          <div className='p-3'>
                            <h4 className='text-white font-medium text-sm'>
                              {video.name}
                            </h4>
                            <p className='text-gray-400 text-xs'>
                              {video.type}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className='text-gray-400'>No videos available</p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className='space-y-6'>
            {/* Poster */}
            <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50'>
              <img
                src={
                  movie.poster_path
                    ? `${IMAGE_BASE_URL}${movie.poster_path}`
                    : '/api/placeholder/300/450'
                }
                alt={movie.title}
                className='w-full rounded-lg mb-4'
              />

              <div className='flex space-x-2'>
                <button className='flex-1 bg-cyan-500 text-white py-2 px-4 rounded-lg hover:bg-cyan-600 transition-colors duration-200 flex items-center justify-center space-x-2'>
                  <Play className='h-4 w-4' />
                  <span>Watch Trailer</span>
                </button>
                <button className='bg-gray-700/50 text-white p-2 rounded-lg hover:bg-gray-600/50 transition-colors duration-200'>
                  <Heart className='h-4 w-4' />
                </button>
                <button className='bg-gray-700/50 text-white p-2 rounded-lg hover:bg-gray-600/50 transition-colors duration-200'>
                  <Bookmark className='h-4 w-4' />
                </button>
              </div>
            </div>

            {/* Movie Info */}
            <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50'>
              <h3 className='text-lg font-semibold text-white mb-4'>
                Movie Info
              </h3>
              <div className='space-y-3 text-sm'>
                <div className='flex justify-between'>
                  <span className='text-gray-400'>Status:</span>
                  <span className='text-white'>{movie.status}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-400'>Budget:</span>
                  <span className='text-white'>
                    {movie.budget ? formatCurrency(movie.budget) : 'N/A'}
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-400'>Revenue:</span>
                  <span className='text-white'>
                    {movie.revenue ? formatCurrency(movie.revenue) : 'N/A'}
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-400'>Popularity:</span>
                  <span className='text-white'>
                    {movie.popularity.toFixed(1)}
                  </span>
                </div>
                {movie.spoken_languages.length > 0 && (
                  <div className='flex justify-between'>
                    <span className='text-gray-400'>Languages:</span>
                    <span className='text-white'>
                      {movie.spoken_languages
                        .map((lang) => lang.name)
                        .join(', ')}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Similar Movies */}
        {similarMovies.length > 0 && (
          <div className='mt-12'>
            <h3 className='text-2xl font-bold text-white mb-6'>
              Similar Movies
            </h3>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4'>
              {similarMovies.map((similarMovie) => (
                <Link
                  key={similarMovie.id}
                  to={`/movie/${similarMovie.id}`}
                  className='group'
                >
                  <div className='aspect-[2/3] rounded-lg overflow-hidden mb-2'>
                    <img
                      src={
                        similarMovie.poster_path
                          ? `${IMAGE_BASE_URL}${similarMovie.poster_path}`
                          : '/api/placeholder/200/300'
                      }
                      alt={similarMovie.title}
                      className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                    />
                  </div>
                  <h4 className='text-white text-sm font-medium line-clamp-2 group-hover:text-cyan-400 transition-colors duration-200'>
                    {similarMovie.title}
                  </h4>
                  <div className='flex items-center space-x-1 mt-1'>
                    <Star className='h-3 w-3 text-yellow-400 fill-current' />
                    <span className='text-yellow-400 text-xs'>
                      {similarMovie.vote_average.toFixed(1)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
