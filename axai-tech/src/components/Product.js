import React, { Component } from 'react'
import chem from '../images/chem.png'
import './Product.css'
import vials from '../images/vials.png'
import web from '../images/web.webp'

export default class Product extends Component {
    render() {
        return (
            <div>
            <div className="text-white d-flex">
                <div className="p-5">
                    <h3>WHY LIQUID BIOPSY?</h3>
                        <hr></hr>
                    <div className="p-1">
                        <p>
                    Liquid biopsy screens provide several advantages over traditional tissue biopsies, most notably it's comparatively low invasiveness.
                    For patients for which tissue-based testing is not appropriate or is not available, liquid biopsy can provide a safe alternative test for determining targeted therapy and monitoring treatment efficacy and disease progression.</p>
                    </div>
                    </div>
                
                <div className="align-items-end mx-auto">
                    <figure className="figure p-3">
                        <img className="rounded img-fluid max-vw-100 max-vh-70" src={chem}></img> 
                    </figure>
                </div>
            </div>

            <div className="p-5">


       
            <div className="text-center">
                <h3>HOW IT WORKS</h3>
                <div className="justify-content-sm-evenly d-flex">
                    <div className="card-transparent">
                        <div className="card-body row-3">
                          <h5 className="card-title col-12">01</h5>
                          <h6 className="card-subtitle mb-2 text-muted">BLOOD DRAW</h6>
                          <p className="card-text">Patients diagnosed with any form of cancer submit a blood sample, authorized by their primary care physician, collected at any convenient location. No invasive surgeries, no delays.</p>
                        </div>
                    </div>

                    <div className="card-transparent">
                        <div className="card-body row-3">
                          <h5 className="card-title col-12">02</h5>
                          <h6 className="card-subtitle mb-2 text-muted">ANALYSIS</h6>
                          <p className="card-text">We analyze the patient's DNA, screening for 57 unique, clinically validated markers associated with chemotherapy drug resistance.</p>
                        </div>
                    </div>

                    <div className="card-transparent">
                        <div className="card-body row-3">
                          <h5 className="card-title col-12">03</h5>
                          <h6 className="card-subtitle mb-2 text-muted">ACTIONABLE RESULTS</h6>
                          <p className="card-text">We provide a report to the primary care physician outlining the complete genomic profile relating to chemotherapy drug resistance, with actionable insights to help shape the treatment plan of the individual.</p>
                        </div>
                    </div>
                </div>
                </div>

                <div className="p-5">

                <div className="mx-auto">
                <figure className="text-center">
                    <img className="vw-50 vh-50" src={web}></img> 
                </figure>
            </div>
            </div>
            </div>
            </div>

        
    

         



        )
    }
}
