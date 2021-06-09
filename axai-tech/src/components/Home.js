import React, { Component } from 'react'
import report from '../images/report.jpg'

export default class Home extends Component {
    render() {
        return (
            <div className="text-white d-flex">
                <div className="p-5">
                    <h1>BETTER </h1>
                    <h1>DATA </h1>   
                    <h1>BETTER </h1>
                    <h1>TREATMENT </h1>

                    <div className="p-1">
                        <p>
                        Liquid Biopsy Chemotherapy Drug Resistance screening offers the 
                        primary care physician actionable insight into each individual 
                        undergoing treatment.
                        </p>
                    </div>
                    <div className="p-1">
                        <p>
                        With up to 90% of cancer mortality linked to drug resistance, 
                        better data means better treatment from the start.
                        </p>
                    </div>

                </div>
                
                <div className="align-items-end">
                    <figure className="figure p-3">
                        <img className="rounded" src={report}></img>
                        <figcaption className="figure-caption text-white">*The report above is a simplified version of the 
                        Axaitech clinical report for illustrative purposes only.</figcaption>
                    </figure>
                </div>
            </div>
        )
    }
}
