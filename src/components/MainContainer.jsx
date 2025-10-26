import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

export const MainContainer = () => {
    const movies=useSelector(store=>store.movies?.nowPlayingMovies)
    if(movies===null) return;
    const MainMovie=movies[0];
    // console.log(MainMovie);
    const {overview,original_title,id}=MainMovie
    
    
    
  return (
    <div className="relative">
      <div className="relative w-full">
        <VideoBackground movieId={id} />
        <div className="absolute inset-0 pointer-events-none">
          {/* overlay content sits above the video */}
          <div className="pointer-events-auto">
            <VideoTitle title={original_title} overview={overview} />
          </div>
        </div>
      </div>
    </div>
  )
}
