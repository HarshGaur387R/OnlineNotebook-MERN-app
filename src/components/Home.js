import React, { useEffect, useState } from 'react'
import FilterChipContainer from './FilterChipContainer'
import NotesItem from './NotesItem'
import AddButtonComponent from './AddButtonComponent'
import { useContext } from 'react'
import NoteContext from '../context/notes/noteContext'
import AddComponent from './AddComponent';

export default function Home() {

  const { notesState, fetchNotes } = useContext(NoteContext);
  const [addButtonState, updateAddButtonState] = useState(false);

  useEffect(() => {
    const func = async () => {
      await fetchNotes();
    }
    func();
  }, []);

  return (
    <div className='Home'>

      {!addButtonState ? '' : <AddComponent addButtonState={addButtonState} updateAddButtonState={updateAddButtonState} />}

      {!addButtonState ? <FilterChipContainer /> : ''}

      {
        !addButtonState ?
          <div className='row align-items-center justify-content-center gap-3'>
            {notesState.notes ? notesState.notes.map((v, i) => { return <NotesItem key={i} title={v.title} tag={v.tag} description={v.description} _id={v._id}></NotesItem> }) : ''}
          </div> : ''
      }

      {!addButtonState ? <AddButtonComponent addButtonState={addButtonState} updateAddButtonState={updateAddButtonState}></AddButtonComponent> : ''}

    </div>
  )
}