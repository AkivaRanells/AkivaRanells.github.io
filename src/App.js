import React, { Component } from 'react';
import './App.css';
import Map from './components/Map'
let users = require('./users.json');
class App extends Component {
  constructor(){
    //@ts-ignore
    super()
    this.state={
      users: users
    }
  }
  // logUser(){
  //   let user1 = this.state.users[0]
  //   console.log(+user1.name)
  // }
  render() {
    return (
      <div>
        <h1>Compie Test Map</h1>
        <Map users={users}/>
      </div>
    );
  }
}

export default App;
