import React from 'react'
import ProfileNav from './ProfileNav'
import MyAccount from './MyAccount'
export default function Profile() {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 gap-5'>
     <ProfileNav></ProfileNav>
     <MyAccount></MyAccount>
    </div>
  )
}