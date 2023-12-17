import React, { useState, useEffect } from 'react'

export default function EditNote(props) {
    const modalId = props.modalId; // Retrieve the unique modal id

    const [title, updateTitle] = useState(props.title);
    const [description, updateDescription] = useState(props.description);
    const [tag, updateTag] = useState(props.tag);


    useEffect(() => {

        const resetInputValues = () => {
            updateTitle(props.title);
            updateDescription(props.description);
            updateTag(props.tag);
        };
        // Reset input values when the modal is hidden
        const modalElement = document.getElementById(modalId);
        modalElement.addEventListener('hidden.bs.modal', resetInputValues);

        // Cleanup the event listener when the component unmounts
        return () => {
            modalElement.removeEventListener('hidden.bs.modal', resetInputValues);
        };
    }, [modalId, props]);

    return (
        <div>
            <div className="modal fade text-dark" id={modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex flex-column gap-3">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" value={title} onChange={(e) => updateTitle(e.target.value)} />
                                <label htmlFor="floatingInput">Title</label>
                            </div>
                            <div className="form-floating">
                                <textarea className="form-control" id="floatingTextarea2" style={{ height: "100px" }} value={description} onChange={(e) => updateDescription(e.target.value)}></textarea>
                                <label htmlFor="floatingTextarea2">Description</label>
                            </div>
                            <div className="form-floating">
                                <input type="text" className="form-control" id="floatingPassword" value={tag} onChange={(e) => { updateTag(e.target.value) }} />
                                <label htmlFor="floatingPassword">Tag</label>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
