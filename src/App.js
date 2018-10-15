import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import WrappedNormalLoginForm from './components/auth/LoginDisplay';
//import Home from './components/home/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <Routes/>
      </div>
    );
  }
}

export default App;
