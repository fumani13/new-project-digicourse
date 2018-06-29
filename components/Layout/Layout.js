import React, { Component } from 'react';
import Head from 'next/head';
import Aux from '../../hoc/Aux';
import dynamic from 'next/dynamic';  

class Layout extends Component {
  render() {
    var content_block= {
      backgroundImage: 'url(' + require('../../../../static/joshua-gerosa-659132-unsplash.jpg') + ')',
      backgroundSize: "cover",
      height: "100%",
      width: "100%",
      position: "absolute"
    };

    return (
      <div style={content_block}>
        <Head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css" />
          <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
      </Head>
        <Aux>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <a className="navbar-brand" href="/">CPanel</a>
           <button
               className="navbar-toggler"
               type="button"
               data-toggle="collapse"
               data-target="#navbarSupportedContent"
               aria-controls="navbarSupportedContent"
               aria-expanded="false"
               aria-label="Toggle navigation"
             >
               <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-end">
               <ul className="navbar-nav align-items-end">
                  <li className="nav-item active">
                    <a className="nav-link" href="/register">Register </a> 
                  </li>
                </ul>
            </div>
          </nav>
          <main>
            { this.props.children }
          </main>
        </Aux>
      </div>
    );  
  }
}

export default Layout;

