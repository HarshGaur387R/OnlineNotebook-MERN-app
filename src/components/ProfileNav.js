import React from 'react'
import { useContext } from 'react';
import UserContext from '../context/user/userContext';

export default function ProfileNav(props) {

    const updateMyAccountState = props.updateMyAccountState;
    const showMyAccountState = props.showMyAccountState;

    const {logoutUser} = useContext(UserContext);

    return (
        <div className='profile-nav d-flex flex-column justify-content-between align-items-center p-5 border-radius-30'>
            <div className="profile-options">
                <div className={`profile-nav-btn-container col justify-content-center align-items-center ${showMyAccountState? 'profile-nav-active':''}`}>
                    <button onClick={()=>{updateMyAccountState(true)}} type='button' id='My-Account-btn' className='profile-nav-btn'><i className="fa-regular fa-user"></i>My Account</button>
                </div>

                <div className={`profile-nav-btn-container col justify-content-center align-items-center my-4 ${!showMyAccountState? 'profile-nav-active':''}`}>
                    <button onClick={()=>{updateMyAccountState(false)}} type='button' id='Notes-Data-btn' className='profile-nav-btn'><i className="fa-regular fa-note-sticky"></i>Notes Data</button>
                </div>
            </div>

            <div className="profile-nav-btn-container">
                <button onClick={()=>{logoutUser()}} type='button' id='Logout-btn' className='profile-nav-btn'><i className="fa-solid fa-arrow-right-from-bracket"></i>Log Out</button>
            </div>
        </div>
    )
}