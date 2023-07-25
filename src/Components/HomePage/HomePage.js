import { originals,actions, documentaries,horror,comedy } from '../../Urls/urls';
import {MovieCard, Navbar, Banner, useState, MovieDetails} from '../index'
const APIKey = process.env.REACT_APP_API_KEY


function HomePage() {

  const [showMovieDetails, setShowMovieDetails] = useState(false);
  (showMovieDetails)
  ('showMovieDetails in app.js above-------')

  // State to hold details of currently selected movie
  const [selectedMovieDetails, setSelectedMovieDetails] = useState(null);
  (selectedMovieDetails)
  ('selectedMovieDetails in app.js above-------')
  const handleShowMovieDetails = (movieDetails) => {
    setSelectedMovieDetails(movieDetails);
    setShowMovieDetails(true);
  }


  return (

    <div className=''>
      <Navbar/>
      <Banner/>
      <MovieCard title={'Originals'} url ={[originals]} onMovieClick={handleShowMovieDetails} />
      <MovieCard title={'Actions'} url ={[actions]} onMovieClick={handleShowMovieDetails} />
      <MovieCard title={'Documentaries'} url ={[documentaries]} onMovieClick={handleShowMovieDetails} />
      <MovieCard title={'Horror'} url ={[horror]} onMovieClick={handleShowMovieDetails} />
      <MovieCard title={'Comedy'} url ={[comedy]} onMovieClick={handleShowMovieDetails} />
      {showMovieDetails && <MovieDetails movieDetails={selectedMovieDetails} onClose={() => setShowMovieDetails(false)} />}
    </div>
  );
}

export default HomePage;
