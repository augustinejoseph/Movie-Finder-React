import {BaseUrl} from '../Constants/Constants' 
const APIKey = process.env.REACT_APP_API_KEY
(' api key in urls.js', APIKey);

export const originals = `${BaseUrl}/3/discover/tv?api_key=${APIKey}&with_networks=213`
export const actions = `${BaseUrl}/3/discover/movie?api_key=${APIKey}&with_genres=28`
export const comedy = `${BaseUrl}/3/discover/movie?api_key=${APIKey}&with_genres=35`
export const horror = `${BaseUrl}/3/discover/movie?api_key=${APIKey}&with_genres=27`
export const romance = `${BaseUrl}/3/discover/movie?api_key=${APIKey}&with_genres=10749`
export const documentaries = `${BaseUrl}/3/discover/movie?api_key=${APIKey}&with_genres=99`
export const trending = `${BaseUrl}/3/discover/movie?api_key=${APIKey}&language=en-US`
