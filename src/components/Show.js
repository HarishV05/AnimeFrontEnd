import axios from "axios";
import React, { Component } from "react";

class Showdata extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8080/g')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
        <div>
        <h2 className="text" >ANIME TABLE</h2>
        
      <table border={1}>
      <thead>
        <tr>
          <th>serialno</th>
          <th>animename</th>
          <th>maincharacter</th>
          <th>ratings</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.id}>
            <td>{user.serialno}</td>
            <td>{user.animename}</td>
            <td>{user.maincharacter}</td>
            <td>{user.ratings}</td>
          </tr>
        ))}
      </tbody>
    </table></div>
    );
  }}
  
export default Showdata;