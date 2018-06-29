import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Aux from '../../hoc/Aux';

class Register extends Component {
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
              <input className="form-control" type="text" placeholder="Username" />
            </div>
            <div className="form-group">
              <input className="form-control" type="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <input className="form-control" type="password" placeholder="Password" />
            </div>
            <div className="form-group">
              <input className="form-control" type="password" placeholder="Confirm password" />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Submit</button>
            <Link href='/'>
              <a style={anchor}>Already a user?</a>
            </Link>
          </form>
        </div>
      </Aux>
    );
  }
}

export default Register;
