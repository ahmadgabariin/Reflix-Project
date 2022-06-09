import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Landing from './components/Landing';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Catalog from './components/Catalog';
import Header from './components/Header';
import MovieDetail from './components/MovieDetail';

class App extends Component {
 constructor () {
   super()
   this.state = {
    users : [
      {id : 0 ,name : `Ahmad`, budget : 1000 , backgroudColor : `red`, movies : {}},
      {id : 1 ,name : `Kahled`, budget : 800 , backgroudColor : `blue`, movies : {}},
      {id : 2 ,name : `Ameer`, budget : 745 , backgroudColor : `purple`, movies : {}},
      {id : 3 ,name : `Yaser`, budget : 640 , backgroudColor : `green`, movies : {}},
    ]
    ,
    currentUser : undefined
  }
 }

 updateCurrentUser = (userID) => this.setState({
   currentUser : userID
 })

 userAddMovie = (userID , movieID) => {
  let movieCost = 20
  let users = [... this.state.users]
  let user = users.find(user => user.id === userID)
  if (! user.movies[movieID] && user.budget - movieCost >= 20) {
    user.movies[movieID] = true
    user.budget = user.budget - movieCost
    this.setState({
      users : users
    })
  }
  else { return `no budget` }
}

removeMovie = (userID , movieID) => {
  let users = this.state.users
  let user = users.find(user => user.id == userID)
  delete user.movies[movieID] 
  this.setState({
    users : users
  })
}

 render () {
   return (
     <div>
       <Router>
         <Header/>
         <Routes>
            <Route path='/' element = {<Landing users = {this.state.users} updateCurrentUser = {this.updateCurrentUser} />} ></Route>
            <Route path='/catalog' element = {<Catalog addMovie = {this.userAddMovie} users = {this.state.users} 
            removeMovie = {this.removeMovie} userID = {this.state.currentUser} />} >     
            </Route>
            <Route path='/movies/:movieID' element={<MovieDetail/>}></Route>
         </Routes>
       </Router>
     </div>
   )
 }
}

export default App;
