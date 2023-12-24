import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/user/userContext'
import { useState } from 'react';

export default function MyAccount() {

    const { updateUser, userData } = useContext(UserContext);
    const [email, updateEmail] = useState(userData.email);
    const [name, updateName] = useState(userData.name);
    const [password, updatePassword] = useState('');

    return (
            <div className='my-account col border-radius-30'>
                <h1>My Account</h1>
                <form onSubmit={async (e) => { e.preventDefault(); await updateUser(name, email, password) }} className='my-account-form w-100 d-flex justify-content-center align-items-center flex-column'>
                    <div className="my-account-input-container">
                        <label htmlFor="my-account-name-input" className="my-account-label">Name</label>
                        <input value={name} onChange={(e) => updateName(e.target.value)} id='my-account-name-input' type="text" className="my-account-input" />
                    </div>

                    <div className="my-account-input-container ">
                        <label htmlFor="my-account-email-input" className="my-account-label">Email</label>
                        <input value={email} onChange={(e) => updateEmail(e.target.value)} id='my-account-email-input' type="email" className="my-account-input" />
                    </div>

                    <div className="my-account-input-container">
                        <label htmlFor="my-account-password-input" className="my-account-label">Password</label>
                        <input value={password} onChange={(e) => updatePassword(e.target.value)} id='my-account-password-input' type="password" className="my-account-input" />
                    </div>

                    <div className='add-component-btn text-end'>
                        <button type='button' className='adc-button mx-4' id='cancel-btn'>Cancel</button>
                        <button className='adc-button' type='submit' id='ok-btn'>Update</button>
                    </div>
                </form>
            </div>
    )
}