import React, { Component } from 'react';
import './styles.css';
import Firebase from '../../firebase/firebase';
const auth = Firebase.instance().auth;

export default class register extends Component {

  constructor(props) {
    super(props);

    if (this.props.user) {
      this.props.history.push('/');
    }

    this.auth = Firebase.instance().auth;
    this.db = Firebase.instance().db;

    this.state = {
      firstName: '',
      surname: '',
      email: '',
      password: '',
      role: 'patient',
      counter: 1
    };
  }
  onNameChanged(e) {
    this.setState({
      firstName: e.target.value,
    });
  }
  onSurnameChanged(e) {
    this.setState({
      surname: e.target.value,
    });
  }
  onEmailChanged(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onPasswordChanged(e) {
    this.setState({
      password: e.target.value,
    });
  }

  toggleSwitch() {

    let count = this.state.counter;

    this.setState({counter: count + 1})

    if (this.state.counter % 2 === 1) {
        this.setState({
          role: 'doctor'
      });
    } else {
      this.setState({
          role: 'patient'
      });
    }
  }

  async register(e) {
    e.preventDefault();

    try {
      const { email, password } = this.state;
      await auth.createUserWithEmailAndPassword(email, password);

      await this.db.collection('user-roles').doc().set({
        userId: this.auth.currentUser.uid,
        role: this.state.role,
      });

      this.props.history.push('/doctor-portal');
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className="container col-7 mt-2">
        <div className="p-5"></div>
        <div className="card card-body text-center">
          <form onSubmit={(e) => this.register(e)}>
            <h1 className="h3 mt-3 text-center">Please Register</h1>
            <div className="p-3 body">
              <input
                value={this.state.firstName}
                onChange={(e) => this.onNameChanged(e)}
                type="text"
                className="form-control"
                placeholder="First Name"
              />
            </div>
            <div className="p-3 body">
              <input
                value={this.state.surname}
                onChange={(e) => this.onSurnameChanged(e)}
                type="text"
                className="form-control"
                placeholder="surname"
              />
            </div>
            <div className="p-3 body">
              <input
                value={this.state.email}
                onChange={(e) => this.onEmailChanged(e)}
                type="email"
                className="form-control"
                placeholder="Email Address"
              />
            </div>
            <div className="p-3 body">
              <input
                value={this.state.password}
                onChange={(e) => this.onPasswordChanged(e)}
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className='row'>
              <p className='black col-7'>Click Here if a Physician</p>
              <div className="form-check form-switch text-center col-5">
                <input onClick={()=> this.toggleSwitch()} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                {/* <label class="form-check-label" for="flexSwitchCheckDefault">Click Here</label> */}
              </div>
            </div>
            
            <div className="text-center mt-4 body">
              <button className="btn btn-primary px-5" type="submit">
                Register
              </button>
            </div>
          </form>
        </div>

        <div className="p-5"></div>
      </div>
    );
  }
}
