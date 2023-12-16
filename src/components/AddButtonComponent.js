import React from 'react'

export default function AddButtonComponent(props) {

    const {addButtonState, updateAddButtonState} = props;

    return (
        <div onClick={()=>{updateAddButtonState(!addButtonState)}} className='floating-add-btn position-fixed d-flex justify-content-center align-items-center'>
            <button  type='button' id='floating-add-btn-btn'>
                <i className="fa-solid fa-plus" style={{ color: 'black' }}></i>
            </button>
        </div>
    )
}
