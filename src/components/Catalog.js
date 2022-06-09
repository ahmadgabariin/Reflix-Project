import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Movie from './Movie'
import SearchCatalog from './SearchCatalog'
import UserMovies from './UserMovies'


export function Catalog (props) {
  const location = useLocation()
  const userID = location.state ? location.state.id : props.userID != undefined ? props.userID : undefined
  const user = props.users.find(user => user.id == userID)
  const addMovie = props.addMovie
  const removeMovie = props.removeMovie
  const [searchText , setSearchText] = useState(``)
  const [movies, setMovies] = useState([
      { id: 0, isRented: false, title: "Tarzan", year: 1999, img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out." },
      { id: 1, isRented: false, title: "The Lion King", img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg", year: 1994, descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies." },
      { id: 2, isRented: false, title: "Beauty and the Beast", year: 1991, img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg", descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself." },
      { id: 3, isRented: false, title: "The Sword in the Stone", year: 1963, img: "https://www.disneyinfo.nl/images/laserdiscs/229-1-AS-front.jpg", descrShort: "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means." },
      { id: 4, isRented: false, title: "Beauty and the Beast", year: 2016, img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." }
    ])
  const showUserMovie = Object.keys(user.movies).length > 0 ? true : false
  
    if (userID != undefined){
      return (
        <div className='body'>
          <div >
            <div className='catalog-header'>
              <input className='search-input' placeholder='Search' onChange={search} value = {searchText}></input>
              <span className='budget-text'>Budget: $<span className='budget-value'>{user.budget}</span></span>
            </div> 
          { searchText
           ?<SearchCatalog movies = {movies} user = {user} addMovie={addMovie} removeMovie = {removeMovie} movieName = {searchText}/>
           : console.log(`no`)
           }
          
          {showUserMovie 
          ? <UserMovies movies = {movies} user = {user} addMovie={addMovie} removeMovie = {removeMovie} />
          :``}

            <div>
              <div className='catalog-title'>Catalog : </div>
              <div className='movies'>
                { movies.map(movie => 
                <Movie key={movie.id} movie = {movie} user = {user} addMovie={addMovie} isPurchased = {user.movies[movie.id]} 
                removeMovie = {removeMovie} />
                )}
              </div>
            </div>
            
          </div>
  
        </div>
      )
    
    } else {
      return (
        <div className='no-user'>Please Select A User !</div>
      )
    }
    function search (event) {
      setSearchText(event.target.value)
    }
    
} 


export default Catalog