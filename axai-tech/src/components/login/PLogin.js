import React, { Component } from 'react'

import './PLogin.css';

export default class PLogin extends Component {
    render() {
        return (
            <div className='container col-7 mt-2'>
                {/* <div className='card card-body text-center '>
                    <form >
                        <h1 className='h3 mb-3 text-center'>Please Login</h1>
                        <div>
                            <input type='email' className='form-control' placeholder='Email Address'/>
                        </div>
                        <div>
                            <input type='password' className='form-control' placeholder='Password'/>
                        </div>
                        <div className='text-center mt-4'>
                        <button className ='btn btn-primary px-5' type='submit'>
                            Login
                        </button>
                        </div> 
                    </form>
                </div> */}
                <div className='card card-body text-center'>
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" id="login-tab" href="#login" role="tab">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="register-tab" href="#register" role="tab">Register</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="ex1-content">
                        <div className="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
                            <form >
                                <h1 className='h3 mt-3 text-center'>Please Login</h1>
                                <div className='p-3'>
                                    <input type='email' className='form-control' placeholder='Email Address'/>
                                </div>

                                <div className='p-3'>
                                    <input type='password' className='form-control' placeholder='Password'/>
                                </div>

                                <div className='text-center mt-4'>
                                    <button className ='btn btn-primary px-5' type='submit'>
                                        Login
                                    </button>
                                </div> 
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
