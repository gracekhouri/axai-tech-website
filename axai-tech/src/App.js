import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './components/Nav';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Home from './components/Home';


class App extends Component {
  render() {
    return (
      <div>
        <Nav/> 
        <Contact/>
      </div>
      
      
         

      
      
      
    )
  }
}

export default App;

