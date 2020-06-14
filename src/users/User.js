import React, { Component } from 'react';
import 'tachyons';

// class User extends Component {
//   render() {
//     return (
//       <div className="tc">
//         <h2> Name: {this.props.name} | Age: {this.props.age} </h2>
//       </div>
//     )
//   }
// }

const User = (props) => {
  return (
    <div className="bg-light">
      <h2 className=" text-secondary pb-2"> Name: {props.name} | Age: {props.age} </h2>
    </div>
  )
}

export default User;
