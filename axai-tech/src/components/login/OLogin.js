import React, { Component } from 'react'
import './styles.css';

export default class OLogin extends Component {
    render() {
        return (
            <div className='container col-7 mt-2'>
                <div className='card card-body text-center'>
                    <form>
                        <h1 className='h3 mt-3 text-center'>Doctor Portal Login</h1>
                        <div className='p-3 body'>
                            <input type='email' className='form-control 'placeholder='Email Address'/>
                        </div>
                        <div className="p-3 body">
                            <input type='password' className='form-control'placeholder='Password'/>
                        </div>
                        <div className='text-center mt-4'>
                        <button className ='btn btn-primary px-5 body' type='submit'>
                            Login
                        </button>
                        </div> 
                    </form>
                </div>
            </div>
        )
    }
}
