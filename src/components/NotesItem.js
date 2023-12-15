import React from 'react'

export default function NotesItem(props) {
    return (
            <div className="card text-dark bg-warning mb-3" style={{maxWidth: '18rem'}}>
                <div className="card-header">{props.tag}</div>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <div className='icons-container d-flex column align-items-center justify-content-center gap-3'>
                    <i className="fa-solid fa-trash" style={{cursor:'pointer'}}></i>
                    <i className="fa-regular fa-pen-to-square" style={{cursor:'pointer'}}></i>
                    </div>
                </div>
            </div>
    )
}