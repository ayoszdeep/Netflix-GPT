import React from 'react'

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null

  return (
    <div className="w-36 md:w-48 transform hover:scale-105 transition-transform duration-300 ease-out cursor-pointer">
      <img
        className="rounded-2xl shadow-lg hover:shadow-2xl p-1"
        alt="Movie Poster"
        src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
      />
    </div>
  )
}

export default MovieCard
