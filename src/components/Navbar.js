import React, { useState } from "react";

import PropTypes from 'prop-types';

// import {
//     BrowserRouter as Router,
//     // Switch,
//     Route,
//     Link
//     } from "react-router-dom";


export default function Navbar(props){

    const handleCustomMode=() =>{
        props.handleCustomMode();
    }

    return (
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
            {/* <Link className="nav-link" to="/">Home</Link> */}
            </li>
            <li className="nav-item">   
            {/* <Link className="nav-link" to="/About">{props.about}</Link> */}
            <a href="#" className="nav-link active">About</a>
            </li>
          </ul>
          <div class="form-check form-switch">
          <button className={`btn btn-${props.customMode === 'Custom Mode' ? 'primary':'secondary'}`} onClick={handleCustomMode}> {props.customMode} </button>
        </div>
          <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-primary mx-2" type="submit">Search</button>
          </form>
          </div>
      </div>
    </nav>
    </>
    )
}

Navbar.propTypes = {
    about:PropTypes.string,
    title:PropTypes.string
}
Navbar.defaultProp={
    
}