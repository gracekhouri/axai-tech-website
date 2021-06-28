import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom';

export default class GuardedRoute extends Component {
  render() {

    const { component: Component, user, ...rest } = this.props;

    return (
      <Route {...rest} render={(props) => {
        if (user) {
          if (user.role==="doctor") {
            return <Component {...{ ...props, ...rest, user }} />
          }
          if (user.role==="patient") {
            return <Component {...{ ...props, ...rest, user }} />
          }
        } else {
          return <Redirect to="/" />
        }
      }} />
    )
  }
}