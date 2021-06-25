import React, { Component } from 'react'
import Firebase from '../firebase/firebase';

export default class Portal extends Component {
    constructor(props){
        super(props);

        this.db = Firebase.instance().db;
        this.storage = Firebase.instance().storage;

        this.state = {
                firstName: '',
                surname: '',
                email: '',
                password: '',
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
        const {first, surname} = this.state;

        return (
                <div className="text-white d-flex text-center">
                <div className="p-5">
                    <h1 className="title">Welcome, {first} </h1>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="p-2 col-6">
                        <p>
                        Documentation
                        </p>
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
