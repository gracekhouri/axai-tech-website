import React, { Component } from 'react'
import './About.css'
import file from '../images/file.png'
import eye from '../images/eye.png'
import lines from '../images/lines.png'

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="p-5"></div>
                <div className="black-bg d-flex justify-content-center">
                <div className="dimensions">
                <div className="p-5">
                    <h1>INTRODUCING</h1>
                    <h1>AXAITECH</h1>
                </div>

                    <div className="text-center">
                        <div >
                            <div className="text-white p-5">
                                {/* <div className="d-flex flex-column align-self-center"> */}
                                <div className="d-flex justify-content-around">
                                    <div className="p-5">
                                        <div>
                                            <img src={file} className=""></img>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <h1>OUR STORY</h1>
                                        <p className="mt-5">
                                            Axaitech was founded as Africa's answer to the global 
                                            liquid biopsy movement in cancer treatment. 
                                            Our focus is on providing the most 
                                            actionable insight possible so that oncologists can make 
                                            more informed decisions regarding their patients treatment. 
                                            Better data means better treatment and ultimately, better quality of life.
                                        </p>
                                    </div>
                                </div> 
                                {/* </div>  */}
                            </div>
                            <div className="text-white p-5">
                            <div className="d-flex  justify-content-around">
                                    <div className="p-5">
                                        <img src={eye}></img>
                                    </div>
                                    <div className="p-5">
                                        <h1>OUR VISION</h1>
                                        <p className="mt-5">
                                            Our vision is to provide the people of Africa with bleeding edge 
                                            cancer treatment technologies from a uniquely African perspective. 
                                            Our genomic profiling services and research divisions focus on 
                                            creating world class, accessible technology platforms.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-white p-5">
                            <div className="d-flex  justify-content-around">
                                    <div className="p-5">
                                        <img src={lines}></img>
                                    </div>
                                    <div className="p-5">
                                        <h1>TECHNOLOGY</h1>
                                        <p className="mt-5">
                                            Axaitech offers a complete pan-cancer chemotherapy drug resistance liquid biopsy screen. 
                                            Leveraging the world's leading wet lab and 
                                            bioinformatics solutions we are able to bring the future of cancer treatment to Africa. 
                                            Our analysis is carried out in an ISO accredited laboratory and annotated 
                                            using a CE IVD-certified and HIPAA-compliant platform.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
