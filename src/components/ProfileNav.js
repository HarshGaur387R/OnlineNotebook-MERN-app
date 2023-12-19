import React from 'react'

export default function ProfileNav() {
    return (
        <div className='profile-nav d-flex flex-column justify-content-between align-items-center p-5 border-radius-30'>
            <div className="profile-options">
                <div className='profile-nav-btn-container col justify-content-center align-items-center'>
                    <button type='button' id='My-Account-btn' className='profile-nav-btn'><i className="fa-regular fa-user"></i>My Account</button>
                </div>

                <div className='profile-nav-btn-container col justify-content-center align-items-center pt-2'>
                    <button type='button' id='Notes-Data-btn' className='profile-nav-btn'><i className="fa-regular fa-note-sticky"></i>Notes Data</button>
                </div>
            </div>

            <div className="profile-nav-btn-container">
                <button type='button' id='Logout-btn' className='profile-nav-btn'><i className="fa-solid fa-arrow-right-from-bracket"></i>Log Out</button>
            </div>
        </div>
    )
}