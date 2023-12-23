import NoteContext from "./noteContext";
import { useState } from "react";
import config from './../../configs/config';
import { useContext } from "react";
import UserContext from "../user/userContext";
import AlertContext from "../alert/alertContext";

const NoteState = (props) => {

    const { setIsUserLoggedInState } = useContext(UserContext);
    const { setAlertState } = useContext(AlertContext);

    const s = {
        notes: []
    }

    const [notesState, setState] = useState(s);

    const addNote = async (title, description, tag) => {

        const tokenInStorage = localStorage.getItem('token');

        if (!tokenInStorage) {
            setAlertState({ show: true, heading: 'Error Occurred!', para: 'Please login again', variant: 'danger' })
            setIsUserLoggedInState(false);
            return;
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + tokenInStorage
            },
            body: JSON.stringify({ title, description, tag })
        }

        try {
            const responseJSON = await fetch(`${config.HOST_URL}/api/v1/notes/add`, requestOptions);
            const responseDATA = await responseJSON.json();

            if (!responseDATA.success) {
                console.error('failed to add data', responseDATA.error);
                setAlertState({ show: true, heading: 'Error Occurred!', para: 'Failed to add data', variant: 'danger' })
                return;
            }

            setState(prevState => ({
                notes: [...prevState.notes, responseDATA.note]
            }));

            setAlertState({ show: true, heading: 'Success!', para: 'Note added successfully', variant: 'success' })

            return;
        } catch (error) {
            console.error('unknown error: failed to add data', error);
            setAlertState({ show: true, heading: 'Error Occurred!', para: 'UnknownError: Failed to add data', variant: 'danger' })
            return;
        }
    }


    const updateNote = async (noteId, title, description, tag) => {

        const tokenInStorage = localStorage.getItem('token');

        if (!tokenInStorage) {
            setAlertState({ show: true, heading: 'Error Occurred!', para: 'Please login again', variant: 'danger' })
            setIsUserLoggedInState(false);
            return;
        }

        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + tokenInStorage
            },
            body: JSON.stringify({ noteId, title, description, tag })
        }

        try {
            const noteIndex = notesState.notes.findIndex((v, i) => v._id === noteId);

            if (noteIndex === -1) {
                setAlertState({ show: true, heading: 'Error Occurred!', para: 'Note note found.', variant: 'danger' })
                return;
            }

            const responseJSON = await fetch(`${config.HOST_URL}/api/v1/notes/update`, requestOptions);
            const responseDATA = await responseJSON.json();

            if (!responseDATA.success) {
                console.error('failed to update note', responseDATA.error);
                setAlertState({ show: true, heading: 'Error Occurred!', para: 'Failed to update note.', variant: 'danger' })
                return;
            }

            const newNotes = [...notesState.notes];
            newNotes[noteIndex] = responseDATA.note;
            setState({ notes: newNotes });
            setAlertState({ show: true, heading: 'Success!', para: 'Note updated successfully.', variant: 'success' })
            return;

        } catch (error) {
            console.error('unknown error: failed to update note', error);
            setAlertState({ show: true, heading: 'Error Occurred!', para: 'Failed to update note.', variant: 'success' })
            return;
        }
    }


    const deleteNote = async (noteId) => {

        const tokenInStorage = localStorage.getItem('token');

        if (!tokenInStorage) {
            setAlertState({ show: true, heading: 'Error Occurred!', para: 'Please login again', variant: 'danger' })
            setIsUserLoggedInState(false);
            return;
        }

        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + tokenInStorage
            },
            body: JSON.stringify({ noteId })
        }

        try {
            const responseJSON = await fetch(`${config.HOST_URL}/api/v1/notes/delete`, requestOptions);
            const responseDATA = await responseJSON.json();

            if (!responseDATA.success) {
                console.error('failed to delete note', responseDATA.error);
                setAlertState({ show: true, heading: 'Error Occurred!', para: 'Failed to delete note', variant: 'danger' })
                return;
            }

            const newNotes = notesState.notes.filter((obj) => obj._id !== noteId);
            setState({ notes: newNotes });

            setAlertState({ show: true, heading: 'Success!', para: 'Note deleted successfully.', variant: 'success' })
            return;

        } catch (error) {
            setAlertState({ show: true, heading: 'Error Occurred!', para: 'Unknown error: Failed to delete note', variant: 'danger' })
            console.error('unknown error: failed to delete note', error);
            return;
        }
    }

    const fetchNotes = async (value) => {

        const tokenInStorage = localStorage.getItem('token');

        if (!tokenInStorage) {
            setAlertState({ show: true, heading: 'Error Occurred!', para: 'Please login again', variant: 'danger' })
            setIsUserLoggedInState(false);
            return;
        }

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + tokenInStorage }
        }

        try {
            const responseJSON = await fetch(`${config.HOST_URL}/api/v1/notes/fetch-notes?search=${value ? value : ''}`, requestOptions);
            const responseDATA = await responseJSON.json();

            if (!responseDATA.success) {
                console.error('failed to fetch notes', responseDATA.error);
                setAlertState({ show: true, heading: 'Error Occurred!', para: 'Failed to fetch notes', variant: 'danger' })
                return;
            }

            setState({ notes: responseDATA.notes });
            return;

        } catch (error) {
            setAlertState({ show: true, heading: 'Error Occurred!', para: 'Unknown error: Failed to fetch notes', variant: 'danger' })
            return;
        }
    }

    return (

        <NoteContext.Provider value={{ notesState, addNote, fetchNotes, updateNote, deleteNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;