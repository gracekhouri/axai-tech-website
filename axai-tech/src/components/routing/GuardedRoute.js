import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import DoctorPortal from '../DoctorPortal';
import PatientPortal from '../PatientPortal';

export default class GuardedRoute extends Component {
  render() {
    const { component: Component, user, role, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={(props) => {
          if (user && role === 'patient') {
            return <PatientPortal {...{ ...props, ...rest, user }} />;
          } else if(user && role === 'doctor')  {
            return <DoctorPortal {...{ ...props, ...rest, user }} />;
          } else {
            return <Redirect to="/" />;
          }
        }}
      />
    );
  }
}
