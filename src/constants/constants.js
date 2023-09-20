export const baseUrl='https://api.themoviedb.org/3'
export const API_KEY ='ee2bfb996ed44921ad73a503cb52a9fc'
export const imageUrl='https://image.tmdb.org/t/p/original'



// import React, { useEffect, useState } from 'react'
// import axios  from '../../../axios'
// import {API_KEY,imageUrl} from '../../../constants/constants'
// import './Banner.css'

// function Banner() {
//        const [movies, setMovies] = useState([])
//        const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
//     useEffect(()=>{
//         axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
//             setMovies(response.data.results);
//             // console.log(response.data.results[0]);
//             // setMovie(response.data.results[0])
//         })
//     },[])

//     const changeMovie = () => {
//         // Increment the index, and wrap around if it exceeds the array length
//         setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
//       };
//       const currentMovie = movies[currentMovieIndex] || {};
//       return (
//         <div
//           style={{
//             backgroundImage: `url(${currentMovie ? imageUrl + currentMovie.backdrop_path : ''})`,
//           }}
//           className='banner'
//         >
//           <div className='content'>
//             <h1 className='title'>{currentMovie ? currentMovie.title : ''}</h1>
//             <div className='banner_buttons'>
//               <button className='button'>Play</button>
//               <button className='button'>MY list</button>
//             </div>
//             <h1 className='description'>{currentMovie ? currentMovie.overview : ''}</h1>
//             <button onClick={changeMovie}>Change Movie</button>
//           </div>
//           <div className="fade_bottom"></div>
//         </div>
//       );
//     }
    
//     export default Banner;