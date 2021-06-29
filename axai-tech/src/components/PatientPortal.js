import React, { Component } from 'react'
import Firebase from '../firebase/firebase';

export default class PatientPortal extends Component {
    constructor(props){
        super(props);

        this.db = Firebase.instance().db;
        this.storage = Firebase.instance().storage;

        this.state = {
                firstName: '',
                surname: '',
                email: '',
                password: '',
                width: '12.5%'
                // width percentages should be 12.5, 25, 37.5, 50, 62.5, 75, 87.5, and 100 corresponding with all checkpoints
        }
    }

    async componentDidMount() {
      //  const {user} = this.props;
      //  const snap = await this.db.collection('user-role').where('userId', '==', user.uid).get();
      //  const userRole = snap.docs[0].data();
//
      //  if (userRole.role === 'doctor' ) {
      //      //some action
      //  }
      //  if (userRole.role === 'patient' ) {
      //      //show info
      //  }
    }


    render() {
        // const {first, surname} = this.state;
        return (
            <div className="text-white">
                <div className="p-5">
                    <h1 className="title">Welcome User</h1>
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="p-2 col-6">
                            <p>
                                Documentation
                            </p>

                            Progress: 
                            <div class="progress">
                                {/* Half at 210 */}
                                <div class="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: this.state.width}}></div>
                            </div>
                            <p>
                                Messages from your provider
                            </p>
                        </div>
                        <div className="p-5"></div>
                    </div>
                </div>
            </div>
        )
    }
}
