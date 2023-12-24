import React from 'react'
import ProfileNav from './ProfileNav'
import MyAccount from './MyAccount'
import NotesData from './NotesData';
import { useState } from 'react'

export default function Profile() {

  const [showMyAccountState, updateMyAccountState] = useState(true);

  return (
    <div className='row justify-content-center align-items-center vh-100 gap-3'>
      <ProfileNav updateMyAccountState={updateMyAccountState} showMyAccountState={showMyAccountState}></ProfileNav>

      {showMyAccountState ? <MyAccount ></MyAccount> : <NotesData></NotesData>}

    </div>
  )
}