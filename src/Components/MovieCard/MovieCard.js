import React, { useState, useEffect } from 'react'
import './MovieCard.scss'
import axios from 'axios'
import { rowUrls } from '../../Urls/urls'
import { API_KEY } from '../../Constants/Constants'
import Swal from 'sweetalert2'
import MovieDetails from '../MovieDetails/MovieDetails'


const MovieCard = (props) => {
    // Movie details from movie id
    const [movieDetails, setMovieDetails] = useState(null)
    // console.log(movieDetails)
    const handleFetchMovieDetails = (movieId) => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
            .then(response => {
                setMovieDetails(response.data)
                props.onMovieClick(movieDetails); 
                console.log(movieDetails)
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    title: 'Error',
                    text: 'Resource Not Found',
                    icon: 'error'

                })
            });

    }
    


    //Movie Card Details
    const posterUrl = 'https://image.tmdb.org/t/p/w220_and_h330_face'

    const [movies, setMovie] = useState([])
    // console.log("movies-array------------"+movies)
    // console.log("url------------"+props.url)
    useEffect(() => {
        axios.get(props.url).then((response) => {
            setMovie(response.data.results)
            // console.log(props.log);
            // console.log(response.data.results)
            // console.log(typeof response.data.results)
        })
    }, [])


    //Return
    return (


        <div>
            <div className='genre-title'>
                <h1 className='genre-h1' >{props.title}</h1>
            </div>
            <div className='wrapper'>

                {movies.map(movie => (
                    <div onClick={() => handleFetchMovieDetails(movie.id)} className='card'>
                        <div className="card__body">
                            <img className='class__image' src={posterUrl + movie.poster_path} />
                            <div className="card__title">
                                <h2 >{movie ? (movie.name || movie.title) : ""}</h2>
                                <h1>{movie.vote_average}</h1>
                            </div>
                            <p className="card__description">{movie.overview.slice(0, 120) + '...'}</p>
                        </div>
                        {/* <button onClick={() => handleFetchMovieDetails(movie.id)} className="card__btn">View More</button> */}
                        <button className="card__btn">View More</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MovieCard
