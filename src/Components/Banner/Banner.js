import React, { useState, useEffect } from 'react'
import "./Banner.css"
import ActorCard from '../ActorCard/ActorCard'
import axios from 'axios'
import { API_KEY } from '../../Constants/Constants'

const MAX_LENGTH = 34;
const profilePicture = 'https://image.tmdb.org/t/p/w220_and_h330_face'
const bannerImageLink = 'https://image.tmdb.org/t/p/original';
const bannerlink = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
const Banner = () => {
    const [cast, setCast] = useState()
    const [movie, setMovie] = useState()

    // Banner API
    useEffect(() => {
        axios.get(bannerlink).then((resoponse) => {
            setMovie(resoponse.data.results[0])
            // console.log(resoponse.data.results[7])
        })
    }, [])

    // Cast API 
    useEffect(() => {
        if (movie) {
            const id = movie.id
            const castLink = `http://api.themoviedb.org/3/movie/${id}/casts?api_key=${API_KEY}`



            axios.get(castLink).then(resoponse => {
                setCast(resoponse.data.cast)
                // console.log(resoponse.data.cast)
            })
        }
    }, [movie])

    return (

        <div className='banner' style={{
            backgroundImage: `url(${movie ? bannerImageLink + movie.backdrop_path : ""})`
        }}>
            <div className='text'>
                {/* <h1>{movie ? movie.name.length > MAX_LENGTH ? movie.name.slice(0, MAX_LENGTH) + "..." : movie.name : ""}</h1> */}

                <h1>{movie ?
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

