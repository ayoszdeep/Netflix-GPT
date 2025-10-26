import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailers } from '../utils/moviesSlice';


const MovieTrailer=({movieId})=>{
      const dispatch = useDispatch();
  
  const getMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const trailer = json.results.find((video) => video.type === "Trailer");
    dispatch(addTrailers(trailer?.key));
  };

  useEffect(() => {
    getMovies();
  }, []);

};
export default MovieTrailer;