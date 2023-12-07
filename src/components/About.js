import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react';
import NoteContext from '../context/notes/noteContext'

export default function About() {

  const noteVars = useContext(NoteContext);
  useEffect(() => {
    noteVars[1]('About');
  })

  return (
    <div className='About'>
      <div>This is {noteVars[0].name}</div>
    </div>
  )
}
