import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies)
  return (
    <div className='bg-black '>

     <div className='relative z-20'>
       <MovieList title={"Now Playing"} movies={movies}/>
     </div>
      
    </div>
  )
}

export default SecondaryContainer