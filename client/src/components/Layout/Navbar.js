import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../Redux/Actions/auth';
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSignOutAlt, faUser, faCog } from '@fortawesome/free-solid-svg-icons';
function Navbar( ) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated, loading, user } =auth ;

  const loggout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  const authLinks = (
    <div className='navbarlogin'>
      <ul className='listnavbar'>
        <li>
          <Link to='home' className='linknav'>
            home
          </Link>
          <div id='indicator'></div>
        </li>
        <li>
          <Link to='profile' className='linknav'>
            <FontAwesomeIcon className='' icon={faUser} />
            Profile
          </Link>
          <div id='indicator'></div>
        </li>
        <li>
          <Link to='dashboard' className='linknav'>
            <FontAwesomeIcon icon={faCog} />
            Dashboard
          </Link>
          <div id='indicator'></div>
        </li>
        <li>
          <a onClick={(e) => loggout(e)} href='#!' className='linknav'>
            <FontAwesomeIcon className='faSignOutAlt' icon={faSignOutAlt} />
            <span className='logout'>Logout</span>
          </a>
          <div id='indicator'></div>
        </li>
      </ul>
    </div>
  );

  const guestLinks = (
    <ul className='listnavbar list-navbarlogin'>
      <li>
        <Link to='register' href='' className='linknav'>
          Register
        </Link>
        <div id='indicator'></div>
      </li>
      <li>
        <Link to='login' className='linknav'>
          Login
        </Link>
        <div id='indicator'></div>
      </li>
    </ul>
  );

  const adminLinks = (
    <div className='navbarlogin navbaradmin'>
      <ul className='listnavbar'>
        <li>
          <Link to='Dashboard' className='linknav'>
            <FontAwesomeIcon icon={faCog} />
            DashboardAdmin
          </Link>

          <div id='indicator'></div>
        </li>
        <li>
          <a onClick={(e) => loggout(e)} href='#!' className='linknav'>
            <FontAwesomeIcon className='faSignOutAlt' icon={faSignOutAlt} />
            <span className='logout'>Logout</span>
          </a>
          <div id='indicator'></div>
        </li>
      </ul>
    </div>
  );

  return (
    <div className='mynavvbar'>
      <Link to='/'>logo</Link>

      <Fragment>
        {loading
          ? null
          : isAuthenticated && user !== null
          ? authLinks
          : guestLinks}
      </Fragment>

    </div>
  );
}

export default Navbar