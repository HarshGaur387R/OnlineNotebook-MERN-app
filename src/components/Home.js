import React from 'react'
import { useContext } from 'react'
import NoteContext from './../context/notes/noteContext';
import { useEffect } from 'react';

export default function Home() {

  const noteVars = useContext(NoteContext);
  useEffect(() => {
    noteVars[1]('Home');
  }, [])

  return (
    <div className='Home'>
      <div>This is {noteVars[0].name}</div>
    </div>
  )
}