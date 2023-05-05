import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Navbar extends Component {

  render() {
    let { mode, toggleMode, } = this.props;
    return (
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`} style={{borderBottom:mode==='dark'?'2px solid red':'none'}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">NEWSAPP</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">ABOUT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">CONTACT US</Link>
              </li>
              
              <div className="dropdown show mx-2 my-1" style={{backgroundColor:mode==='light'?'white':'black',color:mode==='light'?'black':'white'}}>
                <Link className="btn btn-secondary dropdown-toggle"style={{backgroundColor:mode==='light'?'white':'#212529',color:mode==='light'?'black':'white'}} to="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  NEWS CATEGORIES
                </Link>

                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink" >
                  <Link className="dropdown-item" to="/business" >BUSINESS</Link>
                  <Link className="dropdown-item" to="/entertainment" >ENTERTAINMENT</Link>
                  <Link className="dropdown-item" to="/" >GENERAL</Link>
                  <Link className="dropdown-item" to="/health" >HEALTH</Link>
                  <Link className="dropdown-item" to="/science" >SCIENCE</Link>
                  <Link className="dropdown-item" to="/sports" >SPORTS</Link>
                  <Link className="dropdown-item" to="/technology" >TECHNOLOGY</Link>
                </div>
              </div>


            </ul>
           
           
            <div id="switch" className={`form-check form-switch mx-2 my-3 text-${mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >{mode === 'light' ? 'Enter Dark Mode' : 'Enter Light Mode'}</label>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
