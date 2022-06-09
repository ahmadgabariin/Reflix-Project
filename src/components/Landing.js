import React, { Component } from 'react'
import User from './User'

export class Landing extends Component {
  constructor () {
    super()
  }
  render() {
    let users = this.props.users
    return (
      <div className='users'>
        {users.map(user => <User user = {user} key={user.id} updateCurrentUser = {this.props.updateCurrentUser} />)}
      </div>
    )
  }
}

export default Landing