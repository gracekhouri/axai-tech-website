import { Component } from 'react';
import { Link } from 'react-router-dom';

import Firebase from '../../firebase/firebase';

const auth = Firebase.instance().auth;

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: props.user
    };
  }

  async logout() {
    try {
      await auth.signOut();
    } catch (err) {
      console.log(err);
    }
  }

  renderDocLoginLink() {
    if (this.props.user) { return; }
    return <li className="nav-item">
      <Link to="/ologin" className="nav-link"> Doctor Login</Link>
    </li>
  }
  renderPatientLoginLink() {
    if (this.props.user) { return; }
    return <li className="nav-item">
      <Link to="/plogin" className="nav-link">Patient Login</Link>
    </li>
  }

  renderRegisterLink() {
    if (this.props.user) { return; }
    return <li className="nav-item">
      <Link to="/register" className="nav-link">Register</Link>
    </li>
  }

  renderPortalLink() {
    if (!this.props.user) { return; }
    return <li className="nav-item">
      <Link to="/portal" className="nav-link">Portal</Link>
    </li>
  }
  renderLogoutLink() {
    if (!this.props.user) { return; }
    return <li className="nav-item">
      <div onClick={()=> this.logout()} className="btn btn-primary">Logout</div>
    </li>
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/portal" className="navbar-brand"> Portal</Link>
          <button className="navbar-toggler" type="button"
            data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>

              {this.renderDocLoginLink()}
              {this.renderRegisterLink()}
              {this.renderTaskLink()}
              {this.renderLogoutLink()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }

}

export default Header;