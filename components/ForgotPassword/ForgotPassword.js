import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Aux from '../../hoc/Aux';

class ForgotPassword extends Component {
  render() {
    var container = {
      marginLeft: "30%",
      marginRight: "30%",
      marginTop: "10%",
      MarginBottom: "10%"
    };
    var container_block = {
      backgroundColor: "#000",
      paddingTop: 25,
      paddingBottom: 25,
      opacity: 0.9,
      borderRadius: 4
    };
    var anchor = {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '7px'
    };
    return (
      <Aux>
        <div style={container}>
          <form className="container" style={container_block}>
            <div className="form-group">
              <input className="form-control" type="email" placeholder="Email" />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Reset password</button>
          </form>
        </div>
      </Aux>
    );
  }
}

export default ForgotPassword;
