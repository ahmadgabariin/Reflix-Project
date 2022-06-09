import React, { Component } from 'react'
import Movie from './Movie'

export class SearchCatalog extends Component {
  render() {
    const movies = this.props.movies
    const movieName = this.props.movieName.toLocaleLowerCase()
    const user = this.props.user
    const addMovie = this.props.addMovie
    const removeMovie= this.props.removeMovie
    return (
      <div className='SearchCatalog'>
          <div className='movies'>
              {
                  movies.map( movie => movie.title.toLocaleLowerCase().includes(movieName) 
                  ?<Movie key={movie.id} movie = {movie} user = {user} addMovie={addMovie} isPurchased = {user.movies[movie.id]} 
                    removeMovie = {removeMovie} />
                  :``
                  )
              }        
          </div>
      </div>
    )
  }
}

export default SearchCatalog