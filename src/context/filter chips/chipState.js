import { useState } from "react";
import ChipContext from "./chipContext";

const ChipState = (props) => {

    const s = {
        chips: []
    }

    const [stateOfChip, setState] = useState(s);

    const addChip = (value) => {
        setState(prevState => ({
            chips: [...prevState.chips, value]
        }));
    }

    const removeChip = (value) => {
        setState(prevState => ({
            chips: prevState.chips.filter(chip => chip !== value)
        }));
    }
        
    return (
        <ChipContext.Provider value={{ stateOfChip, addChip, removeChip }}>
            {props.children}
        </ChipContext.Provider>
    )
}

export default ChipState;