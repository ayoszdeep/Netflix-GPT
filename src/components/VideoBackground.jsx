import React from 'react'
import { useSelector } from 'react-redux'
import MovieTrailer from './movieTrailer'

const VideoBackground = ({ movieId }) => {
  const trailerKey = useSelector((store) => store.movies?.addTrailers)

  return (
    <div className="w-full aspect-video bg-black relative overflow-hidden">
      {/* side-effect component: fetches trailer and stores key in Redux */}
      <MovieTrailer movieId={movieId} />

      {/* dim overlay for better contrast */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* iframe (renders when trailerKey present) */}
      {trailerKey ? (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&rel=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      ) : (
        // placeholder while trailer loads or if none
        <div className="w-full h-full flex items-center justify-center text-white">Loading trailer…</div>
      )}
    </div>
  )
}

export default VideoBackground