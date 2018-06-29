import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Aux from '../../hoc/Aux';

class Login extends Component {
  render() {
    var container = {
      marginLeft: "30%",
      marginRight: "30%",
      marginTop:"10%",
      MarginBottom: "10%"
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
             <input className="form-control" type="text" placeholder="Email" />
           </div>
           <div className="form-group">
             <input className="form-control" type="password" placeholder="password"/>
           </div>
           <button type="submit" className="btn btn-primary btn-block">Submit</button>
           <Link href="/forgotPassword">
             <a style={anchor}>Forgotten password?</a>
           </Link>
          </form>
        </div>
      </Aux>
    );
  }
}

export default Login;
