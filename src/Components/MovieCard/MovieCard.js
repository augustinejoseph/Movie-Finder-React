import React, { useState, useEffect } from 'react';
import './MovieCard.scss';
import axios from 'axios';
import { BaseUrl, useNavigate } from '../index';

const api_read_token = process.env.REACT_APP_API_READ_TOKEN;
const posterUrl = 'https://image.tmdb.org/t/p/w220_and_h330_face';
const api_key = process.env.REACT_APP_API_KEY;

const MovieCard = (props) => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(props.url)
      .then((response) => setMovies(response.data.results))
      .catch((error) => ('Error fetching movie list:', error));
  }, [props.url]);

  const handleNavigateAndFetchDetails = async (movieId) => {
    try {
        if (!movieId) {
            return; 
          }
          const url = `${BaseUrl}/3/movie/${movieId}`;
          const headers = {
            'Accept': 'application/json',
            'Authorization': `Bearer ${api_key}`
          };
  
          const response = await axios.get(url, { headers });
          ('response:', response.data);

      // Update state with movie details

      // Navigate to the movie details page
      navigate(`/movie/${movieId}`);
    } catch (error) {
      ('Error fetching movie details:', error);
    }
  };

  return (
    <div>
      <div className='genre-title'>
        <h1 className='genre-h1'>{props.title}</h1>
      </div>
      <div className='wrapper'>
        {movies.map((movie) => (
          <div key={movie.id} className='card'>
            <div className='card__body'>
              <img className='class__image' src={posterUrl + movie.poster_path} alt={movie.title} />
              <div className='card__title'>
                <h2>{movie.name || movie.title}</h2>
                <h1>{movie.vote_average}</h1>
              </div>
              <p className='card__description'>{movie.overview.slice(0, 120) + '...'}</p>
            </div>
            <button onClick={() => handleNavigateAndFetchDetails(movie.id)} className='card__btn'>
              View More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCard;
