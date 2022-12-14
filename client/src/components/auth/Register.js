import React, { useState } from 'react';

import { Link, Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { useDispatch, useSelector } from "react-redux";
import { register } from '../../Redux/Actions/auth';
import { SetAlert } from '../../Redux/Actions/alert';

function Register(props) {
  const [fromData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    password2: '',
    birthday: '',
    typeuser: 'Instructor',
  });
  const {
    firstname,
    lastname,
    email,
    password,
    password2,
    birthday,
    typeuser,
  } = fromData;
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated } =auth ;

  const hundelchange = (e) =>
    setFormData({ ...fromData, [e.target.name]: e.target.value });
    const onsubmit = (e) => {
      e.preventDefault();
      if (password !== password2) SetAlert('Password do not match', 'danger');
      else {
        dispatch(register({
          firstname,
          lastname,
          email,
          password,
          password2,
          birthday,
          typeuser,
        }));
      }
    };
  if (isAuthenticated) {
    return <Navigate to='/dashboard' />;
  }
  return (
    
    <div className='bodyregister'>

    <div className='formsignupreg'>
      <p className='signuplogo'>Sign Up</p>
      <div className='create-pro'>
        <FontAwesomeIcon className='faUser' icon={faUser} />

        <p className='paragraphe-create-pro'>Create Your Account</p>
      </div>

      <form className='register-form' onSubmit={(e) => onsubmit(e)}>
        <input
          className='myinput'
          type='text'
          placeholder='First Name'
          name='firstname'
          value={firstname}
          onChange={(e) => hundelchange(e)}
        />
        <input
          className='myinput'
          type='text'
          placeholder='Last Name'
          name='lastname'
          value={lastname}
          onChange={(e) => hundelchange(e)}
        />
        <input
          className='myinput'
          type='email'
          placeholder='Email'
          name='email'
          value={email}
          onChange={(e) => hundelchange(e)}
        />
        <input
          className='myinput'
          type='password'
          placeholder='Password'
          name='password'
          value={password}
          minLength='6'
          onChange={(e) => hundelchange(e)}
        />
        <input
          className='myinput'
          type='password'
          placeholder='Confirm Password'
          minLength='6'
          name='password2'
          value={password2}
          onChange={(e) => hundelchange(e)}
        />
        <input
          className='birthday'
          type='date'
          placeholder='Date of Birth'
          name='birthday'
          value={birthday}
          onChange={(e) => hundelchange(e)}
        />
        <select
          className=' typeuser'
          name='typeuser'
          value={typeuser}
          onChange={(e) => hundelchange(e)}
        >
          <option className='option-type-profile'>Instructor</option>
          <option className='option-type-profile'>student</option>
        </select>
        <input className='submitcreatepro' type='submit' value='Sign Up' />
      </form>
      <p className='footerhome'>
        Already have an account?
        <Link to='/login'>
          <span className='spansign'>Sign In</span>{' '}
        </Link>
      </p>
    </div>
  </div>
     
  );
}

export default Register