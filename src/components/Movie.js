import React, { Component } from 'react'
import M from 'materialize-css'
import { Link } from 'react-router-dom'
export class Movie extends Component {

 
  addMovie = () => this.props.addMovie(this.props.user.id , this.props.movie.id)
  removeMovie = () => this.props.removeMovie(this.props.user.id , this.props.movie.id)
  render() {
    const movie = this.props.movie
    const isPurchased = this.props.isPurchased
    return (
      <div className='whole-move-div'>
        <button onClick={isPurchased ? this.removeMovie: this.addMovie}className={`btn-movie ${isPurchased?`Remove`:`Buy`}`}>
        {isPurchased ? `Remove` : `Add`}</button>
        <Link to={`/movies/${movie.id}`} state = {movie} >
          <div className='movie'>
            <img src = {`${movie.img}`} className ={`movies-img`} ></img>
            <span className='movie-name'>{movie.title}</span>
          </div>
        </Link>
      </div>
    )
  }
}

export default Movie