import React, { Component } from 'react';
import FriendSection from './layout/FriendSection/FriendSection';
import MessageSection from './layout/MessageSection/MessageSection';
import ToolSection from './layout/ToolSection/ToolSection';

class App extends Component {
  render() {
    return (
      <div id="app">
        <div className="section"><FriendSection /></div>
        <div className="section"><MessageSection /></div>
      </div>
    );
  }
}

export default App;