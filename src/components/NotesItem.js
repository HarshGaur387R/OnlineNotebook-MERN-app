import React from 'react'
import EditNote from './EditNote'

export default function NotesItem(props) {
    const modalId = `exampleModal-${props._id}`; // Unique id for each NotesItem

    return (
        <div className="card text-dark bg-warning mb-3" style={{ maxWidth: '18rem' }}>
            <div className="card-header">{props.tag}</div>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>

                <div className='icons-container d-flex column align-items-center justify-content-center gap-3'>
                    <button id='delete-btn' className='btn btn-primary icon-btn' type='submit'>
                        <i className="fa-solid fa-trash" style={{ cursor: 'pointer' }}></i>
                    </button>

                    <button id='edit-btn' className="btn btn-primary icon-btn" data-bs-toggle="modal" data-bs-target={`#${modalId}`} type='submit'>
                        <i className="fa-regular fa-pen-to-square" style={{ cursor: 'pointer' }}></i>
                    </button>
                </div>
            </div>
            <EditNote modalId={modalId} id={props._id} title={props.title} description={props.description} tag={props.tag}></EditNote>
        </div>
    )
}