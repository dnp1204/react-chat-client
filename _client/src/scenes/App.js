import React, { Component } from 'react';
import MainScene from './main/MainScene';
// import io from 'socket.io-client';
// import Login from './login/Login';

class App extends Component {
  componentDidMount() {
    // let socket = io('http://localhost:5000');
    // socket.emit('user');
  }

  render() {
    return <MainScene />;
  }
}

export default App;
