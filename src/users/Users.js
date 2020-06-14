import React, { Component } from 'react';
import 'tachyons';
import User from './User';

class Users extends Component {

  state = {
    users: [
      {name: "Elon Musk", age: 48},
      {name: "Bill Gates", age: 64},
      {name: "Jeff Bezos", age: 56}
    ],
    title: "User List",
    count1: 10,
    count2: 10,
    year: 10
  }

   makeUserYounger = () => {
    this.setState(
      {
        users: [
          {name: this.state.users[0].name, age: this.state.users[0].age-10},
          {name: this.state.users[1].name, age: this.state.users[1].age-10},
          {name: this.state.users[2].name, age: this.state.users[2].age-10}
        ],
        count1: this.state.count1+10,
        count2: 10,
        title: `User Age ${this.state.count1} Years Ago`
      }
    )
  }

  makeUserOlder = () => {
    this.setState(
      {
        users: [
          {name: this.state.users[0].name, age: this.state.users[0].age+10},
          {name: this.state.users[1].name, age: this.state.users[1].age+10},
          {name: this.state.users[2].name, age: this.state.users[2].age+10}
        ],
        count2: this.state.count2+10,
        count1: 10,
        title: `User Age After ${this.state.count2} Years`
      }
    )
  }

  render() {

    const userList = this.state.users.map( (user, i) => {
      return (
        <User key = {i}  age = {this.state.users[i].age}  name = {user.name} />
      )
    }
  )

    return (
      <div className="tc">
        <h1 className="text-light bg-dark pt-2 pb-2"> { this.state.title } </h1>
        <br/>
        {userList}

        <button className="btn btn-primary mr-3 mt-3 pb-2" onClick={this.makeUserYounger}> Make User {this.state.year} Years Younger </button>
        <button className="btn btn-primary mt-3 pb-2" onClick={this.makeUserOlder}> Make User {this.state.year} Years Older </button>
      </div>
    )
  }
}

export default Users;
