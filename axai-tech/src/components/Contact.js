import React, { Component } from 'react'
import './Contact.css'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className='container'>
                        <div className="card-body">
                            <h5 className="card-title">Request a Consult</h5>
                            <div className="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                            <div className="input-group">
                                <textarea class="form-control" aria-label="With textarea"></textarea>
                            </div>
                            <hr></hr>
                            <h5>Get in Touch</h5>
                            <div className='row p-4'>
                                <div className='col-4 border-right'>
                                    <p> General Inquiries:</p>
                                    <p>info@axaitech.co.za</p>
                                </div>
                                <div className='col-4 border-right'>
                                    <p>Cell: +27 84 697 1122</p>
                                    <p>Alt: +27 79 596 6030</p>
                                </div>

                            </div>
                            
                            
                            <p className='text-center'>© 2020 by Axaitech (Pty) Ltd.</p>
                        </div>
                    </div>
                    
                </footer>
                
            </div>
        )
    }
}
