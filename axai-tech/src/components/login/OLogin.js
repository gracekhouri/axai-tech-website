import React, { Component } from 'react'

export default class OLogin extends Component {
    render() {
        return (
            <div className='container col-7 mt-2'>
                <div className='card card-body text-center'>
                    <form>
                        <h1 className='h3 mb-3 text-center'>Doctor, Please Login</h1>
                        <div className='me-3'>
                            <input type='email' className='form-control 'placeholder='Email Address'/>
                        </div>
                        <div>
                            <input type='password' className='form-control'placeholder='Password'/>
                        </div>
                        <div className='text-center mt-4'>
                        <button className ='btn btn-primary px-5' type='submit'>
                            Login
                        </button>
                        </div> 
                    </form>
                </div>
            </div>
        )
    }
}
