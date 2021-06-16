import React, { Component } from 'react'
import './Resources.css'

export default class Resources extends Component {
    render() {
        return (
            <div className="text-center">
                <div className="font-change">
                    <h1>Patient Consent/Medical practitioner requisition forms</h1>
                </div>
                <div className="p-5">
                   <p>  
                       Download and complete the fill-able .pdf form below, 
                       and submit to clinical@axaitech.co.za.
                    </p> 
                    <i className="bi bi-file-earmark-pdf-fill pdf-change m-5"></i>
                </div>
                <div className="p-3">
                    <h1 className="">Information and Sample Report</h1>
                </div>
                <div className="">
                    <i className="bi bi-file-earmark-pdf-fill pdf-change m-5"></i>
                    <i className="bi bi-file-earmark-pdf-fill pdf-change m-5"></i>
                    <i className="bi bi-file-earmark-pdf-fill pdf-change m-5"></i>
                </div>
            </div>
        )
    }
}
