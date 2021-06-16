import React, { Component } from 'react';
import './About.css';
import file from '../images/fileHex.png';
import eye from '../images/eye.png';
import lines from '../images/lines.png';

export default class About extends Component {
  render() {
    return (
      <div className="container text-center">
        <h1 className="m-5">Introducing Axaitech</h1>
        <div className="row align-items-center">
          <div className="col-12 col-md-5">
            <img className="image" src={file} alt=""></img>
          </div>
          <div className="col-12 col-md-7">
            <h1>OUR STORY</h1>
            <p className="mt-5">
              Axaitech was founded as Africa's answer to the global liquid biopsy movement in cancer
              treatment. Our focus is on providing the most actionable insight possible so that
              oncologists can make more informed decisions regarding their patients treatment.
              Better data means better treatment and ultimately, better quality of life.
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-12 col-md-5">
            <img className="image" src={file} alt=""></img>
          </div>
          <div className="col-12 col-md-7">
            <h1>OUR VISION</h1>
            <p className="mt-5">
              Our vision is to provide the people of Africa with bleeding edge cancer treatment
              technologies from a uniquely African perspective. Our genomic profiling services and
              research divisions focus on creating world class, accessible technology platforms.
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-12 col-md-5">
            <img className="image" src={file} alt=""></img>
          </div>
          <div className="col-12 col-md-7">
            <h1>TECHNOLOGY</h1>
            <p className="mt-5">
              Axaitech offers a complete pan-cancer chemotherapy drug resistance liquid biopsy
              screen. Leveraging the world's leading wet lab and bioinformatics solutions we are
              able to bring the future of cancer treatment to Africa. Our analysis is carried out in
              an ISO accredited laboratory and annotated using a CE IVD-certified and
              HIPAA-compliant platform.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
