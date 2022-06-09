import React, { Component } from 'react'
import Movie from './Movie'

export class UserMovies extends Component {
  render() {
      const movies = this.props.movies
      const user = this.props.user
      const addMovie = this.props.addMovie
      const removeMovie= this.props.removeMovie
    return (
      <div className='my-movies'>
          <div className='catalog-title'>My Movies : </div> 
              <div className='movies'>
              { movies.map(movie => {
                  if (user.movies[movie.id])
                  {
                    return  <Movie key={movie.id} movie = {movie} user = {user} addMovie={addMovie} isPurchased = {user.movies[movie.id]} 
                    removeMovie = {removeMovie} />
                  }
                }) }
              </div>
      </div>
    )
  }
}

export default UserMovies