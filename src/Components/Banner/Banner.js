import React, { useState, useEffect } from 'react'
import "./Banner.css"
import ActorCard from '../ActorCard/ActorCard'
import axios from 'axios'
import { BaseUrl, MovieDetails, ImageBaseUrl, useNavigate } from '../index'
const APIKey = process.env.REACT_APP_API_KEY
const MAX_LENGTH = 34;
const profilePicture = ImageBaseUrl+'/t/p/w220_and_h330_face'
const bannerImageLink = 'https://image.tmdb.org/t/p/original';
const Banner = () => {
    const navigate = useNavigate()
    const [cast, setCast] = useState()
    const [movie, setMovie] = useState()
    (movie);
    const bannerlink = `https://api.themoviedb.org/3/trending/all/week?api_key=${APIKey}&language=en-US`
    
    const handleNavigate = () => {
        navigate(`/movie/${movie?.id}`)
    }

    // Banner API
    useEffect(() => {
        axios.get(bannerlink).then((resoponse) => {
            setMovie(resoponse.data.results[0])
            (resoponse.data);
        })
    }, [])

    useEffect(() => {
        if (movie) {
            const id = movie.id
            const castLink = `http://api.themoviedb.org/3/movie/${id}/casts?api_key=${APIKey}`
            axios.get(castLink).then(resoponse => {
                setCast(resoponse.data.cast)
                // (resoponse.data.cast)
            })
        }
    }, [movie])
    return (

        <div className='banner' style={{
            backgroundImage: `url(${movie && bannerImageLink+movie.backdrop_path})`
        }}>
            <div className='text'>

                <h1 onClick={handleNavigate}>{movie ?
                    (movie.title || movie.name).length > MAX_LENGTH ?
                        (movie.title || movie.name).slice(0, MAX_LENGTH) + "..." :
                        (movie.title || movie.name) :
                    ""}</h1>
                <p>{movie ? movie.overview.slice(0, 200) + "..." : ""}</p>
                <div className='actor-container'>
                    {cast && cast.slice(0, 3).map(actor => (

                        <div>
                            <ActorCard name={actor.name} profilePicture={`${profilePicture + actor.profile_path}`} popularity={actor.popularity} />
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Banner

