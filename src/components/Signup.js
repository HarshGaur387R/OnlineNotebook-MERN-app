import React from 'react'
import wallpaper from '../assets/Wallpaper.svg'
import { Link } from 'react-router-dom'
import UserContext from '../context/user/userContext';
import { useContext,useState } from 'react';

export default function Signup() {

    const { signupUser } = useContext(UserContext);
    const [name_input, updateNameInput] = useState('');
    const [email_input, updateEmailInput] = useState('');
    const [password_input, updatePasswordInput] = useState('');
    const [confirm_password_input, updateConfirmPasswordInput] = useState('');

    return (
        <div className='container auth-container d-flex align-items-center justify-content-center'>
            <div className="signup-container d-flex flex-row align-items-center justify-content-center">

                <div className='wallpaper'>
                    <img src={wallpaper} alt="wallpaper" />
                </div>

                <form onSubmit={async (e) => { e.preventDefault(); await signupUser(name_input, email_input, password_input) }} className='signup-form d-flex flex-column gap-3 align-items-center justify-content-center'>
                    <h3 className='signup-header'>Sign Up</h3>

                    <div className='input-container d-flex flex-column justify-content-start align-items-start'>
                        <label className='signup-input-label' htmlFor="signup-email-input">Name</label>
                        <input type="text" id='signup-email-input' value={name_input} onChange={(e)=>updateNameInput(e.target.value)} className='signup-inputs' />
                    </div>

                    <div className='input-container d-flex flex-column justify-content-start align-items-start'>
                        <label className='signup-input-label' htmlFor="signup-name-input">Email</label>
                        <input type="text" id='signup-name-input' value={email_input} onChange={(e)=>updateEmailInput(e.target.value)} className='signup-inputs' />
                    </div>

                    <div className='input-container d-flex flex-column justify-content-start align-items-start'>
                        <label className='signup-input-label' htmlFor="password-input">Password</label>
                        <input type="text" id='signup-password-input' value={password_input} onChange={(e)=>updatePasswordInput(e.target.value)} className='signup-inputs' />
                    </div>

                    <div className='input-container d-flex flex-column justify-content-start align-items-start'>
                        <label className='signup-input-label' htmlFor="password-input">Confirm Password</label>
                        <input type="text" id='signup-conformation-password-input' value={confirm_password_input} onChange={(e)=>updateConfirmPasswordInput(e.target.value)} className='signup-inputs' />
                    </div>

                    <button className='signup-submit-button' typeof='submit'>SignUp</button>

                    <div className='style-link Already have an account'>
                        <Link to='/' >Already have an account</Link>
                    </div>
                </form>

            </div>
        </div>
    )
}
