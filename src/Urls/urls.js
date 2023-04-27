// import { API_KEY } from "../Constants/Constants"

// export const rowUrls = [
//   { title: "originals", url: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213` },
//   { title: "actions", url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28` },
//   { title: "comedy", url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35` },
//   { title: "horror", url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27` },
//   { title: "romance", url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749` },
//   { title: "documentaries", url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99` },
//   { title: "trending", url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US` }
// ];

// // // loop through the array to access the values
// // rowUrls.forEach(row => {
// //   console.log(`Title: ${row.title}, URL: ${row.url}`);
// //   // do something with the title and URL, such as make an API call using the URL
// // });



import { API_KEY } from "../Constants/Constants"

export const originals = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`
export const actions = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`
export const comedy = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`
export const horror = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`
export const romance = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`
export const documentaries = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`
export const trending = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US`
