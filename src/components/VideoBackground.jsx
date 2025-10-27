import React from 'react'
import { useSelector } from 'react-redux'
import MovieTrailer from './movieTrailer'

const VideoBackground = ({ movieId }) => {
  const trailerKey = useSelector((store) => store.movies?.addTrailers)

  

  return (
    <div className="w-full aspect-video bg-black relative overflow-hidden">
     
      <MovieTrailer movieId={movieId} />

      {/* dim overlay for better contrast */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

    <div className="relative w-full h-[100vh] overflow-hidden">
  {trailerKey ? (
    <iframe
      className="absolute top-0 left-0 w-full h-full object-cover"
      src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist=${trailerKey}&modestbranding=1&showinfo=0`}
      title="YouTube video player"
      // frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
      allowFullScreen
    />
  ) : (
    <div className="w-full h-full flex items-center justify-center text-white">
      Loading trailer…
    </div>
  )}
</div>

    </div>
  )
}

export default VideoBackground