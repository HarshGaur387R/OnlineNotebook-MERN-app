import React, { useEffect } from 'react'
import FilterChipContainer from './FilterChipContainer'
import NotesItem from './NotesItem'
import AddButtonComponent from './AddButtonComponent'
import { useContext } from 'react'
import NoteContext from '../context/notes/noteContext'

export default function Home() {

  const { notesState, fetchNotes, addNotes } = useContext(NoteContext);

  useEffect(() => {
    const func = async () => {
      await fetchNotes();
    }
    func();
  }, []);

  return (
    <div className='Home'>
      <FilterChipContainer>
      </FilterChipContainer>

      <div className='row align-items-center justify-content-center gap-3'>
       {notesState.notes? notesState.notes.map((v,i)=>{return <NotesItem key={i} title={v.title} tag={v.tag} description={v.description}></NotesItem>}) :''}
      </div>

      <AddButtonComponent></AddButtonComponent>
    </div>
  )
}