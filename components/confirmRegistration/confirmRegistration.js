import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Aux from '../../hoc/Aux';

class ConfirmRegistration extends Component {
  render() {
    var container = {
      marginLeft: "30%",
      marginRight: "30%",
      marginTop: "10%",
      marginBottom: "10%"
    };
    var container_block = {
      backgroundColor: "#000",
      paddingTop: 25,
      paddingBottom: 25,
      opacity: 0.9,
      borderRadius: 4,
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
              <input className="form-control" type="password" placeholder="verification pin" />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Verify</button>
          </form>
        </div>
      </Aux>
    );
  }
}

export default ConfirmRegistration;

