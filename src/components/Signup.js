import React from 'react'
import wallpaper from '../assets/Wallpaper.svg'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className='container d-flex align-items-center justify-content-center' style={{ height: '100vh' }}>
            <div className="signup-container d-flex flex-row align-items-center justify-content-center">

                <div className='wallpaper'>
                    <img src={wallpaper} alt="wallpaper" />
                </div>

                <form className='signup-form d-flex flex-column gap-3 align-items-center justify-content-center'>
                    <h3 className='signup-header'>Sign Up</h3>

                    <div className='input-container d-flex flex-column justify-content-start align-items-start'>
                        <label className='signup-input-label' htmlFor="signup-name-input">Email</label>
                        <input type="text" id='signup-name-input' className='signup-inputs' />
                    </div>

                    <div className='input-container d-flex flex-column justify-content-start align-items-start'>
                        <label className='signup-input-label' htmlFor="signup-email-input">Email</label>
                        <input type="text" id='signup-email-input' className='signup-inputs' />
                    </div>

                    <div className='input-container d-flex flex-column justify-content-start align-items-start'>
                        <label className='signup-input-label' htmlFor="password-input">Password</label>
                        <input type="text" id='signup-password-input' className='signup-inputs' />
                    </div>

                    <button className='signup-submit-button' typeof='submit'>Login</button>

                    <div className='style-link Already have an account'>
                        <Link to='/' >Already have an account</Link>
                    </div>
                </form>

            </div>
        </div>
    )
}
