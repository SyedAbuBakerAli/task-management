import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

import { logout } from '../../actions/userAction'
import { useDispatch, useSelector } from 'react-redux'

import '../../App.css'
const Header = () => {

  const dispatch = useDispatch();

  const { user, loading } = useSelector(state => state.auth)

  const logoutHandler = () => {
    dispatch(logout());
  }

  return (
    <Fragment>
      <nav className="navbar row">
        <div className="col-12 col-md-3">
          <div className="navbar-brand">
            <Link to="/register">
              <img className='header-image' src="./images/logo.png" />
            </Link>
          </div>
        </div>
        
        {user ? <div className="col-12 col-md-6 mt-2 mt-md-0">
        <Search />
        </div>: null}
        

        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
       


          {user ? (
            <div>
              <div className='ml-4 dropdown d-inline'>
                <Link to="#!" 
                  // type="button" id="dropDownMenuButton" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="true">
                  <figure className='avatar avatar-nav'>
                    <img src={user.avatar && user.avatar.url}
                      alt={user && user.name}
                      className='rounded-circle'
                    />
                  </figure>
                  <span>{user && user.name}</span>
                </Link>
                <Link className='btn ml-4'  id="logout_btn" to="/" onClick={logoutHandler}>
                  Logout
                </Link>

              </div>
              </div>
                    
          ) : !loading && <Link to="/login" className="btn ml-4" id="login_btn">Login</Link>}
        </div>

      </nav>
    </Fragment>
  )
}

export default Header
