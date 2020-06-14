import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// function Greet(props) {
//   const username = props.firstname + " " + props.lastname;
//   return (
//     <h1>Hello {username}</h1>
//   )
// }

// class Greet extends Component {
//   render() {
//     const username = this.props.firstname + " " + this.props.lastname;
//     return (
//       <h1>Hello {username}</h1>
//     )
//   }
// }

class userInput extends Component {
  render() {
    return (
      <form className="text-center">
        <div className="form-group">
          <label>First Name: <input type="text" className="form-control" placeholder="Enter your first name"/></label>
        </div>
        <div className="form-group">
          <label>Last Name: <input type="text" className="form-control" placeholder="Enter your last name"/></label>
        </div>
        <div class="form-check-label">
          <input className="btn btn-primary" type="submit" name="submit"/>
        </div>
      </form>
    )
  }
}

export default userInput;
