const  APIKey = process.env.REACT_API_KEY;
export {APIKey};
export {useState, useContext, useEffect} from 'react'
export {useNavigate, useParams} from 'react-router-dom';
export {default as MovieCard} from "./MovieCard/MovieCard";
export {default as MovieDetails} from "./MovieDetails/MovieDetails";
export {default as Navbar} from "./Navbar/Navbar";
export {default as HomePage } from './HomePage/HomePage'
export { ImageBaseUrl } from "../Constants/Constants";
export { BaseUrl } from "../Constants/Constants";
export {default as Banner} from './Banner/Banner'
export {default as ActorDetails} from './ActorDetails.jsx/ActorDetails';
export {default as axios} from 'axios'
export {default as LoadingModal} from './LoadingModal/LoadingModal';