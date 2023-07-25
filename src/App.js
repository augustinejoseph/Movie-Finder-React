import './App.css';
import React, { useState } from 'react'
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import {HomePage, MovieDetails, ActorDetails} from './Components/index'
function App() {

  


  return (

    <Router>
      <Routes>
        <Route path="/" element = {< HomePage />} />
        <Route path="/actor/:name" element = {<ActorDetails />} />
        <Route path="/movie/:movieId" element={< MovieDetails /> } />
      </Routes>
    </Router>
  );
}

export default App;

{/* <MovieCard url={[originals]} /> */}