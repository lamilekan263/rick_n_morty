import React from 'react';
import { NavLink } from 'react-router-dom'

function Header() {
    return (
      <nav className="navbar navbar-expand navbar-fixed navbar-dark bg-dark" >
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/characters">
                Character
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/location">
                Location
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Header
