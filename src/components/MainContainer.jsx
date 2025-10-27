import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

export const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    const [mainMovie, setMainMovie] = useState(null)

    useEffect(() => {
        const getRandomMovie = () => {
            if (!movies || movies.length === 0) return null;
            const randomIndex = Math.floor(Math.random() * movies.length)
            return movies[randomIndex]
        }

        setMainMovie(getRandomMovie())

        
        const intervalId = setInterval(() => {
            setMainMovie(getRandomMovie())
        }, 2 * 60 * 1000) 

        // Cleanup interval on unmount
        return () => clearInterval(intervalId)
    }, [movies])

    if (!movies || !mainMovie) return null;
    
    const {overview, original_title, id} = mainMovie
    
    
    
  return (
    <div className="relative w-full">
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
