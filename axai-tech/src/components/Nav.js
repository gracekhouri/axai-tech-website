import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mt-4">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Axai Tech</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Product</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Resources</a>
              </li>

          </ul>
        <div>
            <button className="btn btn-outline-success" type="submit">Doctor Login</button>
        </div>
        <div>
            <button className="btn btn-outline-success ml-3" type="submit">Patient Login</button>
        </div>
        

      </div>
    </div>
  </nav>
        )
    }
}
