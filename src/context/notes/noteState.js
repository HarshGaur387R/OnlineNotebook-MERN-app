import NoteContext from "./noteContext";
import { useState } from "react";
import config from './../../configs/config';
import { useContext } from "react";
import UserContext from "../user/userContext";

const NoteState = (props) => {

    const { setIsUserLoggedInState } = useContext(UserContext);

    const s = {
        notes: []
    }

    const [notesState, setState] = useState(s);

    const addNote = async (title, description, tag) => {

        const tokenInStorage = localStorage.getItem('token');

        if (!tokenInStorage) {
            alert('Please Login again');
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
                alert('failed to add data');
                return;
            }

            setState(prevState => ({
                notes: [...prevState.notes, responseDATA.note]
            }));

            alert('Note added successfully');

            return;
        } catch (error) {
            console.error('unknown error: failed to add data', error);
            alert('failed to add data');
            return;
        }
    }


    const updateNote = async (noteId, title, description, tag) => {

        const tokenInStorage = localStorage.getItem('token');

        if (!tokenInStorage) {
            alert('Please Login again');
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
                alert('Note note found!');
                return;
            }

            const responseJSON = await fetch(`${config.HOST_URL}/api/v1/notes/update`, requestOptions);
            const responseDATA = await responseJSON.json();

            if (!responseDATA.success) {
                console.error('failed to update note', responseDATA.error);
                alert('failed to update note');
                return;
            }

            const newNotes = [...notesState.notes];
            newNotes[noteIndex] = responseDATA.note;
            setState({ notes: newNotes });

            alert('Note updated successfully');
            return;

        } catch (error) {
            console.error('unknown error: failed to update note', error);
            alert('failed to update note');
            return;
        }
    }


    const deleteNote = async (noteId) => {

        const tokenInStorage = localStorage.getItem('token');

        if (!tokenInStorage) {
            alert('Please Login again');
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
                alert('failed to delete note');
                return;
            }

            const newNotes = notesState.notes.filter((obj) => obj._id !== noteId);
            setState({ notes: newNotes });

            alert(responseDATA.msg);
            return;

        } catch (error) {
            console.error('unknown error: failed to delete note', error);
            alert('failed to delete note');
            return;
        }

    }

    const fetchNotes = async (value) => {

        const tokenInStorage = localStorage.getItem('token');

        if (!tokenInStorage) {
            alert('Please Login again');
            setIsUserLoggedInState(false);
            return;
        }

        const requestOptions = {
            method: 'GET',
            'Content-Type': 'application/json',
            headers: { 'Authorization': 'Bearer ' + tokenInStorage }
        }

        try {
            const responseJSON = await fetch(`${config.HOST_URL}/api/v1/notes/fetch-notes`, requestOptions);
            const responseDATA = await responseJSON.json();

            if (!responseDATA.success) {
                console.error('failed to fetch notes', responseDATA.error);
                alert('failed to fetch notes');
                return;
            }

            setState({ notes: responseDATA.notes });
            return;

        } catch (error) {
            console.error('unknown error: failed to fetch notes', error);
            alert('failed to fetch notes');
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