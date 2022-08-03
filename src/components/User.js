import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class User extends Component {

  updateUser = () => this.props.updateCurrentUser(this.props.user.id)

  render() {
    let user = this.props.user
      const myStyle = {
        backgroundColor: `${user.backgroudColor}`,
      };
    return (
        <div className={`user`} >  
            <Link to ={`/catalog`} state = {{id : user.id}} onClick = {this.updateUser}
            className = {`link user`}  style = {myStyle}>
              <div className='name-text'>{user.name}</div>
            </Link>
        </div>
    )
  }
}

export default User