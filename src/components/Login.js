import React from 'react'
import wallpaper from '../assets/Wallpaper.svg'
import { Link } from 'react-router-dom'
import UserContext from '../context/user/userContext'
import { useContext } from 'react'
import { useState } from 'react'

export default function Login(props) {

  const {loginUser} = useContext(UserContext);
  const [email_input, updateEmailUpdate] = useState('');
  const [password_input, updatePasswordUpdate] = useState('');

  return (
    <div className='auth-container d-flex align-items-center justify-content-center'>

      <div className="login-container d-flex flex-row align-items-center justify-content-center">

        <div className='wallpaper'>
          <img src={wallpaper} alt="wallpaper" />
        </div>

        <form onSubmit={async (e)=>{e.preventDefault(); await loginUser(email_input,password_input)}} className='login-form d-flex flex-column gap-3 align-items-center justify-content-center'>
          <h3 className='login-header'>Log In</h3>

          <div className='input-container d-flex flex-column justify-content-start align-items-start'>
            <label className='input-label' htmlFor="email-input">Email</label>
            <input type="text" id='email-input' value={email_input} onChange={(e)=>updateEmailUpdate(e.target.value)} minLength={5} className='login-inputs' />
          </div>

          <div className='input-container d-flex flex-column justify-content-start align-items-start'>
            <label className='input-label' htmlFor="password-input">Password</label>
            <input type="password" id='password-input' value={password_input} onChange={(e)=>updatePasswordUpdate(e.target.value)} minLength={12} className='login-inputs' />
          </div>

          <button className='login-submit-button' typeof='submit'>Login</button>

          <div className='style-link need-account-link'>
            <Link to='/signup' >Need Account</Link>
          </div>
        </form>

      </div>
    </div>
  )
}
