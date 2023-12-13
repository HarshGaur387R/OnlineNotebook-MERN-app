import React from 'react'
import wallpaper from '../assets/Wallpaper.svg'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='container d-flex align-items-center justify-content-center' style={{ height: '100vh' }}>
      <div className="login-container d-flex flex-row align-items-center justify-content-center">

        <div className='wallpaper'>
          <img src={wallpaper} alt="wallpaper" />
        </div>

        <form className='login-form d-flex flex-column gap-3 align-items-center justify-content-center'>
          <h3 className='login-header'>Log In</h3>

          <div className='input-container d-flex flex-column justify-content-start align-items-start'>
            <label className='input-label' htmlFor="email-input">Email</label>
            <input type="text" id='email-input' className='login-inputs' />
          </div>

          <div className='input-container d-flex flex-column justify-content-start align-items-start'>
            <label className='input-label' htmlFor="password-input">Password</label>
            <input type="text" id='password-input' className='login-inputs' />
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
