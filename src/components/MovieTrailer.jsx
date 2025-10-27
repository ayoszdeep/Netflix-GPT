import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailers } from '../utils/moviesSlice';


const MovieTrailer=({movieId})=>{
      const dispatch = useDispatch();
  
 const getMovies = async () => {
  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    console.log(json);

    const trailer = json.results.find(
      (video) => video.type?.toLowerCase() === "trailer"
    );

    
    const trailerKey = trailer ? trailer.key : json.results[0]?.key;

    
    dispatch(addTrailers(trailerKey));
  } catch (error) {
    console.error("Error fetching movie trailers:", error);
  }
};

  useEffect(() => {
    getMovies();
  }, []);

};
export default MovieTrailer;