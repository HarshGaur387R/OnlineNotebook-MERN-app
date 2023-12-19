import React from 'react'

export default function MyAccount() {
    return (
        <div className='my-account border-radius-30'>
            <h1>My Account</h1>
            <form className='my-account-form w-100 d-flex justify-content-center align-items-center flex-column'>
                <div className="my-account-input-container">
                    <label htmlFor="my-account-name-input" className="my-account-label">Name</label>
                    <input id='my-account-name-input' type="text" className="my-account-input" />
                </div>

                <div className="my-account-input-container ">
                    <label htmlFor="my-account-email-input" className="my-account-label">Email</label>
                    <input id='my-account-email-input' type="email" className="my-account-input" />
                </div>

                <div className="my-account-input-container">
                    <label htmlFor="my-account-password-input" className="my-account-label">Password</label>
                    <input id='my-account-password-input' type="password" className="my-account-input" />
                </div>

                <div className='add-component-btn text-end'>
                    <button type='button' className='adc-button mx-4' id='cancel-btn'>Cancel</button>
                    <button className='adc-button' type='submit' id='ok-btn'>Add</button>
                </div>
            </form>
        </div>
    )
}