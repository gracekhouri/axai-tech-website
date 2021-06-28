import * as nodemailer from 'nodemailer';
import React, { Component } from 'react';
import './Contact.css';

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      message: '',
    };
  }

  async sendEmail() {
    const transporter = nodemailer.createTransport({
      host: 'smtp.ipage.com',
      port: 587,
      secure: false,
      ignoreTLS: true,
      debug: true,
      auth: {
        user: 'info@axaitech.co.za',
        pass: 'Axailtech123',
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    const options = {
      from: this.state.email,
      to: 'info@axaitech.co.za',
      subject: 'Consultation Request',
      html: `
                <p>Hello,</p>
                <br>
                <p>I would like to book a consultation</p>
                <br>
                <p>Regards.</p>
              `,
    };

    await transporter.sendMail(options);
  }

  render() {
    return (
      <div className="black-bg text-white">
        <footer>
          <div className="container">
            <div className="card-body">
              <h5 className="card-title">Request a Consult</h5>
              <div className="p-2">
                To schedule a meeting with one of our product consultants, please fill in your
                contact details.*
              </div>
              <form>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="input-group">
                  <textarea
                    className="form-control"
                    placeholder="Type your message here..."
                    aria-label="With textarea"
                  ></textarea>
                </div>
              </form>
              <button onClick={() => this.sendEmail()}>Send Request</button>
              <div className="p-2">
                <p>
                  * Please note that due to HPCSA regulations all genetic screening tests must be
                  performed under the guidance of a certified medical practitioner or genetic
                  counselor.
                </p>
              </div>

              <hr></hr>
              <h5>Get in Touch</h5>
              <div className="row p-4">
                <span className="col-4 border-end">
                  <p> General Inquiries:</p>
                  <p>info@axaitech.co.za</p>
                </span>
                <div className="col-4 border-end">
                  <p>Cell: +27 84 697 1122</p>
                  <p>Alt: +27 79 596 6030</p>
                </div>
              </div>

              <p className="text-center">© 2020 by Axaitech (Pty) Ltd.</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
