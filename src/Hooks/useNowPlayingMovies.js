import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';
// components/Browse.jsx (or Browser.jsx)
import React, { useEffect } from 'react'
const useNowPlayingMovies=()=>{
    const dispatch = useDispatch();

async function getNowPlayingMovies() {
  try {
    const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const data = await res.json();
    dispatch(addNowPlayingMovies(data.results));
    console.log(data.results);
    
  } catch (err) {
    console.error(err);
  }
}

useEffect(() => {
  getNowPlayingMovies();
}, []);
}
export default useNowPlayingMovies;