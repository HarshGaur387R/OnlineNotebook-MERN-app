import React, { useState } from 'react'
import NoteContext from '../context/notes/noteContext';
import { useContext } from 'react';

export default function AddComponent(props) {

    const {addNote} = useContext(NoteContext);;

    const { addButtonState, updateAddButtonState } = props;

    const [titleState, updateTitleState] = useState('');
    const [descriptionState, updateDescriptionState] = useState('');
    const [tagState, updateTagState] = useState('');

    return (
        <div className='Add-component-container d-flex flex-column justify-content-center align-content-center'>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <form onSubmit={async (e)=>{e.preventDefault(); await addNote(titleState,descriptionState,tagState); updateAddButtonState(!addButtonState)}} className='AddComponent d-flex flex-column justify-content-start align-items-start gap-3'>
                    <h1 style={{ color: 'yellow' }}>Add Note</h1>

                    <div className="ac-inputs-labels-container d-flex justify-content-start align-items-start flex-column gap-2">
                        <label htmlFor="ac-note-title">Title</label>

                        <div className='ac-inputs-container'>
                            <input required value={titleState} onChange={(e)=>{updateTitleState(e.target.value)}} type="text" id='ac-note-title' minLength={1}/>
                        </div>
                    </div>

                    <div className="ac-inputs-labels-container d-flex justify-content-start align-items-start flex-column gap-2">
                        <label htmlFor="ac-note-content">Description</label>

                        <div className='ac-inputs-container'>
                            <textarea required value={descriptionState} onChange={(e)=>{updateDescriptionState(e.target.value)}} name="ac-note-content" id="ac-note-content" cols="30" rows="3" minLength={1}></textarea>
                        </div>
                    </div>

                    <div className="ac-inputs-labels-container  d-flex justify-content-start align-items-start flex-column gap-2">
                        <label htmlFor="ac-note-tag">Tag</label>

                        <div className='ac-inputs-container' style={{ width: '300px' }}>
                            <input required value={tagState} onChange={(e)=>{updateTagState(e.target.value)}} type="text" id='ac-note-tag' minLength={1} maxLength={18} />
                        </div>
                    </div>


                    <div className='add-component-btn text-end'>
                        <button type='button' onClick={() => { updateAddButtonState(!addButtonState) }} className='adc-button mx-4' id='cancel-btn'>Cancel</button>
                        <button className='adc-button' type='submit' id='ok-btn'>Add</button>
                    </div>
                </form>
            </div>

        </div>
    )
}