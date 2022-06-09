import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {

  homePage = () => {
    
  }
  render() {
    return (
    <div className='header'>
        <div className='home-tab'>
         <Link to = {`/`} ><div className='titletab text-title link'>Home</div></Link>  
         <Link to = {`/catalog`} ><div className='titletab text-title link'>Catalog</div></Link>  
        </div>
        <div className='logo-div'>
         <Link to={`/`}>
           <span className='reflex-logo' >Reflix</span>
         </Link>
        </div>
       
    </div>
    )
  }
}

export default Header