import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Nav from './components/Nav';
import Product from './components/Product';
import Resources from './components/Resources';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Profile from './components/Profile';
import background from './images/option7.jpg';
import Firebase from './firebase/firebase';
import OLogin from './components/login/OLogin';
import PLogin from './components/login/PLogin';
import register from './components/login/register';
import PropsRoute from './components/routing/PropsRoute';
import GuardedRoute from './components/routing/GuardedRoute';

const auth = Firebase.instance().auth;

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      user: null,
      loading: true
    };
  }

  componentDidMount(){
    auth.onAuthStateChanged((user) => {
      this.setState({user: user, loading: false});
    });
  }

  render() {
    const {user, loading} = this.state;
    return (
      <div>
        {
        loading ? 
          <div>Loading</div>
          :
      <BrowserRouter>
        <div style={{ backgroundImage: `url(${background})` }}>
          <Nav user={user}/>
          <Route path="/product" exact component={Product} />
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/resources" exact component={Resources} />
          <PropsRoute path='/ologin' exact component={OLogin} user={user}/>
          <PropsRoute path='/plogin' exact component={PLogin} user={user}/>
          <PropsRoute path='/register' exact component={register} user={user}/>
          <GuardedRoute path='/profile' exact component={Profile} user={user} />
          
          

          <Contact />
        </div>
      </BrowserRouter>
      }
      </div>
      
    );
  }
}

export default App;
