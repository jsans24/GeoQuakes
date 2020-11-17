import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixedsticky fixedtop sticky-top">
      <Link className="navbar-brand" to="/">GeoQuakes</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarsExample04">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">Weekly</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/monthly">Monthly</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;