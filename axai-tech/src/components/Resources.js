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
                    <a target="_blank" rel="noopener noreferrer" href="https://firebasestorage.googleapis.com/v0/b/axai-tech.appspot.com/o/Axaitech_Med_v2.pdf?alt=media&token=f76c4363-2bbc-4345-816e-efbb724f5056">
                        <i className="bi bi-file-earmark-pdf-fill pdf-change m-5"></i>
                    </a>
                </div>
                <div className="p-3">
                    <h1 className="">Information and Sample Report</h1>
                </div>
                <div className="">
                    <a target="_blank" rel="noopener noreferrer" href="https://firebasestorage.googleapis.com/v0/b/axai-tech.appspot.com/o/Sample-clinical-report_Creatori(1)(1).pdf?alt=media&token=477eddbb-6c58-44a4-9e00-5f9a2fbcdba4">
                        <i className="bi bi-file-earmark-pdf-fill pdf-change m-5"></i>
                    </a>  
                </div>
                <div className="p-5"></div>
            </div>
        )
    }
}
