import './MovieDetails.scss'
import { useEffect, useParams, BaseUrl, axios, useState, LoadingModal } from '../index'

const api_read_token = process.env.REACT_APP_API_READ_TOKEN
const api_key = process.env.REACT_APP_API_KEY;

const MovieDetails = ({ movieDetails, onClose }) => {
  const [fullMovieDetails, setFullMovieDetails] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        ('movieId:', movieId); 

        if (!movieId) {
          return; 
        }

        const url = `${BaseUrl}/3/movie/${movieId}`;
        const headers = {
          'Accept': 'application/json',
          'Authorization': `Bearer ${api_read_token}`
        };

        const response = await axios.get(url, { headers });
        setFullMovieDetails(response.data);
        ('response:', response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchData();
  }, [movieId]);













  if (!fullMovieDetails) {
    return <div> <LoadingModal /> </div>;
  }


  return (
    <div className='modal'>
      <div className='modal__content'>
        <div className='modal__header'>
          <h1 className='modal__title'>{fullMovieDetails.original_title}</h1>
          <button className='modal__close' onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className='modal__body'>
          <img src={`https://image.tmdb.org/t/p/w500/${fullMovieDetails.poster_path}`} alt={fullMovieDetails.title} className='modal__poster' />
          <div className='modal__details'>
            {/* <p><strong>Genres:</strong> {genres}</p> */}
            <p><strong>Release Date:</strong> {fullMovieDetails.release_date}</p>
            {/* <p><strong>Runtime:</strong> {runtime}</p> */}
            <p><strong>Overview:</strong> {fullMovieDetails.overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
