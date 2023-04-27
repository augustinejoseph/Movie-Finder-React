// import React from 'react'
// import './movieDetails.scss'

// const MovieDetails = ({MovieDetails}) => {
//     console.log(MovieDetails)
//     console.log('movieDetails....above;,,,,,,,,,,,,,,,,,,,,,,,,')
//   return (
//     <div>
//         <h1>movie Details</h1>
//       <h1>{MovieDetails ? MovieDetails.original_title : ""}</h1>
//     </div>
//   )
// }

// export default MovieDetails




// import React from 'react'

// const MovieDetails = ({ movieDetails }) => {
//   return (
//     <div className="modal">
//       <div className="modal__content">
//         <div className="modal__header">
//           <h1 className="modal__title">{movieDetails.original_title}</h1>
//           <button className="modal__close-btn">&times;</button>
//         </div>
//         <div className="modal__body">
//           <div className="modal__poster">
//             <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt={movieDetails.original_title} />
//           </div>
//           <div className="modal__details">
//             <p><strong>Release Date:</strong> {movieDetails.release_date}</p>
//             <p><strong>Runtime:</strong> {movieDetails.runtime} min</p>
//             <p><strong>Overview:</strong> {movieDetails.overview}</p>
//             <p><strong>Genres:</strong> {movieDetails.genres.map(genre => genre.name).join(', ')}</p>
//             <p><strong>Tagline:</strong> {movieDetails.tagline}</p>
//             <p><strong>Vote Average:</strong> {movieDetails.vote_average}</p>
//             <p><strong>Vote Count:</strong> {movieDetails.vote_count}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default MovieDetails

import React from 'react'
import './MovieDetails.scss'

const MovieDetails = ({ movieDetails, onClose }) => {
  console.log(movieDetails)
  console.log('movie details in movieDetails.js')

  // Movie Genres
  const genres = movieDetails.genres.map((genre) => genre.name).join(', ')

  // Movie Runtime
  // const hours = Math.floor(movieDetails.runtime / 60)
  // const minutes = movieDetails.runtime % 60
  // const runtime = `${hours}h ${minutes}min`
  if (!movieDetails) {
    return <div>Loading...</div>;
    alert('no movie details')
  }


  return (
    <div className='modal'>
      <div className='modal__content'>
        <div className='modal__header'>
          <h1 className='modal__title'>{movieDetails.original_title}</h1>
          <button className='modal__close' onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className='modal__body'>
          <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt={movieDetails.title} className='modal__poster' />
          <div className='modal__details'>
            {/* <p><strong>Genres:</strong> {genres}</p> */}
            <p><strong>Release Date:</strong> {movieDetails.release_date}</p>
            {/* <p><strong>Runtime:</strong> {runtime}</p> */}
            <p><strong>Overview:</strong> {movieDetails.overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
