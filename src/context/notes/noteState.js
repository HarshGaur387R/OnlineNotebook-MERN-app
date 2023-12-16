import NoteContext from "./noteContext";
import { useState } from "react";
import config from './../../configs/config';
import { useContext } from "react";
import UserContext from "../user/userContext";

const NoteState = (props) => {
    
    const {setIsUserLoggedInState} = useContext(UserContext);

    const s = {
        notes: []
    }

    const [notesState, setState] = useState(s);

    const addNote = async (title,description,tag) => {

        const tokenInStorage = localStorage.getItem('token');

        if(!tokenInStorage){
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
            body: JSON.stringify({title,description,tag})
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

    const fetchNotes = async (value) => {

        const tokenInStorage = localStorage.getItem('token');

        if(!tokenInStorage){
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

            setState({notes: responseDATA.notes});
            return;

        } catch (error) {
            console.error('unknown error: failed to fetch notes', error);
            alert('failed to fetch notes');
            return;
        }
    }

    return (

        <NoteContext.Provider value={{ notesState, addNote, fetchNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;