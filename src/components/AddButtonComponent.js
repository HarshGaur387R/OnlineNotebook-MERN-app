import React from 'react'

export default function AddButtonComponent() {
    return (
        <div className='floating-add-btn position-fixed d-flex justify-content-center align-items-center'>
            <button type='button' id='floating-add-btn-btn'>
                <i className="fa-solid fa-plus" style={{ color: 'black' }}></i>
            </button>
        </div>
    )
}
