import React from 'react'

const MovieCard = ({ movie }) => {
  return (
    <div>
        <div>
          {movie.Year}
        </div>
        <div>
          <img src= {movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300'} alt = {movie.Title}/>
        </div>
        <div>
          <span>{movie.Type.toUpperCase()}</span>
          <h3>{movie.Title}</h3>
        </div>
    </div>
  )
}

export default MovieCard