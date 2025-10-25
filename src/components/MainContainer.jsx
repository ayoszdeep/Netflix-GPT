import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

export const MainContainer = () => {
    const movies=useSelector(store=>store.movies?.nowPlayingMovies)
    if(movies===null) return;
    const MainMovie=movies[0];
    // console.log(MainMovie);
    
  return (
    <div>
          <VideoTitle/>
        <VideoBackground/>
      

    </div>
  )
}
