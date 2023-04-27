import './App.css';
import React, { useState } from 'react'
import Banner from './Components/Banner/Banner';
import MovieCard from './Components/MovieCard/MovieCard';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import Navbar from './Components/Navbar/Navbar';
// import { rowUrls } from './Urls/urls'
import { originals,actions, documentaries,horror,comedy } from './Urls/urls';

function App() {

  const [showMovieDetails, setShowMovieDetails] = useState(false);
  console.log(showMovieDetails)
  console.log('showMovieDetails in app.js above-------')

  // State to hold details of currently selected movie
  const [selectedMovieDetails, setSelectedMovieDetails] = useState(null);
  console.log(selectedMovieDetails)
  console.log('selectedMovieDetails in app.js above-------')
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

export default App;

{/* <MovieCard url={[originals]} /> */}