import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return(
    <header>
      <div className="header-container container">
        <div className="inner-content row">
          <div className="brand col-md-6 mb-3">
            <Link to="/watchlist">My WatchList</Link>
          </div>
          <div className="col-md-6">
            <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/search" className="btn btn-dark">Search Films</Link>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header