import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './components/Nav';
import Nav from './components/Nav';
import Product from './components/Product';
import Resources from './components/Resources';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import background from './images/Background.jpeg';
import Firebase from './firebase/firebase';
import OLogin from './components/login/OLogin';
import PLogin from './components/login/PLogin';
import PropsRoute from './components/routing/PropsRoute';

// const auth = Firebase.instance().auth;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{ backgroundImage: `url(${background})` }}>
          <Nav />
          <Route path="/product" exact component={Product} />
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/resources" exact component={Resources} />
          <PropsRoute path='/ologin' exact component={OLogin}/>
          <PropsRoute path='/plogin' exact component={PLogin}/>
          <div className="p-5"></div>

          <Contact />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
