import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{

    const s = {
        name: "Home",
    }

    const [state, setState] = useState(s);
    const update = (value)=>{
        setState({
            name:value
        })
    }

    return (
        
        <NoteContext.Provider value={[state,update]}>
            {props.children} 
        </NoteContext.Provider>
    )
}

export default NoteState;