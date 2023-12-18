import React from 'react'
import EditNote from './EditNote'
import { useContext } from 'react';
import NoteContext from '../context/notes/noteContext';

export default function NotesItem(props) {
    const modalId = `exampleModal-${props._id}`; // Unique id for each NotesItem
    const { deleteNote } = useContext(NoteContext);

    return (

        <div className="card text-dark bg-warning mb-3" style={{ maxWidth: '18rem' }}>
            <div className="card-header">{props.tag}</div>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>

                <div className='icons-container d-flex column align-items-center justify-content-center gap-3'>
                    <button onClick={(e)=>{e.preventDefault(); deleteNote(props._id)}} id='delete-btn' className='btn btn-primary icon-btn' type='button'>
                        <i className="fa-solid fa-trash" style={{ cursor: 'pointer' }}></i>
                    </button>

                    <button id='edit-btn' className="btn btn-primary icon-btn" data-bs-toggle="modal" data-bs-target={`#${modalId}`} type='button'>
                        <i className="fa-regular fa-pen-to-square" style={{ cursor: 'pointer' }}></i>
                    </button>
                </div>
            </div>
            <EditNote modalId={modalId} _id={props._id} title={props.title} description={props.description} tag={props.tag}></EditNote>
        </div>
    )
}