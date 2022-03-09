import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) 
{
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      {/**Using template literal so that we can use js in b/w  using backticks*/} 
    <div className="container-fluid" >
      <Link className="navbar-brand" to="#">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>{/**we are using Link and to for routing */}
           </li>
          
        </ul>
        {/*<form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>*/}
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={props.togglemode} type="checkbox" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
        </div>
      </div>
    </div>
  </nav>
  )
}
Navbar.propTypes={
    title:PropTypes.string.isRequired,
    aboutext:PropTypes.string
};//First import proptypes from impt,it s used to check the types of props entered.is required used to tell that value of this prop is needed
// Navbar.defaultprops={
//     title:'Set Title'
// };//if we forget to give prop then default goes there