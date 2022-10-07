import './App.css';
import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  // mounting => outputting react element into an actual DOM element
  
  componentDidMount() {
    // get data from api using axios
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const userList = res.data;
        console.log(userList);
        this.setState({ items: userList });
      })

      // get data from api using fetch method

    // fetch(
    //   "https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((json) => {
    //     this.setState({
    //       items: json,
    //       DataisLoaded: true
    //     });
    //     console.log(json);
    //   })
  }

  render() {
    return (
      <div className="table-outline">
        <table className="table">
          <thead>
            <tr>
              <td>Id.</td>
              <td>Name</td>
              <td>Username</td>
              <td>Email</td>
              <td>Phone</td>
              <td>Website</td>
              <td>City</td>
              <td>Street</td>
              <td>ZipCode</td>
              <td>Suite</td>
              <td>Company Name</td>
            </tr>
          </thead>
          {this.state.items.map((item, index) => {
            return (
              <tbody key={item.id}>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.website}</td>
                  <td>{item.address.city}</td>
                  <td>{item.address.street}</td>
                  <td>{item.address.zipcode}</td>
                  <td>{item.address.suite}</td>
                  <td>{item.company.name}</td>
                  <td style={{ width: 100 }} className="text-center">
                  </td>
                </tr>
              </tbody>
            )
          })}
        </table>
      </div>
    );
  }
}

export default App;