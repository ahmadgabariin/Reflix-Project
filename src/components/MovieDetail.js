import React, { Component } from 'react'
import { useLocation, useParams } from 'react-router-dom'

export function MovieDetail () {
  let movieID = useParams().movieID
  let movie = useLocation().state
    return (
      <div className='movie-detail-grid-parent' >
        <div className='movie-detail-grid'>
         <span className='movie-detail'>{movie.title} ({movie.year})</span>
          <img className='movie-detail-img' src= {movie.img} ></img>
          <p className='movie-detail'>{movie.descrShort}</p>
         </div>
      </div>
   )
}

export default MovieDetail