import React, { Component } from 'react'
import './Contact.css'

export default class Contact extends Component {
    render() {
        return (
            <div className="black-bg text-white">
                <footer>
                    <div className='container'>
                        <div className="card-body">
                            <h5 className="card-title">Request a Consult</h5>
                            <div className="p-2">
                            To schedule a meeting with one of our product consultants, please fill in your contact details.*
                            </div>
                            <form>
                                <div className="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>
                                <div className="input-group">
                                    <textarea class="form-control" placeholder="Type your message here..." aria-label="With textarea"></textarea>
                                </div>
                            </form>
                            <div className="p-2">
                                <p>
                                * Please note that due to HPCSA regulations all genetic screening 
                                tests must be performed under the guidance 
                                of a certified medical practitioner or genetic counselor.
                                </p>
                            </div>
                            
                            <hr></hr>
                            <h5>Get in Touch</h5>
                            <div className='row p-4'>
                                <span className='col-4 border-end'>
                                    <p> General Inquiries:</p>
                                    <p>info@axaitech.co.za</p>
                                </span>
                                <div className='col-4 border-end'>
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
