import React from 'react'
import { useContext } from 'react'
import NoteContext from './../context/notes/noteContext';
import { useEffect } from 'react';

export default function Home() {

  const noteVars = useContext(NoteContext);
  useEffect(() => {
    noteVars.update('Home');
  }, [])

  return (
    <div className='Home'>
      <div>This is {noteVars.state.name}</div>
    </div>
  )
}